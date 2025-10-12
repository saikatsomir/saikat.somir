import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import analytics from './images/1.svg';
import solution from './images/3.svg';
import server from './images/2.svg';
import security from './images/4.svg';
import { MdControlPoint } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export const SmBlueprint = ({ scrollRefs }) => {
  const imagesRef = useRef([]);
  const containerRef = useRef(null);
  const [showMore, setShowMore] = useState(false);
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
    const sections = containerRef.current.querySelectorAll('.text-section');

    // Initial setup: show first image
    imagesRef.current.forEach((img, i) => {
      img.style.opacity = i === 0 ? '1' : '0';
    });

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => showImage(index),
        onEnterBack: () => showImage(index),
      });

      // Fancy text animation
      gsap.fromTo(
        section.querySelectorAll('h2, h3, p'),
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          },
        }
      );
    });

    function showImage(index) {
      imagesRef.current.forEach((img, i) => {
        img.style.opacity = i === index ? '1' : '0';
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const shortText =
    'That Attracts Visitors, Boosts Conversions, Elevates Your Brand Online, and ';
  const fullText =
    'That Attracts Visitors, Boosts Conversions, Elevates Your Brand Online, and Delivers Lasting Results Seamlessly and Effectively for You ';

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
    <div className="bg-purpleBg pt-10 pb-10 relative">
      <div className="flex flex-col items-center text-center  pb-10">
        <div className="absolute -top-9  w-screen h-[170px] blur-[100px]  bg-[#0d0457]  opacity-35 z-0" />
        <div className="bg-white/5 w-32 text-center h-10 flex mx-auto justify-center items-center  gap-1 text-white/90 rounded-lg shadow-sm shadow-[#2710d4] border-gray-800 mb-5 relative">
          <div
            className="my-3 -mr-14  absolute -top-[13px] left-1/2 -translate-x-1/2 z-10"
            style={{
              height: '2px',
              width: '100px',
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0)) ',
            }}
          ></div>
          <MdControlPoint className="text-[10px]" />
          Blueprint{' '}
        </div>
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-transparent bg-clip-text capitalize"
        >
          A dominant website,
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-purpleLight mt-2 lg:w-[65%] text-sm sm:text-base md:text-lg w-[90%]"
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

      <div ref={containerRef} className="relative bg-purpleBg md:px-0 ">
        {/* Sticky Image Wrapper */}
        <div className="sticky top-0 h-[45vh] w-full z-50 flex justify-center items-center pointer-events-none">
          <div className="absolute inset-0 bg-purpleBg" /> {/* background */}
          {sectionImages.map((src, index) => (
            <div
              key={index}
              ref={addToImagesRef}
              className="absolute w-full max-w-[95%] max-h-[80%] rounded-2xl z-10 border border-gray-800 p-1 bg-purpleBg"
            >
              <img
                src={src}
                alt={`Section ${index + 1}`}
                className="w-full h-full object-contain rounded-2xl border border-gray-700"
              />
            </div>
          ))}
        </div>

        {/* Text Sections */}
        <div className="relative z-0 max-w-4xl mx-auto mt-10 w-[95%]">
          {sectionsData.map(({ title, desc, caption }, index) => (
            <div
              key={index}
              className="text-section min-h-[45vh] flex flex-col justify-center relative z-0"
            >
              <div className="z-10 shadow-2xl px-4 py-8 shadow-black rounded-xl border border-gray-800 relative overflow-hidden">
                <div className="absolute w-[600px] h-[600px] -right-96 blur-[50px] opacity-90 -top-5 border-[20px] border-[#211497] rounded-full" />
                <div className="absolute w-32 h-10 bg-[#1c08d0] -top-0 -right-10 -rotate-45 opacity-50 blur-[50px]" />
                <div className="absolute w-10 h-20 bg-[#1c08d0] -bottom-10 left-52 opacity-50  blur-[50px]" />
                <div className="absolute w-20 h-20 bg-[#1c08d0] -top-5 -left-5 opacity-75  blur-[50px]" />
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                  {title}
                </h2>
                <h3 className="text-purpleLight text-lg">{caption}</h3>
                <p className="text-sm md:text-xl text-[#f0e7ef] mb-2">{desc}</p>
                <div className="flex gap-5 mt-5">
                  <div className="">
                    <button
                      onClick={handleClick}
                      className="btn2 w-32 h-10 relative overflow-hidden bg-[#760047] rounded-md"
                    >
                      <span className="absolute inset-0 bg-[#000033]" />
                      <span className="absolute text-sm inset-0 flex justify-center items-center text-white">
                        Let's talk! 1:1
                      </span>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => handleScroll(scrollRefs?.projectsRef)}
                      className="btn2 relative border border-[#760047] w-32 h-10 rounded-md text-purpleLight overflow-hidden hover:border-purpleNormal hover:text-white transition-all duration-300"
                    >
                      <span className="absolute inset-0 bg-[#000033]" />
                      <span className="absolute text-sm inset-0 flex justify-center items-center">
                        Explore
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
