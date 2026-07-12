import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const DesignSystemView: React.FC = () => {
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopyFeedback(hex);
    setTimeout(() => setCopyFeedback(null), 1500);
  };

  const colors = [
    { hex: '#FBFBF9', name: 'Background Base', role: 'Main canvas background. Gallery feel off-white.' },
    { hex: '#1A1A1A', name: 'Primary Ink', role: 'Headers, main body text, primary borders, dark buttons.' },
    { hex: '#F2F1ED', name: 'Surface Container', role: 'Secondary background for sidebars, cards, codeblocks.' },
    { hex: '#7A827A', name: 'Accent Sage', role: 'Active navigation markers, focus outlines, primary success CTA.' },
    { hex: '#586059', name: 'Secondary Slate', role: 'Muted body copy, captions, border separators.' },
    { hex: '#BA1A1A', name: 'Error Crimson', role: 'Form validation errors, alert notifications.' }
  ];

  const spacing = [
    { token: 'margin-desktop', value: '64px', desc: 'Main margins on large desktop viewports.' },
    { token: 'margin-mobile', value: '20px', desc: 'Main margins on mobile viewports.' },
    { token: 'gutter', value: '24px', desc: 'Horizontal gap between grid items.' },
    { token: 'spacing-xl', value: '120px', desc: 'Vertical separation between landing sections.' },
    { token: 'spacing-lg', value: '48px', desc: 'Separation between titles and grid listings.' },
    { token: 'spacing-md', value: '24px', desc: 'Separation between blocks of content.' }
  ];

  const typography = [
    { name: 'Headline XL', element: 'H1', size: '64px', font: 'Playfair Display', details: 'Line height 1.1, Letter spacing -0.02em, Weight 400. Used for hero and editorial statements.' },
    { name: 'Headline LG', element: 'H2', size: '40px', font: 'Playfair Display', details: 'Line height 1.2, Letter spacing -0.01em, Weight 400. Page titles and main sections.' },
    { name: 'Headline MD', element: 'H3', size: '24px', font: 'Playfair Display', details: 'Line height 1.3, Weight 400. Subheadings and catalog item titles.' },
    { name: 'Body LG', element: 'P', size: '18px', font: 'Inter', details: 'Line height 1.6, Weight 300 (Light). Narrative passages and manifesto quotes.' },
    { name: 'Body MD', element: 'P', size: '16px', font: 'Inter', details: 'Line height 1.6, Weight 300 (Light). Core product details, specs, and reviews.' },
    { name: 'Label MD', element: 'UI', size: '14px', font: 'Inter', details: 'Line height 1.2, Letter spacing 0.05em, Weight 500. CTA button text, navigation tags.' }
  ];

  return (
    <section className="min-h-screen pt-36 pb-32 bg-[#FBFBF9] text-primary">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Title */}
        <div className="border-b border-primary/20 pb-12 mb-16">
          <span className="font-label-sm text-[11px] text-accent-sage uppercase tracking-[0.25em] block mb-3 font-semibold">
            System Design Specification
          </span>
          <h1 className="font-headline-xl text-[44px] sm:text-[56px] md:text-headline-xl text-primary font-normal leading-tight">
            La Forêt Design Tokens
          </h1>
          <p className="font-body-md text-body-md text-secondary max-w-xl mt-4 leading-relaxed font-light">
            Documenting the design system of La Forêt. A synthesis of Japanese structural minimalism and Scandinavian warmth (Japandi) built with a rectilinear, shadowless aesthetic.
          </p>
        </div>

        {/* 1. Colors Section */}
        <div className="border-b border-primary/10 pb-16 mb-16 space-y-8">
          <div>
            <h2 className="font-headline-md text-headline-md mb-2">1. Color Tokens (AURA Palette)</h2>
            <p className="font-body-md text-secondary text-[14px] font-light">
              Tonal contrast defines elevation. Clicking any block copies the HEX token code.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {colors.map((c) => (
              <button
                key={c.hex}
                onClick={() => handleCopyColor(c.hex)}
                className="group p-6 border border-primary/10 bg-[#F2F1ED] text-left hover:border-primary transition-all duration-300 relative flex flex-col justify-between h-40 focus-visible:outline-none"
                style={{ borderRadius: '0px' }}
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 border border-primary/10" style={{ backgroundColor: c.hex }} />
                  <span className="font-label-sm text-[11px] text-secondary group-hover:text-primary uppercase tracking-widest transition-colors font-bold">
                    {copyFeedback === c.hex ? 'Copied' : 'Copy Hex'}
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-label-md text-label-md font-semibold text-primary uppercase tracking-wide">
                    {c.name}
                  </h4>
                  <p className="font-body-md text-[12px] text-secondary leading-snug font-light">{c.role}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Spacing Scale */}
        <div className="border-b border-primary/10 pb-16 mb-16 space-y-8">
          <div>
            <h2 className="font-headline-md text-headline-md mb-2">2. Spacing &amp; Layout Grid</h2>
            <p className="font-body-md text-secondary text-[14px] font-light">
              Built on a strict 4px grid. Grid structures use 1px hairlines instead of card shadows.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Spacing Table */}
            <div className="border border-primary/10 divide-y divide-primary/10">
              {spacing.map((s) => (
                <div key={s.token} className="p-4 flex justify-between items-center bg-[#F2F1ED]/40">
                  <div>
                    <span className="font-label-sm text-[11px] text-primary uppercase font-bold tracking-wide">{s.token}</span>
                    <p className="font-body-md text-[12px] text-secondary font-light">{s.desc}</p>
                  </div>
                  <span className="font-label-md text-label-md font-bold text-accent-sage">{s.value}</span>
                </div>
              ))}
            </div>

            {/* Layout Grid details */}
            <div className="border border-primary/10 p-8 space-y-6 bg-[#F2F1ED]">
              <h3 className="font-label-md text-label-md uppercase tracking-wider font-semibold text-primary">Responsive Breakpoints</h3>
              <ul className="space-y-3 font-body-md text-body-md text-secondary font-light text-[14px]">
                <li className="flex justify-between border-b border-primary/5 pb-2">
                  <span>Ultra-Wide Desktop</span>
                  <strong>1440px max-width grid</strong>
                </li>
                <li className="flex justify-between border-b border-primary/5 pb-2">
                  <span>Standard Laptop</span>
                  <strong>12 columns, 64px margins</strong>
                </li>
                <li className="flex justify-between border-b border-primary/5 pb-2">
                  <span>Tablet Viewports</span>
                  <strong>6 columns, 40px margins</strong>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Mobile Handsets</span>
                  <strong>2 columns, 20px margins</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Typography Hierarchy */}
        <div className="border-b border-primary/10 pb-16 mb-16 space-y-8">
          <div>
            <h2 className="font-headline-md text-headline-md mb-2">3. Typography Tokens</h2>
            <p className="font-body-md text-secondary text-[14px] font-light">
              Contrast between editorial serif headings (Playfair Display) and light sans-serif body text (Inter).
            </p>
          </div>
          
          <div className="border border-primary/10 divide-y divide-primary/10 bg-[#F2F1ED]/20">
            {typography.map((t, idx) => (
              <div key={idx} className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-3">
                  <span className="font-label-sm text-[11px] text-secondary uppercase block mb-1 font-bold">{t.name}</span>
                  <span className="font-label-sm text-[10px] text-accent-sage uppercase tracking-widest">{t.font} ({t.size})</span>
                </div>
                <div className="lg:col-span-9">
                  {t.element === 'H1' && (
                    <h1 className="font-headline-xl text-4xl text-primary leading-tight font-normal">
                      The silent silhouette.
                    </h1>
                  )}
                  {t.element === 'H2' && (
                    <h2 className="font-headline-lg text-2xl text-primary font-normal">
                      Architectural essentials.
                    </h2>
                  )}
                  {t.element === 'H3' && (
                    <h3 className="font-headline-md text-lg text-primary font-normal">
                      Column Trousers in Stone
                    </h3>
                  )}
                  {t.element === 'P' && t.size === '18px' && (
                    <p className="font-body-lg text-body-lg text-secondary font-light">
                      We believe true luxury lies in the subtraction of decorative detail.
                    </p>
                  )}
                  {t.element === 'P' && t.size === '16px' && (
                    <p className="font-body-md text-body-md text-secondary font-light">
                      Hand-finished in Kyoto atelier. Zero residual waste, 100% Belgian flax yarn.
                    </p>
                  )}
                  {t.element === 'UI' && (
                    <span className="font-label-md text-label-md text-primary font-semibold uppercase tracking-wider">
                      Add to Bag • $340 USD
                    </span>
                  )}
                  <p className="font-body-md text-[11px] text-secondary mt-3 italic font-light">{t.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Interactive Component States */}
        <div className="space-y-8">
          <div>
            <h2 className="font-headline-md text-headline-md mb-2">4. Interactive Component States</h2>
            <p className="font-body-md text-secondary text-[14px] font-light">
              Living design specifications showcasing states: default, hover, active, loading, disabled, error, and success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Buttons column */}
            <div className="border border-primary/10 p-8 space-y-6 bg-[#F2F1ED]/40">
              <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold border-b border-primary/10 pb-4">
                Button System &amp; States
              </h3>
              
              <div className="space-y-4">
                {/* Default button */}
                <div className="flex items-center justify-between gap-4">
                  <span className="font-body-md text-[12px] text-secondary">Default Primary</span>
                  <button className="px-6 py-3.5 bg-[#1A1A1A] hover:bg-[#7A827A] text-[#FBFBF9] font-label-sm text-xs uppercase tracking-widest transition-colors duration-300 border-0" style={{ borderRadius: '0px' }}>
                    Button
                  </button>
                </div>

                {/* Pressed state simulation */}
                <div className="flex items-center justify-between gap-4">
                  <span className="font-body-md text-[12px] text-secondary">Pressed Action</span>
                  <button className="px-6 py-3.5 bg-[#7A827A] text-[#FBFBF9] font-label-sm text-xs uppercase tracking-widest border-0 transform scale-[0.97]" style={{ borderRadius: '0px' }}>
                    Button
                  </button>
                </div>

                {/* Loading state simulation */}
                <div className="flex items-center justify-between gap-4">
                  <span className="font-body-md text-[12px] text-secondary">Loading Indicator</span>
                  <button className="px-6 py-3.5 bg-[#1A1A1A] text-[#FBFBF9] font-label-sm text-xs uppercase tracking-widest border-0 flex items-center gap-2" style={{ borderRadius: '0px' }} disabled>
                    <span className="material-symbols-outlined text-[14px] animate-spin block">progress_activity</span>
                    <span>Processing...</span>
                  </button>
                </div>

                {/* Disabled state */}
                <div className="flex items-center justify-between gap-4">
                  <span className="font-body-md text-[12px] text-secondary">Disabled (Inactive)</span>
                  <button className="px-6 py-3.5 bg-primary/20 text-primary/40 font-label-sm text-xs uppercase tracking-widest border-0 cursor-not-allowed" style={{ borderRadius: '0px' }} disabled>
                    Disabled
                  </button>
                </div>
              </div>
            </div>

            {/* Inputs column */}
            <div className="border border-primary/10 p-8 space-y-6 bg-[#F2F1ED]/40">
              <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold border-b border-primary/10 pb-4">
                Input System &amp; States
              </h3>
              
              <div className="space-y-4">
                {/* Default input */}
                <div className="space-y-1.5">
                  <label className="font-label-sm text-[10px] text-secondary uppercase tracking-widest block font-bold">Default Field</label>
                  <input
                    type="text"
                    placeholder="Enter email address..."
                    className="w-full bg-[#FBFBF9] border border-primary/20 text-primary px-3 py-2.5 font-body-md text-sm outline-none focus:border-accent-sage"
                    style={{ borderRadius: '0px' }}
                  />
                </div>

                {/* Focus indicator */}
                <div className="space-y-1.5">
                  <label className="font-label-sm text-[10px] text-secondary uppercase tracking-widest block font-bold">Focus Highlight</label>
                  <input
                    type="text"
                    defaultValue="Selected input value"
                    className="w-full bg-[#FBFBF9] border border-accent-sage text-primary px-3 py-2.5 font-body-md text-sm outline-none"
                    style={{ borderRadius: '0px' }}
                  />
                </div>

                {/* Error state */}
                <div className="space-y-1.5">
                  <label className="font-label-sm text-[10px] text-secondary uppercase tracking-widest block font-bold">Validation Error</label>
                  <input
                    type="text"
                    defaultValue="invalid-email-format"
                    className="w-full bg-[#FBFBF9] border-red-600 text-red-600 px-3 py-2.5 font-body-md text-sm outline-none"
                    style={{ borderRadius: '0px' }}
                  />
                  <span className="text-[11px] text-red-600 font-label-sm uppercase tracking-wide block">
                    Please specify a valid email address.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
