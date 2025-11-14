"use client";

import Image from "next/image";

export default function WebBrowserServices() {
  return (
    <section className="w-full bg-transparent text-white py-20 px-4 md:px-10 space-y-24">
      {/* Introduction */}
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold">
          Web Browser Extension Development
        </h2>
        <p className="max-w-4xl mx-auto text-base text-white">
          We specialize in building powerful, secure, and intuitive browser
          extensions that boost productivity, enhance online experiences, and
          deliver tailored functionalities across Chrome, Firefox, Edge, and
          more.
        </p>
        <Image
          src="/img/mobilebig.jpg"
          alt="Browser Intro"
          width={800}
          height={500}
          className="mx-auto rounded-xl shadow-xl"
        />
      </div>

      {/* Why Browser Extensions Matter */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-3xl font-semibold">
            Why Browser Extensions Matter
          </h3>
          <p className="text-white">
            In a digital-first world, browser extensions serve as lightweight
            yet powerful tools to enhance user workflows, automate tasks,
            provide instant access to important data, and streamline business
            processes right within the browser. They eliminate the need for
            bulky software and can be deployed quickly to reach users
            efficiently.
          </p>
        </div>
        <Image
          src="/img/sqa2.jpeg"
          alt="Why Extensions Matter"
          width={500}
          height={350}
          className="rounded-xl shadow-xl"
        />
      </div>

      {/* Our Services */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 space-y-6 ml-10">
          <h3 className="text-3xl font-semibold">
            Our Extension Development Services
          </h3>
          <ul className="list-disc pl-6 text-white space-y-2">
            <li>Custom Chrome Extension Development</li>
            <li>Cross-Browser Compatibility (Firefox, Edge, Safari)</li>
            <li>Extension UI/UX Design</li>
            <li>Web Scraping & Automation Extensions</li>
            <li>Security & Permission Management</li>
            <li>Publishing Support to Chrome Web Store</li>
          </ul>
        </div>
        <Image
          src="/img/sqa2.jpeg"
          alt="Our Services"
          width={500}
          height={350}
          className="rounded-xl shadow-xl mr-14"
        />
      </div>

      {/* Technologies We Use */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-3xl font-semibold">Technologies We Use</h3>
          <p className="text-white">
            Our team leverages modern technologies including JavaScript,
            TypeScript, React.js, Manifest V3, WebExtensions API, OAuth
            integrations, and RESTful APIs to build robust, scalable browser
            extensions.
          </p>
        </div>
        <Image
          src="/img/tech.jpg"
          alt="Technologies"
          width={500}
          height={350}
          className="rounded-xl shadow-xl"
        />
      </div>

      {/* Development Process */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 space-y-6 ml-10">
          <h3 className="text-3xl font-semibold">Our Development Process</h3>
          <p className="text-white">
            We follow a clear, agile-based development approach: Discovery →
            Prototyping → Development → Testing → Publishing. Our QA specialists
            ensure smooth functioning across all browsers, while our publishing
            experts assist in deploying the extension to the respective stores.
          </p>
        </div>
        <Image
          src="/img/tech1.jpg"
          alt="Process"
          width={500}
          height={350}
          className="rounded-xl shadow-xl mr-14"
        />
      </div>

      {/* Success Stories */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-3xl font-semibold">Success Stories</h3>
          <p className="text-white">
            From productivity trackers to LinkedIn automation tools, we&apos;ve
            helped businesses launch impactful extensions with thousands of
            daily active users and excellent user reviews. Whether you&apos;re
            enhancing internal tools or building public utilities, we&apos;ve got the
            experience to deliver.
          </p>
        </div>
        <Image
          src="/img/tech2.jpg"
          alt="Success Stories"
          width={500}
          height={350}
          className="rounded-xl shadow-xl"
        />
      </div>

      {/* FAQs */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 space-y-6 ml-10">
          <h3 className="text-3xl font-semibold">Frequently Asked Questions</h3>
          <ul className="list-disc pl-6 text-white space-y-2">
            <li>
              <strong>How long does development take?</strong> Depending on
              complexity, 1–6 weeks.
            </li>
            <li>
              <strong>Do you help with Chrome Web Store publishing?</strong>{" "}
              Yes, end-to-end support is included.
            </li>
            <li>
              <strong>Can you add APIs or OAuth?</strong> Absolutely. We support
              API integration and authentication mechanisms.
            </li>
          </ul>
        </div>
        <Image
          src="/img/tech3.jpg"
          alt="FAQs"
          width={500}
          height={350}
          className="rounded-xl shadow-xl mr-14"
        />
      </div>

      {/* CTA */}
      <div className="text-center space-y-6">
        <h3 className="text-3xl font-semibold">
          Let&apos;s Build Your Browser Extension
        </h3>
        <p className="max-w-2xl mx-auto text-white">
          Ready to enhance your product or business with a browser extension?
          Contact us now for a free consultation and let&apos;s transform your idea
          into a live extension.
        </p>
       
      </div>
    </section>
  );
}