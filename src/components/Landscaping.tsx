import { Flower2, ExternalLink } from "lucide-react";

const Landscaping = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <div className="icon-badge-gold mx-auto mb-4">
            <Flower2 className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3 md:mb-4 font-display">
            Landscaping & Outdoor Projects
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
            We deliver complete landscaping projects designed to integrate seamlessly with the architecture and surrounding environment. By collaborating with professional landscape designers from the outset, outdoor spaces are planned, coordinated and delivered as part of a unified project.
          </p>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
            We work with landscape designer{" "}
            <strong className="text-foreground">Suzan Quigg</strong> to help clients achieve well-considered outdoor environments. Clients can engage Suzan for professional landscape design, which our team then builds and brings to life.
          </p>
          <a
            href="https://www.suzanquigg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-accent hover:underline transition-colors"
          >
            Suzan Quigg – Landscape Design
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landscaping;
