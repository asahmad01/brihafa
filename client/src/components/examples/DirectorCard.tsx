import DirectorCard from '../DirectorCard'
import directorImage from '@assets/generated_images/Ahmad_Aliyu_Yaradua.jpeg'

export default function DirectorCardExample() {
  return (
    <div className="max-w-sm">
      <DirectorCard
        image={directorImage}
        name="Ahmad Aliyu Yar'adua"
        role="Chief Executive Officer"
        bio="With over 20 years of experience in the mining industry, Ahmad leads Brihafa's strategic vision and operational excellence."
        email="a.yaradua@brihafa.com"
        linkedin="https://linkedin.com"
      />
    </div>
  )
}
