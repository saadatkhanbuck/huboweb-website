import React from "react";
import Hero from "../../components/hero";
import MobileAppServices from "../../components/mobileappservices";

export default function MobileAppDevelopment() {
  return (
    <div className="mt-10">
      <Hero
        title="Unlock Your Brand’s Potential with Next-Gen Mobile App Development"
        description="We build high-performance websites and applications that engage your customers and grow your brand. From design to deployment — we've got you covered."
        imageSrc="/img/web-designing.png"
      />
      <MobileAppServices/>
    </div>
  );
}
