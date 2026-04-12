import { Download } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
            My <span className="text-accent-orange">Resume</span>
          </h1>
          <p className="text-muted-foreground font-lora">
            Below is my complete CV. You can also download it as a PDF for
            offline access.
          </p>
        </div>

        <div className="mb-8">
          <a
            href="/KeanGenota-IT-Intern.pdf"
            download="KeanGenota-IT-Intern.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-orange text-white font-poppins font-semibold rounded-xl hover:bg-opacity-90 transition-all"
          >
            <Download size={20} />
            Download CV as PDF
          </a>
          <p className="text-xs text-muted-foreground mt-3">
            Make sure the PDF file is placed at{" "}
            <code className="bg-card px-2 py-1 rounded">
              public/KeanGenota-IT-Intern.pdf
            </code>
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="relative w-full bg-background">
            <iframe
              src="/KeanGenota-IT-Intern.pdf#toolbar=1"
              width="100%"
              height="900"
              className="w-full rounded-xl"
              title="Kean Genota Resume"
            />
          </div>
        </div>

        <div className="mt-8 bg-card border border-border rounded-xl p-6">
          <h3 className="font-poppins font-bold text-foreground mb-2">
            Resume Not Loading?
          </h3>
          <p className="text-muted-foreground text-sm mb-4 font-lora">
            If the PDF doesn't display above, please download it directly:
          </p>
          <a
            href="/KeanGenota-IT-Intern.pdf"
            download="KeanGenota-IT-Intern.pdf"
            className="text-accent-orange hover:underline font-poppins font-semibold text-sm"
          >
            Download KeanGenota-IT-Intern.pdf →
          </a>
        </div>
      </div>
    </div>
  );
}
