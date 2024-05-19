import clsx from "clsx";

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={clsx("mx-auto sm:max-w-7xl", className)} {...props} />;
}
