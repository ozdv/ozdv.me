import { Container } from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message sent!",
};

const SubmittedPage = () => {
  return (
    <Container className="my-10">
      <section className="space-y-8 sm:space-y-12">
        <div className="mx-auto flex max-w-2xl flex-col text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">
            Message sent!
          </h2>
          <p className="mt-2 text-lg text-slate-700 dark:text-slate-200">
            We will get back to you soon!
          </p>
        </div>
      </section>
    </Container>
  );
};

export default SubmittedPage;
