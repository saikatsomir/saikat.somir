import { MdControlPoint, MdVerified } from 'react-icons/md';
import dollar from './images/dollar.gif';
import hand from './images/hand2.gif';
import { LuDollarSign } from 'react-icons/lu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Pricing = () => {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/book-a-meeting');
  };
  const packages = [
    {
      title: 'Starter Pac',
      price: '$300 - $800',
      subtitle: 'Starter Web Presence',
      desc: 'Clean, responsive static site for personal or small business use.',
      revisions: '2 revisions',
      features: [
        { title: 'Web Development', desc: 'Up to 4 pages' },
        { title: 'Responsive Design', desc: 'Looks great on all devices.' },
        { title: 'Basic SEO Setup', desc: 'Optimized structure for Google.' },
        {
          title: 'Social Media Links',
          desc: 'Integrate your social platforms.',
        },
        {
          title: 'Basic Branding',
          desc: 'Color scheme, fonts & brand identity',
        },
        {
          title: 'Contact Form',
          desc: 'Custom form for visitors to reach you.',
        },
      ],
    },
    {
      title: 'Business Pac',
      price: '$800 - $2000',
      subtitle: 'Professional Web Boost',
      desc: 'Ideal for businesses ready to scale with blog, CMS, and SEO tools.',
      revisions: '4 revisions',
      features: [
        { title: '6 to 12 Pages', desc: 'Well-structured and scalable.' },
        {
          title: 'Modern UI/UX',
          desc: 'Visually engaging & mobile-optimized design.',
        },
        {
          title: 'SEO & Google Analytics',
          desc: 'Boost visibility & track performance.',
        },
        { title: 'Blog, Content Setup', desc: 'Publish updates easily.' },
        {
          title: 'Email Automation',
          desc: 'Automatic replies & lead capture.',
        },
        {
          title: 'Brand + Animation',
          desc: 'Custom visuals and optional animations.',
        },
      ],
    },
    {
      title: 'Custom Pac',
      price: 'Starting from $2000',
      subtitle: 'Advanced/Custom Website',
      desc: 'E-commerce, SaaS, fully customizable and advanced features.',
      revisions: '8 revisions',
      features: [
        {
          title: '15 to Unlimited Pages',
          desc: 'Performance & scalable structure.',
        },
        {
          title: 'Bespoke UI/UX Design / Figma',
          desc: 'Tailored interfaces for engagement.',
        },
        {
          title: 'E-commerce Integration',
          desc: 'Product listings, cart, secure checkout.',
        },
        { title: 'Admin Dashboard', desc: 'Manage content, users, settings.' },
        { title: 'Premium Branding', desc: 'Logos and brand guidelines.' },
        {
          title: 'Domain & Hosting',
          desc: 'Hosting on DigitalOcean, AWS with NGINX Proxy.',
        },
      ],
    },
  ];

  const shortText =
    'Choose from flexible, professionally crafted web development packages  ';
  const fullText =
    ' Choose from flexible, professionally crafted web development packages tailored to fit your business goals perfectly. ';

  return (
    <div className="relative pb-10 w-full  bg-purpleBg px-2">
      <div className="absolute -top-5  -translate-x-1/2 left-1/2 w-full md:w-[900px] h-[170px] blur-[100px]  bg-[#0d0457]  opacity-50 z-50" />

      <div className="max-w-[1340px]  mx-auto flex flex-col pt-4 pb-14">
        <div className="pb-10 md:pb-16 text-center">
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
            Pricing
          </div>
          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl  font-bold text-white w-fit mx-auto text-transparent bg-clip-text"
          >
            The Right Plan,
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-purpleLight mt-2 w-[90%] lg:w-[50%] text-sm sm:text-base md:text-lg z-50 mx-auto"
          >
            <span className="block md:hidden">
              {showMore ? fullText : shortText}
              {!showMore && (
                <button
                  className="ml-1 underline text-blue-600"
                  onClick={() => setShowMore(true)}
                >
                  See more
                </button>
              )}
            </span>
            <span className="hidden md:block">{fullText}</span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="rounded-xl w-full relative overflow-hidden border shadow-xl shadow-[#0d0457]/20 border-gray-800 pt-7 "
            >
              <div className="absolute w-32 h-32 bg-[#1c08d0] -top-16 -left-16 -rotate-[25deg] blur-[100px] " />
              <div className="absolute w-32 h-[100px] bg-[#1c08d0] -top-16 -right-16 -rotate-[25deg] blur-[100px] " />
              <div className="absolute w-[30px] h-36 bg-[#1c08d0] -bottom-0 -left-0 rotate-[20deg] blur-[50px] " />
              <div className="absolute w-[30px] h-52 bg-[#1c08d0] top-[150px] right-0 rotate-[50deg] blur-[50px] " />
              <div className="absolute w-[1200px] h-[1200px] -right-[190%] blur-[40px] opacity-90 top-52   border-[20px] border-[#211497] rounded-full    " />
              {idx === 2 && (
                <div>
                  <img
                    src="/bgIcons/cross.svg"
                    className="absolute -bottom-10 -right-10"
                    alt=" "
                  />
                </div>
              )}
              <div className="px-4 sm:px-6">
                <div className="w-fit gap-2 text-sm sm:text-base text-white border border-gray-800 bg-gray-700/40 px-3 py-1 rounded-md mb-7 relative">
                  <div
                    className="my-3 -mr-14 absolute -top-[13px] left-1/2 -translate-x-1/2 z-10"
                    style={{
                      height: '1px',
                      width: '100px',
                      backgroundImage:
                        'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0)) ',
                    }}
                  ></div>
                  {pkg.title}
                </div>

                <h1 className="text-3xl sm:text-4xl text-purpleLight flex items-center font-semibold ">
                  {/* <LuDollarSign className="text-3xl sm:text-4xl -mr-1" /> */}
                  {pkg.price}
                </h1>
                <h2 className="text-2xl  text-white font-medium py-3">
                  {pkg.subtitle}
                </h2>
                <p className="text-base text-gray-500">{pkg.desc}</p>

                <button
                  onClick={handleClick}
                  className={`btn2 w-full mt-5 h-12 relative overflow-hidden rounded-md hover:border border-gray-800 ${
                    idx === 1
                      ? 'bg-[#000033] border border-gray-400'
                      : 'bg-[#760047]'
                  }`}
                >
                  <span
                    className={`absolute inset-0 ${
                      idx === 1 ? 'bg-[#0505b8] ' : 'bg-[#000033]'
                    }`}
                  />
                  <span className="absolute inset-0 flex justify-center items-center text-white">
                    Let's talk! 1:1
                  </span>
                </button>

                <div className="border-t border-purpleLight px-8 mt-5" />
              </div>

              <div className="p-6 pt-0 relative">
                <span className="absolute -top-2 right-6 text-purpleLight flex items-center gap-2 text-sm font-medium">
                  <img src={hand} alt="" className="w-5" /> {pkg.revisions}
                </span>
                <div className="py-1 pt-5 mt-6 ">
                  {pkg.features.map((f, i) => (
                    <div key={i} className="py-4  pt-0">
                      <h4 className="flex items-center gap-2 text-lg  text-white">
                        <MdVerified className="text-blue-500" />
                        {f.title}
                      </h4>
                      <p className="text-gray-500 text-base pl-7  w-[95%]">
                        {f.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
