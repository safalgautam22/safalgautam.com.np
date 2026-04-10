import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import hamburger from "../assets/hamburger.svg";

export const SideBar = ({ isOpen, closeSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-3/5 bg-(--black) z-50 p-6 flex flex-col gap-6
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"} sm:hidden `}
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
  const [isdark, setDark] = useState(true);

  const toggleDayMode = () => {
    document.documentElement.classList.toggle("day");
    setDark(!isdark);
  };

  return (
    <>
      <nav className="navbar flex justify-between items-center px-4 md:px-10 py-4 backdrop-blur-md">
        <a
          href="."
          className="group transition-colors duration-300 cursor-pointer"
        >
          <h1 className="text-(--primary) text-2xl group-hover:text-(--white)">
            {"{"}{" "}
            <span className="font-bold text-(--white) group-hover:text-(--primary)">
              SaFal
            </span>{" "}
            {"}."}
          </h1>
        </a>
        <ul className="nav-links hidden sm:flex gap-6">
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
          <button
            className="group transition w-auto border px-4 py-2 rounded-2xl hover:scale-110"
            onClick={toggleDayMode}
          >
            {isdark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-sun group-hover:rotate-45 active:rotate-45"
                viewBox="0 0 16 16"
              >
                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-moon-stars-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
              </svg>
            )}
          </button>

          <button
            className="sm:hidden p-2 w-10 h-10 rounded-lg hover:bg-(--black2) hover:-translate-y-1 active:rotate-45 transition border"
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
