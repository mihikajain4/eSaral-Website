import Image from "next/image";
import Link from "next/link";

const AppSection = () => {
  return (
    <section className="bg-[#ffe3bb] px-4 md:px-16 py-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Best Exam Prep App for <br />
            <span className="text-blue-800">JEE | NEET | Classes 8–10</span>
          </h1>
          <p className="mt-4 text-gray-800 text-base md:text-lg max-w-md">
            Get access to expert faculty from Kota, structured video lectures,
            mock tests, and everything you need to succeed — anytime, anywhere,
            all in one app.
          </p>

          {/* Features */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
            <div>
              <Image
                src="/icons/cap.png"
                alt="students"
                width={40}
                height={40}
                className="mx-auto"
              />
              <p className="font-bold mt-1 text-black">20 Lakh+</p>
              <p className="text-gray-600 text-xs">Students</p>
            </div>
            <div>
              <Image
                src="/icons/videos.png"
                alt="videos"
                width={40}
                height={40}
                className="mx-auto"
              />
              <p className="font-bold mt-1 text-black">4000+</p>
              <p className="text-gray-600 text-xs">Video Lectures</p>
            </div>
            <div>
              <Image
                src="/icons/mock.png"
                alt="mock tests"
                width={40}
                height={40}
                className="mx-auto"
              />
              <p className="font-bold mt-1 text-black">700+</p>
              <p className="text-gray-600 text-xs">Mock Tests</p>
            </div>
            <div>
              <Image
                src="/icons/practice.png"
                alt="practice"
                width={40}
                height={40}
                className="mx-auto"
              />
              <p className="font-bold mt-1 text-black">5600+</p>
              <p className="text-gray-600 text-xs">Practice Questions</p>
            </div>
          </div>

          {/* Store Links */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Image
              src="/google-play.png"
              alt="playstore"
              width={140}
              height={40}
            />
            <Image
              src="/app-store.png"
              alt="appstore"
              width={140}
              height={40}
            />
          </div>

          {/* Download Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.esaral.jeeneet" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-6 px-6 py-3 bg-blue-800 text-white rounded-md text-sm font-semibold hover:bg-blue-700">
              ⬇ Download the app
            </button>
          </a>
        </div>

        {/* RIGHT PHONES */}
        <div className="flex-1 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          {/* Mobile Logo - Positioned at bottom on mobile */}
          <div className="flex justify-center w-full md:w-auto mt-4 md:mt-0">
            <Image
              src="/phones/mobile-logo.png"
              alt="phone 2"
              width={200}
              height={300}
              className="z-10"
            />
          </div>

          {/* Mobile Main - Right on larger screens */}
          <div className="flex justify-end w-full md:w-auto">
            <Image
              src="/phones/mobile-main.png"
              alt="phone 1"
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
