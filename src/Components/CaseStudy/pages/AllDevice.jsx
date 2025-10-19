import { useRef } from 'react';
import LaserFlow from '../../Pages/ui/LaserFlow';
import { useNavigate } from 'react-router-dom';

export const AllDevice = ({ image, title, subtitle }) => {
  const revealImgRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/book-a-meeting');
  };

  return (
    <div className="h-[800px] md:h-[1600px] bg-black  relative z-50">
      <div
        className="h-[800px] md:h-[1100px]"
        style={{
          position: 'relative',
          // overflow: 'hidden',
          backgroundColor: 'black',
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty('--mx', `${x}px`);
            el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
          }
        }}
        onMouseLeave={() => {
          const el = revealImgRef.current;
          if (el) {
            el.style.setProperty('--mx', '-9999px');
            el.style.setProperty('--my', '-9999px');
          }
        }}
      >
        <LaserFlow
          horizontalBeamOffset={0.2}
          verticalBeamOffset={0.0}
          color="#760040"
        />

        <div className="absolute top-0 left-1/2  -translate-x-1/2 w-full  md:w-[1340px] ">
          <div className=" px-3 md:px-0">
            <h1 className="text-3xl md:text-6xl font-bold text-white w-full md:w-[60%] md:leading-[80px] pt-10 md:pt-32 z-10 relative  ">
              {title}{' '}
            </h1>
            <p className="text-purpleLight text-sm md:text-lg py-2 md:w-[50%] pl-0 md:leading-7  ">
              {subtitle}
            </p>
            <div data-aos="zoom-in" className="w-full flex  items-center  z-50">
              <button
                onClick={handleClick}
                className="btn2 w-64 md:w-80 py-6 relative leading-none overflow-hidden bg-[#760047] hover:border border-gray-800 rounded-md mt-5"
                type="button"
              >
                <span className="absolute inset-0 bg-[#000033] "></span>
                <span className="absolute inset-0 flex justify-center items-center text-white">
                  Let's talk! 1:1
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-[95%] md:w-[1340px] h-[45%] md:h-[80%] border-2 md:border-[10px] border-gray-400"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translateX(-49%)',
            // width: '1340px',

            backgroundColor: 'black',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            color: 'white',
            fontSize: '2rem',
            zIndex: 6,
            // backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='' cy='4' r='1.2' fill='white' fill-opacity='0.5'/%3E%3Ccircle cx='20' cy='20' r='1.5' fill='white' fill-opacity='0.7'/%3E%3Ccircle cx='36' cy='36' r='1.8' fill='white' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px',
          }}
        >
          <h1 className="text-3xl absolute text-white top-6 font-bold">
            All Device Layout
          </h1>
          <img
            src={image}
            alt=""
            className="md:object-cover md:h-full w-full"
          />
        </div>

        <img
          ref={revealImgRef}
          src={'/portfolio/bg-dash.jpg'}
          alt="Reveal effect"
          style={{
            position: 'absolute',
            width: '200%',
            top: '0%',
            zIndex: 5,
            mixBlendMode: 'lighten',
            opacity: 0.4,
            pointerEvents: 'none',
            '--mx': '-9999px',
            '--my': '-9999px',
            WebkitMaskImage:
              'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
            maskImage: `
    radial-gradient(
      circle at var(--mx) calc(var(--my) - 50%),
       rgba(247, 227, 178, 1) 0px,
  rgba(247, 227, 178, 0.95) 60px,
  rgba(247, 227, 178, 0.6) 120px,
  rgba(247, 227, 178, 0.25) 180px,
  rgba(247, 227, 178, 0) 240px
    )
  `,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
        />
      </div>
    </div>
  );
};
