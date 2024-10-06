const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mx-auto flex w-full justify-center pt-24">{children}</main>
  );
};

export default AuthLayout;
