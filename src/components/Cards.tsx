"use client";
import Image from "next/image";

const features = [
  {
    title: "20 Lakh+",
    subtitle: "Student",
    img: "/students.png",
    bg: "bg-pink-100",
  },
  {
    title: "4000+",
    subtitle: "Video Lectures",
    img: "/video.png",
    bg: "bg-indigo-100",
  },
  {
    title: "56,000+",
    subtitle: "Practice Questions",
    img: "/questions.png",
    bg: "bg-yellow-100",
  },
  {
    title: "700+",
    subtitle: "Mock Tests",
    img: "/tests.png",
    bg: "bg-blue-100",
  },
];

export default function Cards() {
  return (
    <section className="py-10 px-4 md:px-16">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {features.map(({ title, subtitle, img, bg }) => (
          <div
            key={title}
            className={`rounded-sm shadow-md p-2 text-center ${bg}`}
          >
            <div className="text-2xl font-bold text-blue-800">{title}</div>
            <div className="text-lg font-medium text-gray-700">{subtitle}</div>
            <div className="mt-2 flex justify-center">
              <Image src={img} alt={subtitle} width={110} height={110} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

