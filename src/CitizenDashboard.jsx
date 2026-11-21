import {
  Bell,
  CheckCircle2,
  FileText,
  Home,
  LogOut,
  MapPin,
  Plus,
  Search,
  User,
} from "lucide-react";

function CitizenDashboard({ onLogout }) {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* TOP NAVBAR */}
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
                Citizen Portal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">

            <Bell
              size={20}
              className="text-slate-500"
            />

            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                <User
                  size={18}
                  className="text-green-700"
                />
              </div>

              <span className="hidden text-sm font-medium sm:block">
                Citizen
              </span>
            </div>

            <button
              onClick={onLogout}
              className="text-slate-500 hover:text-red-600"
              title="Logout"
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
              icon={<Plus size={18} />}
              text="Report an Issue"
            />

            <SidebarItem
              icon={<FileText size={18} />}
              text="My Complaints"
            />

            <SidebarItem
              icon={<MapPin size={18} />}
              text="Track Issues"
            />

            <SidebarItem
              icon={<CheckCircle2 size={18} />}
              text="Verify Resolution"
            />

          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 md:p-10">

          <div className="mx-auto max-w-7xl">

            {/* HEADER */}
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

              <div>
                <p className="text-sm text-green-600">
                  Citizen Portal
                </p>

                <h2 className="mt-1 text-3xl font-bold text-slate-900">
                  Good morning 👋
                </h2>

                <p className="mt-2 text-slate-500">
                  Here's what's happening in your community.
                </p>
              </div>

              <button className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white shadow-lg shadow-green-600/20 hover:bg-green-700">
                <Plus size={19} />
                Report a Problem
              </button>

            </div>

            {/* STATS */}
            <div className="mt-8 grid gap-5 sm:grid-cols-3">

              <StatCard
                title="My Reports"
                value="08"
                description="Total submitted"
              />

              <StatCard
                title="In Progress"
                value="03"
                description="Currently being addressed"
              />

              <StatCard
                title="Resolved"
                value="05"
                description="Successfully resolved"
              />

            </div>

            {/* RECENT ISSUES */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white">

              <div className="flex items-center justify-between border-b border-slate-200 p-6">

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    My Recent Issues
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Track the status of your reported problems.
                  </p>
                </div>

                <Search
                  size={20}
                  className="text-slate-400"
                />

              </div>

              <div className="divide-y divide-slate-100">

                <IssueRow
                  title="Water shortage — Ward 3"
                  date="Reported 18 Sep 2026"
                  status="In Progress"
                />

                <IssueRow
                  title="Broken streetlight — Ward 2"
                  date="Reported 15 Sep 2026"
                  status="Under Review"
                />

                <IssueRow
                  title="Road damage — Ward 1"
                  date="Reported 05 Sep 2026"
                  status="Resolved"
                />

              </div>

            </div>

            {/* COMMUNITY UPDATE */}
            <div className="mt-8 rounded-2xl bg-green-700 p-7 text-white">

              <p className="text-sm font-medium text-green-100">
                Community Update
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Water Pipeline Repair — Ward 3
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-green-100">
                The Gram Sabha has approved the repair work.
                Implementation is currently at 70%.
              </p>

              <button className="mt-5 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-green-700">
                View Progress
              </button>

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

      <p className="text-sm font-medium text-slate-500">
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

function IssueRow({ title, date, status }) {
  const statusStyle =
    status === "Resolved"
      ? "bg-green-50 text-green-700"
      : status === "In Progress"
      ? "bg-blue-50 text-blue-700"
      : "bg-amber-50 text-amber-700";

  return (
    <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">

      <div>
        <h4 className="font-semibold text-slate-900">
          {title}
        </h4>

        <p className="mt-1 text-sm text-slate-500">
          {date}
        </p>
      </div>

      <span
        className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${statusStyle}`}
      >
        {status}
      </span>

    </div>
  );
}

export default CitizenDashboard;