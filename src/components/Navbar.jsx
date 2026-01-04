export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-[min(1100px,92%)] items-center justify-between py-4">
        <a href="#top" className="font-extrabold tracking-tight">
          Sunny Kasuvojula
        </a>

        <nav className="flex flex-wrap items-center gap-3">
          {["projects","skills","experience","about","contact"].map(item => (
            <a
              key={item}
              href={`#${item}`}
              className="rounded-full border bg-slate-50 px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100"
            >
              {item.charAt(0).toUpperCase()+item.slice(1)}
            </a>
          ))}

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-slate-50"
          >
            GitHub
          </a>

          <a
            href="/Sunny_Kasuvojula_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
