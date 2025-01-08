import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";
import Footer from "../components/Footer.jsx";
import { Outlet, Link } from "react-router-dom";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="pt-20">
      <div>
        <div>
          <div className="mb-60">
            <div className="relative">
              {/* Breadcrumb Section */}
              <div className="py-4 px-4 md:px-12 rounded-t-md flex space-x-2 bg-gray-100 absolute bottom-0 right-4 md:right-60">
                <Link to = "/">
                <button className="text-blue-800">Home /</button>
                </Link>

                <Link to = "/About">
                <button className="text-red-800">About</button>
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
                  ABOUT US
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
            <div className="flex items-center justify-center py-16 bg-gray-100">
              <div className="max-w-7xl mx-auto flex flex-wrap items-center">
                {/* Image Section */}
                <div className="w-full md:w-1/2 p-4">
                  <div className="relative group">
                    <img
                      src="assets/other/6.jpg"
                      alt="Descriptive Alt Text"
                      className="rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 -my-2 -mx-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 p-4">
                  <div className="flex  mb-8 relative">
                    <span className=" text-3xl  font-bold relative z-10 text-white">
                      Why We Have Continued
                    </span>
                    <div className="absolute inset-0 flex ">
                      <div className="w-[230px] h-[50px] bg-red-700 rounded-md transform  opacity-90"></div>
                    </div>
                  </div>
                  <p
                    className={`text-lg text-gray-700 ${
                      isExpanded ? "" : "line-clamp-4"
                    }`}
                  >
                    Recent statistics shows that; "There is a distinct drop in a
                    girl’s self-esteem and sense of self between the ages of 11
                    and 14. At 11, 15% said they felt unhappy about their
                    appearance. However, by the time they were 14, 29% said they
                    weren’t happy" — (Article: "Girls Have Much Lower
                    Self-Esteem During Their Teen Years, According To New Study"
                    by Forbes). In a bid to find happiness, satisfaction and
                    true love, most of these girls get involved in prostitution,
                    drugs, Cultism, etc. Studies shows that girls are more
                    likely to grapple with profound questions that shake their
                    core than boys. 'Who am I?' they ask, searching for a sense
                    of belonging. 'Why was I born?' they ponder, seeking
                    purpose. 'Why do I look so different?' they lament, feeling
                    like an outcast. And the painful query: 'Why don't they like
                    me?' - a cry for connection. These questions are indeed a
                    heavy burden to bear and can lead to a downward spiral of
                    self-doubt. GIRLS REACH OUT WORLDWIDE (GROW) FOUNDATION
                    seeks to provide a platform where girls will be given proper
                    answers to these questions above.
                  </p>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-4 text-yellow-500 hover:text-red-500 flex items-center"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                    <div
                      className={`ml-2 text-3xl transform transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      ⬇
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center py-16 bg-slate-200">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center">
                  {/* Text Section */}
                  <div className="w-full md:w-1/2 p-4">
                    <div className="flex  mb-8 relative">
                      <span className=" text-3xl  font-bold relative z-10 text-white">
                        What We Do
                      </span>
                      <div className="absolute inset-0 flex ">
                        <div className="w-[150px] h-[50px] bg-red-700 rounded-md transform  opacity-90"></div>
                      </div>
                    </div>
                    <p
                      className={`text-lg text-gray-700 ${
                        isExpanded ? "" : "line-clamp-4"
                      }`}
                    >
                      <p>
                        <p>Girl child mentorship and empowerment: </p>
                        Empowering the girl child is a vital step toward
                        creating a fair and equitable society. It means
                        providing girls with the tools, resources, and
                        opportunities to realize their full potential. Education
                        is at the heart of empowerment, as it not only opens
                        doors to knowledge but also builds confidence and
                        independence. When girls are educated, they become
                        empowered to make informed decisions, challenge societal
                        norms, and contribute meaningfully to their communities.
                        Empowerment also involves ensuring girls have access to
                        healthcare, equal rights, and protection from harmful
                        practices. By teaching young girls about leadership and
                        encouraging them to dream big, we foster a generation of
                        women who can lead, innovate, and inspire. A society
                        that invests in its girls invests in its future, as
                        empowered girls grow into empowered women who uplift
                        families, communities, and nations.
                      </p>
                    </p>
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-4 text-yellow-500 hover:text-red-500 duration-200 flex items-center"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                      <div
                        className={`ml-2 text-3xl transform transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        ⬇
                      </div>
                    </button>
                  </div>

                  {/* Image Section */}
                  <div className="w-full md:w-1/2 p-4">
                    <div className="relative group">
                      <img
                        src="assets/other/6.jpg"
                        alt="Descriptive Alt Text"
                        className="rounded-lg shadow-lg transform transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 -my-2 -mx-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex px-4 md:px-[45vh] gap-10 bg-white">
              <div className=" align-left md:align-middle md:items-center my-auto ">
                <div className="py-6">
                  <div className="flex mb-8 relative">
                    <span className=" text-3xl  font-bold relative z-10 text-white">
                      Our Mission
                    </span>
                    <div className="absolute inset-0 flex">
                      <div className="w-[150px] h-[50px] bg-red-700 rounded-md transform  opacity-90"></div>
                    </div>
                  </div>

                  <p className=" text-wrap">
                    As an NGO, our mission is to ensure that younger girls are
                    equipped with the right mindset and resources needed to
                    create a better society for themselves by creating a safe
                    zone for mentoring and grooming them.
                  </p>
                </div>

                <div className=" py-6">
                  <div className="flex mb-8 relative">
                    <span className=" text-3xl  font-bold relative z-10 text-white">
                      Our Vision
                    </span>
                    <div className="absolute inset-0 flex">
                      <div className="w-[150px] h-[50px] bg-red-700 rounded-md transform  opacity-90"></div>
                    </div>
                  </div>
                  <p>
                    as an NGO is to achieve a sustainable future for the younger
                    generation through our SDG 3, 4 & 5 targeted activities.
                  </p>
                </div>

                <div className=" py-6">
                  <div className="flex mb-8 relative">
                    <span className=" text-3xl  font-bold relative z-10 text-white">
                      Call To Action
                    </span>
                    <div className="absolute inset-0 flex">
                      <div className="w-[150px] h-[50px] bg-red-700 rounded-md transform  opacity-90"></div>
                    </div>
                  </div>
                  <p>
                    Let us commit to breaking barriers and creating an
                    environment where every girl feels valued, respected, and
                    capable of achieving greatness. Empowering a girl child is
                    not just a choice; it’s a responsibility we all share.
                  </p>
                </div>
              </div>

              <div className=" my-20 hidden md:block lg:block ">
                <img
                  className=" hover:scale-110 animate-pulse duration-300 rounded-lg max-h-[1000px] "
                  src="assets/hero/2.jpg"
                />
              </div>
            </div>

            {/* <div>
              <div>
                <p>
                  <span></span>
                </p>
              </div>
            </div> */}

            <div className="md:flex justify-between h-[200px] md:h-[200px] ">
              <div className=" mx-auto my-auto space-x-7">
                <span className=" text-4xl py-6 mx-auto">
                  Whom we do it for
                </span>
                <p>Teenage girls across the world</p>
              </div>

              <div className=" mx-auto my-auto space-x-7">
                <span className=" text-4xl  py-6 ml-auto">
                  The value we hope to bring
                </span>
                <p>
                  We intend to help every girl succesfully navigate teenagehood
                  and become the woman of her dreams{" "}
                </p>
              </div>
            </div>

            <div>
              <Footer />
            </div>

            {/* have both of the above parent divs be side by side  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
