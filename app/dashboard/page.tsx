"use client";

import Header from "../components/navigation/Header";
import { Toaster } from "@/components/ui/toaster";
import Footer from "../components/navigation/Footer";
import DashboardContent from "../components/dashboard_contents/DashboardContent";

const Dashboard = () => {
  return (
    <div className=" min-h-screen font-lora">
      <div className="flex flex-col min-h-screen justify-between">
        <div className="flex flex-col gap-6">
          <Header />
          <DashboardContent />
        </div>
        <div className="justify-end">
          <Footer />
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default Dashboard;
