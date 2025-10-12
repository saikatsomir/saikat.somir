import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Overview = ({
  title,
  subtitle,
  logo,
  description,
  tabs,
  goals,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 relative z-50 mb-0">
      <div className="max-w-[1340px] mx-auto px-3 md:px-6 text-center relative z-10">
        {/* Logo / Title */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img src={logo} className="mx-auto w-32 md:w-40 mb-4" alt="Logo" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Tabs */}
        <div className="flex justify-center mt-12 gap-4 flex-wrap ">
          {tabs.map((tab, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveTab(idx)}
              // whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-10 md:px-16 py-3  rounded-full  transition-all
                ${
                  activeTab === idx
                    ? 'bg-[#760047] text-white text-lg hover:bg-[#5b0050]'
                    : 'bg-[#000033] text-white hover:bg-[#1a1a66] '
                }
              `}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-gray-700 max-w-3xl mx-auto  bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center"
            >
              {tabs[activeTab].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Goals */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 ">
          {goals.map((goal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center gap-4 p-4 rounded-xl shadow-sm bg-white border border-gray-100
                ${idx % 2 === 0 ? 'justify-start text-left' : 'justify-end text-left'}
              `}
            >
              <span className="text-green-500 text-2xl">✔</span>
              <p className="text-gray-900 text-lg">{goal}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional subtle floating background elements */}
      <motion.div
        className="absolute top-0 left-0 w-60 h-60 bg-purple-300 rounded-full opacity-10 blur-3xl pointer-events-none"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 rounded-full opacity-10 blur-3xl pointer-events-none"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut' }}
      />
    </section>
  );
};
