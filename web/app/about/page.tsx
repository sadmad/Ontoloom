import { Users, FlaskConical, BrainCircuit, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
const highlights = [
  {
    icon: Users,
    title: 'Academic Collaboration',
    body: 'Prof. Dr. Sven Hartmann and Apl.-Prof. Dr.-Ing. Umut Durak lead the initiative, bridging TU Clausthal\'s BDIS group and DLR\'s Institute of Flight Systems.',
  },
  {
    icon: FlaskConical,
    title: 'Research-Driven MVP',
    body: 'A prototype for interactive ontology-based data extraction — turning document content into ontology structures and knowledge graphs.',
  },
  {
    icon: BrainCircuit,
    title: 'Human-in-the-Loop',
    body: 'LLM assistance with expert oversight. The system extracts concepts, relations, and schema candidates, while experts inspect and refine each step.',
  },
  {
    icon: ShieldCheck,
    title: 'Agentic Quality Checks',
    body: 'An agentic workflow checks schema completeness, graph completeness against source data, and retrieval completeness — ensuring trustworthy outputs.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#05050f] text-slate-100">
      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-120px] left-[-80px] w-[520px] h-[520px] rounded-full bg-violet-700/10 blur-[130px]" />
        <div className="absolute bottom-[-80px] right-[-60px] w-[420px] h-[420px] rounded-full bg-cyan-600/8 blur-[120px]" />
      </div>

      <div className="grid-bg fixed inset-0 pointer-events-none opacity-40" />

      <div className="relative container mx-auto px-6 pt-32 pb-24 max-w-5xl">

        {/* ── Hero ── */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Research Initiative
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            About the{' '}
            <span className="gradient-text">Team</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A joint research effort between TU Clausthal and the German Aerospace Center,
            building transparent knowledge extraction tools for domain experts.
          </p>
        </div>

        {/* ── Institutional Logos ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
          {/* TU Clausthal */}
          <div className="flex flex-col items-center gap-3 px-10 py-8 rounded-2xl border border-slate-700/60 bg-slate-800/30 backdrop-blur-sm w-full sm:w-auto min-w-[220px]">
            {/* Replace the div below with <Image> once you add /public/tu-clausthal-logo.png */}
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 border border-blue-600/40 flex items-center justify-center">
              <span className="text-white font-black text-sm tracking-wider tuc"><Image
  src="/images/tuc-logo.png"
  alt="TU Clausthal"
  width={80}
  height={80}
/></span>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-sm">TU Clausthal</p>
              <p className="text-slate-500 text-xs mt-0.5">Clausthal University of Technology</p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex sm:flex-col items-center gap-2 text-slate-600">
            <div className="w-12 sm:w-px h-px sm:h-8 bg-slate-700" />
            <span className="text-xs font-medium">×</span>
            <div className="w-12 sm:w-px h-px sm:h-8 bg-slate-700" />
          </div>

          {/* DLR */}
          <div className="flex flex-col items-center gap-3 px-10 py-8 rounded-2xl border border-slate-700/60 bg-slate-800/30 backdrop-blur-sm w-full sm:w-auto min-w-[220px]">
            {/* Replace the div below with <Image> once you add /public/dlr-logo.png */}
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 border border-gray-500/40 flex items-center justify-center">
              <span className="text-white font-black text-sm tracking-wider tuc"><Image
  src="/images/dlr-logo.png"
  alt="DLR"
  width={80}
  height={80}
/></span>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-sm">DLR</p>
              <p className="text-slate-500 text-xs mt-0.5">German Aerospace Center</p>
            </div>
          </div>
        </div>

        {/* ── About text ── */}
        <div className="rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm p-8 md:p-12 mb-16">
          <p className="text-slate-300 leading-8 text-base md:text-[1.05rem] mb-6">
            We are a research team from the{' '}
            <span className="text-white font-semibold">Big Data and Technical Information Systems</span>{' '}
            group at Clausthal University of Technology (TU Clausthal), working in collaboration with
            researchers from the{' '}
            <span className="text-white font-semibold">German Aerospace Center (DLR)</span>. The BDIS
            group focuses on concepts, methods, technologies, and tools for data-intensive, robust, and
            intelligent systems. Within this collaboration,{' '}
            <span className="text-violet-300 font-medium">Prof. Dr. Sven Hartmann</span> and{' '}
            <span className="text-violet-300 font-medium">Apl.-Prof. Dr.-Ing. Umut Durak</span> form
            the academic core of the initiative. Prof. Durak also leads the Avionics Systems Research
            Group at DLR&apos;s Institute of Flight Systems and serves as adjunct professor of
            Aeronautical Informatics at TU Clausthal.
          </p>
          <p className="text-slate-300 leading-8 text-base md:text-[1.05rem]">
            This MVP is a research-driven prototype for{' '}
            <span className="text-white font-semibold">interactive ontology-based data extraction</span>.
            Its goal is to help experts transform document content into ontology structures and knowledge
            graphs through a human-in-the-loop workflow supported by LLMs. The system assists with
            extracting concepts, relations, and schema candidates, while an agentic workflow checks
            critical quality dimensions such as schema completeness, graph completeness with respect to
            the source data, and retrieval completeness. The aim is not blind automation, but{' '}
            <span className="text-cyan-300 font-medium">
              transparent, evidence-linked knowledge construction
            </span>{' '}
            that experts can inspect, refine, and trust.
          </p>
        </div>

        {/* ── Highlight cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {highlights.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-xl border border-slate-700/50 bg-slate-900/30 hover:bg-slate-800/40 hover:border-violet-500/30 p-6 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                  <Icon size={18} className="text-violet-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
