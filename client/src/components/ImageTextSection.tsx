interface ImageTextSectionProps {
  image: string;
  title: string;
  description: string;
  bulletPoints?: string[];
  imageOnRight?: boolean;
}

export default function ImageTextSection({
  image,
  title,
  description,
  bulletPoints,
  imageOnRight = false,
}: ImageTextSectionProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${imageOnRight ? "lg:grid-flow-col-dense" : ""}`}>
      <div className={imageOnRight ? "lg:col-start-2" : ""}>
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-md object-cover"
          data-testid="img-section"
        />
      </div>
      <div className={imageOnRight ? "lg:col-start-1 lg:row-start-1" : ""}>
        <h3 className="text-3xl font-bold mb-6" data-testid="text-section-title">{title}</h3>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="space-y-3">
            {bulletPoints.map((point, index) => (
              <li
                key={index}
                className="flex items-start"
                data-testid={`list-item-${index}`}
              >
                <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
