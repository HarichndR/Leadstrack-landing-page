import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Features } from "@/components/sections/Features";
import { SmartFilter } from "@/components/sections/SmartFilter";
import { PipelineAnimation } from "@/components/sections/PipelineAnimation";
import { Demo } from "@/components/sections/Demo";
import { UseCases } from "@/components/sections/UseCases";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { siteConfig } from "@/config/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": siteConfig.name,
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "description": siteConfig.shortDescription,
    "url": siteConfig.url,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    }
  };

  return (
    <main className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <PipelineAnimation />
      <Problem />
      <Solution />
      <Features />
      <SmartFilter />
      <Demo />
      <UseCases />
      <CTA />
      <Footer />
    </main>
  );
}
