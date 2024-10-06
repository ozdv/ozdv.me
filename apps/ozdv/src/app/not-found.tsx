import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <div className="relative flex items-center py-20 sm:py-36">
      <Container className="relative flex w-full flex-col items-center">
        <p className="text-3xl tracking-tight text-slate-900 dark:text-gray-200">
          404
        </p>
        <h1 className="mt-4 text-4xl font-medium tracking-tighter text-slate-900 dark:text-gray-200 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg tracking-tight text-slate-500 dark:text-gray-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button href="/" className="mt-8">
          Go back home
        </Button>
      </Container>
    </div>
  );
}
