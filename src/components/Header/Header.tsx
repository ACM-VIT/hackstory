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
                <a href="#" className="text-white hover:text-gray-900">
                  ABOUT HACK
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-900">
                  ABOUT CLUBS
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-900">
                  TIMELINE
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-900">
                  TRACKS
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-900">
                  PRIZES
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-900">
                 SPONSORS
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-900">
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
