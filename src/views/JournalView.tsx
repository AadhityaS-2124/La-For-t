import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string[];
}

const journalArticles: Article[] = [
  {
    id: "silence-in-design",
    title: "Silence in Design: The Power of Negative Space",
    date: "May 12, 2026",
    category: "Reflections",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhn7Bp6y5lD4vqqH_jgvsGo9_gMjAssQBzNZHmfGfh6mz7DNHMsSUAg-AFkrz7Yf4Qy4bulq6PKgBOvovWne7w4aJov5LPDyqTo1zsY4XwH_GVo7XpjlJyYehncJ0-tNi7Y5Tm-GWf6j9es3Q1bCjhWI-uUvoKNq5Et4aWO20TCgg2OcbFEtBiCUKwCZqeONU5_J9SRiYAVCTPv7Y8gri00vp8SYpFq0YIKB2brSL8hZGdfGE4pGNTDNehNzAYOsdS6TwqY6kyxKE",
    excerpt: "Exploring the emotional value of breathing room in patterns, architecture, and daily routines.",
    content: [
      "In modern storefronts, we are constantly assaulted by noise. Banners flashes, recommendation carousels spin, and notifications chime. This visual and auditory overcrowding reflects a deeper anxiety—a fear of emptiness.",
      "In Japanese aesthetics, this emptiness is not considered dead space; it is celebrated as 'Ma'—the space between. It is the silence between notes that constitutes music. It is the empty courtyard that gives an estate its dignity.",
      "At La Forêt, we apply 'Ma' to pattern making. We design garments that do not cling or crowd the body. By allowing space to exist between fabric and skin, the garment responds naturally to movement, air currents, and posture. The negative space becomes an active participant in the drape and experience of the cloth.",
      "Choosing silence is not passive; it is a rigorous discipline. It requires the courage to resist decorative clutter and trust that a single, perfectly executed line will speak far louder than a chorus of ornaments."
    ]
  },
  {
    id: "machiya-restoration",
    title: "Kyoto Machiya: Restoring Our Creative Studio",
    date: "April 03, 2026",
    category: "Atelier",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCGiaSm0IoZouvs1zzSf6EVh7mWzqn7_NfyUOpcGqFgToolxUlyxYdohh0gXMg-dWoqtVbtjpcBgE5KP5SrQwDkYHb7lQ6cS6aGPr3_KrdFIRGnPlcAATKLmOueeu2raTj3YGMmTuhiv_rk_MiGIz1e4mDuCYBdYFDCRzysFqpsx52T5d2AlYTnrm3_q8qbQyn2d4FlXbU7BDGTJ1Nbnsap02FHdRHCsykrcmFZapG62YxjRvTsxEfos9afuiiGbr-ym11YMdz4dAI",
    excerpt: "Reflections on architecture, timber joinery, and the restoration of our design workroom.",
    content: [
      "Our creative studio is housed in a 120-year-old Machiya (a traditional wooden townhouse) in Kyoto. Restoring this space was an exercise in preservation and architectural alignment. We worked alongside local carpenters (Miyadaiku) who specialize in wood joinery that uses zero nails.",
      "Traditional Japanese architecture relies on interlocking joints. The wood columns hold together through friction, geometry, and load-bearing logic. This matches our zero-waste garment templates, where panels locking together form the final structure without plastic binders.",
      "By stripping away decades of modern drywall, we exposed the original cedar framing and clay walls. We laid local flagstone and constructed wide shoji panels that slide open to connect our workbench with a small, private stone garden.",
      "This studio is not just a place to work; it is our muse. The rhythmic play of light across the timber beams, the scent of cedar, and the silence of the garden inform every silhouette we draft."
    ]
  },
  {
    id: "circular-lifecycle",
    title: "Designing for Dismantlement",
    date: "March 20, 2026",
    category: "Sustainability",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkUDPIZYsSunFaI37pZRQsG8zb6j11WED8o55Iusui1MhkwfjIDvXjpSU00rJ9jD8ZVS6zHpwLe3rodJA0J2-Ox2616Pt53qAvr5__y2jJAOVwRJnkgKGa_IM-TVhg66eEhHQI4VSOx58W_o6BgjtzTd7tTxMyID6HoKIsfd4Oreye4qLM7-DlEBEbZkJoKt8N9Ayg-NcfZO43mAswq3zm6KPNNSVHBb08oundm5lhuSLzkq_XMcx5RRvzcnKnmk9M_K5Vol6CjNk",
    excerpt: "How zero-waste patterns and biodegradable bindings ensure our objects return to the earth.",
    content: [
      "A garment is only successful if its end is as clean as its beginning. Most modern clothing is constructed using composite materials—polyester threads sewing cotton panels, plastic interfacing glued inside collars, and steel zippers stitched into seams. These composites make recycling impossible.",
      "At La Forêt, we design for dismantlement. Every object is assembled using a single, natural fiber type. Cotton garments are stitched exclusively with organic cotton threads; wool sweaters are finished with wool yarn.",
      "If buttons are needed, we use raw corozo nuts or wood that can compost alongside the fabrics. We omit fusible chemical interfacings in favor of canvas structures that hold shape purely through tailoring, and we construct patterns that lock together with zero waste.",
      "When a coat or trousers reaches the end of its life—decades from now—it does not need to sit in a landfill. The threads can be cut, and the raw organic linen or wool can be fully composted, returning to the soil to grow the next harvest."
    ]
  }
];

