import React from 'react';

const Header = () => {
  return (
    <header className="py-4">
      <div className="mx-auto px-8">
        <div className="flex justify-between items-center">
          <div>
            <div className="mx-16 bg-white w-16 h-16 bg-neutral-200 text-neutral-200">hello</div>
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
