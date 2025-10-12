import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { LampContainer } from '../../ui/lamp';
import { Link } from 'react-router-dom';
import { MdControlPoint } from 'react-icons/md';
import videoImg from '../Fotter/video.webp';

export const Fotter = ({ scrollRefs }) => {
  const handleScroll = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="bg-purpleBg w-[100%]  h-[932px] md:h-[550px] relative overflow-hidden ">
      <div className="absolute bottom-10 -left-10 w-[300px] h-[350px] blur-[50px]  bg-[#0d0457] hidden md:block  opacity-50 z-50" />
      <div className="absolute -bottom-20 right-40 w-[150px] h-[600px] rotate-[30deg] blur-[100px]  bg-[#0d0457]  opacity-50 z-50" />

      <div className=" w-full  md:w-[1340px]  h-full mt-20 px-2 md:mt-52 mx-auto relative  ">
        <div
          className="my-3 -mr-14 absolute hidden md:block bottom-[270px] left-0 "
          style={{
            height: '0.5px',
            width: '100%',
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0)) ',
          }}
        ></div>
        <div className="flex justify-between flex-col md:flex-row ">
          <div>
            <div className="relative w-fit">
              <h1 className="text-5xl text-white/80 font-black capitalize font-bonefesta">
                saikat <span className="text-red-500">.</span> somir
              </h1>
              <div
                className="my-3 -mr-14 absolute -bottom-8 md:-bottom-[50px] left-0"
                style={{
                  height: '0.5px',
                  width: '300px',
                  backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0)) ',
                }}
              ></div>
            </div>
            <div className="mt-10 md:mt-20 border w-fit p-1 rounded-md border-gray-700">
              <input
                type="email"
                name=""
                placeholder="Enter Your Email"
                className="h-12 rounded-md bg-transparent  w-72 pl-3 outline-none"
                id=""
              />
              <button className=" h-12 ml-2 rounded-md px-5 border-gray-500 bg-[#0d0457] shadow-2xl shadow-[#16049e]">
                Subscribe
              </button>
            </div>
          </div>
          <div className=" flex gap-28 flex-col md:flex-row mt-10 md:mt-0">
            <div className="flex gap-20">
              <div>
                <h1 className="text-white text-xl">Navigation</h1>
                <div className="flex flex-col mt-4 gap-3">
                  <button
                    onClick={() => handleScroll(scrollRefs?.portfolio)}
                    className="text-left text-white/80 hover:text-white transition"
                  >
                    Portfolio
                  </button>

                  <button
                    onClick={() => handleScroll(scrollRefs?.success)}
                    className="text-left text-white/80 hover:text-white transition"
                  >
                    Success
                  </button>

                  <button
                    onClick={() => handleScroll(scrollRefs?.plan)}
                    className="text-left text-white/80 hover:text-white transition"
                  >
                    Planing
                  </button>

                  <Link
                    to="/about-somi"
                    className="text-left text-white/80 hover:text-white transition"
                  >
                    About
                  </Link>
                </div>
              </div>

              <div>
                <h1 className="text-white text-xl">Navigation</h1>
                <div className="flex flex-col mt-4 gap-3">
                  <Link target="_blank" to={'https://github.com/saikatsomir'}>
                    Github
                  </Link>{' '}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=saikatsomir@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Gmail</button>
                  </a>
                  <Link
                    target="_blank"
                    to={'https://www.linkedin.com/in/saikatsomir/'}
                  >
                    Linkedin
                  </Link>
                  <Link
                    target="_blank"
                    to={'https://www.instagram.com/saikat.somir'}
                  >
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
            <div className=" -mt-14 md:mt-0 ">
              <div className=" w-36 text-center h-10 flex justify-center  items-center gap-1 text-white/90 rounded-lg shadow shadow-[#2710d4] border-gray-600 mb-5 relative">
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
                Demo Video
              </div>
              <div className="border border-gray-800  rounded-lg bg-black/5 w-[268px] h-[156px] flex justify-center items-center ">
                <div className="w-64 border border-gray-600 h-36 bg-[#2710d4]/10  rounded-lg overflow-hidden">
                  <img src={videoImg} className="object-cover" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-5 md:mt-[70px] md:flex justify-between z-50  ">
          <h1 className="text-white text-lg">Made with ❤️</h1>
          <h1 className="text-white text-lg">All © Reserve to Saikat.Somir</h1>
          <h1 className="text-white text-lg">Privecy | Policy</h1>
        </div>
      </div>
    </div>
  );
};
