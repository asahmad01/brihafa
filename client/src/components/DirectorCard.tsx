import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

interface DirectorCardProps {
  image: string;
  name: string;
  role: string;
  bio?: string;
  email?: string;
  linkedin?: string;
  imageScale?: number;
}

export default function DirectorCard({
  image,
  name,
  role,
  bio,
  linkedin,
  imageScale = 1,
}: DirectorCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-director-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          style={{ transform: `scale(${imageScale})` }}
          data-testid={`img-director-${name.toLowerCase().replace(/\s+/g, '-')}`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1" data-testid="text-director-name">{name}</h3>
        <div className="text-sm font-medium uppercase tracking-wide text-primary mb-4">
          {role}
        </div>
        {bio && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4">
            {bio}
          </p>
        )}
        {linkedin && (
          <div className="flex gap-3">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-director-linkedin"
            >
              <Linkedin size={18} />
            </a>
          </div>
        )}
      </div>
    </Card>
  );
}
