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
    <div className="paper-newsletter">
      <span className="paper-newsletter__eyebrow">Stay Updated</span>

      <h3>Newsletter</h3>

      <p className="paper-newsletter__copy">
        Subscribe to get the latest web design tips, digital marketing
        insights, and exclusive offers.
      </p>

      <form onSubmit={handleSubmit} className="paper-newsletter__form">
        <div className="paper-newsletter__controls">
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
            className="paper-newsletter__input"
          />

          <button
            type="submit"
            disabled={isDisabled}
            className="paper-newsletter__button"
          >
            {status === "loading" ? (
              <>
                <i
                  className="fas fa-spinner fa-spin"
                  aria-hidden="true"
                />
                Subscribing...
              </>
            ) : status === "success" ? (
              <>
                <i className="fas fa-check" aria-hidden="true" />
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
            className={`paper-newsletter__message ${
              status === "success"
                ? "paper-newsletter__message--success"
                : "paper-newsletter__message--error"
            }`}
          >
            {status === "success" && (
              <i className="fas fa-check-circle" aria-hidden="true" />
            )}

            {status === "error" && (
              <i
                className="fas fa-exclamation-circle"
                aria-hidden="true"
              />
            )}

            {message}
          </p>
        )}
      </form>

      <p className="paper-newsletter__privacy">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}