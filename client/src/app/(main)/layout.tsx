import Header from "@/components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-white dark:bg-gray-900">
      <Header />
      <main className="mx-auto flex w-full justify-center">{children}</main>
    </div>
  );
};

export default MainLayout;
