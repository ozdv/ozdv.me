const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex w-full justify-center pt-24">{children}</div>
  );
};

export default AuthLayout;
