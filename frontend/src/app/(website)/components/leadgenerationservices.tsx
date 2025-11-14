"use client";

import {
  Rocket,
  Target,
  Users,
  MailCheck
} from "lucide-react";
import Image from "next/image";

export default function LeadGenerationServices() {
  return (
    <section className="w-full bg-transparent text-white py-20 px-4 md:px-16 space-y-24">
      {/* Section: Introduction */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-40">
        {/* Image Section */}
        <div className="relative md:w-1/2 flex items-center justify-center">
          {/* Main Large Image */}
          <Image
            src="/img/lead.jpg"
            alt="Lead Main"
            width={450}
            height={350}
            className="w-[350px] md:w-[450px] rounded-xl shadow-2xl"
          />

          {/* Small Image Top Right */}
          <Image
            src="/img/lead1.webp"
            alt="Lead Small 1"
            width={128}
            height={128}
            className="absolute top-[-30px] right-[10%] w-24 md:w-32 rounded-lg shadow-lg rotate-[6deg]"
          />

          {/* Small Image Bottom Left */}
          <Image
            src="/img/lead2.jpg"
            alt="Lead Small 2"
            width={128}
            height={128}
            className="absolute bottom-[-30px] left-[10%] w-24 md:w-32 rounded-lg shadow-lg rotate-[-8deg]"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Lead Generation Services
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl">
            Supercharge your business with high-quality leads tailored to your
            audience. Our lead generation service helps you connect with
            potential customers who are already interested in what you offer,
            turning prospects into loyal clients.
          </p>
        </div>
      </div>

      {/* Section: Why Lead Generation */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-white">
            Why Lead Generation is Crucial
          </h3>
          <p className="text-gray-300">
            In today’s competitive market, attracting new customers is more
            challenging than ever. Lead generation bridges the gap between
            consumer interest and actual sales by identifying and nurturing
            interested prospects, giving your sales team a significant
            advantage. We focus on quality over quantity, ensuring you receive
            leads that convert.
          </p>
        </div>
        <div className="bg-[#1a1f3c] p-6 rounded-xl shadow-md">
          <Rocket className="text-white w-12 h-12 mb-4" />
          <h4 className="text-xl font-semibold text-white">
            Boost Conversions
          </h4>
          <p className="text-gray-400 mt-2">
            Receive leads that are primed to convert through targeted strategies
            and analytics.
          </p>
        </div>
      </div>

      {/* Section: Our Approach */}
      <div className="space-y-6">
        <h3 className="text-3xl font-semibold text-white text-center">
          Our Lead Generation Approach
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1a1f3c] p-6 rounded-xl">
            <Target className="text-white w-10 h-10 mb-3" />
            <h4 className="text-xl font-semibold text-white">
              Targeted Campaigns
            </h4>
            <p className="text-gray-400">
              We design custom strategies based on your audience demographics,
              interests, and buying behavior.
            </p>
          </div>
          <div className="bg-[#1a1f3c] p-6 rounded-xl">
            <Users className="text-white w-10 h-10 mb-3" />
            <h4 className="text-xl font-semibold text-white">
              Data-Driven Insights
            </h4>
            <p className="text-gray-400">
              Leverage analytics and reporting tools to measure performance and
              adjust tactics in real time.
            </p>
          </div>
          <div className="bg-[#1a1f3c] p-6 rounded-xl">
            <MailCheck className="text-white w-10 h-10 mb-3" />
            <h4 className="text-xl font-semibold text-white">
              Email & Outreach Automation
            </h4>
            <p className="text-gray-400">
              Reach out at scale with personalized, automated email and
              follow-up sequences that convert.
            </p>
          </div>
        </div>
      </div>

      {/* Section: Success Metrics */}
      <div className="space-y-6">
        <h3 className="text-3xl font-semibold text-white text-center">
          Success Metrics We Track
        </h3>
        <ul className="text-gray-300 list-disc pl-6 max-w-3xl mx-auto">
          <li className="mb-2">Lead conversion rate</li>
          <li className="mb-2">Cost per lead (CPL)</li>
          <li className="mb-2">Time to conversion</li>
          <li className="mb-2">Lead quality scoring</li>
          <li className="mb-2">Customer lifetime value (CLV)</li>
        </ul>
      </div>

      {/* Section: Testimonials */}
      <div className="space-y-6">
        <h3 className="text-3xl font-semibold text-white text-center">
          What Our Clients Say
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1a1f3c] p-6 rounded-xl">
            <p className="text-gray-300 italic">
              “We’ve doubled our qualified leads thanks to their expert
              campaigns. Their team is responsive, smart, and results-driven.”
            </p>
            <p className="text-white mt-4 font-semibold">
              — Ayesha Tariq, Growth Manager
            </p>
          </div>
          <div className="bg-[#1a1f3c] p-6 rounded-xl">
            <p className="text-gray-300 italic">
              “Their lead generation service gave our sales pipeline the fuel it
              needed. Absolutely recommended!”
            </p>
            <p className="text-white mt-4 font-semibold">
              — Hamza Sheikh, Co-founder
            </p>
          </div>
        </div>
      </div>

      {/* Section: Call to Action */}
      <div className="text-center space-y-4 mt-16">
        <h3 className="text-3xl font-semibold text-white">
          Ready to Attract More Leads?
        </h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Start converting interest into revenue. Let our expert team design a
          lead generation funnel that works for your unique audience.
        </p>
        
      </div>
    </section>
  );
}