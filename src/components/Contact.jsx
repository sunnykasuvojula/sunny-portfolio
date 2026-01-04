export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto w-[min(1100px,92%)]">
        <h2 className="mb-3 text-2xl font-bold">Contact</h2>
        <p className="mb-10 max-w-2xl text-slate-600">
          The fastest way to reach me is email. I reply quickly.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Left card */}
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="mb-2 text-lg font-semibold">Let’s talk</h3>
            <p className="mb-4 text-slate-600 leading-relaxed">
              If you’re hiring a junior full-stack JS developer, I’d love to connect.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                href="mailto:sunny.kasuvojula@gmail.com"
              >
                Email Me
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold hover:bg-slate-50"
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold hover:bg-slate-50"
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="my-5 h-px w-full bg-slate-200" />

            <div className="grid gap-2 text-sm text-slate-600">
              <div>
                <span className="font-semibold text-slate-900">Email:</span>{" "}
                sunny.kasuvojula@gmail.com
              </div>
              <div>
                <span className="font-semibold text-slate-900">Location:</span>{" "}
                Toronto, ON (Remote/Canada)
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="mb-3 text-lg font-semibold">Quick message</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Connect this to EmailJS/Formspree if you want.");
              }}
              className="space-y-4"
            >
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-900">
                  Name
                </label>
                <input
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-900">
                  Email
                </label>
                <input
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-900">
                  Message
                </label>
                <textarea
                  className="min-h-[120px] w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  placeholder="Type your message..."
                />
              </div>

              <button
                className="w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                type="submit"
              >
                Send Message
              </button>

              <p className="text-xs text-slate-500">
                (Optional) Connect this to EmailJS or Formspree later.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
