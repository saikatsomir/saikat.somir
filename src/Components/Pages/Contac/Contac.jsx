import { useEffect, useState } from 'react';
import { IoMdPaperPlane, IoMdClose } from 'react-icons/io';
import tulip from './images/tulip.jpg';

export const Contact = () => {
  const [showPanels, setShowPanels] = useState(false);

  const handleClick = () => setShowPanels(true);
  const handleClose = () => setShowPanels(false);

  useEffect(() => {
    if (showPanels) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [showPanels]);

  return (
    <div className="bg-purpleBg flex flex-col pb-10 relative  overflow-hidden pt-20 md:pt-0">
      {/* background glow */}
      <div className="absolute top-[22%] left-10 sm:left-40 rotate-90 blur-[100px] w-[300px] sm:w-[400px] h-[400px] sm:h-[500px] bg-[#640d5f] opacity-70" />

      <div className="max-w-[1400px] w-full mx-auto px-4">
        {/* top section */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-purpleLight text-5xl sm:text-7xl md:text-[140px] uppercase font-neueBold text-center sm:text-left">
            Let's Start
          </h1>
          <h1 className="text-base sm:text-lg md:text-[24px] text-purpleLight underline uppercase mt-4 sm:mt-0 cursor-pointer">
            enquire me
          </h1>
        </div>

        <h1 className="text-purpleLight text-5xl sm:text-7xl md:text-[140px] capitalize font-sloop text-center mt-6">
          Something Great
        </h1>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-10 mt-10">
          <div className="flex justify-center sm:justify-start">
            <div className="relative group rounded-full shadow-xl shadow-black">
              <span className="absolute inset-0 bg-[#000033] rounded-full scale-0 group-hover:scale-100 opacity-100 transition-transform duration-500 ease-out origin-center z-0" />
              <button
                onClick={handleClick}
                className="relative z-10 w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 text-purpleLight  rounded-full flex justify-center items-center transition-all duration-1000 hover:text-white hover:text-[19px]"
              >
                <IoMdPaperPlane className="text-2xl mr-2" />
                Get in touch
              </button>
            </div>
          </div>
          <h1 className="text-purpleLight text-5xl sm:text-7xl md:text-[140px] uppercase font-neueBold text-center sm:text-right">
            together
          </h1>
        </div>
      </div>

      {/* sliding panels */}
      <div>
        {/* left panel */}
        <div
          className={`fixed top-5 left-5 bottom-5 bg-[#1b1a1a] text-white transition-all duration-700 ease-in-out 
            ${showPanels ? 'translate-y-0' : '-translate-y-[calc(100%+1.25rem)]'}
            w-full sm:w-[calc(50%-20px)] z-50 overflow-y-auto`}
        >
          <div className="p-5 space-y-4">
            <h1 className="text-5xl sm:text-7xl md:text-[120px] text-center font-neueBold uppercase mt-10 mb-10">
              Get in
            </h1>
            <div className="w-full max-w-[500px] mx-auto flex justify-end">
              <h1 className="text-5xl sm:text-7xl md:text-[120px] font-sloop capitalize">touch</h1>
            </div>

            <div className="w-full max-w-[600px] mx-auto mt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="placeholder:text-lg sm:placeholder:text-xl flex-1 h-14 pl-4 outline-none border-[0.5px]"
                />
                <input
                  type="text"
                  placeholder="Your email"
                  className="placeholder:text-lg sm:placeholder:text-xl flex-1 h-14 pl-4 outline-none border-[0.5px]"
                />
              </div>
              <textarea
                className="w-full h-40 sm:h-52 border-[0.5px] p-4 text-lg sm:text-xl mt-6"
                placeholder="How can I help you?"
              />
              <label className="flex items-center gap-2 mt-4 text-sm sm:text-xl">
                <input
                  type="checkbox"
                  className="appearance-none w-5 h-5 rounded-full border border-white checked:bg-black checked:border-black"
                />
                I've accepted the
                <a href="" className="underline">
                  Privacy & Policy.
                </a>
              </label>
              <button className="mt-5 w-full sm:w-72 h-14 rounded-badge border-[0.5px] border-white">
                Submit message
              </button>
            </div>
          </div>
        </div>

        {/* right panel */}
        <div
          className={`fixed bottom-5 right-5 top-5 bg-gray-800 text-white transition-all bg-cover duration-700 ease-in-out 
            ${showPanels ? 'translate-y-0' : 'translate-y-[calc(100%+1.25rem)]'}
            w-full sm:w-[calc(50%-20px)] z-20 overflow-y-auto`}
          style={{ backgroundImage: `url(${tulip})` }}
        >
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 text-white text-3xl hover:text-white"
          >
            <IoMdClose />
          </button>
          <div className="p-6 sm:p-10 mt-16 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold">Right Panel</h2>
            <p>This is the right panel content coming from bottom to top.</p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="mt-20  px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-screen-2xl mx-auto gap-4">
          <h1 className="text-purpleLight text-sm sm:text-lg text-center">
            &#169; All copyrights reserved to Saikat.
          </h1>
          <h1 className="text-purpleLight text-sm sm:text-lg text-center">
            Made with <span className="text-red-600">&#x2665;</span>
          </h1>
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-purpleLight text-sm sm:text-lg">Imprint</h1>
            <div className="border-l-2 h-5 border-black mx-2"></div>
            <h1 className="text-purpleLight text-sm sm:text-lg cursor-pointer">
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
