"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Code2,
  Smartphone,
  Rocket,
  Wrench,
  SearchCheck
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Code2,
  Smartphone,
  Rocket,
  Wrench,
  SearchCheck
};

export default function WebDevServices() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch("/data/web.json")
      .then((res) => res.json())
      .then((data: Service[]) => setServices(data))
      .catch((err) => console.error("Error fetching web.json:", err));
  }, []);

  if (!services.length)
    return <p className="text-white text-center py-20">Loading...</p>;

  return (
    <section className="w-full bg-transparent text-white py-20 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Web Design & Development Services
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We offer a complete suite of services to bring your website or app to
          life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || Smartphone;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-[#0e0b2a] border border-gray-800 rounded-2xl p-6 shadow-md hover:shadow-yellow-500/20 transition-shadow"
            >
              <div className="mb-4">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
