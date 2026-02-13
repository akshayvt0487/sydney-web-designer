"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#1e293b] text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">Sydney Web Designer</h1>
              <span className="text-sm bg-[#f59e0b] px-3 py-1 rounded-full">
                Admin Dashboard
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-[#f59e0b] transition-colors"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                View Website
              </a>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                <i className="fas fa-sign-out-alt mr-2"></i>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar & Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white min-h-screen shadow-lg">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/admin/dashboard"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-[#1e293b] font-medium transition-colors"
                >
                  <i className="fas fa-home"></i>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/dashboard/submissions"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-[#1e293b] font-medium transition-colors"
                >
                  <i className="fas fa-inbox"></i>
                  Form Submissions
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/dashboard/contact-submissions"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-[#1e293b] font-medium transition-colors"
                >
                  <i className="fas fa-envelope"></i>
                  Contact Forms
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
