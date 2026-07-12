/** Simple in-memory rate limiter — resets on cold start, good enough for edge/serverless */
const map = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(
  key: string,
  { max = 5, windowMs = 60_000 }: { max?: number; windowMs?: number } = {},
): { allowed: boolean } {
  const now = Date.now();
  const entry = map.get(key);

  if (!entry || now >= entry.resetAt) {
    map.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }

  if (entry.count >= max) return { allowed: false };

  entry.count++;
  return { allowed: true };
}
