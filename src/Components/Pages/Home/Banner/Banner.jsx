import { useState, useEffect, useRef } from 'react';
import { CiLinkedin, CiMail } from 'react-icons/ci';
import { HiBars2 } from 'react-icons/hi2';
import { RxCross2 } from 'react-icons/rx';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import off from '/1.jpg';
import { motion } from 'framer-motion';

import image1 from './images/1.svg';
import image2 from './images/2.svg';
import Spotlight from '../../ui/background-ripple-effect';

const greetings = [
  'Hello',
  'Hola',
  'Bonjour',
  'Hallo',
  'Ciao',
  'Olá',
  'नमस्ते',
  'こんにちは',
  '안녕하세요',
  '你好',
  'Привет',
  'مرحبا',
  'Salam',
  'Hej',
  'Sawubona',
  'Halo',
  'Merhaba',
  'Kamusta',
  'Selam',
  'Szia',
];

const skills = [
  'UI/UX Design',
  'E-commerce Solutions',
  'SEO Optimization',
  'Performance Optimization',
  'Custom Web Applications',
  'API Integration',
  'Website Maintenance',
];
const shortText =
  ' Whether you’re starting from a simple idea or a detailed plan, we’re here to help you shape it into something extraordinary.';
const fullText =
  'Whether you’re starting from a simple idea or a detailed plan, we’re here to help you shape it into something extraordinary. With a focus on strategy, design, and results, we collaborate closely to bring your vision to life — with clarity, creativity, and care every step of the way.';

const tabs = [
  { name: 'About', refKey: 'aboutRef' },
  { name: 'Brand Guideline', refKey: 'featureRef' },
  { name: 'Case Study', refKey: 'projectsRef' },
  { name: 'Plan', refKey: 'pricingRef' },
  { name: 'Testimonials', refKey: 'testimonialsRef' },
  { name: 'Contact', refKey: 'contactRef' },
];

const navItems = ['Services', 'Contact', 'Pricing', 'Case Studies'];

