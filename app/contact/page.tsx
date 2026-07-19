"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, Linkedin, Github, Copy, Check, Loader2 } from "lucide-react";

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  isCopyable?: boolean;
}

const CONTACT_EMAIL = "keanangelo.genota@gmail.com";
const FORMSPREE_FORM_ID = "mojgdggb";

export default function ContactPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [state, handleSubmit, reset] = useForm(FORMSPREE_FORM_ID);

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="text-accent-orange" size={24} />,
      label: "Email",
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
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
            Feel free to reach out! I&apos;m always open to discussing new projects,
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
            {state.succeeded ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={28} className="text-accent-green" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-foreground mb-2">
                  Message sent
                </h3>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out — I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={reset}
                  className="mt-6 text-sm text-accent-orange font-poppins font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Honeypot — hidden from humans, discarded by Formspree if filled */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

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
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent-orange transition-colors"
                      placeholder="Your name"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-xs text-red-500 mt-1"
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
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent-orange transition-colors"
                      placeholder="your@email.com"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-xs text-red-500 mt-1"
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
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                    className="text-xs text-red-500 mt-1"
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
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent-orange transition-colors resize-none"
                    placeholder="Your message..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-xs text-red-500 mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-6 py-3 bg-accent-orange text-white font-poppins font-semibold rounded-lg transition-all hover:bg-opacity-90 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-opacity-100 flex items-center justify-center gap-2"
                >
                  {state.submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <ValidationError
                  errors={state.errors}
                  className="text-sm text-center text-red-500"
                />

                <p className="text-xs text-muted-foreground text-center">
                  Prefer to write it yourself? Email me directly at{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-accent-orange hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </form>
            )}
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
