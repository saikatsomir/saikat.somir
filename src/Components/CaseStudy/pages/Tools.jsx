import { motion, useAnimation } from 'framer-motion';
import ColoredLogo from './ColordLogo';
import { useEffect, useRef } from 'react';

const carouselColors = ['#FCD7DC', '#D9E8FC', '#D9FCDC', '#FCD9FC'];

const Tools = ({ branding, tools }) => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  // Duplicate tools to make seamless scrolling
  const loopedTools = [...tools, ...tools];

  useEffect(() => {
    const width = containerRef.current.scrollWidth / 2; // half width
    controls.start({
      x: [-0, -width],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30, // adjust speed
          ease: 'linear',
        },
      },
    });
  }, [controls]);

  return (
    <section className="w-full py-20  bg-white relative z-50">
      {/* Branding Section */}
      <div className="mx-auto mb-16 max-w-[1340px] w-full px-3">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">
          Branding & Logo
        </h2>
        <div className="grid md:grid-cols-3 gap-12 ">
          {/* Typography */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:h-96">
            <span
              className="inline-block px-5 py-1 mb-8 text-base text-gray-900 rounded-md "
              style={{
                backgroundImage: `linear-gradient(to right, #0d9488, white)`, // orange-50
              }}
            >
              {' '}
              Typography
            </span>
            <p className="text-lg text-gray-800">Primary Font</p>
            <p className="text-3xl font-semibold text-black mb-4">
              {branding.font}
            </p>
            <p className="text-lg text-gray-800 mt-5">Secondary Font</p>
            <p className="text-2xl font-medium text-black">System Default</p>
          </div>

          {/* Colors */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <span
              className="inline-block pl-5 pr-16 py-1 mb-8 text-base text-gray-900 rounded-md"
              style={{
                backgroundImage: `linear-gradient(to right, #FFA500, white)`, // orange-50
              }}
            >
              {' '}
              Colors
            </span>
            <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center">
                <span
                  className="w-20 h-20 rounded-full mb-2"
                  style={{ backgroundColor: branding.colors.primary }}
                ></span>
                <p className="text-lg text-gray-800">Primary</p>
                <p className="text-sm text-gray-500 font-medium">
                  {branding.colors.primary}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span
                  className="w-20 h-20 rounded-full mb-2"
                  style={{ backgroundColor: branding.colors.secondary }}
                ></span>
                <p className="text-lg text-gray-800">Secondary</p>
                <p className="text-sm text-gray-500 font-medium">
                  {branding.colors.secondary}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <span
                  className="w-20 h-20 rounded-full mb-2"
                  style={{ backgroundColor: branding.colors.accent }}
                ></span>
                <p className="text-lg text-gray-800">Accent</p>
                <p className="text-sm text-gray-500 font-medium">
                  {branding.colors.accent}
                </p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-8 p-1">
              Colors don’t just decorate a website, they communicate its soul.
            </p>
          </div>

          {/* Logo */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center ">
            <div className="flex justify-start items-start  w-full">
              <span
                className="inline-block pl-5 pr-16  py-1 mb-8 text-base text-gray-900 rounded-md"
                style={{
                  backgroundImage: `linear-gradient(to right, #f43f5e, white)`, // orange-50
                }}
              >
                {' '}
                Logo
              </span>
            </div>
            <img
              src={branding.logo}
              alt="Brand Logo"
              className="w-52 mb-4 object-contain"
            />
            <p className="text-gray-600 text-sm text-center">
              {branding.about}
            </p>
          </div>
        </div>
      </div>

      {/* Tools Infinite Slider */}
      <div className="mx-auto py-12 px-0 w-full  overflow-hidden ">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center  mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center  text-black">
            Tools & Technologies
          </h2>
          <h1 className="text-lg text-gray-600 text-center md:text-left">
            From code to design, every tool we use ensures speed and smooth
            interactions.
          </h1>
        </div>
        <motion.div
          ref={containerRef}
          animate={controls}
          className="flex gap-6"
          style={{ width: 'max-content' }}
        >
          {loopedTools.map((tool, i) => (
            <div
              className="p-3 rounded-2xl"
              style={{
                backgroundColor: `${
                  carouselColors[i % carouselColors.length]
                }80`,
              }}
            >
              <div
                key={`${tool.title}-${i}`}
                className="min-w-[250px] max-w-[300px] h-52 flex-shrink-0 rounded-xl justify-center px-2 flex flex-col items-center text-center"
                style={{
                  backgroundColor: carouselColors[i % carouselColors.length],
                }}
              >
                <div className="h-20  flex justify-center items-center">
                  <ColoredLogo
                    src={tool.image}
                    color="#74256f"
                    className="w-40  mb-4 object-contain"
                    alt="Brand Logo"
                  />
                </div>
                <h3 className="font-medium text-2xl text-gray-800">
                  {tool.title}
                </h3>
                <p className="text-sm text-black">{tool.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
