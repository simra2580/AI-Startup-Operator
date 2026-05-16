import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";
import { useAuth } from "../contexts/AuthContext";

const Layout = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return <Outlet />;

  return (
    <div className="flex h-screen bg-black">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNavbar />
        <main className="flex-1 overflow-y-auto p-8">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Layout;