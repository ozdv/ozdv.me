// import clsx from "clsx";
// import Link from "next/link";

// type ButtonProps =
//   | React.ComponentPropsWithoutRef<typeof Link>
//   | (React.ComponentPropsWithoutRef<"button"> & { href?: undefined });

// export function Button({ className, ...props }: ButtonProps) {
//   className = clsx(
//     "inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70",
//     className
//   );

//   return typeof props.href === "undefined" ? (
//     <button className={className} {...props} />
//   ) : (
//     <Link className={className} {...props} />
//   );
// }

import clsx from "clsx";
import Link from "next/link";
import Icon from "./Icon";

const allBaseStyles =
  "group inline-flex items-center justify-center py-1.5 px-4 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 leading-6 transition-all transform";

const baseStyles = {
  solid: "rounded-full",
  outline: "rounded-full ring-1",
  default: "rounded-md shadow-sm",
};

const variantStyles = {
  solid: {
    default:
      "bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-slate-900 active:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-300 dark:focus-visible:outline-slate-300 dark:active:bg-slate-400",
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-400 focus-visible:outline-indigo-600 active:bg-indigo-500 dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-600 dark:active:bg-indigo-500",
  },
  outline: {
    default:
      "ring-slate-300 text-slate-700 hover:text-slate-900 hover:ring-slate-700 active:bg-slate-50 active:text-slate-800 focus-visible:outline-slate-300 focus-visible:ring-slate-300 " +
      "dark:ring-slate-600 dark:text-slate-200 dark:hover:text-white dark:hover:ring-slate-500 dark:hover:bg-slate-700 dark:active:bg-slate-800 dark:active:text-slate-100 dark:focus-visible:outline-slate-300 dark:focus-visible:ring-slate-300",
    primary:
      "ring-slate-300 text-slate-700 hover:text-slate-900 hover:ring-slate-700 active:bg-slate-50 active:text-slate-800 focus-visible:outline-slate-300 focus-visible:ring-slate-300",
  },
};

type ButtonProps = (
  | {
      variant?: "default";
      color?: keyof typeof variantStyles.solid;
    }
  | {
      variant?: "solid";
      color?: keyof typeof variantStyles.solid;
    }
  | {
      variant: "outline";
      color?: keyof typeof variantStyles.outline;
    }
) &
  (
    | (Omit<React.ComponentPropsWithoutRef<typeof Link>, "color"> & {
        icon?: string;
        iconStyle?: string;
        size?: "sm" | "base" | "lg";
      })
    | (Omit<React.ComponentPropsWithoutRef<"button">, "color"> & {
        icon?: string;
        iconStyle?: string;
        size?: "sm" | "base" | "lg";
        href?: undefined;
      })
  );

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= "default";
  props.color ??= "default";

  className = clsx(
    allBaseStyles,
    baseStyles[props.variant],
    props.variant === "outline"
      ? variantStyles.outline[props.color]
      : variantStyles.solid[props.color],
    className
  );

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}

export function IconButton({
  className = "",
  icon,
  iconStyle = "",
  size,
  ...props
}: ButtonProps) {
  let buttonStyles =
    "group rounded-full hover:cursor-pointer transition-colors duration-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 flex items-center justify-center";
  let iconStyles = "";
  let iconColor = "fill-zinc-500 dark:fill-zinc-200";

  switch (size) {
    case "sm":
      buttonStyles = buttonStyles + " " + "h-10 w-10 p-2";
      iconStyles = iconColor + " " + "h-8 w-8";
      break;
    case "lg":
      buttonStyles = "";
      iconStyles = "";
      break;
    default:
      buttonStyles = buttonStyles + " " + "sm:h-20 sm:w-20 h-14 w-14";
      iconStyles = iconColor + " " + "sm:h-14 sm:w-14 h-8 w-8";
      break;
  }

  return typeof props.href === "undefined" ? (
    <button className={className + " " + buttonStyles} {...props}>
      {icon ? (
        <Icon icon={icon} iconStyle={iconStyle + " " + iconStyles} />
      ) : null}
    </button>
  ) : (
    <Link className={className + buttonStyles} {...props}>
      {icon ? (
        <Icon icon={icon} iconStyle={iconStyle + " " + iconStyles} />
      ) : null}
    </Link>
  );
}
