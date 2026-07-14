import GlassButton from "../common/GlassButton";
import { Globe2 } from "lucide-react";
<Globe2 className="text-blue-600" size={30} />

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 px-6">
      <div
        className="
          glass-card
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          rounded-3xl
          px-6
        "
      >
        <div className="flex items-center gap-5">
          <span className="text-3xl">🌍</span>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Lyftr AI
            </h1>

            <p className="text-sm text-slate-500">
              Appointment Booking System
            </p>
          </div>
        </div>

        <GlassButton>
          Admin
        </GlassButton>
      </div>
    </header>
  );
}