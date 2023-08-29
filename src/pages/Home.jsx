import Navbar from "../components/Navbar";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [sidebarOpen, setsidebarOpen] = useState(true);
  return (
    <div className="fixed w-screen">
      {/* navbar */}
      <Navbar
        sidebarOpenOnclick={() => {
          setsidebarOpen(!sidebarOpen);
        }}
      />
      {/* sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} />
    </div>
  );
};

export default Home;
