"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  BarChart3,
  Search,
  TrendingUp,
  LineChart,
  Rocket,
  Globe2,
  HelpCircle,
  BarChart2,
  Gauge,
  Settings2,
  Eye
} from "lucide-react";

interface Service { icon: string; title: string; desc: string; }
interface WorkflowStep { title: string; image: string; }
interface Tool { icon: string; name: string; }
interface Result { stat: string; label: string; }
interface Faq { q: string; a: string; }

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 />,
  Search: <Search />,
  TrendingUp: <TrendingUp />,
  LineChart: <LineChart />,
  Rocket: <Rocket />,
  Globe2: <Globe2 />,
  BarChart2: <BarChart2 />,
  Gauge: <Gauge />,
  Settings2: <Settings2 />,
  Eye: <Eye />
};

export default function Seo() {
  const [data, setData] = useState<{
    services: Service[];
    workflow: WorkflowStep[];
    tools: Tool[];
    results: Result[];
    faqs: Faq[];
  } | null>(null);

  useEffect(() => {
    fetch("/data/seo.json")
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
  }, []);

  if (!data) return <p className="text-white text-center py-20">Loading...</p>;

  return (
    <section className="w-full bg-transparent text-white py-20 px-6 md:px-16 space-y-24">
      {/* Heading */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white">SEO Optimization Services</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          We help you dominate search engine rankings and drive more traffic through result-driven SEO strategies.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {data.services.map((service, i) => (
          <div key={i} className="bg-gray-800 rounded-2xl p-6 hover:scale-[1.02] transition-transform border border-gray-700">
            <div className="text-white mb-4 text-3xl">{iconMap[service.icon]}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
            <p className="text-gray-300 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Workflow */}
      <div className="space-y-10">
        <h2 className="text-3xl font-bold text-white text-center">Our SEO Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {data.workflow.map((step, i) => (
            <div key={i} className="bg-gray-800 rounded-xl overflow-hidden shadow-md">
              <Image src={step.image} alt={step.title} width={500} height={300} className="w-full h-44 object-cover" />
              <div className="p-4 text-center">
                <h4 className="text-white text-lg font-semibold">{step.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-white text-center">Powerful Tools We Use</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {data.tools.map((tool, i) => (
            <div key={i} className="flex flex-col items-center text-white hover:text-white transition duration-300">
              <div className="grayscale hover:grayscale-0 transition duration-300">{iconMap[tool.icon]}</div>
              <span className="mt-2 text-sm">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-10">
        <h2 className="text-3xl font-bold text-white text-center">SEO Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {data.results.map((item, i) => (
            <div key={i} className="bg-gray-800 rounded-2xl p-8 text-center">
              <h3 className="text-4xl text-white font-extrabold">{item.stat}</h3>
              <p className="text-gray-300 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-10">
        <h2 className="text-3xl font-bold text-white text-center">SEO FAQs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {data.faqs.map((faq, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h4 className="text-lg text-white font-semibold mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5" /> {faq.q}
              </h4>
              <p className="text-gray-300 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
