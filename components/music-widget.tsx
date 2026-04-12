"use client";

import { useState } from "react";
import { Music, ChevronDown, ChevronUp } from "lucide-react";

interface MusicWidgetProps {
  expanded?: boolean;
}

export default function MusicWidget({ expanded = false }: MusicWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-muted hover:bg-border transition-colors text-muted-foreground hover:text-accent-orange"
      >
        <Music size={16} className="flex-shrink-0" />
        {expanded && (
          <>
            <span className="text-xs font-poppins font-medium flex-1 text-left">
              Now Playing
            </span>
            {isOpen ? (
              <ChevronUp size={14} />
            ) : (
              <ChevronDown size={14} />
            )}
          </>
        )}
      </button>

      {isOpen && (
        <div className="mt-2 rounded-xl overflow-hidden border border-border">
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9AUX5YVf3hc?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-full"
          />
        </div>
      )}
    </div>
  );
}
