"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  // useEffect(() => {
  // fetch("/api/test")
  //   .then((res: any) => res.json())
  //   .then((data: any) => console.log(data));

  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      {/* <Footer /> */}
    </>
  );
}
