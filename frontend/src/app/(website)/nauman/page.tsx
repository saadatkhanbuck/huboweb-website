"use client";

import {
  Cake,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Calendar,
  Facebook,
  Instagram
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface NumanData {
  name: string;
  socialLinks: {
    facebook: string;
    instagram: string;
  };
  details: {
    birthday: string;
    age: number;
    phone: string;
    email: string;
    address: string;
    position: string;
  };
  profileImage: string;
  about: string[];
}

export default function Nauman() {
  const [data, setData] = useState<NumanData | null>(null);

  useEffect(() => {
    fetch("/data/nauman.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error loading nauman.json:", err));
  }, []);

  if (!data) return <p className="text-white p-10">Loading…</p>;

  return (
    <main className="relative min-h-screen text-white bg-transparent">
      <section className="relative min-h-[90vh] flex flex-col md:flex-row">
        {/* LEFT */}
        <div className="w-full md:w-1/2 flex items-center px-8 py-10">
          <div className="max-w-2xl w-full">
            <h1 className="text-5xl font-bold mb-4">{data.name}</h1>

            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a href={data.socialLinks.facebook} target="_blank">
                <Facebook size={22} className="text-blue-600 hover:text-blue-700" />
              </a>
              <a href={data.socialLinks.instagram} target="_blank">
                <Instagram size={22} className="text-pink-500 hover:text-pink-600" />
              </a>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 gap-3 text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <Cake size={18} /> Birthday: {data.details.birthday}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} /> Age: {data.details.age}
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} /> {data.details.phone}
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} /> {data.details.email}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} /> {data.details.address}
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={18} /> {data.details.position}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 mt-20 relative min-h-[95vh]">
          <Image
            src={data.profileImage}
            alt={data.name}
            fill
            className="object-cover rounded-2xl mt-10"
          />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">About {data.name}</h2>
        {data.about.map((paragraph, index) => (
          <p key={index} className="mb-6 leading-relaxed text-gray-300">
            {paragraph}
          </p>
        ))}
      </section>
    </main>
  );
}
