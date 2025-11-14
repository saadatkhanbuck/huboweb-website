"use client";

import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import {
  Chrome,
  Twitter,
  Dribbble,
  Github,
  Figma,
  Slack,
  Youtube,
  Linkedin,
  Gitlab,
  Mail
} from "lucide-react";

export default function SectionWithOrbit() {
  return (
    <section className="w-full bg-white text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side with Padding and Improved Styling */}
        <div className="space-y-6 animate-slide-in-left pl-6 md:pl-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug md:leading-tight text-black">
            Building Digital Products <br /> for the Modern World
          </h1>
          <p className="text-base md:text-lg text-black leading-relaxed max-w-xl">
            We are a software house specializing in web and mobile application
            development, UI/UX design, branding, and product strategy. From
            innovative startups to established enterprises, we help brands build
            exceptional digital experiences.
          </p>
         
        </div>

        {/* Right Side with extra left margin */}
        <div className="md:w-1/2 ml-14 flex items-center justify-center min-h-[450px] md:ml-12">
          <div className="relative h-[400px] w-[350px]">
            <OrbitingCircles
              iconSize={48}
              outerRadius={150}
              innerRadius={90}
              outerIcons={[
                <Github key="github" className="text-black w-12 h-12" />,
                <Figma key="figma" className="text-black w-12 h-12" />,
                <Chrome key="chrome" className="text-black w-12 h-12" />,
                <Twitter key="twitter" className="text-black w-12 h-12" />,
                <Gitlab key="gitlab" className="text-black w-12 h-12" />,
                <Mail key="mail" className="text-black w-12 h-12" />
              ]}
              innerIcons={[
                <Dribbble key="dribbble" className="text-black w-10 h-10" />,
                <Slack key="slack" className="text-black w-10 h-10" />,
                <Youtube key="youtube" className="text-black w-10 h-10" />,
                <Linkedin key="linkedin" className="text-black w-10 h-10" />
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}