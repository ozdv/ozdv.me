import clsx from "clsx";
import { useId } from "react";

const formClasses =
  "z-10 block w-full appearance-none overflow-ellipsis rounded-md border-0 " +
  "dark:bg-white/5 bg-slate-100 px-[15px] pb-2.5 pt-4 text-sm text-gray-900 ring-1 ring-inset ring-white/10 " +
  "placeholder:text-transparent autofill:text-sm focus:pb-2.5 focus:pt-4 focus:outline-none " +
  "focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-white dark:autofill:text-white";

function Label({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={id}
      className="mb-3 block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  );
}

export function TextInput({
  label = "label",
  error,
  disabled,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"input">, "id"> & {
  label?: string;
  error?: string;
  disabled?: boolean;
}) {
  let id = useId();

  return (
    <div className={clsx("TextInput relative w-full")}>
      <input
        id={id}
        type="text"
        {...props}
        placeholder=" "
        disabled={disabled}
        className={clsx("peer", formClasses, {
          "!focus:border-gray-100 !active:border-gray-100 cursor-default !border-gray-100 !bg-gray-100":
            disabled,
          "!border-red-600 !bg-red-50": error,
          "pr-10": error,
        })}
      />

      <label
        htmlFor={id}
        className={clsx(
          "absolute left-4 top-3.5 cursor-text text-sm text-gray-600 duration-300 dark:text-white",
          "origin-[0] -translate-y-3 scale-75 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-autofill:-translate-y-3 peer-autofill:scale-75 peer-focus:-translate-y-3 peer-focus:scale-75",
          "transition-all"
        )}
      >
        {label}
      </label>

      {error && (
        <div className="flex flex-row items-center text-sm font-semibold text-red-600">
          {/* <Icon
            icon="warning-fill"
            size="16"
            iconStyle="fill-orange-600 mr-2"
          /> */}
          {error}
        </div>
      )}
    </div>
  );
}

export function TextArea({
  label = "label",
  error,
  disabled,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"textarea">, "id"> & {
  label?: string;
  error?: string;
  disabled?: boolean;
}) {
  let id = useId();

  return (
    <div className={clsx("TextInput relative w-full")}>
      <textarea
        id={id}
        {...props}
        placeholder=" "
        disabled={disabled}
        className={clsx("peer", formClasses, {
          "!focus:border-gray-100 !active:border-gray-100 cursor-default !border-gray-100 !bg-gray-100":
            disabled,
          "!border-red-600 !bg-red-50": error,
          "pr-10": error,
        })}
      />

      <label
        htmlFor={id}
        className={clsx(
          "absolute left-4 top-3.5 cursor-text text-sm text-gray-600 duration-300 dark:text-white",
          "origin-[0] -translate-y-3 scale-75 transform peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-autofill:-translate-y-3 peer-autofill:scale-75 peer-focus:-translate-y-3 peer-focus:scale-75",
          "transition-all"
        )}
      >
        {label}
      </label>

      {error && (
        <div className="flex flex-row items-center text-sm font-semibold text-red-600">
          {/* <Icon
            icon="warning-fill"
            size="16"
            iconStyle="fill-orange-600 mr-2"
          /> */}
          {error}
        </div>
      )}
    </div>
  );
}

export function SelectInput({
  label,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"select">, "id"> & { label: string }) {
  let id = useId();

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, "pr-8")} />
    </div>
  );
}
