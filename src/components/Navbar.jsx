import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { styles } from "../styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Menu, X } from "react-feather"; // Optional: Use any icon library


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className=" h-10 flex flex-row-reverse bg-yellow-500">
        <div className="flex justify-between rounded-md  sm:mr-32 flex-none w-full sm:w-1/4 lg:w-1/6 h-full bg-yellow-800 bg-opacity-70">
          <div className="mx-auto pt-2">
            <InstagramIcon sx={{ color: "white", fontSize: "16px" }} />
          </div>

          <div className="mx-auto pt-2">
            <LinkedInIcon sx={{ color: "white", fontSize: "16px" }} />
          </div>

          <div className="mx-auto pt-2">
            <FacebookIcon sx={{ color: "white", fontSize: "16px" }} />
          </div>

          <div className="mx-auto pt-2">
            <WhatsAppIcon sx={{ color: "white", fontSize: "16px" }} />
          </div>
        </div>
      </div>

      <div
        className={`${
          styles.paddingX
        } fixed shadow-2xl bg-white w-full duration-300 transition-color ${
          scrolled ? " -mt-10 py-2 text-white  " : " bg-white text-slate-600"
        }`}
      >
        <div>
          <div className=" sm:mx-24 lg:mx-56 flex items-center h-20">
            <div className=" w-20">
              <img src="assets/logo.png" />
            </div>

            {/* Hamburger Menu (Visible on Mobile) */}
          <div className="sm:hidden ml-auto">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

            <div className=" hidden sm:flex ml-10 sm:ml-10 w-2/5 space-x-6 sm:space-x-12 ">
              <Link to="">
                <div className="group my-4 hover:ease-in-out hover:duration-300 hover:animate-pulse  ">
                  <div className=" w-auto ">
                    <p className="text-slate-400  text-lg">Home</p>
                    <span className="py-auto absolute w-0 h-0.5 rounded-md bg-black group-hover:w-10 transition-all duration-500">
                      {" "}
                    </span>
                  </div>
                </div>
              </Link>

              <Link to="/About">
                <div className="group my-4 hover:ease-in-out hover:duration-300 hover:animate-pulse  ">
                  <p className="text-slate-400 text-lg">About</p>
                  <span className="py-auto absolute w-0 h-0.5 rounded-md bg-black group-hover:w-10 transition-all duration-500">
                    {" "}
                  </span>
                </div>
              </Link>

              <Link to="/Gallery">
                <div className="group my-4 hover:ease-in-out hover:duration-300 hover:animate-pulse  ">
                  <p className="text-slate-400 text-lg">Gallery</p>
                  <span className="py-auto absolute w-0 h-0.5 rounded-md bg-black group-hover:w-10 transition-all duration-500">
                    {" "}
                  </span>
                </div>
              </Link>

              <Link to="/Testimonials">
                <div className="group my-4 hover:ease-in-out hover:duration-300 hover:animate-pulse  ">
                  <p className="text-slate-400 text-lg">Testimonials</p>
                  <span className="py-auto absolute w-0 h-0.5 rounded-md bg-black group-hover:w-20 transition-all duration-500">
                    {" "}
                  </span>
                </div>
              </Link>
            </div>

            <a href="https://forms.gle/8cvNoSekzLM5xehi8" className="ml-auto">
              <div className="hidden sm:block bg-red-700 p-2 sm:p-4 sm:px-12 hover:bg-yellow-500 hover:text-black text-xs sm:text-base font-bold rounded-md transition-all duration-300 animate-bounce border-2 sm:border-4 border-red-400">
                <p>Volunteer</p>
              </div>
            </a>
          </div>

          {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden bg-white shadow-md">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <Link to="" className="text-slate-600 text-base" >
                Home
              </Link>
              <Link to="/About" className="text-slate-600 text-base" >
                About
              </Link>
              <Link to="/Gallery" className="text-slate-600 text-base" >
                Gallery
              </Link>
              <Link to="/Testimonials" className="text-slate-600 text-base" >
                Testimonials
              </Link>
               <Link to="/About" >
     <div className="bg-red-700 z-10 hover:bg-yellow-500 hover:text-white text-black font-bold py-2 px-3 sm:px-4 rounded" >
     Learn More
     </div>
      
    </Link>

            </nav>
          </div>
        )}


        </div>
        {/* partner with us special button*/}
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
