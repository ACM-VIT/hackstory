import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto px-8 py-10 lg:border-b-[1px] border-[#2E2E2E]">
      <div className="flex flex-col justify-center lg:flex-row lg:items-center">
        <div className="flex flex-row items-center">
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
              <path
                d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
                fill="#FFFFFF"
              ></path>
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
              <path
                d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"
                fill="#FFFFFF"
              />
            </svg>
          )}
        </div>
        <nav
          className={`transition-all duration-500 ease-in-out lg:block ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <ul
            className={`mt-4 flex flex-col items-center gap-y-4 lg:mt-0 lg:flex-row lg:space-x-12`}
          >
            <li>
              <a
                href="/"
                className="text-l font-extrabold text-headerbutton hover:text-gray-900"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-l font-extrabold text-headerbutton hover:text-gray-900"
              >
                PRIZES
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-l font-extrabold text-headerbutton hover:text-gray-900"
              >
                TRACKS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-l font-extrabold text-headerbutton hover:text-gray-900"
              >
                TIMELINE
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-l font-extrabold text-headerbutton hover:text-gray-900"
              >
                ABOUT HACK
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-l font-extrabold text-headerbutton hover:text-gray-900"
              >
                SPONSORS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-l font-extrabold text-headerbutton hover:text-gray-900"
              >
                ABOUT CLUBS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-l font-extrabold text-headerbutton hover:text-gray-900"
              >
                FAQs
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
