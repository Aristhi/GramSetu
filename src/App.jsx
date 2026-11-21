import { useState } from "react";
import Login from "./Login";
import CitizenDashboard from "./CitizenDashboard";
import GramSabhaDashboard from "./GramSabhaDashboard";
import OfficialDashboard from "./OfficialDashboard";

import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  FileText,
  Landmark,
  MapPin,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedInRole, setLoggedInRole] = useState(null);

  const handleLogin = (role) => {
    setShowLogin(false);
    setLoggedInRole(role);
  };

  // CITIZEN DASHBOARD
  if (loggedInRole === "Citizen") {
    return (
      <CitizenDashboard
        onLogout={() => setLoggedInRole(null)}
      />
    );
  }

  // GRAM SABHA DASHBOARD
  if (loggedInRole === "Gram Sabha Member") {
    return (
      <GramSabhaDashboard
        onLogout={() => setLoggedInRole(null)}
      />
    );
  }

  // OFFICIAL DASHBOARD
  if (loggedInRole === "Official") {
    return (
      <OfficialDashboard
        onLogout={() => setLoggedInRole(null)}
      />
    );
  }

  // LOGIN PAGE
  if (showLogin) {
    return (
      <Login
        onBack={() => setShowLogin(false)}
        onLogin={handleLogin}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* NAVBAR */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
              <Landmark size={22} />
            </div>

            <div>
              <h1 className="text-xl font-bold">
                GramSetu
              </h1>

              <p className="text-xs text-slate-500">
                Community to Action
              </p>
            </div>

          </div>

          <div className="hidden items-center gap-8 md:flex">

            <a
              href="#how-it-works"
              className="text-sm text-slate-600 hover:text-emerald-600"
            >
              How it works
            </a>

            <a
              href="#features"
              className="text-sm text-slate-600 hover:text-emerald-600"
            >
              Features
            </a>

            <a
              href="#transparency"
              className="text-sm text-slate-600 hover:text-emerald-600"
            >
              Transparency
            </a>

          </div>

          <button
            onClick={() => setShowLogin(true)}
            className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Login
          </button>

        </div>
      </nav>


      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-emerald-50 to-white">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-700">

              <CheckCircle2 size={16} />

              From Community Voice to Community Action

            </div>


            <h2 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-slate-900">

              Making rural development
              <span className="text-emerald-600">
                {" "}transparent.
              </span>

            </h2>


            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">

              GramSetu connects citizens, Gram Sabha members and local
              authorities through one transparent workflow — from reporting
              an issue to implementation and citizen verification.

            </p>


            <div className="mt-8 flex flex-wrap gap-4">

              <button
                onClick={() => setShowLogin(true)}
                className="flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >

                Report a Problem

                <ArrowRight size={18} />

              </button>


              <button
                onClick={() => setShowLogin(true)}
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Explore Dashboard
              </button>

            </div>


            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">

              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={17}
                  className="text-emerald-600"
                />
                Transparent workflow
              </div>


              <div className="flex items-center gap-2">
                <Users
                  size={17}
                  className="text-emerald-600"
                />
                Community driven
              </div>


              <div className="flex items-center gap-2">
                <MapPin
                  size={17}
                  className="text-emerald-600"
                />
                Local governance
              </div>

            </div>

          </div>


          {/* RIGHT SIDE — DEMO WORKFLOW */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

            <div className="mb-6 flex items-start justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">
                  Community Issue
                </p>

                <h3 className="mt-1 text-xl font-bold">
                  Water shortage — Ward 3
                </h3>

              </div>


              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                High Priority
              </span>

            </div>


            {/* AI ASSISTANCE */}
            <div className="mb-6 rounded-xl bg-emerald-50 p-4">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">

                  <Droplets size={18} />

                </div>


                <div>

                  <p className="text-sm font-semibold text-slate-800">
                    AI Assistance
                  </p>

                  <p className="text-xs text-slate-600">
                    12 potentially related complaints found
                  </p>

                </div>

              </div>

            </div>


            {/* TIMELINE */}
            <div className="space-y-5">

              <TimelineItem
                icon={<FileText size={16} />}
                title="Complaint Submitted"
                description="Citizen reported the issue"
                completed
              />


              <TimelineItem
                icon={<Users size={16} />}
                title="Gram Sabha Discussion"
                description="Issue discussed by community"
                completed
              />


              <TimelineItem
                icon={<CheckCircle2 size={16} />}
                title="Decision: Repair Pipeline"
                description="Repair work approved"
                completed
              />


              <TimelineItem
                icon={<Wrench size={16} />}
                title="Implementation"
                description="Work currently in progress"
                progress
              />


              <TimelineItem
                icon={<ShieldCheck size={16} />}
                title="Citizen Verification"
                description="Community confirms completion"
              />

            </div>

          </div>

        </div>

      </section>


      {/* STATS */}
      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 md:grid-cols-4">

          <Stat
            number="128"
            label="Complaints"
          />

          <Stat
            number="76"
            label="Resolved"
          />

          <Stat
            number="18"
            label="Active Projects"
          />

          <Stat
            number="12"
            label="Gram Sabha Decisions"
          />

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="bg-slate-50 px-6 py-20"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              How it works
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              One issue. One transparent journey.
            </h2>

            <p className="mt-4 text-slate-600">
              GramSetu connects every stage of the local governance process
              so citizens can see what happens after they raise an issue.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <ProcessCard
              number="01"
              icon={<FileText size={22} />}
              title="Citizen Reports"
              description="Citizens submit local problems such as water shortages, road damage or broken streetlights."
            />


            <ProcessCard
              number="02"
              icon={<Users size={22} />}
              title="Community Decides"
              description="Related complaints are grouped and brought to the Gram Sabha for discussion and decision-making."
            />


            <ProcessCard
              number="03"
              icon={<Wrench size={22} />}
              title="Officials Implement"
              description="Approved decisions become projects that officials can track and update transparently."
            />

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section
        id="features"
        className="bg-white px-6 py-20"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Features
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Built around the people who make communities work.
            </h2>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <FeatureCard
              icon={<FileText size={22} />}
              title="Issue Reporting"
              description="Simple digital reporting for citizens to raise problems in their locality."
            />


            <FeatureCard
              icon={<Users size={22} />}
              title="Community Participation"
              description="Gram Sabha members can review issues, discuss priorities and record decisions."
            />


            <FeatureCard
              icon={<Wrench size={22} />}
              title="Implementation Tracking"
              description="Officials can manage projects, budgets and implementation progress."
            />


            <FeatureCard
              icon={<ShieldCheck size={22} />}
              title="Citizen Verification"
              description="Citizens can verify whether completed work actually addresses the reported issue."
            />


            <FeatureCard
              icon={<Landmark size={22} />}
              title="Transparent Decisions"
              description="Community decisions and project status remain visible through the workflow."
            />


            <FeatureCard
              icon={<MapPin size={22} />}
              title="Ward-Level Visibility"
              description="Issues and projects can be viewed according to local wards and communities."
            />

          </div>

        </div>

      </section>


      {/* TRANSPARENCY */}
      <section
        id="transparency"
        className="bg-slate-900 px-6 py-20 text-white"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Transparency
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Citizens should know what happens after they speak up.
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              GramSetu creates a visible chain from complaint to community
              decision, implementation and verification. This makes local
              development easier to understand and monitor.
            </p>

          </div>


          <div className="grid gap-4 sm:grid-cols-2">

            <DarkFeature
              icon={<FileText size={20} />}
              title="Report"
              text="Issue submitted by citizen"
            />


            <DarkFeature
              icon={<Users size={20} />}
              title="Discuss"
              text="Reviewed by Gram Sabha"
            />


            <DarkFeature
              icon={<Wrench size={20} />}
              title="Implement"
              text="Work carried out by officials"
            />


            <DarkFeature
              icon={<CheckCircle2 size={20} />}
              title="Verify"
              text="Citizen confirms the outcome"
            />

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white px-6 py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">

          <div>

            <span className="font-semibold text-slate-800">
              GramSetu
            </span>

            {" "}— From Community Voice to Community Action.

          </div>


          <div>
            Prototype • Community Governance Platform
          </div>

        </div>

      </footer>

    </div>
  );
}


/* ---------------- TIMELINE ---------------- */

function TimelineItem({
  icon,
  title,
  description,
  completed = false,
  progress = false,
}) {
  return (
    <div className="flex items-start gap-4">

      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
          completed
            ? "bg-emerald-100 text-emerald-600"
            : "bg-slate-100 text-slate-400"
        }`}
      >
        {icon}
      </div>


      <div className="flex-1">

        <div className="flex items-center justify-between gap-4">

          <p className="text-sm font-semibold text-slate-800">
            {title}
          </p>

          {progress && (
            <span className="text-xs font-semibold text-emerald-600">
              70%
            </span>
          )}

        </div>


        <p className="mt-1 text-xs text-slate-500">
          {description}
        </p>


        {progress && (
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">

            <div
              className="h-full rounded-full bg-emerald-600"
              style={{ width: "70%" }}
            />

          </div>
        )}

      </div>

    </div>
  );
}


/* ---------------- STATS ---------------- */

function Stat({ number, label }) {
  return (
    <div className="px-6 py-8 text-center">

      <p className="text-3xl font-bold text-slate-900">
        {number}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        {label}
      </p>

    </div>
  );
}


/* ---------------- PROCESS CARD ---------------- */

function ProcessCard({
  number,
  icon,
  title,
  description,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">

      <div className="flex items-center justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
          {icon}
        </div>

        <span className="text-sm font-bold text-slate-300">
          {number}
        </span>

      </div>


      <h3 className="mt-6 text-lg font-bold">
        {title}
      </h3>


      <p className="mt-3 text-sm leading-6 text-slate-600">
        {description}
      </p>

    </div>
  );
}


/* ---------------- FEATURE CARD ---------------- */

function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-md">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
        {icon}
      </div>


      <h3 className="mt-5 font-bold">
        {title}
      </h3>


      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>

    </div>
  );
}


/* ---------------- DARK FEATURE ---------------- */

function DarkFeature({
  icon,
  title,
  text,
}) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-800 p-5">

      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
        {icon}
      </div>


      <h3 className="mt-4 font-semibold">
        {title}
      </h3>


      <p className="mt-1 text-sm text-slate-400">
        {text}
      </p>

    </div>
  );
}


export default App;