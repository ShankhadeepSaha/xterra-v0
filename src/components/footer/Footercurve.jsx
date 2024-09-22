import React, { useEffect, useRef, useState } from "react";
import { useScroll } from 'framer-motion';

const Footercurve = () => {
  const container = useRef();
  const paths = useRef([]);
  const [viewBox, setViewBox] = useState("0 0 250 90");
  const [curvePath, setCurvePath] = useState("m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68");
  const [textSize, setTextSize] = useState("6px");

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) { // mobile
        setViewBox("0 0 100 40");
        setCurvePath("m0,38c24.55,0,24.6-28,50.6-28,23.2,0,20.4,28,49.2,28");
        setTextSize("3px");
      } else if (width < 1024) { // tablet
        setViewBox("0 0 200 70");
        setCurvePath("m0,68c49.1,0,49.2-52,101.2-52,46.4,0,40.8,52,98.4,52");
        setTextSize("4px");
      } else { // desktop
        setViewBox("0 0 250 90");
        setCurvePath("m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68");
        setTextSize("6px");
      }
    };

    handleResize(); // Call once to set initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", e => {
      paths.current.forEach((path, i) => {
        path.setAttribute("startOffset", -40 + (i * 40) + (e * 40) + "%");
      });
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={container} className="w-full overflow-hidden">
      <svg className="w-full h-auto mb-8 sm:mb-12 md:mb-16" viewBox={viewBox}>
        <path fill="none" id="curve" d={curvePath} />
        <text className={`font-almirego uppercase`} style={{ fill: "black", fontSize: textSize }}>
          {[...Array(3)].map((_, i) => (
            <textPath key={i} ref={ref => paths.current[i] = ref} startOffset={i * 40 + "%"} href="#curve">
              xterra world of robots
            </textPath>
          ))}
        </text>
      </svg>
    </div>
  );
};

export default Footercurve;