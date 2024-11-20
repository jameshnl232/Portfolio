import clsx from "clsx";
import { KeyTextField } from "@prismicio/client";

export default function Button({
  onClick,
  text,
  className,
}: {
  onClick?: () => void;
  text: KeyTextField;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 px-4 py-2 font-bold outline transition-transform ease-out hover:scale-105",
      )}
    >
      <span
        className={clsx(
          "absolute inset-0 -z-10 h-full translate-y-12 rounded bg-yellow-500 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
          "translate-y-15",
        )}
      />
      {text}
    </button>
  );
}
