"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  ChevronDown,
  User,
  Home,
  Briefcase,
  Landmark,
  GraduationCap,
  Car,
  CreditCard,
  Calculator,
  type LucideIcon,
} from "lucide-react";
import { COMPANY, BRAND, MAIN_NAV, type NavItem } from "@amiom/constants";
import {
  cn,
  Button,
  Container,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
  Separator,
} from "@amiom/ui";

const serviceIcons: Record<string, LucideIcon> = {
  "personal-loans": User,
  "home-loans": Home,
  "business-loans": Briefcase,
  "loan-against-property": Landmark,
  "education-loans": GraduationCap,
  "vehicle-loans": Car,
  "credit-cards": CreditCard,
};

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setSheetOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border/50 bg-background/80 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-background/60 backdrop-blur-md",
      )}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between md:h-20"
          aria-label="Main navigation"
        >
          {/* Logo — fixed width left */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-80"
            aria-label={`${COMPANY.shortName} - Home`}
          >
            <Image
              src={BRAND.logo.favicon}
              alt={`${COMPANY.shortName} logo`}
              width={36}
              height={36}
              className="h-9 w-9"
              priority
            />
            <span className="text-xl font-bold text-foreground">
              {COMPANY.shortName}
            </span>
          </Link>

          {/* Desktop Navigation — centered, fixed position */}
          <div className="hidden flex-1 items-center justify-center md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {MAIN_NAV.map((item) =>
                  item.children ? (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuTrigger
                        className={cn(
                          "bg-transparent",
                          isActive(item.href) && "text-primary",
                        )}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-1 p-4 md:grid-cols-2">
                          {item.children.map((child) => {
                            const slug = child.href.split("/").pop() ?? "";
                            const Icon = serviceIcons[slug];
                            return (
                              <li key={child.href}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.href}
                                    className={cn(
                                      "flex items-center gap-3 select-none rounded-lg p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-primary/5 hover:text-primary focus:bg-primary/5 focus:text-primary",
                                      isActive(child.href) &&
                                        "bg-primary/5 text-primary",
                                    )}
                                  >
                                    {Icon && (
                                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                        <Icon className="h-4 w-4 text-primary" />
                                      </div>
                                    )}
                                    <span className="font-medium">
                                      {child.label}
                                    </span>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent",
                            isActive(item.href) && "text-primary",
                          )}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ),
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA — fixed width right */}
          <div className="hidden shrink-0 md:block">
            <Button
              asChild
              size="pill"
              className="bg-dark-navy text-white shadow-md hover:bg-dark-navy/90"
            >
              <Link href="/contact">
                <Calculator className="h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[360px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-3">
                  <Image
                    src={BRAND.logo.favicon}
                    alt={`${COMPANY.shortName} logo`}
                    width={28}
                    height={28}
                    className="h-7 w-7"
                  />
                  {COMPANY.shortName}
                </SheetTitle>
              </SheetHeader>

              <Separator className="my-4" />

              <div className="flex flex-col gap-1">
                {MAIN_NAV.map((item) => (
                  <MobileNavItem
                    key={item.href}
                    item={item}
                    isActive={isActive(item.href)}
                    onNavigate={() => setSheetOpen(false)}
                  />
                ))}
              </div>

              <Separator className="my-4" />

              <Button
                asChild
                size="pill-lg"
                className="w-full bg-dark-navy text-white hover:bg-dark-navy/90"
                onClick={() => setSheetOpen(false)}
              >
                <Link href="/contact">
                  <Calculator className="h-4 w-4" />
                  Get in Touch
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </nav>
      </Container>
    </header>
  );
}

function MobileNavItem({
  item,
  isActive,
  onNavigate,
}: {
  item: NavItem;
  isActive: boolean;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = React.useState(false);

  if (item.children) {
    return (
      <div>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-between text-base font-medium",
            isActive && "text-primary",
          )}
          onClick={() => setExpanded(!expanded)}
        >
          {item.label}
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              expanded && "rotate-180",
            )}
          />
        </Button>
        {expanded && (
          <div className="ml-4 flex flex-col gap-1 border-l-2 border-primary/20 pl-3">
            {item.children.map((child) => {
              const slug = child.href.split("/").pop() ?? "";
              const Icon = serviceIcons[slug];
              return (
                <Button
                  key={child.href}
                  variant="ghost"
                  asChild
                  className="justify-start gap-3 text-sm text-muted-foreground"
                  onClick={onNavigate}
                >
                  <Link href={child.href}>
                    {Icon && <Icon className="h-4 w-4 text-primary" />}
                    {child.label}
                  </Link>
                </Button>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <Button
      variant="ghost"
      asChild
      className={cn(
        "justify-start text-base font-medium",
        isActive && "text-primary",
      )}
      onClick={onNavigate}
    >
      <Link href={item.href}>{item.label}</Link>
    </Button>
  );
}
