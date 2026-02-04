import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <Card
            key={index}
            className="p-8 hover-elevate transition-all duration-300"
            data-testid={`card-feature-${index}`}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 text-primary">
                <Icon size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3" data-testid="text-feature-title">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
