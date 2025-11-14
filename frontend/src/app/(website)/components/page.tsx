"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const reviews = [
  {
    name: "Amazon",
    username: "@amazon",
    body: "Amazon is the world’s largest online retailer,",
    img: "/img/amazon.jpg"
  },
  {
    name: "Apple",
    username: "@apple",
    body: "Apple designs like the iPhone, iPad, and Mac,",
    img: "/img/apple.webp"
  },
  {
    name: "Brand",
    username: "@brand",
    body: "Brand specializes in building unique",
    img: "/img/brand.jpg"
  },
  {
    name: "Mercedies",
    username: "@mercedies",
    body: "Mercedes-Benz is a crafting premium vehicles",
    img: "/img/mercdies.webp"
  },
  {
    name: "Nike",
    username: "@nike",
    body: "Nike leads the sportswear industry",
    img: "/img/nike.webp"
  },
  {
    name: "Luxury",
    username: "@luxury",
    body: "Luxury creates exclusive fashion",
    img: "/img/luxury.jpg"
  }
];

const ReviewCard = ({
  img,
  name,
  username,
  body
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => (
  <div className="w-64 shrink-0 p-4 border rounded-xl border-gray-900 bg-gray-950/10 mx-2">
    <div className="flex items-center gap-3">
      <Image
        src={img}
        alt={name}
        width={56}
        height={56}
        className="w-14 h-14 rounded-full object-cover"
      />
      <div>
        <h4 className="text-sm font-medium text-white">{name}</h4>
        <p className="text-xs text-white/60">{username}</p>
      </div>
    </div>
    <blockquote className="mt-2 text-sm text-gray-400 whitespace-normal break-words overflow-hidden">
      {body}
    </blockquote>
  </div>
);

export default function MarqueeDemo() {
  const [pauseFirst, setPauseFirst] = useState(false);
  const [pauseSecond, setPauseSecond] = useState(false);

  return (
    <div className="relative flex flex-col gap-5 py-10 overflow-hidden">
      {/* First Row (Left) */}
      {/* First Line – Left to Right */}
      <div
        onMouseEnter={() => setPauseFirst(true)}
        onMouseLeave={() => setPauseFirst(false)}
        className="overflow-hidden w-full"
      >
        <div
          className={cn(
            "flex w-max animate-marquee-left whitespace-nowrap",
            pauseFirst && "motion-paused"
          )}
        >
          {[...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
      </div>

      {/* Second Line – Right to Left */}
      <div
        onMouseEnter={() => setPauseSecond(true)}
        onMouseLeave={() => setPauseSecond(false)}
        className="overflow-hidden w-full"
      >
        <div
          className={cn(
            "flex w-max animate-marquee-right whitespace-nowrap",
            pauseSecond && "motion-paused"
          )}
        >
          {[...reviews, ...reviews].map((review, i) => (
            <ReviewCard key={i + 100} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
}