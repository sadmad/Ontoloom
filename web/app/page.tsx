import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight, FileText, GitBranch, Sparkles, ChevronDown } from 'lucide-react'
import Footer from '@/components/Footer'

// React Flow must be client-side only (no SSR)
const OntologyGraph = dynamic(() => import('@/components/OntologyGraph'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <span className="text-violet-500 text-sm font-mono animate-pulse">
        initialising graph…
      </span>
    </div>
  ),
})

const FEATURES = [
  {
    icon: <FileText className="text-violet-400" size={22} />,
    title: 'Upload & Extract',
    desc: 'Drop any PDF. Ontoloom parses the document and automatically identifies key concepts, entities, and domain terminology.',
    accent: 'violet',
  },
  {
    icon: <GitBranch className="text-cyan-400" size={22} />,
    title: 'Build the Graph',
    desc: 'Visualise extracted relationships as a live ontology graph. Drag nodes, add edges, and refine the structure interactively.',
    accent: 'cyan',
  },
  {
    icon: <Sparkles className="text-emerald-400" size={22} />,
    title: 'LLM Suggestions',
    desc: 'AI surfaces hidden relationships and suggests concept hierarchies — shown as dashed nodes you can accept or discard.',
    accent: 'emerald',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#05050f] overflow-hidden">

      {/* ── Subtle grid overlay ─────────────────────────────── */}
      <div className="pointer-events-none fixed inset-0 grid-bg" />

      {/* ── Ambient glow blobs ──────────────────────────────── */}
      <div className="pointer-events-none fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full
                      bg-violet-900/10 blur-[140px]" />
      <div className="pointer-events-none fixed bottom-0 right-1/4 w-[500px] h-[500px] rounded-full
                      bg-cyan-900/8 blur-[120px]" />

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-6 pt-20 pb-12
                        grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT — copy */}
          <div className="space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                            border border-violet-500/30 bg-violet-500/10
                            text-violet-300 text-xs font-medium">
              <Sparkles size={12} />
              LLM-Powered Research Tool
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
              <span className="text-white">Turn documents</span>
              <br />
              <span className="gradient-text">into editable</span>
              <br />
              <span className="text-white">ontology graphs</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              A customizable workspace for extracting concepts, entities, and
              relationships from PDFs — powered by LLMs and interactive
              visualisation.
            </p>

            {/* Tag pills */}
            <div className="flex flex-wrap gap-2">
              {['PDF Upload', 'Entity Extraction', 'Relationship Mapping', 'Knowledge Graph'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-xs font-medium
                             bg-slate-800/80 border border-slate-700 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex items-center gap-5">
              <Link
                href="/workspace"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg
                           bg-violet-600 hover:bg-violet-500
                           text-white text-sm font-semibold
                           transition-all duration-200 shadow-lg shadow-violet-900/40"
              >
                Get started
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/tutorial"
                className="text-slate-500 hover:text-slate-200 text-sm transition-colors"
              >
                View tutorial →
              </Link>
            </div>
          </div>

          {/* RIGHT — interactive graph panel */}
          <div className="relative h-[560px] rounded-2xl overflow-hidden
                          border border-slate-800 bg-[#080814]
                          shadow-2xl shadow-violet-950/30">

            {/* macOS-style title bar */}
            <div className="absolute top-0 left-0 right-0 z-10 h-11
                            px-4 flex items-center gap-2
                            bg-[#080814]/90 backdrop-blur
                            border-b border-slate-800/60">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-slate-600 text-xs font-mono">
                aircraft-landing.ontoloom
              </span>
              <span className="ml-auto flex items-center gap-1.5
                               text-[10px] text-slate-700 font-mono">
                <span className="w-2 h-2 rounded-full bg-violet-600 inline-block" />
                dashed = AI suggestion
              </span>
            </div>

            <OntologyGraph />
          </div>
        </div>

        {/* Scroll nudge */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2
                        flex flex-col items-center gap-1.5 text-slate-700">
          <span className="text-[11px] uppercase tracking-widest">Explore</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOW IT WORKS  (3 steps)
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-28 border-t border-slate-800/40">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16 space-y-3">
            <p className="text-violet-400 text-sm font-mono uppercase tracking-widest">
              Workflow
            </p>
            <h2 className="text-3xl font-bold text-white">
              From raw text to structured knowledge
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
              Ontoloom bridges the gap between unstructured documents and formal
              semantic knowledge representations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((card, i) => (
              <div
                key={card.title}
                className="relative p-6 rounded-xl
                           border border-slate-800 bg-slate-900/30
                           hover:border-slate-600 hover:bg-slate-900/60
                           transition-all duration-300 group"
              >
                {/* Step number */}
                <span className="absolute top-5 right-5 text-slate-800 text-4xl font-black select-none">
                  0{i + 1}
                </span>

                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center
                                mb-4 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════════════ */}
      <section className="relative py-24 border-t border-slate-800/40 overflow-hidden">
        {/* glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[200px] bg-violet-800/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative container mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl font-extrabold text-white">
            Ready to build your <span className="gradient-text">first ontology?</span>
          </h2>
          <p className="text-slate-500 max-w-sm mx-auto text-sm">
            Upload a PDF and let Ontoloom extract the knowledge inside.
          </p>
          <Link
            href="/workspace"
            className="start-btn inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl
                       bg-gradient-to-r from-violet-600 to-violet-700
                       hover:from-violet-500 hover:to-violet-600
                       text-white font-semibold
                       border border-violet-500/40
                       transition-all duration-200"
          >
            Start for free
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
