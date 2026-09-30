
"use client";

import { FormEvent, useState } from "react";

export default function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("loading");

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      setEmail("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex w-full justify-center text-center text-sm text-zinc-300">
        <p>
          <span className="font-medium text-white">
            You're on the list!
          </span>{" "}
          We'll let you know when Intellinx is ready.
        </p>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:flex-row"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={status === "loading"}
          className="h-12 flex-1 rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-zinc-600"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="h-12 cursor-pointer rounded-xl bg-white px-6 text-sm font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Joining..." : "Get Early Access"}
        </button>
      </form>
    </div>
  );
}
