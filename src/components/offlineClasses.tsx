import Image from "next/image";

export default function OfflineClassesSection() {
  return (
    <section className="bg-[#E8E6FC] py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Text content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-semibold text-black p-2">
            Prep Smarter with Offline Classes Backed by the <br />
            <span className="text-blue-800">eSaral Gurukul</span>
          </h2>
          <p className="text-lg text-gray-700 p-2">
            Join our only offline centre and experience focused classroom
            learning, doubt-solving sessions, and structured academic planning
            guided by top faculty
          </p>
          <a
            href="https://esaral.com/courses"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-700 hover:bg-blue-900 text-white font-medium text-lg py-3 px-6 rounded-md shadow-md transition">
              Explore Courses
            </button>
          </a>
        </div>

        {/* Right: Full Combined Image */}
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <div className="w-full sm:w-[500px] rounded-2xl overflow-hidden ">
            <Image
              src="/classes.png"
              alt="Offline Classes Layout"
              width={934}
              height={768}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
