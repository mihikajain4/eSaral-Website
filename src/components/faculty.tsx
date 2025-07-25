"use client";

import React from "react";
import Image from "next/image";

const facultyData = [
  {
    name: "NK Gupta Sir",
    subtitle: "IIT KANPUR Alumnus\nEx-VP & Academic Head, Allen Kota",
    image: "/faculty1.png",
    bg: "bg-[#0385FE]",
    icons: ["➕", "➖", "✖️"],
  },
  {
    name: "NK Gupta Sir",
    subtitle: "IIT KANPUR Alumnus\nEx-VP & Academic Head, Allen Kota",
    image: "/faculty2.png",
    bg: "bg-[#FFB300]",
    icons: ["🧲", "⚡"],
  },
  {
    name: "NK Gupta Sir",
    subtitle: "IIT KANPUR Alumnus\nEx-VP & Academic Head, Allen Kota",
    image: "/faculty3.png",
    bg: "bg-[#864EFF]",
    icons: ["🧪"],
  },
  
];

export default function FacultySection() {
  return (
    <div className="py-12 px-4 sm:px-8">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800">
          Learn from <span className="text-blue-800">Top IITians & Doctors Faculty</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base sm:text-lg">
          Our team of passionate educators includes alumni from IITs and top medical colleges — bringing real expertise to your prep for JEE, NEET & Boards.
        </p>
      </div>

      {/* Scrollable Centered Cards */}
      <div className="overflow-x-auto">
        <div className="flex justify-center">
          <div className="flex gap-6 w-max mx-auto px-2">
            {facultyData.map((faculty, index) => (
              <div
                key={index}
                className={`min-w-[280px] max-w-[300px] sm:min-w-[300px] rounded-2xl shadow-lg ${faculty.bg} text-white overflow-hidden`}
              >
                <div className="p-6 pb-0 relative h-52">
                  <div className="absolute right-4 top-4 text-3xl">{faculty.icons.join(" ")}</div>
                  <Image
                    src={faculty.image}
                    alt={faculty.name}
                    width={300}
                    height={200}
                    className="object-contain h-full w-auto mx-auto"
                  />
                </div>
                <div className="bg-white text-black p-4">
                  <h3 className="text-lg font-semibold">{faculty.name}</h3>
                  <p className="text-sm text-gray-600 whitespace-pre-line">{faculty.subtitle}</p>
                  <div className="flex items-center justify-between mt-4 text-sm">
                    <span className="bg-gray-100 px-3 py-1 rounded-md font-medium">
                      37+ years of Experience
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-md font-medium">
                      10Lakh+ Students
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
