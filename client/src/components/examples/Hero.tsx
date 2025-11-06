import Hero from '../Hero'
import heroImage from '@assets/generated_images/Mining_team_workers_073f3175.png'

export default function HeroExample() {
  return (
    <Hero
      backgroundImage={heroImage}
      title="Building Nigeria's Iron Future"
      subtitle="Leading the way in sustainable iron ore and mineral mining with over 10 years of excellence"
    />
  )
}
