import Navbar from "../components/layout/Navbar";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-slate-100">
            <Navbar />

            <main className="mx-auto max-w-7xl space-y-6 p-8">

                <section className="grid grid-cols-12 gap-6">

                    <div className="col-span-4 rounded-2xl bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold">
                            Business Overview
                        </h2>
                    </div>

                    <div className="col-span-8 rounded-2xl bg-white p-6 shadow-sm">
                        <h2 className="text-xl font-semibold">
                            Calendar
                        </h2>
                    </div>

                </section>

                <section className="rounded-2xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold">
                        Available Slots
                    </h2>
                </section>

                <section className="rounded-2xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold">
                        Upcoming Appointments
                    </h2>
                </section>

            </main>
        </div>
    );
}