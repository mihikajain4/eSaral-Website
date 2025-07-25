"use client";
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Testimonial = {
  name: string;
  rank: string;
  message: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Aarav Mehta",
    rank: "AIR 400 (JEE Mains 2025)",
    message:
      "Thanks to eSaral, I could study at my own pace with the best Kota teachers. Their doubt-solving and test series helped me crack JEE Main with confidence.",
    image: "/testimonials/aravmehta.png",
  },
  {
    name: "Aarav Mehta",
    rank: "AIR 400 (JEE Mains 2025)",
    message:
      "Thanks to eSaral, I could study at my own pace with the best Kota teachers. Their doubt-solving and test series helped me crack JEE Main with confidence.",
    image: "/testimonials/aravmehta.png",
  },
  {
    name: "Aarav Mehta",
    rank: "AIR 400 (JEE Mains 2025)",
    message:
      "Thanks to eSaral, I could study at my own pace with the best Kota teachers. Their doubt-solving and test series helped me crack JEE Main with confidence.",
    image: "/testimonials/aravmehta.png",
  },
  // You can add more testimonials here
];

const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#e8f0fe] py-10 px-4 md:px-12">
      <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-800 mb-2">
        <span className="text-blue-900">Real</span> Stories,{" "}
        <span className="text-blue-900">Real</span> Impact
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Hear from Our Students and their parents
      </p>

      {/* Featured Testimonial */}
      <Link
        href={`/testimonials/${testimonials[0].name
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
        className="block"
      >
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 mb-10 hover:shadow-lg transition duration-200">
          <Image
            src={testimonials[0].image}
            alt="Testimonial"
            width={400}
            height={220}
            className="rounded-lg w-full md:w-[400px]"
          />
          <div className="md:border-l md:pl-6 w-full">
            <h3 className="text-xl font-semibold text-blue-900">
              {testimonials[0].name}
            </h3>
            <p className="text-sm text-gray-500">{testimonials[0].rank}</p>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              “{testimonials[0].message}”
            </p>
          </div>
        </div>
      </Link>

      {/* Scrollable Testimonials */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Cards */}
        <div className="overflow-x-auto">
          <div
            ref={scrollRef}
            className="flex gap-4 w-max mx-auto px-1 md:px-10 scroll-smooth"
          >
            {testimonials.map((t, index) => (
              <Link
                key={index}
                href={`/testimonials/${t.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`} // dynamic route
                className="min-w-[240px] sm:min-w-[280px] bg-white rounded-lg shadow p-3 hover:shadow-lg transition duration-200"
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  width={280}
                  height={160}
                  className="rounded-lg"
                />
                <h4 className="font-semibold mt-2 text-blue-900 text-sm">
                  {t.name}
                </h4>
                <p className="text-xs text-gray-500">{t.rank}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
