import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ClientFeedback = ({
  logo,
  ratting,
  feedback,
  feedback2,
  clientName,
  clientPosition,
}) => {
  return (
    <section className="relative w-full bg-white pt-28 pb-40 px-6 flex flex-col items-center justify-center z-50">
      <h1 className="text-5xl pb-7 font-bold text-black">Client Feedback</h1>
      <motion.div
        className="w-full max-w-[1400px] relative rounded-3xl overflow-hidden"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/portfolio/whiteBg.png')" }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/50" />

        {/* Content */}
        <div className="relative p-10">
          <motion.img
            src={logo}
            alt="Client Logo"
            className="w-48 mb-3"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
          />

          <motion.div
            className="flex justify-start bg-yellow-100 w-fit px-2 rounded-md py-1 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {[...Array(ratting)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-yellow-400 fill-yellow-400 mx-1"
              />
            ))}
          </motion.div>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            “{feedback} {feedback2}”
          </motion.p>
          <motion.div
            className="mt-8 text-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h4 className="text-xl font-semibold text-gray-900">
              {clientName}
            </h4>
            <p className="text-gray-500">{clientPosition}</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ClientFeedback;
