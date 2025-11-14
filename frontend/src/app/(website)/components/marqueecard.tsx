"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Marquee } from "@/components/magicui/marquee";
import {
  Rocket,
  MonitorSmartphone,
  Palette,
  Settings2,
  LucideIcon
} from "lucide-react";

const iconsMap: Record<string, LucideIcon> = {
  Rocket,
  MonitorSmartphone,
  Palette,
  Settings2,
};

interface CardItem {
  text: string;
  icon: string;
}

function MarqueeCard() {
  const [cards, setCards] = useState<CardItem[]>([]);

  useEffect(() => {
    fetch("/data/marqueeCards.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Error loading marqueeCards.json:", err));
  }, []);

  return (
    <div className="w-full py-6">
      <Marquee className="gap-4">
        {cards.map((card, index) => {
          const Icon = iconsMap[card.icon];

          return (
            <div
              key={index}
              className="group w-64 px-6 py-4 bg-white text-black rounded-xl shadow-md font-medium flex flex-col items-start gap-4 transition-colors duration-300"
            >
              {Icon && <Icon className="w-8 h-8 text-[#1F1F4B]" />}
              <p className="text-sm">{card.text}</p>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}

export default MarqueeCard;
