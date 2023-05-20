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
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-900">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-900">
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-900">
                  Lorem Ipsum
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
