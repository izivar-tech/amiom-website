"use client";

import Link from "next/link";
import { Button } from "@amiom/ui";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <p className="text-xs font-bold uppercase tracking-widest mb-3 text-primary">
        Something went wrong
      </p>
      <h1 className="text-2xl font-bold mb-4 text-foreground">
        An unexpected error occurred
      </h1>
      <p className="max-w-sm mb-8 text-base text-muted-foreground">
        We&apos;re sorry for the inconvenience. Please try again or return to the homepage.
      </p>
      <div className="flex gap-4">
        <Button onClick={reset}>Try again</Button>
        <Button asChild variant="outline">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}
