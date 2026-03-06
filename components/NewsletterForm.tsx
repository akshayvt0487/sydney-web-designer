"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks for subscribing! You'll hear from us soon.");
        setEmail("");

        // Reset after 5 seconds
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");

        // Reset error after 5 seconds
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5000);
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please check your connection.");

      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-white">Newsletter</h3>
      <p className="text-gray-300 mb-4">
        Subscribe to get the latest web design tips, digital marketing insights, and exclusive offers.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            disabled={status === "loading" || status === "success"}
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:border-[#f59e0b] focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/20 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-6 py-3 bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === "loading" ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Subscribing...
              </>
            ) : status === "success" ? (
              <>
                <i className="fas fa-check mr-2"></i>
                Subscribed!
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
        {message && (
          <p
            className={`text-sm ${
              status === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status === "success" && <i className="fas fa-check-circle mr-2"></i>}
            {status === "error" && <i className="fas fa-exclamation-circle mr-2"></i>}
            {message}
          </p>
        )}
      </form>
      <p className="text-gray-400 text-xs mt-3">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}
