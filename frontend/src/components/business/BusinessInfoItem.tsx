import type { ReactNode } from "react";

interface BusinessInfoItemProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export default function BusinessInfoItem({
  icon,
  label,
  value,
}: BusinessInfoItemProps) {
  return (
    <div className="flex items-start gap-3 py-3">
      <div className="text-blue-600">{icon}</div>

      <div>
        <p className="text-sm text-slate-500">
          {label}
        </p>

        <p className="font-medium text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}