import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from "../assets/logo/Cura-logo.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  const activeLink =
    "text-white font-semibold px-3 py-2 text-sm font-medium hover:border-b-4 focus:border-b-[3px] active:border-white";
  const normalLink =
    "text-gray-200 px-3 py-2 text-sm font-medium hover:border-b-4 focus:border-b-[3px] active:border-white";
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <nav className="bg-primary drop-shadow-md">
        <div className=" mx-auto px-4 sm:px-6 lg:px-2">
          <div className="flex items-center h-10 justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="w-16 h-6" src={Logo} alt="Logo" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 text-white ">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    Start
                  </NavLink>

                  <NavLink
                    to="/patienten"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    Patienten
                  </NavLink>

                  <NavLink
                    to="/kurven"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    Kurven
                  </NavLink>

                  <NavLink
                    to="/einstellungen"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    Einstellungen
                  </NavLink>

                  <NavLink
                    to="/log"
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    Protokoll
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-primary inline-flex items-center justify-center p-2 text-white hover:text-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 bg-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6 bg-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Start
                </NavLink>

                <NavLink
                  to="/patienten"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Patienten
                </NavLink>

                <NavLink
                  to="/kurven"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Kurven
                </NavLink>

                <NavLink
                  to="/einstellungen"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Einstellungen
                </NavLink>

                <NavLink
                  to="/log"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Protokoll
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;
