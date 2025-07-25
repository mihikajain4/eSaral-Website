import Image from "next/image";
import Link from "next/link";

export default function BannerSection() {
  return (
    <div className="w-full flex justify-center p-5">
      <div className="relative bg-gradient-to-r from-[#0f529d] to-[#a9c7e4] w-full max-w-5xl px-3 py-6 md:py-12 md:px-10 rounded-xl flex flex-col-reverse md:flex-row items-center justify-between gap-4 overflow-hidden">
        
        {/* Left Content */}
        <div className="text-center md:text-left max-w-md md:max-w-lg w-full z-10">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
            <Image
              src="/logo.png"
              alt="eSaral Logo"
              width={180}
              height={60}
            />
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-loose whitespace-nowrap">
              है, तो सब सरल है
            </h1>
          </div>

          <p className="text-[#041b35] md:text-xl leading-loose mt-2">
            Start Your IIT or NEET Journey with eSaral Today
          </p>

          {/* Enroll Button with Link */}
          <Link href="/enroll">
            <button className="mt-10 bg-white text-blue-800 px-5 py-1.5 rounded-md font-semibold shadow-md hover:bg-gray-100 text-xl">
              Enroll Now
            </button>
          </Link>
        </div>

        {/* Mentor Section with DNA background */}
        <div className="relative w-[70%] md:w-[35%] z-10">
          <div className="absolute inset-0 scale-[0.5] md:scale-[1.5] z-0">
            <Image
              src="/dna.png"
              alt="DNA Icon"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative z-10">
            <Image
              src="/esaral-mentors.png"
              alt="eSaral Mentors"
              width={400}
              height={350}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
