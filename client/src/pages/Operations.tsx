import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ImageTextSection from "@/components/ImageTextSection";
import Footer from "@/components/Footer";
import equipmentImage from "@assets/generated_images/Mining_equipment_close-up_6c99bd20.png";
import mineralsImage from "@assets/generated_images/Iron_ore_materials_dcbbbac5.png";
import heroImage from "@assets/generated_images/Mining_operations_hero_image_cefb684f.png";

export default function Operations() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        backgroundImage={heroImage}
        title="Our Operations"
        subtitle="Advanced mining operations across Nigeria utilizing cutting-edge technology"
        showCTA={false}
      />

      <section className="py-24 bg-background transition-all duration-500 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="What We Do"
            title="Mining Excellence"
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

      <Footer />
    </div>
  );
}
