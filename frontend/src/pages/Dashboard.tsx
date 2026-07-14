import { useState } from "react";
import BusinessDialog from "../dialogs/BusinessDialog";
import BusinessOverview from "../components/business/BusinessOverview";
import CardHeader from "../components/common/CardHeader";
import GlassCard from "../components/common/GlassCard";
import Navbar from "../components/layout/Navbar";

export default function Dashboard() {
  const [isBusinessDialogOpen, setIsBusinessDialogOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <div className="aurora-background" />

      <Navbar />

      <main className="mx-auto mt-28 max-w-7xl space-y-8 px-6 pb-10">

        <section className="grid grid-cols-12 gap-6">

          <GlassCard className="col-span-5">
            <BusinessOverview
    onConfigure={() => setIsBusinessDialogOpen(true)}
/>
          </GlassCard>

          <GlassCard className="col-span-8">

    <CardHeader
        title="Calendar"
        description="Manage appointments across multiple time zones."
    />

    <div className="mt-8 flex h-80 items-center justify-center rounded-2xl border border-dashed border-white/20">

        <span className="text-slate-500 transition-all duration-300"></span>

    </div>

</GlassCard>

        </section>

       <GlassCard>

    <CardHeader
        title="Available Slots"
        description="Configure recurring and custom availability."
    />

    <div className="mt-10 flex h-36 items-center justify-center rounded-2xl border border-dashed border-white/30">

        <span className="text-slate-500">
            No slots configured yet
        </span>

    </div>

</GlassCard>

        <GlassCard>

    <CardHeader
        title="Upcoming Appointments"
        description="View and manage scheduled bookings."
    />

    <div className="mt-10 flex h-36 items-center justify-center rounded-2xl border border-dashed border-white/30">

        <span className="text-slate-500">
            No appointments scheduled
        </span>

    </div>

</GlassCard>

      </main>
      <BusinessDialog
        open={isBusinessDialogOpen}
        onClose={() => setIsBusinessDialogOpen(false)}
      />
    </div>
  );
}