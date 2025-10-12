import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const BottomNav = ({ navItems = [], active, onNavClick }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  // Show navbar only after scrolling 500px
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-2 sm:px-4"
        >
          <div className="flex bg-purpleBg/15 backdrop-blur-md border border-gray-700 w-full sm:w-[400px] md:w-[550px] rounded-full justify-around items-center py-3 sm:py-3 px-4 sm:px-12 shadow-lg shadow-black/20 min-w-[250px] max-w-[90vw]">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavClick(item)}
                className={`flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-lg transition-all duration-200 ${
                  active === item.label
                    ? 'text-purpleLight'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
