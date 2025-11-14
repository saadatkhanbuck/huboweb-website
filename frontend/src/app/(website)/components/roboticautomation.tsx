"use client";

import {
  Cpu,
  Workflow,
  ShieldCheck,
  Zap,
  HelpCircle,
  CheckCircle
} from "lucide-react";
import Image from "next/image";

export default function RoboticAutomation() {
  return (
    <section className="w-full bg-transparent text-white py-20 px-4 md:px-10 space-y-20">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
        {/* Text Section */}
        <div className="md:w-1/2 text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Robotic Process Automation (RPA)
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl">
            Streamline and optimize repetitive business processes with
            intelligent automation. Our RPA services help you reduce manual
            effort, eliminate errors, and enhance productivity using modern bots
            and automation tools.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative md:w-1/2 flex items-center justify-center">
          {/* Main Large Image */}
          <Image
            src="/img/robotic.webp"
            alt="RPA Main"
            width={450}
            height={350}
            className="w-[350px] md:w-[450px] rounded-xl shadow-2xl"
            priority
          />

          {/* Small Image Top Left */}
          <Image
            src="/img/robotic1.webp"
            alt="RPA Small 1"
            width={128}
            height={128}
            className="absolute top-[-30px] left-[10%] w-24 md:w-32 rounded-lg shadow-lg rotate-[-6deg]"
          />

          {/* Small Image Bottom Right */}
          <Image
            src="/img/robotic2.jpg"
            alt="RPA Small 2"
            width={128}
            height={128}
            className="absolute bottom-[-30px] right-[10%] w-24 md:w-32 rounded-lg shadow-lg rotate-[8deg]"
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-white">Why RPA Matters</h3>
        <ul className="grid gap-6 md:grid-cols-2 text-gray-300">
          <li className="flex gap-4">
            <Zap className="text-white" />
            <span>
              Increase operational efficiency and speed through task automation.
            </span>
          </li>
          <li className="flex gap-4">
            <Cpu className="text-white" />
            <span>Eliminate human errors in repetitive processes.</span>
          </li>
          <li className="flex gap-4">
            <ShieldCheck className="text-white" />
            <span>Ensure compliance by standardizing workflows.</span>
          </li>
          <li className="flex gap-4">
            <Workflow className="text-white" />
            <span>Free up your workforce to focus on higher-value tasks.</span>
          </li>
        </ul>
      </div>

      {/* What We Automate Section */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-white">
          What Can Be Automated?
        </h3>
        <p className="text-gray-300">
          We specialize in automating tasks across departments:
        </p>
        <ul className="grid gap-4 md:grid-cols-2 text-gray-300">
          <li className="flex gap-4">
            <CheckCircle className="text-white" /> Data entry and data migration
          </li>
          <li className="flex gap-4">
            <CheckCircle className="text-white" /> Invoice processing and
            finance tasks
          </li>
          <li className="flex gap-4">
            <CheckCircle className="text-white" /> HR onboarding and document
            handling
          </li>
          <li className="flex gap-4">
            <CheckCircle className="text-white" /> Customer service ticket
            routing
          </li>
          <li className="flex gap-4">
            <CheckCircle className="text-white" /> Inventory updates and
            logistics
          </li>
          <li className="flex gap-4">
            <CheckCircle className="text-white" /> Report generation and
            dashboard updates
          </li>
        </ul>
      </div>

      {/* Our Process Section */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-white">
          Our RPA Implementation Process
        </h3>
        <ol className="list-decimal ml-6 text-gray-300 space-y-2">
          <li>
            We analyze and identify automation-ready processes within your
            organization.
          </li>
          <li>Design custom bots tailored to your workflow requirements.</li>
          <li>
            Develop and test the automation solution in a secure environment.
          </li>
          <li>
            Deploy bots and ensure smooth integration with your existing
            systems.
          </li>
          <li>Monitor, support, and continuously optimize the RPA setup.</li>
        </ol>
      </div>

      {/* Testimonials Section */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-white">What Our Clients Say</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-300">
              “The RPA bots developed by their team have saved us hundreds of
              hours every month. Exceptional service and results!”
            </p>
            <p className="text-white mt-2 font-semibold">
              — Adeel H., Operations Manager
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-300">
              “Their automation workflows integrated seamlessly with our CRM and
              finance systems. Highly recommend for scalable automation.”
            </p>
            <p className="text-white mt-2 font-semibold">— Sana A., CTO</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-white">FAQs</h3>
        <div className="space-y-4 text-gray-300">
          <div>
            <h4 className="flex gap-2 items-center font-semibold text-white">
              <HelpCircle className="w-5 h-5" /> Is RPA suitable for small
              businesses?
            </h4>
            <p>
              Yes! RPA can streamline processes in businesses of all sizes,
              making operations faster and more reliable.
            </p>
          </div>
          <div>
            <h4 className="flex gap-2 items-center font-semibold text-white">
              <HelpCircle className="w-5 h-5" /> How long does it take to
              implement?
            </h4>
            <p>
              It depends on the complexity, but many automations can be designed
              and deployed within 2–4 weeks.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4">
        <h3 className="text-3xl font-bold text-white">Ready to Automate?</h3>
        <p className="text-gray-300">
          Let&apos;s build powerful bots that save time and improve efficiency.
          Contact us today to get started.
        </p>
       
      </div>
    </section>
  );
}