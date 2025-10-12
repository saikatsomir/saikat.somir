'use client';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdVideoCall } from 'react-icons/md';
import { Clock9Icon } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const BookingTime = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const date = searchParams.get('date');
  const time = searchParams.get('time');
  const navigate = useNavigate();

  const [platform, setPlatform] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    industry: '',
    services: [],
    needs: '',
    whatsapp: '',
  });

  useEffect(() => {
    if (!date || !time) {
      navigate('/book-a-meeting');
    }
  }, [date, time, navigate]);

  const handleServiceChange = (service) => {
    setFormData((prev) => {
      if (prev.services.includes(service)) {
        return {
          ...prev,
          services: prev.services.filter((s) => s !== service),
        };
      } else {
        return { ...prev, services: [...prev.services, service] };
      }
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (platform === 'WhatsApp' && !formData.whatsapp) {
      alert('Please enter your WhatsApp number.');
      setIsLoading(false);
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      business: formData.business,
      industry: formData.industry,
      platform: platform,
      whatsapp: platform === 'WhatsApp' ? formData.whatsapp : '',
      services: formData.services.join(', '),
      needs: formData.needs,
      date: date,
      time: time,
    };

    emailjs
      .send(
        'saikat_service',
        'template_saikat',
        templateParams,
        'user_gt4irDh4mb3s75Q9ekHO6'
      )
      .then(
        () => {
          setIsLoading(false);
          const query = new URLSearchParams({
            name: formData.name,
            email: formData.email,
            date,
            time,
            platform,
            services: formData.services.join(', '),
          }).toString();
          navigate(`/booking-success?${query}`);
        },
        (error) => {
          setIsLoading(false);
          alert('Something went wrong. Please try again later.');
          console.error(error);
        }
      );
  };

  return (
    <div className="bg-purpleBg min-h-screen flex justify-center items-center px-4 py-10 relative">
      {/* 🔄 Loader Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white mt-4 text-lg">Sending your booking...</p>
        </div>
      )}

      <div className="absolute top-96 rounded-full hidden md:block left-52  -z-10  w-96 h-96  blur-[100px]  bg-[#0d0457]  opacity-35 " />
      <div className="border p-1.5 w-full md:w-fit rounded-xl border-gray-800">
        <div className="max-w-6xl w-full flex flex-col md:flex-row backdrop-blur-lg border border-gray-700 rounded-xl shadow-xl overflow-hidden relative">
          {/* Left Panel */}
          <div className="absolute -bottom-10 -left-10 w-96 h-52  blur-[100px]  bg-[#0d0457]  opacity-35  -z-10" />
          <div
            className="my-3 hidden md:block top-[400px]  absolute rotate-90 z-10"
            style={{
              height: '1px',
              width: '700px',
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0), #3f3fee, rgba(255,255,255,0)) ',
            }}
          ></div>
          <img
            src="/bgIcons/cross.svg"
            className="absolute -z-10 -bottom-10 -left-10 rotate-90 size-32 md:size-60"
            alt=""
          />
          <div className="absolute -top-[550px] -right-[550px] w-[1200px] rounded-full h-[1100px] border-[25px]  blur-[50px]  border-[#0d0457]  opacity-100 -z-10 " />
          <div className="absolute -top-10 -left-10 w-52 h-52  blur-[50px]  -z-10  bg-[#0d0457]  opacity-35 " />
          <div className="absolute bottom-72 -right-10  w-60 h-10  blur-[50px]  -z-10  bg-[#0d0457]  opacity-50 " />
          <div className="absolute -top-10 right-0 w-52 h-52  blur-[50px] -z-10  bg-[#0d0457]  opacity-35 " />
          <div className="w-full md:w-1/3 text-white p-8 flex flex-col items-center md:items-start">
            <img
              src="/saikat/profile3.jpeg"
              className="w-24 h-24 rounded-full border-4 border-indigo-500 object-cover shadow-lg"
              alt=""
            />
            <h1 className="text-2xl font-semibold mt-4">Saikat Somir</h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4 text-center md:text-left">
              FREE Website Consultation
            </h2>
            <p className="flex items-center gap-2 text-lg mb-2">
              <Clock9Icon className="w-5 h-5" /> 20 min
            </p>
            <p className="flex items-center gap-2 text-md mb-4">
              <MdVideoCall className="w-6 h-6" /> Web conferencing details
              provided
            </p>
            <p className="text-base text-green-100 font-sans">
              Scheduled for:{' '}
              <span className="font-medium font-sans text-green-500">
                {date}
              </span>{' '}
              <span className="text-green-500 font-medium font-sans">at </span>
              <span className="font-medium font-sans text-green-500">
                {time}
              </span>
            </p>
          </div>

          {/* Right Panel (Form) */}
          <div className="w-full md:w-2/3 p-8 ">
            <h1 className="text-2xl font-semibold text-white mb-6 text-center md:text-left">
              Provide Your Details
            </h1>
            <form
              onSubmit={sendEmail}
              className="space-y-6 rounded-xl shadow-lg"
            >
              {/* Your Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 h-10 rounded-sm border border-white/30 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-medium">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 h-10 rounded-sm border border-white/30 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Business & Industry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white font-medium">
                    Business Name / Website URL *
                  </label>
                  <input
                    type="text"
                    value={formData.business}
                    onChange={(e) =>
                      setFormData({ ...formData, business: e.target.value })
                    }
                    className="w-full px-3 h-10 rounded-sm border border-white/30 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-medium">
                    Industry *
                  </label>
                  <input
                    type="text"
                    value={formData.industry}
                    onChange={(e) =>
                      setFormData({ ...formData, industry: e.target.value })
                    }
                    className="w-full px-3 h-10 rounded-sm border border-white/30 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                    placeholder="e.g. E-commerce, Tech, Real Estate"
                    required
                  />
                </div>
              </div>

              {/* Meeting Platform */}
              <div>
                <label className="block text-white mb-2 font-medium">
                  Select Meeting Platform
                </label>
                <div className="flex flex-wrap gap-4 text-white/90 items-center">
                  {['Zoom Video', 'Google Meet', 'WhatsApp'].map((p, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="platform"
                        value={p}
                        onChange={(e) => setPlatform(e.target.value)}
                        className="accent-indigo-500 size-5"
                        required
                      />
                      <span>{p}</span>

                      {p === 'WhatsApp' && platform === 'WhatsApp' && (
                        <input
                          type="number"
                          value={formData.whatsapp}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              whatsapp: e.target.value,
                            })
                          }
                          placeholder="+00 **** *****"
                          className="ml-3 px-3 h-9 rounded-sm border border-white/30 bg-transparent text-white placeholder-gray-400 focus:outline-none 
               [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          required
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <label className="block text-white mb-2 font-medium">
                  What website services are you looking for? *
                </label>
                <div className="flex flex-col gap-2 text-white/90">
                  {[
                    'Full Website Creation',
                    'Website Redesign',
                    'Website Customization',
                    'Fix Website Issues',
                    'Support & Maintenance',
                    'Other',
                  ].map((service, idx) => (
                    <label
                      key={idx}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="accent-indigo-500"
                      />{' '}
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              {/* Needs */}
              <div>
                <label className="block text-white font-medium">
                  Specify your needs here
                </label>
                <textarea
                  value={formData.needs}
                  onChange={(e) =>
                    setFormData({ ...formData, needs: e.target.value })
                  }
                  className="w-full p-2 mt-2 rounded-md border border-white/30 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  rows="4"
                  placeholder="Tell us more about your requirements..."
                ></textarea>
              </div>

              {/* Submit */}
              <div className="flex justify-end gap-5">
                <Link
                  to={'/book-a-meeting'}
                  className="w-32 bg-gray-600 text-center hover:bg-gray-800 transition-all duration-300 text-white px-6 py-3 rounded-md font-semibold shadow-lg"
                >
                  Back
                </Link>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-52 ${
                    isLoading
                      ? 'bg-indigo-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  } transition-all duration-300 text-white px-6 py-3 rounded-md font-semibold shadow-lg`}
                >
                  {isLoading ? 'Processing...' : 'Confirm Booking'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
