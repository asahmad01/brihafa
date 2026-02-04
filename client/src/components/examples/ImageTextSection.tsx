import ImageTextSection from '../ImageTextSection'
import equipmentImage from '@assets/generated_images/Mining_equipment_close-up_6c99bd20.png'

export default function ImageTextSectionExample() {
  return (
    <ImageTextSection
      image={equipmentImage}
      title="State-of-the-Art Mining Operations"
      description="Our operations utilize the latest mining technology and equipment to ensure efficient extraction while maintaining environmental standards."
      bulletPoints={[
        "Advanced excavation and processing equipment",
        "Real-time monitoring and quality control systems",
        "Comprehensive safety protocols and training",
        "Sustainable mining practices and land reclamation"
      ]}
    />
  )
}
