import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">BRIHAFA</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading iron ore and mineral mining company committed to excellence and sustainable practices.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-muted-foreground hover:text-primary block"
                data-testid="link-footer-about"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("operations")}
                className="text-sm text-muted-foreground hover:text-primary block"
                data-testid="link-footer-operations"
              >
                Operations
              </button>
              <button
                onClick={() => scrollToSection("sustainability")}
                className="text-sm text-muted-foreground hover:text-primary block"
                data-testid="link-footer-sustainability"
              >
                Sustainability
              </button>
              <button
                onClick={() => scrollToSection("investment")}
                className="text-sm text-muted-foreground hover:text-primary block"
                data-testid="link-footer-investment"
              >
                Investment
              </button>
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  No. 20 Daura Road, Kofar Marusa Lay-out, Katsina, Katsina State, Nigeria
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={16} className="mt-1 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <div>08065721492</div>
                  <div>09013486956</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={16} className="mt-1 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  info@brihafa.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Brihafa Iron Ore Mining Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
