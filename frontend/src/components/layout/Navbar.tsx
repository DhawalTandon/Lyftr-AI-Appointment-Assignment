export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🌍</span>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              Lyftr AI
            </h1>

            <p className="text-xs text-slate-500">
              Appointment Booking System
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium">
          Admin
        </div>
      </div>
    </header>
  );
}