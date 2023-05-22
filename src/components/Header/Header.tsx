import React from 'react';

const Header = () => {
  return (
    <header className="py-4">
      <div className="mx-auto px-8">
        <div className="flex justify-between items-center">
          <div>
            {/* Test components added for now. To be changed later */}
            <div className="mx-16 w-16 h-16 bg-neutral-300 text-neutral-300">hello</div>
          </div>
          <nav className='mx-8'>
            <ul className="flex space-x-12">
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
