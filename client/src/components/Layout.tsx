import { Footer } from "@/components/Footer";
import Header from "./Header";

export function Layout({
  children,
  showFooter = true,
}: {
  children: React.ReactNode;
  showFooter?: boolean;
}) {
  return (
    <>
      <Header className="" />
      <main className="flex-auto ">{children}</main>
      {showFooter && <Footer />}
    </>
  );
}
