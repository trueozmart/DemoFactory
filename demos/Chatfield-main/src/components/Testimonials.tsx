import { useState } from "react";
import { Star, Quote, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    text: "Really happy with the roller door MB installed for our garage. The whole process was easy — they came out promptly, gave us a clear quote and had it done within a week. The door looks great and operates smoothly. Highly recommend.",
    author: "Sarah Mitchell",
    location: "Local Homeowner",
  },
  {
    text: "We had a large shed installed in the backyard and couldn't be more pleased. The team was professional and the finished result is exactly what we wanted. Solid build, clean installation and very competitive pricing.",
    author: "Mark Davidson",
    location: "Residential Customer",
  },
  {
    text: "Our old roller door finally gave up and MB had it repaired the same week we called. Friendly, efficient service and the price was fair. Will definitely use them again for any future work.",
    author: "Karen Hughes",
    location: "Local Homeowner",
  },
  {
    text: "Excellent experience from start to finish. They helped us choose the right roller door for our property and the installation was done neatly and professionally. Very happy with the quality of the product.",
    author: "Tom Richards",
    location: "Residential Customer",
  },
  {
    text: "We had a custom shed built for our small business and MB did a fantastic job. They understood what we needed, suggested the right options and delivered on time. The shed is well-made and exactly what we asked for.",
    author: "Lisa Nguyen",
    location: "Small Business Owner",
  },
  {
    text: "Great communication throughout the whole job. Turned up when they said they would, worked tidily and the roller door is top quality. It's made a real difference to the security and look of our home.",
    author: "James O'Brien",
    location: "Local Homeowner",
  },
  {
    text: "Had two roller doors replaced and a shed installed at our property. MB handled everything professionally and the pricing was transparent with no surprises. Very satisfied with the outcome.",
    author: "Rachel Foster",
    location: "Residential Customer",
  },
  {
    text: "I called MB after another company left us waiting. They were out within days, gave us a proper quote and completed the job quickly and cleanly. Excellent workmanship and genuinely good people to deal with.",
    author: "Craig Saunders",
    location: "Local Homeowner",
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
            Hear from homeowners and small business owners who've trusted MB Roller Doors & Sheds with their installation and repair needs.
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
