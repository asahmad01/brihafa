import { Button } from "@/components/ui/button";

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  showCTA?: boolean;
}

export default function Hero({ backgroundImage, title, subtitle, showCTA = true }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          {subtitle}
        </p>

        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
              onClick={() => scrollToSection("about")}
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground"
              onClick={() => scrollToSection("contact")}
              data-testid="button-contact-us"
            >
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
