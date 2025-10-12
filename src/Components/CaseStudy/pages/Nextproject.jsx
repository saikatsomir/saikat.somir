import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';

export const Nextproject = () => {
  const anchorRef = useRef(null); // <-- sentinel to track scroll progress

  const { id } = useParams();
  const [projects, setProjects] = useState([]);

  // raw cursor position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // smoothed (laggy) follower
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20, mass: 0.5 });

  // velocity for squash effect
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const scaleX = useTransform(velocityX, [-1000, 0, 1000], [1.3, 1, 1.3]);
  const scaleY = useTransform(velocityY, [-1000, 0, 1000], [0.7, 1, 0.7]);

  // attach one mouse listener
  useEffect(() => {
    const moveHandler = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveHandler);
    return () => window.removeEventListener('mousemove', moveHandler);
  }, [mouseX, mouseY]);

  // scroll progress animation for bg image
  const progress = useMotionValue(0);
  const scale = useTransform(progress, [0, 1], [2, 1]);

  useEffect(() => {
    fetch('/data/casestudy.json')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Error loading case studies:', err));
  }, []);

  useEffect(() => {
    if (!anchorRef) return;
    let raf = 0;

    const update = () => {
      const el = anchorRef.current;
      if (!el) return progress.set(0);
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      const p = Math.min(Math.max((vh - rect.top) / vh, 0), 1);
      progress.set(p);
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [anchorRef, progress]);

  if (!projects.length) return null;

  const currentIndex = projects.findIndex((p) => p.id === id);
  if (currentIndex === -1) return null;

  const nextProject = projects[(currentIndex + 1) % projects.length];
  // console.log(nextProject);
  // console.log(nextProject.mainImage);

  return (
    <>
      <div
        ref={anchorRef}
        className="relative w-full hidden md:block md:h-[50vh]"
      />
      <div className="fixed  z-10 bottom-0 w-screen h-[50vh] md:h-[100vh] overflow-hidden ">
        {/* Background image */}
        <motion.img
          src={nextProject.mainImage}
          alt={nextProject.title}
          className="w-full h-full object-cover"
          style={{ scale }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Black overlay */}
        <motion.div
          className="absolute inset-0 bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <Link
          to={`/case-study/${nextProject.id}`}
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white group cursor-pointer"
          style={{ cursor: 'pointer' }}
        >
          <h1 className="text-xl md:text-3xl pb-5 mt-40">Next Project</h1>
          <motion.h2
            className="uppercase text-4xl sm:text-5xl z-20 md:text-6xl lg:text-8xl xl:text-9xl font-black text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ scale: 1.03, letterSpacing: '0.05em' }}
          >
            {nextProject.smallTitle}
          </motion.h2>
          <motion.h2
            className="font-sloop font-extralight text-5xl md:text-[200px] z-10 -ml-5 md:-ml-20 text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ scale: 1.03, letterSpacing: '0.05em' }}
          >
            Sites
          </motion.h2>
        </Link>

        {/* Mouse follower */}
        <motion.div
          className="fixed w-20 h-20 z-50 rounded-full bg-gray-200 
             flex items-center justify-center text-black font-semibold 
             pointer-events-none shadow-xl"
          style={{
            x: springX,
            y: springY,
            scaleX,
            scaleY,
            translateX: '10%',
            translateY: '-1170%',
          }}
          animate={{
            opacity: [0.9, 1, 0.9], // subtle breathing effect
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut',
          }}
        >
          View
        </motion.div>
      </div>
    </>
  );
};
