import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import Logo from "../img/logo.svg";
import PDF from "../Resume.pdf";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const toggle = () => setNavbar(!navbar);
  const hide = () => setNavbar(false);
  const show = () => setNavbar(true);

  return (
    <nav className="fixed top-0 z-10">
      <div className="glass-nav w-screen justify-between px-4 mx-auto md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-2 md:block">
            <a href="./">
              <img src={Logo} alt="Logo" width="40" height="40" />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none"
                onClick={toggle}
              >
                {navbar ? (
                  <HiX className="text-4xl" /> // Close icon
                ) : (
                  <HiMenuAlt4 className="text-4xl" /> // Open icon
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-8 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="text-dark-gray items-center justify-center space-y-8 md:text-white md:flex md:space-x-6 md:space-y-0">
              <li className="text-center text-xl hover:opacity-40 2xl:text-2xl">
                <Link
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  onClick={toggle}
                  onBlur={hide}
                  onFocus={show}
                >
                  About
                </Link>
              </li>
              <li className="text-center text-xl hover:opacity-40 2xl:text-2xl">
                <Link
                  activeClass="active"
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  onClick={toggle}
                  onBlur={hide}
                  onFocus={show}
                >
                  Projects
                </Link>
              </li>
              <li className="text-center text-xl hover:opacity-40 2xl:text-2xl">
                <Link
                  activeClass="active"
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  onClick={toggle}
                  onBlur={hide}
                  onFocus={show}
                >
                  Contact
                </Link>
              </li>
              <li class="text-center text-xl hover:opacity-40 2xl:text-2xl">
                <a href={PDF} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
