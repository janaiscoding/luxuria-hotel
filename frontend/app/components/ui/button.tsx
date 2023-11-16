"use client";
const Button = ({
  content,
  onClick,
  darkTheme,
  ariaLabel,
}: {
  content: string;
  onClick: () => void;
  darkTheme: boolean;
  ariaLabel: string;
}) => {
  return darkTheme ? (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="border border-solid py-2 px-4 bg-neutral-900 text-slate-50 hover:bg-neutral-800"
    >
      {content}
    </button>
  ) : (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="py-2 px-4 text-zinc-950 bg-orange-200 hover:bg-orange-300"
    >
      {content}
    </button>
  );
};

export default Button;
