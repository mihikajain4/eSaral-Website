import Image from "next/image";
import React from "react";

type Course = {
  title: string;
  image: string;
  classes: { label: string; href: string }[];
  color: string;
};

const courseData: Course[] = [
  {
    title: "IIT JEE Preparation",
    image: "/images/jee.png",
    classes: [
      { label: "Class 11", href: "/courses/jee/class-11" },
      { label: "Class 12", href: "/courses/jee/class-12" },
      { label: "Dropper", href: "/courses/jee/dropper" },
    ],
    color: "bg-blue-100",
  },
  {
    title: "NEET Preparation",
    image: "/images/neet.png",
    classes: [
      { label: "Class 11", href: "/courses/neet/class-11" },
      { label: "Class 12", href: "/courses/neet/class-12" },
      { label: "Dropper", href: "/courses/neet/dropper" },
    ],
    color: "bg-pink-100",
  },
  {
    title: "Foundation Courses",
    image: "/images/foundation.png",
    classes: [
      { label: "Class 8", href: "/courses/foundation/class-8" },
      { label: "Class 9", href: "/courses/foundation/class-9" },
      { label: "Class 10", href: "/courses/foundation/class-10" },
    ],
    color: "bg-yellow-100",
  },
];

const CoursesSection: React.FC = () => {
  return (
    <section className="py-10 px-4 md:px-20 bg-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-800">
        Courses We Offer
      </h2>
      <p className="text-center text-black mt-2">
        Tailored programs for JEE, NEET, Boards, and Foundation
      </p>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-6 mt-8 md:hidden">
        {courseData.map((course, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 rounded-xl shadow-md ${course.color}`}
          >
            <Image
              src={course.image}
              alt={course.title}
              width={96}
              height={96}
              className="w-24 h-24 object-contain"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-xl font-semibold text-blue-800">
                {course.title}
              </h3>
              <div className="flex gap-2 mt-3 flex-wrap">
                {course.classes.map((cls, i) => (
                  <a
                    key={i}
                    href={cls.href}
                    className="bg-white text-black shadow px-3 py-1 rounded hover:bg-gray-100 transition"
                  >
                    {cls.label}
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="text-sm text-blue-800 mt-2 hover:underline flex items-center"
              >
                Explore Category <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-3 gap-6 mt-10">
        {courseData.map((course, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-md p-6 flex flex-col items-center text-center ${course.color}`}
          >
            <Image
              src={course.image}
              alt={course.title}
              width={120}
              height={120}
              className="object-contain"
            />
            <h3 className="text-lg font-semibold text-blue-800 mt-4">
              {course.title}
            </h3>
            <div className="flex gap-2 justify-center mt-3 flex-wrap">
              {course.classes.map((cls, i) => (
                <a
                  key={i}
                  href={cls.href}
                  className="bg-white text-black shadow px-3 py-1 rounded hover:bg-gray-100 transition"
                >
                  {cls.label}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="text-sm text-blue-800 mt-3 hover:underline flex items-center"
            >
              Explore Category <span className="ml-1">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
