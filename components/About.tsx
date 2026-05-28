'use client';
import { motion } from 'framer-motion';

const cards = [
  { icon: '✦', title: 'Komunitas', desc: 'Tempat berkumpulnya penggemar anime dari berbagai latar belakang.' },
  { icon: '◈', title: 'Visi', desc: 'Menjadi rumah komunitas anime modern terbaik dan terbuka untuk semua.' },
  { icon: '✺', title: 'Misi', desc: 'Membangun ruang diskusi, event rutin, dan koneksi positif antar member.' },
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

export default function About() {
  return (
    <section id="about" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <p className="text-neon-soft tracking-[0.3em] text-xs mb-3">ABOUT</p>
          <h2 className="font-display text-3xl md:text-5xl text-gradient">Tentang Kami</h2>
          <p className="mt-5 max-w-2xl mx-auto text-white/70">
            MARGA NANIME adalah komunitas anime modern yang berfokus pada koneksi, diskusi, dan
            event yang berkesan untuk seluruh member.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              custom={i}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="glass rounded-2xl p-7 hover:-translate-y-1 transition group"
            >
              <div className="w-12 h-12 rounded-xl grid place-items-center bg-neon/15 text-neon-soft text-2xl mb-5 group-hover:bg-neon/25 transition">
                {c.icon}
              </div>
              <h3 className="font-display text-xl mb-2">{c.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
