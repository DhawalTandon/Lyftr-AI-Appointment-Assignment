import CardHeader from "../components/common/CardHeader";
import GlassCard from "../components/common/GlassCard";
import Navbar from "../components/layout/Navbar"

export default function Dashboard() {
    return (

        <div className="relative min-h-screen">
            <div className="aurora-background" />
            <Navbar />

            <main className="mx-auto max-w-7xl space-y-6 p-8">

                <section className="grid grid-cols-12 gap-6">

                    <GlassCard className="col-span-4">

    <CardHeader
        title="Business Overview"
        description="Working hours, holidays and business settings."
    />

</GlassCard>

                   <GlassCard className="col-span-8">

    <CardHeader
        title="Calendar"
        description="Manage appointments across multiple time zones."
    />

</GlassCard>

                </section>

               <GlassCard>

    <CardHeader
        title="Available Slots"
        description="Configure recurring and custom availability."
    />

</GlassCard>

                <GlassCard>

    <CardHeader
        title="Upcoming Appointments"
        description="View and manage scheduled bookings."
    />

</GlassCard>

            </main>
        </div>
    );
}