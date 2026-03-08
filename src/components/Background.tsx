"use client";

/**
 * Background.tsx — Stunning Glassmorphism Background
 *
 * Layers (back → front):
 *   z-[-10]  Mesh gradient base + Aurora blobs
 *   z-[-5]   Engineering grid (SVG blueprint pattern)
 *   Content cards sit at the default z layer (effectively z-[10]+)
 */

export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 select-none overflow-hidden"
    >
      {/* ─── Layer 1 · Mesh Gradient Base ─────────────────────── z-[-10] */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 via-indigo-50/60 to-slate-50" />

      {/* ─── Layer 2 · Aurora Blobs ───────────────────────────── z-[-10] */}
      <div className="absolute inset-0 -z-10">
        {/* Blob 1 — ITB Navy (top-right) */}
        <div
          className="absolute -top-32 -right-32 h-[700px] w-[700px] animate-float-slow rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #003366 0%, transparent 70%)" }}
        />

        {/* Blob 2 — Soft Indigo (center-left) */}
        <div
          className="absolute top-[30%] -left-44 h-[600px] w-[600px] animate-float-medium rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
        />

        {/* Blob 3 — Deep Slate / Blue-gray (bottom-center) */}
        <div
          className="absolute -bottom-24 left-[35%] h-[650px] w-[650px] animate-float-reverse rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #1e293b 0%, transparent 70%)" }}
        />

        {/* Blob 4 — ITB Navy accent (top-left, smaller) */}
        <div
          className="absolute -top-20 left-[12%] h-[400px] w-[400px] animate-float-diagonal rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #004a99 0%, transparent 70%)" }}
        />
      </div>

      {/* ─── Layer 3 · Engineering Grid Overlay ───────────────── z-[-5] */}
      <svg
        className="absolute inset-0 -z-5 h-full w-full"
        style={{ opacity: 0.05 }}
      >
        <defs>
          <pattern
            id="blueprint-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect width="40" height="40" fill="none" />
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#003366"
              strokeWidth="0.5"
            />
          </pattern>
          {/* Larger grid for every 4th line */}
          <pattern
            id="blueprint-grid-lg"
            width="160"
            height="160"
            patternUnits="userSpaceOnUse"
          >
            <rect width="160" height="160" fill="url(#blueprint-grid)" />
            <path
              d="M 160 0 L 0 0 0 160"
              fill="none"
              stroke="#003366"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid-lg)" />
      </svg>
    </div>
  );
}
