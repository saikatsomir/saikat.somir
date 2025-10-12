import { useRef } from 'react';
// import MacParent from '../../MacStudy/MacContainer/MacParent';
// import { Contact } from '../../Contac/Contac';
// import { AcKnow } from '../AcKnow/Acknow';
// import { Banner } from '../Banner/Banner';
// import { Feature } from '../Feature/Feature';
import { Pricing } from '../Pricing/Pricing';
import { Testimonial } from '../Testimonial/Testimonial';
import { WhoAmI } from '../WhoAmI/WhoAmI';
import Portfolio from '../../Portfolio/Portfolio';
import { Responsive } from '../Responsive/Responsive';
import { Slogan } from '../Slogan/Slogan';
import { SmBlueprint } from '../Blueprint/SmBlueprint';
import { Worldwide } from '../Worldwide/Worldwide';
import { AltBanner } from '../Banner/AltBanner';
import { Fotter } from '../Fotter/Fotter';
// import { BottomNav } from '../../../Navbar/BottomNav';
import TopNav from '../../../Navbar/TopNav';
import { Blueprint } from '../BluePrint/Blueprint';

export const HomePage = () => {
  const aboutRef = useRef(null);
  const featureRef = useRef(null);
  const projectsRef = useRef(null);
  const pricingRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  const caseStudyRef = useRef(null);
  const blueprint = useRef(null);

  const scrollToRef = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-50 bg-purpleBg pb-[900px] md:pb-[470px] select-none">
      <div className="z-50">
        <TopNav
          onScrollToSection={scrollToRef}
          refs={{
            work: projectsRef,
            plan: pricingRef,
            success: testimonialsRef,
          }}
        />
      </div>

      <div className="z-10">
        <AltBanner
          scrollRefs={{
            blueprint: blueprint,
            altExplore: aboutRef,
          }}
        />
      </div>

      <div ref={aboutRef} className="relative z-10 ">
        <WhoAmI />
      </div>

      <div ref={blueprint} className="relative z-10">
        <div className="hidden md:block">
          <Blueprint scrollRefs={{ projectsRef: projectsRef }} />
        </div>
        <div className="block md:hidden">
          <SmBlueprint scrollRefs={{ projectsRef: projectsRef }} />
        </div>
      </div>

      <div ref={projectsRef} className="relative z-10">
        <Portfolio />
      </div>

      <div ref={pricingRef} className="relative z-10">
        <Pricing />
      </div>

      <div className="relative z-10">
        <Responsive />
      </div>

      <div className="relative z-10">
        <Worldwide />
      </div>

      <div ref={testimonialsRef} className="relative z-10">
        <Testimonial />
      </div>

      <div className="relative z-10">
        <Slogan />
      </div>

      <div
        ref={contactRef}
        className="fixed bottom-0 left-0 w-full h-[932px] md:h-[550px] -z-20 md:block"
      >
        <Fotter
          scrollRefs={{
            portfolio: projectsRef,
            success: testimonialsRef,
            plan: pricingRef,
          }}
        />
      </div>
    </div>
  );
};
