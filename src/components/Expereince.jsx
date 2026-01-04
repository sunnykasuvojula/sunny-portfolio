export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto w-[min(1100px,92%)]">
        <h2 className="mb-3 text-2xl font-bold">Experience</h2>
        <p className="mb-10 max-w-2xl text-slate-600">
          Industry experience plus project-driven full-stack development.
        </p>

        <div className="rounded-2xl border bg-white p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="mb-1 text-lg font-semibold">
                Associate Technology — BNED LoudCloud
              </h3>
              <p className="text-sm text-slate-600">May 2021 – Sep 2022</p>
            </div>

            <span className="rounded-full border bg-slate-50 px-3 py-1 text-xs text-slate-600">
              Angular • Java APIs • Testing
            </span>
          </div>

          <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-slate-900">
            <li>Developed and maintained Angular UI features to improve usability and performance.</li>
            <li>Integrated frontend with Java backend APIs, improving data flow and reliability.</li>
            <li>Wrote unit tests for Angular and Java components to improve stability.</li>
            <li>Optimized UI for accessibility, performance, and web standards.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
