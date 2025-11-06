import FeatureGrid from '../FeatureGrid'
import { Shield, Zap, Target } from 'lucide-react'

export default function FeatureGridExample() {
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
  ]

  return <FeatureGrid features={features} />
}
