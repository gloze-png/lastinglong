
import { ArrowRight } from "lucide-react";
import React from "react";
import DiceBearAvatar from "@/components/DiceBearAvatar/DiceBearAvatar";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-32 md:pt-48">
      <div className="relative z-20 mx-auto max-w-4xl text-center">

        {/* Version Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />

          <span className="text-xs font-light tracking-wide text-zinc-300">
            Version 1.0.0 available now
          </span>
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-5xl font-medium leading-[1.1] tracking-tight text-white md:text-7xl">
          Human-Friendly Support,
          <br />

          <span className="text-zinc-500">
            Powered by AI
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-zinc-400 md:text-xl">
          AI customer support that understands your business.

          It reads your docs, learns your knowledge, answers customer questions,
          and resolves issues automatically, so your customers get help 24/7,
          even when you&apos;re away.
        </p>

        {/* CTA Buttons */}
        <div className="mb-20 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="flex h-11 cursor-pointer items-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-black transition-all hover:bg-zinc-200">
            Start For Free
            <ArrowRight className="h-4 w-4" />
          </button>

          <button className="h-11 rounded-full border border-zinc-800 bg-black/20 px-8 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-all hover:border-zinc-600 hover:text-white">
            View Demo
          </button>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-indigo-500/10 blur-[100px]" />

        {/* Outer frame */}
        <div className="relative overflow-hidden rounded-2xl bg-black p-1 shadow-2xl ring-1 ring-white/10 md:p-2">

          {/* Chat Window */}
          <div className="flex h-[500px] w-full flex-col overflow-hidden rounded-xl bg-black md:h-[600px]">

            {/* Chat Header */}
            <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/5 bg-black px-6">
              <div className="flex items-center gap-3">

                <div className="relative">
                  <DiceBearAvatar
                    seed="Intellinx"
                    size={32}
                  />

                  {/* Online indicator */}
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-black bg-blue-500" />
                </div>

                <div>
                  <p className="text-sm font-medium text-zinc-200">
                    Intellinx
                  </p>

                  <p className="text-[11px] text-zinc-500">
                    AI Support Assistant
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                <span className="text-xs text-zinc-500">
                  Online
                </span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-6 overflow-y-auto bg-zinc-950/30 p-6">

              {/* Customer Message */}
              <div className="flex w-full justify-end">
                <div className="max-w-[75%] rounded-2xl rounded-br-md bg-white px-4 py-3 text-sm text-black">
                  Hi, I&apos;m having trouble understanding how your
                  cancellation policy works.
                </div>
              </div>

              {/* AI Message */}
              <div className="flex items-start gap-3">

                <DiceBearAvatar
                  seed="Intellinx"
                  size={36}
                />

                <div className="max-w-[75%]">

                  <div className="rounded-2xl rounded-tl-md border border-white/5 bg-white/[0.04] px-4 py-3">
                    <p className="text-sm leading-relaxed text-zinc-300">
                      Of course! I can help with that.
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      According to our cancellation policy, you can cancel
                      your subscription at any time from your account
                      settings. Your access will remain active until the
                      end of your current billing period.
                    </p>
                  </div>

                  <p className="mt-2 text-[10px] text-zinc-600">
                    Intellinx AI · Just now
                  </p>

                </div>
              </div>

              {/* Customer Message */}
              <div className="flex w-full justify-end">
                <div className="max-w-[75%] rounded-2xl rounded-br-md bg-white px-4 py-3 text-sm text-black">
                  Great. Will I still be charged if I cancel today?
                </div>
              </div>

              {/* AI Message */}
              <div className="flex items-start gap-3">

                <DiceBearAvatar
                  seed="Intellinx"
                  size={36}
                />

                <div className="max-w-[75%] rounded-2xl rounded-tl-md border border-white/5 bg-white/[0.04] px-4 py-3">
                  <p className="text-sm leading-relaxed text-zinc-300">
                    No additional charge will be made after cancellation.
                    You&apos;ll simply retain access until your current
                    billing period ends.
                  </p>
                </div>

              </div>

            </div>

            {/* Chat Input */}
            <div className="shrink-0 border-t border-white/5 bg-black p-4">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <input
                  type="text"
                  placeholder="Ask Intellinx anything..."
                  className="flex-1 bg-transparent text-sm text-zinc-300 outline-none placeholder:text-zinc-600"
                />

                <button
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black transition-colors hover:bg-zinc-200"
                  aria-label="Send message"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
