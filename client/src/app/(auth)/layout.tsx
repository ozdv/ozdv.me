import Header from "@/components/Header";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50 dark:bg-zinc-900">
      <Header />
      <main className="mx-auto flex w-full justify-center pt-24">
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
