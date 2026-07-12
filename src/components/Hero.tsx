import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from '../context/RouterContext';

export const Hero: React.FC = () => {
  const { navigate } = useRouter();

  // Animation variants for staggered text reveals
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 20 }
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 md:py-0 md:h-[920px] flex flex-col md:flex-row items-center overflow-hidden border-b border-primary/10 relative">
      
      {/* Left Imagery (60%) with Wipe and Ken Burns Zoom */}
      <div className="w-full md:w-[60%] h-[512px] md:h-full relative overflow-hidden bg-surface-container-high">
        <motion.div
          initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.15, x: -10 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 2.2, ease: 'easeOut' }}
            className="w-full h-full bg-cover bg-center grayscale"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkUDPIZYsSunFaI37pZRQsG8zb6j11WED8o55Iusui1MhkwfjIDvXjpSU00rJ9jD8ZVS6zHpwLe3rodJA0J2-Ox2616Pt53qAvr5__y2jJAOVwRJnkgKGa_IM-TVhg66eEhHQI4VSOx58W_o6BgjtzTd7tTxMyID6HoKIsfd4Oreye4qLM7-DlEBEbZkJoKt8N9Ayg-NcfZO43mAswq3zm6KPNNSVHBb08oundm5lhuSLzkq_XMcx5RRvzcnKnmk9M_K5Vol6CjNk')`,
            }}
            aria-label="A high-fashion editorial photograph of a minimalist architectural coat in neutral charcoal wool draped over a structural chair."
          />
        </motion.div>
      </div>

      {/* Right Content (40%) with Staggered Reveals */}
      <div className="w-full md:w-[40%] px-margin-mobile md:px-16 py-12 md:py-0 flex flex-col justify-center bg-[#FBFBF9] h-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-md"
        >
          {/* Overline label */}
          <motion.span
            variants={itemVariants}
            className="font-label-sm text-[11px] text-accent-sage uppercase tracking-[0.25em] block mb-3 font-semibold"
          >
            Atelier La Forêt
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-headline-xl text-[48px] sm:text-[56px] md:text-headline-xl mb-6 text-primary leading-[1.1] tracking-tight font-normal"
          >
            Form follows function.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-body-lg text-body-lg text-secondary mb-10 leading-relaxed font-light"
          >
            Wardrobe essentials designed with architectural intent and zero-waste materials. Crafted for the intentional life.
          </motion.p>

          {/* Action Button */}
          <motion.div variants={itemVariants}>
            <button
              onClick={() => navigate('objects')}
              className="group relative px-10 py-5 border border-primary text-primary font-label-md text-label-md uppercase tracking-widest overflow-hidden transition-colors duration-300 focus-visible:outline-none"
              style={{ borderRadius: '0px' }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#FBFBF9]">
                Explore the Collection
              </span>
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling Cue Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-secondary/60">
        <span className="font-label-sm text-[10px] uppercase tracking-[0.2em] font-light">Scroll Down</span>
        <div className="w-[1px] h-12 bg-primary/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 h-4 bg-[#7A827A]"
            animate={{
              y: [0, 48, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>
      </div>
    </section>
  );
};
