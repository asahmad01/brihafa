import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import FeatureGrid from "@/components/FeatureGrid";
import ImageTextSection from "@/components/ImageTextSection";
import Footer from "@/components/Footer";
import { Leaf, Heart, Users, Recycle, TreePine, Droplets } from "lucide-react";
import csrImage from "@assets/generated_images/CSR_community_impact_ed9e3c99.png";
import teamImage from "@assets/generated_images/Mining_team_workers_073f3175.png";

export default function Sustainability() {
  const initiatives = [
    {
      icon: Leaf,
      title: "Environmental Protection",
      description: "Implementing best practices in land reclamation, air quality monitoring, and waste management to minimize our environmental footprint.",
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Advanced water recycling systems and responsible water usage to protect local water resources and ecosystems.",
    },
    {
      icon: TreePine,
      title: "Reforestation Programs",
      description: "Active tree planting initiatives and habitat restoration in areas affected by mining operations.",
    },
    {
      icon: Recycle,
      title: "Waste Management",
      description: "Comprehensive recycling programs and responsible disposal of mining waste to protect the environment.",
    },
    {
      icon: Heart,
      title: "Community Health",
      description: "Supporting local healthcare facilities and providing health screenings for community members.",
    },
    {
      icon: Users,
      title: "Local Employment",
      description: "Prioritizing employment opportunities for local community members and providing skills training programs.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        backgroundImage={csrImage}
        title="Sustainability & CSR"
        subtitle="Committed to responsible mining and positive community impact"
        showCTA={false}
      />

      <section className="py-24 bg-background transition-all duration-500 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Our Commitment"
            title="Environmental Responsibility"
            description="We believe that successful mining operations must be environmentally sustainable and socially responsible. Our comprehensive sustainability program ensures we leave a positive legacy."
          />
          <FeatureGrid features={initiatives} />
        </div>
      </section>

      <section className="py-24 bg-card transition-all duration-500 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageTextSection
            image={teamImage}
            title="Community Engagement"
            description="We work closely with local communities to ensure our operations create lasting positive impact through employment, education, and infrastructure development."
            bulletPoints={[
              "Skills training and employment programs for local residents",
              "Educational scholarships for students in mining communities",
              "Infrastructure development including roads and utilities",
              "Regular community consultation and feedback sessions",
              "Support for local businesses and suppliers",
            ]}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
