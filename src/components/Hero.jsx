import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImFolderDownload } from "react-icons/im";
import { motion } from "motion/react"
export default function Hero() {
  const snippets = ["React", "Node.js", "Express", "MongoDB", "REST/GraphQL", "JWT Auth"];

  return (
    <section
      id="top"
      className="mx-auto mt-10 min-h-[70vh] w-full max-w-7xl rounded-xl border bg-white p-6 md:p-12"
    >
      {/* ✅ No flex-wrap. This prevents wrapping on large screens */}
      <div className="flex flex-col gap-10 sm:flex-row sm:items-start md:justify-between">
        {/* Image */}
        <div className="shrink-0">
          {/* ✅ Tailwind controls the size. No fixed width/height props */}
          <div className="rounded-xl border bg-slate-50 p-2">
            <img
              src="/profile.png"
              alt="Sunny Kasuvojula"
              className="h-auto w-full max-w-[360px] rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Content */}
        {/* ✅ Allow content to shrink and stay readable */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 50 }} transition={{ duration: 1.4, ease: "easeOut" }} className="flex w-full max-w-xl flex-col">

          <h1 className="mb-4 text-3xl font-bold tracking-tight">
            Full-Stack JavaScript Developer
          </h1>

          <p className="mb-4 text-slate-600 leading-relaxed">
            I build full-stack web applications with secure authentication, REST/GraphQL
            APIs, and user-focused dashboards. I like working on real problems and
            shipping features from idea to deployment.
          </p>

          <div className="flex flex-wrap gap-2 py-3">
            {snippets.map((snippet) => (
              <span
                key={snippet}
                className="rounded-full border bg-slate-50 px-3 py-1 text-xs text-slate-600"
              >
                {snippet}
              </span>
            ))}
          </div>

          <div className="my-5 h-px w-full bg-slate-200" />

          {/* Icon buttons (with real links) */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/sunnykasuvojula"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded-xl border px-5 py-3 hover:bg-slate-50"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="www.linkedin.com/in/sunny-krishna-kasuvojula-b12563342"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-xl border px-5 py-3 hover:bg-slate-50"
            >
              <FaLinkedin size={28} />
            </a>

            <a
              href="/Sunny_Kasuvojula_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Download Resume"
              className="inline-flex items-center justify-center rounded-xl border px-5 py-3 hover:bg-slate-50"
            >
              <ImFolderDownload size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
