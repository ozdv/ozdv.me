import { ArrowRight } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { Button } from "../ui/button";

export const MainNavItem = ({
  href,
  label,
  ...props
}: LinkProps & {
  label: string;
}) => {
  return (
    <Button
      variant="ghost"
      asChild
      size="sm"
      className="group flex items-center gap-1 transition-all"
    >
      <Link href={href} {...props}>
        {label}
        <ArrowRight className="w-4 h-4 translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
      </Link>
    </Button>
  );
};
