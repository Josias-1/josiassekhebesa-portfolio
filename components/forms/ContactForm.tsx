"use client";

import { useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";

export default function ContactForm() {
  const turnstileRef = useRef<TurnstileInstance>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setErrorMessage("");

    if (!token) {
      setErrorMessage("Please complete the security verification.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          turnstileToken: token,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send message.");
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

      setToken("");

      turnstileRef.current?.reset();

    } catch (err: any) {
      setErrorMessage(err.message);
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
          Thank you for reaching out.
        </p>

        <p className="mt-4 leading-8 text-slate-300">
          Your enquiry has been delivered successfully.
        </p>

        <p className="mt-4 leading-8 text-slate-300">
          I'll personally review your message and get back to you within
          one business day.
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
          <label className="mb-2 block text-sm text-slate-300">
            Full Name
          </label>

          <input
            required
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Email Address
          </label>

          <input
            required
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Company
          </label>

          <input
            value={form.company}
            onChange={(e) =>
              setForm({
                ...form,
                company: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Topic
          </label>

          <select
            value={form.project}
            onChange={(e) =>
              setForm({
                ...form,
                project: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-500"
          >
            <option value="">Select...</option>
            <option>Job Opportunity</option>
            <option>AI Consulting</option>
            <option>Speaking</option>
            <option>Collaboration</option>
            <option>General Question</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Message
          </label>

          <textarea
            required
            rows={6}
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-500"
          />
        </div>

        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onSuccess={setToken}
          onExpire={() => setToken("")}
          onError={() =>
            setErrorMessage("Security verification failed.")
          }
        />

        {errorMessage && (
          <p className="text-sm text-red-400">
            {errorMessage}
          </p>
        )}

        <button
          disabled={loading || !token}
          className="flex w-full items-center justify-center rounded-xl bg-sky-500 px-6 py-4 font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>

      </div>

    </form>
  );
}