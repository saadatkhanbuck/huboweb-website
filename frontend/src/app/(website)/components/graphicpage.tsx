"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircle, Star, PenTool, BadgePercent, Instagram, FileText, LayoutTemplate, Contact2 } from "lucide-react";

interface ServiceItem {
  title: string;
  desc: string;
  icon: string;
}

interface FAQItem {
  q: string;
  a: string;
}

interface Testimonial {
  text: string;
  author: string;
}

interface Section {
  section: string;
  title?: string;
  description?: string;
  points?: string[];
  items?: ServiceItem[] | Testimonial[] | FAQItem[];
  steps?: string[];
  image?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  PenTool,
  BadgePercent,
  Instagram,
  FileText,
  LayoutTemplate,
  Contact2
};

export default function GraphicPage() {
  const [data, setData] = useState<Section[]>([]);

  useEffect(() => {
    fetch("/data/graphicServices.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching graphicServices.json:", err));
  }, []);

  if (!data.length) return <p className="text-white text-center py-20">Loading...</p>;

  const why = data.find(d => d.section === "why");
  const services = data.find(d => d.section === "services")?.items as ServiceItem[];
  const process = data.find(d => d.section === "process");
  const testimonials = data.find(d => d.section === "testimonials")?.items as Testimonial[];
  const faq = data.find(d => d.section === "faq")?.items as FAQItem[];
  const cta = data.find(d => d.section === "cta");

  return (
    <section className="w-full bg-transparent text-white px-6 md:px-16 py-20 space-y-24">
      {/* Why Choose Us */}
      {why && (
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{why.title}</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <p className="text-lg text-gray-300 max-w-3xl mb-6">{why.description}</p>
              <ul className="space-y-4 text-gray-200">
                {why.points?.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-white mt-1" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            {why.image && (
              <div className="flex-1">
                <Image src={why.image} alt="Why Choose Us" width={600} height={400} className="rounded-xl object-cover" />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Services */}
      {services?.length > 0 && (
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {data.find(d => d.section === "services")?.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, i) => {
              const Icon = iconMap[item.icon] || PenTool;
              return (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3 hover:border-yellow-400 transition">
                  <Icon className="text-white w-8 h-8" />
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Process */}
      {process && (
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{process.title}</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <ol className="space-y-6 border-l-2 border-yellow-400 pl-6">
                {process.steps?.map((step, i) => (
                  <li key={i} className="relative">
                    <span className="absolute -left-4 top-1.5 w-3 h-3 bg-gradient-to-r from-blue-900 to-gray-900 rounded-full" />
                    <h4 className="text-lg font-semibold text-white">{step}</h4>
                  </li>
                ))}
              </ol>
            </div>
            {process.image && (
              <div className="flex-1">
                <Image src={process.image} alt="Design Process" width={600} height={400} className="rounded-xl object-cover" />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Testimonials */}
      {testimonials?.length > 0 && (
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
            {data.find(d => d.section === "testimonials")?.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-4">
                <div className="flex gap-2">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 text-white" />)}</div>
                <p className="text-gray-300">{t.text}</p>
                <p className="text-white font-semibold">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQ */}
      {faq?.length > 0 && (
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {data.find(d => d.section === "faq")?.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faq.map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-5 space-y-2">
                <h4 className="font-semibold text-white">{item.q}</h4>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      {cta && (
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{cta.title}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">{cta.description}</p>
          {cta.image && <Image src={cta.image} alt="Call to Action" width={500} height={300} className="mx-auto rounded-xl mb-6" />}
        </div>
      )}
    </section>
  );
}
