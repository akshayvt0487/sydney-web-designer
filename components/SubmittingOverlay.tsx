"use client";

import { useEffect } from "react";

interface SubmittingOverlayProps {
  isVisible: boolean;
  title?: string;
  description?: string;
}

export default function SubmittingOverlay({
  isVisible,
  title = "Sending Your Request",
  description = "Please wait while we securely submit your details.",
}: SubmittingOverlayProps) {
  useEffect(() => {
    if (!isVisible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="submit-overlay"
      role="dialog"
      aria-modal="true"
      aria-live="polite"
      aria-label={title}
    >
      <div className="submit-overlay__backdrop" />

      <div className="submit-overlay__panel paper-grain">
        <span className="submit-overlay__eyebrow">
          Sydney Web Designer
        </span>

        <div className="submit-overlay__animation" aria-hidden="true">
          <span className="submit-overlay__ring" />
          <span className="submit-overlay__ring submit-overlay__ring--two" />

          <div className="submit-overlay__icon">
            <i className="fas fa-paper-plane" />
          </div>
        </div>

        <h2>{title}</h2>

        <p>{description}</p>

        <div className="submit-overlay__progress" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <small>Please do not close this window.</small>
      </div>
    </div>
  );
}