import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
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
        &#10008;
      </button>

      <Link smooth to="/#home" className="nav-link" onClick={closeSidebar}>
        Home
      </Link>
      <Link smooth to="/#projects" className="nav-link" onClick={closeSidebar}>
        Projects
      </Link>
      <Link smooth to="/#skills" className="nav-link" onClick={closeSidebar}>
        Skills
      </Link>
      <Link smooth to="/#about" className="nav-link" onClick={closeSidebar}>
        About
      </Link>
      <Link smooth to="/blogs" onClick={closeSidebar}>
        Blogs
      </Link>
      <Link smooth to="/#contact" className="nav-link" onClick={closeSidebar}>
        Contact
      </Link>
    </div>
  );
};

export const Nav = ({ blog = false }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="navbar flex justify-between">
        <div className="group transition-colors duration-300 cursor-crosshair">
          <h1 className="text-(--primary) text-2xl group-hover:text-(--white)">
            {"{"}{" "}
            <span className="font-bold text-(--white) group-hover:text-(--primary)">
              SaFal
            </span>{" "}
            {"}."}
          </h1>
        </div>

        <ul className="nav-links">
          <li>
            <Link smooth to="/#home" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link smooth to="/#projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link smooth to="/#skills" className="nav-link">
              Skills
            </Link>
          </li>
          <li>
            <Link smooth to="/#about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link smooth to="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>
          <li>
            <Link smooth to="/#contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {!blog && (
            <a
              href="https://drive.google.com/uc?export=download&id=19l-yRFaEZd6YiNzxx49jTSVMfIzq1v2O"
              className="bg-(--primary) w-20 h-10 text-xl font-bold rounded-lg hover:opacity-80 hover:-translate-y-1 transition text-center content-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              My CV
            </a>
          )}

          <button
            className="sm:hidden p-2 w-10 h-10 rounded-lg hover:bg-[#110b0370] hover:-translate-y-1 active:rotate-45 transition"
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
