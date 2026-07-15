import { useState } from "react";
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
  const [timezone, setTimezone] = useState("Asia/Kolkata");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("18:00");

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0
        z-50
        flex items-center justify-center
        bg-black/30
        backdrop-blur-md
        p-6
      "
    >
      <GlassCard className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-slate-900">
          Business Settings
        </h2>

        <p className="mt-2 text-slate-500">
          Configure your business information.
        </p>

        <div className="mt-10 space-y-6">
          {/* Timezone */}

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Timezone
            </label>

            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="
                w-full
                rounded-2xl
                border
                border-white/30
                bg-white/20
                p-4
                text-slate-900
                backdrop-blur-xl
                outline-none
                transition
                hover:bg-white/25
                focus:border-blue-400
                focus:ring-2
                focus:ring-blue-300/40
              "
            >
              <option>Asia/Kolkata</option>
              <option>Asia/Dubai</option>
              <option>Europe/London</option>
              <option>America/New_York</option>
              <option>Asia/Tokyo</option>
              <option>Australia/Sydney</option>
            </select>
          </div>

          {/* Working Hours */}

          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-700">
              Working Hours
            </label>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="mb-2 text-xs text-slate-500">
                  Start Time
                </p>

                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/30
                    bg-white/20
                    p-4
                    backdrop-blur-xl
                    outline-none
                    transition
                    focus:border-blue-400
                    focus:ring-2
                    focus:ring-blue-300/40
                  "
                />
              </div>

              <div>
                <p className="mb-2 text-xs text-slate-500">
                  End Time
                </p>

                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/30
                    bg-white/20
                    p-4
                    backdrop-blur-xl
                    outline-none
                    transition
                    focus:border-blue-400
                    focus:ring-2
                    focus:ring-blue-300/40
                  "
                />
              </div>
            </div>
          </div>

          {/* Working Days */}

          <div className="rounded-2xl border border-white/20 p-5">
            <p className="font-semibold text-slate-700">
              Working Days
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Coming in the next step...
            </p>
          </div>

          {/* Holidays */}

          <div className="rounded-2xl border border-white/20 p-5">
            <p className="font-semibold text-slate-700">
              Holidays
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Coming in the next step...
            </p>
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