const blocks = [
  { title: "Frontend", items: ["React", "JavaScript (ES6+)", "HTML/CSS", "Bootstrap/Tailwind", "Responsive UI"] },
  { title: "Backend", items: ["Node.js", "Express", "REST APIs", "GraphQL", "Auth + Authorization"] },
  { title: "Database", items: ["MongoDB (Mongoose)", "MySQL (basic)"] },
  { title: "Tools", items: ["Git/GitHub", "Postman", "Vercel/Render", "NPM", "Testing basics"] },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-24">
      <div className="mx-auto w-[min(1100px,92%)]">
        <h2 className="mb-3 text-2xl font-bold">Skills</h2>
        <p className="mb-10 max-w-2xl text-slate-600">
          Focused on building and shipping MVPs with clean code, validation, and secure authentication.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-2xl border bg-white p-6">
              <h3 className="mb-3 text-lg font-semibold">{b.title}</h3>
              <div className="flex flex-wrap gap-2">
                {b.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border bg-slate-50 px-3 py-1 text-xs text-slate-600"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
