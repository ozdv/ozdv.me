import clsx from "clsx";

type Props = {
  className?: string;
};

const Header = (props: Props) => {
  const { className } = props;
  return (
    <header
      className={clsx(
        // "fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between bg-zinc-900 px-4",
        "border-zinc-900/7.5 fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 border-b bg-zinc-900 px-4 transition sm:px-6",
        className
      )}
    >
      <div className="border-zinc-900/7.5 absolute inset-x-0 top-full h-px transition" />
      <div className="">logo</div>
      <nav className="">nav</nav>
    </header>
  );
};

export default Header;