export const Banner = ({ onTabClick, refs }) => {
  const [showMore, setShowMore] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [activeTab, setActiveTab] = useState('Projects');
  const [showTabs, setShowTabs] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [skillVisable, setSkillVisiable] = useState(true);
  const bannerRef = useRef(null);
  const menuItems = ['Services', 'Contact', 'Pricing', 'Case Studies'];
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % greetings.length); // Move to next greeting
        setIsVisible(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setSkillVisiable(false);

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % skills.length); // Move to next greeting
        setSkillVisiable(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsBannerVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (bannerRef.current) observer.observe(bannerRef.current);
    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowTabs(true);
      } else if (currentScrollY < lastScrollY && isBannerVisible) {
        setShowTabs(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBannerVisible]);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute bottom-0  w-full h-[70px] bg-[#280526] rounded-full blur-3xl opacity-30" />
      <div ref={bannerRef} className="bg-black ">
        <div
          style={{
            backgroundImage: `url("${off}")`,
            backgroundSize: 'cover',
            backgroundPosition: `center ${offsetY * 0.5}px`,
            backgroundRepeat: 'no-repeat',
            width: '100%',
            transition: 'background-position ease',
          }}
        >
          {/* <Spotlight /> */}

          <div className="max-w-[1400px]   mx-auto">
            <div className=" h-[70vh] md:h-[80vh] lg:h-[100vh]">
              <div className="flex justify-between max-w-screen-2xl items-center mx-auto pt-5 px-3 lg:px-0">
                <div>
                  <h1 className="uppercase text-3xl text-white">
                    Saikat<span className="text-red-500">.</span>somir
                  </h1>
                </div>
                <div className="hidden lg:flex gap-10 text-lg text-white uppercase ">
                  {navItems.map((item) => (
                    <motion.button
                      key={item}
                      className="relative overflow-hidden font-neueLight uppercase"
                      whileHover="hover"
                    >
                      <motion.span
                        className="block"
                        initial={{ y: '100%' }}
                        variants={{
                          hover: {
                            y: '0%',
                            transition: { duration: 0.5, ease: 'easeInOut' },
                          },
                        }}
                      >
                        {item}
                      </motion.span>
                      <motion.span
                        className="absolute top-0 left-0 block w-full"
                        initial={{ y: '0%' }}
                        variants={{
                          hover: {
                            y: '-100%',
                            transition: { duration: 0.5, ease: 'easeOut' },
                          },
                        }}
                      >
                        {item}
                      </motion.span>
                    </motion.button>
                  ))}
                </div>

                <div className="flex items-center gap-10">
                  <CiLinkedin className="hidden lg:block text-5xl text-white transition-transform duration-300 hover:-translate-y-1 cursor-pointer" />
                  <CiMail className="hidden lg:block  text-5xl text-white transition-transform duration-300 hover:-translate-y-1 cursor-pointer" />
                  <HiBars2
                    className="text-6xl text-white cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                    onClick={() => setIsSidebarOpen(true)}
                  />
                </div>
              </div>

              <div className="flex  justify-center relative h-[70vh] md:h-[80vh] lg:h-[100vh] items-center  lg:-mt-0">
                <div className="absolute top-1/2 -translate-y-1/2 -mt-16 md:-mt-10 lg:-mt-5">
                  <h1 className="text-[100px] md:text-[200px] lg:text-[330px] text-[#dbdbd4] font-neueBold mb-2 uppercase ">
                    Saikat
                  </h1>
                  <h1 className=" font-bonefesta italic absolute top-96 md:bottom-14 lg:bottom-28 right-0 tracking-wider text-xl md:text-4xl text-white">
                    Somir Bin Monir.
                  </h1>
                  {/* <div className="flex items-center -mt-20">
                    <h1 className="text-xl md:text-3xl font-neueLight  -mt-5 md:mt-0 text-white">
                      If you can imagine it, I can built it. &nbsp;{' '}
                    </h1>
                    <div className="  flex items-end overflow-hidden  ">
                      <h1
                        className={`text-3xl font-neueLight italic font-bold  transition-all duration-300 ease-in-out transform text-red-700 ${
                          isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-5'
                        }`}
                      >
                        {skills[index]}
                      </h1>
                    </div>
                  </div> */}
                </div>
                <h1 className="  absolute bottom-20 md:bottom-20  left-1/2 -translate-x-1/2 w-[70%]   text-[13px] md:text-xl font-neueLight italic pb-10  text-white text-center">
                  Need a business roadmap? &nbsp; Hell yeah — you're on the
                  bloody right path
                </h1>
              </div>
            </div>
          </div>

          {/* Scroll Tabs */}
          {/* <div
            className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 z-50 ${
              showTabs ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="bg-black/60 rounded-full px-4 py-2 flex gap-6 shadow-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => {
                    setActiveTab(tab.name);
                    if (onTabClick && refs[tab.refKey]) {
                      onTabClick(refs[tab.refKey]);
                    }
                  }}
                  className={`px-2 py-1 rounded-full transition-all duration-500 ${
                    activeTab === tab.name
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          </div> */}

          {/* Sidebar */}
          <div
            className={`fixed z-20 top-0 left-0 w-full h-screen bg-gray-900 overflow-hidden transform ${
              isSidebarOpen ? 'translate-y-0' : '-translate-y-full bg-black/50'
            } transition-transform duration-1000 ease-in-out`}
          >
            <div className="bg-black/60 overflow-y-scroll h-full">
              <div className="bg-black/60 h-full max-w-[1400px]  mx-auto ">
                <div className="max-w-screen-2xl mx-auto pt-5 text-white px-4 md:px-6 lg:px-0">
                  <div className="flex justify-between items-center border-b border-gray-700 border-dashed pb-2">
                    <div>
                      <h1 className="uppercase text-3xl text-white">
                        Saikat<span className="text-red-500">.</span>somir
                      </h1>
                    </div>
                    <div className="relative group inline-block rounded-full overflow-hidden">
                      <span className="absolute inset-0 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center z-0" />
                      <RxCross2
                        className="relative z-10 text-5xl sm:text-6xl border text-white rounded-full p-2 cursor-pointer hover:text-black group-hover:text-black transition-all duration-500 hover:-translate-y-1"
                        onClick={() => setIsSidebarOpen(false)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row h-auto lg:h-[70vh]">
                    <div className="w-full lg:w-[50vw]">
                      <div className="h-24 flex items-end pb-2 overflow-hidden border-b-4 w-52 border-dashed">
                        <h1
                          className={`text-4xl font-bold  transition-all duration-300 ease-in-out transform text-[#fdf2d9] ${
                            isVisible
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-5'
                          }`}
                        >
                          {greetings[index]}
                        </h1>
                      </div>
                      <div className="pt-10">
                        <h1 className="text-2xl md:text-4xl sm:text-5xl font-bold text-white font-neue">
                          Got a Project in Mind?
                        </h1>
                        <h1 className="text-xl md:text-3xl sm:text-4xl font-neueMed pt-2">
                          Let’s Build Something Great Together.
                        </h1>
                        <h1 className="hidden md:block text-base sm:text-lg pt-4 font-neueLight">
                          Whether you’re starting from a simple idea or a
                          detailed plan, we’re here to help you shape it into
                          something extraordinary. With a focus on strategy,
                          design, and results, we collaborate closely to bring
                          your vision to life — with clarity, creativity, and
                          care every step of the way.
                        </h1>
                        <h1 className="block md:hidden text-base">
                          {showMore ? fullText : shortText}
                          {!showMore && (
                            <button
                              className="ml-1 underline text-blue-600"
                              onClick={() => setShowMore(true)}
                            >
                              See more
                            </button>
                          )}
                        </h1>
                        <button className="border-2 text-white border-[#fdf2d9] mt-10 w-full md:w-fit px-8 sm:px-10 py-4 sm:py-5 text-xl sm:text-2xl lg:text-3xl transition-transform duration-300 hover:-translate-y-3 font-neueMed">
                          Book Your Free Consultation
                        </button>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="w-full md:w-[50vw] lg:w-[50vw] flex justify-center items-center pt-10 lg:pt-40 ">
                        <div className="relative group rounded-full  overflow-hidden">
                          <span className="absolute inset-0 bg-[#fdf2d9] rounded-full scale-0 group-hover:scale-100 opacity-100 transition-transform duration-500 ease-out origin-center z-0" />
                          <button className="relative z-10 w-80 h-80 sm:w-96 sm:h-96 border rounded-full flex justify-center items-center transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 hover:text-black">
                            <FaWhatsapp className="text-6xl sm:text-[100px] transition-transform duration-300" />
                          </button>
                        </div>
                      </div>

                      <div className="hidden lg:hidden md:flex   w-full md:w-[50vh] lg:w-full  flex-col lg:flex-row h-auto lg:h-[20vh] justify-end items-end  lg:items-end mt-10 lg:mt-0 gap-8 lg:gap-0">
                        <div className="">
                          <h1 className="text-xl font-neueLight">
                            Connect with me
                          </h1>
                          <div className="flex gap-6 pt-3">
                            <FaGithub className="text-3xl sm:text-4xl text-[#fdf2d9] transition-transform duration-300 hover:-translate-y-1 cursor-pointer" />
                            <FaLinkedin className="text-3xl sm:text-4xl text-[#fdf2d9] transition-transform duration-300 hover:-translate-y-1 cursor-pointer" />
                            <SiGmail className="text-3xl sm:text-4xl text-[#fdf2d9] transition-transform duration-300 hover:-translate-y-1 cursor-pointer" />
                          </div>
                        </div>
                        <div className="text-right ">
                          <h1 className="text-lg sm:text-xl text-[#fdf2d9] font-neueLight">
                            I don’t believe in success — I believe in never
                            giving up.
                          </h1>
                          <h1 className="font-sloop text-xl sm:text-2xl pt-2">
                            Saikat Somir
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:hidden lg:flex  w-full md:w-[50vh] lg:w-full  flex-col lg:flex-row h-auto lg:h-[20vh] justify-between items-start lg:items-end mt-10 lg:mt-0 gap-8 lg:gap-0">
                    <div className="hidden md:block">
                      <h1 className="text-xl font-neueLight">
                        Connect with me
                      </h1>
                      <div className="flex gap-6 pt-3">
                        <FaGithub className="text-3xl sm:text-4xl text-[#fdf2d9] transition-transform duration-300 hover:-translate-y-1 cursor-pointer" />
                        <FaLinkedin className="text-3xl sm:text-4xl text-[#fdf2d9] transition-transform duration-300 hover:-translate-y-1 cursor-pointer" />
                        <SiGmail className="text-3xl sm:text-4xl text-[#fdf2d9] transition-transform duration-300 hover:-translate-y-1 cursor-pointer" />
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <h1 className="text-base md:text-lg text-[#fdf2d9] font-neueLight">
                        I don’t believe in success — I believe in never giving
                        up.
                      </h1>
                      <h1 className="font-sloop text-xl sm:text-2xl pt-2">
                        Saikat Somir
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
