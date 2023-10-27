"use client";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import SideNav from "./components/Sidenav";

export default function Home() {
  return (
    <main className="flex gap-12">
      <SideNav />

      <div>
        <h2 className="text-2xl ml-6 my-4">Revenue</h2>
        <BarChart />
      </div>

      <div>
        <h2 className="text-2xl ml-6 my-4">Power Consumption</h2>
        <PieChart />
      </div>
    </main>
  );
}
