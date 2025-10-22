import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import grid from '/grid-bg.png';
import {
  MdControlPoint,
  MdNoiseControlOff,
  MdOutlineWebhook,
} from 'react-icons/md';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import BackgroundLines from '../../ui/background-lines';
import { useNavigate } from 'react-router-dom';

const webSolution = [
  {
    title: 'Web Developing',
    description: 'Fast, modern, and responsive websites.',
    image: <MdOutlineWebhook />,
  },
  {
    title: 'Marketing Solution',
    description: 'Smart strategies to grow online.',
    image: <HiOutlineSpeakerphone />,
  },
  {
    title: 'Consulting Services',
    description: 'Expert advice for your business.',
    image: <MdNoiseControlOff />,
  },
  {
    title: 'Client Engagement',
    description: 'Connect better with your audience.',
    image: <MdOutlineWebhook />,
  },
  {
    title: 'You Should Know',
    description: 'Tips and insights that matter.',
    image: <MdNoiseControlOff />,
  },
];

export const Slogan = () => {
  const [activeItem, setActiveItem] = useState(webSolution[1]); // default
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/book-a-meeting');
  };

  // Animation variants for header
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const subHeaderVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
    },
  };

  return (
    <div
      className="bg-purpleBg min-h-screen relative flex justify-center rounded-b-3xl px-4 sm:px-6 lg:px-10"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient line */}
      <div
        className="my-3 -mr-14 -bottom-3 absolute left-1/2 -translate-x-1/2 z-10"
        style={{
          height: '3px',
          width: '90%',
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0))',
        }}
      ></div>

      {/* Background blurs */}
      <div className="absolute -top-9 -translate-x-1/2 left-1/2 w-full md:w-[900px] h-[300px] blur-[100px] bg-[#0d0457] opacity-35 z-50" />
      <div className="absolute bottom-0 right-0 w-[500px] hidden md:block h-[100px] md:h-[300px] blur-[100px] bg-[#0d0457] opacity-35 z-50" />
      <div className="absolute bottom-0 left-0 w-[300px] hidden md:block h-[300px] blur-[100px] bg-[#0d0457] opacity-35 z-50" />

      <div className="xl:max-w-[1300px] 2xl:max-w-[1340px] w-full mx-auto">
        {/* Headings */}
        <div className="mt-10 mb-16 sm:mb-24 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
          >
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r text-white w-fit mx-auto text-transparent bg-clip-text"
            >
              Build. Grow. Connect,
            </h1>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={subHeaderVariants}
          >
            <h2 className="text-purpleLight text-base sm:text-lg py-1 md:w-[70%] lg:w-[50%] mx-auto mt-2">
              Websites, marketing, and insights designed to elevate your brand
              and strengthen audience relationships.
            </h2>
          </motion.div>
        </div>

        {/* Circle + Right Section */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Circle */}
          <div className="w-full lg:w-[50%]">
            <div className="relative border border-purpleLight rounded-full h-[350px] sm:h-[450px] md:h-[550px] w-[350px] sm:w-[450px] md:w-[550px] flex justify-center items-center mx-auto md:mx-0">
              <div className="absolute w-[300px] h-[300px] bg-[#0d0457] rounded-full z-10 blur-[100px]" />

              <div className="w-[220px] sm:w-[270px] md:w-[320px] h-[220px] sm:h-[270px] md:h-[320px] mx-auto rounded-full bg-[#0d0457]/50 shadow-xl shadow-black flex flex-col justify-center items-center text-center px-6 transition-all duration-300 z-50">
                <div className="text-white text-4xl sm:text-5xl md:text-6xl mb-4">
                  {activeItem.image}
                </div>
                <h1 className="text-lg sm:text-xl text-white font-semibold">
                  {activeItem.title}
                </h1>
                <p className="text-purpleLight text-xs sm:text-sm mt-1">
                  {activeItem.description}
                </p>
              </div>

              {webSolution.map((item, index) => {
                const angle = (index / webSolution.length) * 2 * Math.PI;
                const baseRadius = 170;
                const smRadius = 200;
                const mdRadius = 260;
                let radius = baseRadius;
                if (window.innerWidth >= 648) radius = smRadius;
                if (window.innerWidth >= 768) radius = mdRadius;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                const iconClass =
                  'absolute z-20 flex justify-center items-center w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-full bg-[#0d0457] text-white text-2xl sm:text-3xl cursor-pointer transition-transform active:scale-95';

                return (
                  <div
                    key={index}
                    role="button"
                    tabIndex={0}
                    onMouseEnter={() => setActiveItem(item)}
                    onClick={() => setActiveItem(item)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveItem(item);
                      }
                    }}
                    className={iconClass}
                    style={{
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {item.image}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Text Section */}
          <div className="w-full lg:w-[50%] py-10">
            <BackgroundLines className="px-0 h-fit lg:sticky top-28 mr-0 lg:mr-32">
              <div>
                <h1 className="text-purpleLight text-lg sm:text-xl md:text-2xl">
                  Hold on a sec!
                </h1>
                <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold capitalize pt-3 lg:pt-5 leading-tight">
                  Do you have anything on your mind?
                </h1>
                <h1 className="pt-3 lg:pt-5 text-sm sm:text-base text-purpleLight w-full">
                  If you can imagine it, I can build it. I create fast, fluid,
                  unforgettable digital experiences that combine bold visuals,
                  seamless interactions, and clean front-end magic to engage
                  audiences, inspire trust, and leave lasting impressions across
                  every screen.
                </h1>
                <button
                  onClick={handleClick}
                  className="btn2 w-44 md:w-80 py-4 sm:py-6 relative leading-none overflow-hidden bg-[#760047] hover:border border-gray-700 rounded-md mt-6 sm:mt-7"
                  type="button"
                >
                  <span className="absolute inset-0 bg-[#000033]" />
                  <span className="absolute inset-0 flex justify-center items-center text-white text-sm sm:text-base">
                    Let's talk! 1:1
                  </span>
                </button>
              </div>
            </BackgroundLines>
          </div>
        </div>
      </div>
    </div>
  );
};
