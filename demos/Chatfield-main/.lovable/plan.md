

## Plan: Add Landscaping & Outdoor Projects Section

### What to do

1. **Create `src/components/Landscaping.tsx`** — A new section component styled consistently with existing sections (using `section-padding`, `container-custom`, same typography classes). Content:
   - Section title: "Landscaping & Outdoor Projects"
   - Paragraph explaining complete landscaping project delivery, collaboration with professional landscape designers
   - Paragraph about working with Suzan Quigg, with a link to www.suzanquigg.com
   - Note that clients can engage Suzan for design, which the construction team then builds
   - Use the `bg-card` or default background (alternating from Services which uses `bg-section-alt`)
   - Include a relevant Lucide icon (e.g., `Flower2` or `TreePine`) as visual accent

2. **Update `src/pages/Index.tsx`** — Import and place `<Landscaping />` between `<Services />` and `<HowWeWork />`

3. **Add "Landscaping" to Services grid** — Add a landscaping entry to the services array in `Services.tsx` with a `Flower2` icon to ensure it appears in the capabilities overview as well

### No changes to layout, design system, or other sections.

