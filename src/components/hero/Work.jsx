import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

const Work = () => {
  const [images, setImages] = useState([
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "50%", left: "50%", isActive: false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "56%", left: "44%", isActive: false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "45%", left: "56%", isActive: false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "60%", left: "53%", isActive: false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "43%", left: "40%", isActive: false },
    { url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top: "65%", left: "55%", isActive: false }
  ]);
  const workRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    scroll.on("scroll", (args) => {
      const scrollPosition = args.scroll.y;
      updateImagesVisibility(scrollPosition);
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  const updateImagesVisibility = (scrollPosition) => {
    const workHeight = workRef.current ? workRef.current.offsetHeight : 0; // Get the height of the 'Work' component
    const thresholdIncrement = workHeight / (images.length + 2); // Decrease the division to make images appear earlier

    setImages((prevImages) =>
      prevImages.map((item, index) => {
        const threshold = (index + 1) * thresholdIncrement; // Adjust threshold based on image index
        const isActive = scrollPosition >= threshold && scrollPosition <= workHeight; 
        // Ensure image is active within the 'Work' section height
        return { ...item, isActive };
      })
    );
  };

  return (
    <div className="w-full mt-10" ref={workRef}>
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-semibold select-none">work</h1>
        <div className="absolute top-0 w-full h-full">
          {images.map((elem, index) =>
            elem.isActive ? (
              <motion.img
                key={index}
                className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                src={elem.url}
                style={{ top: elem.top, left: elem.left }}
                alt=""
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
