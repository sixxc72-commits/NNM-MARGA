'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import blog from '@/data/blog.json';

export default function Blog() {
  return (
    <section id="blog" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-neon-soft tracking-[0.3em] text-xs mb-3">BLOG & NEWS</p>
          <h2 className="font-display text-3xl md:text-5xl text-gradient">Artikel Terbaru</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blog.map((b, i) => (
            <motion.article
              key={b.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover:-translate-y-1 transition group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={b.thumb}
                  alt={b.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-neon-soft mb-2">{b.date}</p>
                <h3 className="font-display text-lg mb-2 leading-snug">{b.title}</h3>
                <p className="text-sm text-white/70 mb-4">{b.excerpt}</p>
                <button className="text-sm text-neon-soft hover:text-white transition inline-flex items-center gap-1">
                  Read More <span aria-hidden>→</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
