import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const FullProject = ({ images, description }) => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // looping logic
  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  // Track when carousel is in view
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-10% 0px' });

  return (
    <div
      ref={ref}
      className="relative bg-white w-screen flex flex-col items-center  overflow-hidden pb-28 z-50"
    >
      <h1 className="text-black text-5xl pb-10 font-bold">Desktop Layouts</h1>
      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-[50px] text-black top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-[50px] text-black top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
      >
        <ChevronRight size={28} />
      </button>

      {/* Carousel */}
      <div className="flex gap-4 items-center justify-center w-full">
        {/* Prev */}
        <motion.div
          key={prevIndex}
          initial={{ opacity: 0.5, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-2xl shadow-lg"
          style={{ width: '15vw' }}
        >
          <img
            src={images[prevIndex]}
            alt="prev"
            className="w-full h-[75vh] object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        {/* Current with auto ping-pong scroll */}
        <div className="border-2 border-gray-500 rounded-[54px] ">
          <div className="border-[2px] rounded-[52px] border-gray-300">
            <div className="border-[15px] border-gray-800 rounded-[50px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="overflow-hidden  rounded-[35px]  "
                  style={{ width: '70vw', height: '80vh' }}
                >
                  <div className="overflow-hidden rounded-xl">
                    <motion.img
                      key={images[index]}
                      src={images[index]}
                      alt="current"
                      className="w-full object-top "
                      style={{ height: 'auto' }}
                      initial={{ y: 0 }}
                      animate={
                        inView
                          ? { y: ['0%', '-100%', '0%'] } // ping-pong scroll
                          : { y: 0 }
                      }
                      transition={
                        inView
                          ? {
                              duration: 40, // 20s down + 20s up
                              ease: 'linear',
                              repeat: Infinity,
                              repeatDelay: 2, // pause 2s before restarting
                              delay: 2, // initial pause on first view
                            }
                          : {}
                      }
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Next */}
        <motion.div
          key={nextIndex}
          initial={{ opacity: 0.5, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden relative rounded-2xl shadow-lg"
          style={{ width: '15vw' }}
        >
          <img
            src={images[nextIndex]}
            alt="next"
            className="w-full h-[75vh] object-cover "
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>

      {/* Description */}
      <p className="mt-6 w-[70vw] text-center text-gray-700 text-lg">
        {description}
      </p>
    </div>
  );
};
