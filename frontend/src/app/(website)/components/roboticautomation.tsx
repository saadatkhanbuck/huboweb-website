"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Zap, Cpu, ShieldCheck, Workflow, CheckCircle, HelpCircle } from "lucide-react";

interface TaskSection {
  section: string;
  title?: string;
  description?: string;
  points?: string[];
  tasks?: string[];
  steps?: string[];
  items?: { text: string; author?: string; q?: string; a?: string }[];
  images?: { main?: string; topLeft?: string; bottomRight?: string };
}

export default function RoboticAutomation() {
  const [data, setData] = useState<TaskSection[]>([]);

  useEffect(() => {
    fetch("/data/roboticAutomation.json")
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error("Error fetching roboticAutomation.json:", err));
  }, []);

  if (!data.length) return <p className="text-white text-center py-20">Loading...</p>;

  const intro = data.find(d => d.section === "intro");
  const benefits = data.find(d => d.section === "benefits");
  const automation = data.find(d => d.section === "automation");
  const process = data.find(d => d.section === "process");
  const testimonials = data.find(d => d.section === "testimonials")?.items;
  const faq = data.find(d => d.section === "faq")?.items;
  const cta = data.find(d => d.section === "cta");

  return (
    <section className="w-full bg-transparent text-white py-20 px-4 md:px-10 space-y-20">
      {/* Intro */}
      {intro && (
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
          <div className="md:w-1/2 text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">{intro.title}</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl">{intro.description}</p>
          </div>
          {intro.images && (
            <div className="relative md:w-1/2 flex items-center justify-center">
              <Image src={intro.images.main!} alt="RPA Main" width={450} height={350} className="w-[350px] md:w-[450px] rounded-xl shadow-2xl" priority />
              <Image src={intro.images.topLeft!} alt="RPA Small 1" width={128} height={128} className="absolute top-[-30px] left-[10%] w-24 md:w-32 rounded-lg shadow-lg rotate-[-6deg]" />
              <Image src={intro.images.bottomRight!} alt="RPA Small 2" width={128} height={128} className="absolute bottom-[-30px] right-[10%] w-24 md:w-32 rounded-lg shadow-lg rotate-[8deg]" />
            </div>
          )}
        </div>
      )}

      {/* Benefits */}
      {benefits && (
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white">{benefits.title}</h3>
          <ul className="grid gap-6 md:grid-cols-2 text-gray-300">
            {benefits.points?.map((p, i) => (
              <li key={i} className="flex gap-4">
                {i === 0 ? <Zap className="text-white" /> :
                 i === 1 ? <Cpu className="text-white" /> :
                 i === 2 ? <ShieldCheck className="text-white" /> :
                 <Workflow className="text-white" />}
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Automation Tasks */}
      {automation && (
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white">{automation.title}</h3>
          <p className="text-gray-300">{automation.description}</p>
          <ul className="grid gap-4 md:grid-cols-2 text-gray-300">
            {automation.tasks?.map((t, i) => (
              <li key={i} className="flex gap-4">
                <CheckCircle className="text-white" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Process */}
      {process && (
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white">{process.title}</h3>
          <ol className="list-decimal ml-6 text-gray-300 space-y-2">
            {process.steps?.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        </div>
      )}

      {/* Testimonials */}
      {testimonials?.length && (
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white">{data.find(d => d.section === "testimonials")?.title}</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300">{t.text}</p>
                <p className="text-white mt-2 font-semibold">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQ */}
      {faq?.length && (
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white">{data.find(d => d.section === "faq")?.title}</h3>
          <div className="space-y-4 text-gray-300">
            {faq.map((f, i) => (
              <div key={i}>
                <h4 className="flex gap-2 items-center font-semibold text-white">
                  <HelpCircle className="w-5 h-5" /> {f.q}
                </h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      {cta && (
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold text-white">{cta.title}</h3>
          <p className="text-gray-300">{cta.description}</p>
        </div>
      )}
    </section>
  );
}
