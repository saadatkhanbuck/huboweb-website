"use client";

import Image from "next/image";
import { CheckCircle, Star } from "lucide-react";
import {
  PenTool,
  BadgePercent,
  Instagram,
  FileText,
  LayoutTemplate,
  Contact2
} from "lucide-react";

export default function GraphicPage() {
  return (
    <section className="w-full bg-transparent text-white px-6 md:px-16 py-20 space-y-24">
      {/* Why Choose Us */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Why Choose Our Graphic Design Services
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <p className="text-lg text-gray-300 max-w-3xl mb-6">
              At our software house, we don&apos;t just design — we tell your brand&apos;s
              story through stunning visuals. With a team of seasoned graphic
              designers, we ensure every design is modern, brand-focused, and
              conversion-optimized.
            </p>
            <ul className="space-y-4 text-gray-200">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1" />
                Innovative & Custom Designs Tailored to Your Brand
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1" />
                Unlimited Revisions Until You&apos;re Satisfied
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-white mt-1" />
                Fast Turnaround Time with Quality Assurance
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <Image
              src="/img/tech.jpg"
              alt="Why Choose Us"
              width={600}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Services We Offer */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Logo Design",
              desc: "Unique, timeless logos that reflect your brand identity.",
              icon: PenTool
            },
            {
              title: "Branding & Identity",
              desc: "Full brand kits with color palettes, typography, and brand guidelines.",
              icon: BadgePercent
            },
            {
              title: "Social Media Posts",
              desc: "Eye-catching designs for all platforms to boost your online presence.",
              icon: Instagram
            },
            {
              title: "Brochures & Flyers",
              desc: "Creative and informative designs for marketing materials.",
              icon: FileText
            },
            {
              title: "Posters & Banners",
              desc: "Large-scale visuals optimized for both digital and print use.",
              icon: LayoutTemplate
            },
            {
              title: "Business Cards",
              desc: "Professional, clean, and impactful business card designs.",
              icon: Contact2
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3 hover:border-yellow-400 transition"
            >
              <item.icon className="text-white w-8 h-8" />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Design Process */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our Design Process
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <ol className="space-y-6 border-l-2 border-yellow-400 pl-6">
              {[
                "Requirement Gathering",
                "Research & Moodboard",
                "Concept Sketches",
                "Design Execution",
                "Feedback & Revisions",
                "Final Delivery"
              ].map((step, index) => (
                <li key={index} className="relative">
                  <span className="absolute -left-4 top-1.5 w-3 h-3 bg-gradient-to-r from-blue-900 to-gray-900 rounded-full" />
                  <h4 className="text-lg font-semibold text-white">{step}</h4>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex-1">
            <Image
              src="/img/tech1.jpg"
              alt="Design Process"
              width={600}
              height={400}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((id) => (
            <div
              key={id}
              className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-4"
            >
              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-white" />
                ))}
              </div>
              <p className="text-gray-300">
                “The team delivered exactly what I envisioned. Their designs are
                clean, professional, and aligned perfectly with my brand!”
              </p>
              <p className="text-white font-semibold">— Sarah Malik</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-5 space-y-2">
            <h4 className="font-semibold text-white">
              How many revisions are included?
            </h4>
            <p className="text-gray-300">
              We offer unlimited revisions until you&apos;re fully satisfied with the
              final design.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-5 space-y-2">
            <h4 className="font-semibold text-white">
              Do you provide source files?
            </h4>
            <p className="text-gray-300">
              Yes, we provide all editable source files in formats like AI, PSD,
              or Figma.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-5 space-y-2">
            <h4 className="font-semibold text-white">
              How long does it take to deliver?
            </h4>
            <p className="text-gray-300">
              Turnaround time varies based on complexity but typically ranges
              from 2 to 5 business days.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          Let our creative team turn your vision into a visual masterpiece. Get
          in touch today and experience design excellence.
        </p>
        <Image
          src="/img/tech3.jpg"
          alt="Call to Action"
          width={500}
          height={300}
          className="mx-auto rounded-xl mb-6"
        />
        
      </div>
    </section>
  );
}