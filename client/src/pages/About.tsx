import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import DirectorCard from "@/components/DirectorCard";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import teamImage from "@assets/generated_images/Mining_team_workers_073f3175.png";
import director1 from "@assets/generated_images/Ahmad_Aliyu_Yaradua.jpeg";
import director2 from "@assets/generated_images/Professor_Aliyu_Kankara.jpeg";
import director3 from "@assets/generated_images/Engr_Muntari_Zubairu_Muhammad.jpeg";
import director4 from "@assets/generated_images/Dr_Umar_Farouk_Saeed_Yaradua.jpeg";

export default function About() {
  const directors = [
    {
      image: director1,
      name: "Ahmad Aliyu Yar'adua",
      role: "Chief Executive Officer",
      bio: "With over 20 years of experience in the mining industry, Ahmad leads Brihafa's strategic vision and operational excellence across all our mining sites.",
      email: "a.yaradua@brihafa.com",
    },
    {
      image: director2,
      name: "Professor Aliyu Kankara",
      role: "Chief Financial Officer",
      bio: "A seasoned financial expert with extensive experience in the natural resources sector, Professor Kankara oversees all financial operations and investor relations.",
      email: "a.kankara@brihafa.com",
    },
    {
      image: director3,
      name: "Engr Muntari Zubairu Muhammad",
      role: "Chief Operations Officer",
      bio: "A mining engineer with 18 years of hands-on experience, Engr. Muhammad ensures operational efficiency and safety across all Brihafa mining operations.",
      email: "m.muhammad@brihafa.com",
    },
    {
      image: director4,
      name: "Dr Umar Farouk Sa'eed Yar'adua",
      role: "Chief Technical Officer",
      bio: "An expert in mining technology and innovation, Dr. Yar'adua drives technological advancement and ensures our operations meet international standards.",
      email: "u.yaradua@brihafa.com",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        backgroundImage={teamImage}
        title="About Brihafa"
        subtitle="Building Nigeria's mining industry through excellence, innovation, and sustainable practices"
        showCTA={false}
      />

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directors.map((director, index) => (
              <DirectorCard key={index} {...director} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
