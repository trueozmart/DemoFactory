import { Home, Wrench, Hammer, Building2, PaintBucket, Ruler, HardHat, TreePine, Flower2 } from "lucide-react";

const services = [
  { icon: TreePine, title: "Playground Design & Construction", description: "Nature playgrounds for schools, councils and community spaces" },
  { icon: Building2, title: "School & Government Works", description: "Construction, upgrades and maintenance within operational facilities" },
  { icon: PaintBucket, title: "Commercial Fit-Outs", description: "Retail, clinic and workspace construction" },
  { icon: HardHat, title: "Civil Works", description: "Site preparation, concreting and infrastructure works" },
  { icon: Ruler, title: "Concreting", description: "Form, set, pour and finish capability" },
  { icon: Hammer, title: "Fencing & External Works", description: "Boundary fencing, gates and external structures" },
  { icon: Home, title: "Re-Roofing & Bathroom Renovations", description: "Residential maintenance and upgrade capability" },
  { icon: Wrench, title: "Timber Construction", description: "Custom structural and architectural timber elements" },
  { icon: Flower2, title: "Landscaping", description: "Complete outdoor projects in collaboration with professional landscape designers" },
];

const Services = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3 md:mb-4 font-display">
            Our Capabilities
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            Building, civil and landscaping solutions for government, education, commercial and community clients across the Atherton Tablelands and Cairns region.
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
