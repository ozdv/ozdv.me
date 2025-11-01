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
    <Button variant="ghost" asChild size="sm">
      <Link href={href} {...props}>
        {label}
      </Link>
    </Button>
  );
};
