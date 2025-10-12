import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';
import { IoBatteryFull } from 'react-icons/io5';
import { RiSettings3Line } from 'react-icons/ri';
import { FiHome, FiShoppingCart } from 'react-icons/fi';
import { MdControlPoint, MdOutlineSignalWifi4Bar } from 'react-icons/md';
import skin from './images/skin.jpg';
import { useNavigate } from 'react-router-dom';

export const Responsive = () => {
  // single ref for left container (in-view + mouse bounds)
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/book-a-meeting');
  };

  const handleMouseMove = (e) => {
    if (!leftRef.current) return;
    const bounds = leftRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const center = bounds.width / 2;
    const move = (x - center) / 50;
    setOffset(move);
  };

  const handleMouseLeave = () => setOffset(0);

  // detect when sections are in view
  const isInViewLeft = useInView(leftRef, { margin: '-100px', once: true });
  const isInViewRight = useInView(rightRef, { margin: '-100px', once: true });

  // helper for smooth transitions
  const makeTransition = (delay = 0) => ({
    x: { type: 'spring', stiffness: 80, damping: 15, delay },
    default: { duration: 0.55, ease: 'easeOut', delay },
  });

  return (
    <div className="pt-28 pb-28 relative bg-purpleBg ">
      <div
        className="my-3 -mr-14 top-0 absolute left-1/2 -translate-x-1/2  z-10"
        style={{
          height: '0.5px',
          width: '90%',
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0)) ',
        }}
      ></div>

      <div className="xl:max-w-[1300px] 2xl:max-w-[1340px] mx-auto relative z-50">
        <div className="absolute -top-20 -translate-x-1/2 left-1/2 w-full md:w-[900px] h-[300px] blur-[100px] rounded-full bg-[#0d0457] opacity-35 z-50" />
        <div className="bg-white/5 w-32 text-center h-10 flex mx-auto justify-center items-center gap-1 text-white/90 rounded-lg shadow-sm shadow-[#2710d4] border-gray-800 mb-5 relative">
          <div
            className="my-3 -mr-14 absolute -top-[13px] left-1/2 -translate-x-1/2 z-10"
            style={{
              height: '2px',
              width: '100px',
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0)) ',
            }}
          ></div>
          <MdControlPoint className="text-[10px]" />
          Enginuity
        </div>
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-32 md:mb-20 mx-auto">
          UI That Delights, UX That Lasts
        </h1>

        <div className="flex flex-col md:flex-row gap-24 items-center justify-between">
          {/* LEFT SIDE (Animated) */}
          <div
            ref={leftRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full md:w-[50%] flex justify-center relative md:-ml-12 order-2"
          >
            {/* All left-side motion divs unchanged */}
            {/* --- keep your existing animation code --- */}

            {/* VOLUME */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95, x: 0 }}
              animate={{
                x: offset,
                opacity: isInViewLeft ? 1 : 0,
                y: isInViewLeft ? 0 : 60,
                scale: isInViewLeft ? 1 : 0.95,
              }}
              transition={makeTransition(0.05)}
              className="absolute z-50 md:-right-10 top-24 w-[85%] md:w-96 bg-purpleBold rounded-full h-14 flex justify-center items-center shadow-lg shadow-black"
            >
              <div className="w-[270px] md:w-[340px] border-[1.5px] border-purpleLight">
                <div className="h-2 w-2 absolute top-6 left-1/2 -translate-x-1/2 ml-10 rounded-full bg-yellow-500"></div>
                <div className="h-10 w-10 rounded-full absolute top-2 bg-yellow-300 opacity-30 ml-9 blur-sm left-[150px] md:left-44 flex justify-center items-center"></div>
              </div>
            </motion.div>

            {/* Conversion Charts */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95, x: 0 }}
              animate={{
                x: -offset,
                opacity: isInViewLeft ? 1 : 0,
                y: isInViewLeft ? 0 : 60,
                scale: isInViewLeft ? 1 : 0.95,
              }}
              transition={makeTransition(0.15)}
              className="absolute hidden md:block z-50 left-14 top-64 bg-purpleBold w-52 pl-10 h-48 rounded-3xl shadow-lg shadow-black px-7 py-4"
            >
              <h1 className="text-xl text-purpleLight">Conversion</h1>
              <h1 className="text-4xl text-white pt-2">245</h1>
              <h1 className="text-base text-purpleLight">+21 of target</h1>
              <div className="flex mt-4 gap-1 rotate-180 w-fit">
                {[5, 9, 7, 4, 8, 7, 4].map((h, i) => (
                  <div key={i} className={`w-3 h-${h} bg-orange-400`}></div>
                ))}
              </div>
            </motion.div>

            {/* Responsive Box */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95, x: 0 }}
              animate={{
                x: -offset,
                opacity: isInViewLeft ? 1 : 0,
                y: isInViewLeft ? 0 : 60,
                scale: isInViewLeft ? 1 : 0.95,
              }}
              transition={makeTransition(0.25)}
              className="absolute z-20 bg-purpleBold bottom-36 md:bottom-40 shadow-lg shadow-black md:right-5 h-[400px] w-[300px] rounded-3xl"
            >
              <div className="h-24">
                <h1 className="text-xl text-purpleLitest pt-3 pl-4">
                  Awesome Cosmetics
                </h1>
                <h1 className="text-sm text-purpleLight pl-4">
                  Awesome Cosmetics brings glow, charm, and confidence to you.
                </h1>
              </div>
              <div className="h-[170px] w-[300px] flex justify-center items-center overflow-hidden">
                <img src={skin} className="w-[400px]" alt="" />
              </div>
              <div>
                <h1 className="text-sm text-purpleLight pl-4 pt-2">
                  A responsive website adapts to any device, improving your user
                  experience.
                </h1>
              </div>
            </motion.div>

            {/* Bottom Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95, x: 0 }}
              animate={{
                x: offset,
                opacity: isInViewLeft ? 1 : 0,
                y: isInViewLeft ? 0 : 60,
                scale: isInViewLeft ? 1 : 0.95,
              }}
              transition={makeTransition(0.35)}
              className="absolute z-20 bottom-10 w-[340px] h-16 bg-purpleBold rounded-full flex justify-around items-center shadow-lg shadow-black"
            >
              <div className="text-purpleLight text-2xl flex items-center justify-center gap-10">
                <FiHome />
                <FiShoppingCart />
                <FaUserCircle className="text-yellow-600" />
                <RiSettings3Line />
                <FaBars />
              </div>
            </motion.div>

            {/* Mobile Device */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.98 }}
              animate={{
                opacity: isInViewLeft ? 1 : 0,
                y: isInViewLeft ? 0 : 60,
                scale: isInViewLeft ? 1 : 0.98,
              }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
              className="relaitve w-full"
            >
              <div className="absolute w-[300px] rounded-full h-32 bg-[#1c08d0] opacity-50 top-10 left-10 blur-[100px]" />
              <div className="w-[95%] mx-auto md:w-[390px] h-[800px] md:h-[750px] border-2 border-purpleLight p-3 rounded-[60px] bg-[#1c08d0]/20">
                <div className="bg-white/80 w-full h-full rounded-[50px] relative">
                  <div className="flex items-center justify-around pt-4">
                    <h1 className="text-black">09:30</h1>
                    <div className="bg-black rounded-full w-16 h-5 flex items-center px-2 ml-5 justify-center gap-2">
                      <div className="h-2 w-10 bg-gray-700 rounded-full"></div>
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                    </div>
                    <div className="flex justify-center items-center gap-1 text-black">
                      <MdOutlineSignalWifi4Bar />
                      <GiNetworkBars />
                      <IoBatteryFull className="text-2xl" />
                    </div>
                  </div>
                  <div className="border-2 border-gray-500 w-28 absolute bottom-2 -translate-x-1/2 left-1/2 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE (Animated added here) */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full md:w-[50%] -mt-20 flex md:items-end items-center md:text-end text-center relative px-2 md:px-0 rounded-3xl border-gray-700"
          >
            <div
              className="my-3 -mr-14 absolute -bottom-[13px] left-1/2 -translate-x-1/2 z-10"
              style={{
                height: '2px',
                width: '300px',
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0)) ',
              }}
            ></div>
            <div className="absolute w-full md:w-[400px] h-20 bg-[#1c08d0] opacity-70 -bottom-10 left-0 md:left-40 rounded-full blur-[100px] -z-10" />
            <div className="rounded-xl py-7 px-5 overflow-hidden relative border border-gray-800">
              <div className="absolute w-32 h-32 bg-[#1c08d0] opacity-50 -top-10 -left-10 blur-[50px]" />
              <div>
                <h1 className="text-xl md:text-2xl text-purpleLight relative">
                  <div
                    className="my-3 -mr-14 absolute -bottom-7 right-16 z-10"
                    style={{
                      height: '1px',
                      width: '250px',
                      backgroundImage:
                        'linear-gradient(to right, rgba(255,255,255,0), gray, rgba(255,255,255,0)) ',
                    }}
                  ></div>
                  “UI That Captivates”
                </h1>
                <h1 className="text-3xl md:text-5xl md:leading-[70px] font-bold text-white pt-2 md:pt-4">
                  Design Interfaces <span>That Delight Every User</span>
                </h1>
                <div className="w-full flex justify-center md:justify-end">
                  <h1 className="pt-2 md:pt-6 text-purpleLight w-[90%] md:w-full text-sm md:text-base">
                    Our user interfaces aren’t just visually stunning—they guide
                    your users effortlessly. Every button, animation, and layout
                    is crafted to engage, delight, and make navigation second
                    nature. Transform interactions into memorable experiences.
                  </h1>
                </div>
                <button
                  onClick={handleClick}
                  className="btn2 w-52 md:w-72 py-5 md:py-6 relative leading-none overflow-hidden bg-[#760047] hover:border border-gray-700 rounded-md mt-3 md:mt-7"
                  type="button"
                >
                  <span className="absolute inset-0 bg-[#000033]" />
                  <span className="absolute inset-0 flex justify-center items-center text-white">
                    Let's talk! 1:1
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
