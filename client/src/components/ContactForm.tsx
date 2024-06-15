"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./Button";
import { Field, FieldGroup, Fieldset, Label } from "./fieldset";
import { Input } from "./input";
import { Textarea } from "./textarea";

const ContactForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "bf03f3da-599a-4c6b-8ac5-2528dd56a001");
    setLoading(true);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((request) => request.json())
      .then((response) => {
        if (!response.success) throw new Error("Error submitting");
      })
      .catch((e) => console.error(e))
      .finally(() => {
        setLoading(false);
        router.push("/contact/submitted");
      });
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
      <Fieldset>
        <FieldGroup>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <Field>
              <Label>First name</Label>
              <Input
                required
                id="first-name"
                name="First name"
                autoComplete="given-name"
              />
            </Field>
            <Field>
              <Label>Last name</Label>
              <Input
                required
                id="last-name"
                name="Last name"
                autoComplete="family-name"
              />
            </Field>

            <div className="sm:col-span-2">
              <Field>
                <Label>Email</Label>
                <Input
                  required
                  id="email"
                  type="email"
                  name="Email"
                  autoComplete="email"
                />
              </Field>
            </div>

            <div className="sm:col-span-2">
              <Field>
                <Label>Message</Label>
                <Textarea id="message" name="Message" rows={4} />
              </Field>
            </div>
          </div>
        </FieldGroup>
      </Fieldset>
      <div className="mt-8">
        <Button className="w-full" disabled={loading} type="submit">
          {" "}
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
