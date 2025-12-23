import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaFile } from 'react-icons/fa';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: '../ABOUT', href: '#about' },
    { name: '../EXP', href: '#experience' },
    { name: '../PROJECTS', href: '#projects' },
    { name: '../CONTACT', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-neo-gray/20 backdrop-blur-sm border-b-2 border-neo-black z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center">
            <span className="font-mono text-3xl">
              HELLO,<span className="font-bold text-neo-red">WORLD!</span>
            </span>
          </div>

          {/* Navbar items */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-mono text-lg hover:text-neo-red hover:underline decoration-4 underline-offset-4 transition-colors"
              >
                {item.name}
              </a>
            ))}
  
            <a 
              href="/cv.pdf" 
              className="flex items-center gap-2 font-mono text-sm border-2 border-neo-black px-3 py-1 hover:bg-neo-black hover:text-neo-white transition-colors"
            >
              [ DOWNLOAD_CV.PDF <FaFile/> ]
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neo-black hover:text-neo-red"
            >
              {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-neo-white border-b-4 border-neo-black absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 font-mono text-xl hover:bg-neo-red hover:text-neo-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="/cv.pdf" 
              className="flex justify-center items-center max-w-fit gap-2 font-mono text-sm border-2 border-neo-black px-3 py-1 hover:bg-neo-black hover:text-neo-white transition-colors"
            >
              [ DOWNLOAD_CV.PDF <FaFile/> ]
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;