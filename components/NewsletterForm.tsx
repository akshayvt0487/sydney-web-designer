"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const resetStatusAfterDelay = () => {
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }

    resetTimeoutRef.current = setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data: { error?: string } = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks for subscribing! You'll hear from us soon.");
        setEmail("");
        resetStatusAfterDelay();
        return;
      }

      setStatus("error");
      setMessage(data.error || "Something went wrong. Please try again.");
      resetStatusAfterDelay();
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection.");
      resetStatusAfterDelay();
    }
  };

  const isDisabled = status === "loading" || status === "success";

  return (
    <div className="min-w-0">
      <h3 className="mb-4 font-heading text-lg font-bold text-white sm:text-xl">
        Newsletter
      </h3>

      <p className="mb-5 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
        Subscribe to get the latest web design tips, digital marketing
        insights, and exclusive offers.
      </p>

      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex w-full flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            Your email address
          </label>

          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email address"
            required
            disabled={isDisabled}
            className="min-h-[54px] w-full min-w-0 flex-1 rounded-xl border border-white/15 bg-white/[0.09] px-4 text-base text-white placeholder:text-slate-400 transition-colors focus:border-primary-orange focus:outline-none focus:ring-4 focus:ring-primary-orange/10 disabled:cursor-not-allowed disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={isDisabled}
            className="inline-flex min-h-[54px] w-full shrink-0 items-center justify-center rounded-xl bg-primary-orange px-6 text-base font-semibold text-white transition-all hover:bg-primary-orange-hover disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto lg:w-full xl:w-auto"
          >
            {status === "loading" ? (
              <>
                <i
                  className="fas fa-spinner fa-spin mr-2"
                  aria-hidden="true"
                />
                Subscribing...
              </>
            ) : status === "success" ? (
              <>
                <i className="fas fa-check mr-2" aria-hidden="true" />
                Subscribed!
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </div>

        {message && (
          <p
            role="status"
            className={`mt-3 text-sm leading-6 ${
              status === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status === "success" && (
              <i className="fas fa-check-circle mr-2" aria-hidden="true" />
            )}

            {status === "error" && (
              <i
                className="fas fa-exclamation-circle mr-2"
                aria-hidden="true"
              />
            )}

            {message}
          </p>
        )}
      </form>

      <p className="mt-3 text-xs leading-6 text-slate-400">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}