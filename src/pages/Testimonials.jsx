import React from "react";
import Cards from "../components/Cards";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import { Link } from "react-router";

const Testimonials = () => {
  const images = [
    "testim/1.png",
    "testim/2.png",
    "testim/3.png",
    "testim/4.png",
    "testim/5.png",
    "testim/6.png",
    "testim/7.png",
    "testim/8.png",
    "testim/9.png",
    "testim/10.png",
    "testim/11.png",
    "testim/12.png",
  ];
  return (
    <div className="pt-20">
      <div>
        <div>
        <div className="mb-60">
            <div className="relative">
              {/* Breadcrumb Section */}
              <div className="py-4 px-4 md:px-12 rounded-t-md flex space-x-2 bg-gray-100 absolute bottom-0 right-4 md:right-60">
                <Link to = '/' className="text-blue-800">Home /</Link>
                <Link to = '/Testimonials' className="text-red-800">Testimonials</Link>
              </div>
            </div>

            {/* Hero Section */}
            <div className="h-[250px] w-full m-auto fixed top-0 left-0 z-[-1] group">
              {/* Overlay */}
              <div className="fixed z-0 h-[500px] w-full m-auto top-0 left-0 bg-black bg-opacity-75"></div>

              {/* Text Content */}
              <div className="absolute top-3/4 left-4 md:left-8 transform -translate-y-1/2 z-10 text-center md:text-left">
                <span className="text-2xl md:text-4xl font-extrabold text-white uppercase tracking-widest">
                  Testimonials
                </span>
                <p className="text-base md:text-lg text-white mt-2">
                  What our Girls are Saying
                </p>
              </div>

              {/* Background Image */}
              <img
                src="assets/about/1.jpg"
                className="w-full h-[500px] object-cover"
                alt="About Us"
              />
            </div>
          </div>

          <div className=" bg-slate-200 h-full">
            <div className=" mt-[300px] h-full">
              <Slider />
            </div>
            {/*  */}
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
