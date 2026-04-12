"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import {
  Home,
  Code2,
  Briefcase,
  FileText,
  Mail,
  Menu,
  X,
} from "lucide-react";
import MusicWidget from "./music-widget";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/skills", label: "Skills", icon: Code2 },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: Code2 },
  { href: "/resume", label: "Resume", icon: FileText },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function SideNav() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-card rounded-xl text-accent-orange hover:bg-muted transition-colors"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-screen bg-card border-r border-border z-40 transition-all duration-300 flex flex-col ${
          expanded || mobileOpen ? "w-60" : "w-16"
        } md:w-60 md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div className="p-4 border-b border-border flex items-center justify-center">
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-accent-orange/40">
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
              <div className="w-full h-full bg-gradient-to-br from-accent-orange to-accent-blue flex items-center justify-center font-poppins font-bold text-lg text-white">
                KG
              </div>
            )}
          </div>
          {(expanded || mobileOpen) && (
            <span className="ml-3 font-poppins font-bold text-accent-orange hidden sm:inline">
              Kean
            </span>
          )}
        </div>

        <nav className="flex-1 py-8 px-3 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-4 px-3 py-2 rounded-xl transition-all ${
                  isActive
                    ? "bg-accent-orange text-white"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon size={20} className="flex-shrink-0" />
                <span
                  className={`font-poppins text-sm font-medium transition-opacity duration-300 ${
                    expanded || mobileOpen ? "opacity-100" : "opacity-0 hidden sm:inline md:opacity-0"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-border">
          <MusicWidget expanded={expanded || mobileOpen} />
        </div>
      </aside>
    </>
  );
}
