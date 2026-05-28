'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60 animate-gradient-shift"
        style={{
          background:
            'linear-gradient(120deg, #0a0414, #1a0833, #06030d, #2b0a52, #06030d)',
          backgroundSize: '300% 300%',
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 [background:radial-gradient(circle_at_30%_40%,rgba(176,38,255,0.25),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(122,0,204,0.2),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-neon-soft tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          ★ WELCOME TO ★
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl tracking-widest text-gradient leading-none"
        >
          MARGA NANIME
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl mx-auto text-white/70 text-base md:text-lg"
        >
          Komunitas anime modern — tempat berkumpul, berbagi, dan terhubung dengan sesama
          penggemar anime di seluruh dunia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="btn-neon px-7 py-3 rounded-full bg-neon text-white font-medium"
          >
            Join Community
          </a>
          <a
            href="#about"
            className="px-7 py-3 rounded-full glass text-white/90 hover:text-white transition"
          >
            Explore
          </a>
        </motion.div>
      </div>
    </section>
  );
}
