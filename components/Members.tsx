'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import members from '@/data/members.json';

export default function Members() {
  return (
    <section id="members" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-neon-soft tracking-[0.3em] text-xs mb-3">MEMBERS</p>
          <h2 className="font-display text-3xl md:text-5xl text-gradient">Para Member</h2>
        </motion.div>

        {members.length === 0 ? (
          <p className="text-center text-white/50">Belum ada member.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {members.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-5 text-center hover:-translate-y-1 transition"
              >
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <Image
                    src={m.avatar}
                    alt={m.name}
                    fill
                    sizes="80px"
                    loading="lazy"
                    className="rounded-full object-cover ring-2 ring-neon/40"
                  />
                  <span
                    className={`absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border-2 border-[#06030d] ${
                      m.online ? 'bg-green-400' : 'bg-gray-500'
                    }`}
                  />
                </div>
                <h3 className="font-medium">{m.name}</h3>
                <p className="text-xs text-neon-soft mt-1">{m.role}</p>
                <p className="text-[10px] text-white/40 mt-1">
                  {m.online ? 'Online' : 'Offline'}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
