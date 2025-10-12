import { useNavigate } from 'react-router-dom';
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

export const Impression = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/book-a-meeting');
  };

  return (
    <div className="w-full min-h-screen bg-[#eae4cc] flex justify-center items-center px-4 md:px-6 lg:px-0">
      <div className="w-full max-w-[1340px] text-center flex flex-col justify-center items-center">
        {/* Name */}
        <h1 className="font-black uppercase text-[60px] sm:text-[90px] md:text-[120px] lg:text-[150px] text-black leading-[0.9]">
          Saikat Somir
        </h1>

        {/* Short Inspiration */}
        <p className="text-black/90 text-base sm:text-lg md:text-xl w-full sm:w-[85%] md:w-[65%] lg:w-[55%] mx-auto mt-6 leading-relaxed">
          I design and build meaningful digital experiences — merging
          aesthetics, strategy, and technology. Every project I take on is
          driven by creativity, precision, and a genuine desire to make an
          impact.
        </p>

        {/* Button */}
        <div
          data-aos="zoom-in"
          className="flex justify-center items-center z-50 mt-10"
        >
          <button
            onClick={handleClick}
            className="relative w-48 sm:w-60 md:w-72 lg:w-80 py-4 sm:py-5 md:py-6 bg-[#760047] hover:border border-gray-800 rounded-md overflow-hidden transition-transform duration-300 hover:scale-105"
            type="button"
          >
            <span className="absolute inset-0 bg-[#000033] transition-opacity duration-300 hover:opacity-90"></span>
            <span className="absolute inset-0 flex justify-center items-center text-white font-semibold tracking-wide">
              Let's talk! 1:1
            </span>
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 sm:gap-8 mt-12 flex-wrap">
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#000033] hover:text-[#760047] transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedinIn size={26} />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#000033] hover:text-[#760047] transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#000033] hover:text-[#760047] transition-all duration-300 transform hover:scale-110"
          >
            <FaWhatsapp size={26} />
          </a>
          <a
            href="https://instagram.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#000033] hover:text-[#760047] transition-all duration-300 transform hover:scale-110"
          >
            <FaInstagram size={26} />
          </a>
        </div>
      </div>
    </div>
  );
};
