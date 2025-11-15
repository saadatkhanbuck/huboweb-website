"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Smartphone, Code2, ShieldCheck, TrendingUp, Rocket } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

interface Section {
  section: string;
  title?: string;
  description?: string;
  main?: string;
  topRight?: string;
  bottomLeft?: string;
  items?: ServiceItem[];
  steps?: string[];
  icon?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Smartphone,
  Code2,
  ShieldCheck,
  TrendingUp,
  Rocket
};

export default function MobileAppServices() {
  const [data, setData] = useState<Section[]>([]);

  useEffect(() => {
    fetch("/data/mobileServices.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching mobileServices.json:", err));
  }, []);

  if (!data.length) return <p className="text-white text-center py-20">Loading...</p>;

  const hero = data.find((d) => d.section === "hero");
  const images = data.find((d) => d.section === "images");
  const why = data.find((d) => d.section === "why");
  const services = data.find((d) => d.section === "services")?.items || [];
  const process = data.find((d) => d.section === "process");
  const cta = data.find((d) => d.section === "cta");

  return (
    <section className="w-full bg-transparent text-white py-20 px-6 md:px-16">
      {/* Hero */}
      {hero && (
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{hero.title}</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">{hero.description}</p>
        </div>
      )}

      {/* Images */}
      {images && (
        <div className="relative flex items-center justify-center mb-20">
          <div className="relative w-[450px] md:w-[600px] h-auto">
            <Image src={images.main!} alt="Main Mobile App" width={600} height={400} className="w-full h-auto rounded-xl shadow-2xl" priority />
            <Image src={images.topRight!} alt="Top Right" width={160} height={160} className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-32 md:w-40 rounded-lg shadow-lg" />
            <Image src={images.bottomLeft!} alt="Bottom Left" width={160} height={160} className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-32 md:w-40 rounded-lg shadow-lg" />
          </div>
        </div>
      )}

      {/* Why */}
      {why && (
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-white mb-4">{why.title}</h3>
          <p className="text-gray-300 text-lg">{why.description}</p>
        </div>
      )}

      {/* Services */}
      {services.length > 0 && (
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-white mb-4">Our Services</h3>
          <ul className="grid gap-8 md:grid-cols-2">
            {services.map((item, idx) => {
              const Icon = iconMap[item.icon] || Smartphone;
              return (
                <li key={idx} className="bg-[#16132d] p-6 rounded-xl shadow-md">
                  <div className="flex items-center gap-4 mb-2">
                    <Icon className="text-white" />
                    <h4 className="text-xl font-bold">{item.title}</h4>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Process */}
      {process && (
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-white mb-4">{process.title}</h3>
          <p className="text-gray-300 text-lg mb-6">{process.description}</p>
          <ol className="space-y-4 list-decimal list-inside text-gray-300">
            {process.steps?.map((step, i) => (
              <li key={i}>
                <strong className="text-white">{step.split(":")[0]}:</strong> {step.split(":")[1]}
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* CTA */}
      {cta && (
        <div className="text-center mt-12">
          {cta.icon && React.createElement(iconMap[cta.icon], { className: "mx-auto text-white mb-4", size: 48 })}
          <h3 className="text-3xl font-bold text-white mb-2">{cta.title}</h3>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">{cta.description}</p>
        </div>
      )}
    </section>
  );
}
