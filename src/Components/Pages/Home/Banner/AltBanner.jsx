import { useState } from 'react';
import { motion } from 'framer-motion';
import DarkVeil from '../../ui/DarkViel';
import ColoredLogo from '../../../CaseStudy/pages/ColordLogo';
import './Banner.css';

import img1 from './images/alt/img1.webp';
import img2 from './images/alt/img2.webp';
import img3 from './images/alt/img3.webp';
import img4 from './images/alt/img4.webp';
import img5 from './images/alt/img5.webp';
import img6 from './images/alt/img6.webp';
import img7 from './images/alt/img7.webp';
import img8 from './images/alt/img8.webp';

const alts = [img1, img2, img3, img4, img5, img6, img7, img8].map(
  (path, i) => ({
    name: `img${i + 1}`,
    path,
  })
);

const tools = [
  'auth0',
  'digitalocean',
  'docker',
  'figma',
  'firebase',
  'git',
  'gtm',
  'jwt',
  'mg',
  'mysql',
  'next',
  'node',
  'react',
  'redux',
  'ts',
  'vue',
].map((name) => ({ name, path: `/portfolio/tools/${name}.webp` }));

export const AltBanner = ({ scrollRefs }) => {
  const [menuOpen] = useState(false);
  const handleScroll = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex flex-col md:h-[932px] md:pb-0 pt-20 md:pt-32">
      <div className="absolute inset-0 -z-10">
        <DarkVeil warpAmount={20} hueShift={5} />
      </div>

      <div className="hidden">
        <img
          src="/bgIcons/react.svg"
          alt=""
          className="absolute top-[47%] md:top-[50%] right-0 md:right-20 w-24 md:w-48 animate-spin-slow z-50"
        />
        <img
          src="/bgIcons/tailwind.svg"
          alt=""
          className="absolute -top-10 md:top-16 left-0 md:left-96 w-28 md:w-48 animate-cell-ripple size-60"
        />
      </div>

      {/* Banner Content */}
      <div className="w-full max-w-[1340px] mx-auto px-3 md:px-0">
        {/* Tagline */}
        <div className="border border-[#c70eb2]/10 bg-[#4f0847]/50 w-fit rounded-full mx-auto mt-16 md:mt-20 px-8 md:px-12 h-10 sm:h-12 flex items-center">
          <h1
            className="fancy-text text-white font-extralight uppercase tracking-[4px] md:tracking-[6px] text-sm sm:text-base md:text-lg"
            data-text="Smart, Scalable, Secure"
          >
            Smart, Scalable, Secure
          </h1>
        </div>

        {/* Main Text */}
        <div className="mt-6 md:mt-14 text-center">
          <h1
            className="text-3xl md:text-6xl lg:text-[80px] font-bold text-white w-full md:w-[90%] mx-auto capitalize"
            style={{ lineHeight: '1.1em' }}
          >
            Innovating the Digital Future with Full Potential
          </h1>

          <p className="text-gray-200 text-base md:text-xl w-full md:w-[50%] mx-auto mt-2">
            From concept to code — we craft fast, responsive, and powerful
            websites that grow with your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 md:gap-8 mt-4 bg-white/20 w-fit mx-auto px-1 py-1 rounded-full">
            <button
              onClick={() => handleScroll(scrollRefs?.altExplore)}
              type="button"
              className="btn2 relative w-32 md:w-44 py-5 md:py-6 bg-[white] rounded-full overflow-hidden leading-none"
            >
              <span className="absolute inset-0 bg-[#000033]" />
              <span className="absolute inset-0 flex items-center justify-center text-sm md:text-base text-black hover:text-white">
                Explore
              </span>
            </button>

            <button
              onClick={() => handleScroll(scrollRefs?.blueprint)}
              type="button"
              className="btn2 relative w-32 md:w-44 py-5 md:py-6 bg-[#000033] border-white/20 rounded-full overflow-hidden leading-none"
            >
              <span className="absolute inset-0 bg-[#760047]" />
              <span className="absolute inset-0 flex items-center justify-center text-sm md:text-base text-white">
                Blueprint
              </span>
            </button>
          </div>

          {/* Infinite Tools Slider */}
          <div className="relative mt-14 md:mt-20 overflow-hidden">
            <div className="hidden md:block absolute -top-10 left-[-12rem] w-64 h-40 bg-[#060005] blur-[20px] z-50" />
            <div className="hidden md:block absolute -top-10 right-[-8rem] xl:-right-14 2xl:-right-32 w-32 2xl:w-60 h-32 bg-[#060005] blur-xl z-50" />

            <div className="mx-auto w-[95%] sm:w-full max-w-[1340px] overflow-hidden">
              <motion.div
                className="flex w-max"
                animate={{ x: ['-50%', '0%'] }}
                transition={{ repeat: Infinity, duration: 100, ease: 'linear' }}
              >
                {[...tools, ...tools].map((tool, index) => (
                  <div
                    key={index}
                    className={`flex items-center h-8 md:h-14 ${index === tools.length * 2 - 1 ? 'mx-0' : 'mx-10'}`}
                  >
                    <ColoredLogo
                      src={tool.path}
                      alt={tool.name}
                      color="#FFFFFF"
                      className="w-full h-full object-contain grayscale hover:grayscale-0 transition"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Slider */}
      <div className=" md:absolute -bottom-28 md:-bottom-40 z-20 w-full">
        <div className="w-[100vw] mx-auto mt-10 overflow-hidden ">
          <motion.div
            className="flex w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
          >
            {[...alts, ...alts].map((alt, index) => (
              <div
                key={index}
                className="flex-shrink-0 overflow-hidden mx-4 rounded-2xl"
              >
                <img
                  src={alt.path}
                  alt={alt.name}
                  className="w-[250px] md:w-[400px] h-44 md:h-60 object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
