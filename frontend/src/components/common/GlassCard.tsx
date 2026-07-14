import type { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}
export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <section
      className={clsx(
        "glass-card rounded-3xl p-8 transition-all duration-300",
        "hover:-translate-y-1",
        "hover:border-white/60",
        "hover:shadow-2xl",
        className
      )}
    >
      {children}
    </section>
  );
}