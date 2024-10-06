"use client";
import { Button } from "./Button";
import { TextInput } from "./Inputs";

const LoginForm = () => {
  const handleLogin = (e: any) => {
    e.preventDefault();

    console.log("e:", e.target.email.value);
    console.log("e:", e.target.password.value);
  };

  return (
    <div className="w-full max-w-sm">
      <div className="text-center text-2xl font-bold leading-9 text-gray-900 dark:text-white">
        Sign in to your account
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <TextInput label="Email" name="email" autoComplete="email" required />
          <TextInput
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />

          <Button type="submit" className="w-full" color="primary">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
