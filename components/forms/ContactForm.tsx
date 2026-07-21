"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setSubmittedName(form.name);
      setSuccess(true);

      setForm({
        name: "",
        email: "",
        company: "",
        project: "",
        message: "",
      });

    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }

    setLoading(false);
  }

  if (success) {
    return (
      <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-sky-500/10 p-10">

        <h2 className="text-3xl font-bold text-white">
          Hi {submittedName},
        </h2>

        <p className="mt-6 leading-8 text-slate-300">
          Thank you for reaching out and for your interest in my work.
        </p>

        <p className="mt-4 leading-8 text-slate-300">
          I've received your enquiry successfully and will personally review your message.
          You can expect a response within one business day.
        </p>

        <p className="mt-8 leading-8 text-slate-300">
          In the meantime, feel free to explore more of my Enterprise AI
          projects, architecture playbooks, and technical work throughout
          the website.
        </p>

        <div className="mt-10">
          <p className="font-semibold text-white">
            Best regards,
          </p>

          <p className="mt-2 text-xl font-semibold text-sky-400">
            Josias Sekhebesa
          </p>

          <p className="text-slate-500">
            Enterprise AI Engineer
          </p>
        </div>

        <button
          onClick={() => {
            setSuccess(false);
            setSubmittedName("");
          }}
          className="mt-12 rounded-xl bg-sky-500 px-6 py-4 font-semibold text-white transition hover:bg-sky-600"
        >
          Send Another Message
        </button>

      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-slate-900/40 p-8"
    >
      <div className="space-y-6">

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Full Name
          </label>

          <input
            required
            type="text"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Email Address
          </label>

          <input
            required
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Company
          </label>

          <input
            type="text"
            value={form.company}
            onChange={(e) =>
              setForm({ ...form, company: e.target.value })
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Project Type
          </label>

          <select
            value={form.project}
            onChange={(e) =>
              setForm({ ...form, project: e.target.value })
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-500"
          >
            <option value="">Select...</option>
            <option>Enterprise AI</option>
            <option>Azure AI</option>
            <option>Generative AI</option>
            <option>AI Architecture</option>
            <option>Consulting</option>
            <option>Speaking Engagement</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Message
          </label>

          <textarea
            required
            rows={6}
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-500"
          />
        </div>

        <button
          disabled={loading}
          className="w-full rounded-xl bg-sky-500 px-6 py-4 font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

      </div>
    </form>
  );
}