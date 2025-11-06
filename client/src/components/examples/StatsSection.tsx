import StatsSection, { TrendingUp, Users, Award, Globe } from '../StatsSection'

export default function StatsSectionExample() {
  const stats = [
    {
      icon: <Award size={48} />,
      value: "10+",
      label: "Years of Excellence",
    },
    {
      icon: <TrendingUp size={48} />,
      value: "500K",
      label: "Tons Annual Capacity",
    },
    {
      icon: <Users size={48} />,
      value: "200+",
      label: "Skilled Employees",
    },
    {
      icon: <Globe size={48} />,
      value: "15+",
      label: "Active Mining Sites",
    },
  ]

  return <StatsSection stats={stats} />
}
