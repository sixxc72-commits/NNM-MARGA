'use client';
import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

interface FormState { name: string; email: string; message: string; }
type Errors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Nama wajib diisi';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email tidak valid';
    if (form.message.trim().length < 5) e.message = 'Pesan terlalu pendek';
    return e;
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }
  };

  const field = 'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-neon transition placeholder:text-white/30';

  return (
    <section id="contact" className="py-28 px-5">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-neon-soft tracking-[0.3em] text-xs mb-3">CONTACT</p>
          <h2 className="font-display text-3xl md:text-5xl text-gradient">Hubungi Kami</h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={submit}
          className="glass rounded-2xl p-6 md:p-8 space-y-5"
        >
          <div>
            <input
              className={field}
              placeholder="Nama"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              className={field}
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
          </div>
          <div>
            <textarea
              rows={5}
              className={`${field} resize-none`}
              placeholder="Pesan"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
          </div>
          <button type="submit" className="btn-neon w-full py-3 rounded-lg bg-neon font-medium">
            Kirim Pesan
          </button>
          {sent && (
            <p className="text-center text-green-400 text-sm">Pesan terkirim. Terima kasih!</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
