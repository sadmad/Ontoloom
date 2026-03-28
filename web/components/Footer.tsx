import Link from 'next/link'
import { Hexagon, Github, Twitter, Mail, BookOpen, FileText, GitBranch, Sparkles } from 'lucide-react'

// A mini decorative ontology rendered as SVG
function MiniOntology() {
  return (
    <svg width="280" height="80" viewBox="0 0 280 80" fill="none" className="opacity-20">
      {/* Edges */}
      <line x1="60"  y1="40" x2="120" y2="40" stroke="#7c3aed" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="160" y1="40" x2="220" y2="40" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="140" y1="40" x2="140" y2="15" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="140" y1="40" x2="140" y2="65" stroke="#10b981" strokeWidth="1" strokeDasharray="4 3" />
      {/* Nodes */}
      <rect x="0"   y="28" width="60"  height="24" rx="4" fill="#1e1b4b" stroke="#7c3aed" strokeWidth="1" />
      <polygon points="120,25 160,40 120,55 80,40"  fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1" />
      <ellipse cx="140" cy="10" rx="28" ry="10"    fill="#062936" stroke="#06b6d4" strokeWidth="1" />
      <ellipse cx="140" cy="70" rx="24" ry="10"    fill="#052e16" stroke="#10b981" strokeWidth="1" />
      <rect x="220" y="28" width="60"  height="24" rx="12" fill="#0f172a" stroke="#475569" strokeWidth="1" strokeDasharray="3 2" />
      {/* Labels */}
      <text x="30"  y="43" textAnchor="middle" fill="#a78bfa" fontSize="7" fontFamily="monospace">Concept</text>
      <text x="140" y="43" textAnchor="middle" fill="#93c5fd" fontSize="7" fontFamily="monospace">Entity</text>
      <text x="140" y="13" textAnchor="middle" fill="#a5f3fc" fontSize="7" fontFamily="monospace">Context</text>
      <text x="140" y="73" textAnchor="middle" fill="#6ee7b7" fontSize="7" fontFamily="monospace">Process</text>
      <text x="250" y="43" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">AI hint</text>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer-top-border bg-[#03030a]">
      {/* Main grid */}
      <div className="container mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <Hexagon size={22} className="text-violet-500 fill-violet-950" strokeWidth={1.5} />
              <span className="text-white font-bold text-base tracking-tight">
                Onto<span className="text-violet-400">loom</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Research tool for building ontologies and knowledge graphs from unstructured documents — powered by LLMs.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="text-slate-600 hover:text-white transition-colors">
                <Github size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-slate-600 hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
              <a href="mailto:contact@ontoloom.dev"
                className="text-slate-600 hover:text-white transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest">Navigate</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Tutorial', href: '/tutorial' },
                { label: 'Contact', href: '/contact' },
                { label: 'Workspace', href: '/workspace' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-500 hover:text-slate-200 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest">Research</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Documentation', icon: <BookOpen size={12} /> },
                { label: 'API Reference', icon: <FileText size={12} /> },
                { label: 'Ontology Schema', icon: <GitBranch size={12} /> },
                { label: 'LLM Pipeline', icon: <Sparkles size={12} /> },
              ].map((item) => (
                <li key={item.label}>
                  <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-slate-200 text-sm transition-colors">
                    <span className="text-violet-600">{item.icon}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Decorative ontology */}
          <div className="flex flex-col justify-center items-start gap-3">
            <p className="text-slate-700 text-xs font-mono uppercase tracking-widest">Node legend</p>
            <MiniOntology />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-900">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-700 text-xs">
            © {new Date().getFullYear()} Ontoloom — Research Project
          </p>
          <p className="text-slate-800 text-xs font-mono">
            ontology · knowledge graph · LLM · semantic reasoning
          </p>
        </div>
      </div>
    </footer>
  )
}
