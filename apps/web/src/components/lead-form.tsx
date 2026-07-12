"use client";

import * as React from "react";
import { CONTACT_PAGE } from "@amiom/constants";
import { Button } from "@amiom/ui";
import { Send, CheckCircle2 } from "lucide-react";

export function LeadForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission — replace with actual API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);

    // Track conversion event
    if (typeof window !== "undefined" && "gtag" in window) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
        "event",
        "generate_lead",
        {
          event_category: "contact",
          event_label: "loan_application",
        },
      );
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle2 className="mb-4 h-16 w-16 text-primary" />
        <h3 className="text-2xl font-bold text-foreground">
          Thank You!
        </h3>
        <p className="mt-2 max-w-md text-muted-foreground">
          We have received your application. Our loan advisor will contact you
          within 24 hours with the best offers from our partner banks.
        </p>
        <Button
          className="mt-6"
          variant="outline"
          onClick={() => setSubmitted(false)}
        >
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your.email@example.com"
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="loanType"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Loan Type <span className="text-red-500">*</span>
          </label>
          <select
            id="loanType"
            name="loanType"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            defaultValue=""
          >
            <option value="" disabled>
              Select loan type
            </option>
            {CONTACT_PAGE.form.loanTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="loanAmount"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Loan Amount (approx.)
          </label>
          <input
            type="text"
            id="loanAmount"
            name="loanAmount"
            placeholder="e.g., ₹5,00,000"
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="city"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Your city"
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Any additional details about your requirement..."
          className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <Button type="submit" size="pill-lg" className="w-full" disabled={loading}>
        {loading ? (
          "Submitting..."
        ) : (
          <>
            Submit Application
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-primary">
          Privacy Policy
        </a>{" "}
        and consent to being contacted by our team.
      </p>
    </form>
  );
}
