"use client";

import { FormEvent, useState } from "react";

export default function BlogNewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          sourcePage: window.location.pathname,
          sourceUrl: window.location.href,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to subscribe.");
      }

      setEmail("");
      setIsSuccess(true);
      setMessage("Thanks for subscribing! You'll hear from us soon.");
    } catch (error) {
      setIsSuccess(false);
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to subscribe. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="blog-newsletter__form" onSubmit={handleSubmit}>
      <label htmlFor="blog-newsletter-email" className="sr-only">
        Enter your email address
      </label>

      <input
        id="blog-newsletter-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email address"
        required
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="paper-button paper-button--rust"
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </button>

      {message && (
        <p
          role="status"
          className={
            isSuccess
              ? "paper-newsletter__message paper-newsletter__message--success"
              : "paper-newsletter__message paper-newsletter__message--error"
          }
        >
          {message}
        </p>
      )}
    </form>
  );
}