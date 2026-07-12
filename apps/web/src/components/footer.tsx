import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, BRAND, FOOTER_NAV, LEGAL } from "@amiom/constants";
import { Container, Separator } from "@amiom/ui";

export function Footer() {
  return (
    <footer className="border-t bg-foreground text-background" role="contentinfo">
      <Container>
        <div className="grid gap-8 pb-8 pt-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 transition-opacity hover:opacity-80"
              aria-label={`${COMPANY.shortName} - Home`}
            >
              <Image
                src={BRAND.logo.faviconWhite}
                alt={`${COMPANY.shortName} logo`}
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-lg font-bold text-background">
                {COMPANY.shortName}
              </span>
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-background/60">
              Registered DSA for leading banks and NBFCs. Helping you find the
              right loan with the best rates.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 text-sm text-background/60 transition-colors hover:text-background"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-sm text-background/60 transition-colors hover:text-background"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-background/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {COMPANY.address.city}, {COMPANY.address.state},{" "}
                  {COMPANY.address.country}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/80">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_NAV.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/80">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_NAV.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/80">
              Legal
            </h3>
            <ul className="space-y-3" role="list">
              {FOOTER_NAV.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-xs text-background/40">
              <p>CIN: {COMPANY.cin}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="bg-background/10" />
        <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-background/50">{LEGAL.copyright}</p>
            <p className="text-xs text-background/30">
              Designed &amp; Developed by{" "}
              <span className="text-background/50">Izivar Technologies Private Limited</span>
            </p>
          </div>
          <p className="text-xs text-background/40 sm:max-w-xl sm:text-right">
            {LEGAL.disclaimer}
          </p>
        </div>
      </Container>
    </footer>
  );
}
