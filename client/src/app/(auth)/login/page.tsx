import { Button } from "@/components/Button";
import { TextInput } from "@/components/Inputs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

const LoginPage = () => {
  return (
    <div>
      <div>Login</div>
      <form className="">
        <TextInput />
        <TextInput />
        <Button />
      </form>
    </div>
  );
};

export default LoginPage;
