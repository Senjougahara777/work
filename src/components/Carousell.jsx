import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion.js";
import { Carousel } from "flowbite";
import { useEffect } from "react";
import { Link } from "react-router";

const Carousell = () => {
  const slides = [
    {
      url: "assets/hero/1.jpg",
      text: " WELCOME TO GIRLS REACH OUT WORLDWIDE",
    },
    {
      url: "assets/hero/6.jpg",
      text: "Explore the Beauty",
    },
    {
      url: "assets/hero/3.jpg",
      text: "Discover New Horizons",
    },
    {
      url: "assets/hero/4.jpg",
      text: "Unleash Your Potential",
    },
    {
      url: "assets/hero/5.jpg",
      text: "Dream Big, Act Bigger",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  return (
    <div className="h-[800px] w-full m-auto fixed top-0 left-0 z-[-1] group">
      {/* Background Image  */}
       <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-300"
      ></div>

      {/* Translucent Film */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold tracking-widest uppercase">
          {slides[currentIndex].text}
        </h1>
      </div>

      {/* Left Aligned Box */}
      <div className="absolute z-20 top-32 sm:top-24 md:top-32 left-5 sm:left-10 bg-slate-500 bg-opacity-75 text-slate-700 p-4 sm:p-6 rounded-lg shadow-lg max-w-xs sm:max-w-sm">
         <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
          Header Title
        </h2>
        <p className="text-sm sm:text-base mb-2 sm:mb-4">
          This is some descriptive text that provides information about the
          content. It can be a few sentences long.
        </p> 
        <Link to="/About">
          <div
            onClick={() => console.log("Button clicked")}
            className="bg-red-700 hover:bg-yellow-500 duration-300 hover:text-white text-black font-bold py-2 px-3 sm:px-4 rounded"
          >
            Learn More
          </div>
        </Link>
      </div>

      {/* Left Arrow
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] left-2 sm:left-5 text-xl sm:text-2xl rounded-full p-1 sm:p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={20} sm:size={30} />
      </div>

      {/* Right Arrow
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-2 sm:right-5 text-xl sm:text-2xl rounded-full p-1 sm:p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={20} sm:size={30} />
      </div> */}
    </div>
  );
};
export default Carousell;
