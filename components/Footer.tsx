const socials = [
  { label: 'X', href: '#', icon: 'M18 2h3l-7 8 8 12h-6l-5-7-6 7H2l8-9L2 2h6l4 6 6-6z' },
  { label: 'IG', href: '#', icon: 'M12 2.2c3.2 0 3.6 0 4.8.1 1.2 0 1.9.3 2.3.5.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.4.4 1.1.5 2.3.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c0 1.2-.3 1.9-.5 2.3-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.4.2-1.1.4-2.3.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2 0-1.9-.3-2.3-.5-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c0-1.2.3-1.9.5-2.3.2-.6.5-1 1-1.5s.9-.8 1.5-1c.4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2zm0 5a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm6.4-.6a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM12 9a3 3 0 110 6 3 3 0 010-6z' },
  { label: 'YT', href: '#', icon: 'M23.5 6.2a3 3 0 00-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z' },
  { label: 'DC', href: '#', icon: 'M20 4.4A19 19 0 0015.3 3l-.2.4a17 17 0 00-6.2 0L8.7 3A19 19 0 004 4.4 20 20 0 00.6 17.6a19 19 0 005.9 3l1.2-1.6a13 13 0 01-2-1l.5-.4a14 14 0 0011.6 0l.5.4a13 13 0 01-2 1l1.2 1.6a19 19 0 005.9-3A20 20 0 0020 4.4zM8.6 14.4c-1.1 0-2-1-2-2.3s.9-2.3 2-2.3 2 1 2 2.3-.9 2.3-2 2.3zm6.8 0c-1.1 0-2-1-2-2.3s.9-2.3 2-2.3 2 1 2 2.3-.9 2.3-2 2.3z' },
];

const quick = ['Home', 'About', 'Members', 'Gallery', 'Blog', 'Contact'];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="max-w-6xl mx-auto px-5 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-2xl tracking-widest text-gradient mb-3">
            MARGA NANIME
          </h3>
          <p className="text-sm text-white/60 max-w-xs">
            Komunitas anime modern. Tempat terbaik untuk terhubung dengan sesama penggemar.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-white/80">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            {quick.map((q) => (
              <li key={q}>
                <a href={`#${q.toLowerCase()}`} className="text-white/60 hover:text-neon-soft">
                  {q}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3 text-white/80">Sosial Media</h4>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 grid place-items-center glass rounded-lg hover:bg-neon/20 transition"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/80">
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} MARGA NANIME. All rights reserved.
      </div>
    </footer>
  );
}
