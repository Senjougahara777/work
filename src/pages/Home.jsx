import React from "react";
import Navbar from "../components/NAvbar";
import Dropdown from "../components/Dropdown";
import Carousel from "../components/Carousell";
import Vertical from "../components/vertical";
import Testimonials from "../components/testimonials";
import Footer from "../components/Footer.jsx";
import { Outlet, Link } from "react-router-dom";
const Home = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description:
        " lorem ipsum dolor leca tana djd d hdishd hddanne irbehv the chickken is crosing the cfksoa gsdlaskd hsbhbhsvahb ds.",
      image: "assets/hero/2.jpg",
    },
    {
      id: 2,
      title: "Card 2",
      description:
        " lorem ipsum dolor leca tana djd d hdishd hddanne irbehv the chickken is crosing the cfksoa gsdlaskd hsbhbhsvahb ds",
      image: "assets/other/2.jpg",
    },
    {
      id: 3,
      title: "Card 3",
      description:
        " lorem ipsum dolor leca tana djd d hdishd hddanne irbehv the chickken is crosing the cfksoa gsdlaskd hsbhbhsvahb ds",
      image: "assets/other/3.jpg",
    },
  ];

  return (
    <div className=" text-slate-700 ">
      <div>
        <div className="my-[700px] sm:my-[700px]">
          <Carousel />
        </div>

        <div className=" bg-slate-200 py-12 sm:py-24 mx-auto">
          <div className="flex justify-center items-center mb-8 relative">
            <span className="text-2xl sm:text-3xl font-bold relative z-10 text-white">
              About Us
            </span>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-[120px] sm:w-[150px] h-[40px] sm:h-[50px] bg-red-700 rounded-md transform opacity-90"></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center sm:justify-around px-4 sm:px-12 lg:px-48 space-y-8 sm:space-y-0">
            <p className="text-sm sm:text-l w-full sm:w-1/2 text-slate-600 leading-8">
              Recent statistics show that; "There is a distinct drop in a girl’s
              self-esteem and sense of self between the ages of 11 and 14. At
              11, 15% said they felt unhappy about their appearance. However, by
              the time they were 14, 29% said they weren’t happy" — (Article:
              "Girls Have Much Lower Self-Esteem During Their Teen Years,
              According To New Study" by Forbes). In a bid to find happiness,
              satisfaction and true love, most of these girls get involved in
              prostitution, drugs, Cultism, etc. Studies show that girls are
              more likely to grapple with profound
            </p>

            <p className="text-sm sm:text-l w-full sm:w-1/2 text-slate-600 leading-8">
              questions that shake their core than boys. 'Who am I?' they ask,
              searching for a sense of belonging. 'Why was I born?' they ponder,
              seeking purpose. 'Why do I look so different?' they lament,
              feeling like an outcast. And the painful query: 'Why don't they
              like me?' - a cry for connection. These questions are indeed a
              heavy burden to bear and can lead to a downward spiral of
              self-doubt. GIRLS REACH OUT WORLDWIDE (GROW) FOUNDATION seeks to
              provide a platform where girls will be given proper answers to
              these questions above.
            </p>
          </div>
        </div>

        <div className=" pt-36 z-10 bg-slate-200  relative ">
          {/* <div className=" justify-center space-x-2 flex">
            <div>
              <p className=" -mt-6 py-3 my-auto mx-auto bg-yellow-500">
                
              </p>
            </div>
            <div>
              <p className=" -mt-6 py-3 my-auto mx-auto bg-yellow-500">
                
              </p>
            </div>
          </div> */}

          <div className="flex flex-col sm:flex-row shadow-dark-3 bg-white h-auto">
            {/* Image Section */}
            <img
              className="w-full sm:w-3/5 h-64 sm:h-auto object-cover"
              src="assets/hero/1.jpg"
              alt="Our Mission"
            />

            {/* Text Section */}
            <div className="w-full sm:w-1/2 p-4 sm:p-8 items-center">
              {/* Our Mission */}
              <div className="flex mb-4 sm:mb-8 relative">
                <span className="text-2xl sm:text-3xl font-bold pl-4 sm:pl-14 pt-2 sm:pt-4 relative z-10 text-white">
                  Our Mission
                </span>
                <div className="absolute inset-0 flex pl-4 sm:pl-14">
                  <div className="w-[120px] sm:w-[150px] h-[40px] sm:h-[50px] bg-red-700 rounded-md transform opacity-90"></div>
                </div>
              </div>
              <p className="text-sm sm:text-l leading-6 sm:leading-8 font-normal mb-4 sm:mb-8 text-slate-600 pl-4 sm:pl-14">
                As an NGO, our mission is to ensure that younger girls are
                equipped with the right mindset and resources needed to create a
                better society for themselves by creating a safe zone for
                mentoring and grooming them.
              </p>

              {/* Our Vision */}
              <div className="flex mb-4 sm:mb-8 relative">
                <span className="text-2xl sm:text-3xl font-bold pl-4 sm:pl-14 pt-2 sm:pt-4 relative z-10 text-white">
                  Our Vision
                </span>
                <div className="absolute inset-0 flex pl-4 sm:pl-14">
                  <div className="w-[120px] sm:w-[150px] h-[40px] sm:h-[50px] bg-red-700 rounded-md transform opacity-90"></div>
                </div>
              </div>
              <p className="text-sm sm:text-l leading-6 sm:leading-8 font-normal mb-4 sm:mb-8 text-slate-600 pl-4 sm:pl-14">
                As an NGO, our vision is to achieve a sustainable future for the
                younger generation through our SDG 3, 4 & 5 targeted activities.
              </p>

              {/* Button */}
              <div className="relative group w-full pl-4 sm:pl-14">
                <Link to = '/About'>
                <button className="w-full sm:w-1/2 py-2 bg-yellow-500 rounded-md text-black text-base sm:text-lg font-semibold group-hover:text-white group-hover:bg-red-700 transition-all duration-300">
                  Learn More
                </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="py-12 sm:py-36">
  {/* Title Section */}
  <div className="flex justify-center items-center mb-8 relative">
    <span className="text-2xl sm:text-3xl font-bold relative z-10 text-white">
      Our Activities
    </span>
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="w-[120px] sm:w-[150px] h-[40px] sm:h-[50px] bg-red-700 hover:bg-transparent duration-300 animate-bounce rounded-md transform opacity-90"></div>
    </div>
  </div>

  {/* Cards Section */}
  <div className="px-6 sm:mx-24">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6 sm:py-12">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative group bg-yellow-700 rounded-lg overflow-hidden shadow-lg cursor-pointer"
        >
          {/* Card Image with Expansion Effect */}
          <div
            className="w-full h-48 sm:h-[600px] bg-cover bg-center transition-transform duration-1000 group-hover:scale-125"
            style={{
              backgroundImage: `url(${card.image})`,
            }}
          ></div>

          {/* Translucent Overlay */}
          <div className="absolute inset-0 bg-black/70 transition-opacity duration-300 group-hover:bg-black/50"></div>

          {/* Text Positioned Bottom-Left with Slide Effect */}
          <div className="absolute mx-4 bottom-[-50px] left-4 transform transition-all duration-700 group-hover:translate-y-[-150px] sm:group-hover:translate-y-[-300px] group-hover:opacity-100 opacity-0">
            <div>
              <h2 className="text-base sm:text-xl font-bold text-white">
                {card.title}
              </h2>
            </div>

            <div>
              <p className="text-xs sm:text-sm mt-1 text-white">
                {card.description}
              </p>
            </div>

            <div className="pt-4">
              <Link to = "/About">
              <p className="rounded-md py-2 px-4 bg-yellow-500 duration-200 hover:text-white hover:bg-red-700">
                Learn More
              </p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


          <div>
            <Testimonials />
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
