import ContactForm from "@/components/ContactForm";
import { Container } from "@/components/Container";

const ContacPage = () => {
  return (
    <Container className="my-10">
      <section className="space-y-8 px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-6 text-center text-4xl font-bold leading-9 text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Contact me
          </h1>
          <p className="mt-2 text-lg text-slate-700 dark:text-slate-200">
            If you have any questions, feel free to reach out!
          </p>
        </div>
        <ContactForm />
      </section>
    </Container>
  );
};

export default ContacPage;
