import { useEffect, useRef } from 'react';
import godfather from './images/1.jpg';
import godfather2 from './images/3.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AcKnow = () => {
  const containerRef = useRef(null);
  const leftText = useRef(null);
  const rightText = useRef(null);
  const topText = useRef(null);
  const bottomText = useRef(null);
  const imageWrapper = useRef(null);
  const firstImage = useRef(null);
  const offerText = useRef(null);
  const centerImageRef = useRef(null);
  const offerAfterText = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'center center',
        end: '+=5000',
        scrub: 1,
        // markers: true,
        pin: true,
      },
    });

    // Text Animations

    tl.to(
      leftText.current,
      { x: -400, opacity: 0, duration: 3, ease: 'power2.out' },
      'a'
    );
    tl.to(
      rightText.current,
      { x: 400, opacity: 0, duration: 3, ease: 'power1.out' },
      'a'
    );
    tl.to(
      bottomText.current,
      { y: 400, duration: 3, ease: 'power1.out', opacity: 0 },
      'a'
    );
    tl.to(
      offerText.current,
      {
        y: -400,
        opacity: 0,
        duration: 1.5,
      },
      'a'
    );

    // Clip-Path Animation for Image Transition
    tl.to(
      firstImage.current,
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Expands to full view
        duration: 1.5,
        ease: 'power2.out',
      },
      'a'
    );

    tl.to(
      imageWrapper.current,
      {
        width: '100vw',
        height: '120vh',
        duration: 10,
        ease: 'power2.inOut',
        marginTop: 0,
        paddingTop: 0,
        top: 0,
      },
      'b'
    );
    // Expand Image to Full-Screen
    tl.to(
      firstImage.current,
      {
        width: '100vw',
        height: '100vh',
        top: '50%',
        left: '50%',
        x: '-50%',
        y: '-50%',
        marginTop: 0,
        paddingTop: 0,
        duration: 10,
        ease: 'power2.inOut',
      },
      'b'
    );
    tl.to(
      centerImageRef.current,
      {
        top: -330,
        duration: 10,
      },
      'b'
    );
    tl.to(
      topText.current,
      {
        y: -300,
        opacity: 0,
        delay: 3,
        duration: 3,
        ease: 'power2.out',
      },
      'a'
    );
    tl.to(
      offerAfterText.current,
      {
        y: '100%',
        opacity: 70,
        ease: 'power2.out',
        duration: 10,
        // delay: 6,
        delay: 6,
      },
      'b'
    );
  }, []);

  return (
    <div
      className=" h-[120vh] bg-[#fdf2d9] overflow-hidden m-0 p-0"
      ref={containerRef}
    >
      <div className="bg-[#fdf2d9]">
        {/* TOP HEADLINE TEXT  */}
        <div ref={topText}>
          <h1 className="text-black font-neueBold text-[150px] uppercase text-center pt-10">
            Acknowledge me
          </h1>
          <h1 className="text-2xl text-black font-neueLight italic text-center -mt-10">
            Build dynamic, secure, and scalable websites tailored for seamless
            user experiences.
          </h1>
        </div>

        {/* THE MAIN CONTAINER  */}
        <div className="flex items-center mt-16 justify-center">
          {/* Left Text */}
          <div
            className="w-1/3 h-[650px] border-black text-end flex justify-end items-center"
            ref={leftText}
          >
            <h1 className="text-[90px] font-neueBold text-black uppercase pr-10">
              I am gonna <br /> make you an
            </h1>
          </div>

          {/* Centered Image */}
          <div className="relative p-0" ref={centerImageRef}>
            <div
              ref={imageWrapper}
              className="relative w-[450px] h-[650px] overflow-hidden"
            >
              {/* Second Image (Visible) */}
              <img
                src={godfather}
                className="w-[450px] h-[650px] mx-auto object-cover absolute top-0 left-0"
                alt=""
              />
              {/* First Image (Revealed by Clip-Path & Expanded to Full-Screen) */}
              <img
                ref={firstImage}
                src={godfather2}
                className="w-[450px] h-[650px] mx-auto object-cover absolute top-0 left-0 bg-black/45 overflow-hidden"
                style={{
                  clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)', // Initially hidden
                  transition: 'clip-path 1.5s ease-out',
                }}
                alt=""
              />
            </div>

            <h1
              ref={offerAfterText}
              className="text-[90px] bg-black/70 absolute inset-0 text-center flex items-center justify-center text-white font-neueBold uppercase  tracking-[10px] -top-[100%] opacity-0 h-full overflow-hidden"
            >
              I am gonna make you an offer you can't refuse
            </h1>
            <h1
              ref={offerText}
              className="text-[90px] absolute inset-0 flex items-center justify-center text-white font-neueBold uppercase opacity-70 tracking-[10px] "
            >
              Offer
            </h1>
          </div>

          {/* Right Text */}
          <div
            className="w-1/3 h-[650px] border-black flex items-center"
            ref={rightText}
          >
            <h1 className="text-[90px] font-neueBold text-black uppercase pl-10">
              you can’t <br /> refuse it.
            </h1>
          </div>
        </div>

        {/* Bottom Text */}
        <div ref={bottomText} className="">
          <h1 className="text-2xl text-center font-neueLight italic text-black pt-10">
            Get an unbeatable deal with top-tier solutions, reliability, and
            success—an offer you can’t refuse.
          </h1>
        </div>
      </div>
    </div>
  );
};
