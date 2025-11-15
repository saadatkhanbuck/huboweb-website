"use client";

import React, { useEffect, useState } from "react";
import {
  Workflow,
  Bot,
  DatabaseZap,
  UserCheck,
  ShieldCheck,
  Zap,
  Star
} from "lucide-react";

interface WhyCrm {
  title: string;
  description: string;
  points: string[];
}

interface WhatWeAutomate {
  title: string;
  desc: string;
  icon: string;
}

interface Faq {
  q: string;
  a: string;
}

interface CrmData {
  whyCrm: WhyCrm;
  whatWeAutomate: WhatWeAutomate[];
  implementationProcess: string[];
  faqs: Faq[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string; w?: number; h?: number }>> = {
  Workflow,
  Bot,
  DatabaseZap,
  UserCheck,
  ShieldCheck,
  Zap
};

export default function CrmAutomationService() {
  const [crmData, setCrmData] = useState<CrmData | null>(null);

  useEffect(() => {
    fetch("/data/crm.json")
      .then((res) => res.json())
      .then((data: CrmData) => setCrmData(data))
      .catch((err) => console.error("Error fetching CRM data:", err));
  }, []);

  if (!crmData) return <p className="text-white text-center py-20">Loading...</p>;

  return (
    <section className="w-full bg-transparent text-white px-6 md:px-16 py-20 space-y-28">
      {/* Why CRM Automation */}
      <div className="bg-gradient-to-r from-[#0e162e] to-[#1f2a48] rounded-2xl p-10 shadow-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          {crmData.whyCrm.title}
        </h2>
        <p className="text-lg text-gray-300 max-w-5xl mb-6">{crmData.whyCrm.description}</p>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-200">
          {crmData.whyCrm.points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <Zap className="text-white mt-1" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* What We Automate */}
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10">What We Automate</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {crmData.whatWeAutomate.map((item, i) => {
            const Icon = iconMap[item.icon] || Workflow;
            return (
              <div key={i} className="bg-[#121b35] rounded-xl p-6 border border-white/10 hover:border-cyan-400 transition">
                <div className="mb-3">
                  <Icon className="text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CRM Implementation Process */}
      <div className="bg-[#121b35] p-10 rounded-2xl border border-white/10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Our CRM Implementation Process</h2>
        <div className="space-y-8">
          {crmData.implementationProcess.map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-900 to-gray-900 text-black font-bold">
                {i + 1}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">{step}</h4>
                <p className="text-gray-300">
                  Detailed explanation and real-world benefits of the step, demonstrating transparency and client confidence in every phase.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {crmData.faqs.map((faq, i) => (
            <div key={i} className="bg-[#121b35] border border-white/10 rounded-lg p-5">
              <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
              <p className="text-gray-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Ready to Automate Your CRM?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          Let us help you build an efficient, scalable, and intelligent CRM system tailored to your business needs.
        </p>
      </div>
    </section>
  );
}
