export interface FormSubmission {
  id: string;
  type: "contact" | "seoAudit" | "adsAudit" | "consultation";
  name: string;
  email: string;
  phone: string;
  website?: string;
  projectType?: string;
  seoGoal?: string;
  adSpend?: string;
  service?: string;
  message?: string;
  submittedAt: string;
  status: "new" | "contacted" | "closed";
}

export interface ContactSubmission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
  submittedAt: string;
  status: "new" | "contacted" | "closed";
}

// Helper functions to manage submissions
// In production, replace with database calls

export async function saveFormSubmission(submission: Omit<FormSubmission, "id" | "submittedAt" | "status">) {
  const newSubmission: FormSubmission = {
    ...submission,
    id: Date.now().toString(),
    submittedAt: new Date().toISOString(),
    status: "new",
  };

  // Save to API
  const response = await fetch("/api/submissions/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSubmission),
  });

  return response.json();
}

export async function saveContactSubmission(submission: Omit<ContactSubmission, "id" | "submittedAt" | "status">) {
  const newSubmission: ContactSubmission = {
    ...submission,
    id: Date.now().toString(),
    submittedAt: new Date().toISOString(),
    status: "new",
  };

  // Save to API
  const response = await fetch("/api/submissions/contact/save", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSubmission),
  });

  return response.json();
}
