import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.addEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2  });

    gsap.to("#cta", { opacity: 1, y: -50, delay: 1.5 });
  }, []);

  return (
    <section className="h-full w-full nav-height bg-black mt-11">
      <div className="  w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>  

        <div className=" md:w-[900px] w-[300px]">
          <video
            className="pointer-events-none "
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>

        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20 mt-11">
          <a href="#hightlights" className="btn">
            {" "}
            Buy
          </a>
          <p className="font-normal text-xl ">From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
