"use client";

import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Anosh Haider",
    position: "Chief Executive Officer",
    image: "/img/anosh.png",
    email: "ranahaider998@gmail.com"
  },
  {
    name: "Akhtar Abbas",
    position: "Chief Technical Officer",
    image: "/img/dummy-profile-pic.jpg",
    email: "akhtarabbas909@gmail.com"
  },
  {
    name: "Moughees Hassan",
    position: "Chief Technical Officer",
    image: "/img/moughees2.jpg",
    email: "mougheeshassan@gmail.com"
  },
  {
    name: "Nauman Naeem",
    position: "Chief Finance Officer",
    image: "/img/nauman1.jpg",
    email: "naumannaeem81@gmail.com"
  }
];

const getMemberRoute = (name: string) => {
  switch (name) {
    case "Anosh Haider":
      return "/anosh";
    case "Akhtar Abbas":
      return "/akhtar";
    case "Moughees Hassan":
      return "/moughees";
    case "Nauman Naeem":
      return "/nauman";
    default:
      return "/";
  }
};

export default function Team() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    });
  }, []);

  return (
    <section className="py-36 px-6 bg-transparent text-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl font-bold mb-6 text-center"
          data-aos="fade-up"
        >
          WHO WE ARE
        </h2>
        <p
          className="text-sm text-white text-center mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Meet the core people driving the vision forward.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative w-[300px] h-[420px] overflow-hidden rounded-xl group shadow-2xl"
              data-aos="zoom-in-up"
              data-aos-delay={200 + index * 100}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>

              <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-end">
                <div className="px-5 py-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm text-gray-300">{member.position}</p>
                     
                    </div>
                    <button
                      onClick={() => router.push(getMemberRoute(member.name))}
                      className="mt-2 bg-white text-black text-sm px-3 py-1 rounded-full flex items-center gap-1 hover:bg-[#070121] hover:text-white transition"
                    >
                      Details
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
