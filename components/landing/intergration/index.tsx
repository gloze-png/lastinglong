
import React from "react";
import { Check, Code2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect your knowledge",
    description:
      "Add your documentation, FAQs, products, policies, and other business information.",
  },
  {
    number: "02",
    title: "Add the Intellinx widget",
    description:
      "Copy one small script and paste it into your website. No complicated SDK setup required.",
  },
  {
    number: "03",
    title: "Start supporting customers",
    description:
      "Intellinx starts answering questions using your knowledge and follows the rules you define.",
  },
];

const Integration = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-t border-white/6 px-6 py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/2 h-125 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/6 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left content */}
          <div>
            <p className="mb-4 text-sm font-medium text-zinc-500">
              Simple integration
            </p>

            <h2 className="mb-6 text-3xl font-medium tracking-tight text-white md:text-5xl">
              Drop-in simplicity.
            </h2>

            <p className="mb-12 max-w-xl text-lg font-light leading-relaxed text-zinc-500 md:text-xl">
              No complex setup or complicated SDKs. Connect your knowledge,
              add one script to your website, and let Intellinx handle the
              conversations.
            </p>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex gap-5">
                  {/* Connecting line */}
                  {index !== steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute left-3.75 top-9 h-[calc(100%+32px)] w-px bg-white/8"
                    />
                  )}

                  {/* Number */}
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#050509] text-xs font-medium text-zinc-500">
                    {step.number}
                  </div>

                  {/* Step content */}
                  <div className="pt-0.5">
                    <h3 className="mb-2 text-base font-medium text-zinc-200">
                      {step.title}
                    </h3>

                    <p className="max-w-md text-sm font-light leading-6 text-zinc-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code card */}
          <div className="relative">
            {/* Glow behind code window */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 rounded-full bg-blue-500/6 blur-[90px]"
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#08090d]/90 shadow-2xl backdrop-blur-xl">
              {/* Window header */}
              <div className="flex h-14 items-center justify-between border-b border-white/[0.07] px-5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/60" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <span className="h-3 w-3 rounded-full bg-green-500/60" />
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-600">
                  <Code2 className="h-3.5 w-3.5" />
                  index.html
                </div>
              </div>

              {/* Code */}
              <div className="overflow-x-auto p-6 md:p-8">
                <pre className="font-mono text-xs leading-7 md:text-sm">
                  <code>
                    <span className="text-zinc-600">
                      {"<!-- Intellinx AI Support -->"}
                    </span>
                    {"\n\n"}

                    <span className="text-pink-400">{"<script"}</span>
                    {"\n"}

                    <span className="text-zinc-400">
                      {"  src="}
                    </span>
                    <span className="text-emerald-400">
                      {'"https://app.intellinx.ai/widget.js"'}
                    </span>
                    {"\n"}

                    <span className="text-zinc-400">
                      {"  data-agent-id="}
                    </span>
                    <span className="text-cyan-400">
                      {'"your-agent-id"'}
                    </span>
                    {"\n"}

                    <span className="text-zinc-400">
                      {"  defer"}
                    </span>
                    {"\n"}

                    <span className="text-pink-400">
                      {"></script>"}
                    </span>
                  </code>
                </pre>
              </div>

              {/* Bottom status */}
              <div className="flex items-center gap-2 border-t border-white/[0.07] px-6 py-4">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10">
                  <Check className="h-3 w-3 text-emerald-400" />
                </div>

                <span className="text-xs text-zinc-500">
                  Ready to connect with your website
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
