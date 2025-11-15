"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  path: string;
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState<string>("");

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/career" },
    { name: "Contact Us", path: "/contact" } // ✅ Contact Us moved here
  ];

  useEffect(() => {
    if (pathname === "/") setActiveItem("Home");
    else if (pathname.includes("service")) setActiveItem("Services");
    else if (pathname.includes("portfolio")) setActiveItem("Portfolio");
    else if (pathname.includes("about")) setActiveItem("About Us");
    else if (pathname.includes("career")) setActiveItem("Careers");
    else if (pathname.includes("contact")) setActiveItem("Contact Us");
    else if (pathname.includes("login")) setActiveItem("Login");
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 bg-gradient-to-r from-[#070121] to-[#170080] backdrop-blur-md shadow-md flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/img/huboweb.png"
          alt="Logo"
          className="h-14 w-auto"
          width={100}
          height={40}
        />
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none text-white bg-transparent p-2 rounded-full"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Nav Links */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex absolute md:static top-full left-0 w-full md:w-auto flex-col md:flex-row bg-[#070121] md:bg-transparent shadow-md md:shadow-none rounded-b-xl md:rounded-none mt-2 md:mt-0 p-4 md:p-0 gap-4 md:gap-6 z-20`}
      >
        {navItems.map(({ name, path }) => (
          <Link
            key={name}
            href={path}
            className={`relative group cursor-pointer px-4 py-2 rounded-full overflow-hidden transition duration-300 ${
              activeItem === name
                ? "bg-gradient-to-r from-blue-900 to-gray-900 text-white"
                : "text-white hover:text-[#071C55]"
            }`}
          >
            <div
              className={`absolute inset-0 rounded-full transition-transform duration-300 ${
                activeItem === name
                  ? "scale-0"
                  : "bg-gray-200 scale-0 group-hover:scale-100"
              }`}
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full font-medium">
              <span
                className={`transition-all duration-200 ${
                  activeItem === name
                    ? "opacity-0 -translate-y-full"
                    : "group-hover:-translate-y-full group-hover:opacity-0"
                }`}
              >
                {name} <span className="text-[10px]">▾</span>
              </span>
              <span
                className={`absolute transition-all duration-300 ${
                  activeItem === name
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                }`}
              >
                {name} <span className="text-[10px]">▾</span>
              </span>
            </div>
          </Link>
        ))}

        {/* ✅ Login Button in Mobile Menu Only */}
        <Link
          href="/auth/login"
          className="md:hidden group relative rounded-full px-[2px] py-[2px] bg-gradient-to-r from-blue-900 to-gray-900 transition-all duration-300"
        >
          <div className="flex items-center px-5 py-2 rounded-full bg-transparent hover:bg-white transition-all duration-300">
            <div className="relative flex flex-col justify-center items-center text-sm font-medium text-white hover:text-black">
              <span className="transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                Login <span className="text-[10px]">▾</span>
              </span>
              <span className="absolute transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                Login <span className="text-[10px]">▾</span>
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* ✅ Login Button for Desktop Only */}
      <Link
        href="/auth/login"
        className="hidden md:block group relative rounded-full px-[2px] py-[2px] bg-gradient-to-r from-blue-900 to-gray-900 transition-all duration-300"
      >
        <div
          className={`flex items-center px-5 py-2 rounded-full overflow-hidden transition-all duration-300 ${
            activeItem === "Login"
              ? "bg-gradient-to-r from-blue-900 to-gray-900 text-white"
              : "bg-transparent hover:bg-white"
          }`}
        >
          <div
            className={`relative flex flex-col justify-center items-center text-sm font-medium ${
              activeItem === "Login"
                ? "text-white"
                : "text-white hover:text-black bg-clip-text bg-gradient-to-r from-blue-900 to-gray-900"
            }`}
          >
            <span
              className={`transition-all duration-300 ${
                activeItem === "Login"
                  ? "opacity-0 -translate-y-full"
                  : "group-hover:-translate-y-full group-hover:opacity-0"
              }`}
            >
              Login <span className="text-[10px]">▾</span>
            </span>
            <span
              className={`absolute transition-all duration-300 ${
                activeItem === "Login"
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              }`}
            >
              Login <span className="text-[10px]">▾</span>
            </span>
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
