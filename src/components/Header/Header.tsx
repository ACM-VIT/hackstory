import React from 'react';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] })


const Header = () => {
  return (
    <header className="py-4">
      <div className="mx-auto px-8">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center justify-center font-black ml-36 w-16 h-16 text-logo text-5xl">HS</div>
          </div>
          <nav className='mr-32'>
            <ul className={`flex space-x-12 ${manrope.className}`}>
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
