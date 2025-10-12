import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ScrollToTop } from '../ScrollToTop';

export const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Outlet />
    </div>
  );
};
