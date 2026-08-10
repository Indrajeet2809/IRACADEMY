import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiChevronDown,
} from "react-icons/fi";

const navigationItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Academics",
    path: "/academics",
    dropdown: true,
  },
  {
    label: "Teachers",
    path: "/teachers",
  },
  {
    label: "Gallery",
    path: "/gallery",
  },
  {
    label: "Notices",
    path: "/notices",
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          {/* Temporary Logo */}
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-900 text-lg font-bold text-white shadow-md">
            IR
          </div>

          <div className="leading-tight">
            <h1 className="text-xl font-bold tracking-tight text-blue-950">
              IRACADEMY
            </h1>

            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">
              School of Excellence
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => (
            <div key={item.path} className="relative group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-800"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-800"
                  }`
                }
              >
                {item.label}

                {item.dropdown && (
                  <FiChevronDown
                    size={15}
                    className="transition-transform group-hover:rotate-180"
                  />
                )}
              </NavLink>

              {/* Academics Dropdown */}
              {item.dropdown && (
                <div className="invisible absolute left-0 top-full mt-2 w-52 translate-y-2 rounded-xl border border-slate-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <Link
                    to="/academics/classes"
                    className="block rounded-lg px-4 py-3 text-sm text-slate-700 transition hover:bg-blue-50 hover:text-blue-800"
                  >
                    Classes
                  </Link>

                  <Link
                    to="/academics/facilities"
                    className="block rounded-lg px-4 py-3 text-sm text-slate-700 transition hover:bg-blue-50 hover:text-blue-800"
                  >
                    Facilities
                  </Link>

                  <Link
                    to="/academics/admissions"
                    className="block rounded-lg px-4 py-3 text-sm text-slate-700 transition hover:bg-blue-50 hover:text-blue-800"
                  >
                    Admissions
                  </Link>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition hover:bg-blue-50 hover:text-blue-800"
          >
            <FiSearch size={19} />
          </button>

          <Link
            to="/admissions"
            className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600 hover:shadow-md"
          >
            Admissions
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 lg:hidden"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-50 text-blue-800"
                    : "text-slate-700 hover:bg-slate-50 hover:text-blue-800"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="mt-3 border-t border-slate-100 pt-3">
            <Link
              to="/admissions"
              onClick={closeMenu}
              className="block rounded-lg bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-amber-600"
            >
              Admissions
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;