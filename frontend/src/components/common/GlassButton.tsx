import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface GlassButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function GlassButton({
  children,
  className,
  ...props
}: GlassButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-2xl",
        "bg-white/20",
        "backdrop-blur-xl",
        "border border-white/40",
        "px-5 py-2.5",
        "font-medium",
        "text-slate-900",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-0.5",
        "hover:bg-white/30",
        "hover:shadow-2xl",
        "hover:scale-[1.03]",
        "active:translate-y-0",
        className
      )}
    >
      {children}
    </button>
  );
}