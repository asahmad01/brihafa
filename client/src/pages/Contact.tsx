import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import equipmentImage from "@assets/generated_images/Mining_equipment_close-up_6c99bd20.png";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero
        backgroundImage={equipmentImage}
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, partnerships, or investment opportunities"
        showCTA={false}
      />

      <section className="py-24 bg-background transition-all duration-500 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're interested in investment opportunities, partnership discussions, or general inquiries, we'd love to hear from you.
              </p>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Head Office</h3>
                      <p className="text-muted-foreground">
                        123 Mining District<br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+234 123 456 7890</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@brihafa.com</p>
                      <p className="text-muted-foreground">investment@brihafa.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 text-primary">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground transition-all duration-500 ease-in-out">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Learning More?</h2>
          <p className="text-lg opacity-90">
            Contact us today to discover how Brihafa can be your partner in Nigeria's mining sector.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
