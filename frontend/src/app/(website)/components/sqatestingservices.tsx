"use client";

import {
  Bug,
  ShieldCheck,
  TestTubes,
  ClipboardCheck,
  HelpCircle
} from "lucide-react";
import Image from "next/image";

export default function SqaAndTestingServices() {
  return (
    <section className="w-full bg-transparent text-white py-20 px-6 md:px-16 space-y-24">
      {/* Introduction */}
      <div className="text-center max-w-4xl mx-auto space-y-6 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Software Quality Assurance & Testing
        </h2>
        <p className="text-lg text-gray-300">
          Ensure your software meets the highest standards of quality,
          performance, and security with our comprehensive SQA & testing
          services.
        </p>

        {/* Images Section */}
        <div className="relative flex items-center justify-center mt-10">
          {/* Main Large Image */}
          <Image
            src="/img/sqa.png"
            alt="SQA Main"
            width={650}
            height={400}
            className="w-[500px] md:w-[650px] rounded-xl shadow-2xl"
            priority
          />

          {/* Small Image Top Left */}
          <Image
            src="/img/sqa1.jpg"
            alt="SQA Small 1"
            width={160}
            height={160}
            className="absolute top-[-40px] left-[15%] w-32 md:w-40 rounded-lg shadow-lg rotate-[-6deg]"
          />

          {/* Small Image Bottom Right */}
          <Image
            src="/img/sqa2.jpeg"
            alt="SQA Small 2"
            width={160}
            height={160}
            className="absolute bottom-[-40px] right-[15%] w-32 md:w-40 rounded-lg shadow-lg rotate-[8deg]"
          />
        </div>
      </div>

      {/* Importance of SQA */}
      <div className="max-w-5xl mx-auto space-y-6">
        <h3 className="text-3xl font-semibold text-white flex items-center gap-2">
          <ShieldCheck /> Why SQA Matters
        </h3>
        <p className="text-gray-300">
          Software Quality Assurance is more than just bug fixing. It ensures
          that the software aligns with business goals, meets user expectations,
          and complies with industry standards. A robust QA process minimizes
          risks, enhances performance, and delivers user satisfaction.
        </p>
      </div>

      {/* Our Services */}
      <div className="max-w-5xl mx-auto space-y-6">
        <h3 className="text-3xl font-semibold text-white flex items-center gap-2">
          <ClipboardCheck /> Our Testing Services
        </h3>
        <ul className="list-disc pl-5 text-gray-300 space-y-2">
          <li>Manual Testing (Functional, Regression, UI/UX)</li>
          <li>Automated Testing (Unit, Integration, E2E)</li>
          <li>Performance Testing (Load, Stress, Scalability)</li>
          <li>
            Security Testing (Vulnerability Scanning, Penetration Testing)
          </li>
          <li>Mobile App Testing (iOS, Android, Cross-platform)</li>
          <li>API Testing using Postman, Swagger, and other tools</li>
        </ul>
      </div>

      {/* Process Overview */}
      <div className="max-w-5xl mx-auto space-y-6">
        <h3 className="text-3xl font-semibold text-white flex items-center gap-2">
          <TestTubes /> Our QA Process
        </h3>
        <p className="text-gray-300">
          Our structured QA process includes requirement analysis, test
          planning, test case design, test execution, bug tracking, and
          reporting. We adopt Agile, Scrum, or DevOps methodologies depending on
          project needs to ensure seamless collaboration and rapid iterations.
        </p>
      </div>

      {/* Tools We Use */}
      <div className="max-w-5xl mx-auto space-y-6">
        <h3 className="text-3xl font-semibold text-white flex items-center gap-2">
          <Bug /> Tools & Technologies
        </h3>
        <p className="text-gray-300">
          We leverage industry-standard tools like Selenium, JUnit, Cypress,
          TestNG, Postman, Apache JMeter, and SonarQube to execute precise,
          reliable, and scalable testing strategies.
        </p>
      </div>

      {/* FAQs */}
      <div className="max-w-5xl mx-auto space-y-6">
        <h3 className="text-3xl font-semibold text-white flex items-center gap-2">
          <HelpCircle /> Frequently Asked Questions
        </h3>
        <div className="space-y-4 text-gray-300">
          <div>
            <p className="font-semibold text-white">
              Do you offer both manual and automated testing?
            </p>
            <p>
              Yes, we provide both based on your project’s needs and timeline.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">
              Can I hire a dedicated QA team?
            </p>
            <p>
              Absolutely! We offer dedicated QA resources for long-term
              collaboration.
            </p>
          </div>
          <div>
            <p className="font-semibold text-white">
              What industries do you serve?
            </p>
            <p>
              We serve startups, enterprises, healthcare, fintech, eCommerce,
              and more.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <h3 className="text-3xl font-bold text-white">
          Let’s Build Quality Software Together
        </h3>
        <p className="text-gray-300">
          Partner with us to ensure flawless user experiences, secure platforms,
          and efficient performance. Let’s ensure your software exceeds
          expectations.
        </p>
        
      </div>
    </section>
  );
}