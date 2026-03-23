import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import images
import project1 from "@/assets/gallery/construction-project-1.jpg";
import project2 from "@/assets/gallery/construction-project-2.jpg";
import project3 from "@/assets/gallery/construction-project-3.jpg";
import project4 from "@/assets/gallery/construction-project-4.jpg";
import project5 from "@/assets/gallery/construction-project-5.jpg";

// Track preloaded images to avoid duplicate requests
const preloadedImages = new Set<string>();

const preloadImage = (src: string) => {
  if (preloadedImages.has(src)) return;
  preloadedImages.add(src);
  const img = new Image();
  img.src = src;
};

const preloadImages = (images: string[]) => {
  images.forEach(preloadImage);
};

interface GalleryImage {
  src: string;
  suburb: string;
  service: string;
}

const galleryImages: GalleryImage[] = [
  { src: project1, suburb: "Roller Door Installation", service: "Supply & Professional Install" },
  { src: project2, suburb: "Custom Shed Build", service: "Steel Shed Construction" },
  { src: project3, suburb: "Shed Interior Fit-Out", service: "Organised Storage Solution" },
  { src: project4, suburb: "Roller Door Maintenance", service: "Servicing & Repairs" },
  { src: project5, suburb: "Residential Installation", service: "Roller Door & Shed Package" },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          preloadImages(galleryImages.map((img) => img.src));
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    preloadImage(galleryImages[nextIndex].src);
    preloadImage(galleryImages[prevIndex].src);
  }, [currentImageIndex]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  return (
    <section id="gallery" className="section-padding bg-muted/30" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our completed roller door and shed installations.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative max-w-2xl mx-auto">
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl shadow-lg border border-border cursor-pointer"
            onClick={() => openLightbox(currentImageIndex)}
          >
            <img
              src={galleryImages[currentImageIndex].src}
              alt={`${galleryImages[currentImageIndex].suburb} - ${galleryImages[currentImageIndex].service}`}
              className="w-full h-full object-cover transition-opacity duration-300"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-5">
              <p className="text-white font-bold text-lg">{galleryImages[currentImageIndex].suburb}</p>
              <p className="text-white/90 text-sm">{galleryImages[currentImageIndex].service}</p>
            </div>
          </div>

          <button onClick={prevImage} className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow-lg hover:bg-muted rounded-full transition-colors border border-border" aria-label="Previous image">
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button onClick={nextImage} className="absolute right-2 md:-right-14 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow-lg hover:bg-muted rounded-full transition-colors border border-border" aria-label="Next image">
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentImageIndex ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-2">
            {currentImageIndex + 1} of {galleryImages.length}
          </p>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox} onKeyDown={handleKeyDown} tabIndex={0} role="dialog" aria-modal="true">
            <button onClick={closeLightbox} className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors" aria-label="Close lightbox">
              <X className="w-6 h-6 text-white" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors" aria-label="Previous image">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <div className="max-w-[90vw] max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
              <img src={galleryImages[currentImageIndex].src} alt={`${galleryImages[currentImageIndex].suburb} - ${galleryImages[currentImageIndex].service}`} className="max-w-full max-h-[85vh] object-contain rounded-lg" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                <p className="text-white font-bold text-lg text-center">{galleryImages[currentImageIndex].suburb}</p>
                <p className="text-white/90 text-sm text-center">{galleryImages[currentImageIndex].service}</p>
              </div>
            </div>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors" aria-label="Next image">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
