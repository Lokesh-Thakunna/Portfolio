import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";

function App() {
  const [token, setToken] = useState(
    localStorage.getItem("adminToken")
  );

  return (
    <div className="bg-[#020617] text-white min-h-screen">
      {/* 🔐 ADMIN PANEL */}
      {token ? (
        <AdminDashboard token={token} setToken={setToken} />
      ) : (
        <>
          {/* 🌐 PUBLIC WEBSITE */}
          <Navbar />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
