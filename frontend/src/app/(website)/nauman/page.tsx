"use client";

import {
  Cake,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Calendar,
  
  Facebook,
  Instagram,
  
} from "lucide-react";
import Image from "next/image";
import React from "react";


export default function Nauman() {
  return (
    <main className="relative min-h-screen text-white bg-transparent">
      {/* 🔳 Hero Section With Right Side Large Image */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row">
        {/* LEFT: Info Area */}
        <div className="w-full md:w-1/2 flex items-center justify-start px-8 py-10 bg-transparent">
          <div className="max-w-2xl w-full">
            <h1 className="text-5xl font-bold text-white mb-4">
              Numan Khan
            </h1>

            {/* 🔗 Social Media Icons */}
            <div className="flex gap-4 mb-8">
             
              <a
                href="https://www.facebook.com/msolonelybrokenangel?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  size={22}
                  className="text-blue-600 hover:text-blue-700"
                />
              </a>
              <a
                href="https://www.instagram.com/m.naumanrana/?igsh=NXBpOWM4bmUwamt5#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  size={22}
                  className="text-pink-500 hover:text-pink-600"
                />
              </a>
              
            </div>

            {/* Small image + Info */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Small image */}
              

              {/* Info List with Icons */}
              <div className="grid grid-cols-1 gap-3 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <Cake size={18} className="text-white" /> Birthday: July 24, 1997
                  
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-white" /> Age: 28
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-white" /> +92 307 6548786
                  
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-white" />{" "}
                  nauman.naeem@huboweb.com
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-white" /> Lahore,
                  Pakistan
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-white" /> Chief Financial Officer (CFO)
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Full-Height Image */}
        <div className="w-full md:w-1/2 mt-20 mx-15 relative min-h-[95vh]">
          <Image
            src="/img/nauman1.jpg"
            alt="Finance Officer Image"
            fill
            className="object-cover rounded rounded-2xl mt-10"
          />
        </div>
      </section>

      {/* 🔽 About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-white">
          About Numan Khan
        </h2>
        <p className="mb-6 leading-relaxed text-gray-300">
          Numan Khan is a seasoned financial strategist and currently serves as
          the Chief Technical Finance Officer of the company. With a strong
          background in corporate finance, investment strategy, and risk
          management, Numan leads our financial planning and ensures long-term
          financial health.
        </p>
        <p className="mb-6 leading-relaxed text-gray-300">
          He has a deep understanding of tech-driven financial solutions,
          digital payment systems, and fintech integration. Numan uses data to
          drive strategic decisions and ensures every financial action supports
          our business vision.
        </p>
        <p className="leading-relaxed text-gray-300">
          He is passionate about leveraging finance for growth, sustainability,
          and innovation. Outside work, Numan participates in finance
          conferences, mentors young analysts, and explores emerging trends in
          decentralized finance (DeFi).
        </p>
      </section>
      
    </main>
  );
}
