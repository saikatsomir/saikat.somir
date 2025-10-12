import { useNavigate } from 'react-router-dom';
import ThreeDMarquee from '../../Pages/ui/3d-marquee';

export function CaseParallax({ mobileImg, title, subtext }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/book-a-meeting');
  };
  const images = [
    'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
    'https://assets.aceternity.com/animated-modal.png',
    'https://assets.aceternity.com/animated-testimonials.webp',
    'https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png',
    'https://assets.aceternity.com/github-globe.png',
    'https://assets.aceternity.com/glare-card.png',
    'https://assets.aceternity.com/layout-grid.png',
    'https://assets.aceternity.com/flip-text.png',
    'https://assets.aceternity.com/hero-highlight.png',
    'https://assets.aceternity.com/carousel.webp',
    'https://assets.aceternity.com/placeholders-and-vanish-input.png',
    'https://assets.aceternity.com/shooting-stars-and-stars-background.png',
    'https://assets.aceternity.com/signup-form.png',
    'https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png',
    'https://assets.aceternity.com/spotlight-new.webp',
    'https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png',
    'https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png',
    'https://assets.aceternity.com/tabs.png',
    'https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png',
    'https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png',
    'https://assets.aceternity.com/glowing-effect.webp',
    'https://assets.aceternity.com/hover-border-gradient.png',
    'https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png',
    'https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png',
    'https://assets.aceternity.com/macbook-scroll.png',
    'https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png',
    'https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png',
    'https://assets.aceternity.com/multi-step-loader.png',
    'https://assets.aceternity.com/vortex.png',
    'https://assets.aceternity.com/wobble-card.png',
    'https://assets.aceternity.com/world-map.webp',
  ];

  return (
    <div className="relative  min-h-[90vh] w-full flex justify-center items-center z-50 px-4">
      <div className="relative z-20 w-full max-w-[1400px] mx-auto py-10 flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-20 relative">
          <p className="text-lg sm:text-xl md:text-2xl text-purpleLight pb-5">
            "Make a Move"
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-white font-bold  ">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-purpleLight pt-5 pb-3 max-w-xl mx-auto lg:mx-0">
            {subtext}
          </p>

          <div data-aos="zoom-in" className="w-full  z-50">
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

        {/* RIGHT IMAGE MOCKUP */}
        <div className="w-full  lg:w-1/2 flex justify-center z-20">
          <div className="relative w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[500px] sm:h-[600px] md:h-[700px] lg:h-[775px] border-2 border-gray-400 rounded-[40px] sm:rounded-[45px] md:rounded-[48px] lg:rounded-[50px]">
            <div>
              <div className="absolute z-20 border-2 h-5 sm:h-7 top-[20%] border-gray-500 rounded-full -left-1.5" />
              <div className="absolute z-20 border-2 h-8 sm:h-12 top-[27%] border-gray-500 -left-1.5 rounded-full" />
              <div className="absolute z-20 border-2 h-8 sm:h-12 top-[35%] border-gray-500 -left-1.5 rounded-full" />
              <div className="absolute z-20 border-2 h-16 sm:h-20 top-[25%] border-gray-500 rounded-full -right-1.5" />
              <div className="absolute z-50 h-4 sm:h-6 bg-black w-16 sm:w-20 top-[2%] rounded-full left-1/2 -translate-x-1/2" />
              <div className="absolute z-50 h-2 sm:h-3 bg-gray-500 w-2 sm:w-3 top-[2.7%] rounded-full left-1/2 -translate-x-1/2 ml-6" />
              <div className="absolute z-50 h-1 sm:h-1.5 bg-gray-300 w-1 sm:w-1.5 top-[3.1%] rounded-full left-1/2 -translate-x-1/2 ml-6" />
            </div>

            <div
              style={{
                boxShadow:
                  'rgba(50, 50, 93, 0.25) 0px 50px 300px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
              }}
              className="relative z-20 border-[8px] sm:border-[10px] md:border-[12px] h-full rounded-[39px] sm:rounded-[45px] md:rounded-[49px] border-gray-800 bg-white overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.25)]"
            >
              <img
                className="w-full h-full "
                src={mobileImg}
                alt="phone-preview"
              />
            </div>
          </div>
        </div>
      </div>

      {/* overlay */}
      <div className="absolute inset-0 z-10 bg-black/80 dark:bg-black/40" />

      {/* moving images */}
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-[1500px] md:h-full w-full"
        images={images}
      />
    </div>
  );
}
