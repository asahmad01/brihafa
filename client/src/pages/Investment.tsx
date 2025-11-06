import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, BarChart3, Globe2, Shield, Users } from "lucide-react";
import heroImage from "@assets/generated_images/Mining_operations_hero_image_cefb684f.png";

export default function Investment() {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Consistent Growth",
      description: "Steady year-over-year revenue growth driven by increased production capacity and market demand.",
    },
    {
      icon: DollarSign,
      title: "Strong Financials",
      description: "Healthy profit margins and strong cash flow from established mining operations.",
    },
    {
      icon: BarChart3,
      title: "Market Position",
      description: "Leading position in Nigeria's iron ore sector with expansion opportunities.",
    },
    {
      icon: Globe2,
      title: "Export Potential",
      description: "Strategic access to international markets with growing demand for iron ore.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk mitigation strategies and regulatory compliance.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Proven leadership with decades of combined mining industry experience.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        backgroundImage={heroImage}
        title="Investment Opportunities"
        subtitle="Join us in building Nigeria's mining future with proven growth potential"
        showCTA={false}
      />

      <section className="py-24 bg-background transition-all duration-500 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Why Invest in Brihafa"
            title="Investment Highlights"
            description="Brihafa offers investors the opportunity to participate in Nigeria's growing mining sector with a company that combines operational excellence with sustainable practices."
          />
          <FeatureGrid features={highlights} />
        </div>
      </section>

      <section className="py-24 bg-card transition-all duration-500 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="text-5xl font-bold text-primary mb-4">500K+</div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-2">
                Annual Production
              </div>
              <p className="text-muted-foreground">
                Tons of iron ore extracted and processed annually
              </p>
            </Card>
            
            <Card className="p-8">
              <div className="text-5xl font-bold text-primary mb-4">15+</div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-2">
                Active Sites
              </div>
              <p className="text-muted-foreground">
                Mining operations across strategic locations in Nigeria
              </p>
            </Card>
            
            <Card className="p-8">
              <div className="text-5xl font-bold text-primary mb-4">10+</div>
              <div className="text-sm font-semibold uppercase tracking-wide mb-2">
                Years Experience
              </div>
              <p className="text-muted-foreground">
                Proven track record in the mining industry
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background transition-all duration-500 ease-in-out">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Growth Strategy"
            title="Investment Focus Areas"
            description="We're actively seeking partners and investors to support our expansion plans"
          />
          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-3">Capacity Expansion</h3>
              <p className="text-muted-foreground leading-relaxed">
                Investment in additional mining equipment and processing facilities to increase our annual production capacity by 40%.
              </p>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-3">Technology Upgrades</h3>
              <p className="text-muted-foreground leading-relaxed">
                Implementation of advanced automation and monitoring systems to improve operational efficiency and safety.
              </p>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-3">New Site Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Exploration and development of new mining sites in mineral-rich regions across Nigeria.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in Investment Opportunities?"
        description="Contact us to learn more about partnership opportunities and financial performance."
        buttonText="Contact for Investment"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
}
