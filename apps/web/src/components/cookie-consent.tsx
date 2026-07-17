"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";
import { Button } from "@amiom/ui";
import Link from "next/link";

const CONSENT_KEY = "amiom_cookie_consent";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    // Update GA consent mode if already loaded
    if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag === "function") {
      (window as unknown as { gtag: (...a: unknown[]) => void }).gtag("consent", "update", { analytics_storage: "granted" });
    }
  }

  function deny() {
    localStorage.setItem(CONSENT_KEY, "denied");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-dark-navy px-4 py-4 shadow-2xl"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Cookie className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="text-sm text-white/75">
                We use cookies to improve your experience and analyse site traffic.{" "}
                <Link
                  href="/privacy"
                  className="text-white/50 underline underline-offset-2 transition-colors hover:text-white/80"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <Button
                variant="outline"
                size="pill"
                onClick={deny}
                className="border-white/20 text-white/65 hover:border-white/40 hover:bg-transparent hover:text-white"
              >
                Decline
              </Button>
              <Button
                size="pill"
                onClick={accept}
              >
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
