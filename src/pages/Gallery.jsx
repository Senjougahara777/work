import React from "react";
import Cards from "../components/Cards";
import Footer from '../components/Footer.jsx'
import { Outlet, Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="pt-20">
      <div>
        <div>
        <div className="mb-60">
            <div className="relative">
              {/* Breadcrumb Section */}
              <div className="py-4 px-4 md:px-12 rounded-t-md flex space-x-2 bg-gray-100 absolute bottom-0 right-4 md:right-60">
                <Link to = "/">
                <p className="text-blue-800">Home /</p>
                </Link>

                <Link to = "/Gallery">
                <p className="text-red-800">Gallery</p>
                </Link>
              </div>
            </div>

            {/* Hero Section */}
            <div className="h-[250px] w-full m-auto fixed top-0 left-0 z-[-1] group">
              {/* Overlay */}
              <div className="fixed z-0 h-[500px] w-full m-auto top-0 left-0 bg-black bg-opacity-75"></div>

              {/* Text Content */}
              <div className="absolute top-3/4 left-4 md:left-8 transform -translate-y-1/2 z-10 text-center md:text-left">
                <span className="text-2xl md:text-4xl font-extrabold text-white uppercase tracking-widest">
                  Gallery
                </span>
                <p className="text-base md:text-lg text-white mt-2">
                  A supporting subtitle or description.
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

          <div className=" bg-slate-200">
            <div className=" z-10 mt-[300px] pb-[100px]">
              <Cards />
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

export default Gallery;
