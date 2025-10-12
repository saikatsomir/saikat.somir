import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import boost from './images/boost.svg';
import brand from './images/brand.svg';
import automate from './images/automate.svg';
import stream from './images/stream.svg';
import sales from './images/sales.svg';
import comp from './images/old-com.svg';
import earth from './images/earth.webp';
import idea from './images/idea.gif';

gsap.registerPlugin(ScrollTrigger);

export const Feature = () => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);
  const bringinRef = useRef(null);
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);
  const containerRef = useRef(null);
  const centerContainerRef = useRef(null);
  const cardDivRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  // Helper to store card DOM nodes.
  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  // Main timeline for text/container animations
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        // markers: true,
        start: '50% 50%',
        end: '+=9500', // Extended scroll duration so the container stays pinned
        scrub: 3,
        pin: true,
      },
    });

    tl.to(
      topTextRef.current,
      {
        top: '-15%',
        delay: 0.4,
        duration: 1,
        // opacity: 0,
      },
      'a'
    );
    tl.to(
      bottomTextRef.current,
      {
        bottom: '-15%',
        delay: 0.4,
        duration: 1,
        // opacity: 0,
      },
      'a'
    );
    // tl.to(
    //   centerContainerRef.current,
    //   {
    //     height: '100vh',
    //     duration: 10,
    //   },
    //   'a'
    // );
    tl.to(
      textRef1.current,
      {
        bottom: 100,
        delay: 1,
        duration: 6,
      },
      'a'
    );
    tl.to(
      textRef2.current,
      {
        top: -100,
        delay: 1,
        duration: 6,
      },
      'a'
    );
    tl.to(
      textRef3.current,
      {
        x: '400px',
        opacity: 0,
        duration: 2,
      },
      'a'
    );
    tl.to(
      textRef4.current,
      {
        x: '-400px',
        opacity: 0,
        duration: 2,
      },
      'a'
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  // Timeline for sequential card removal
  useEffect(() => {
    const cardTl = gsap.timeline({
      scrollTrigger: {
        // Use the centerContainerRef as trigger so that the card removal starts only after the center container is fully expanded.
        trigger: centerContainerRef.current,
        // markers: true,
        start: 'bottom center', // When the bottom of centerContainerRef hits the center of the viewport
        end: '+=6000',
        scrub: 3,
      },
    });
    cardTl.to(
      centerContainerRef.current,
      {
        height: '100vh',
        duration: 10,
      },
      'a'
    );
    cardTl.to(
      cardDivRef.current,
      {
        top: 100,
        duration: 10,
        opacity: 1,
        ease: 'power2.out',
      },
      'a'
    );
    cardTl.to(
      bringinRef.current,
      {
        y: 0, // Moves it to the center
        opacity: 1, // Fades it in
        ease: 'power2.out',
        duration: 10,
      },
      'a'
    );
    // Reverse the cards array so that the top card (the one with the highest stacking order) comes first.
    // Then, remove all except the last remaining card.
    const reversedCards = [...cardRefs.current].reverse();
    const cardsToRemove = reversedCards.slice(0, -1);
    const lastCard = reversedCards[reversedCards.length - 1];

    // For each card, add its removal tween and then a pause tween.
    cardsToRemove.forEach((card, index) => {
      cardTl
        .to(card, {
          opacity: 0,
          x: index % 2 === 0 ? '-800px' : '800px',
          y: 200, // Moves slightly downward, creating a curved effect
          rotation: index % 2 === 0 ? -15 : 15, // Adds slight rotation for a dynamic feel
          rotationY: 90, // Flips the card
          boxShadow:
            'rgba(255, 255, 255, 0.6) 50px 20px, rgba(255, 255, 255, 0.5) 50px 50px, rgba(255, 255, 255, 0.4) 15px 15px, rgba(255, 255, 255, 0.3) 20px 20px, rgba(255, 255, 255, 0.2) 25px 25px',
          duration: 10,
          ease: 'power2.out',
        })
        .to({}, { duration: 1 }); // Pause tween (1 second delay)
    }, 'a');
    if (lastCard) {
      cardTl.to(lastCard, {
        scale: 1.1, // Increase the size
        duration: 10,
        ease: 'power2.out',
      });
    }
    // **NEW**: Expand center container after last card animation
    cardTl.to(centerContainerRef.current, {
      height: '370vh', // Adjust as needed
      duration: 10,
      ease: 'power2.in',
      // onComplete: () => {
      //   ScrollTrigger.refresh(); // Recalculate scroll position
      // },
    });
    return () => {
      cardTl.scrollTrigger?.kill();
      cardTl.kill();
    };
  }, []);

  return (
    <div
      className="bg-[#FFFFFF] flex flex-col justify-center h-[100vh] overflow-hidden"
      ref={containerRef}
    >
      <div className="leading-snug">
        <h1
          ref={textRef3}
          className="text-[150px] font-neueBold text-black uppercase font-semibold w-[70%] text-right "
        >
          Let's Bringing
        </h1>

        {/* THE TOP TEXT  */}
        <div className="relative ">
          <div
            ref={topTextRef}
            className="bg-[#FFFFFF] absolute w-full top-0 h-[12vh] text-center overflow-hidden z-10 "
          >
            <h1
              ref={textRef1}
              className="font-sloop pt-2 text-[170px] capitalize  text-center absolute top-[100%] text-black left-[50%] -translate-x-1/2 -translate-y-1/2"
            >
              your Ideas
            </h1>
          </div>

          {/* CENTER CONTAINER STARTS HERE  */}
          <div
            ref={centerContainerRef}
            className="h-[24vh] relative z-0 overflow-hidden"
            style={{
              background:
                'linear-gradient(90deg, rgba(4,17,17,1) 0%, rgba(4,17,17,1) 19%, rgba(0,0,0,1) 49%, rgba(4,17,17,1) 85%)',
            }}
          >
            <div
              ref={bringinRef}
              className="transform -translate-y-[1000px] opacity-0"
            >
              <img
                src={idea}
                alt=""
                className="w-10 mx-auto pt-10 pb-3"
                srcset=""
              />
              <h1 className="font-sloop text-4xl  text-center bg-gradient-to-r from-pink-500 to-white w-fit mx-auto text-transparent bg-clip-text pt-1">
                The idea will be ours
              </h1>
              <h1 className="font-bold w-[50%] mx-auto  text-4xl  pb-3 text-center ">
                Bringing Your  Ideas to Digital Life
              </h1>
              <h1 className="text-xl w-[70%] mx-auto text-center pb-16">
                I turn your ideas into high-performing websites that drive
                growth, attract customers, and power your business online.
              </h1>
            </div>

            {/* CARD SECTION */}
            <div
              ref={cardDivRef}
              className="flex top-96 opacity-0 gap-11 relative justify-center h-screen"
            >
              {/* THE CARD NUMBER: 1  */}
              <div
                ref={addToCardRefs}
                style={{
                  boxShadow: `0 0 15px rgba(255, 215, 0, 0.2), 0 0 30px rgba(255, 215, 0, 0.15), 0 0 45px rgba(255, 215, 0, 0.1)
    `,
                }}
                className="absolute flex justify-center items-center w-[1150px] h-[500px]  rounded-lg bg-[#092429] border"
              >
                <img
                  src={stream}
                  // width={'90%'}
                  className="mx-auto w-[450px]"
                  alt="stream"
                />
                <div className="px-10 w-[50%]">
                  <h1 className="text-4xl font-bold">Streamline Finances</h1>
                  <h1 className="text-xl pt-2  font-bolder">
                    Gain full control over your business by tracking growth,
                    automating invoices, and setting clear financial goals to
                    achieve new milestones. Let me know if you'd like any
                    further adjustments!
                  </h1>
                </div>
              </div>
              {/* THE CARD NUMBER: 2  */}
              <div
                style={{
                  boxShadow: ` 0 0 15px rgba(199, 125, 255, 0.2), 0 0 30px rgba(199, 125, 255, 0.15), 0 0 45px rgba(199, 125, 255, 0.1) `,
                }}
                ref={addToCardRefs}
                className="absolute flex justify-center items-center  w-[1150px] h-[500px] rounded-lg bg-[#050606] border rotate-12"
              >
                <img
                  src={brand}
                  width={'450px'}
                  className="mx-auto"
                  alt="stream"
                />
                <div className="px-10 pt-5">
                  <h1 className="text-4xl font-bold">
                    Build Brand Recognition
                  </h1>
                  <h1 className="text-xl pt-2  font-bolder">
                    Strengthen your brand with a professional portfolio, case
                    studies, and an engaging "About Us" section. Showcase your
                    expertise to stand out in a competitive market.
                  </h1>
                </div>
              </div>

              {/* THE CARD NUMBER: 3  */}
              <div
                style={{
                  boxShadow: ` 0 0 15px rgba(69, 9, 32, 0.2), 0 0 30px rgba(69, 9, 32, 0.15), 0 0 45px rgba(69, 9, 32, 0.1) `,
                }}
                ref={addToCardRefs}
                className="absolute flex justify-center items-center w-[1150px] h-[500px] rounded-lg bg-[#121a14] border"
              >
                <img
                  src={sales}
                  width={'450px'}
                  className="mx-auto"
                  alt="stream"
                />
                <div className="px-10">
                  <h1 className="text-4xl font-bold">
                    Build Brand Recognition
                  </h1>
                  <h1 className="text-xl pt-2  font-bolder">
                    Strengthen your brand with a professional portfolio, case
                    studies, and an engaging "About Us" section. Showcase your
                    expertise to stand out in a competitive market.
                  </h1>
                </div>
              </div>

              {/* THE CARD NUMBER: 4  */}
              <div
                style={{
                  boxShadow: ` 0 0 15px rgba(19, 64, 116, 0.2), 0 0 30px rgba(19, 64, 116, 0.15), 0 0 45px rgba(19, 64, 116, 0.1) `,
                }}
                ref={addToCardRefs}
                className="absolute flex justify-center items-center  w-[1150px] h-[500px] rounded-lg bg-[#151625] border -rotate-12"
              >
                <img
                  src={automate}
                  width={'450px'}
                  className="mx-auto"
                  alt="automate"
                />
                <div className="px-10">
                  <h1 className="text-4xl font-bold">Automate Operations</h1>
                  <h1 className="text-xl pt-2 font-bolder">
                    Streamline processes with features like online booking,
                    order tracking, and customer management. Reduce manual
                    effort and save time to focus on scaling your business.
                  </h1>
                </div>
              </div>

              <div
                style={{
                  boxShadow: `0 0 15px rgba(255, 215, 0, 0.2), 0 0 30px rgba(255, 215, 0, 0.15), 0 0 45px rgba(255, 215, 0, 0.1)
    `,
                }}
                ref={addToCardRefs}
                className="absolute flex justify-center items-center  w-[1150px] h-[500px] rounded-lg bg-[#051619] border rotate-[12deg]"
              >
                <img
                  src={boost}
                  width={'450px'}
                  className="mx-auto"
                  alt="boost"
                />
                <div className="px-10">
                  <h1 className="text-4xl font-bold">Boost Revenue</h1>
                  <h1 className="text-xl pt-2  font-bolder">
                    Expand your income by introducing new methods to manage and
                    promote your services to a broader audience.
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-w-screen-2xl mx-auto -mt-20 ">
              <div className="flex justify-between relative">
                <div className="w-[40%]">
                  <h1 className="text-9xl font-neueMed uppercase text-[#dbdbd4]">
                    Industries
                  </h1>
                  <h1 className="text-8xl font-neueMed bg-gradient-to-r from-[#0077b6] to-[#e9edc9] bg-clip-text text-transparent">
                    We Empower
                  </h1>

                  <img
                    src={earth}
                    alt=""
                    className="w-[500px] text-blue-200 absolute -top-16   left-52 -z-10"
                  />
                  <img
                    src={comp}
                    alt="old computer"
                    width={'80%'}
                    className="mt-20"
                  />
                </div>
                <div className="w-[45%]">
                  <div className="mt-28">
                    <h1 className="text-3xl text-white font-neueMed">
                      Your Website, Our Priority
                    </h1>
                    <h1 className="text-xl font-neueLight pt-2">
                      We ensure your website stays fast, secure, and up-to-date
                      with performance optimization and ongoing support, so you
                      can focus on growing your business.
                    </h1>
                  </div>
                  <div className="mt-12">
                    <h1 className="text-3xl text-white font-neueMed">
                      Backup Assurance
                    </h1>
                    <h1 className="text-xl font-neueLight pt-2">
                      Daily automated backups, rapid recovery, and secure data
                      storage ensure your site’s safety and protection in
                      emergencies.
                    </h1>
                  </div>
                  <div className="mt-12">
                    <h1 className="text-3xl text-white font-neueMed">
                      Security Shield
                    </h1>
                    <h1 className="text-xl font-neueLight pt-2">
                      We provide ongoing security checks, patch vulnerabilities,
                      and monitor for malware. With SSL certificates and
                      proactive measures, we keep your website safe from
                      threats.
                    </h1>
                  </div>
                  <div className="mt-12">
                    <h1 className="text-3xl text-white font-neueMed">
                      Uptime Monitoring
                    </h1>
                    <h1 className="text-xl font-neueLight pt-2">
                      24/7 monitoring ensures your website is live and
                      responsive at all times. If any downtime is detected, our
                      team is alerted immediately, and we work to restore
                      service quickly. You'll get detailed uptime reports and
                      insights to optimize your website’s availability.
                    </h1>
                  </div>
                  <div className="mt-12">
                    <h1 className="text-3xl text-white font-neueMed">
                      Content Updates
                    </h1>
                    <h1 className="text-xl font-neueLight pt-2">
                      We manage blog updates, SEO edits, image uploads, and
                      optimize content for performance and SEO.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* THE BOTTOM TEXT  */}
          <div
            ref={bottomTextRef}
            className="bg-[#FFFFFF] absolute w-full bottom-0 h-[12vh] overflow-hidden z-10"
          >
            <h1
              ref={textRef2}
              className="font-sloop pt-2 text-[170px] capitalize text-black  text-center absolute bottom-[50] left-[50%] -translate-x-1/2 -translate-y-1/2"
            >
              your Ideas
            </h1>
          </div>
        </div>
        <h1
          ref={textRef4}
          className="text-[150px] font-neueBold text-black uppercase font-semibold w-[95%] text-right"
        >
          To Digital life
        </h1>
      </div>
    </div>
  );
};
