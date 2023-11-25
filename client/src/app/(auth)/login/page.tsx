import { Button } from "@/components/Button";
import { TextInput } from "@/components/Inputs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

const LoginPage = () => {
  return (
    <div className="w-full max-w-sm rounded-lg border px-6 py-4">
      <div>Login</div>
      <form className="space-y-2">
        <TextInput />
        <TextInput />
        <Button>Button</Button>
      </form>
    </div>
  );
};

export default LoginPage;
