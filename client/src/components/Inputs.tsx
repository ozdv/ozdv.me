import clsx from "clsx";
import { useId } from "react";

const formClasses =
  "bg-gray-50 z-10 block w-full appearance-none overflow-ellipsis rounded-lg border border-gray-200 focus:border-blue-500 focus:pb-2.5 focus:pt-4 focus:outline-none focus:ring-blue-500 bg-white px-[15px] pb-2.5 pt-4 text-sm focus:border-blue-500 focus:pb-2.5 focus:pt-4 focus:outline-none text-gray-900 placeholder:text-transparent autofill:text-sm autofill:text-gray-900";
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
          "absolute left-4 top-3.5 cursor-text text-sm text-gray-600 duration-300",
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
