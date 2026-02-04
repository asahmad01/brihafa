interface SectionHeaderProps {
  overline?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  overline,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""} animate-in fade-in duration-700`}>
      {overline && (
        <div className="text-xs font-semibold uppercase tracking-wide text-primary mb-4">
          {overline}
        </div>
      )}
      <h2 className="text-3xl lg:text-4xl font-semibold mb-6 tracking-tight" data-testid="section-title">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="section-description">
          {description}
        </p>
      )}
    </div>
  );
}
