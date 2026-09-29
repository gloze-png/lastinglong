const founders = [
  {
    initials: "YR",
    name: "Yomi Richard",
    role: "Go-to-Market & Automation Engineer",
    description:
      "Leads go-to-market strategy and automation at Intellinx, building the systems and workflows that help businesses adopt, scale, and get more value from intelligent customer support.",
  },
  {
    initials: "FO",
    name: "Faith Omolaja",
    role: "Product Manager",
    description:
      "Leads product strategy and execution at Intellinx, turning customer needs and business goals into simple, useful, and reliable AI-powered experiences.",
  },
  {
    initials: "GO",
    name: "Glory Olorunfemi",
    role: "Lead Developer",
    description:
      "Leads the development of Intellinx, building the core platform, integrations, and technical infrastructure that power reliable AI customer conversations.",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="relative overflow-hidden border-t border-white/8 bg-black py-24 sm:py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full bg-white/2.5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Label */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-white" />

          <span className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            Team
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-4xl">
          <h2 className="text-4xl font-medium tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            The people building{" "}
            <span className="text-zinc-500">Intellinx.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base font-light leading-7 text-zinc-500 sm:text-lg">
            A focused team combining product, engineering, automation, and
            go-to-market expertise to build AI customer support that businesses
            can trust.
          </p>
        </div>

        {/* Founders */}
        <div className="mt-20">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
            Founders
          </p>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="group relative min-h-85 overflow-hidden rounded-2xl border border-white/8 bg-white/2 p-7 transition-all duration-300 hover:border-white/15 hover:bg-white/4 sm:p-9"
              >
                {/* Initials */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/8 bg-white/5">
                  <span className="text-sm font-medium text-white">
                    {founder.initials}
                  </span>
                </div>

                {/* Founder Info */}
                <div className="mt-10">
                  <h3 className="text-xl font-medium tracking-tight text-white">
                    {founder.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-zinc-400">
                    {founder.role}
                  </p>

                  <p className="mt-5 text-sm font-light leading-6 text-zinc-500">
                    {founder.description}
                  </p>
                </div>

                {/* Hover Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/3 blur-3xl transition-all duration-500 group-hover:bg-white/6"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;