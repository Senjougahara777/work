import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card.",
      image: "assets/about/1.jpg",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card.",
      image: "assets/about/2.jpg",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card.",
      image: "assets/about/3.jpg",
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the fourth card.",
      image: "assets/about/4.jpg",
    },
    {
      id: 5,
      title: "Card 5",
      description: "This is the fifth card.",
      image: "assets/about/5.jpg",
    },
    {
      id: 6,
      title: "Card 6",
      description: "This is the sixth card.",
      image: "assets/about/6.jpg",
    },
    {
      id: 7,
      title: "Card 7",
      description: "This is the seventh card.",
      image: "assets/about/7.jpg",
    },
    {
      id: 8,
      title: "Card 8",
      description: "This is the eighth card.",
      image: "assets/hero/1.jpg",
    },
    {
      id: 9,
      title: "Card 9",
      description: "This is the ninth card.",
      image: "assets/hero/2.jpg",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const downloadImage = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop();
    link.click();
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="relative group bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => openModal(index)}
          >
            {/* Card Image or Background */}
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url(${card.image})`,
              }}
            ></div>

            {/* Translucent Film */}
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0"></div>

            {/* Hover Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p className="mt-2 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative ">
            {/* Carousel Controls */}
            <div className="relative">
              <img
                src={cards[currentIndex].image}
                alt={cards[currentIndex].title}
                className="w-full h-[500px] object-cover"
              />
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              >
                <BsChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              >
                <BsChevronRight size={24} />
              </button>
            </div>

            {/* Modal Content
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold">{cards[currentIndex].title}</h2>
              <p className="mt-2 text-gray-600">{cards[currentIndex].description}</p>
            </div> */}

            {/* Download Button */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => downloadImage(cards[currentIndex].image)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <FaDownload />
                
              </button>
            </div>
          </div>

          {/* Close Modal */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-red-500 text-white p-1 px-3 rounded-3xl "
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default Cards;



 

