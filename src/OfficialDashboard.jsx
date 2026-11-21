import {
  BarChart3,
  Bell,
  CheckCircle2,
  FileText,
  Home,
  Landmark,
  LogOut,
  Wallet,
  Wrench,
} from "lucide-react";

function OfficialDashboard({ onLogout }) {
  return (
    <div className="min-h-screen bg-slate-50">

      <nav className="border-b border-slate-200 bg-white">
        <div className="flex items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-xl">
              🌾
            </div>

            <div>
              <h1 className="font-bold text-slate-900">GramSetu</h1>
              <p className="text-xs text-slate-500">Official Portal</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Bell size={20} className="text-slate-500" />

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100">
              <Landmark size={18} className="text-purple-700" />
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

        <aside className="hidden min-h-[calc(100vh-73px)] w-64 border-r border-slate-200 bg-white p-5 md:block">

          <div className="space-y-2">

            <SidebarItem
              icon={<Home size={18} />}
              text="Dashboard"
              active
            />

            <SidebarItem
              icon={<FileText size={18} />}
              text="Assigned Issues"
            />

            <SidebarItem
              icon={<Wrench size={18} />}
              text="Projects"
            />

            <SidebarItem
              icon={<BarChart3 size={18} />}
              text="Progress"
            />

            <SidebarItem
              icon={<Wallet size={18} />}
              text="Budgets"
            />

          </div>
        </aside>

        <main className="flex-1 p-6 md:p-10">

          <div className="mx-auto max-w-7xl">

            <p className="text-sm font-medium text-green-600">
              Official Portal
            </p>

            <h2 className="mt-1 text-3xl font-bold text-slate-900">
              Implementation Overview
            </h2>

            <p className="mt-2 text-slate-500">
              Monitor assigned issues, projects, budgets, and progress.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">

              <StatCard
                title="Assigned Issues"
                value="18"
                description="Currently assigned"
              />

              <StatCard
                title="In Progress"
                value="11"
                description="Active implementation"
              />

              <StatCard
                title="Completed"
                value="07"
                description="Successfully completed"
              />

            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7">

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-green-50 p-3">
                    <Wrench className="text-green-600" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Active Project
                    </p>

                    <h3 className="text-xl font-bold text-slate-900">
                      Water Pipeline Repair — Ward 3
                    </h3>
                  </div>

                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  In Progress
                </span>

              </div>

              <div className="mt-7">

                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-600">
                    Implementation Progress
                  </span>

                  <span className="font-bold text-green-600">
                    70%
                  </span>
                </div>

                <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-green-600"
                    style={{ width: "70%" }}
                  />
                </div>

              </div>

              <div className="mt-7 grid gap-5 border-t border-slate-100 pt-6 sm:grid-cols-3">

                <Detail
                  label="Budget"
                  value="₹2,40,000"
                />

                <Detail
                  label="Deadline"
                  value="15 Oct 2026"
                />

                <Detail
                  label="Assigned Team"
                  value="Public Works"
                />

              </div>

              <button className="mt-6 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700">
                Update Progress
              </button>

            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white">

              <div className="border-b border-slate-200 p-6">
                <h3 className="font-bold text-slate-900">
                  Active Projects
                </h3>
              </div>

              <Project
                title="Streetlight Replacement — Ward 2"
                progress="45%"
                status="In Progress"
              />

              <Project
                title="Road Repair — Ward 1"
                progress="100%"
                status="Completed"
              />

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
      <p className="text-sm text-slate-500">{title}</p>

      <p className="mt-2 text-3xl font-bold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        {description}
      </p>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-xs text-slate-400">{label}</p>

      <p className="mt-1 font-semibold text-slate-800">
        {value}
      </p>
    </div>
  );
}

function Project({ title, progress, status }) {
  return (
    <div className="flex flex-col gap-4 border-b border-slate-100 p-6 last:border-0 sm:flex-row sm:items-center sm:justify-between">

      <div>
        <h4 className="font-semibold text-slate-900">
          {title}
        </h4>

        <div className="mt-2 flex items-center gap-3">

          <div className="h-2 w-32 rounded-full bg-slate-100">
            <div
              className="h-2 rounded-full bg-green-600"
              style={{ width: progress }}
            />
          </div>

          <span className="text-xs font-medium text-slate-500">
            {progress}
          </span>

        </div>
      </div>

      <span
        className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
          status === "Completed"
            ? "bg-green-50 text-green-700"
            : "bg-blue-50 text-blue-700"
        }`}
      >
        {status}
      </span>

    </div>
  );
}

export default OfficialDashboard;