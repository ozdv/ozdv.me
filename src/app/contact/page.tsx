import { ContactForm } from "@/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact me",
  description: "Contact me",
};

export default function Contact() {
  return (
    <div className="mx-auto px-6 py-4 h-[500vh] flex flex-col items-center gap-4">
      <ContactForm />
    </div>
  );
}
