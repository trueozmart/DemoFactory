import { Phone, MapPin, Star, Check, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Roller Door Supply & Installation",
  "Custom Shed Construction",
  "Roller Door Repairs",
  "Shed Maintenance",
  "Residential Roller Doors",
  "Commercial Roller Doors",
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pb-20 md:pb-0">
      <div className="container-custom section-padding">
        <div className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-3">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="mb-3 md:mb-4">
              <span className="text-primary-foreground font-bold text-xl md:text-2xl font-display leading-tight">
                MB Roller Doors & Sheds
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Quality roller doors and sheds. Built to last.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-primary-foreground/80 text-xs md:text-sm">5-Star Reviews</span>
            </div>
            <a
              href="https://www.facebook.com/MBRollerDoorsAndSheds"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
            >
              <Facebook className="w-4 h-4 text-accent" />
              Follow us on Facebook
            </a>
          </div>

          {/* Services - 2 columns on mobile */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6 font-sans">Our Services</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2 md:gap-3 text-primary-foreground/80 text-sm">
                  <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6 font-sans">Contact Us</h4>
            <div className="space-y-3 md:space-y-4 mb-5 md:mb-6">
              <a href="tel:+61422652987" className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-primary-foreground/80 text-sm hover:text-accent transition-colors">
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0" />
                <span>0422 652 987</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-primary-foreground/80 text-sm">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0" />
                <span>Contact us for service area details</span>
              </div>
            </div>
            <a href="tel:+61422652987">
              <Button variant="footer" size="default" className="hidden md:inline-flex">
                Get a Free Quote
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-8 md:mt-12 pt-6 md:pt-8">
          <p className="text-center text-primary-foreground/60 text-xs md:text-sm">
            © {new Date().getFullYear()} MB Roller Doors and Sheds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
