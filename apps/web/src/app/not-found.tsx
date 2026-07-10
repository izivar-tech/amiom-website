import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button, Container, Card, Separator } from "@amiom/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <Container>
        <Card className="mx-auto max-w-md border-border/50 bg-card/80 text-center backdrop-blur-sm">
          <p className="text-7xl font-bold text-primary">404</p>
          <Separator className="my-4" />
          <h1 className="text-2xl font-semibold text-foreground">Page Not Found</h1>
          <p className="mt-2 text-muted-foreground">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}
