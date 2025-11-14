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
  Linkedin
} from "lucide-react";
import Image from "next/image";
import React from "react";


export default function akhtar() {
  return (
    <main className="relative min-h-screen text-white bg-transparent">
      {/* 🔳 Hero Section With Right Side Large Image */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row">
        {/* LEFT: Info Area */}
        <div className="w-full md:w-1/2 flex items-center justify-start px-8 py-10 bg-transparent">
          <div className="max-w-2xl w-full">
            <h1 className="text-5xl font-bold text-white mb-4">
              Akhtar Abbas
            </h1>

            {/* 🔗 Social Media Icons */}
            <div className="flex gap-4 mb-8">
              
              <a
                href="https://www.facebook.com/AkhtarAbbas2004?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  size={22}
                  className="text-blue-600 hover:text-blue-700"
                />
              </a>
              <a
                href="https://www.instagram.com/akhtarabbas909/?igsh=M2Jxa3VwMnBsdDhu#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  size={22}
                  className="text-pink-500 hover:text-pink-600"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/akhtarabbas909?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={22}
                  className="text-blue-500 hover:text-blue-600"
                />
              </a>
            </div>

            {/* Small image + Info */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Small image */}
              {/* <div className="w-[180px] h-[220px] relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/img/akhtar.jpg"
                  alt="akhtar Portrait"
                  layout="fill"
                  objectFit="cover"
                />
              </div> */}

              {/* Info List with Icons */}
              <div className="grid grid-cols-1 gap-3 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <Cake size={18} className="text-white" /> Birthday: October 19, 1990
                  
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-white" /> Age: 35
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-white" /> +92 3214829814
                  
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-white" />{" "}
                  akhtar.abbas@huboweb.com
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-white" /> Lahore,
                  Pakistan
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-white" />
                  Chief Technical Officer (CTO)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Full-Height Image */}
        <div className="w-full md:w-1/2 mt-20 mx-15 relative min-h-[80vh]">
          <Image
            src="/img/dummy-profile-pic.jpg"
            alt="Right Side Image"
            fill
            className="object-cover rounded rounded-2xl mt-10"
          />
        </div>
      </section>

      {/* 🔽 About Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-white">
          About Akhtar Abbas
        </h2>
        <p className="mb-6 leading-relaxed text-gray-300">
          Akhtar Abbas is an accomplished business strategist and operations
          leader. With over a decade of experience in management consulting and
          corporate development, Akhtar brings deep insight into business
          transformation.
        </p>
        <p className="mb-6 leading-relaxed text-gray-300">
          Known for his analytical mindset and people-first leadership, akhtar
          has led cross-functional teams in executing large-scale operational
          strategies. He thrives in high-pressure environments and believes in
          leading by example.
        </p>
        <p className="leading-relaxed text-gray-300">
          When not immersed in strategy sessions, akhtar enjoys hiking, reading
          history, and mentoring young professionals in the business field.
        </p>
      </section>
      
    </main>
  );
}
