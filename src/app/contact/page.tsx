import { ContactForm } from "@/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact me",
  description:
    "Get in touch with Cameron Davies about projects, roles, or anything else.",
};

export default function Contact() {
  return (
    <div className="mx-auto flex flex-col items-center gap-4 px-6 py-4">
      <ContactForm />
    </div>
  );
}
