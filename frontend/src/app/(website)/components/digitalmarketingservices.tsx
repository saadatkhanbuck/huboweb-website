"use client";

import React, { useEffect, useState } from "react";
import {
  Search,
  LineChart,
  MailCheck,
  Users,
  Share2,
  Globe2,
  BarChart2
} from "lucide-react";

interface Service {
  icon: string;
  title: string;
  desc: string;
}

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search size={32} />,
  LineChart: <LineChart size={32} />,
  MailCheck: <MailCheck size={32} />,
  Users: <Users size={32} />,
  Share2: <Share2 size={32} />,
  Globe2: <Globe2 size={32} />,
  BarChart2: <BarChart2 size={32} />
};

export default function DigitalMarketingServices() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("/data/digitalMarketing.json")
      .then(res => res.json())
      .then(json => setServices(json))
      .catch(err => console.error("Error fetching digitalMarketing.json:", err));
  }, []);

  if (!services.length) return <p className="text-white text-center py-20">Loading...</p>;

  return (
    <section className="w-full bg-transparent py-20 px-4 md:px-12 text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Digital Marketing Services
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Boost your online presence and reach your business goals with our
            full suite of digital marketing services tailored for your brand.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-[#0f0b2b] border border-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-yellow-500/10 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4 text-white">
                {iconMap[item.icon]}{" "}
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
