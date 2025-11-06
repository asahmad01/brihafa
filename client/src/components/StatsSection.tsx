import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Award, Globe } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

function AnimatedNumber({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Extract number and suffix (like K, +)
  const matches = value.match(/^(\d+)([K+]*)/);
  const targetNumber = matches ? parseInt(matches[1]) : 0;
  const suffix = matches ? matches[2] : "";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = targetNumber / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= targetNumber) {
              setCount(targetNumber);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [targetNumber, hasAnimated]);

  return (
    <div ref={ref}>
      {count}{suffix}
    </div>
  );
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-12 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <div className="flex justify-center mb-3 text-primary">
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2" data-testid={`stat-value-${index}`}>
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { TrendingUp, Users, Award, Globe };
