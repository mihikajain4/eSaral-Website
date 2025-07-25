import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/heroSection";
import Cards from "@/components/Cards";
import SelectionShowcase from "@/components/selection";
import CoursesSection from "@/components/courses";
import WhatsTrendingSection from "@/components/whatsnew";
import Footer from "@/components/footer";
import OfflineClassesSection from "@/components/offlineClasses";
import AppSection from "@/components/appsection";
import Testimonials from "@/components/testimonials";
import FacultySection from "@/components/faculty";
import BannerSection from "@/components/banner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eSaral",
  description: "Header",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <HeroSection />
        <Cards/>
        <SelectionShowcase/>
        <CoursesSection/>
        <WhatsTrendingSection/>
        <OfflineClassesSection/>
        <AppSection/>
        <FacultySection/> 
        <Testimonials/>
        <BannerSection/>
        <Footer/>
        {children}
      </body>
    </html>
  );
}
