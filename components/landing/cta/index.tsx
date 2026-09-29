
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-225 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/6 blur-[140px]"
      />

      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/8 bg-white/2.5 px-6 py-20 text-center shadow-2xl md:px-12">
        {/* Subtle inner glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_50%)]"
        />

        <div className="relative z-10">
          {/* Label */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3.5 py-1.5">
            <Sparkles
              aria-hidden="true"
              className="h-3.5 w-3.5 text-zinc-400"
            />

            <span className="text-xs font-medium text-zinc-400">
              AI support that understands your business
            </span>
          </div>

          {/* Heading */}
          <h2
            id="cta-heading"
            className="mx-auto max-w-3xl text-4xl font-medium leading-[1.1] tracking-tight text-white md:text-6xl"
          >
            Support your customers.
            <br />
            <span className="text-zinc-500">Even when you&apos;re away.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base font-light leading-7 text-zinc-500 md:text-lg">
            Let Intellinx handle customer questions, understand your business,
            and resolve issues around the clock—so your team can focus on what
            matters most.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              className="group flex h-12 items-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-black transition-all hover:bg-zinc-200"
            >
              Start For Free

              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>

            <button
              type="button"
              className="h-12 rounded-full border border-white/10 bg-white/2 px-7 text-sm font-medium text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              Talk to us
            </button>
          </div>

          {/* Small reassurance */}
          <p className="mt-6 text-xs text-zinc-600">
            No credit card required · Get started in minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

