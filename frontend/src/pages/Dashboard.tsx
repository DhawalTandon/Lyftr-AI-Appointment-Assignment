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
                        <h2 className="text-xl font-semibold">
                            Business Overview
                        </h2>
                    </GlassCard>

                    <GlassCard className="col-span-8">
                        <h2 className="text-xl font-semibold">
                            Calendar
                        </h2>
                    </GlassCard>

                </section>

                <GlassCard>
                    <h2 className="text-xl font-semibold">
                        Available Slots
                    </h2>
                 </GlassCard>

                <GlassCard>
                    <h2 className="text-xl font-semibold">
                        Upcoming Appointments
                    </h2>
                </GlassCard>

            </main>
        </div>
    );
}