"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const socialIcons = [
    { icon: <Facebook size={18} />, link: "https://facebook.com" },
    { icon: <Instagram size={18} />, link: "https://instagram.com" },
    { icon: <Linkedin size={18} />, link: "https://linkedin.com" },
    { icon: <Twitter size={18} />, link: "https://twitter.com" }
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Careers", path: "/career" }
  ];

  return (
    <footer className="bg-gradient-to-r from-[#070121] to-[#170080] text-white pt-2">
      {/* Top Gradient Border */}
      <div className="w-full h-[2px] bg-gradient-to-r from-w via-gray-300 to-white mb-8"></div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Side */}
        <div className="flex-1">
          <Image
            src="/img/huboweb.png"
            alt="Logo"
            className="h-14 w-auto"
            width={100}
            height={40}
          />

          <p className="mt-4 text-sm text-gray-300 max-w-md">
            Welcome to HuboWeb – Let’s build your digital future together. ✨
            <br />
            Technology dances In Harmony And Innovation Meet Grace. ✨Your
            Digital Ambitions Become A Magnificent Reality Thanks To Our
            Harmonious Combination Of Design, Technology, And Strategy. ✨ Come
            Along with Us As We Redefine Greatness For The Digital Age Improve
            Your Presence With Unparalleled Finesse ✨
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            {socialIcons.map(({ icon, link }, idx) => (
              <a
                href={link}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-[2px] rounded-full"
              >
                <div className="bg-gradient-to-r from-blue-900 to-gray-900 p-[2px] rounded-full">
                  <div className="bg-[#070121] p-3 rounded-full text-white hover:scale-110 transition-transform duration-300">
                    {icon}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Links</h3>
            <ul>
              {quickLinks.map(({ name, path }) => (
                <li key={name} className="mb-2">
                  <Link
                    href={path}
                    className="flex items-center gap-1.5 group transition-transform duration-300"
                  >
                    <span className="text-transparent group-hover:text-white transition duration-200">
                      /
                    </span>
                    <span className="group-hover:translate-x-1 group-hover:px-1 group-hover:bg-clip-text group-hover:text-white transition-all duration-500">
                      {name}
                    </span>
                    <span className="text-transparent group-hover:text-white transition duration-200">
                      /
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link
                  href="/servicespage/wordpress"
                  className="flex items-center gap-1.5 group transition-transform duration-300"
                >
                  <span className="text-transparent group-hover:text-white transition duration-200">
                    /
                  </span>
                  <span className="group-hover:translate-x-1 group-hover:px-1 group-hover:bg-clip-text group-hover:text-white transition-all duration-500">
                    Word Press
                  </span>
                  <span className="text-transparent group-hover:text-white transition duration-200">
                    /
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/servicespage/graphicdesign"
                  className="flex items-center gap-1.5 group transition-transform duration-300"
                >
                  <span className="text-transparent group-hover:text-white transition duration-200">
                    /
                  </span>
                  <span className="group-hover:translate-x-1 group-hover:px-1 group-hover:bg-clip-text group-hover:text-white transition-all duration-500">
                    Graphic Design
                  </span>
                  <span className="text-transparent group-hover:text-white transition duration-200">
                    /
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/servicespage/seooptimization"
                  className="flex items-center gap-1.5 group transition-transform duration-300"
                >
                  <span className="text-transparent group-hover:text-white transition duration-200">
                    /
                  </span>
                  <span className="group-hover:translate-x-1 group-hover:px-1 group-hover:bg-clip-text group-hover:text-white transition-all duration-500">
                    Seo
                  </span>
                  <span className="text-transparent group-hover:text-white transition duration-200">
                    /
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/servicespage/uiuxdesign"
                  className="flex items-center gap-1.5 group transition-transform duration-300"
                >
                  <span className="text-transparent group-hover:text-white transition duration-200">
                    /
                  </span>
                  <span className="group-hover:translate-x-1 group-hover:px-1 group-hover:bg-clip-text group-hover:text-white transition-all duration-500">
                    UI/UX
                  </span>
                  <span className="text-transparent group-hover:text-white transition duration-200">
                    /
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/servicespage/webdesign"
                  className="flex items-center gap-1.5 group transition-transform duration-300"
                >
                  <span className="text-transparent group-hover:text-white transition duration-200">
                    /
                  </span>
                  <span className="group-hover:translate-x-1 group-hover:px-1 group-hover:bg-clip-text group-hover:text-white transition-all duration-500">
                    Web Design
                  </span>
                  <span className="text-transparent group-hover:text-white transition duration-200">
                    /
                  </span>
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/servicespage/digitalmarketing"
                  className="flex items-center gap-1.5 group transition-transform duration-300"
                >
                  <span className="text-transparent group-hover:text-white transition duration-200">
                    /
                  </span>
                  <span className="group-hover:translate-x-1 group-hover:px-1 group-hover:bg-clip-text group-hover:text-white transition-all duration-500">
                    Marketing
                  </span>
                  <span className="text-transparent group-hover:text-white transition duration-200">
                    /
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin size={16} className="mt-0.5" />
                <span>123 Tech Street, Innovation City, USA</span>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <Mail size={16} className="mt-0.5" />
                <span>info@huboweb.com</span>
              </div>
              <div className="flex items-start gap-2 text-gray-300">
                <Phone size={16} className="mt-0.5" />
                <span>+1 234 567 890</span>
              </div>
            </div>

            {/* Underline */}
            <div className="w-full h-px bg-gray-600 my-4"></div>

            {/* Copyright */}
            {/* Copyright */}
            <p className="text-xs text-gray-400">
              © 2021–2024 <span className="text-white">HuboWeb.com</span>. All
              rights reserved |{" "}
              <Link
                href="/privacypolicy"
                className="underline hover:text-white"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
