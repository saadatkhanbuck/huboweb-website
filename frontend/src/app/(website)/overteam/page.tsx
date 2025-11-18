"use client";

import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { Marquee } from "@/components/magicui/marquee";

interface TeamMember {
  name: string;
  position: string;
  desc: string;
  image: string;
  skills: string[];
}

export default function OverTeamMarquee() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch("/data/overTeam.json")
      .then((res) => res.json())
      .then((data) => setTeamMembers(data))
      .catch((err) => console.error("Failed to load team data:", err));
  }, []);

  return (
    <section className="py-10 bg-transparent text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>

        <Marquee className="gap-4">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="relative group w-60 flex-shrink-0 overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:shadow-lg transition-all duration-500"
            >
              {/* Mini Skills Badge */}
              <div className="absolute top-2 right-2 bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-[10px] font-semibold backdrop-blur-sm z-20">
                ⭐ {member.skills.length} Skills
              </div>

              {/* Image */}
              <Image
                src={member.image}
                alt={member.name}
                width={240}
                height={160}
                className="w-full h-[260px] object-cover"
              />

              {/* Content */}
              <div className="p-3 text-center">
                <h3 className="text-sm font-bold">{member.name}</h3>
                <p className="text-[10px] text-gray-300">{member.position}</p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-1 mt-2">
                  {member.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[8px] bg-yellow-500/20 text-yellow-400 px-2 py-[1px] rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-2 justify-center mt-2">
                  <Facebook size={14} className="hover:text-blue-500 cursor-pointer" />
                  <Instagram size={14} className="hover:text-pink-500 cursor-pointer" />
                  <Twitter size={14} className="hover:text-sky-400 cursor-pointer" />
                  <Linkedin size={14} className="hover:text-blue-700 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
