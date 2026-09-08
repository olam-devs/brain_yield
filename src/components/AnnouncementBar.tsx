"use client";

import { useState } from "react";
import { Megaphone, X } from "lucide-react";
import type { Announcement } from "@/lib/content";

export default function AnnouncementBar({ announcements }: { announcements: Announcement[] }) {
  const [dismissed, setDismissed] = useState(false);
  const [showAll, setShowAll] = useState(false);

  if (!announcements.length || dismissed) return null;
  const latest = announcements[0];

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary-dark text-white shadow-2xl">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
          <span className="hidden sm:inline-flex shrink-0 items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            <Megaphone className="h-3.5 w-3.5" />
            {latest.category || "Notice"}
          </span>
          <p className="min-w-0 flex-1 truncate text-sm font-medium">{latest.title}</p>
          <button
            onClick={() => setShowAll(true)}
            className="shrink-0 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold transition-colors hover:bg-white/25"
          >
            Read All ({announcements.length})
          </button>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss announcement"
            className="shrink-0 rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/15 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {showAll && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setShowAll(false)}
        >
          <div
            className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex items-center justify-between bg-primary px-6 py-4 text-white">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <Megaphone className="h-5 w-5" />
                School Announcements
              </h3>
              <button onClick={() => setShowAll(false)} aria-label="Close" className="rounded-full p-1 hover:bg-white/15">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="divide-y divide-border">
              {announcements.map((a, i) => (
                <div key={i} className="p-6">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary-dark">
                      {a.category || "Notice"}
                    </span>
                    <span className="text-xs text-text-light">
                      {new Date(a.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                  </div>
                  <h4 className="mb-1 font-bold text-text">{a.title}</h4>
                  <p className="text-sm leading-relaxed text-text-light">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
