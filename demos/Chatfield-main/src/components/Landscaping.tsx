import { PackageCheck, ExternalLink } from "lucide-react";

const Landscaping = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <div className="icon-badge-gold mx-auto mb-4">
            <PackageCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3 md:mb-4 font-display">
            Australian-Made Products & Custom Solutions
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
            We source and install quality Australian-made roller doors and sheds designed to handle the demands of the Australian climate. From Colorbond steel sheds to premium roller door panels, every product we supply is selected for durability, security and long-term performance.
          </p>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
            Every installation is tailored to your property. We work with you to choose the right size, style and finish — ensuring your roller door or shed integrates seamlessly with your home or business and meets your specific needs.
          </p>
          <a
            href="https://www.facebook.com/MBRollerDoorsAndSheds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-accent hover:underline transition-colors"
          >
            View Our Work on Facebook
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landscaping;
