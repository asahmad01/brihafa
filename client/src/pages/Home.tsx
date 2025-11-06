import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import SectionHeader from "@/components/SectionHeader";
import FeatureGrid from "@/components/FeatureGrid";
import ImageTextSection from "@/components/ImageTextSection";
import DirectorCard from "@/components/DirectorCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import {
  TrendingUp, Users, Award, Globe, Shield, Zap, Target, CheckCircle,
  Leaf, HandshakeIcon, MapPin, Heart, Recycle, TreePine, Droplets,
  DollarSign, BarChart3, Globe2, Phone, Mail, Clock
} from "lucide-react";
import heroImage from "@assets/generated_images/Mining_team_workers_073f3175.png";
import equipmentImage from "@assets/generated_images/Mining_equipment_close-up_6c99bd20.png";
import mineralsImage from "@assets/generated_images/Iron_ore_materials_dcbbbac5.png";
import csrImage from "@assets/generated_images/CSR_community_impact_ed9e3c99.png";
import director1 from "@assets/generated_images/Ahmad_Aliyu_Yaradua.jpeg";
import director2 from "@assets/generated_images/Professor_Aliyu_Kankara.jpeg";
import director3 from "@assets/generated_images/Engr_Muntari_Zubairu_Muhammad.jpeg";
import director4 from "@assets/generated_images/Dr_Umar_Farouk_Saeed_Yaradua.jpeg";

