import { Home, Wrench, Building2, Settings, PackageOpen, ShieldCheck, Warehouse, Hammer, Star } from "lucide-react";

const services = [
  { icon: Home, title: "Residential Roller Doors", description: "Quality roller doors for homes — improving security, curb appeal and everyday convenience" },
  { icon: Building2, title: "Commercial Roller Doors", description: "Heavy-duty roller door solutions for small businesses, warehouses and light commercial premises" },
  { icon: PackageOpen, title: "Custom Shed Construction", description: "Customisable steel shed designs built to suit your backyard, farm or commercial site" },
  { icon: Warehouse, title: "Shed Installation", description: "Professional shed installation ensuring your new structure is safe, secure and built to last" },
  { icon: Wrench, title: "Roller Door Repairs", description: "Fast, reliable repairs for all makes and models of roller doors to restore full function" },
  { icon: Settings, title: "Roller Door Maintenance", description: "Routine servicing to keep your roller doors running smoothly and extend their lifespan" },
  { icon: ShieldCheck, title: "Security Upgrades", description: "Upgrade your existing roller door or shed with improved locking and security hardware" },
  { icon: Hammer, title: "Shed Repairs & Maintenance", description: "Repairs, cladding replacement and structural maintenance for existing sheds" },
  { icon: Star, title: "Free Measure & Quote", description: "Obligation-free on-site assessment with tailored recommendations and transparent pricing" },
];

const Services = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3 md:mb-4 font-display">
            Our Services
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            Roller door and shed solutions for residential and light commercial properties — from supply and installation through to ongoing repairs and maintenance.
          </p>
        </div>

        {/* Services Grid - 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-4 md:p-6 border border-border hover:border-accent/50 card-hover text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="icon-badge-gold mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl">
                <service.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 md:mb-2 font-sans text-sm md:text-base">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed hidden sm:block">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
