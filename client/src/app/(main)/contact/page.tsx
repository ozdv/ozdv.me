import ContactForm from "@/components/ContactForm";
import { Container } from "@/components/Container";

const ContacPage = () => {
  return (
    <Container className="pb-16 pt-20 text-center">
      <div className="mb-8 text-center text-2xl font-bold leading-9 text-zinc-900 dark:text-white">
        Contact me
      </div>
      <ContactForm />
    </Container>
  );
};

export default ContacPage;
