import ContactForm from "@/components/ContactForm";
import { Container } from "@/components/Container";

const ContacPage = () => {
  return (
    <Container className="flex flex-1 flex-col px-4 pb-16 pt-16 text-center">
      <h1 className="mb-6 text-center text-4xl font-bold leading-9 text-zinc-900 dark:text-zinc-100 sm:text-4xl">
        Contact me
      </h1>
      <ContactForm />
    </Container>
  );
};

export default ContacPage;
