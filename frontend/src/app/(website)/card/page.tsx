"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import { Send } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  image: string;
  logo: string;
}

export default function Card() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });

    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 bg-transparent text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">
          <TextAnimate animation="blurInUp" by="character" once>
            Experience our pinnacle of digital excellence
          </TextAnimate>
        </h2>
        <p className="text-gray-400">
          <TextAnimate animation="blurInUp" by="character" once>
            Unlock your digital potential and elevate your success with our premier services.
          </TextAnimate>
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group relative overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:scale-105 h-[360px] w-full max-w-[300px] flex-grow"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              style={{
                backgroundImage: service?.image ? `url(${service.image})` : "none",
              }}
            />

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center text-center h-full p-6 space-y-4">
              
              {/* Logo */}
              <div className="relative w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
                <div className="relative w-11 h-11">
                  {service?.logo ? (
                    <Image
                      src={service.logo}
                      alt={service?.title || "Service Logo"}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <div className="bg-gray-500 w-full h-full rounded-full" />
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
                {service?.title || "No Title"}
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-300">
                {service?.description || "No Description"}
              </p>

              {/* Button */}
              <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Link
                  href="/service"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-[#070121] transition-all duration-300"
                >
                  Read More <Send size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
