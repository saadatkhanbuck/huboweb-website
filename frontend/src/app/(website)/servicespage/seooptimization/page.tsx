import React from "react";
import Hero from "../../components/hero";
import Seo from "../../components/seo";

export default function SeoOptimization() {
  return (
    <div className="mt-10">
      <Hero
        title="Unlock Your Brand’s Potential with Next-Gen SEO Optimization"
        description="We build high-performance websites and applications that engage your customers and grow your brand. From design to deployment — we've got you covered."
        imageSrc="/img/web-designing.png"
      />
      <Seo/>
    </div>
  );
}
