import type { Metadata } from "next";
import "./globals.css";
import SideNav from "@/components/side-nav";

export const metadata: Metadata = {
  title: "Kean Angelo L. Genota - IT Intern & Developer",
  description:
    "Fourth-year BS Information Technology student at De La Salle University. CCNA Certified, specializing in networking, web development, and project management.",
  authors: [{ name: "Kean Angelo L. Genota" }],
  keywords: [
    "IT",
    "networking",
    "web development",
    "CCNA",
    "portfolio",
    "De La Salle University",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#141413" />
      </head>
      <body className="bg-background text-foreground">
        <div className="flex">
          <SideNav />
          <main className="flex-1 ml-16 md:ml-60 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
