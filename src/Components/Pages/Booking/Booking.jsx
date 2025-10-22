import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { motion, AnimatePresence } from 'framer-motion';
import { MdControlPoint, MdVideoCall } from 'react-icons/md';
import { Clock9Icon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Booking = () => {
  // ✅ Load from sessionStorage on mount
  const [selectedDate, setSelectedDate] = useState(() => {
    const savedDate = sessionStorage.getItem('bookingDate');
    return savedDate ? dayjs(savedDate) : null;
  });

  const [selectedTime, setSelectedTime] = useState(() => {
    return sessionStorage.getItem('bookingTime') || null;
  });

  const today = dayjs();
  const tomorrow = today.add(1, 'day');
  const maxDate = tomorrow.add(4, 'day');
  const navigate = useNavigate();

  // Custom Times
  const times = [
    '7:00am',
    '8:00am',
    '9:00am',
    '10:00am',
    '11:00am',
    '12:00pm',
    '2:00pm',
    '3:00pm',
    '4:00pm',
    '5:00pm',
    '8:00pm',
    '9:00pm',
    '10:00pm',
  ];

  // Generate all days of this month
  const startOfMonth = today.startOf('month');
  const endOfMonth = today.endOf('month');
  const daysInMonth = [];
  for (
    let d = startOfMonth;
    d.isBefore(endOfMonth) || d.isSame(endOfMonth);
    d = d.add(1, 'day')
  ) {
    daysInMonth.push(d);
  }

  // Add blanks for days before 1st of the month
  const blanks = [];
  const firstDayOfMonth = startOfMonth.day();
  for (let i = 0; i < firstDayOfMonth; i++) {
    blanks.push(null);
  }

  const isSelectable = (day) =>
    day.isAfter(today, 'day') && day.isBefore(maxDate.add(1, 'day'), 'day');

  // ✅ Save to sessionStorage whenever user selects date or time
  useEffect(() => {
    if (selectedDate) {
      sessionStorage.setItem('bookingDate', selectedDate.format('YYYY-MM-DD'));
    }
  }, [selectedDate]);

  useEffect(() => {
    if (selectedTime) {
      sessionStorage.setItem('bookingTime', selectedTime);
    }
  }, [selectedTime]);

  const handleDateChange = (day) => {
    setSelectedDate(day);
    setSelectedTime(null); // ✅ Reset time when changing date
    sessionStorage.removeItem('bookingTime'); // ✅ Clear old time
  };

  const handleNext = () => {
    if (selectedDate && selectedTime) {
      navigate(
        `/booking-call/free?date=${selectedDate.format('YYYY-MM-DD')}&time=${selectedTime}`
      );
    }
  };

  return (
    <div className="bg-purpleBg min-h-screen flex flex-col justify-center items-center relative h-fit pb-20 pt-20 px-2 md:px-0 ">
      <div className="absolute top-16  -translate-x-1/2 left-1/2 w-full md:w-[900px] h-[200px] blur-[100px]  bg-[#0d0457]  opacity-35 z-50" />

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
        Blueprint
      </div>
      <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl  font-bold pb-5">
        Book A Meeting
      </h1>
      <div className="border-2 border-gray-900 rounded-lg p-1.5 mt-10 ">
        <div className="flex flex-col bg-purpleBg md:flex-row  rounded-lg  md:h-[700px] overflow-hidden  max-w-6xl  mx-auto  border-2 border-gray-700 relative z-50 ">
          <img
            src="/bgIcons/cross.svg"
            className="w-72 h-fit absolute -bottom-20 -right-20  -z-10"
            alt=""
          />
          <div className="absolute -bottom-20  -translate-x-1/2 left-1/2 w-full md:w-[900px] h-[200px] blur-[100px]  bg-[#0d0457]  opacity-35 -z-10" />
          <div className="absolute -top-10 -left-10 w-52 h-52  blur-[50px]  bg-[#0d0457]  opacity-35 -z-10" />
          <div className="absolute -top-10 -right-10 w-52 h-52  blur-[50px]  bg-[#0d0457]  opacity-35 -z-10" />

          {/* Left Info */}
          <div className="w-full md:w-1/3 text-white p-8 relative mt-2">
            <div
              className="my-3 hidden md:block  top-[350px]  absolute rotate-90 z-10"
              style={{
                height: '1px',
                width: '700px',
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0)) ',
              }}
            ></div>
            <img
              src="/saikat/profile3.jpeg"
              className=" w-24 h-24 object-cover  border-[#3f3fee] rounded-full border-[3px]"
              alt=""
            />
            <h1 className="my-3 text-xl">Saikat Somir </h1>
            <div className="relative">
              <h2 className="text-5xl font-bold  mb-8  ">
                FREE Website Consultation
              </h2>
              <div
                className="my-3 mr-14 absolute -bottom-[32px] left-1/2 -translate-x-1/2 z-10"
                style={{
                  height: '1px',
                  width: '300px',
                  backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0)) ',
                }}
              ></div>
            </div>
            <p className="text-lg flex items-center gap-2 mb-2">
              <Clock9Icon className="text-base" /> 20 min
            </p>
            <div className="text-lg flex items-center   gap-2 mb-8">
              <MdVideoCall className="text-5xl" />
              <h1>Web conferencing details provided upon confirmation.</h1>
            </div>
            <p className="text-md opacity-80">
              This meeting is to discuss your business and showcase your site
              mockup if previously communicated. Serious bookings only!
            </p>
          </div>

          {/* Right Side (Calendar + Times) */}
          <div className="w-full md:w-2/3 p-8 flex flex-col md:flex-row gap-8">
            {/* Calendar */}
            <div className="w-full md:w-2/3">
              <h1 className="text-white text-center md:text-left text-2xl mb-5 md:mb-10">
                Select a Date & Time
              </h1>
              <h3 className="text-lg font-semibold mb-4 text-center text-white">
                {today.format('MMMM YYYY')}
              </h3>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-4 text-center mb-6">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                  (day, idx) => (
                    <p key={idx} className="text-lg text-white">
                      {day}
                    </p>
                  )
                )}

                {/* Empty slots before 1st */}
                {blanks.map((_, idx) => (
                  <div key={`blank-${idx}`} />
                ))}

                {/* Actual days */}
                {daysInMonth.map((day, idx) => {
                  const selectable = isSelectable(day);
                  const isSelected = selectedDate?.isSame(day, 'day');
                  return (
                    <button
                      key={idx}
                      disabled={!selectable}
                      onClick={() => selectable && handleDateChange(day)} // ✅ use handler
                      className={`font-sans rounded-full h-10 w-10 text-base transition-all ${
                        !selectable
                          ? 'text-gray-400 cursor-not-allowed'
                          : isSelected
                            ? 'bg-[#0f026b] text-white font-bold shadow-md'
                            : 'bg-blue-100 text-black hover:bg-indigo-100 border border-gray-300'
                      }`}
                    >
                      {day.date()}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Times Section */}
            <div className="w-full md:w-1/3">
              {selectedDate ? (
                <>
                  <h3 className="text-lg text-gray-100 mb-4 md:mt-[75px]">
                    {selectedDate.format('ddd, MMMM D')}
                  </h3>
                  <div className="flex flex-col gap-3 max-h-[500px] overflow-y-auto">
                    {times.map((time, idx) => {
                      const isActive = selectedTime === time;
                      return (
                        <div
                          key={idx}
                          className="flex items-center relative gap-2"
                        >
                          <motion.button
                            onClick={() => setSelectedTime(time)}
                            animate={{
                              width: isActive ? '50%' : '100%',
                            }}
                            transition={{ duration: 0.4 }}
                            className={`px-4 py-3 rounded-sm text-center transition ${
                              isActive
                                ? 'bg-[#0f026b] text-white'
                                : 'border border-gray-700 hover:bg-[#0d0457]/50 text-gray-50'
                            } relative overflow-hidden`}
                          >
                            <span className="absolute w-10 h-20 top-0 left-0 bg-[#0d0457] blur-[40px]" />
                            <span className="absolute w-10 h-20 bottom-0 right-0 bg-[#0d0457] blur-[40px]" />
                            {time}
                          </motion.button>

                          {/* Animated Next Button */}
                          <AnimatePresence>
                            {isActive && (
                              <motion.button
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 50, opacity: 0 }}
                                onClick={handleNext}
                                transition={{ duration: 0.4 }}
                                className="ml-2 px-4 py-3 rounded-sm bg-[#0f026b] text-white font-semibold shadow w-1/2"
                              >
                                Next
                              </motion.button>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <p className="text-gray-400 text-center md:text-left md:mt-[75px]">
                  Select a date to view times
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
