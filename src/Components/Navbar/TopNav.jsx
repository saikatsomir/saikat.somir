import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const TopNav = ({ onScrollToSection, refs }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (section) => {
    setMenuOpen(false);

    if (section === 'home') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'work') {
      if (location.pathname !== '/') navigate('/');
      setTimeout(() => onScrollToSection(refs.work), 200);
    } else if (section === 'plan') {
      if (location.pathname !== '/') navigate('/');
      setTimeout(() => onScrollToSection(refs.plan), 200);
    } else if (section === 'success') {
      if (location.pathname !== '/') navigate('/');
      setTimeout(() => onScrollToSection(refs.success), 200);
    } else if (section === 'about') {
      navigate('/about-somi');
    } else if (section === 'contact') {
      navigate('/book-a-meeting');
    }
  };

  const navItems = [
    { label: 'Home', key: 'home' },
    { label: 'Work', key: 'work' },
    { label: 'Plan', key: 'plan' },
    { label: 'Success', key: 'success' },
    { label: 'Contact', key: 'contact' },
    { label: 'About', key: 'about' },
  ];

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          key="navbar"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed top-0 left-0 w-[100vw] z-50 backdrop-blur-md bg-black/15 border-b border-gray-800 "
        >
          <div className="flex justify-center h-24  relative">
            <div className="w-[100vw]  md:max-w-[1340px] mx-auto flex items-center justify-between px-4 md:px-0">
              {/* Mobile Hamburger */}
              <div className="md:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex flex-col justify-between w-8 h-6"
                >
                  <span
                    className={`block h-1 w-full bg-white rounded transition-all duration-300 ${
                      menuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  />
                  <span
                    className={`block h-1 w-full bg-white rounded transition-all duration-300 ${
                      menuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`block h-1 w-full bg-white rounded transition-all duration-300 ${
                      menuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Left Links */}
              <div className="hidden md:flex gap-12">
                {navItems.slice(0, 3).map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.key)}
                    className="text-lg text-gray-50 hover:text-[#d80082] transition"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Logo */}
              <div>
                <h1 className="text-5xl text-white/70 font-black capitalize font-bonefesta tracking-wide">
                  saikat <span className="text-[#760047]">.</span> somir
                </h1>
              </div>

              {/* Right Links */}
              <div className="hidden md:flex gap-12">
                {navItems.slice(3).map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.key)}
                    className="text-lg text-gray-50 hover:text-[#d80082] transition"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="absolute top-24 left-0 w-full bg-black/90 z-40 flex flex-col items-center gap-6 py-6"
                >
                  {navItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => handleNavClick(item.key)}
                      className="text-lg text-white hover:text-red-500 transition"
                    >
                      {item.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopNav;
