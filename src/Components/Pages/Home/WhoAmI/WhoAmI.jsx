import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import idea from './images/idea.png';
import developing from './images/developing.png';
import launch from './images/launch.png';
import growth from './images/growth.png';

import webDevelopment from './images/icons/web-development.png';
import seoPage from './images/icons/seo-page.png';
import eSolution from './images/icons/e-solution.png';
import landingPage from './images/icons/landing-page.png';
import webDesigning from './images/icons/web-designing.png';
import mailMarketing from './images/icons/mail-marketing.png';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { MdControlPoint } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export const WhoAmI = () => {
  const [showMore, setShowMore] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/book-a-meeting');
  };

  const shortText =
    'With 5+ years and 100+ projects, I create sleek, scalable, story-driven digital ';
  const fullText =
    'With 5+ years and 100+ projects, I create sleek, scalable, story-driven digital experiences that engage users and deliver lasting impact. ';

  const specialization = [
    { title: 'Web Development', image: webDevelopment },
    { title: 'SEO Optimization Page', image: seoPage },
    { title: 'E-Commerce Solution', image: eSolution },
    { title: 'Page Automation', image: landingPage },
    { title: 'Web Designing', image: webDesigning },
    { title: 'Email Marketing', image: mailMarketing },
  ];

  const faqData = [
    {
      title: 'Clarify and Define Your Brand',
      content:
        "Before building your website or marketing strategy, it's essential to clearly define what your brand stands for.",
      points: [
        'Identify purpose clearly',
        'Understand your target audience',
        'Highlight what makes your brand unique',
        'Define a consistent brand voice and tone',
        'Research competitors thoroughly',
      ],
      image: idea,
    },
    {
      title: 'Design and Develop the Website',
      content:
        'Create a visually appealing and functional website that reflects your brand. Focus on user experience and smooth navigation.',
      points: [
        'Plan layout efficiently',
        'Design for mobile and desktop',
        'Ensure accessibility and smooth navigation',
        'Integrate essential functionalities',
        'Create consistent branding visuals',
      ],
      image: developing,
    },
    {
      title: 'Launch and Optimize Your Website',
      content:
        'After development, launch your website. Ensure everything functions correctly, optimize for speed and SEO, and monitor usage.',
      points: [
        'Test functionality properly',
        'Optimize speed and performance',
        'Set up analytics and SEO tools',
        'Monitor user behavior',
        'Implement security and feedback loops',
      ],
      image: launch,
    },
    {
      title: 'Maintain and Grow Your Online Presence',
      content:
        'Keep your website fresh with updates, new content, and marketing strategies to grow traffic.',
      points: [
        'Update content regularly',
        'Fix bugs quickly',
        'Promote brand consistently',
        'Add new features/blog posts',
        'Analyze performance and adjust',
      ],
      image: growth,
    },
  ];

  const handleMouseLeave = () => {
    setActiveIndex(lastActiveIndex);
  };

  const handleMouseMove = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
      setLastActiveIndex(index);
    }
  };

  return (
    <div className="bg-purpleBg relative overflow-hidden md:mt-0 md:pb-40 pt-10 md:pt-40">
      <div className="">
        <div className="hidden md:block absolute top-32 left-0 w-[300px] h-[600px] bg-[#000033] blur-[100px] opacity-40" />
        <img
          src="/bgIcons/triangle.svg"
          className="absolute top-0 w-24 md:top-52 md:left-10 sm:w-48  z-50"
          alt=""
        />
      </div>

      {/* Floating Dots */}
      {/* <div className="hidden md:block">
        {[
          ['top-80 right-72'],
          ['top-1/2 right-20'],
          ['top-[95%] right-72'],
          ['top-[90%] left-96'],
        ].map((pos, idx) => (
          <img
            key={idx}
            src="./dot.svg"
            alt="dot"
            className={`absolute ${pos} scale-50 hover:scale-125 transition-all duration-500 z-50`}
          />
        ))}
      </div> */}

      {/* Main Section */}
      <div className="w-full max-w-[1140px] xl:max-w-[1240px] 2xl:max-w-[1340px] mx-auto pt-10 px-2 md:px-0 md:pt-28 pb-14 relative z-40">
        {/* Title */}
        <div className="absolute top-96  -right-20 w-[300px] h-[300px] blur-[100px]  bg-[#0d0457]  opacity-35 -z-10" />
        <div className="absolute -top-9  -translate-x-1/2 left-1/2 w-[900px] h-[200px] blur-[100px]  bg-[#0d0457]  opacity-35 z-50" />

        <div className="flex flex-col items-center text-center">
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
            Who Am I
          </div>
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-transparent bg-clip-text capitalize"
          >
            An expert sharp artist,
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-purpleLight mt-2 w-[90%] lg:w-[50%] text-sm sm:text-base md:text-lg"
          >
            <span className="block md:hidden">
              {showMore ? fullText : shortText}
              {!showMore && (
                <button
                  className="ml-1 underline text-blue-600"
                  onClick={() => setShowMore(true)}
                >
                  See more
                </button>
              )}
            </span>
            <span className="hidden md:block">{fullText}</span>
          </p>
        </div>

        <div className="pt-10 md:pt-14 lg:pt-20 block md:hidden px-2 ">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={20}
            slidesPerView={4} // adjust for desktop
            speed={1000} // duration to slide one set
            autoplay={{
              delay: 3, // no pause
              disableOnInteraction: true,
            }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 12 },
              640: { slidesPerView: 3, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 24 },
            }}
            className="w-full"
          >
            {specialization.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  data-aos="flip-up"
                  data-aos-delay={index * 100}
                  className=" w-44 sm:w-40 md:w-48 h-40 md:h-44 rounded-lg p-1 rombo motion-ease-spring-bouncier motion-scale-in-[0.7] motion-translate-y-in-[20%] border border-gray-800 relative overflow-hidden"
                >
                  <div className="border rounded-lg border-gray-700 w-full h-full flex flex-col items-center justify-center overflow-hidden relative">
                    <div className="absolute w-24 h-24 bg-[#1c08d0] -top-10 -left-10 blur-[100px] " />

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 sm:w-14 md:w-20 mb-3"
                    />
                    <h2 className="text-xs sm:text-sm md:text-base font-medium text-purpleLight text-center">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Specialization */}
        <div className=" flex-wrap justify-center  sm:justify-between gap-5 my-10 md:my-16 hidden md:flex z-50">
          {specialization.map((item, index) => (
            <div
              key={index}
              data-aos="flip-up"
              data-aos-delay={index * 100}
              // className="bg-white/10 p-1.5 rounded-xl"
              className="border p-1 rounded-lg border-gray-800"
            >
              <div className="flex flex-col items-center justify-center w-40 xl:w-44  2xl:w-48 xl:h-40 2xl:h-44 rounded-lg p-3 rombo motion-ease-spring-bouncier motion-scale-in-[0.7] motion-translate-y-in-[20%] border border-gray-700 relative overflow-hidden">
                <div className="absolute w-32 h-32 bg-[#1c08d0] -top-10 -left-10 -rotate-[25deg] blur-[100px] " />

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 sm:w-16 md:w-20 mb-3"
                />
                <h2 className="text-xs sm:text-sm md:text-base font-medium text-purpleLight text-center">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="flex justify-center  mt-10 md:mt-0 px-1 md:px-0"
        >
          <div
            className="flex flex-col md:flex-row  md:h-[650px] 2xl:h-[700px]  space-y-4 md:space-y-0 space-x-0 md:space-x-4 overflow-x-auto md:overflow-visible scrollbar-hide "
            onMouseLeave={handleMouseLeave}
          >
            {faqData.map((faq, idx) => {
              const isOpen = idx === activeIndex;
              const isOdd = idx % 2 !== 0;

              return (
                <div
                  key={idx}
                  className={`group relative transition-all duration-500 overflow-hidden rounded-lg flex-shrink-0  ${
                    isOdd ? 'bg-[#000033]' : 'bg-[#760047]'
                  } ${
                    isOpen
                      ? 'w-full  md:w-[400px] xl:w-[902px] 2xl:w-[1002px]'
                      : 'h-20 md:h-full md:w-24'
                  }`}
                  onMouseEnter={() => handleMouseMove(idx)}
                >
                  {/* Title (collapsed view) */}
                  <div
                    className={`absolute text-base md:text-3xl lg:text-2xl tracking-wide font-semibold pl-3 md:pl-0 
                      md:left-10 bottom-4 md:bottom-0 -translate-y-1/2 origin-left transform md:-rotate-90 
                      px-2 text-white whitespace-nowrap transition-opacity duration-200 
                      ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                  >
                    {faq.title}
                  </div>

                  {/* Content (expanded view) */}
                  <div
                    className={`pl-4 py-4 transition-opacity duration-700 cursor-default text-white ${
                      isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="">
                      <div className="w-full md:w-[400px] lg:w-[1060px]  md:p-5 ">
                        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                          Phase: {idx + 1}
                        </h1>
                        <h2 className="text-lg md:text-2xl font-semibold mt-3 ">
                          {faq.title}
                        </h2>

                        {/* Mobile Image */}
                        <div className="w-full flex md:hidden justify-center">
                          <img
                            className="w-[200px] sm:w-[250px] py-4"
                            src={faq.image}
                            alt=""
                          />
                        </div>

                        <p className="text-sm md:text-lg mt-3 w-full md:w-[70%] ">
                          {faq.content}
                        </p>
                      </div>

                      <div className="flex flex-col lg:flex-row lg: justify-between lg:items-center p-5">
                        <ul className="flex flex-col gap-2 md:gap-3 w-full md:w-[40vw] ">
                          {faq.points.map((point, pointIdx) => (
                            <li
                              key={pointIdx}
                              className="flex items-center gap-2 text-sm md:text-lg"
                            >
                              <FaCheck /> {point}
                            </li>
                          ))}
                        </ul>

                        {/* Desktop Image */}
                        <div className="hidden lg:flex justify-center ">
                          <img
                            className="w-[250px] md:w-[350px]  2xl:w-[450px] "
                            src={faq.image}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div
          data-aos="zoom-in"
          className="w-full flex justify-center items-center md:pt-10 z-50"
        >
          <button
            onClick={handleClick}
            className="btn2 w-44 md:w-80 py-6 relative leading-none overflow-hidden bg-[#760047] hover:border border-gray-800 rounded-md mt-5"
            type="button"
          >
            <span className="absolute inset-0 bg-[#000033] "></span>
            <span className="absolute inset-0 flex justify-center items-center text-white">
              Let's talk! 1:1
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
