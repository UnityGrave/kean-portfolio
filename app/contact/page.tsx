"use client";

import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Copy, Check } from "lucide-react";

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  isCopyable?: boolean;
}

export default function ContactPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="text-accent-orange" size={24} />,
      label: "University Email",
      value: "kean_genota@dlsu.edu.ph",
      href: "mailto:kean_genota@dlsu.edu.ph",
      isCopyable: true,
    },
    {
      icon: <Mail className="text-accent-blue" size={24} />,
      label: "Personal Email",
      value: "keangenota999@gmail.com",
      href: "mailto:keangenota999@gmail.com",
      isCopyable: true,
    },
    {
      icon: <Phone className="text-accent-green" size={24} />,
      label: "Phone",
      value: "+63 915 249 1965",
      href: "tel:+639152491965",
      isCopyable: true,
    },
    {
      icon: <Linkedin className="text-accent-orange" size={24} />,
      label: "LinkedIn",
      value: "kean-genota",
      href: "https://www.linkedin.com/in/kean-genota/",
    },
    {
      icon: <Github className="text-accent-blue" size={24} />,
      label: "GitHub",
      value: "UnityGrave",
      href: "https://github.com/UnityGrave",
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-background py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            Get in <span className="text-accent-orange">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl font-lora">
            Feel free to reach out! I'm always open to discussing new projects,
            opportunities, or collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-opacity-100 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-muted rounded-lg">{info.icon}</div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground font-poppins">
                    {info.label}
                  </p>
                  <a
                    href={info.href}
                    target={info.href?.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href?.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-foreground font-poppins font-semibold text-lg hover:text-accent-orange transition-colors break-all"
                  >
                    {info.value}
                  </a>
                </div>
                {info.isCopyable && (
                  <button
                    onClick={() => handleCopy(info.value, index)}
                    className="p-2 text-muted-foreground hover:text-accent-orange transition-colors flex-shrink-0"
                    title="Copy to clipboard"
                  >
                    {copiedIndex === index ? (
                      <Check size={20} className="text-accent-green" />
                    ) : (
                      <Copy size={20} />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <section className="border-t border-border pt-12">
          <h2 className="text-2xl font-poppins font-bold text-foreground mb-6">
            Send a <span className="text-accent-orange">Message</span>
          </h2>

          <div className="bg-card border border-border rounded-xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-poppins font-semibold text-foreground mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent-orange transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-poppins font-semibold text-foreground mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent-orange transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-poppins font-semibold text-foreground mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent-orange transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-poppins font-semibold text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent-orange transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent-orange text-white font-poppins font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                Send Message
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Note: This form will generate a mailto link. You can also email me
                directly at{" "}
                <a
                  href="mailto:kean_genota@dlsu.edu.ph"
                  className="text-accent-orange hover:underline"
                >
                  kean_genota@dlsu.edu.ph
                </a>
              </p>
            </form>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h3 className="text-lg font-poppins font-semibold text-foreground mb-6">
            Connect on Social Media
          </h3>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/kean-genota/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card border border-border rounded-full hover:border-accent-orange hover:text-accent-orange transition-all"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/UnityGrave"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-card border border-border rounded-full hover:border-accent-orange hover:text-accent-orange transition-all"
              title="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
