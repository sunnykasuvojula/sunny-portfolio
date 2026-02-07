import { projects } from "../data/projects";

function ProjectCard({ p }) {
  return (
    <article className="rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="mb-1 text-lg font-semibold">{p.title}</h3>
          <p className="text-sm leading-relaxed text-slate-600">{p.tagline}</p>
        </div>

        {p.featured && (
          <span className="rounded-full border bg-slate-50 px-3 py-1 text-xs text-slate-600">
            Featured
          </span>
        )}
      </div>

      {!!p.highlights?.length && (
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-slate-900">
          {p.highlights.map((h, idx) => (
            <li key={`${p.title}-h-${idx}`}>{h}</li>
          ))}
        </ul>
      )}

      {!!p.tech?.length && (
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={`${p.title}-t-${t}`}
              className="rounded-full border bg-slate-50 px-3 py-1 text-xs text-slate-600"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        {p.demo && (
          <a
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            href="https://opspilot-775n.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        )}
        {p.github && (
          <a
            className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
            href={p.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto w-[min(1100px,92%)]">
        <h2 className="mb-3 text-2xl font-bold text-center">Featured Projects</h2>
        <p className="mb-10 max-w-7xl text-slate-600">
          Projects that demonstrate end-to-end development: UI, APIs, authentication, and deployment.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
