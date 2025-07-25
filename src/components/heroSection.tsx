"use client";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function HeroSection() {
  return (
    /* top & bottom breathing room */
    <section className="">
      {/* ─────── Card wrapper (purple border) ─────── */}
      <div className="mx-auto max-w-screen-xl rounded-md">
        <div className="relative overflow-hidden rounded-sm">
          {/* doodle pattern */}
          <div
            className="absolute inset-0 bg-[url('/icons.png')] "
            aria-hidden
          />
          {/* soft violet‑amber tint */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-[#0e1c46cc] to-[#4d2f1fb3]"
            aria-hidden
          />

          {/* ───────────── Inner content grid ───────────── */}
          <div className="relative grid gap-10 p-6 md:grid-cols-2">
            {/* ─────── Left column (desktop) ─────── */}
            <div className="hidden text-white md:flex md:flex-col md:justify-center">
              <h1 className=" font-bold sm:text-3xl lg:text-5xl">
                Master JEE, NEET & Boards with
                <br />
                India’s Most Trusted Learning App
                <br />
              </h1>

              {/* feature chips */}
              <div className="pt-5 flex flex-nowrap gap-6">
                {[
                  "Loved by 20 Lakh+ Students",
                  "Proven Results",
                  "Designed by Top Kota Faculty",
                ].map((txt) => (
                  <div
                    key={txt}
                    className="flex w-50 flex-col items-center text-center"
                  >
                    <Image
                      src="/rocket1.png"
                      alt=""
                      width={60}
                      height={60}
                      className="select-none"
                    />
                    <p className=" text-xl font-semibold leading-snug">{txt}</p>
                  </div>
                ))}
              </div>

              {/* desktop teachers photo */}
              <div className="mt-10 flex justify-center md:justify-start">
                <Image
                  src="/teachers.png"
                  alt="eSaral mentors"
                  width={820}
                  height={600}
                  priority
                  className="w-full max-w-[820px] object-contain"
                />
              </div>
            </div>

            {/* ─────── Right column : form card ─────── */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-sm rounded-2xl bg-white/95 p-6 shadow-lg backdrop-blur-sm">
                <h2 className="text-center text-2xl font-bold sm:text-3xl text-black">
                  Start Your JEE or NEET <br className="hidden sm:block" />
                  Journey with <span className="text-blue-800">eSaral</span>
                </h2>

                <p className="mt-3 text-center text-sm sm:text-base text-black">
                  Get expert guidance and free study resources
                  <br className="hidden sm:block" />
                  trusted by <strong>20 Lakh+ students</strong>
                </p>

                {/* form */}
                <form className="mt-6 space-y-3">
                  <input
                    type="text"
                    placeholder="Name of the student"
                    className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-500 outline-none transition focus:border-blue-500 focus:bg-white"
                  />
                  <input
                    type="tel"
                    placeholder="Phone No."
                    className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm text-gray-500 outline-none transition focus:border-blue-500 focus:bg-white"
                  />

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-700 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-blue-800 focus:outline-none"
                  >
                    <span className="sm:hidden">Enroll Now</span>
                    <span className="hidden sm:inline">Explore Courses</span>
                    <FiArrowRight className="text-lg" />
                  </button>
                </form>
              </div>
            </div>
            <div className="flex justify-center md:hidden">
              <Image
                src="/teachers.png"
                alt="eSaral mentors"
                width={820}
                height={600}
                priority
                className="w-full max-w-3xl object-contain"
              />
            </div>
          </div>
          {/* ───────────── End inner grid ───────────── */}
        </div>
      </div>
    </section>
  );
}
