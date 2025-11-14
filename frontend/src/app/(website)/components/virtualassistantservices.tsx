"use client";

import {
  CalendarClock,
  Mail,
  FileText,
  Headphones,
  ShoppingCart,
  Users2,
  
  
} from "lucide-react";

export default function VirtualAssistantServices() {
  return (
    <section className="w-full bg-transparent text-white py-20 px-4 md:px-12 space-y-20">
      {/* Services Offered */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Our Virtual Assistant Services
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <Mail className="w-6 h-6" />,
              title: "Email & Inbox Management",
              desc: "We handle your inbox efficiently by filtering, replying, organizing, and managing your daily communication so you stay focused on core tasks while never missing important emails."
            },
            {
              icon: <CalendarClock className="w-6 h-6" />,
              title: "Calendar & Appointment Scheduling",
              desc: "Our VAs manage your meetings, bookings, calls, and events seamlessly — ensuring you're always on schedule and double-bookings are avoided."
            },
            {
              icon: <FileText className="w-6 h-6" />,
              title: "Data Entry & Documentation",
              desc: "Whether it’s spreadsheet management, CRM updates, or report formatting — our assistants handle tedious documentation with accuracy and speed."
            },
            {
              icon: <Headphones className="w-6 h-6" />,
              title: "Customer Support Assistance",
              desc: "Our VAs provide frontline support through chat, email, or phone — resolving queries, managing tickets, and ensuring client satisfaction without delays."
            },
            {
              icon: <ShoppingCart className="w-6 h-6" />,
              title: "E-commerce Store Management",
              desc: "From product listings to order processing, inventory updates, and customer messages — we handle backend store tasks to keep your online business running smoothly."
            },
            {
              icon: <Users2 className="w-6 h-6" />,
              title: "Social Media Management",
              desc: "We schedule posts, respond to comments, track insights, and help grow your digital presence across platforms like Facebook, Instagram, LinkedIn, and Twitter."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 p-6 rounded-xl shadow-md border border-white/10 space-y-3 hover:shadow-yellow-400/20 transition-all"
            >
              <div className="text-white">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-white/90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          How Our Virtual Assistant Process Works
        </h2>
        <ol className="space-y-8 relative border-l border-yellow-400 pl-6">
          {[
            {
              title: "Needs Assessment",
              content:
                "We understand your business goals, pain points, and recurring tasks that can be outsourced to a Virtual Assistant for better productivity and cost savings."
            },
            {
              title: "VA Assignment & Onboarding",
              content:
                "We assign a trained VA that fits your business needs. You get to meet them virtually, walk through expectations, and share tools & access securely."
            },
            {
              title: "Task Management & Execution",
              content:
                "Tasks are managed through shared tools like Trello, Notion, or Google Workspace. Our VAs deliver daily/weekly reports with clear task progress."
            },
            {
              title: "Performance Monitoring",
              content:
                "We track performance through KPIs like turnaround time, accuracy, and communication responsiveness. You can always give feedback or request reassignment."
            },
            {
              title: "Ongoing Support & Optimization",
              content:
                "Your experience is always optimized. We adapt to your changing needs, scale up/down, and improve workflows to ensure top-tier support."
            }
          ].map((step, i) => (
            <li key={i} className="relative">
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
          Tools We Work With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Google Workspace",
            "Slack",
            "Zoom",
            "Trello",
            "Asana",
            "Notion",
            "Calendly",
            "Shopify",
            "Zendesk",
            "Outlook",
            "ClickUp",
            "Meta Business"
          ].map((tool, index) => (
            <div
              key={index}
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
          Why Choose Our Virtual Assistant Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Trained & Reliable Assistants",
              content:
                "Our VAs are pre-vetted, experienced, and trained in business communication, productivity tools, and customer handling — ensuring you're in good hands."
            },
            {
              title: "Flexible & Scalable",
              content:
                "Need part-time or full-time support? Our plans adapt to your workload. You can scale up or down based on seasonal or campaign needs anytime."
            },
            {
              title: "Secure & Confidential",
              content:
                "We follow strict confidentiality protocols and NDAs. Your business data, passwords, and client details are always handled with care and security."
            },
            {
              title: "Result-Driven Approach",
              content:
                "Our focus is on delivering results. Whether it's inbox zero, reduced workload, or better customer satisfaction — we align VAs with your business KPIs."
            }
          ].map((item, index) => (
            <div
              key={index}
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
              q: "How do I communicate with my Virtual Assistant?",
              a: "You can communicate via email, Slack, or video calls. We also provide shared task boards like Trello or Notion for task tracking."
            },
            {
              q: "What timezone are your VAs available in?",
              a: "Our Virtual Assistants can work in multiple time zones — including EST, PST, GMT, and more — based on your preference."
            },
            {
              q: "Can I upgrade or cancel my plan?",
              a: "Yes, our plans are flexible. You can scale, pause, or cancel your VA service anytime with no long-term contracts."
            },
            {
              q: "What if I’m not satisfied with the assigned VA?",
              a: "We offer hassle-free VA replacement within 48 hours if you're not satisfied — no questions asked."
            }
          ].map((item, i) => (
            <div
              key={i}
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
