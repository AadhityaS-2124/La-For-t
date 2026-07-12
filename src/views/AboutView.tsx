import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AboutView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Set up scroll linked values for parallax on the main image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform scroll position into y translations and scale factors
  const imageY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.0, 1.1]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 80, damping: 20 }
    }
  };

  return (
    <section className="min-h-screen pt-36 pb-32 bg-[#FBFBF9] text-primary" ref={containerRef}>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Editorial Page Title */}
        <div className="text-center mb-24">
          <span className="font-label-sm text-label-sm text-accent-sage uppercase tracking-[0.25em] block mb-3 font-semibold">
            The Atelier Story
          </span>
          <h1 className="font-headline-xl text-[48px] sm:text-[56px] md:text-headline-xl mt-4 mb-8 text-primary italic font-normal">
            "The Aesthetics of Silence"
          </h1>
          <div className="w-16 h-[1px] bg-primary/20 mx-auto"></div>
        </div>

        {/* Large Editorial Hero Image with Parallax Scroll */}
        <div className="w-full h-[500px] md:h-[600px] overflow-hidden bg-surface-container mb-24 relative border border-primary/5">
          <motion.div
            initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <motion.img
              style={{ y: imageY, scale: imageScale }}
              className="w-full h-[120%] object-cover grayscale hover:grayscale-0 transition-all duration-[1200ms] absolute -top-[10%]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGiaSm0IoZouvs1zzSf6EVh7mWzqn7_NfyUOpcGqFgToolxUlyxYdohh0gXMg-dWoqtVbtjpcBgE5KP5SrQwDkYHb7lQ6cS6aGPr3_KrdFIRGnPlcAATKLmOueeu2raTj3YGMmTuhiv_rk_MiGIz1e4mDuCYBdYFDCRzysFqpsx52T5d2AlYTnrm3_q8qbQyn2d4FlXbU7BDGTJ1Nbnsap02FHdRHCsykrcmFZapG62YxjRvTsxEfos9afuiiGbr-ym11YMdz4dAI"
              alt="Japanese architecturally-inspired atelier garden and framing"
            />
          </motion.div>
        </div>

        {/* Brand Narrative Block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter mb-32"
        >
          {/* Main Manifesto Quote Statement */}
          <motion.div variants={itemVariants} className="lg:col-span-5 pr-0 lg:pr-12">
            <h2 className="font-headline-lg text-[32px] md:text-headline-lg font-normal mb-8 leading-tight text-primary">
              Honoring raw materials, structural clarity, and deliberate construction.
            </h2>
            <p className="font-body-lg text-body-lg text-[#7A827A] font-light">
              At La Forêt, we design garments not as passing trends, but as structural objects meant to coexist with their wearer.
            </p>
          </motion.div>

          {/* Subtext Paragraphs */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-8 text-secondary font-body-md text-body-md leading-relaxed text-justify-custom font-light"
          >
            <p>
              Established in 2024, our studio represents a deliberate synthesis of Japanese architectural rigor and Scandinavian functional warmth—a philosophy widely described as Japandi. We operate out of a restored timber Machiya in the heart of Kyoto and collaborate with micro-millers and wool farms globally to enforce an absolute traceable supply chain.
            </p>
            <p>
              Our design process is subtraction-based. We begin by drafting silhouette concepts inspired by brutalist geometry and traditional wood joints. We iterate continuously, removing buttons, seams, and linings until we arrive at the absolute, pure expression of the garment's form. If an element does not perform a functional duty, it does not earn its place on the pattern.
            </p>
            <p>
              We prioritize organic fabrics that carry histories. Our heavy linen is woven on traditional narrow shuttle looms in Belgium; our raw hemp and cotton fibers are colored using natural earth clays, ash, and plant juices. These textiles are designed to react to humidity, wear, and sunlight—developing a unique patina that reflects the story of the individual.
            </p>
          </motion.div>
        </motion.div>

        {/* Aesthetic Horizontal Divider line */}
        <div className="w-full h-[1px] bg-primary/20 mb-32" />

        {/* Triple Pillar Layout with Scroll Fade Staggers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-gutter"
        >
          <motion.div variants={itemVariants} className="space-y-4 border-l border-primary/10 pl-6">
            <span className="font-label-sm text-[11px] text-accent-sage uppercase tracking-widest block font-semibold">Pillar 01</span>
            <h3 className="font-headline-md text-headline-md text-primary font-normal">Radical Sourcing</h3>
            <p className="font-body-md text-body-md text-secondary leading-relaxed font-light">
              We audit every farm, loom, and dye vat. Our New Zealand merino sheep roam freely, and our Kyoto weaving partners operate under fair, generational structures.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-4 border-l border-primary/10 pl-6">
            <span className="font-label-sm text-[11px] text-accent-sage uppercase tracking-widest block font-semibold">Pillar 02</span>
            <h3 className="font-headline-md text-headline-md text-primary font-normal">Zero-Waste Craft</h3>
            <p className="font-body-md text-body-md text-secondary leading-relaxed font-light">
              We design pattern templates where pieces lock together like puzzles, leaving zero fabric waste. Any residual scraps are carded back into new yarn.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-4 border-l border-primary/10 pl-6">
            <span className="font-label-sm text-[11px] text-accent-sage uppercase tracking-widest block font-semibold">Pillar 03</span>
            <h3 className="font-headline-md text-headline-md text-primary font-normal">Designed to Dismantle</h3>
            <p className="font-body-md text-body-md text-secondary leading-relaxed font-light">
              Every garment is stitched with organic cotton thread and fitted with zero plastic binders. At its end of life, it can be dismantled and fully returned to the soil.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