export const JournalView: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const activeArticle = journalArticles.find(a => a.id === selectedArticleId);

  // Stagger entry animations
  const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, damping: 20 } }
  };

  if (activeArticle) {
    return (
      <section className="min-h-screen pt-36 pb-24 px-margin-mobile md:px-margin-desktop bg-[#FBFBF9] max-w-container-max mx-auto text-primary">
        {/* Back Link */}
        <div className="mb-12">
          <button
            onClick={() => setSelectedArticleId(null)}
            className="flex items-center gap-1.5 text-secondary hover:text-primary transition-colors py-1 group focus-visible:outline-none"
          >
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-x-1">
              arrow_back
            </span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider">Back to Journal</span>
          </button>
        </div>

        {/* Narrative Article Details */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="font-label-sm text-label-sm text-accent-sage uppercase tracking-widest block mb-4 font-semibold">
            {activeArticle.category} • {activeArticle.date}
          </span>
          <h1 className="font-headline-lg text-[36px] sm:text-[44px] md:text-[52px] leading-tight mb-12 text-primary font-normal">
            {activeArticle.title}
          </h1>

          <div className="aspect-[16/9] w-full bg-surface-container overflow-hidden mb-16 border border-primary/5">
            <img
              className="w-full h-full object-cover grayscale"
              src={activeArticle.image}
              alt={activeArticle.title}
            />
          </div>

          <div className="space-y-8 font-body-lg text-body-lg text-secondary leading-relaxed text-justify-custom font-light">
            {activeArticle.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.article>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-36 pb-24 px-margin-mobile md:px-margin-desktop bg-[#FBFBF9] max-w-container-max mx-auto text-primary">
      {/* Header */}
      <div className="text-center mb-20">
        <span className="font-label-sm text-[11px] text-accent-sage uppercase tracking-[0.25em] block mb-3 font-semibold">
          REFLECTIONS
        </span>
        <h1 className="font-headline-lg text-headline-lg mb-2 font-normal">The Journal</h1>
        <p className="font-body-md text-body-md text-secondary max-w-md mx-auto leading-relaxed font-light">
          Reflections on architectural garments, design philosophy, and sustainable studio practices.
        </p>
      </div>

      {/* Articles Grid with staggered entrance */}
      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-gutter"
      >
        {journalArticles.map((article) => (
          <motion.div
            key={article.id}
            variants={itemVariants}
            onClick={() => setSelectedArticleId(article.id)}
            className="group cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Image with zoom effect */}
              <div className="aspect-[4/3] w-full overflow-hidden mb-6 bg-surface-container border border-primary/5">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0"
                  src={article.image}
                  alt={article.title}
                />
              </div>

              {/* Meta details */}
              <span className="font-label-sm text-[11px] text-secondary uppercase tracking-widest block mb-2 font-semibold">
                {article.category} • {article.date}
              </span>

              {/* Title */}
              <h3 className="font-headline-md text-headline-md text-primary font-normal mb-4 group-hover:text-accent-sage transition-colors line-clamp-2">
                {article.title}
              </h3>

              {/* Excerpt excerpt */}
              <p className="font-body-md text-body-md text-secondary line-clamp-3 leading-relaxed font-light">
                {article.excerpt}
              </p>
            </div>

            {/* CTA action trigger */}
            <div className="mt-6 pt-4 border-t border-primary/5">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary border-b border-primary/20 pb-1 group-hover:border-primary transition-all font-semibold">
                Read Entry →
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
