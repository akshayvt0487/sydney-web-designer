"use client";

import { useEffect, useState } from "react";
import { FormSubmission, ContactSubmission } from "@/lib/submissions";

// Unified submission type
interface UnifiedSubmission {
  id: string;
  formType: "quote" | "seo-audit" | "ads-audit" | "consultation" | "contact";
  formLabel: string;
  name: string;
  email: string;
  phone: string;
  submittedAt: string;
  status: "new" | "contacted" | "closed";
  data: FormSubmission | ContactSubmission;
}

export default function AllSubmissionsPage() {
  const [submissions, setSubmissions] = useState<UnifiedSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "new" | "contacted" | "closed">("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  useEffect(() => {
    fetchAllSubmissions();
  }, []);

  const fetchAllSubmissions = async () => {
    try {
      // Fetch both form submissions and contact submissions
      const [formResponse, contactResponse] = await Promise.all([
        fetch("/api/submissions/save"),
        fetch("/api/submissions/contact/save"),
      ]);

      const formData: FormSubmission[] = await formResponse.json();
      const contactData: ContactSubmission[] = await contactResponse.json();

      // Transform form submissions
      const formSubmissions: UnifiedSubmission[] = formData.map((sub) => ({
        id: sub.id,
        formType: getFormType(sub.type),
        formLabel: getTypeLabel(sub.type),
        name: sub.name,
        email: sub.email,
        phone: sub.phone,
        submittedAt: sub.submittedAt,
        status: sub.status,
        data: sub,
      }));

      // Transform contact submissions
      const contactSubmissions: UnifiedSubmission[] = contactData.map((sub) => ({
        id: sub.id,
        formType: "contact",
        formLabel: "Contact Form",
        name: `${sub.firstName} ${sub.lastName}`,
        email: sub.email,
        phone: sub.phone,
        submittedAt: sub.submittedAt,
        status: sub.status,
        data: sub,
      }));

      // Combine and sort by date (most recent first)
      const allSubmissions = [...formSubmissions, ...contactSubmissions].sort(
        (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
      );

      setSubmissions(allSubmissions);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  const getFormType = (type: string): "quote" | "seo-audit" | "ads-audit" | "consultation" | "contact" => {
    if (type === "seoAudit") return "seo-audit";
    if (type === "adsAudit") return "ads-audit";
    if (type === "consultation") return "consultation";
    return "quote";
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      contact: "General Contact",
      seoAudit: "SEO Audit Request",
      adsAudit: "Google Ads Audit",
      consultation: "Consultation Request",
    };
    return labels[type] || "Quote Request";
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      new: "bg-green-100 text-green-800",
      contacted: "bg-yellow-100 text-yellow-800",
      closed: "bg-gray-100 text-gray-800",
    };
    return colors[status] || "bg-gray-100";
  };

  const getFormTypeColor = (formType: string) => {
    const colors: Record<string, string> = {
      "quote": "bg-blue-100 text-blue-800 border-blue-200",
      "seo-audit": "bg-purple-100 text-purple-800 border-purple-200",
      "ads-audit": "bg-pink-100 text-pink-800 border-pink-200",
      "consultation": "bg-orange-100 text-orange-800 border-orange-200",
      "contact": "bg-teal-100 text-teal-800 border-teal-200",
    };
    return colors[formType] || "bg-gray-100 text-gray-800";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("en-AU", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Apply filters
  let filteredSubmissions = submissions;
  if (filter !== "all") {
    filteredSubmissions = filteredSubmissions.filter((s) => s.status === filter);
  }
  if (typeFilter !== "all") {
    filteredSubmissions = filteredSubmissions.filter((s) => s.formType === typeFilter);
  }

  // Get unique form types for filter buttons
  const formTypes = [
    { value: "all", label: "All Forms", count: submissions.length },
    { value: "quote", label: "Quote Requests", count: submissions.filter(s => s.formType === "quote").length },
    { value: "seo-audit", label: "SEO Audits", count: submissions.filter(s => s.formType === "seo-audit").length },
    { value: "ads-audit", label: "Google Ads Audits", count: submissions.filter(s => s.formType === "ads-audit").length },
    { value: "consultation", label: "Consultations", count: submissions.filter(s => s.formType === "consultation").length },
    { value: "contact", label: "Contact Forms", count: submissions.filter(s => s.formType === "contact").length },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-xl text-gray-600">
          <i className="fas fa-spinner fa-spin mr-2"></i>
          Loading all submissions...
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-2">All Submissions</h1>
          <p className="text-gray-600">Unified view of all form submissions across the website</p>
        </div>
        <button
          onClick={fetchAllSubmissions}
          className="bg-[#f59e0b] text-white px-4 py-2 rounded-lg hover:bg-[#d97706] transition-colors"
        >
          <i className="fas fa-sync-alt mr-2"></i>
          Refresh
        </button>
      </div>

      {/* Summary Stats */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-lg font-bold text-[#1e293b] mb-4">Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#f59e0b]">{submissions.length}</div>
            <div className="text-sm text-gray-600">Total Submissions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">
              {submissions.filter((s) => s.status === "new").length}
            </div>
            <div className="text-sm text-gray-600">New</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600">
              {submissions.filter((s) => s.status === "contacted").length}
            </div>
            <div className="text-sm text-gray-600">Contacted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-600">
              {submissions.filter((s) => s.status === "closed").length}
            </div>
            <div className="text-sm text-gray-600">Closed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">
              {submissions.filter(s => new Date(s.submittedAt) > new Date(Date.now() - 24 * 60 * 60 * 1000)).length}
            </div>
            <div className="text-sm text-gray-600">Last 24 Hours</div>
          </div>
        </div>
      </div>

      {/* Status Filters */}
      <div className="bg-white rounded-xl shadow-lg p-4 mb-4">
        <h3 className="text-sm font-semibold text-gray-600 mb-3">Filter by Status</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              filter === "all" ? "bg-[#1e293b] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All ({submissions.length})
          </button>
          <button
            onClick={() => setFilter("new")}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              filter === "new" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            New ({submissions.filter((s) => s.status === "new").length})
          </button>
          <button
            onClick={() => setFilter("contacted")}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              filter === "contacted" ? "bg-yellow-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Contacted ({submissions.filter((s) => s.status === "contacted").length})
          </button>
          <button
            onClick={() => setFilter("closed")}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              filter === "closed" ? "bg-gray-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Closed ({submissions.filter((s) => s.status === "closed").length})
          </button>
        </div>
      </div>

      {/* Form Type Filters */}
      <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
        <h3 className="text-sm font-semibold text-gray-600 mb-3">Filter by Form Type</h3>
        <div className="flex flex-wrap gap-2">
          {formTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => setTypeFilter(type.value)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors border ${
                typeFilter === type.value
                  ? "bg-[#f59e0b] text-white border-[#f59e0b]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#f59e0b] hover:text-[#f59e0b]"
              }`}
            >
              {type.label} ({type.count})
            </button>
          ))}
        </div>
      </div>

      {/* Submissions List */}
      <div className="space-y-4">
        {filteredSubmissions.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <i className="fas fa-inbox text-6xl text-gray-300 mb-4"></i>
            <p className="text-xl text-gray-600">No submissions found</p>
            <p className="text-sm text-gray-500 mt-2">Try adjusting your filters</p>
          </div>
        ) : (
          filteredSubmissions.map((submission) => (
            <div
              key={submission.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4"
              style={{
                borderLeftColor: submission.formType === "quote" ? "#3b82f6" :
                  submission.formType === "seo-audit" ? "#a855f7" :
                  submission.formType === "ads-audit" ? "#ec4899" :
                  submission.formType === "consultation" ? "#f59e0b" : "#14b8a6"
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-xl font-bold text-[#1e293b]">{submission.name}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        submission.status
                      )}`}
                    >
                      {submission.status.toUpperCase()}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${getFormTypeColor(
                        submission.formType
                      )}`}
                    >
                      <i className="fas fa-tag mr-1"></i>
                      {submission.formLabel}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    <i className="fas fa-clock mr-2"></i>
                    {formatDate(submission.submittedAt)}
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <a
                    href={`mailto:${submission.email}`}
                    className="text-[#f59e0b] font-semibold hover:underline"
                  >
                    {submission.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <a href={`tel:${submission.phone}`} className="text-[#f59e0b] font-semibold hover:underline">
                    {submission.phone}
                  </a>
                </div>

                {/* Form-specific fields */}
                {"website" in submission.data && submission.data.website && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Website</p>
                    <a
                      href={submission.data.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f59e0b] hover:underline break-all"
                    >
                      {submission.data.website}
                    </a>
                  </div>
                )}
                {"projectType" in submission.data && submission.data.projectType && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Project Type</p>
                    <p className="font-semibold text-[#1e293b]">{submission.data.projectType}</p>
                  </div>
                )}
                {"seoGoal" in submission.data && submission.data.seoGoal && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">SEO Goal</p>
                    <p className="font-semibold text-[#1e293b]">{submission.data.seoGoal}</p>
                  </div>
                )}
                {"adSpend" in submission.data && submission.data.adSpend && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Ad Spend</p>
                    <p className="font-semibold text-[#1e293b]">{submission.data.adSpend}</p>
                  </div>
                )}
                {"service" in submission.data && submission.data.service && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Service Interested</p>
                    <p className="font-semibold text-[#1e293b]">{submission.data.service}</p>
                  </div>
                )}
                {"company" in submission.data && submission.data.company && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Company</p>
                    <p className="font-semibold text-[#1e293b]">{submission.data.company}</p>
                  </div>
                )}
              </div>

              {/* Message */}
              {"message" in submission.data && submission.data.message && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">Message</p>
                  <p className="text-[#1e293b] bg-gray-50 p-3 rounded-lg">{submission.data.message}</p>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2">
                <a
                  href={`mailto:${submission.email}`}
                  className="bg-[#f59e0b] text-white px-4 py-2 rounded-lg hover:bg-[#d97706] transition-colors text-sm font-semibold"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Send Email
                </a>
                <a
                  href={`tel:${submission.phone}`}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
