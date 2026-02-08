"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
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
      .catch((e) => {
        toast.error("Error submitting. Please try again.", {
          description: e.message,
        });
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
        toast.success("Message sent successfully!");
      });
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <form onSubmit={onSubmit}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend className="mb-4 text-center text-3xl! font-bold">
              Contact me
            </FieldLegend>
            <FieldDescription className="text-center">
              If you have any questions, feel free to reach out!
            </FieldDescription>
            <FieldGroup>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>First name</FieldLabel>
                  <Input
                    required
                    id="first-name"
                    name="First name"
                    autoComplete="given-name"
                  />
                </Field>

                <Field>
                  <FieldLabel>Last name</FieldLabel>
                  <Input
                    required
                    id="last-name"
                    name="Last name"
                    autoComplete="family-name"
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input
                  required
                  id="email"
                  type="email"
                  name="Email"
                  autoComplete="email"
                />
              </Field>

              <input
                type="hidden"
                name="subject"
                value="Contact submission from ozdv.me"
              />

              <Field>
                <FieldLabel>Message</FieldLabel>
                <Textarea id="message" name="Message" rows={4} />
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>

        <div className="mt-8">
          <Button className="w-full" disabled={loading} type="submit">
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};
