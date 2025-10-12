import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

export const Difficulties = ({ challenges = [], results = [] }) => {
  return (
    <div className="bg-white relative z-50 mt-0">
      <div className="max-w-[1340px] mx-auto px-3 md:px-6 lg:px-10 py-20 grid md:grid-cols-2 gap-10">
        {/* Challenges Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black text-center md:text-left">
            Challenges
          </h2>
          <div className="space-y-5">
            {challenges.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  boxShadow: '0 12px 25px rgba(0,0,0,0.12)',
                }}
                className="bg-red-50 p-5 rounded-xl flex items-start gap-4 shadow-sm cursor-pointer transition-transform"
              >
                <div className="text-red-500 mt-1">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-red-600">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black text-center md:text-left">
            Results & Benefits
          </h2>
          <div className="space-y-5">
            {results.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  boxShadow: '0 12px 25px rgba(0,0,0,0.12)',
                }}
                className="bg-teal-50 p-5 rounded-xl flex items-start gap-4 shadow-sm cursor-pointer transition-transform"
              >
                <div className="text-teal-600 mt-1">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
