"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
}

const ReviewCard = ({ img, name, username, body }: Review) => (
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
  const [reviews, setReviews] = useState<Review[]>([]);
  const [pauseFirst, setPauseFirst] = useState(false);
  const [pauseSecond, setPauseSecond] = useState(false);

  useEffect(() => {
    fetch("/data/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) =>
        console.error("Error loading reviews.json:", err)
      );
  }, []);

  return (
    <div className="relative flex flex-col gap-5 py-10 overflow-hidden">

      {/* First Row (Left) */}
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

      {/* Second Row (Right) */}
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
