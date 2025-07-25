"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const handleNav = () => setOpen(false);


    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="mx-auto max-w-screen-xl px-4">
                {/* TOP BAR */}
                <div className="flex items-center justify-between py-2 md:py-3">
                    <button
                        onClick={() => setOpen((p) => !p)}
                        className="text-2xl text-indigo-900 md:hidden"
                        aria-label="Toggle navigation"
                    >
                        {open ? <FiX /> : <FiMenu />}
                    </button>
                    {/* logo */}
                    <Link href="/" className="flex items-center md:mr-8">
                        <Image
                            src="/logo.png"
                            alt="eSaral logo"
                            width={120}
                            height={36}
                            priority
                            className="h-9 w-auto"
                        />
                    </Link>

                    {/* search box(for desktop) */}
                    <div className="relative hidden sm:block">
                        <input
                            type="text"
                            placeholder="Search"
                            className="peer h-10 w-60 rounded-md border text-gray-500 border-gray-300 bg-gray-50 pl-4 pr-10 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
                        />
                        <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-500 peer-focus:text-blue-500" />
                    </div>

                    <Link
                        href="/"
                        className=" justify-evenly rounded-md bg-blue-800 px-4 py-2 text-sm font-medium text-white shadow transition hover:opacity-90 md:hidden"
                    >
                        Login
                    </Link>
                </div>


                <div className="hidden flex-wrap items-center justify-between gap-y-3 pb-2 md:flex">
                    {/* left: links */}
                    <ul className="flex flex-wrap gap-6 text-sm text-indigo-900">
                        {[
                            "Home",
                            "IIT JEE",
                            "NEET",
                            "Foundation",
                            "e‑Saral Gurukul Offline",
                            "About Us",
                        ].map((item) => (
                            <li key={item} className="relative cursor-pointer group">
                                <Link href="/" className="transition-colors hover:text-blue-500">
                                    {item}
                                </Link>
                                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-500 transition-all group-hover:w-full" />
                            </li>
                        ))}
                    </ul>

                    {/* right: auth buttons */}
                    <div className="flex shrink-0 gap-3">
                        <Link
                            href="/"
                            className="rounded-md bg-blue-800 px-4 py-2 text-sm font-medium text-white shadow transition hover:opacity-90"
                        >
                            Login
                        </Link>
                        <Link
                            href="/"
                            className="hidden rounded-md border-2 border-indigo-900 px-4 py-2 text-sm font-medium text-indigo-900 transition hover:bg-indigo-900 hover:text-white md:block"
                        >
                            Sign up for Free
                        </Link>
                    </div>
                </div>

            </div>

            {/*MOBILE DRAWER*/}
            <nav
                className={`fixed inset-x-0 top-14 z-40 w-full origin-top transform bg-white shadow-md transition-all duration-300 md:hidden ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                    }`}
   >
                <div className="relative mx-4 mt-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="peer h-10 w-full rounded-md border border-gray-300 bg-gray-50 pl-4 pr-10 text-sm text-gray-600 outline-none transition focus:border-blue-500 focus:bg-white"
                    />
                    <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-500 peer-focus:text-blue-500" />
                </div>

                {/* links */}
                <ul className="mt-6 space-y-4 px-6 text-sm font-semibold text-indigo-900">
                    {[
                        "Home",
                        "IIT JEE",
                        "NEET",
                        "Foundation",
                        "e‑Saral Gurukul Offline",
                        "About Us",
                    ].map((item) => (
                        <li key={item}>
                            <Link
                                href="/"
                                onClick={handleNav}
                                className="block w-full py-1 transition-colors hover:text-blue-500"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* sign‑up button */}
                <div className="mt-6 px-6 pb-6">
                    <Link
                        href="/"
                        onClick={handleNav}
                        className="block w-full rounded-md border-2 border-indigo-900 px-4 py-3 text-center text-sm font-medium text-indigo-900 transition hover:bg-indigo-900 hover:text-white"
                    >
                        Sign up for Free
                    </Link>
                </div>
            </nav>


        </header>
    );
}
