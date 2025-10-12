import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import analytics from './images/1.svg';
import solution from './images/3.svg';
import server from './images/2.svg';
import security from './images/4.svg';
import { MdControlPoint } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Blueprint = ({ scrollRefs }) => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const headerRef = useRef(null);
  const headerWrapperRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/book-a-meeting');
  };

  const handleScroll = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const addToImagesRef = (el) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = containerRef.current.querySelectorAll('.text-section');

    // initial state (first image open, rest hidden)
    imagesRef.current.forEach((img, index) => {
      gsap.set(img, {
        clipPath: index === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)',
      });
    });

    // 🔥 Scale animation for text sections
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { scale: 0.85, opacity: 0.7 },
        {
          scale: 1,
          opacity: 1,
          duration: 3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true, // smooth scroll effect (reverses on scroll back)
          },
        }
      );
    });

    // image transitions
    const triggers = Array.from(sections).map((section, index) =>
      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        end: 'bottom top',
        onEnter: () => animateSection(index),
        onEnterBack: () => animateSection(index),
        onLeave: () => hideImage(index, sections.length),
        onLeaveBack: () => hideImage(index, sections.length, true),
      })
    );

    // pin header
    if (headerWrapperRef.current && headerRef.current) {
      ScrollTrigger.create({
        trigger: headerWrapperRef.current,
        start: 'top top',
        endTrigger: sections[sections.length - 1],
        end: 'bottom bottom',
        pin: headerRef.current,
        pinSpacing: false,
      });
    }

    ScrollTrigger.refresh();

    return () => {
      triggers.forEach((trigger) => trigger.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const animateSection = (index) => {
    gsap.to([containerRef.current, headerRef.current], {
      backgroundColor: '#00000f',
      duration: 0.5,
      ease: 'power2.out',
    });
    gsap.to(imagesRef.current[index], {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const hideImage = (index, length, isBack = false) => {
    if ((!isBack && index < length - 1) || (isBack && index > 0)) {
      gsap.to(imagesRef.current[index], {
        clipPath: 'inset(100% 0% 0% 0%)',
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  };

  const sectionsData = [
    {
      title: 'Data Insights Dashboard',
      desc: 'Gain actionable insights with a customizable data analytics dashboard that helps you visualize trends, spot opportunities, and make smarter decisions faster.',
      caption: 'Your data our responsibility',
    },
    {
      title: 'Scalable Web Solution',
      desc: 'Deliver flexible, high-performance web solutions that adapt to your growth — built for speed, optimized for SEO, and easy to maintain.',
      caption: 'Grow Without Limits',
    },
    {
      title: 'Server Management',
      desc: 'Ensure uninterrupted business operations with expert server management, proactive monitoring, and performance tuning to keep everything running smoothly.',
      caption: 'Maximize Uptime, Minimize Worries',
    },
    {
      title: 'Enterprise-Grade Security',
      desc: 'Protect your critical data and infrastructure with enterprise-grade security — including encryption, access control, and real-time threat detection.',
      caption: 'Security That Scales With You',
    },
  ];

  const sectionImages = [analytics, solution, server, security];

  return (
    <div className=" bg-purpleBg relative pb-20 ">
      <img
        src="/bgIcons/blue-square.svg"
        className="absolute w-44 -top-64 left-10  z-50"
        alt=""
      />

      <div ref={containerRef} className=" bg-purpleBg  relative">
        <div ref={headerWrapperRef} className="relative  z-40">
          <div
            ref={headerRef}
            className="mx-auto text-center w-full h-56   z-10 relative transition-colors duration-500"
          >
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
              Blueprint
            </div>
            <img
              src="/bgIcons/js.svg"
              className="absolute w-56  top-10 right-40 animate-cell-ripple z-50"
              alt=""
            />
            <div className="absolute -top-9  -translate-x-1/2 left-1/2 w-[900px] h-[200px] blur-[100px]  bg-[#0d0457]  opacity-35 z-50" />

            <h1
              data-aos="fade-up"
              className="text-7xl font-bold bg-gradient-to-r capitalize text-white  w-fit mx-auto text-transparent bg-clip-text"
            >
              A dominant website,
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-purpleLight text-lg py-1 md:w-[50%] mx-auto mt-2"
            >
              That Attracts Visitors, Boosts Conversions, Elevates Your Brand
              Online, and Delivers Lasting Results Seamlessly and Effectively
              for You
            </h1>
          </div>
        </div>

        <div className="flex mx-auto -mt-10 w-full max-w-[1140px] xl:max-w-[1240px] 2xl:max-w-[1340px] ">
          {/* LEFT SIDE (text sections with scale effect) */}
          <div className="relative xl:w-[55%] 2xl:w-[50%] z-10 ">
            {sectionsData.map(({ title, desc, caption }, index) => (
              <div
                key={index}
                className="text-section h-[650px] flex flex-col justify-center p-4 pl-0 items-end text-end pr-20 relative"
              >
                <div className="border border-gray-800 flex flex-col justify-center px-6 py-10 rounded-xl pl-0 items-end text-end relative overflow-hidden">
                  <div className="absolute w-[1400px] h-[2100px] -right-[130%] blur-[50px] opacity-90 top-0 border-[20px] border-[#211497] rounded-full" />
                  <div className="absolute w-32 h-10 bg-[#1c08d0] -top-5 right-3 -rotate-[25deg] blur-[50px]" />
                  <div className="absolute w-32 h-10 bg-[#1c08d0] -bottom-5 -left-5 -rotate-[25deg] blur-[50px]" />
                  <div className="absolute w-32 h-32 bg-[#1c08d0] -top-10 -left-10 -rotate-[25deg] blur-[100px]" />
                  <h1 className="text-xl md:text-2xl text-[#d1b6cf] mb-3 w-[80%]">
                    How it works
                  </h1>
                  <h1 className="text-2xl md:text-3xl font-black text-white">
                    {title}
                  </h1>
                  <div
                    className="my-3 -mr-14"
                    style={{
                      height: '1px',
                      width: '400px',
                      backgroundImage:
                        'linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.3), rgba(255,255,255,0))',
                    }}
                  ></div>

                  <p className="text-sm md:text-lg w-full md:w-[90%] text-[#f0e7ef]">
                    {desc}
                  </p>
                  <h1 className="text-lg mt-5 text-white">{caption}</h1>
                  <div className="flex gap-5 mt-5">
                    <div>
                      <button
                        onClick={handleClick}
                        className="btn2 w-40 h-12 relative overflow-hidden bg-[#760047] rounded-md hover:border border-gray-700 "
                      >
                        <span className="absolute inset-0 bg-[#000033]" />
                        <span className="absolute inset-0 flex justify-center items-center text-white">
                          Let's talk! 1:1
                        </span>
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => handleScroll(scrollRefs?.projectsRef)}
                        className="btn2 relative border border-purpleBlur w-40 h-12 rounded-md text-purpleLight overflow-hidden hover:border-purpleNormal hover:text-white transition-all duration-300"
                      >
                        <span className="absolute inset-0 bg-[#760047]"></span>
                        <span className="absolute inset-0 flex justify-center items-center">
                          Explore
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE (images) */}
          <div className="xl:w-[45%] 2xl:w-[50%] sticky h-[650px] top-48 flex items-center justify-center z-50 ">
            <div className="absolute bottom-[0%] blur-[100px] w-[300px] h-[300px] bg-[#150570] rounded-full opacity-50" />
            <div className="absolute -top-10 -right-20 blur-[100px] w-[300px] h-[300px] bg-[#150570] rounded-full opacity-50" />

            {sectionImages.map((src, index) => (
              <div
                key={index}
                ref={addToImagesRef}
                className="absolute border border-gray-800 p-2 rounded-3xl shadow-2xl w-full z-50 bg-white/5"
              >
                <img
                  src={src}
                  alt={`Section ${index + 1}`}
                  className="rounded-2xl border border-gray-700 z-50"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blueprint;
