import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import square_headshot from "../../../public/square_headshot.jpg";

export const HeroSection = () => {
  return (
    <div className="">
      <section className="relative">
        <div className="flex flex-col items-center pb-20 sm:mt-10 sm:pb-40">
          <Image
            src={square_headshot}
            alt="Cameron_davies_photo"
            className="max-w-[200px] rounded-full border shadow-2xl duration-500 hover:rotate-3"
            priority
          />

          <h1 className="mx-auto mt-10 text-2xl font-semibold text-primary sm:text-5xl">
            <div className="relative text-center text-2xl sm:hidden">
              Hey there!
            </div>
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 hidden sm:block">
                Hey there! I&apos;m Cameron 👋🏻
              </span>
              <span className="relative z-10 text-4xl font-bold sm:hidden">
                I&apos;m Cam 👋🏻
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-3/4 h-[0.7em] w-full fill-accent"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
            </span>
          </h1>
          <h3 className="mt-4 text-center text-base font-medium text-muted-foreground sm:text-2xl">
            I&apos;m a Software Engineer here in Canada 🇨🇦
          </h3>

          <div className="mt-4 flex justify-center gap-x-4 sm:mt-4">
            <div className="flex flex-row gap-6">
              <Button
                variant="ghost"
                size="icon"
                aria-label="GitHub"
                asChild
                className="hover:text-foreground text-muted-foreground transition-colors size-12"
              >
                <Link href="https://github.com/ozdv" target="_blank">
                  <Github className="size-8 " />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="LinkedIn"
                asChild
                className="hover:text-foreground text-muted-foreground transition-colors size-12"
              >
                <Link href="https://www.linkedin.com/in/ozdv/" target="_blank">
                  <Linkedin className="size-8" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-px left-0 w-full rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill fill-accent"
            ></path>
          </svg>
        </div>
      </section>
      <section className="w-full bg-accent">
        <div className="h-screen" />
      </section>
    </div>
  );
};
