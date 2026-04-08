import { useState } from "react";
import { Link } from "react-router-dom";
import CV from "../assets/CV.pdf";
import hamburger from "../assets/hamburger.svg";

export const SideBar = ({ isOpen, closeSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-3/5 bg-(--black) z-50 p-6 flex flex-col gap-6
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"} sm:hidden`}
    >
      <button
        className="self-end text-(--white) text-2xl font-bold hover:text-(--primary) active:rotate-45"
        onClick={closeSidebar}
      >
        X
      </button>

      <a href="/" className="nav-link" onClick={closeSidebar}>
        Home
      </a>
      <a href="#projects" className="nav-link" onClick={closeSidebar}>
        Projects
      </a>
      <a href="#skills" className="nav-link" onClick={closeSidebar}>
        Skills
      </a>
      <a href="#about" className="nav-link" onClick={closeSidebar}>
        About
      </a>
      <Link to="/blogs" onClick={closeSidebar}>
        Blogs
      </Link>
      <a href="#contact" className="nav-link" onClick={closeSidebar}>
        Contact
      </a>
    </div>
  );
};

export const Nav = ({ blog = false }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function DownloadCV() {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Safal_Gautam_CV.pdf";
    link.click();
  }

  return (
    <>
      <nav className="navbar">
        <div className="group transition-colors duration-300 cursor-crosshair">
          <h1 className="text-(--primary) text-2xl group-hover:text-(--white)">
            {"{"} <span className="font-bold text-(--white) group-hover:text-(--primary)">SaFal</span> {"}."}
          </h1>
        </div>

        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="./#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="./#skills" className="nav-link">
              Skills
            </a>
          </li>
          <li>
            <a href="./#about" className="nav-link">
              About
            </a>
          </li>
          <Link to="/blogs" className="nav-link">
            <li>Blogs</li>
          </Link>
          <li>
            <a href="./#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {!blog && (
            <button
              className="bg-(--primary) w-24 h-10 text-xl font-bold rounded-lg hover:bg-amber-600 hover:-translate-y-1 transition"
              onClick={DownloadCV}
            >
              My CV
            </button>
          )}

          <button
            className="sm:hidden p-2 w-12 h-12 rounded-lg hover:bg-[#110b0370] hover:-translate-y-1 active:rotate-45 transition"
            onClick={() => setSidebarOpen(true)}
          >
            <img src={hamburger} alt="Menu" />
          </button>
        </div>
      </nav>

      <SideBar
        isOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
      />
    </>
  );
};
