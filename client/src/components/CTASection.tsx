import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink,
}: CTASectionProps) {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-cta-title">
          {title}
        </h2>
        <p className="text-lg lg:text-xl mb-8 opacity-90" data-testid="text-cta-description">
          {description}
        </p>
        <Link href={buttonLink}>
          <Button
            size="lg"
            variant="outline"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            data-testid="button-cta"
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
}
