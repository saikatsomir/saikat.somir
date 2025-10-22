import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import earth from './images/earth.webp';
import comp from './images/old-com.svg';

const faqData = [
  {
    question: 'Your Website, Our Priority',
    answer:
      'We ensure your website stays fast, secure, and up-to-date with performance optimization and ongoing support, so you can focus on growing your business.',
  },
  {
    question: 'Backup Assurance',
    answer:
      'Daily automated backups, rapid recovery, and secure data storage ensure your site’s safety and protection in emergencies.',
  },
  {
    question: 'Security Shield',
    answer:
      'We provide ongoing security checks, patch vulnerabilities, and monitor for malware. With SSL certificates and proactive measures, we keep your website safe from threats.',
  },
  {
    question: 'Uptime Monitoring',
    answer:
      "24/7 monitoring ensures your website is live and responsive at all times. If any downtime is detected, our team is alerted immediately, and we work to restore service quickly. You'll get detailed uptime reports and insights to optimize your website’s availability.",
  },
  {
    question: 'Content Updates',
    answer:
      'We manage blog updates, SEO edits, image uploads, and optimize content for performance and SEO.',
  },
];

export const Worldwide = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  // animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const faqVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.4, ease: 'easeOut' },
    }),
  };

  return (
    <motion.div
      className="w-full md:-mt-20 bg-purpleBg relative z-50 pb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* background blur & effects */}
      <div className="absolute -top-[3%] right-20 blur-[100px] w-[200px] h-[200px] bg-[#150570] rounded-full opacity-50 -z-50" />
      <img
        src="/bgIcons/tailwind.svg"
        className="absolute top-[15%] md:-top-[2%] -right-4 md:right-20 animate-cell-ripple w-48"
        alt=""
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center relative gap-12 md:gap-0">
          {/* LEFT SIDE */}
          <div className="w-full md:w-[40%] relative">
            <h1 className="text-5xl sm:text-7xl lg:text-9xl text-center md:text-start font-bold uppercase text-white">
              Industries
            </h1>
            <h1 className="text-4xl text-center md:text-start sm:text-6xl lg:text-[95px] sm:-mt-8 md:-mt-5 font-bold w-full md:w-[150%] bg-gradient-to-r from-[#cf2cc4] to-white bg-clip-text text-transparent">
              We Empower
            </h1>

            <div className="-z-10">
              <img
                src={earth}
                alt=""
                className="w-[300px] sm:w-[350px] md:w-[500px] absolute -top-8 sm:-top-12 md:-top-16 left-16 sm:left-32 md:left-52 -z-10"
              />
            </div>

            <div className="z-50 relative">
              <div
                className="my-3 -mr-14 absolute bottom-[30px] -rotate-[7.5deg] left-[40%] -translate-x-1/2 z-10"
                style={{
                  height: '2px',
                  width: '250px',
                  backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0)) ',
                }}
              ></div>

              <div className="absolute bottom-[20%] left-0 md:left-20 blur-[100px] w-[350px] h-[350px] bg-[#150570] rounded-full opacity-50 -z-50" />

              <img
                src={comp}
                alt="old computer"
                className="mt-10 sm:mt-14 md:mt-20 w-[70%] sm:w-[75%] md:w-[80%] z-50"
              />
            </div>
          </div>

          {/* RIGHT SIDE - FAQ */}
          <div className="w-full md:w-[55%] mt-10 sm:mt-16 md:mt-28 space-y-6 relative">
            <div className="absolute bottom-[20%] left-0 md:left-60 blur-[100px] w-[350px] h-[350px] bg-[#150570] rounded-full opacity-50 -z-50" />

            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={faqVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`rounded-2xl px-6 py-7 cursor-pointer transition-all duration-300 border ${
                  activeIndex === index
                    ? 'border-purpleLight'
                    : 'border-gray-500 bg-transparent'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <motion.div className="flex justify-between items-center">
                  <h1
                    className={`text-lg sm:text-xl font-medium transition-colors duration-300 ${
                      activeIndex === index ? 'text-white' : 'text-white'
                    }`}
                  >
                    {faq.question}
                  </h1>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`text-2xl transition-colors duration-300 ${
                      activeIndex === index
                        ? 'text-purpleLight'
                        : 'text-gray-400'
                    }`}
                  >
                    +
                  </motion.span>
                </motion.div>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="text-base text-gray-300 pt-3">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
