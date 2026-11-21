import {
  Bell,
  Calendar,
  CheckCircle2,
  FileText,
  Home,
  Landmark,
  LogOut,
  Users,
} from "lucide-react";

function GramSabhaDashboard({ onLogout }) {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* NAVBAR */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="flex items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-xl">
              🌾
            </div>

            <div>
              <h1 className="font-bold text-slate-900">
                GramSetu
              </h1>

              <p className="text-xs text-slate-500">
                Gram Sabha Portal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">

            <Bell size={20} className="text-slate-500" />

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
              <Users size={18} className="text-blue-700" />
            </div>

            <button
              onClick={onLogout}
              className="text-slate-500 hover:text-red-600"
            >
              <LogOut size={19} />
            </button>

          </div>
        </div>
      </nav>

      <div className="flex">

        {/* SIDEBAR */}
        <aside className="hidden min-h-[calc(100vh-73px)] w-64 border-r border-slate-200 bg-white p-5 md:block">

          <div className="space-y-2">

            <SidebarItem
              icon={<Home size={18} />}
              text="Dashboard"
              active
            />

            <SidebarItem
              icon={<FileText size={18} />}
              text="Community Issues"
            />

            <SidebarItem
              icon={<Calendar size={18} />}
              text="Gram Sabha Meetings"
            />

            <SidebarItem
              icon={<Users size={18} />}
              text="Members"
            />

            <SidebarItem
              icon={<CheckCircle2 size={18} />}
              text="Decisions"
            />

            <SidebarItem
              icon={<Landmark size={18} />}
              text="Budgets"
            />

          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-6 md:p-10">

          <div className="mx-auto max-w-7xl">

            <p className="text-sm font-medium text-green-600">
              Gram Sabha Portal
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              Community Overview
            </h2>

            <p className="mt-2 text-slate-500">
              Review issues and prepare them for community discussion.
            </p>

            {/* STATS */}
            <div className="mt-8 grid gap-5 sm:grid-cols-3">

              <StatCard
                title="Pending Issues"
                value="12"
                description="Require discussion"
              />

              <StatCard
                title="Upcoming Meetings"
                value="02"
                description="Scheduled this month"
              />

              <StatCard
                title="Decisions Made"
                value="18"
                description="Recorded decisions"
              />

            </div>

            {/* ISSUES */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white">

              <div className="border-b border-slate-200 p-6">

                <h3 className="text-lg font-bold text-slate-900">
                  Issues Requiring Discussion
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Community issues identified for Gram Sabha review.
                </p>

              </div>

              <div className="divide-y divide-slate-100">

                <Issue
                  title="Water shortage — Ward 3"
                  reports="12 related reports"
                  priority="High Priority"
                />

                <Issue
                  title="Road damage — Ward 1"
                  reports="17 related reports"
                  priority="Medium Priority"
                />

                <Issue
                  title="Streetlight repairs — Ward 2"
                  reports="8 related reports"
                  priority="Medium Priority"
                />

              </div>

            </div>

            {/* MEETING */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl border border-slate-200 bg-white p-7">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-blue-50 p-3">
                    <Calendar className="text-blue-600" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Upcoming Gram Sabha
                    </p>

                    <h3 className="font-bold text-slate-900">
                      Monthly Meeting
                    </h3>
                  </div>

                </div>

                <div className="mt-6 space-y-2 text-sm text-slate-600">
                  <p>📅 28 September 2026</p>
                  <p>🕙 10:00 AM</p>
                  <p>📍 Panchayat Bhavan</p>
                  <p>📋 7 issues on agenda</p>
                </div>

                <button className="mt-6 w-full rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700">
                  View Agenda
                </button>

              </div>

              <div className="rounded-2xl bg-slate-900 p-7 text-white">

                <p className="text-sm text-slate-400">
                  Latest Decision
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  Repair Water Pipeline
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Ward 3 water shortage issue was discussed and
                  repair work was approved.
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-green-400">
                  <CheckCircle2 size={17} />
                  Decision recorded
                </div>

              </div>

            </div>

          </div>

        </main>
      </div>
    </div>
  );
}

function SidebarItem({ icon, text, active = false }) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
        active
          ? "bg-green-50 text-green-700"
          : "text-slate-600 hover:bg-slate-50"
      }`}
    >
      {icon}
      {text}
    </button>
  );
}

function StatCard({ title, value, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-3xl font-bold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {description}
      </p>

    </div>
  );
}

function Issue({ title, reports, priority }) {
  return (
    <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">

      <div>
        <h4 className="font-semibold text-slate-900">
          {title}
        </h4>

        <p className="mt-1 text-sm text-slate-500">
          {reports}
        </p>
      </div>

      <div className="flex items-center gap-3">

        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
          {priority}
        </span>

        <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium">
          View Issue
        </button>

      </div>

    </div>
  );
}

export default GramSabhaDashboard;