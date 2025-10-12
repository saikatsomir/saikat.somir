'use client';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Calendar, CheckCircle2, UserIcon } from 'lucide-react';
import { MdControlPoint, MdVideoCall } from 'react-icons/md';
import {
  FaServicestack,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

export const BookingSuccess = () => {
  const [bookingData, setBookingData] = useState(null);
  const [countdown, setCountdown] = useState(30);
  const [fadingOut, setFadingOut] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const data = {
      name: query.get('name'),
      email: query.get('email'),
      business: query.get('business'),
      industry: query.get('industry'),
      platform: query.get('platform'),
      whatsapp: query.get('whatsapp'),
      services: query.get('services') ? query.get('services').split(',') : [],
      needs: query.get('needs'),
      date: query.get('date'),
      time: query.get('time'),
    };

    if (!data.name || !data.email || !data.date || !data.time) {
      navigate('/book-a-meeting');
      return;
    }

    setBookingData(data);
  }, [navigate, location.search]);

  // ⏳ Countdown and redirect logic
  useEffect(() => {
    if (!bookingData) return;
    if (countdown <= 0) {
      navigate('/');
      return;
    }

    const timer = setTimeout(() => {
      if (countdown === 3) setFadingOut(true);
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, bookingData, navigate]);

  if (!bookingData) {
    return (
      <div className="bg-purpleBg min-h-screen flex justify-center items-center text-white text-lg">
        Loading booking details...
      </div>
    );
  }

  const servicesDisplay = bookingData.services?.length
    ? bookingData.services.join(', ')
    : 'No service selected';

  return (
    <AnimatePresence>
      <motion.div
        className="bg-purpleBg min-h-screen flex justify-center items-center px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
      >
        {/* ⏳ Countdown Timer (Top-Right Corner) */}
        <motion.div
          className="absolute top-5 right-5 bg-white/10 border border-indigo-500 px-4 py-2 rounded-md text-white text-sm font-semibold backdrop-blur-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Redirecting in {countdown}s...
        </motion.div>

        <motion.div
          className="text-white max-w-2xl"
          animate={fadingOut ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Profile */}
          <img
            src="/saikat/profile2.jpeg"
            className="w-24 h-24 object-cover mx-auto rounded-full border-4 border-indigo-600"
            alt="Profile"
          />

          {/* Success Title */}
          <div className="flex items-center gap-3 justify-center py-5">
            <CheckCircle2 className="text-green-500 size-7" />
            <h1 className="text-white font-bold text-2xl">
              You are scheduled. 🎉
            </h1>
          </div>

          {/* Check Mail */}
          <div className="bg-white/5 px-7 w-fit text-center h-11 flex mx-auto justify-center items-center gap-1 text-white/90 rounded-lg shadow-sm shadow-[#2710d4] border-gray-800 mb-3 relative">
            <div
              className="my-3 absolute -top-[13px] left-1/2 -translate-x-1/2 z-10"
              style={{
                height: '2px',
                width: '100px',
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0))',
              }}
            ></div>
            <MdControlPoint className="text-[10px]" />
            Check Your Mail
          </div>

          <h1 className="text-base text-center opacity-90">
            An email has been sent to your inbox with consultation details.
          </h1>

          {/* Booking Summary Card */}
          <div className="relative">
            <div className="border w-full p-5 mt-14 rounded-lg border-gray-700 relative bg-white/5 shadow-md">
              <h1 className="text-3xl font-bold text-white text-center mb-6">
                FREE Website Consultation
              </h1>

              <h1 className="text-2xl font-semibold flex items-center gap-3 my-4">
                <UserIcon className="size-7" /> {bookingData.name}
              </h1>

              <h1 className="text-lg flex items-center gap-3 my-4">
                <Calendar className="size-6" /> {bookingData.date} at{' '}
                {bookingData.time}
              </h1>

              <h1 className="text-lg flex items-center gap-3 my-4">
                <MdVideoCall className="size-7" />
                {bookingData.platform || 'Not specified'}
                {bookingData.platform === 'WhatsApp' &&
                  bookingData.whatsapp && (
                    <span className="ml-2 text-indigo-300">
                      ({bookingData.whatsapp})
                    </span>
                  )}
              </h1>

              <h1 className="text-lg flex items-center gap-3 my-4">
                <FaServicestack className="size-5" />
                {servicesDisplay}
              </h1>

              <p className="text-lg mb-6 italic text-indigo-300 text-center">
                “The future belongs to those who create it — let’s build yours
                together.”
              </p>

              <div
                className="my-3 absolute -top-[13px] left-1/2 -translate-x-1/2 z-10"
                style={{
                  height: '2px',
                  width: '400px',
                  backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0))',
                }}
              ></div>
            </div>

            <div
              className="my-3 absolute -bottom-[50px] left-1/2 -translate-x-1/2 z-10"
              style={{
                height: '2px',
                width: '700px',
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0))',
              }}
            ></div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-20">
            <a
              href="https://github.com/saikatsomir"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-white rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <FaGithub className="text-2xl text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/saikatsomir/"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-white rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin className="text-2xl text-white" />
            </a>
            <a
              href="mailto:saikatsomir@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 border border-white rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <SiGmail className="text-2xl text-white" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=saikatsomir@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <FaInstagram className="text-2xl text-white" />
            </a>
          </div>

          {/* Back Home */}
          <div className="text-center mt-10">
            <Link
              to="/"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white px-6 py-3 rounded-md font-semibold shadow-lg"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
