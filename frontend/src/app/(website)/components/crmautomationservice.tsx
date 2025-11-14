"use client";

import {
  Workflow,
  Bot,
  DatabaseZap,
  UserCheck,
  ShieldCheck,
  Zap,
  Star
} from "lucide-react";

export default function CrmAutomationService() {
  return (
    <section className="w-full bg-transparent text-white px-6 md:px-16 py-20 space-y-28">
      {/* Why CRM Automation? */}
      <div className="bg-gradient-to-r from-[#0e162e] to-[#1f2a48] rounded-2xl p-10 shadow-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Why CRM Automation Matters
        </h2>
        <p className="text-lg text-gray-300 max-w-5xl mb-6">
          In today&apos;s digital landscape, manually managing customer relationships
          is inefficient and risky. CRM Automation streamlines your workflow,
          ensures data accuracy, boosts productivity, and enhances customer
          satisfaction. Our custom CRM solutions are tailored to automate sales
          pipelines, customer communication, lead tracking, and more — allowing
          your team to focus on what matters most: growing your business.
        </p>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-200">
          <li className="flex items-start gap-3">
            <Zap className="text-white mt-1" />
            Automated lead capturing and segmentation
          </li>
          <li className="flex items-start gap-3">
            <Zap className="text-white mt-1" />
            Real-time performance analytics and insights
          </li>
          <li className="flex items-start gap-3">
            <Zap className="text-white mt-1" />
            Seamless integration with your existing tools
          </li>
          <li className="flex items-start gap-3">
            <Zap className="text-white mt-1" />
            Smart workflows to reduce manual errors
          </li>
        </ul>
      </div>

      {/* What We Automate */}
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10">
          What We Automate
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {[
            {
              icon: <Workflow className="text-white w-6 h-6" />,
              title: "Sales Pipeline Automation",
              desc: "Streamline your entire sales funnel from lead capture to deal closure."
            },
            {
              icon: <Bot className="text-white w-6 h-6" />,
              title: "Chatbot & Communication",
              desc: "Engage customers with AI-driven responses, auto-emails, and notifications."
            },
            {
              icon: <DatabaseZap className="text-white w-6 h-6" />,
              title: "Data Sync & Management",
              desc: "Ensure all customer data is accurate, updated, and stored securely."
            },
            {
              icon: <UserCheck className="text-white w-6 h-6" />,
              title: "Lead Qualification",
              desc: "Filter and score leads based on engagement and behavior."
            },
            {
              icon: <ShieldCheck className="text-white w-6 h-6" />,
              title: "Security & Compliance",
              desc: "Implement data policies that keep you compliant with industry regulations."
            },
            {
              icon: <Zap className="text-white w-6 h-6" />,
              title: "Workflow Triggers",
              desc: "Trigger actions like follow-ups, escalations, or status changes automatically."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#121b35] rounded-xl p-6 border border-white/10 hover:border-cyan-400 transition"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our CRM Implementation Process */}
      <div className="bg-[#121b35] p-10 rounded-2xl border border-white/10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Our CRM Implementation Process
        </h2>
        <div className="space-y-8">
          {[
            "Business Requirements Analysis",
            "CRM Tool Selection & Planning",
            "Workflow Design & Automation Setup",
            "Data Migration & Integration",
            "Testing & Staff Training",
            "Ongoing Optimization & Support"
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-900 to-gray-900 text-black font-bold">
                {i + 1}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  {step}
                </h4>
                <p className="text-gray-300">
                  Detailed explanation and real-world benefits of the step,
                  demonstrating transparency and client confidence in every
                  phase.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center">
          What Clients Say About Our CRM Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((id) => (
            <div
              key={id}
              className="bg-[#10182f] border border-white/10 p-6 rounded-2xl space-y-4 shadow-md"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-white" />
                ))}
              </div>
              <p className="text-gray-300">
                “Implementing CRM automation with this team revolutionized our
                operations. We save hours daily and customer satisfaction is at
                an all-time high.”
              </p>
              <p className="text-white font-semibold">— Maria Khan</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "Do you support integrations with tools like HubSpot, Salesforce, or Zoho?",
              a: "Yes, we build custom automations and integrations with major CRM platforms tailored to your workflow."
            },
            {
              q: "Is CRM automation suitable for small businesses?",
              a: "Absolutely. We scale CRM automation solutions according to your team size and growth stage."
            },
            {
              q: "How long does CRM implementation take?",
              a: "It depends on complexity, but typically 2–6 weeks from discovery to deployment."
            }
          ].map(({ q, a }, i) => (
            <div
              key={i}
              className="bg-[#121b35] border border-white/10 rounded-lg p-5"
            >
              <h4 className="font-semibold text-white mb-2">{q}</h4>
              <p className="text-gray-300">{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Ready to Automate Your CRM?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          Let us help you build an efficient, scalable, and intelligent CRM
          system tailored to your business needs.
        </p>
        
      </div>
    </section>
  );
}