import { MoveLeft } from 'lucide-react';
import { Impression } from './Impression';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className="w-full bg-[#eae4cc]">
      <div className="w-full max-w-[1340px] mx-auto ">
        <div className="flex justify-between text-xl text-black  h-28 px-4">
          <Link
            to={'/'}
            className="flex justify-center items-center gap-2 hover:underline "
          >
            <MoveLeft /> Back to Home
          </Link>
          <div className="flex justify-center items-center gap-10 ">
            <Link to={'/book-a-meeting'} className="hover:underline">
              Contact
            </Link>
            <Link
              to={'/case-study/project1'}
              className="hidden md:block hover:underline"
            >
              Case Study
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 pt-0 md:pt-20 px-4 sm:px-8 lg:px-0">
          {/* Left Side */}
          <div className="flex flex-col gap-10 w-full lg:w-[60%]  ">
            {/* About Me */}
            <div className="border-b pb-10 border-gray-600">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-bold mb-8 sm:mb-10 leading-tight">
                A little bit about me
              </h1>

              <p className="text-black text-base sm:text-lg mt-3 leading-relaxed">
                Hey, I’m Somi — a web enthusiast, guitarist, and bibliophile. I
                currently help small brands create modern, scalable, and
                visually captivating digital experiences. I design and develop
                custom websites using cutting-edge technologies like React,
                GSAP, and Node.js, focusing on smooth performance and immersive
                interactivity.
              </p>
              <p className="text-black text-base sm:text-lg mt-5 leading-relaxed">
                Outside of coding, I love to travel, especially mountains, and
                spend my free time watching movies or diving into novels.
              </p>
              <p className="text-black text-base sm:text-lg mt-5 leading-relaxed">
                Some of my favorite movies are:{' '}
                <strong>
                  The Shawshank Redemption, The Proposal, and Fury (2014)
                </strong>
                . As for novels:{' '}
                <strong>Crime and Punishment, The Iliad</strong>.
              </p>
            </div>

            {/* Work Experience & Web Stack */}
            <div className="flex flex-col sm:flex-row gap-10">
              {/* Work Experience */}
              <div className="w-full sm:w-[60%]">
                <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3">
                  Work Experience
                </h2>
                <p className="text-black text-base sm:text-lg mb-3">
                  Web Developer & Designer for small businesses
                </p>
                <p className="text-black text-base sm:text-lg mb-3">
                  Branding and Digital Marketing Specialist
                </p>
                <p className="text-black text-base sm:text-lg">
                  Freelance UI/UX Designer
                </p>
              </div>

              {/* Web Stack */}
              <div className="w-full sm:w-[40%]">
                <h2 className="text-xl sm:text-2xl text-black font-semibold mb-3">
                  Web Stack
                </h2>
                <p className="text-black text-base sm:text-lg">
                  React, Express, MongoDB
                </p>
                <p className="text-black text-base sm:text-lg pt-3">
                  Node.js, NGINX, DigitalOcean
                </p>
                <p className="text-black text-base sm:text-lg pt-3">
                  GSAP, Tailwind, Framer Motion
                </p>
              </div>
            </div>

            {/* Somi Image (Mobile Only) */}
            <div className="block lg:hidden w-full flex justify-center items-center mt-10">
              <div className="relative w-[90%] sm:w-[400px] h-[480px] rounded-xl overflow-hidden">
                <img
                  src="/saikat/about.png"
                  alt="Somi"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="border-t pt-10 border-gray-600">
              <h2 className="text-xl sm:text-2xl text-black font-semibold mb-6">
                Awards & Recognition
              </h2>

              <div className="space-y-5 text-black text-base sm:text-lg leading-relaxed">
                <p>
                  <strong>2022 — CodeWave Hackathon</strong> <br />
                  Winner (UI Innovation Category) — Built an interactive product
                  dashboard using React and GSAP that impressed judges with
                  motion design and performance.
                </p>

                <p>
                  <strong>2022 — DevForge Creative Jam</strong> <br />
                  Top 5 Finalist — Designed a responsive portfolio web app
                  featuring scroll-triggered animations and micro-interactions.
                </p>

                <p>
                  <strong>2023 — DigitalOcean BuildFest</strong> <br />
                  Best Deployment Project — Recognized for optimizing web
                  hosting and server configuration for speed and scalability.
                </p>

                <p>
                  <strong>2023 — Frontend Flow Awards</strong> <br /> Honorable
                  Mention — For crafting minimal, immersive web experiences with
                  pixel-perfect UI and creative transitions.
                </p>

                <p>
                  <strong>2024 — ReactNext Community Feature</strong> <br />
                  Featured Developer — Highlighted by the ReactNext community
                  for open-source contributions and creative GSAP animation
                  examples.
                </p>

                <p>
                  <strong>2025 — Web Innovators Summit</strong> <br />
                  Showcased Project (Kelvo) — Presented <strong>Kelvo</strong>,
                  a scalable and visually dynamic web platform focused on brand
                  identity and user flow.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side (Sticky Image - Desktop Only) */}
          <div className="hidden lg:flex w-[45%] justify-center">
            <div className="sticky top-20 self-start relative">
              <div className="border border-gray-600 bg-purpleBg w-[360px] md:w-[400px] h-[480px] md:h-[510px] -rotate-12 rounded-xl overflow-hidden relative">
                <div className="absolute w-32 h-52 bg-[#1c08d0] -top-10 -left-10 blur-[100px] -z-10" />
                <div className="absolute w-32 h-52 bg-[#1c08d0] -top-10 -right-10 blur-[80px] -z-10" />
                <div className="absolute w-32 h-52 bg-[#1c08d0] -bottom-10 -right-10 blur-[80px] -z-10" />
                <div className="absolute w-32 h-52 bg-[#1c08d0] -bottom-10 -left-10 blur-[80px] -z-10" />
              </div>
              <img
                src="/saikat/about.png"
                className="w-[380px] md:w-[430px] h-[480px] md:h-[510px] absolute top-0 object-cover rounded-xl rotate-6"
                alt="Somi"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Impression Section */}
      <Impression />
    </div>
  );
};
