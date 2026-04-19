import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
        <p className="text-gray-400 mt-1">
          Manage exams and monitor activity
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8">
        <StatCard title="Total Exams" value="0" />
        <StatCard title="Questions" value="0" />
        <StatCard title="Submissions" value="0" />
      </div>

      <div className="mt-10 p-6 rounded-xl bg-white/5 border border-white/10">
        <h2 className="text-lg font-semibold">Exams</h2>

        <p className="text-gray-400 mt-2 text-sm">
          Exams will appear here
        </p>
      </div>
    </DashboardLayout>
  );
}