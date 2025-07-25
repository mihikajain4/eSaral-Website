"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const tabs = [
  "All Courses",
  "IIT JEE",
  "NEET",
  "10th Boards",
  "12th Boards",
] as const;
type TabKey = (typeof tabs)[number]; 


const slidesByTab: Record<TabKey, { desktop: string; mobile: string }[]> = {
  "All Courses": [
    {
      desktop: "/carousel/selection-banner-desktop.png",
      mobile: "/carousel/selection-banner-mobile.png",
    },
    {
      desktop: "/carousel/selection-banner-desktop.png",
      mobile: "/carousel/selection-banner-mobile.png",
    },
  ],
  "IIT JEE": [
    {
      desktop: "/carousel/jee-banner-desktop.png",
      mobile: "/carousel/jee-banner-mobile.png",
    },
    {
      desktop: "/carousel/jee-topper-desktop.png",
      mobile: "/carousel/jee-topper-mobile.png",
    },
  ],
  NEET: [
    {
      desktop: "/carousel/neet-banner-desktop.png",
      mobile: "/carousel/neet-banner-mobile.png",
    },
    {
      desktop: "/carousel/neet-topper-desktop.png",
      mobile: "/carousel/neet-topper-mobile.png",
    },
  ],
  "10th Boards": [
    {
      desktop: "/carousel/10th-board-banner-desktop.png",
      mobile: "/carousel/10th-board-banner-mobile.png",
    },
    {
      desktop: "/carousel/10th-topper-desktop.png",
      mobile: "/carousel/10th-topper-mobile.png",
    },
  ],
  "12th Boards": [
    {
      desktop: "/carousel/12th-board-banner-desktop.png",
      mobile: "/carousel/12th-board-banner-mobile.png",
    },
    {
      desktop: "/carousel/12th-topper-desktop.png",
      mobile: "/carousel/12th-topper-mobile.png",
    },
  ],
};

const SelectionShowcase = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("All Courses");

  const currentSlides = slidesByTab[activeTab];

  return (
    <section className="bg-[#dbeafe] py-10 px-4 md:px-16">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Thousands of Selections <br />
          <span className="text-blue-800">Every Year, Every Category</span>
        </h2>
        <p className="mt-4 text-md md:text-lg text-gray-700">
          Join the ranks of top performers in JEE, NEET, and Board exams with
          eSaral’s proven guidance and results.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full border text-sm md:text-base transition font-medium ${
              activeTab === tab
                ? "bg-blue-800 text-white"
                : "bg-white text-gray-800 hover:bg-blue-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-md">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={16}
        >
          {currentSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide.desktop}
                alt={`Slide ${index + 1} desktop`}
                width={1600}
                height={900}
                className="hidden md:block w-full h-auto object-cover"
              />
              <Image
                src={slide.mobile}
                alt={`Slide ${index + 1} mobile`}
                width={800}
                height={800}
                className="block md:hidden w-full h-auto object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SelectionShowcase;
