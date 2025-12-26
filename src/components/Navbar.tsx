/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaFile } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [
    { name: '../ABOUT', href: '/#about' },
    { name: '../EXP', href: '/#experience' }, 
    { name: '../PROJECTS', href: '/#projects' },
    { name: '../CONTACT', href: '/#contact' },
  ];

  useEffect(() => {
    if (location.pathname !== '/') {
        setActiveSection('');
        return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; 
      const sections = ["hero", ...navItems.map(item => item.href.replace('/#', ''))];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const getLinkClass = (href: string) => {
    const sectionId = href.replace('/#', '');
    const baseClass = "cursor-pointer font-mono font-bold hover:text-neo-red transition-colors duration-200";
    const isActive = activeSection === sectionId && location.pathname === '/';

    return isActive
      ? `${baseClass} text-neo-red underline decoration-2 underline-offset-4` 
      : `${baseClass} text-neo-black`;
  };

  return (
    <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full bg-neo-white/20 backdrop-blur-sm border-b-2 border-neo-black z-50"
      >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
                <span className="font-mono text-3xl">
                  HELLO,<span className="font-bold text-neo-red">WORLD!</span>
                </span>
              </Link>
              <div className="hidden md:flex space-x-8 items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href} 
                    className={getLinkClass(item.href)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <Button 
                    href="/CV_Cornelius_Louis_Nathan.pdf" 
                    download="Cornelius_Louis_CV.pdf"
                    variant="outline"
                    className="font-mono text-sm px-4 py-1 whitespace-nowrap" 
                >
                  <span className="flex items-center gap-2">
                      [ DOWNLOAD_CV.PDF <FaFile /> ]
                  </span>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="text-neo-black hover:text-neo-red">
                  {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="md:hidden bg-neo-white border-b-4 border-neo-black absolute w-full shadow-brutal">
              <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3 flex flex-col items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 font-mono text-xl ${
                        activeSection === item.href.replace('/#', '') && location.pathname === '/' 
                        ? 'text-neo-red font-bold' 
                        : 'text-neo-black'
                    } hover:bg-neo-red hover:text-neo-white w-full text-center`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button 
                  href="/CV_Cornelius_Louis_Nathan.pdf"
                  download="Cornelius_Louis_CV.pdf"
                  variant="outline"
                  className="mt-4 font-mono text-sm"
                >
                  <span className="flex items-center gap-2">
                      [ DOWNLOAD_CV.PDF <FaFile /> ]
                  </span>   
                </Button>
              </div>
            </div>
          )}
    </motion.nav>
  );
};

export default Navbar;