const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mx-auto flex min-h-full w-full items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
