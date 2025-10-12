import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import componentsMap from './componentsMap';
// import { Nextproject } from "./pages/Nextproject";

export const CaseStudy = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  // const sentinelRef = useRef(null); // <-- sentinel to track scroll progress

  useEffect(() => {
    fetch(`/data/${id}.json`)
      .then((res) => res.json())
      .then(setData);
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="mx-auto pb-[45vh] md:pb-[100vh]">
      {data.components.map((section, idx) => {
        const Component = componentsMap[section.type];
        if (!Component) {
          return <p key={idx}></p>;
        }
        return <Component key={idx} {...section.props} />;
      })}

      {/* sentinel sits in the normal flow where the Nextproject "section" should be */}
      {/* <div className="relative -z-10 ">
        <div
          ref={sentinelRef}
          className="h-[100vh] w-full pointer-events-none cursor-pointer"
          aria-hidden="true"
        />
        <Nextproject anchorRef={sentinelRef} />
      </div> */}
    </div>
  );
};
