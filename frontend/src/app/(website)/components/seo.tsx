"use client";

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

export default function Seo() {
  const tools = [
    { icon: <BarChart2 size={48} />, name: "SEMRush" },
    { icon: <Search size={48} />, name: "Ahrefs" },
    { icon: <LineChart size={48} />, name: "Google Console" },
    { icon: <Gauge size={48} />, name: "Moz" },
    { icon: <Settings2 size={48} />, name: "Yoast" },
    { icon: <Eye size={48} />, name: "Screaming Frog" }
  ];

  return (
    <section className="w-full bg-transparent text-white py-20 px-6 md:px-16 space-y-24">
      {/* Heading */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          SEO Optimization Services
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          We help you dominate search engine rankings and drive more traffic
          through result-driven SEO strategies.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            icon: <Search />,
            title: "On-Page SEO",
            desc: "Optimize your website's content, HTML, and meta tags to improve visibility."
          },
          {
            icon: <TrendingUp />,
            title: "Off-Page SEO",
            desc: "Build authority through quality backlinks and social signals."
          },
          {
            icon: <LineChart />,
            title: "Technical SEO",
            desc: "Improve site speed, crawlability, and structure for better indexing."
          },
          {
            icon: <BarChart3 />,
            title: "Keyword Research",
            desc: "Find and target the right keywords that bring the most value."
          },
          {
            icon: <Rocket />,
            title: "Site Audit",
            desc: "Identify and fix SEO issues with comprehensive audits."
          },
          {
            icon: <Globe2 />,
            title: "Local SEO",
            desc: "Boost visibility in local searches and maps for nearby customers."
          }
        ].map((service, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-2xl p-6 hover:scale-[1.02] transition-transform border border-gray-700"
          >
            <div className="text-white mb-4 text-3xl">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* SEO Workflow Process */}
      <div className="space-y-10">
        <h2 className="text-3xl font-bold text-white text-center">
          Our SEO Workflow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: "Audit & Analysis", image: "/img/dashboard.jpg" },
            { title: "Keyword Research", image: "/img/dashboard2.jpg" },
            {
              title: "Implementation",
              image: "/img/Online-Complaint-Management.png"
            },
            { title: "Monitoring & Reporting", image: "/img/6596cd6c691be.jpg" }
          ].map((step, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md"
            >
              <Image
                src={step.image}
                alt={step.title}
                width={500}
                height={300}
                className="w-full h-44 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-white text-lg font-semibold">
                  {step.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools We Use */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-white text-center">
          Powerful Tools We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-white hover:text-white transition duration-300"
            >
              <div className="grayscale hover:grayscale-0 transition duration-300">
                {tool.icon}
              </div>
              <span className="mt-2 text-sm">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SEO Results */}
      <div className="space-y-10">
        <h2 className="text-3xl font-bold text-white text-center">
          SEO Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { stat: "+250%", label: "Organic Traffic Growth" },
            { stat: "#1", label: "Ranked Keywords" },
            { stat: "+10k", label: "Monthly Visitors" }
          ].map((item, i) => (
            <div key={i} className="bg-gray-800 rounded-2xl p-8 text-center">
              <h3 className="text-4xl text-white font-extrabold">
                {item.stat}
              </h3>
              <p className="text-gray-300 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-10">
        <h2 className="text-3xl font-bold text-white text-center">SEO FAQs</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              q: "How long does SEO take?",
              a: "Usually 3-6 months to see noticeable improvements, depending on your site's age and competition."
            },
            {
              q: "What is included in SEO?",
              a: "On-page optimization, keyword research, link building, performance tracking, and regular reporting."
            },
            {
              q: "Do you offer local SEO?",
              a: "Yes, we help businesses rank on Google Maps and attract nearby customers."
            },
            {
              q: "Can you guarantee #1 rankings?",
              a: "No one can guarantee rankings, but we follow best practices that increase your chances significantly."
            }
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <h4 className="text-lg text-white font-semibold mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5" /> {faq.q}
              </h4>
              <p className="text-gray-300 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

     ...
      {/* Final CTA */}
      <div className="text-center space-y-6 mt-16">
        <h2 className="text-4xl font-bold text-white">Ready to Rank Higher?</h2>
        <p className="text-lg text-gray-300 max-w-xl mx-auto">
          Let&apos;s talk about how we can help you dominate search results and grow
          your business.
        </p>
        
      </div>
    </section>
  );
}
