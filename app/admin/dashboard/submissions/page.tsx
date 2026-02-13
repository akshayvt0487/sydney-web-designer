"use client";

import { useEffect, useState } from "react";
import { FormSubmission } from "@/lib/submissions";

export default function SubmissionsPage() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "new" | "contacted" | "closed">("all");

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch("/api/submissions/save");
      const data = await response.json();
      setSubmissions(data);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredSubmissions = filter === "all"
    ? submissions
    : submissions.filter((s) => s.status === filter);

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      contact: "General Contact",
      seoAudit: "SEO Audit",
      adsAudit: "Google Ads Audit",
      consultation: "Consultation",
    };
    return labels[type] || type;
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      new: "bg-green-100 text-green-800",
      contacted: "bg-yellow-100 text-yellow-800",
      closed: "bg-gray-100 text-gray-800",
    };
    return colors[status] || "bg-gray-100";
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-xl text-gray-600">
          <i className="fas fa-spinner fa-spin mr-2"></i>
          Loading submissions...
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#1e293b] mb-2">Form Submissions</h1>
          <p className="text-gray-600">Manage quote requests and audit submissions</p>
        </div>
        <button
          onClick={fetchSubmissions}
          className="bg-[#f59e0b] text-white px-4 py-2 rounded-lg hover:bg-[#d97706] transition-colors"
        >
          <i className="fas fa-sync-alt mr-2"></i>
          Refresh
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
        <div className="flex gap-2">
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

      {/* Submissions List */}
      <div className="space-y-4">
        {filteredSubmissions.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <i className="fas fa-inbox text-6xl text-gray-300 mb-4"></i>
            <p className="text-xl text-gray-600">No submissions found</p>
          </div>
        ) : (
          filteredSubmissions.map((submission) => (
            <div key={submission.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-[#1e293b]">{submission.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(submission.status)}`}>
                      {submission.status.toUpperCase()}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                      {getTypeLabel(submission.type)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    <i className="fas fa-clock mr-2"></i>
                    {formatDate(submission.submittedAt)}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <a href={`mailto:${submission.email}`} className="text-[#f59e0b] font-semibold hover:underline">
                    {submission.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Phone</p>
                  <a href={`tel:${submission.phone}`} className="text-[#f59e0b] font-semibold hover:underline">
                    {submission.phone}
                  </a>
                </div>
                {submission.website && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Website</p>
                    <a href={submission.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {submission.website}
                    </a>
                  </div>
                )}
                {submission.projectType && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Project Type</p>
                    <p className="font-semibold text-[#1e293b]">{submission.projectType}</p>
                  </div>
                )}
                {submission.seoGoal && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">SEO Goal</p>
                    <p className="font-semibold text-[#1e293b]">{submission.seoGoal}</p>
                  </div>
                )}
                {submission.adSpend && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Ad Spend</p>
                    <p className="font-semibold text-[#1e293b]">{submission.adSpend}</p>
                  </div>
                )}
                {submission.service && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Service Interested</p>
                    <p className="font-semibold text-[#1e293b]">{submission.service}</p>
                  </div>
                )}
              </div>

              {submission.message && (
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">Message</p>
                  <p className="text-[#1e293b] bg-gray-50 p-3 rounded-lg">{submission.message}</p>
                </div>
              )}

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
