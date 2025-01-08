import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
    <div className="container mx-auto px-4 flex flex-col justify-between h-full">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <img
            className="mb-4 mx-auto md:mx-0 h-20 w-auto"
            src="assets/logo.png"
            alt="Logo"
          />
          <p className="text-gray-400 text-base md:text-lg">
            Girls Reach Out Worldwide (GROW)
          </p>
        </div>
  
        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-center md:text-left">Company</h3>
            <ul className="text-gray-400 space-y-2">
              
              <Link to ="/About"> 
              <li>
                <a href="#" className="hover:text-white">About Us</a>
              </li>
              </Link>

              <Link to = "/Gallery">
              <li>
                <a href="#" className="hover:text-white">Gallery</a>
              </li>
              </Link>

              <Link to ="/Testimonials">
              <li>
                <a href="#" className="hover:text-white">Testimonials</a>
              </li>
              </Link>
            </ul>
          </div>
  
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-center md:text-left">Resources</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-white">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
  
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-center md:text-left">Follow Us</h3>
            <ul className="flex justify-center md:justify-start space-x-6">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 transition-transform duration-300 transform hover:scale-125 hover:rotate-6"
                >
                  <FaFacebook size={32} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-sky-400 transition-transform duration-300 transform hover:scale-125 hover:rotate-6"
                >
                  <FaTwitter size={32} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-500 transition-transform duration-300 transform hover:scale-125 hover:rotate-6"
                >
                  <FaInstagram size={32} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
