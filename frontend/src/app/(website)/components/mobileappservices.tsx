"use client";

import {
  Smartphone,
  Code2,
  ShieldCheck,
  TrendingUp,
  Rocket
} from "lucide-react";
import Image from "next/image";

export default function MobileAppServices() {
  return (
    <section className="w-full bg-transparent text-white py-20 px-6 md:px-16">
      {/* Hero Intro */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Mobile App Development
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
          Empower your business with high-performance, feature-rich mobile
          applications tailored for Android, iOS, and cross-platform
          environments. Our apps are built to scale, engage, and deliver
          exceptional user experiences.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative flex items-center justify-center mb-20">
        {/* Main Image Wrapper */}
        <div className="relative w-[450px] md:w-[600px] h-auto">
          {/* Main Image */}
          <Image
            src="/img/mobilebig.jpg"
            alt="Main Mobile App"
            width={600}
            height={400}
            className="w-full h-auto rounded-xl shadow-2xl"
            priority
          />

          {/* Top Right Small Image */}
          <Image
            src="/img/mobiletopright.webp"
            alt="Small Top Right"
            width={160}
            height={160}
            className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-32 md:w-40 rounded-lg shadow-lg"
          />

          {/* Bottom Left Small Image */}
          <Image
            src="/img/mobilebottomleft.webp"
            alt="Small Bottom Left"
            width={160}
            height={160}
            className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-32 md:w-40 rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Why Mobile Apps */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-white mb-4">
          Why Your Business Needs a Mobile App
        </h3>
        <p className="text-gray-300 text-lg">
          In todays mobile-first world, a custom mobile app can increase
          accessibility, streamline customer interaction, enhance brand
          recognition, and provide valuable business insights. Whether it’s for
          internal team use or customer engagement, mobile apps are a powerful
          tool for digital transformation.
        </p>
      </div>

      {/* Our Mobile App Services */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-white mb-4">Our Services</h3>
        <ul className="grid gap-8 md:grid-cols-2">
          <li className="bg-[#16132d] p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-4 mb-2">
              <Smartphone className="text-white" />
              <h4 className="text-xl font-bold">iOS & Android Development</h4>
            </div>
            <p className="text-gray-300">
              Native apps for iOS and Android that are responsive, secure, and
              deliver top-tier performance across all devices.
            </p>
          </li>
          <li className="bg-[#16132d] p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-4 mb-2">
              <Code2 className="text-white" />
              <h4 className="text-xl font-bold">Cross-Platform Apps</h4>
            </div>
            <p className="text-gray-300">
              Build once and deploy everywhere with Flutter, React Native, and
              hybrid app solutions tailored to your goals.
            </p>
          </li>
          <li className="bg-[#16132d] p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-4 mb-2">
              <ShieldCheck className="text-white" />
              <h4 className="text-xl font-bold">Security & Compliance</h4>
            </div>
            <p className="text-gray-300">
              We prioritize user data protection, secure authentication, and
              compliance with international data regulations.
            </p>
          </li>
          <li className="bg-[#16132d] p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-4 mb-2">
              <TrendingUp className="text-white" />
              <h4 className="text-xl font-bold">App Store Optimization</h4>
            </div>
            <p className="text-gray-300">
              Optimize app visibility and downloads with effective ASO
              strategies for both Google Play and App Store.
            </p>
          </li>
        </ul>
      </div>

      {/* Our Process */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold text-white mb-4">
          Our App Development Process
        </h3>
        <p className="text-gray-300 text-lg mb-6">
          Our process is agile, transparent, and highly collaborative to ensure
          your product reaches its full potential.
        </p>
        <ol className="space-y-4 list-decimal list-inside text-gray-300">
          <li>
            <strong className="text-white">
              Consultation & Requirement Gathering:
            </strong>{" "}
            We work closely with you to understand your goals, audience, and
            project scope.
          </li>
          <li>
            <strong className="text-white">UI/UX Design:</strong> We design
            sleek, intuitive interfaces that provide exceptional user
            experiences.
          </li>
          <li>
            <strong className="text-white">Development:</strong> Our engineers
            build high-performance mobile apps using modern tools and best
            practices.
          </li>
          <li>
            <strong className="text-white">Testing & QA:</strong> Rigorous
            testing to ensure your app is bug-free, secure, and reliable.
          </li>
          <li>
            <strong className="text-white">Deployment & Launch:</strong>{" "}
            Launching your app with confidence and strategic app store presence.
          </li>
          <li>
            <strong className="text-white">Post-Launch Support:</strong> Ongoing
            support, monitoring, and upgrades based on user feedback and
            analytics.
          </li>
        </ol>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Rocket className="mx-auto text-white mb-4" size={48} />
        <h3 className="text-3xl font-bold text-white mb-2">
          Ready to Build Your App?
        </h3>
        <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
          Let’s bring your app idea to life with scalable technology,
          user-centered design, and expert development. Contact us now to get
          started.
        </p>
       
      </div>
    </section>
  );
}