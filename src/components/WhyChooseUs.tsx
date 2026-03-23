import { Shield, Award, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Delivery",
    description:
      "Proven experience across schools, councils, healthcare and commercial environments.",
    colorClass: "icon-badge-blue",
  },
  {
    icon: Award,
    title: "Safety Focused",
    description:
      "Strong WHS systems ensuring works are completed safely and in compliance with Australian Standards.",
    colorClass: "icon-badge-green",
  },
  {
    icon: Users,
    title: "In-House Capability",
    description:
      "Own plant, equipment and timber milling allowing greater flexibility and quality control.",
    colorClass: "icon-badge-purple",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3 md:mb-4 font-display">
            Why Clients Trust Us
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            Self-sufficient delivery backed by over 20 years of industry experience, in-house plant and equipment, and deep local knowledge.
          </p>
        </div>

        {/* Features Grid - Stack on mobile */}
        <div className="grid gap-4 md:gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 border border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.colorClass} mb-4 md:mb-6 w-12 h-12 md:w-14 md:h-14`}>
                <feature.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 font-sans">{feature.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
