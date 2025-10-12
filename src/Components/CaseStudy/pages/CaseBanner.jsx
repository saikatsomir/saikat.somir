import { Link } from 'react-router-dom';
import CometCard from '../../Pages/ui/comet-card';
import DarkVeil from '../../Pages/ui/DarkViel';
import { MoveDown, MoveLeft, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const CaseBanner = ({ headline, subtext, image }) => {
  return (
    <div className="relative text-center h-[55vh] md:min-h-[1100px] z-50 overflow-hidden">
      <DarkVeil warpAmount={20} hueShift={5} />
      <div className="absolute top-0 left-0 w-full h-20 flex justify-between items-center px-6 md:px-16 lg:px-32">
        <Link
          to="/"
          className="text-base md:text-lg text-white font-light flex items-center gap-2 hover:opacity-80 transition hover:underline"
        >
          <MoveLeft className="w-5 h-5" /> Back to home
        </Link>
        <Link
          to={`/case-study/project2`}
          className="text-base md:text-lg text-white font-light flex items-center gap-2 hover:opacity-80 transition hover:underline"
        >
          Next Case Study <MoveRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="absolute top-20 left-1/2 -translate-x-1/2 flex flex-col items-center px-4 b md:px-0">
        <CometCard className="w-[100vw] md:w-[90%] lg:w-[1000px] mx-auto bg-transparent z-50">
          <img
            src={image}
            alt={headline}
            className="w-[90%] md:w-[90%] lg:w-[1000px] mx-auto rounded-lg shadow-lg z-50"
          />
        </CometCard>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-10 text-white">
          {headline}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 mt-2 max-w-xl">
          {subtext}
        </p>
      </div>
      {/* Centered circular MoveDown button */}
      <div className="w-full  absolute bottom-20 hidden md:flex justify-center items-center">
        <motion.div
          className="absolute    flex items-center justify-center mx-auto w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full cursor-pointer"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <MoveDown className="text-white w-6 h-6 md:w-7 md:h-7" />
        </motion.div>
      </div>
    </div>
  );
};
