import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    title: "Free Measure & Quote",
    description: "We visit your property, assess your requirements and provide a clear, obligation-free quote tailored to your site and budget.",
  },
  {
    number: 2,
    title: "Product Selection & Planning",
    description:
      "We help you choose the right roller door or shed — style, size, colour and finish — to suit your property and personal preferences.",
  },
  {
    number: 3,
    title: "Professional Installation",
    description:
      "Our experienced team installs your roller door or shed efficiently and safely, using quality Australian-made products and proven techniques.",
  },
  {
    number: 4,
    title: "Quality Check & Handover",
    description:
      "We carry out a thorough inspection before handover, ensuring everything operates correctly and you're completely satisfied with the result.",
  },
];

const HowWeWork = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <div className="animate-fade-in-up text-center lg:text-left" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2 md:mb-3 font-display">
              How We Work
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground mb-5 md:mb-6 leading-relaxed">
              A simple, straightforward process — from your first enquiry through to a completed installation you can rely on.
            </p>

            {/* Steps */}
            <div className="space-y-4 md:space-y-5 mb-6">
              {steps.map((step) => (
                <div key={step.number} className="text-left">
                  <div className="flex items-center gap-2.5 md:gap-3 mb-1">
                    <div className="number-badge flex-shrink-0 w-8 h-8 md:w-10 md:h-10 text-xs md:text-sm">
                      {step.number}
                    </div>
                    <h3 className="font-bold text-foreground font-sans text-sm md:text-base">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed pl-10 md:pl-12">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="tel:+61422652987" className="block w-full sm:w-auto">
              <Button variant="gold" size="lg" className="gap-3 w-full min-h-[52px]">
                <Phone className="w-5 h-5" />
                Call 0422 652 987
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
