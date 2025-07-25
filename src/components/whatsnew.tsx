'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const trendingImages = [
  '/whatstrending.png',
  '/whatstrending.png',
  '/whatstrending.png',
];

export default function WhatsTrendingSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-6">
        Don’t Miss What’s New
      </h2>
      <p className="text-center text-gray-600 mb-10 text-lg md:text-xl max-w-4xl mx-auto">
        Be the first to explore our most talked-about courses, new batch launches, and student milestones.
      </p>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={24}
        >
          {trendingImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-[16/7] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={src}
                  alt={`Trending ${index + 1}`}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
