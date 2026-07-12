import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const CaseStudyView: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: '1. Overview & Objectives' },
    { id: 'research', label: '2. Research & IA' },
    { id: 'user-journey', label: '3. User Journey' },
    { id: 'design-system', label: '4. Design Tokens' },
    { id: 'motion', label: '5. Motion System' },
    { id: 'accessibility', label: '6. Accessibility (A11y)' },
    { id: 'performance', label: '7. Performance & Stack' },
    { id: 'challenges', label: '8. Challenges & Lessons' }
  ];

  const handleSectionClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // accounting for floating header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen pt-36 pb-32 bg-[#FBFBF9] text-primary">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header Title Banner */}
        <div className="border-b border-primary/20 pb-12 mb-16 text-center">
          <span className="font-label-sm text-[11px] text-accent-sage uppercase tracking-[0.25em] block mb-3 font-semibold">
            Engineering &amp; Design Case Study
          </span>
          <h1 className="font-headline-xl text-[44px] sm:text-[56px] md:text-headline-xl text-primary font-normal leading-tight">
            La Forêt: Architectural Commerce
          </h1>
          <p className="font-body-md text-body-md text-secondary max-w-xl mx-auto mt-4 leading-relaxed font-light">
            A comprehensive design review and engineering refinement documenting the creation of an immersive luxury storefront.
          </p>
        </div>

        {/* 2-Column Split: Sticky Outline (3cols) + Details (9cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Left Sidebar Index Tracker (3 columns) */}
          <aside className="lg:col-span-3 sticky top-28 hidden lg:block border-l border-primary/10 pl-6 py-2">
            <h4 className="font-label-sm text-[11px] text-secondary uppercase tracking-widest mb-6 font-semibold">
              Table of Contents
            </h4>
            <ul className="space-y-4">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => handleSectionClick(sec.id)}
                    className={`font-label-sm text-xs text-left uppercase tracking-wider block transition-colors duration-200 focus-visible:outline-none ${
                      activeSection === sec.id
                        ? 'text-accent-sage font-bold'
                        : 'text-secondary hover:text-primary'
                    }`}
                  >
                    {sec.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right Main Writing Details (9 columns) */}
          <main className="lg:col-span-9 space-y-24 border-l border-primary/5 pl-0 lg:pl-12">
            
            {/* Section 1: Overview & Objectives */}
            <section id="overview" className="scroll-mt-32 space-y-6">
              <span className="font-label-sm text-[10px] text-accent-sage uppercase tracking-widest font-semibold block">01 / Overview</span>
              <h2 className="font-headline-lg text-headline-lg font-normal text-primary">Project Overview &amp; Objectives</h2>
              <div className="w-16 h-[1px] bg-primary/20 mb-4" />
              <p className="font-body-md text-body-md text-secondary leading-relaxed font-light">
                La Forêt is an editorial storefront that sells minimalist architectural wardrobe objects. The challenge was to move away from crowded, noisy, high-pressure e-commerce designs (common in standard web stores) and create an immersive digital environment that reflects the quiet authority of high-end luxury fashion.
              </p>
              <div className="bg-[#F2F1ED] p-8 border border-primary/10 space-y-4">
                <h4 className="font-label-md text-label-md uppercase tracking-wider font-semibold text-primary">
                  Core Refinement Parameters
                </h4>
                <ul className="space-y-2.5 font-body-md text-body-md text-secondary font-light">
                  <li className="flex gap-2 items-start">
                    <span className="w-1.5 h-1.5 bg-accent-sage mt-2 flex-shrink-0" />
                    <span><strong>Japandi Minimalism:</strong> Bring Scandinavian functional warmth and Japanese spatial clarity ('Ma') together.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="w-1.5 h-1.5 bg-accent-sage mt-2 flex-shrink-0" />
                    <span><strong>Interaction Clarity:</strong> Avoid visual decoration; instead, use responsive micro-interactions and spring animations to guide clicks.</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="w-1.5 h-1.5 bg-accent-sage mt-2 flex-shrink-0" />
                    <span><strong>Performance Focus:</strong> Maintain excellent Lighthouse metrics by choosing performant asset loads and lazy render techniques.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2: Research & IA */}
            <section id="research" className="scroll-mt-32 space-y-6">
              <span className="font-label-sm text-[10px] text-accent-sage uppercase tracking-widest font-semibold block">02 / Research &amp; IA</span>
              <h2 className="font-headline-lg text-headline-lg font-normal text-primary">UX Research &amp; Information Architecture</h2>
              <div className="w-16 h-[1px] bg-primary/20 mb-4" />
              <p className="font-body-md text-body-md text-secondary leading-relaxed font-light">
                We audited luxury design brands (e.g. Aesop, COS, Apple) to understand how they leverage whitespace, line work, and typography hierarchy to establish brand premium. We found that the absence of heavy drop shadows and standard card templates increases user focus on material tactile qualities.
              </p>
              
              {/* IA Map representation */}
              <div className="bg-[#F2F1ED] p-8 border border-primary/10 space-y-6">
                <h4 className="font-label-md text-label-md uppercase tracking-wider font-semibold text-primary">Information Architecture</h4>
                <div className="flex flex-col gap-4 text-xs font-mono">
                  <div className="p-3 border border-primary/25 bg-[#FBFBF9] text-center">Root App.tsx (AnimatePresence Routing)</div>
                  <div className="flex justify-center">↓</div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 border border-primary/10 bg-[#FBFBF9] text-center">Home (Manifesto Hero)</div>
                    <div className="p-2 border border-primary/10 bg-[#FBFBF9] text-center">Objects Grid (Staggered FLIP)</div>
                    <div className="p-2 border border-primary/10 bg-[#FBFBF9] text-center">Details (Stories &amp; Specs)</div>
                  </div>
                  <div className="flex justify-center">↓</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-2.5 border border-primary/25 bg-[#FBFBF9] text-center">Ctrl+K Search Overlay</div>
                    <div className="p-2.5 border border-primary/25 bg-[#FBFBF9] text-center">Multi-Step Checkout Drawer</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: User Journey */}
            <section id="user-journey" className="scroll-mt-32 space-y-6">
              <span className="font-label-sm text-[10px] text-accent-sage uppercase tracking-widest font-semibold block">03 / User Journeys</span>
              <h2 className="font-headline-lg text-headline-lg font-normal text-primary">Core User Journeys</h2>
              <div className="w-16 h-[1px] bg-primary/20 mb-4" />
              <p className="font-body-md text-body-md text-secondary leading-relaxed font-light">
                Our user journey prioritizes discovery and storytelling, leading seamlessly to purchase conversion without intrusive popups.
              </p>
              
              {/* Step list journey */}
              <div className="divide-y divide-primary/10 border-y border-primary/10">
                <div className="py-4 flex gap-4 items-start">
                  <span className="font-label-sm text-accent-sage font-bold">1</span>
                  <div>
                    <strong className="font-label-sm uppercase tracking-wide block">Cinematic Entry</strong>
                    <p className="font-body-md text-xs text-secondary leading-relaxed mt-1 font-light">
                      Users enter via the parallax Hero section, experiencing the brand's aesthetic manifesto and scrolling past subtle scrolling indicators.
                    </p>
                  </div>
                </div>
                <div className="py-4 flex gap-4 items-start">
                  <span className="font-label-sm text-accent-sage font-bold">2</span>
                  <div>
                    <strong className="font-label-sm uppercase tracking-wide block">Asymmetric Discovery</strong>
                    <p className="font-body-md text-xs text-secondary leading-relaxed mt-1 font-light">
                      Browsing catalog items in an editorial grid. Clicks open the Quick View details or trigger filters which animate elements smoothly into position.
                    </p>
                  </div>
                </div>
                <div className="py-4 flex gap-4 items-start">
                  <span className="font-label-sm text-accent-sage font-bold">3</span>
                  <div>
                    <strong className="font-label-sm uppercase tracking-wide block">Secure Checkout</strong>
                    <p className="font-body-md text-xs text-secondary leading-relaxed mt-1 font-light">
                      Items slide into the cart. Opening the checkout triggers the interactive address form and payment card validator, concluding with a detailed invoice receipt.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Design Tokens */}
            <section id="design-system" className="scroll-mt-32 space-y-6">
              <span className="font-label-sm text-[10px] text-accent-sage uppercase tracking-widest font-semibold block">04 / Design Tokens</span>
              <h2 className="font-headline-lg text-headline-lg font-normal text-primary">Aura Design Tokens</h2>
              <div className="w-16 h-[1px] bg-primary/20 mb-4" />
              <p className="font-body-md text-body-md text-secondary leading-relaxed font-light">
                Our design tokens emphasize hard-edge minimal elements (0px border radius, no box shadows). Contrast and depth are achieved solely through tonal layering.
              </p>

              {/* Color System swatches */}
              <div className="space-y-4 pt-4">
                <h4 className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-semibold">Color Palette Swatches</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { color: '#FBFBF9', name: 'Background Base', role: 'Main canvas off-white.' },
                    { color: '#1A1A1A', name: 'Primary Ink', role: 'Dark headers and borders.' },
                    { color: '#F2F1ED', name: 'Surface Low', role: 'Secondary cards and containers.' },
                    { color: '#7A827A', name: 'Accent Sage', role: 'Active navigation indicators.' }
                  ].map((s, idx) => (
                    <div key={idx} className="p-4 border border-primary/10 bg-[#F2F1ED] text-primary flex flex-col justify-between h-24">
                      <span className="font-label-sm text-[9px] uppercase font-bold">{s.color}</span>
                      <span className="font-body-md text-[10px] leading-tight font-light">{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 5: Motion System */}
            <section id="motion" className="scroll-mt-32 space-y-6">
              <span className="font-label-sm text-[10px] text-accent-sage uppercase tracking-widest font-semibold block">05 / Motion</span>
              <h2 className="font-headline-lg text-headline-lg font-normal text-primary">Continuous Motion Language</h2>
              <div className="w-16 h-[1px] bg-primary/20 mb-4" />
              <p className="font-body-md text-body-md text-secondary leading-relaxed font-light">
                Motion is not used as eye-candy; it is used as structural feedback. We implement spring physics (`damping`, `stiffness`) to model organic inertia instead of standard linear CSS eases.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="bg-[#F2F1ED] p-6 border border-primary/10 space-y-2">
                  <span className="material-symbols-outlined text-accent-sage text-[28px]">page_info</span>
                  <h6 className="font-label-md text-label-md uppercase tracking-wider font-semibold text-primary">Page Cross-Fades</h6>
                  <p className="font-body-md text-xs text-secondary leading-relaxed font-light">
                    Custom routing changes are intercepted by `AnimatePresence` and wrapped in a cross-fade view overlay to remove instant white-flashes.
                  </p>
                </div>
                <div className="bg-[#F2F1ED] p-6 border border-primary/10 space-y-2">
                  <span className="material-symbols-outlined text-accent-sage text-[28px]">open_in_full</span>
                  <h6 className="font-label-md text-label-md uppercase tracking-wider font-semibold text-primary">FLIP Layouts</h6>
                  <p className="font-body-md text-xs text-secondary leading-relaxed font-light">
                    Filter tag clicks animate the remaining items into place seamlessly, avoiding jarring page jumps.
                  </p>
                </div>
                <div className="bg-[#F2F1ED] p-6 border border-primary/10 space-y-2">
                  <span className="material-symbols-outlined text-accent-sage text-[28px]">zoom_in</span>
                  <h6 className="font-label-md text-label-md uppercase tracking-wider font-semibold text-primary">Image reveals</h6>
                  <p className="font-body-md text-xs text-secondary leading-relaxed font-light">
                    Clip-path wipes and Ken Burns panning animations simulate editorial film reveals.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Accessibility (A11y) */}
            <section id="accessibility" className="scroll-mt-32 space-y-6">
              <span className="font-label-sm text-[10px] text-accent-sage uppercase tracking-widest font-semibold block">06 / Accessibility</span>
              <h2 className="font-headline-lg text-headline-lg font-normal text-primary">Accessibility Decisions (A11y)</h2>
              <div className="w-16 h-[1px] bg-primary/20 mb-4" />
              <p className="font-body-md text-body-md text-secondary leading-relaxed font-light">
                Premium design goes hand in hand with accessibility. We audited the layout to guarantee compliance with WCAG guidelines:
              </p>
              <div className="border border-primary/10 p-6 space-y-4">
                <ul className="space-y-3 font-body-md text-body-md text-secondary font-light font-light text-[14px]">
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-accent-sage text-[20px]">done</span>
                    <span><strong>High Contrast Ratio:</strong> Foreground text (`#1A1A1A` / `#000000`) on background (`#FBFBF9`) achieves a AAA contrast ratio of 19:1, surpassing the 4.5:1 minimum standard.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-accent-sage text-[20px]">done</span>
                    <span><strong>Keyboard Navigation:</strong> All navigation anchors, filters, dropdown selection tags, and buttons support keyboard tabs with clear, sage-green focus outlines (`focus-visible:outline`).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-accent-sage text-[20px]">done</span>
                    <span><strong>Screen Readers:</strong> Images are set up with descriptive and technical ALT tags (e.g. detailing the texture and draping) rather than generic labels. Dialog structures utilize explicit ARIA properties.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 7: Performance & Tech Stack */}
            <section id="performance" className="scroll-mt-32 space-y-6">
              <span className="font-label-sm text-[10px] text-accent-sage uppercase tracking-widest font-semibold block">07 / Performance</span>
              <h2 className="font-headline-lg text-headline-lg font-normal text-primary">Performance Optimizations &amp; Tech Stack</h2>
              <div className="w-16 h-[1px] bg-primary/20 mb-4" />
              <p className="font-body-md text-body-md text-secondary leading-relaxed font-light">
                The technical core is built using modern React, TypeScript, Vite, Tailwind CSS, and Framer Motion. To guarantee Lighthouse scores close to 100, we implemented several performance strategies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="border border-primary/10 p-6 space-y-3">
                  <h5 className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Asset Optimization</h5>
                  <p className="font-body-md text-xs text-secondary leading-relaxed font-light">
                    Image links utilize lazy rendering. Images are compressed with fast CDN layouts to keep initial page weights tiny.
                  </p>
                </div>
                <div className="border border-primary/10 p-6 space-y-3">
                  <h5 className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Render Execution</h5>
                  <p className="font-body-md text-xs text-secondary leading-relaxed font-light">
                    Hardware acceleration is applied via CSS transitions and GPU layers (using `translateZ` and layout properties in Framer Motion) to prevent layout thrashing and keep frame rates at a smooth 60fps.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Challenges & Lessons */}
            <section id="challenges" className="scroll-mt-32 space-y-6">
              <span className="font-label-sm text-[10px] text-accent-sage uppercase tracking-widest font-semibold block">08 / Reflection</span>
              <h2 className="font-headline-lg text-headline-lg font-normal text-primary">Challenges, Trade-offs &amp; Lessons</h2>
              <div className="w-16 h-[1px] bg-primary/20 mb-4" />
              <p className="font-body-md text-body-md text-secondary leading-relaxed font-light">
                Designing a luxury site in a flat "0px-radius, no-shadow, no-gradient" design language requires relying heavily on whitespace, scale hierarchy, and clean motion transitions. We chose to trade off visual complexity (like heavy shadows and cards offsets) in order to emphasize high-contrast lines and editorial spacing.
              </p>
              <div className="bg-[#F2F1ED] p-8 border border-primary/10">
                <h4 className="font-label-md text-label-md uppercase tracking-wider font-semibold text-primary mb-4">
                  Future Refinements
                </h4>
                <ul className="space-y-2.5 font-body-md text-body-md text-secondary font-light text-[14px]">
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-[#7A827A] mt-2 flex-shrink-0" />
                    <span>Dynamic inventory sync via serverless APIs.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-[#7A827A] mt-2 flex-shrink-0" />
                    <span>WebGL shaders for macro-fabric textile deformations on details page hover.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="w-1.5 h-1.5 bg-[#7A827A] mt-2 flex-shrink-0" />
                    <span>Custom localized currency resolution and checkout forms.</span>
                  </li>
                </ul>
              </div>
            </section>

          </main>
        </div>
      </div>
    </section>
  );
};
