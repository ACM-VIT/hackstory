import React, { useState } from 'react';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4">
      <div className="mx-auto px-8">
        <div className="flex justify-between lg:items-center flex-col lg:flex-row">
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center justify-center font-black lg:ml-[3rem] w-16 h-16 text-logo text-5xl">
              HS
            </div>
            {isMenuOpen ? (
              <svg
                className="lg:hidden"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 50 50"
                onClick={handleMenuToggle}
              >
                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" fill="#FFFFFF"></path>
              </svg>
            ) : (
              <svg
                className="lg:hidden"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                onClick={handleMenuToggle}
              >
                <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" fill="#FFFFFF"/>
              </svg>
            )}
          </div>
          <nav className={`lg:block transition-all duration-500 ease-in-out ${isMenuOpen ? '' : 'hidden'}`}>
            <ul className={`flex gap-y-4 mt-4 lg:mt-0 items-center lg:space-x-12 flex-col lg:flex-row ${manrope.className}`}>
              <li>
                <a href="#" className="text-headerbutton hover:text-gray-900 font-extrabold">
                  PRIZES
                </a>
              </li>
              <li>
                <a href="#" className="text-headerbutton hover:text-gray-900 font-extrabold">
                  TRACKS
                </a>
              </li>
              <li>
                <a href="#" className="text-headerbutton hover:text-gray-900 font-extrabold">
                  TIMELINE
                </a>
              </li>
              <li>
                <a href="#" className="text-headerbutton hover:text-gray-900 font-extrabold">
                  ABOUT HACK
                </a>
              </li>
              <li>
                <a href="#" className="text-headerbutton hover:text-gray-900 font-extrabold">
                  SPONSORS
                </a>
              </li>
              <li>
                <a href="#" className="text-headerbutton hover:text-gray-900 font-extrabold">
                  ABOUT CLUBS
                </a>
              </li>
              <li>
                <a href="#" className="text-headerbutton hover:text-gray-900 font-extrabold">
                  FAQs
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
