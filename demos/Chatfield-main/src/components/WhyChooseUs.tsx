import { Shield, Award, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality You Can Count On",
    description:
      "We supply and install Australian-made roller doors and sheds built to withstand the demands of everyday use and the Australian climate.",
    colorClass: "icon-badge-blue",
  },
  {
    icon: Award,
    title: "Local Knowledge & Expertise",
    description:
      "As a local operator, we understand the needs of Australian homeowners and small businesses, providing personalised advice and workmanship you can trust.",
    colorClass: "icon-badge-green",
  },
  {
    icon: Users,
    title: "Tailored to Your Property",
    description:
      "Every installation is customised — we assess your site, advise on the best solutions and deliver a result that fits your space, style and budget.",
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
            Why Choose MB Roller Doors & Sheds
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            We combine quality Australian-made products with honest, personalised service — delivering roller door and shed solutions that are built to last.
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
