import GlassCard from "../components/common/GlassCard";
import GlassButton from "../components/common/GlassButton";

interface BusinessDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function BusinessDialog({
  open,
  onClose,
}: BusinessDialogProps) {

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0
        z-50
        flex items-center justify-center
        bg-black/30
        backdrop-blur-md
      "
    >

      <GlassCard className="w-full max-w-2xl">

        <h2 className="text-2xl font-bold">
          Business Settings
        </h2>

        <p className="mt-2 text-slate-500">
          Configure your business information.
        </p>

        <div className="mt-10 space-y-6">

          <div className="rounded-xl border border-white/20 p-4">
            Timezone
          </div>

          <div className="rounded-xl border border-white/20 p-4">
            Working Hours
          </div>

          <div className="rounded-xl border border-white/20 p-4">
            Working Days
          </div>

          <div className="rounded-xl border border-white/20 p-4">
            Holidays
          </div>

        </div>

        <div className="mt-10 flex justify-end gap-4">

          <GlassButton onClick={onClose}>
            Cancel
          </GlassButton>

          <GlassButton>
            Save
          </GlassButton>

        </div>

      </GlassCard>

    </div>
  );
}