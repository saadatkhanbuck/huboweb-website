"use client";

import {
  LayoutDashboard,
  
  ShieldCheck,
  Rocket,
  Paintbrush2,
  ShoppingCart,
  Wrench,
  
} from "lucide-react";

export default function WordpressServices() {
  return (
    <section className="w-full bg-transparent text-white py-20 px-4 md:px-12 space-y-20">
      {/* WordPress Services Overview */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Our WordPress Development Services
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <LayoutDashboard className="w-6 h-6" />,
              title: "Custom WordPress Websites",
              desc: "We design and develop fully customized WordPress websites tailored to your business needs. Whether it’s a corporate site, landing page, or a content-heavy portal — we craft engaging, responsive, and high-performance solutions."
            },
            {
              icon: <Paintbrush2 className="w-6 h-6" />,
              title: "Theme Design & Customization",
              desc: "We build custom themes from scratch or customize existing premium themes to match your brand identity. Every pixel is polished to perfection with an eye on performance and usability."
            },
            {
              icon: <ShoppingCart className="w-6 h-6" />,
              title: "WooCommerce Development",
              desc: "From simple product stores to complex multi-vendor marketplaces, we develop WooCommerce solutions that drive conversions, integrate with payment gateways, and scale with your business."
            },
            {
              icon: <Wrench className="w-6 h-6" />,
              title: "Plugin Development & Integration",
              desc: "We build custom plugins, modify existing ones, and ensure smooth integration with third-party services like CRMs, analytics, payment gateways, and more — with clean, secure code."
            },
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Maintenance & Security",
              desc: "Our support team offers continuous updates, uptime monitoring, malware scans, and backups to ensure your WordPress website stays secure, fast, and always available."
            },
            {
              icon: <Rocket className="w-6 h-6" />,
              title: "Speed & SEO Optimization",
              desc: "We optimize loading times, improve Core Web Vitals, configure caching, minify assets, and follow SEO best practices — ensuring your site performs well in Google search and user experience."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 p-6 rounded-xl shadow-md border border-white/10 space-y-3 hover:shadow-yellow-400/20 transition-all"
            >
              <div className="text-white">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-white/90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Development Process */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Our WordPress Development Process
        </h2>
        <ol className="space-y-8 relative border-l border-yellow-400 pl-6">
          {[
            {
              title: "Requirement Gathering",
              content:
                "We understand your goals, audience, features, and preferences to create a strong project foundation. We also assess competitor websites and technical scope."
            },
            {
              title: "Design & Theme Planning",
              content:
                "Our designers wireframe layouts and select or design themes that match your brand. We prioritize UX, responsiveness, and visual appeal."
            },
            {
              title: "Custom Development",
              content:
                "Our developers bring your site to life with custom layouts, plugins, and integrations — all while keeping the codebase clean and scalable."
            },
            {
              title: "Testing & Optimization",
              content:
                "We rigorously test for functionality, cross-browser compatibility, performance, SEO, and accessibility to ensure a flawless launch experience."
            },
            {
              title: "Launch & Support",
              content:
                "Once approved, we deploy the site to your live environment and monitor it post-launch for any issues. We also provide documentation and training if needed."
            }
          ].map((step, index) => (
            <li key={index} className="relative">
              <div className="absolute -left-3 top-1 w-6 h-6 bg-gradient-to-r from-blue-900 to-gray-900 rounded-full border-4 border-[#070121]"></div>
              <h4 className="text-xl font-semibold text-white">{step.title}</h4>
              <p className="text-white/90 mt-1">{step.content}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Tools & Platforms */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Tools & Platforms We Work With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "WordPress",
            "Elementor",
            "WooCommerce",
            "WPBakery",
            "Yoast SEO",
            "WPForms",
            "Rank Math",
            "WP Engine",
            "cPanel",
            "Figma",
            "Mailchimp",
            "Cloudflare"
          ].map((tool, i) => (
            <div
              key={i}
              className="bg-white/5 text-white/90 p-4 rounded-xl text-center font-semibold border border-white/10 hover:bg-white/10 transition-all"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Why Choose Our WordPress Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Pixel-Perfect UI/UX",
              content:
                "Our design-first approach ensures every element on your site is user-friendly, responsive, and crafted to drive conversions."
            },
            {
              title: "SEO & Speed Focused",
              content:
                "We combine design with performance by building fast-loading, SEO-optimized WordPress websites that rank and retain visitors."
            },
            {
              title: "Secure & Maintainable Code",
              content:
                "Our custom code is secure, modular, and follows WordPress standards — ensuring long-term maintainability and flexibility."
            },
            {
              title: "Dedicated Support Team",
              content:
                "From launch to growth, our team provides ongoing technical support, content updates, and uptime monitoring whenever you need it."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 p-6 rounded-xl shadow-md border border-white/10 hover:shadow-yellow-400/20 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white/90">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "Do you build websites using Elementor or custom code?",
              a: "We offer both options depending on your needs — fully custom themes or Elementor-based designs with drag-and-drop editing for easy future updates."
            },
            {
              q: "Will I be able to manage content myself?",
              a: "Yes, we set up easy-to-use admin panels and editors, allowing you to update text, images, and more without technical knowledge."
            },
            {
              q: "Do you offer hosting & maintenance?",
              a: "Absolutely. We offer hosting setup, site migrations, maintenance plans, and security monitoring to ensure everything runs smoothly post-launch."
            },
            {
              q: "How long does it take to complete a WordPress site?",
              a: "Typical timelines range from 1–4 weeks depending on the complexity, content availability, and number of custom features required."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 p-5 rounded-lg border border-white/10"
            >
              <h4 className="text-lg font-semibold text-white">{item.q}</h4>
              <p className="text-white/90 mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
