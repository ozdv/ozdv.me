"use client";
import { useState } from "react";
import { Button } from "./Button";
import { TextArea, TextInput } from "./Inputs";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

function useContactForm() {
  const [status, setStatus] = useState<string>();

  const handleFormSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const injectedData: Record<string, string> = {
      // Here you can specify anything you need to inject dynamically, outside the form. For example:
      // DYNAMIC_DATA_EXAMPLE: 123,
    };

    const inputs = Array.from(e.currentTarget.elements) as HTMLFormElement[];
    const data = inputs
      .filter((input) => input.name)
      .reduce(
        (obj, input) => Object.assign(obj, { [input.name]: input.value }),
        {} as Record<string, string>
      );

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // It's likely a spam/bot submission, so bypass it to validate via captcha challenge old-school style
        if (response.status === 422) {
          // Append dynamically generated keys back to the form
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement("input");
            el.type = "hidden";
            el.name = key;
            el.value = injectedData[key];

            e.currentTarget.appendChild(el);
          });

          // Let's submit the form again and spammer/bot will be redirected to another page automatically
          // Submitting via javascript will bypass calling this function again
          e.currentTarget.submit();

          throw new Error("Please finish the captcha challenge");
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => setStatus("We'll be in touch soon."))
      .catch((err) => setStatus(err.toString()));
  };

  return { status, handleFormSubmit };
}

const ContactForm = () => {
  const { status, handleFormSubmit } = useContactForm();

  if (status) {
    return (
      <div className="mx-auto w-full max-w-sm">
        <div className="border border-gray-300 p-6 sm:rounded-md">
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">{status}</div>
        </div>
      </div>
    );
  }

  return (
    <form
      method="POST"
      action={FORM_ENDPOINT}
      onSubmit={handleFormSubmit}
      className="mx-auto w-full max-w-sm  space-y-6"
    >
      <TextInput name="name" label="Your name" required />
      <TextInput name="email" label="Email address" required />
      <TextArea name="message" label="Message" required />

      <div className="mb-4">
        <Button type="submit" className="w-full" color="primary">
          Send email
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
