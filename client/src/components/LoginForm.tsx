"use client";
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
          {/* <Button type="submit">Button</Button> */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
