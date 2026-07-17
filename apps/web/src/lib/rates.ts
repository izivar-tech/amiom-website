import { SERVICES } from "@amiom/constants";

export interface ServiceRates {
  loanAmount: string;
  interestRate: string;
  tenure: string;
}

/** Fallback rates from constants — used locally and if Edge Config is unavailable */
function getFallbackRates(slug: string): ServiceRates {
  const service = SERVICES.find((s) => s.slug === slug);
  return {
    loanAmount:   service?.loanAmount   ?? "—",
    interestRate: service?.interestRate ?? "—",
    tenure:       service?.tenure       ?? "—",
  };
}

/**
 * Fetches live rates from Vercel Edge Config.
 * Falls back to constants if Edge Config is not configured (local dev)
 * or if the key is missing.
 *
 * Edge Config key: "service-rates"
 * Structure:
 * {
 *   "personal-loans":        { "loanAmount": "...", "interestRate": "...", "tenure": "..." },
 *   "home-loans":            { ... },
 *   ...
 * }
 */
export async function getServiceRates(slug: string): Promise<ServiceRates> {
  const fallback = getFallbackRates(slug);

  // Edge Config is only available when EDGE_CONFIG env var is set (Vercel)
  if (!process.env.EDGE_CONFIG) return fallback;

  try {
    const { get } = await import("@vercel/edge-config");
    const allRates = await get<Record<string, ServiceRates>>("service-rates");
    return allRates?.[slug] ?? fallback;
  } catch {
    // Edge Config unavailable — silently fall back
    return fallback;
  }
}
