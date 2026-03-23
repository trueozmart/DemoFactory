import { useState } from "react";
import { Star, Quote, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    text: "Highly recommend. Excellent communication and attention to detail. I needed a last minute job done and Trent came straight out! He arrived when he said he would, his team was professional and knowledgeable and their work is top tier! I would recommend Trent and his team to everyone! I would use Trent and his team again for sure!",
    author: "Braden Stewart",
    location: "Atherton QLD",
  },
  {
    text: "We engaged Chatfield for maintenance and upgrade works across one of our council facilities. Their communication was excellent and they delivered the project safely and on time.",
    author: "Daniel Wright",
    location: "Mareeba QLD",
  },
  {
    text: "Chatfield completed concreting and site works for our commercial premises in Tolga. Professional, well organised and easy to work with throughout the process.",
    author: "Liam Porter",
    location: "Tolga QLD",
  },
  {
    text: "Our healthcare facility required works in an operational environment and Chatfield handled it extremely professionally. Safety and minimal disruption were clearly a priority.",
    author: "Rebecca Collins",
    location: "Cairns QLD",
  },
  {
    text: "We've worked with Chatfield on civil preparation and fencing works in Malanda. Their equipment and in-house capability made the process efficient from start to finish.",
    author: "Jason Turner",
    location: "Malanda QLD",
  },
  {
    text: "Chatfield completed a shop fit-out for our local business in Mareeba. The finish was excellent and the project was delivered within our timeframe.",
    author: "Chloe Bennett",
    location: "Mareeba QLD",
  },
  {
    text: "They handled structural timber installations for a landscape project in Herberton and the quality of workmanship was impressive. Their milling capability made a real difference.",
    author: "Ben Lawson",
    location: "Herberton QLD",
  },
  {
    text: "We engaged Chatfield for site preparation and concreting for a small infrastructure project near Tolga. Professional team and a smooth delivery.",
    author: "Nathan O'Connor",
    location: "Tolga QLD",
  },
];

const INITIAL_COUNT = 6;
const TEXT_CLAMP_THRESHOLD = 200;

const TestimonialCard = ({ testimonial, index, isGrid }: { testimonial: typeof testimonials[0]; index: number; isGrid: boolean }) => {
  const [expanded, setExpanded] = useState(false);
  const isLongText = testimonial.text.length > TEXT_CLAMP_THRESHOLD;

  return (
    <div
      className={`bg-card rounded-xl md:rounded-2xl p-5 md:p-6 border border-border card-hover animate-fade-in-up ${!isGrid ? 'flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-auto snap-center' : ''}`}
      style={{ animationDelay: `${(index % 6) * 0.1}s` }}
    >
      {/* Quote Icon */}
      <Quote className="w-6 h-6 md:w-8 md:h-8 text-accent/30 mb-3 md:mb-4" />
      
      {/* Stars */}
      <div className="flex mb-3 md:mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-accent text-accent" />
        ))}
      </div>

      {/* Testimonial Text */}
      <div className="mb-4 md:mb-6">
        <p className={`text-foreground leading-relaxed text-sm ${!expanded && isLongText ? 'line-clamp-4' : ''}`}>
          "{testimonial.text}"
        </p>
        {isLongText && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-primary hover:text-primary/80 text-sm font-medium mt-2 flex items-center gap-1 transition-colors"
          >
            {expanded ? (
              <>
                Show less <ChevronUp className="w-3 h-3" />
              </>
            ) : (
              <>
                Read more <ChevronDown className="w-3 h-3" />
              </>
            )}
          </button>
        )}
      </div>

      {/* Author */}
      <div className="border-t border-border pt-3 md:pt-4">
        <p className="font-semibold text-foreground text-sm md:text-base">
          {testimonial.author}
        </p>
        <p className="text-xs md:text-sm text-muted-foreground">
          {testimonial.location}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, INITIAL_COUNT);
  const remainingCount = testimonials.length - INITIAL_COUNT;

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3 md:mb-4 font-display">
            What Our Clients Say
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            Real reviews from homeowners and businesses across the Atherton Tablelands. See why locals trust us with their construction projects.
          </p>
        </div>

        {/* Testimonials - Horizontal scroll on mobile, grid on desktop */}
        <div className={`${showAll ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6' : 'flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-0 md:px-0'}`}>
          {displayedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.author}-${index}`}
              testimonial={testimonial}
              index={index}
              isGrid={showAll}
            />
          ))}
        </div>

        {/* View More / View Less Button */}
        {testimonials.length > INITIAL_COUNT && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="gap-2"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  View {remainingCount} More Reviews
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
