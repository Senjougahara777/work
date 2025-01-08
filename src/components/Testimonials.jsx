import React, { useState, useEffect } from "react";

const testimonials = [
  "The conference was really nice one. It has really changed and impacted a lot in me. I have learnt the corrrect way to fix my pad and self hygiene - Joyce",
  "The conference changed a whole lot of things in my life e.g the way i feel anytime a boy is around me.I promise to change and behave as an authentic girl. I really enjoyed the conference because now i know - Anonymous",
  "Attending the international day of the Girl child was a great opportunity that i was being granted and i learnt several things and i promise to put everything I have practised into consideration and add it to my daily life. - Anonymous",
  "Good afternoon Ma, Before the conference i thought i was not good but after the conference i felt good about what God created in me. - Anonymous",
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
    className="relative w-full h-[600px] sm:h-[800px] max-h-[100vh] bg-cover py-24 sm:py-48 bg-fixed"
    style={{ backgroundImage: `url('assets/other/5.jpg')` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col sm:flex-row">
      {/* Heading and Subheading */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 text-white text-center sm:text-left">
        <span className="text-xl sm:text-3xl font-bold">Our Testimonials</span>
        <p className="text-sm sm:text-lg font-medium text-gray-300">
          What our clients are saying
        </p>
      </div>
      {/* Testimonial Message */}
      <div className="bg-white bg-opacity-80 text-left p-6 sm:p-24 rounded-lg shadow-lg mx-4 sm:ml-8 mt-20 sm:mt-0 self-center max-w-md sm:max-w-2xl">
        <blockquote className="text-base sm:text-lg font-semibold text-gray-800">
          {testimonials[currentTestimonial]}
        </blockquote>
        {/* Footnote */}
        <div className="mt-4 sm:mt-8 flex items-center">
          {/* Profile Picture */}
          <img
            src="assets/profile.jpg"
            alt="Profile Picture"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4 shadow-md"
          />
          {/* Name and Occupation */}
          <div>
            <p className="text-gray-900 font-bold text-sm sm:text-base">Anonymous</p>
            <p className="text-gray-600 text-xs sm:text-sm">Undisclosed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  );
};

export default Testimonials;
