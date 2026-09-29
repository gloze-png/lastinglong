
import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "For businesses getting started with AI support.",
    features: [
      "100 conversations / month",
      "1 Knowledge Source",
      "AI customer support",
      "Basic message tone",
      "Community support",
    ],
    button: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "For growing businesses ready to automate support.",
    features: [
      "Unlimited conversations",
      "Unlimited Knowledge Sources",
      "Advanced message tone",
      "Strict Guardrails",
      "Inbound Calls",
      "Lead Generation",
      "Priority support",
    ],
    button: "Get Started",
    popular: true,
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative overflow-hidden px-6 py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/4 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium text-zinc-500">
            Simple pricing
          </p>

          <h2
            id="pricing-heading"
            className="mb-5 text-3xl font-medium tracking-tight text-white md:text-5xl"
          >
            Fair, usage-based pricing.
          </h2>

          <p className="text-lg font-light text-zinc-500 md:text-xl">
            Start free, upgrade as your business grows.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-3xl border p-8 ${
                plan.popular
                  ? "border-white/16 bg-white/4.5"
                  : "border-white/8 bg-white/2"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute right-0 top-0 rounded-bl-xl border-b border-l border-white/10 bg-white/8 px-4 py-2 text-[10px] font-medium uppercase tracking-widest text-zinc-300">
                  Popular
                </div>
              )}

              {/* Plan name */}
              <div className="mb-8">
                <h3
                  className={`mb-4 text-lg font-medium ${
                    plan.popular ? "text-white" : "text-zinc-300"
                  }`}
                >
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-medium tracking-tight text-white">
                    {plan.price}
                  </span>

                  <span className="text-sm text-zinc-600">/mo</span>
                </div>

                <p className="mt-4 text-sm font-light leading-6 text-zinc-500">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul
                className="mb-10 flex-1 space-y-4"
                aria-label={`${plan.name} plan features`}
              >
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-zinc-400"
                  >
                    <Check
                      aria-hidden="true"
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.popular
                          ? "text-blue-400"
                          : "text-zinc-600"
                      }`}
                      strokeWidth={2}
                    />

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                type="button"
                className={`h-12 w-full cursor-pointer rounded-xl text-sm font-medium transition-colors ${
                  plan.popular
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "border border-white/10 bg-transparent text-zinc-200 hover:border-white/20 hover:bg-white/4"
                }`}
              >
                {plan.button}
              </button>
            </article>
          ))}
        </div>

        {/* Pricing note */}
        <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-5 text-zinc-600">
          Social Media Scheduler and additional advanced features are
          currently in development and will become available as they are
          released.
        </p>
      </div>
    </section>
  );
};

export default Pricing;

