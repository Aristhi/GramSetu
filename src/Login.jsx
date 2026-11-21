import { useState } from "react";
import {
  ArrowLeft,
  User,
  Users,
  Landmark,
  Lock,
  Mail,
} from "lucide-react";

function Login({ onBack, onLogin }) {
  const [role, setRole] = useState("Citizen");

  const roles = [
    {
      name: "Citizen",
      icon: <User size={22} />,
      description: "Report issues and track community work",
    },
    {
      name: "Gram Sabha Member",
      icon: <Users size={22} />,
      description: "Discuss issues and record decisions",
    },
    {
      name: "Official",
      icon: <Landmark size={22} />,
      description: "Manage implementation and progress",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* TOP BAR */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4">

          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-green-600"
          >
            <ArrowLeft size={18} />
            Back to GramSetu
          </button>

        </div>
      </nav>

      {/* LOGIN AREA */}
      <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6 py-12">

        <div className="w-full max-w-4xl">

          {/* HEADER */}
          <div className="mb-8 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-3xl shadow-lg">
              🌾
            </div>

            <h1 className="mt-5 text-3xl font-bold text-slate-900">
              Welcome to GramSetu
            </h1>

            <p className="mt-2 text-slate-500">
              Choose how you want to access the platform
            </p>

          </div>

          {/* ROLE TABS */}
          <div className="grid gap-3 md:grid-cols-3">

            {roles.map((item) => (
              <button
                key={item.name}
                onClick={() => setRole(item.name)}
                className={`rounded-2xl border p-5 text-left transition ${
                  role === item.name
                    ? "border-green-500 bg-green-50 shadow-sm"
                    : "border-slate-200 bg-white hover:border-green-300"
                }`}
              >

                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${
                    role === item.name
                      ? "bg-green-600 text-white"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {item.icon}
                </div>

                <h2 className="font-bold text-slate-900">
                  {item.name}
                </h2>

                <p className="mt-1 text-sm leading-5 text-slate-500">
                  {item.description}
                </p>

              </button>
            ))}

          </div>

          {/* LOGIN FORM */}
          <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">

            <div className="mb-6">
              <p className="text-sm font-medium text-green-600">
                Logging in as
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                {role}
              </h2>
            </div>

            {/* EMAIL */}
            <label className="text-sm font-semibold text-slate-700">
              Email / ID
            </label>

            <div className="relative mt-2">
              <Mail
                size={18}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                type="text"
                placeholder={
                  role === "Citizen"
                    ? "Enter your email"
                    : role === "Gram Sabha Member"
                    ? "Enter your member ID"
                    : "Enter your official ID"
                }
                className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
            </div>

            {/* PASSWORD */}
            <label className="mt-5 block text-sm font-semibold text-slate-700">
              Password
            </label>

            <div className="relative mt-2">
              <Lock
                size={18}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />
            </div>

            {/* LOGIN BUTTON */}
            <button
              onClick={() => onLogin(role)}
              className="mt-6 w-full rounded-xl bg-green-600 py-3.5 font-semibold text-white shadow-lg shadow-green-600/20 transition hover:bg-green-700"
            >
              Login as {role}
            </button>

            {/* PROTOTYPE NOTE */}
            <p className="mt-4 text-center text-xs text-slate-400">
              Prototype mode • Demo login
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Login;