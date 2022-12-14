import { useState } from 'react';
// React-scroll
import { Link } from 'react-scroll';
// Icons
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import Logo from '../assets/logo.png';
// PDF
import PDF from '../assets/resume.pdf';

export const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const toggle = () => setNavbar(!navbar);

  // JSX
  return (
    <nav className='fixed top-0 z-10'>
      <div className='glass w-screen px-4 md:flex md:justify-between md:items-center'>
        {/* Logo */}
        <div className='flex justify-between items-center md:py-2'>
          <a href='./'>
            <img src={Logo} alt='Logo' width='40' height='40' />
          </a>
          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              className='text-dark-gray rounded-md outline-none py-2'
              onClick={toggle}
            >
              {navbar ? (
                <HiX className='text-4xl' /> // Close icon
              ) : (
                <HiMenuAlt4 className='text-4xl' /> // Open icon
              )}
            </button>
          </div>
        </div>

        {/* Nav list */}
        <div className={`pb-8 md:block md:pb-0 ${navbar ? 'block' : 'hidden'}`}>
          <ul className='text-dark-gray font-bebas justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
            {/* About */}
            <li className='nav-items-st'>
              <Link
                activeClass='active'
                to='About'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={toggle}
              >
                About
              </Link>
            </li>

            {/* My Work */}
            <li className='nav-items-st'>
              <Link
                activeClass='active'
                to='MyWork'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={toggle}
              >
                My Work
              </Link>
            </li>

            {/* Contact */}
            <li className='nav-items-st'>
              <Link
                activeClass='active'
                to='Contact'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={toggle}
              >
                Contact
              </Link>
            </li>

            {/* Resume */}
            <li className='nav-items-st'>
              <a href={PDF} target='_blank' rel='noopener noreferrer'>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className='fixed bottom-0 text-dark-gray text-2xl [writing-mode:vertical-rl] [text-orientation:sideways-right] px-4 py-8'>
        <p className='hidden md:block md:font-bebas'>
          &copy; 2023 Emmy Manning
        </p>
      </div>
    </nav>
  );
}