import { useEffect, useState } from 'react';
import { useMotionValue, motion, useMotionTemplate } from 'motion/react';
import portfolio from '../../Pages/Portfolio/images/portfolio.gif';
import cn from '../../../lib/utils';
import { MdControlPoint } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Portfolio = ({ children, className, containerClassName }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  const [projects, setProjects] = useState([]);
  const [hoverPos, setHoverPos] = useState({}); // ✅ individual hover positions

  useEffect(() => {
    fetch('/data/casestudy.json')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Error loading projects:', err));
  }, []);

  const dotPatterns = {
    light: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%236366f1' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
    },
    dark: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%ffffff' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%238183f4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
    },
  };

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className=" bg-purpleBg relative pt-10 ">
      <div className="">
        <div
          className="my-3 -mr-14 -top-4 absolute left-1/2 -translate-x-1/2  z-10"
          style={{
            height: '0.5px',
            width: '90%',
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0)) ',
          }}
        ></div>
        <div
          className="absolute -top-[10%] left-0 z-50 w-full md:w-[400px] h-32
        md:h-[600px] bg-[#0d0457] rounded-full blur-[100px] opacity-30"
        />
        <div
          className="absolute top-10 md:-top-[3%] right-0 md:right-14 z-50  w-full md:w-[250px] h-32 md:h-[400px] bg-[#0d0457] rounded-full blur-[100px] 
      opacity-30"
        />
        <img
          src="/bgIcons/cross.svg"
          className="absolute -top-[1%] right-4 md:right-20 z-50 w-20 md:w-52"
          alt=""
        />
        <img
          src="/bgIcons/react.svg"
          className="absolute -top-[4%] left-2 md:left-20 z-50 animate-spin-extraSlow w-28 md:w-56"
          alt=""
        />
      </div>

      <div
        className={cn(
          'group relative   mx-auto flex h-full w-full items-center justify-center bg-white dark:bg-purpleBg',
          containerClassName
        )}
        onMouseMove={handleMouseMove}
      >
        {/* Background Patterns */}
        <div
          className="pointer-events-none absolute inset-0 dark:hidden"
          style={{
            backgroundImage: dotPatterns.light.default,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 hidden dark:block"
          style={{
            backgroundImage: dotPatterns.dark.default,
          }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 dark:hidden"
          style={{
            backgroundImage: dotPatterns.light.hover,
            WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
            maskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 hidden opacity-0 transition duration-300 group-hover:opacity-100 dark:block"
          style={{
            backgroundImage: dotPatterns.dark.hover,
            WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
            maskImage: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          }}
        />

        <div className={cn('relative z-20', className)}>
          <div className="relative z-10 mx-auto flex flex-col gap-y-10 md:gap-y-20 md:pt-20 pb-20   md:pb-40">
            {/* Header Section */}
            <div className="sticky md:static top-5  h-40 md:h-52">
              <div className="text-center relative">
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
                  Portfolio
                </div>
                <div className="absolute hidden md:block  -translate-x-1/2 -top-20 left-1/2 w-[900px] h-[150px] blur-[100px]   bg-[#0d0457]  opacity-30 z-50" />

                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl  capitalize font-bold bg-white w-fit mx-auto text-transparent bg-clip-text "
                >
                  The Art of My Work,
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className=" text-sm sm:text-base md:text-lg w-[90%] md:w-[50%] mx-auto text-purpleLight mt-2"
                >
                  A curated collection of my creative journey, skills, and
                  standout professional work.
                </p>
              </div>
            </div>
            <div className="relative ">
              {projects.map((project, idx) => {
                const currentPos = hoverPos[project.id] || {
                  x: -9999,
                  y: -9999,
                }; // ✅ per project hover state
                return (
                  <div
                    key={project.id}
                    className={`w-[95%] max-w-[1200px] mx-auto  sticky top-[220px] md:top-7  md:${
                      idx === 0 ? 'top-0' : 'top-0'
                    } relative`}
                  >
                    <div className="mx-auto py-4  md:p-12 rounded-lg md:rounded-3xl bg-[#05021e] shadow-sm shadow-black relative border border-gray-800">
                      {idx == 3 && (
                        <div>
                          <div
                            className="my-3 -mr-14 absolute -bottom-4 left-1/2 -translate-x-1/2 -z-10"
                            style={{
                              height: '20px',
                              width: '400px',
                              backgroundImage:
                                'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0)) ',
                            }}
                          ></div>
                          <div className="absolute -bottom-5   -translate-x-1/2 left-1/2 w-[200px] h-[200px] md:w-[700px] md:h-[700px] rounded-full   bg-[#1c0ba3] blur-[100px]  opacity-50 -z-10" />
                        </div>
                      )}
                      {idx == 0 && (
                        <div>
                          <div
                            className="my-3 -mr-14 absolute -top-[15px] left-1/2 -translate-x-1/2 -z-10"
                            style={{
                              height: '3px',
                              width: '400px',
                              backgroundImage:
                                'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0)) ',
                            }}
                          ></div>
                          <div className="absolute -top-5  -translate-x-1/2 left-1/2 w-[200px] h-[200px] md:w-[700px] md:h-[700px] rounded-full   bg-[#1c0ba3] blur-[100px]  opacity-50 -z-10" />
                          <div className="absolute top-30 md:top-80 -translate-x-1/2 left-1/2 w-full md:w-[1250px] h-[150px] md:h-[300px] rounded-full   bg-[#1c0ba3] blur-[100px]  opacity-50 -z-10" />
                        </div>
                      )}
                      <div>
                        <div className="flex justify-between w-full  max-w-[1100px] mx-auto z-50">
                          <div className="hidden md:block">
                            <h2 className=" text-lg md:text-2xl w-[90%] md:w-full font-bold text-white">
                              {project.title}
                            </h2>
                          </div>
                          <div className="block md:block">
                            <h2 className=" text-lg md:text-2xl  font-bold text-white">
                              {project.smallTitle}
                            </h2>
                          </div>
                          <Link
                            to={`/case-study/${project.id}`}
                            className="text-base md:text-xl bg-[#760047] rounded-md text-white md:py-2 px-6 h-fit hover:bg-[#5d0038] transition"
                          >
                            Preview
                          </Link>
                        </div>
                        <h1 className="text-[12px] block md:hidden pt-3 text-white text-center">
                          {project.shortDescription}
                        </h1>
                      </div>
                      {/* Image with floating text */}
                      <div
                        className="relative group w-[95%] md:w-full  max-w-[1100px] mx-auto pt-4 md:pt-10"
                        onMouseMove={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoverPos((prev) => ({
                            ...prev,
                            [project.id]: {
                              x: e.clientX - rect.left,
                              y: e.clientY - rect.top,
                            },
                          }));
                        }}
                        onMouseLeave={() =>
                          setHoverPos((prev) => ({
                            ...prev,
                            [project.id]: { x: -9999, y: -9999 },
                          }))
                        }
                      >
                        {/* Floating Preview Text */}
                        <motion.span
                          className="pointer-events-none absolute text-white text-lg font-medium px-10 py-1.5 rounded-md opacity-0 group-hover:opacity-100 bg-[#c20074]/80"
                          style={{
                            left: currentPos.x + 10 + 'px',
                            top: currentPos.y - 10 + 'px',
                            transform: 'translate(0, 0)',
                            whiteSpace: 'nowrap',
                          }}
                          animate={{ x: 25, y: 25, opacity: 1 }}
                          transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 20,
                          }}
                        >
                          View
                        </motion.span>

                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full mx-auto rounded-lg cursor-pointer "
                          onClick={() =>
                            (window.location.href = `/case-study/${project.id}`)
                          }
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
