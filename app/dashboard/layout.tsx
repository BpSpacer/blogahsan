import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";
import { DashboardItems } from "../components/dashboard/dashboarditems";
import { CircleUser, DollarSign, Globe, Home } from "lucide-react";
import { ThemeToggle } from "../components/dashboard/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Logo from "@/public/logo-dark.png";

export const navLinks = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    name: "Sites",
    href: "/dashboard/sites",
    icon: Globe,
  },
  {
    name: "Pricing",
    href: "/dashboard/pricing",
    icon: DollarSign,
  },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar (hidden on mobile) */}
      <div className="border-r bg-muted/40 hidden md:block lg:flex flex-col lg:w-[280px]">
        <div className="flex h-full max-h-screen flex-col gap-2">
          {/* Sidebar top */}
          <div className="flex h-14 items-center justify-between border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src={Logo} alt="Logo" className="size-8" />
              <h3 className="text-2xl">
                Blog<span className="text-primary">Ahsan</span>
              </h3>
            </Link>
          </div>

          <div className="flex-1">
            <nav className="grid items-start px-2 font-medium lg:px-4">
              <DashboardItems />
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Topbar (always visible on all screens) */}
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold md:hidden">
            {/* Show logo only on mobile in topbar */}
            <Image src={Logo} alt="Logo" className="size-8" />
            <h3 className="text-2xl">
              Blog<span className="text-primary">Ahsan</span>
            </h3>
          </Link>

          {/* Push right content */}
          <div className="ml-auto flex items-center gap-x-5">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <CircleUser className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <LogoutLink>Log out</LogoutLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Mobile nav below topbar */}
        <nav className="flex items-center justify-around border-b bg-muted/40 px-4 py-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition"
            >
              <link.icon className="h-6 w-6 mb-1" />
              <span className="text-xs">{link.name}</span>
            </Link>
          ))}
        </nav>

        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">{children}</main>
      </div>
    </section>
  );
}
