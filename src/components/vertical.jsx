import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const timelineData = [
  { title: "Step 1", description: "This is the first step.", date: "2021" },
  { title: "Step 2", description: "This is the second step.", date: "2022" },
  { title: "Step 3", description: "This is the third step.", date: "2023" },
  { title: "Step 4", description: "This is the fourth step.", date: "2024" },
];

const VerticalTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll(".timeline-item");
      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight / 1.5 && rect.bottom >= 0) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="w-1 bg-gray-300 absolute top-0 bottom-0 left-[50%] -translate-x-1/2"></div>

      {timelineData.map((item, index) => (
        <div
          key={index}
          className="timeline-item flex items-center w-full my-8 relative"
        >
          {/* Left Section */}
          <div
            className={`w-1/2 flex justify-end pr-8 ${
              index % 2 === 0 ? "order-1" : "order-2"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: activeIndex >= index ? 1 : 0.3,
                x: activeIndex >= index ? 0 : -50,
              }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-md p-4 rounded-lg w-64"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <span className="text-gray-400 text-sm">{item.date}</span>
            </motion.div>
          </div>

          {/* Center Circle */}
          <div className="w-10 h-10 rounded-full bg-blue-500 absolute left-[50%] -translate-x-1/2 z-10 flex items-center justify-center">
            <span className="text-white font-bold">{index + 1}</span>
          </div>

          {/* Right Section */}
          <div
            className={`w-1/2 pl-8 ${
              index % 2 === 0 ? "order-2" : "order-1"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: activeIndex >= index ? 1 : 0.3,
                x: activeIndex >= index ? 0 : 50,
              }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-md p-4 rounded-lg w-64"
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <span className="text-gray-400 text-sm">{item.date}</span>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
