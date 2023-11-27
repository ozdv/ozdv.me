import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;
