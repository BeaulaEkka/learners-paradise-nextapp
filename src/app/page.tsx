import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import Landing from "./(nondashboard)/landing/page";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">
        <Landing />
      </main>
    </motion.div>
  );
}
