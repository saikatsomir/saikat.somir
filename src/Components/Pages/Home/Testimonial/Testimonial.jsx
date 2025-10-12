import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import testimonail from './images/testimonail2.gif';
import google from './images/google.png';
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image6 from './images/6.png';
import image7 from './images/7.png';
import image8 from './images/8.png';
import image9 from './images/9.png';
import image10 from './images/10.png';
import image11 from './images/11.png';
import image12 from './images/12.png';
import image13 from './images/13.png';
import { FaLinkedinIn } from 'react-icons/fa';
import { TbBrandFiverr } from 'react-icons/tb';
import { MdControlPoint } from 'react-icons/md';

const avatarImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
];

const experience = [
  {
    value: '50+',
    label: 'Projects Delivered',
  },
  {
    value: '40+',
    label: 'Happy Clients',
  },
  {
    value: '5+',
    label: 'Years Experience',
  },
  {
    value: '4.9★',
    label: 'Rated by 30+ Clients',
  },
];

export const Testimonial = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [visibleCount, setVisibleCount] = useState(9);

  const platformIcons = {
    linkedin: (
      <div className="bg-blue-700 w-10 h-10 rounded-full flex justify-center items-center ">
        <FaLinkedinIn className="text-white text-xl" />
      </div>
    ),
    fiverr: (
      <div className="bg-green-700 w-10 h-10 rounded-full flex justify-center items-center ">
        <TbBrandFiverr className="text-white" size={24} />
      </div>
    ),
  };

  useEffect(() => {
    fetch('/review.json')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (r) =>
            r.platform.toLowerCase() === 'linkedin' ||
            r.platform.toLowerCase() === 'fiverr'
        );

        const reviewsWithAvatars = filtered.map((review, index) => ({
          ...review,
          avatar: avatarImages[index % avatarImages.length],
        }));

        setAllReviews(reviewsWithAvatars);
      });
  }, []);

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [allReviews]);

  const renderReviews = (list) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {list.map((review, index) => (
        <div
          key={index}
          data-aos="zoom-in-up"
          data-aos-delay={(index % 3) * 150}
          className="border border-[#3c444b] px-6 py-12 rounded-lg shadow-md relative shadow-black transition-all hover:-translate-y-1 duration-500 hover:shadow-md hover:shadow-black overflow-hidden"
        >
          <div className="absolute w-full h-10 bg-[#2710d4] bottom-0 left-0 blur-[100px]" />
          <div className="absolute w-20 h-20 bg-[#2710d4] -top-10 -left-10 blur-[50px]" />
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 relative overflow-hidden">
              <img
                src={review.avatar}
                alt={review.name}
                className="object-cover border border-gray-600 rounded-[3px] h-10"
              />
            </div>

            <div className="w-full flex justify-between">
              <div>
                <p className="font-bold text-2xl text-purpleLitest">
                  {review.name}
                </p>
                <p className="text-sm text-purpleBlur">{review.role}</p>
              </div>
              <h1>{platformIcons[review.platform?.toLowerCase()]}</h1>
            </div>
          </div>
          <p className="text-purpleLight text-sm">{review.review}</p>
        </div>
      ))}
    </div>
  );

  const handleToggleReviews = () => {
    if (visibleCount >= allReviews.length) {
      setVisibleCount(9);
    } else {
      setVisibleCount((prev) => Math.min(prev + 4, allReviews.length));
    }
  };

  return (
    <div className="bg-purpleBg min-h-screen flex items-center pb-16 md:pt-14 relative">
      <div
        className="my-3 -mr-14 top-0 absolute left-1/2 -translate-x-1/2  z-10"
        style={{
          height: '0.5px',
          width: '90%',
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0)) ',
        }}
      ></div>
      <div>
        <div className="absolute -top-9  -translate-x-1/2 left-1/2 w-full md:w-[900px] h-[300px] blur-[100px]  bg-[#0d0457]  opacity-35 z-50" />
      </div>
      <div className="max-w-[1340px] w-full mx-auto py-14">
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="w-36 text-center h-10 flex mx-auto justify-center items-center gap-1 text-white/90 rounded-lg shadow shadow-[#2710d4] border-gray-600 mb-5 relative">
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
            Testimonials
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center capitalize text-white mx-auto font-bold pb-1 transition-all duration-300"
          >
            Client Success Stories,
          </h1>
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-purpleLight text-sm md:text-xl pt-1 md:w-[50%] text-center mx-auto"
          >
            Hear from our satisfied clients about their experience working with
            us and the results we've delivered.
          </h1>
        </div>

        <div
          className="pb-4 md:pb-8 pt-0 md:pt-10 px-3"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 text-center">
            {experience.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="flex flex-col items-center justify-center p-6 rounded-lg border border-[#3c444b] hover:border-gray-400 bg-[#2710d4]/5 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-black relative"
              >
                <div className="absolute w-32 h-10 bg-[#2710d4] -bottom-5 rounded-full opacity-50 blur-[50px]" />
                <h2 className="text-4xl font-bold text-purpleLitest">
                  {item.value}
                </h2>
                <p className="text-purpleLight mt-2 text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex-1 flex items-center border-black rounded px-3"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {renderReviews(allReviews.slice(0, visibleCount))}
        </div>

        {allReviews.length > 9 && (
          <div
            className="text-center mt-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <button
              onClick={handleToggleReviews}
              className="btn2 w-80 py-6 relative z-50 shadow-sm shadow-black leading-none overflow-hidden bg-[#760047] hover:border border-gray-700 rounded-md mt-5"
              type="button"
            >
              <span className="absolute inset-0 bg-[#000033]" />
              <span className="absolute inset-0 flex justify-center items-center text-white">
                {visibleCount >= allReviews.length
                  ? 'Show Less Reviews'
                  : 'View More Reviews'}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
