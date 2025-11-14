"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import Image from "next/image";

const categories = [
  "Website Design",
  "Dashboard Design",
  "Logo Design",
  "Product Branding",
  "Garafic Design (UI/UX)",
  "Game Design (UI/UX)",
  "Mobile App (UI/UX)"
];

const allCards = [
  {
    title: "Modern Website 1",
    desc: "Responsive and clean UI",
    category: "Website Design",
    img: "/img/website.jpg",
    slug: "websitepage"
  },
  {
    title: "Modern Website 2",
    desc: "Interactive and elegant",
    category: "Website Design",
    img: "/img/website2.jpg",
    slug: "websitepage"
  },
  {
    title: "Dashboard V1",
    desc: "Dark-themed analytics UI",
    category: "Dashboard Design",
    img: "/img/dashboard.jpg",
    slug: "dashboardpage"
  },
  {
    title: "Dashboard V2",
    desc: "Clean admin panel",
    category: "Dashboard Design",
    img: "/img/dashboard2.jpg",
    slug: "dashboardpage"
  },
  {
    title: "Logo A",
    desc: "Minimalist company logo",
    category: "Logo Design",
    img: "/img/logo.jpg",
    slug: "logopage"
  },
  {
    title: "Logo B",
    desc: "Bold and colorful",
    category: "Logo Design",
    img: "/img/logo2.jpg",
    slug: "logopage"
  },
  {
    title: "Brand Identity A",
    desc: "Complete product branding",
    category: "Product Branding",
    img: "/img/product.jpg",
    slug: "productpage"
  },
  {
    title: "Brand Identity B",
    desc: "Sleek and modern style",
    category: "Product Branding",
    img: "/img/product2.jpg",
    slug: "productpage"
  },
  {
    title: "UI Concept A",
    desc: "Creative visual layout",
    category: "Garafic Design (UI/UX)",
    img: "/img/graphic1.jpg",
    slug: "graphicpage"
  },
  {
    title: "UI Concept B",
    desc: "Professional visual direction",
    category: "Garafic Design (UI/UX)",
    img: "/img/graphic2.jpg",
    slug: "graphicpage"
  },
  {
    title: "Game UI 1",
    desc: "Fantasy RPG UI/UX",
    category: "Game Design (UI/UX)",
    img: "/img/game.jpg",
    slug: "gamepage"
  },
  {
    title: "Game UI 2",
    desc: "Arcade style interface",
    category: "Game Design (UI/UX)",
    img: "/img/game2.jpg",
    slug: "gamepage"
  },
  {
    title: "Mobile App 1",
    desc: "iOS styled banking app",
    category: "Mobile App (UI/UX)",
    img: "/img/mobile.jpg",
    slug: "mobilepage"
  },
  {
    title: "Mobile App 2",
    desc: "Android booking system",
    category: "Mobile App (UI/UX)",
    img: "/img/mobile2.jpg",
    slug: "mobilepage"
  }
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filteredCards =
    active === "All"
      ? allCards
      : allCards.filter((card) => card.category === active);

  return (
    <section className="w-full bg-transparent py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl text-white font-bold mb-4"
          data-aos="fade-up"
        >
          My Creative Work & Portfolio
        </h2>
        <p
          className="text-gray-400 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Explore a variety of designs crafted with passion and precision.
        </p>

        {/* Category Buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <HoverButton
            label="All"
            isActive={active === "All"}
            onClick={() => setActive("All")}
          />
          {categories.map((cat) => (
            <HoverButton
              key={cat}
              label={cat}
              isActive={active === cat}
              onClick={() => setActive(cat)}
            />
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCards.map((card, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <Image
                src={card.img}
                alt={card.title}
                width={400}
                height={288}
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 p-4 text-left">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-gray-700 text-sm mb-3">{card.desc}</p>
                <AnimatedHoverButton label="Detail" slug={card.slug} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Category Button Component
function HoverButton({
  label,
  isActive,
  onClick
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative group px-4 py-2 rounded-full border text-sm font-medium transition duration-300 ${
        isActive
          ? "bg-gradient-to-r from-blue-900 to-gray-900 text-white"
          : "text-white  hover:bg-gradient-to-r from-blue-900 to-gray-900"
      }`}
    >
      <span
        className={`transition-all duration-300 ${
          isActive
            ? "opacity-0 -translate-y-full"
            : "group-hover:-translate-y-full group-hover:opacity-0"
        }`}
      >
        {label}
      </span>
      <span
        className={`absolute left-0 right-0 transition-all duration-300 ${
          isActive
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

// Detail Button Component (Navigates to proper route)
function AnimatedHoverButton({ label, slug }: { label: string; slug: string }) {
  return (
    <Link href={`/${slug}`}>
      <button className="relative group flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-blue-900 to-gray-900   text-white  hover:bg-white rounded-full border hover:border-blue-950 hover:text-blue-950 transition-all duration-300 overflow-hidden ">
        <span className="transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0 flex items-center gap-1">
          <Send size={16}  />
          {label}
        </span>
        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center gap-1 hover:bg-white transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <Send size={16}   />
          {label}
        </span>
      </button>
    </Link>
  );
}