import Navbar from "../layouts/NavBar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="h-screen bg-[#0B1120] p-6 text-white">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-gray-400 mt-2">Welcome to Assessly 🚀</p>
      </div>
    </>
  );
}
