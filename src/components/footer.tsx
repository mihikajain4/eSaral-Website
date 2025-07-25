import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Logo & Contact */}
        <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-gray-700 pb-8">
          <div>
            <Image src="/logo.png" alt="eSaral Logo" width={120} height={40} />
            <p className="text-blue-800 mt-4 font-semibold">Address:</p>
            <p className="mt-1 text-blue-300">
              eSaral Ventures Pvt. Ltd. <br />
              806, in front of Birla Eye Hospital <br />
              Shastri Nagar, Dadabari, Kota, Rajasthan – 324009
            </p>
          </div>

          <div className="flex flex-col md:items-end">
            <p className="text-blue-800 font-semibold">Contact Us:</p>
            <p className="mt-1 text-blue-300">📞 +91-6376-440-597</p>
            <p className="text-blue-300">📧 contact@esaral.com</p>
            <div className="mt-3">
              <Image
                src="/google-play.png"
                alt="Google Play"
                width={150}
                height={45}
              />
            </div>
          </div>
        </div>

        {/* Middle Section: Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-gray-300">
          {/* Column 1 */}
          <div className="space-y-2">
            <h4 className="text-blue-800 font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-blue-300">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-2">
            <h4 className="text-blue-800 font-semibold mb-2">Courses</h4>
            <ul className="space-y-1 text-blue-300">
              <li><a href="/courses/jee">JEE (Class 11, 12, Droppers)</a></li>
              <li><a href="/courses/neet">NEET (Class 11, 12, Droppers)</a></li>
              <li><a href="/courses/foundation">Foundation (8–10)</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-2">
            <h4 className="text-blue-800 font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-blue-300">
              <li><a href="/resources/ncert">NCERT Solutions</a></li>
              <li><a href="/resources/papers">Previous Year Papers</a></li>
              <li><a href="/resources/notes">Notes & Revision</a></li>
              <li><a href="/resources/sample-tests">Sample Test Papers</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-2">
            <h4 className="text-blue-800 font-semibold mb-2">App & Support</h4>
            <ul className="space-y-1 text-blue-300">
              <li><a href="/download">Download eSaral App</a></li>
              <li><a href="/help">Help Center / FAQ</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li className="ml-4 list-disc"><a href="/gurukul">Offline Gurukul</a></li>
              <li className="ml-4 list-disc"><a href="/online-courses">Online Courses</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Social */}
        <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-400 gap-4">
          <p className="text-center md:text-left text-blue-300">
            © 2023 | eSaral Ventures Pvt Ltd | All Rights Reserved
          </p>

          <div className="flex justify-center md:justify-end gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 text-2xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
