"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Stats {
  totalSubmissions: number;
  newSubmissions: number;
  contactedSubmissions: number;
  totalContactForms: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalSubmissions: 0,
    newSubmissions: 0,
    contactedSubmissions: 0,
    totalContactForms: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [submissionsRes, contactRes] = await Promise.all([
        fetch("/api/submissions/save"),
        fetch("/api/submissions/contact/save"),
      ]);

      const submissions = await submissionsRes.json();
      const contacts = await contactRes.json();

      setStats({
        totalSubmissions: submissions.length,
        newSubmissions: submissions.filter((s: any) => s.status === "new").length,
        contactedSubmissions: submissions.filter((s: any) => s.status === "contacted").length,
        totalContactForms: contacts.length,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ icon, title, value, color, link }: any) => (
    <Link href={link}>
      <div className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer border-l-4 ${color}`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-semibold mb-1">{title}</p>
            <p className="text-3xl font-bold text-[#1e293b]">{loading ? "..." : value}</p>
          </div>
          <div className={`text-4xl ${color.replace('border-', 'text-')}`}>
            <i className={icon}></i>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1e293b] mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to your admin dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon="fas fa-inbox"
          title="Total Submissions"
          value={stats.totalSubmissions}
          color="border-blue-500"
          link="/admin/dashboard/submissions"
        />
        <StatCard
          icon="fas fa-star"
          title="New Submissions"
          value={stats.newSubmissions}
          color="border-green-500"
          link="/admin/dashboard/submissions"
        />
        <StatCard
          icon="fas fa-check-circle"
          title="Contacted"
          value={stats.contactedSubmissions}
          color="border-yellow-500"
          link="/admin/dashboard/submissions"
        />
        <StatCard
          icon="fas fa-envelope"
          title="Contact Forms"
          value={stats.totalContactForms}
          color="border-[#f59e0b]"
          link="/admin/dashboard/contact-submissions"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-[#1e293b] mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/admin/dashboard/submissions"
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <i className="fas fa-inbox text-2xl text-blue-500"></i>
            <div>
              <p className="font-semibold text-[#1e293b]">View All Submissions</p>
              <p className="text-sm text-gray-600">Manage quote requests and audits</p>
            </div>
          </Link>
          <Link
            href="/admin/dashboard/contact-submissions"
            className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <i className="fas fa-envelope text-2xl text-[#f59e0b]"></i>
            <div>
              <p className="font-semibold text-[#1e293b]">View Contact Forms</p>
              <p className="text-sm text-gray-600">Review messages from contact page</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
