"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Home, Code2, Briefcase, FolderOpen, FileText, Mail, Menu, X } from "lucide-react";
import MusicWidget from "./music-widget";

const navItems = [
  { href: "/",           label: "Home",       icon: Home },
  { href: "/skills",     label: "Skills",     icon: Code2 },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects",   label: "Projects",   icon: FolderOpen },
  { href: "/resume",     label: "Resume",     icon: FileText },
  { href: "/contact",    label: "Contact",    icon: Mail },
];

export default function SideNav() {
  const pathname    = usePathname();
  const [hovered,    setHovered]    = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [imgError,   setImgError]   = useState(false);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-card rounded-xl text-accent-orange hover:bg-muted transition-colors"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Desktop hover trigger zone — always present, sits at left edge */}
      <div
        className="hidden md:block fixed left-0 top-0 h-screen w-5 z-50"
        onMouseEnter={() => setHovered(true)}
      />

      {/* Thin accent peek line when collapsed */}
      <div
        className="hidden md:block fixed left-0 top-0 h-screen w-0.5 z-30 bg-accent-orange/50 transition-opacity duration-300"
        style={{ opacity: hovered ? 0 : 1 }}
      />

      {/* Sidebar — inline style handles transform so Tailwind doesn't conflict */}
      <aside
        className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border z-40 flex flex-col shadow-2xl"
        style={{
          transform: hovered || mobileOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          // On mobile, mobileOpen controls visibility; on desktop, hovered does
        }}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Avatar + name */}
        <div className="p-5 border-b border-border flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-accent-orange/50">
            {!imgError ? (
              <Image
                src="/images/profile.jpg"
                alt="Kean Genota"
                fill
                className="object-cover object-top"
                onError={() => setImgError(true)}
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-accent-orange to-accent-blue flex items-center justify-center font-poppins font-bold text-base text-white">
                KG
              </div>
            )}
          </div>
          <div className="overflow-hidden">
            <p className="font-poppins font-bold text-foreground text-sm truncate">Kean Genota</p>
            <p className="text-xs text-muted-foreground truncate">IT Intern · DLSU</p>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 py-6 px-3 flex flex-col gap-1 overflow-y-auto">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors text-sm font-poppins font-medium ${
                  isActive
                    ? "bg-accent-orange text-white shadow-md"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon size={18} className="flex-shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Music widget */}
        <div className="p-3 border-t border-border">
          <MusicWidget expanded={true} />
        </div>
      </aside>
    </>
  );
}
