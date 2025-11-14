"use client";

import {
  Wrench,
  Server,
  ShieldCheck,
  
  Zap,
  AlertCircle,
  BarChart
} from "lucide-react";

export default function SupportOperationalServices() {
  return (
    <section className="w-full bg-transparent text-white py-20 px-4 md:px-12 space-y-20">
      {/* Our Support Services */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Our Support Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: <Wrench className="w-6 h-6" />,
              title: "24/7 Technical Support",
              desc: "Our support engineers are available round the clock to resolve any issue you encounter. From troubleshooting bugs to emergency fixes, we ensure your product runs smoothly without interruption."
            },
            {
              icon: <Server className="w-6 h-6" />,
              title: "Infrastructure Monitoring",
              desc: "We proactively monitor your servers, APIs, and background jobs using modern observability tools, ensuring performance, uptime, and rapid issue detection before they impact users."
            },
            {
              icon: <AlertCircle className="w-6 h-6" />,
              title: "Incident Management",
              desc: "In case of any system failure or anomaly, our incident response team takes immediate action. We provide detailed incident reports and root cause analysis for future prevention."
            },
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Security & Compliance",
              desc: "Our team follows industry best practices to ensure your systems remain secure and compliant. We perform regular audits, patching, and access control evaluations."
            },
            {
              icon: <BarChart className="w-6 h-6" />,
              title: "Performance Optimization",
              desc: "We continuously analyze your systems for bottlenecks and performance issues and fine-tune them for scalability and speed. This includes database tuning, code profiling, and caching strategies."
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "DevOps Support",
              desc: "Our DevOps specialists help you build automated CI/CD pipelines, improve deployment workflows, and manage infrastructure with tools like Docker, Kubernetes, and Terraform."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 p-6 rounded-xl shadow-md border border-white/10 space-y-3 hover:shadow-yellow-400/20 transition-all"
            >
              <div className="text-white">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-white/90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Support Process */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          How Our Support Process Works
        </h2>
        <ol className="space-y-8 relative border-l border-yellow-400 pl-6">
          {[
            {
              title: "Initial Assessment",
              content:
                "We begin with a detailed assessment of your systems, identifying key components, failure points, and operational requirements to tailor our support structure."
            },
            {
              title: "Setup & Onboarding",
              content:
                "We configure monitoring tools, communication channels, and alerting systems. Our team syncs with yours for a smooth knowledge transition and SOP alignment."
            },
            {
              title: "Active Monitoring",
              content:
                "Our engineers monitor infrastructure, apps, and logs continuously using tools like Datadog, Sentry, and Prometheus to detect anomalies and performance drops early."
            },
            {
              title: "Issue Resolution",
              content:
                "Whenever issues are detected, our team jumps in immediately, triages the problem, resolves it quickly, and updates your team transparently with detailed summaries."
            },
            {
              title: "Continuous Improvement",
              content:
                "Post-resolution, we refine SOPs, automate future responses, and suggest architectural or tooling upgrades to reduce recurring issues and improve stability."
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

      {/* Tools & Technologies */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Tools & Technologies We Use
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "AWS",
            "Azure",
            "Docker",
            "Kubernetes",
            "Jira",
            "Slack",
            "Datadog",
            "Sentry",
            "Prometheus",
            "Grafana",
            "Trello",
            "Zoom"
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
          Why Choose Our Support Services
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Rapid Response Times",
              content:
                "We guarantee fast acknowledgment and resolution with dedicated SLAs, ensuring minimal downtime and service interruptions."
            },
            {
              title: "Skilled & Certified Engineers",
              content:
                "Our team consists of industry-certified professionals who are experienced in managing scalable systems under pressure."
            },
            {
              title: "Transparent Communication",
              content:
                "Every step is documented, shared, and tracked through modern tools. You’re never left guessing what’s going on."
            },
            {
              title: "Scalable & Customizable",
              content:
                "Whether you're a startup or an enterprise, our support plans scale with your needs and integrate with your workflow."
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
              q: "Do you provide 24/7 coverage?",
              a: "Yes, our team operates round the clock in multiple time zones to provide continuous monitoring and support regardless of your location."
            },
            {
              q: "How quickly do you respond to critical incidents?",
              a: "We respond to critical alerts within 15 minutes, often faster. Our triage and escalation process ensures urgent issues are handled immediately."
            },
            {
              q: "What kind of systems do you support?",
              a: "We support web apps, APIs, mobile backends, cloud-native infrastructures, and hybrid environments including AWS, Azure, and GCP."
            },
            {
              q: "Can I customize the support plan?",
              a: "Absolutely. We offer flexible support plans tailored to your project’s scale, tech stack, and uptime requirements."
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
