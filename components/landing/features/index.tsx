
import React from "react";
import {
  BrainCircuit,
  MessageSquareText,
  PhoneCall,
  ShieldCheck,
  CalendarDays,
  UserPlus,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Knowledge Graph",
    description:
      "Connect your business knowledge into a structured context that helps Intellinx understand relationships, products, policies, and customer questions.",
  },
  {
    icon: MessageSquareText,
    title: "Message Tone",
    description:
      "Give your AI a personality that matches your brand. Define how Intellinx speaks, responds, and communicates with your customers.",
  },
  {
    icon: PhoneCall,
    title: "Inbound Calls",
    description:
      "Let customers reach your business by phone. Intellinx can handle inbound conversations, understand requests, and provide helpful responses.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Guardrails",
    description:
      "Control what your AI can and cannot say. Set rules, boundaries, and escalation paths to keep every response aligned with your business.",
  },
  {
    icon: CalendarDays,
    title: "Social Media Scheduler",
    description:
      "Plan, schedule, and manage your social media content from one place while keeping your brand voice consistent across every channel.",
    comingSoon: true,
  },
  {
    icon: UserPlus,
    title: "Lead Generation",
    description:
      "Turn conversations into opportunities. Intellinx can identify potential customers, capture important details, and help your team follow up with qualified leads.",
    comingSoon: true,
  },
];

const Features = () => {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="mx-auto max-w-6xl px-6 py-32"
    >
      {/* Section heading */}
      <div className="mb-16 max-w-2xl">
        <p className="mb-4 text-sm font-medium text-zinc-500">
          Everything you need
        </p>

        <h2
          id="features-heading"
          className="mb-6 text-3xl font-medium tracking-tight text-white md:text-5xl"
        >
          Designed for trust
        </h2>

        <p className="max-w-xl text-xl font-light leading-relaxed text-zinc-500">
          Most AI support tools hallucinate. Intellinx stays grounded in your
          content, with the intelligence, personality, and boundaries you
          control.
        </p>
      </div>

      {/* Feature grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          const statusId = `${feature.title
            .toLowerCase()
            .replace(/\s+/g, "-")}-status`;

          return (
            <article
              key={feature.title}
              aria-describedby={feature.comingSoon ? statusId : undefined}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/2 p-7 transition-colors duration-300 hover:border-white/[0.14] hover:bg-white/[0.04]"
            >
              {/* Availability status */}
              {feature.comingSoon && (
                <span
                  id={statusId}
                  role="status"
                  className="absolute right-5 top-5 select-none rounded-full border border-white/10 bg-white/4 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-500"
                >
                  Coming soon
                </span>
              )}

              {/* Icon */}
              <div
                aria-hidden="true"
                className="mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4"
              >
                <Icon
                  className="h-5 w-5 text-zinc-300"
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-lg font-medium tracking-tight text-white">
                {feature.title}
              </h3>

              <p className="text-sm font-light leading-6 text-zinc-500">
                {feature.description}
              </p>

              {/* Decorative accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-white/2.5 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
