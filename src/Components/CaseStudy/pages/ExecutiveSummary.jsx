import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ExecutiveSummary = ({ images, backgroundImg, client, year, service }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Background parallax (numeric MotionValue)
  const y = useTransform(scrollYProgress, [0, 2], [0, -400]);

  // Map scroll progress directly to CSS filter strings (no .to)
  const bgFilter = useTransform(
    scrollYProgress,
    [0, 1],
    ['grayscale(100%)', 'grayscale(100%)']
  );

  // Foreground transforms
  const gap = useTransform(scrollYProgress, [0, 1], ['8rem', '2rem']); // string sizes ok
  const middleScale = useTransform(scrollYProgress, [0, 1], [0.7, 1.1]); // numeric
  const leftX = useTransform(scrollYProgress, [0, 1], ['-100px', '0px']);
  const rightX = useTransform(scrollYProgress, [0, 1], ['100px', '0px']);
  const sideHeight = useTransform(scrollYProgress, [0, 1], ['700px', '750px']); // optional subtle grow

  return (
    <div className="pt-40 relative  bg-white z-50">
      <div className="h-[40vh] w-full max-w-[1400px]  mx-auto md:mb-20  ">
        <div>
          <h1 className="text-black font-extralight text-xl text-center uppercase tracking-[7px]">
            So why pine
          </h1>
          <h1 className="text-black text-4xl font-extralight uppercase tracking-widest text-center pt-2">
            BECAUSE PINE IS <span className="font-normal">UN</span>
          </h1>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 rounded-lg md:border gap-10 content-center border-black mt-14 justify-around py-4">
              <div className=" flex flex-col items-center gap-2">
                <img src="/portfolio/pine/design.png" className="w-16" alt="" />{' '}
                <h1 className="uppercase text-lg text-black tracking-widest">
                  1. Design
                </h1>
              </div>
              <div className=" flex flex-col items-center gap-2">
                <img
                  src="/portfolio/pine/developing.png"
                  className="w-14"
                  alt=""
                />
                <h1 className="uppercase text-lg text-black">2. Development</h1>
              </div>
              <div className=" flex flex-col items-center gap-2">
                <img
                  src="/portfolio/pine/launch.png "
                  className="w-12"
                  alt=""
                />
                <h1 className="uppercase text-lg text-black">3. Launch</h1>
              </div>
              <div className=" flex flex-col items-center gap-2">
                <img src="/portfolio/pine/heart.png" className="w-12" alt="" />
                <h1 className="uppercase text-lg text-black">4. Growth</h1>
              </div>
            </div>
          </div>
          {/* <img src="/portfolio/pine.png" className=" mt-16 " alt="" /> */}
        </div>
      </div>

      <section
        ref={ref}
        className="relative h-[140vh] bg-white overflow-hidden hidden md:block"
      >
        {/* Background parallax container */}
        <motion.div style={{ y }} className="absolute inset-0">
          <motion.img
            src={backgroundImg}
            alt="background"
            className="w-full h-full object-cover"
            style={{
              // filter: bgFilter,
              brightness: 0.6,
            }}
          />

          {/* Black bar stacked with background */}
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[1400px] h-72 bg-black z-10">
            <div className="flex justify-evenly items-center h-72">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl text-gray-500">Client</h1>
                <h1 className="text-gray-200 text-lg">{client}</h1>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl text-gray-500">Industry</h1>
                <h1 className="text-gray-200 text-lg">{service}</h1>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl text-gray-500">Service</h1>
                <h1 className="text-gray-200 text-lg">
                  Web Design & Logo Branding
                </h1>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl text-gray-500">Year</h1>
                <h1 className="text-gray-200 text-lg">{year}</h1>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Foreground sticky area */}
        <div className="sticky top-20 flex items-center justify-center h-screen pointer-events-none w-[1400px] mx-auto">
          <motion.div
            className="flex items-center pointer-events-auto mx-auto"
            style={{ gap }}
          >
            <motion.img
              src={images[0]}
              alt="left"
              className="object-cover border-[10px] w-[400px] p-1 border-black rounded-[50px]"
              style={{ x: leftX, height: sideHeight }}
            />

            <motion.img
              src={images[1]}
              alt="middle"
              className="object-cover z-10 border-[10px] w-[500px] p-1 border-black rounded-[50px]"
              style={{ scale: middleScale, height: '900px' }}
            />

            <motion.img
              src={images[2]}
              alt="right"
              className="object-cover border-[10px] p-1 w-[400px] border-black rounded-[50px]"
              style={{ x: rightX, height: sideHeight }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveSummary;