export default function Home() {
  const stats = [
    { icon: <Award size={48} />, value: "10+", label: "Years of Excellence" },
    { icon: <TrendingUp size={48} />, value: "500K", label: "Tons Annual Capacity" },
    { icon: <Users size={48} />, value: "200+", label: "Skilled Employees" },
    { icon: <Globe size={48} />, value: "15+", label: "Active Mining Sites" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We maintain the highest safety standards across all our operations, ensuring the wellbeing of our workforce and communities.",
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "Utilizing cutting-edge mining technology and equipment to maximize efficiency and minimize environmental impact.",
    },
    {
      icon: Target,
      title: "Proven Track Record",
      description: "Over a decade of successful operations and consistent delivery on our commitments to stakeholders.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure that all our iron ore and mineral products meet international standards.",
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Committed to sustainable mining practices and active land reclamation to minimize our environmental footprint.",
    },
    {
      icon: HandshakeIcon,
      title: "Community Partnership",
      description: "Building strong relationships with local communities through employment opportunities and social development programs.",
    },
  ];

  const directors = [
    {
      image: director4,
      name: "Dr. Umar Farouk Sa'eed Yar'adua",
      role: "Managing Director / Chief Executive Officer",
    },
    {
      image: director3,
      name: "Engr. Muntari Zubairu Muhammad, FNSE",
      role: "Executive Director, Corporate Services & Finance",
    },
    {
      image: director1,
      name: "Engr. Ahmad Aliyu Yar'adua, MNSE",
      role: "Executive Director, Engineering & Technical Services",
    },
    {
      image: director2,
      name: "Prof. Aliyu Ibrahim Kankara",
      role: "General Manager, Mining & Metallurgical Operations",
      imageScale: 1.5,
    },
  ];

  const sustainabilityInitiatives = [
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

  const investmentHighlights = [
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
        title="Building Nigeria's Iron Future"
        subtitle="Leading the way in sustainable iron ore and mineral mining with over 10 years of excellence"
      />
      <StatsSection stats={stats} />

      {/* Why Choose Brihafa Section */}
      <section className="py-24 bg-background border-t-4 border-primary transition-all duration-500 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Our Strengths"
            title="Why Choose Brihafa"
            description="We combine industry expertise with modern technology to deliver superior mining operations while maintaining our commitment to safety and sustainability."
          />
          <FeatureGrid features={features} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card border-t-4 border-primary transition-all duration-500 ease-in-out scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Our Company"
            title="About Us"
            description="Brihafa Iron Ore Mining Company - Building Nigeria's mining future with excellence and sustainability."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Brihafa Iron Ore Mining Company was founded with a vision to become Nigeria's leading mining company. Over the past decade, we have established ourselves as a trusted name in iron ore and mineral extraction, combining traditional mining expertise with modern technology.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to excellence, safety, and environmental responsibility has enabled us to build strong relationships with investors, government agencies, and local communities across Nigeria.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To sustainably extract and process Nigeria's mineral resources while maintaining the highest standards of safety, environmental stewardship, and community engagement.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as West Africa's premier mining company, known for operational excellence, innovation, and positive impact on communities and the environment.
                </p>
              </Card>
            </div>
          </div>

          <SectionHeader
            overline="Leadership Team"
            title="Our Directors"
            description="Meet the experienced professionals leading Brihafa's operations and strategic direction"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {directors.map((director, index) => (
              <DirectorCard key={index} {...director} />
            ))}
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section id="operations" className="py-24 bg-background border-t-4 border-primary transition-all duration-500 ease-in-out scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="What We Do"
            title="Our Operations"
            description="Brihafa operates multiple mining sites across Nigeria, extracting iron ore and minerals using sustainable practices and advanced technology."
          />

          <div className="space-y-24">
            <ImageTextSection
              image={equipmentImage}
              title="State-of-the-Art Equipment"
              description="Our operations utilize the latest mining technology and heavy equipment to ensure efficient extraction while maintaining the highest safety and environmental standards."
              bulletPoints={[
                "Advanced excavation and processing equipment",
                "Real-time monitoring and quality control systems",
                "Comprehensive safety protocols and employee training",
                "Regular equipment maintenance and upgrades",
              ]}
            />

            <ImageTextSection
              image={mineralsImage}
              title="Quality Iron Ore Production"
              description="We produce high-grade iron ore that meets international quality standards, serving both domestic and export markets with consistent quality and reliable delivery."
              bulletPoints={[
                "Rigorous quality testing and certification",
                "Consistent iron content and mineral composition",
                "Efficient logistics and delivery systems",
                "Full compliance with industry standards",
              ]}
              imageOnRight={true}
            />
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-24 bg-background border-t-4 border-primary transition-all duration-500 ease-in-out scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Our Commitment"
            title="Sustainability & CSR"
            description="We believe that successful mining operations must be environmentally sustainable and socially responsible. Our comprehensive sustainability program ensures we leave a positive legacy."
          />
          <FeatureGrid features={sustainabilityInitiatives} />
        </div>
      </section>

      {/* Community Engagement Section */}
      <section className="py-24 bg-muted/30 border-t-4 border-primary/20 transition-all duration-500 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageTextSection
            image={csrImage}
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

      {/* Investment Section */}
      <section id="investment" className="py-24 bg-background border-t-4 border-primary transition-all duration-500 ease-in-out scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Why Invest in Brihafa"
            title="Investment Opportunities"
            description="Brihafa offers investors the opportunity to participate in Nigeria's growing mining sector with a company that combines operational excellence with sustainable practices."
          />
          <FeatureGrid features={investmentHighlights} />
        </div>
      </section>

      {/* Investment Stats Section */}
      <section className="py-24 bg-muted/30 border-t-4 border-primary/20 transition-all duration-500 ease-in-out">
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

      {/* Investment Focus Areas Section */}
      <section className="py-24 bg-background transition-all duration-500 ease-in-out">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card border-t-4 border-primary transition-all duration-500 ease-in-out scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Contact Us"
            title="Get In Touch"
            description="Whether you're interested in investment opportunities, partnership discussions, or general inquiries, we'd love to hear from you."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Head Office</h3>
                      <p className="text-muted-foreground">
                        No. 20 Daura Road, Kofar Marusa Lay-out<br />
                        Katsina, Katsina State<br />
                        Nigeria
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">08065721492</p>
                      <p className="text-muted-foreground">09013486956</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@brihafa.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 text-primary">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
