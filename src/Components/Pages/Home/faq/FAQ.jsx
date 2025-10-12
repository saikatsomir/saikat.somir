import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import BackgroundLines from '../../ui/background-lines';

const steps = [
  {
    title: '01. Discussion',
    content:
      'We listen and understand. This is where your raw ideas start to breathe. We dive into your goals, challenges, and vision — everything that shapes the foundation of what we’re about to build together.',
  },
  {
    title: '02. Design',
    content:
      'Now the creative sparks fly. From moodboards and wireframes to polished mockups, we shape a visual direction that feels like your brand — bold, functional, and aesthetically on point. Every pixel has purpose, and each interaction reflects clarity, consistency, and intent.',
  },
  {
    title: '03. Development',
    content:
      'Designs come to life here. Using clean, modern code and responsive techniques, we build fast, accessible, and scalable web experiences — ready for every device and every visitor.',
  },
  {
    title: '04. Production',
    content:
      'Time to launch. We fine-tune, test across browsers and breakpoints, and make sure performance is top-notch. Once it’s perfect, we push it live — smooth and confident.',
  },
  {
    title: '05. Revisions',
    content:
      'Even after launch, we’re not done. Your feedback matters — we revisit, refine, and tweak to make sure every detail aligns with your expectations and vision.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Keep "Design" open by default

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-[#140313] -z-10  relative   mb-0 ">
      {/* <div className="absolute -top-52 -left-52 w-[500px] h-[500px]  bg-[#640d5f] -rotate-45 blur-3xl  rounded-full opacity-30" /> */}
      {/* <div className="absolute -bottom-[20%] -right-32 w-[500px] h-[500px] bg-[#640d5f] rounded-full blur-[100px] opacity-30" /> */}
      {/* <div className="absolute -bottom-[20%] -left-32 w-[500px] h-[500px] bg-[#640d5f] rounded-full blur-[100px] opacity-30" /> */}
      {/* <div className="absolute -top-[20%] -right-32 w-[500px] h-[500px] bg-[#640d5f] rounded-full blur-[100px] opacity-30" /> */}
      {/* <div className="absolute -bottom-[20%] -right-32 w-[500px] h-[500px] bg-[#640d5f] rounded-full blur-[100px] opacity-30" /> */}
      {/* <div className="absolute -bottom-[30%] -translate-x-1/2 left-1/2 w-[900px] h-[500px] bg-[#640d5f] rounded-full blur-[100px] opacity-30" /> */}
      <div className="max-w-[1400px]  py-28 mx-auto w-full md:flex items-center">
        {/* Left Side with sticky + vertical centering */}
        <BackgroundLines className="md:w-1/2 px-6 md:px-10 h-fit lg:sticky top-28 flex flex-col justify-center relative">
          {/* <BackgroundLines /> */}
          <div>
            <h1 className="text-white text-xl md:text-2xl">Hold on a sec!</h1>
            <h1 className="text-white text-3xl lg:text-5xl font-extrabold pt-2 lg:pt-5 leading-tight">
              Do you have anything <br /> on your mind?
            </h1>

            <h1 className="pt-2 lg:pt-5 text-lg text-white w-[100%] lg:w-[90%]">
              If you can imagine it, I can build it. I craft fast, fluid,
              unforgettable digital experiences from bold visuals to clean
              front-end magic.
            </h1>

            <button className="bg-[#131431] text-white px-6 py-3 rounded-md mt-10 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1">
              Let's talk! 1:1
            </button>
          </div>
          {/* <div className="flex justify-center gap-10 ">
            <div className="flex justify-center items-center flex-col transition-all hover:scale-110 duration-300 w-fit ">
              <h1 className="text-5xl font-sloop text-white pb-5">100+</h1>
              <h1 className="bg-gray-800 text-white rounded-sm py-1 px-2 w-fit">
                Completed projects
              </h1>
            </div>

            <div className="flex justify-center items-center flex-col transition-all hover:scale-110 duration-300 w-fit ">
              <h1 className="text-5xl font-sloop text-white pb-5">5+</h1>
              <h1 className="bg-gray-800 text-white rounded-sm py-1 px-2 w-fit">
                Years Experience
              </h1>
            </div>

            <div className="col-span-2 md:col-span-1 flex justify-center items-center flex-col transition-all hover:scale-110 duration-300 w-fit ">
              <h1 className="text-5xl font-sloop text-white pb-5">500+</h1>
              <h1 className="bg-gray-800 text-white rounded-sm py-1 px-2 w-fit">
                Connections with
              </h1>
            </div>
          </div> */}
        </BackgroundLines>

        {/* Right Side - Accordion */}
        <div className="md:w-1/2 text-white pt-10  border-white px-6 ">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`border-t-2 border-white py-7 ${
                index === steps.length - 1 ? 'border-b-2' : ''
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleIndex(index)}
              >
                <h2 className="text-lg md:text-2xl font-medium">
                  {step.title}
                </h2>
                {activeIndex === index ? (
                  <FiMinus size={20} />
                ) : (
                  <FiPlus size={20} />
                )}
              </div>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  activeIndex === index ? 'max-h-[500px] mt-2' : 'max-h-0'
                }`}
              >
                <p className="text-base text-white">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FAQ;
