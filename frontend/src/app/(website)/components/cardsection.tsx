"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Paintbrush,
  Code2,
  Search,
  Megaphone,
  Gem,
  FileText,
  Headphones,
  Smartphone,
  Bot,
  UserPlus,
  Bug,
  Puzzle,
  LifeBuoy,
  Wrench,
  PenTool
} from "lucide-react";

interface Card {
  title: string;
  description: string;
  slug: string;
  color: string;
  image: string;
  logo: string;
}


const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  "UI/UX Design": Paintbrush,
  "Web Design & Development": Code2,
  "SEO Optimization": Search,
  "Digital Marketing": Megaphone,
  "Graphics Design": PenTool,
  "Content Writing": FileText,
  "CRM Automation": Headphones,
  "Mobile App Development": Smartphone,
  "Robotic Process Automation": Bot,
  "Lead Generation": UserPlus,
  "SQA & Testing": Bug,
  "Web Browser Extensions": Puzzle,
  "Support & Operational Services": LifeBuoy,
  "WordPress": Wrench,
  "Virtual Assistant (VA)": Gem
};

export default function CardSection() {
  const [cards, setCards] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    AOS.init({ duration: 800, once: false });

    fetch("/data/cards.json")
      .then((res) => res.json())
      .then((data: Card[]) => setCards(data))
      .catch((err) => console.error("Error loading cards.json:", err));
  }, []);

  const totalPages = Math.ceil(cards.length / itemsPerPage);
  const paginatedCards = cards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="min-h-screen font-[Poppins] py-16 flex flex-col items-center justify-center bg-transparent" data-aos="fade-up">
      <div className="max-w-[1280px] w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {paginatedCards.map((card, idx) => {
            const Icon = iconMap[card.title] || Paintbrush; // default icon
            return (
              <div
                key={idx}
                className="group relative w-full h-[400px] rounded-2xl border border-white/10 backdrop-blur-lg bg-white/5 shadow-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_0_3px_var(--clr)]"
                style={{ "--clr": card.color } as React.CSSProperties}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--clr)] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center space-y-6">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-[var(--clr)] text-[var(--clr)] transition-transform duration-500 group-hover:scale-110">
                    <Icon size={36} />
                  </div>
                  <h3 className="text-white text-xl font-semibold group-hover:text-[var(--clr)] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-300 group-hover:text-white transition duration-300">
                    {card.description}
                  </p>
                  <Link
                    href={`/servicespage/${card.slug}`}
                    className="inline-block mt-2 px-5 py-2 border-2 border-[var(--clr)] text-white rounded-full transition-all duration-300 group-hover:bg-[var(--clr)] group-hover:text-black"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-2 mt-12" data-aos="fade-up">
          <button
            className="px-4 py-2 rounded bg-white/10 text-white hover:bg-white/20 transition"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1
                  ? "bg-[var(--clr)] text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              } transition`}
              style={
                currentPage === i + 1
                  ? ({
                      "--clr": cards[i * itemsPerPage]?.color
                    } as React.CSSProperties)
                  : undefined
              }
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-4 py-2 rounded bg-white/10 text-white hover:bg-white/20 transition"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
