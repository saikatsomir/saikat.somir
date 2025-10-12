import { createBrowserRouter } from 'react-router-dom';
import { Main } from '../Layout/Main';
import { CaseStudy } from '../Components/CaseStudy/CaseStudy';
import { Booking } from '../Components/Pages/Booking/Booking';
import { BookingTime } from '../Components/Pages/Booking/BookingTime';
import { BookingSuccess } from '../Components/Pages/Booking/BookingSuccess';
import { About } from '../Components/About/About';
import { HomePage } from '../Components/Pages/Home/HomePage/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/case-study/:id', // 👈 dynamic route
        element: <CaseStudy />,
      },
      {
        path: '/about-somi', // 👈 dynamic route
        element: <About />,
      },
      {
        path: '/book-a-meeting', // 👈 dynamic route
        element: <Booking />,
      },
      {
        path: '/booking-call/free', // 👈 dynamic route
        element: <BookingTime />,
      },
      {
        path: '/booking-success',
        element: <BookingSuccess />,
      },
    ],
  },
]);
