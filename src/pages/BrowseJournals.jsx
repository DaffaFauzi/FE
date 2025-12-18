import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  FileText,
  Brain,
  Atom,
  Dna,
  Cpu,
  FlaskConical,
  Search,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

/* =========================
   ICON MAPPER
========================= */
const fieldIcons = {
  Medicine: FileText,
  'Computer Science': Brain,
  Physics: Atom,
  Biology: Dna,
  Engineering: Cpu,
  Chemistry: FlaskConical,
}

/* =========================
   JOURNAL CARD
========================= */
function JournalCard({
  field,
  title,
  type,
  bgFrom,
  bgTo,
  description,
  impact,
  issues,
  reviewTime,
}) {
  const Icon = fieldIcons[field] || FileText

  const typeBadge = {
    'Open Access': 'text-green-600',
    Subscription: 'text-blue-600',
    Hybrid: 'text-orange-500',
  }[type]

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* HEADER */}
      <div
        className={`h-36 bg-gradient-to-br ${bgFrom} ${bgTo}
        flex items-center justify-center`}
      >
        <div
          className="w-16 h-16 rounded-full bg-white/20
          flex items-center justify-center cursor-pointer
          transition-all duration-300
          hover:scale-110 hover:bg-white/30
          hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
        >
          <Icon size={30} className="text-white" />
        </div>
      </div>

      {/* BODY */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-100 text-purple-700">
            {field}
          </span>
          <span className={`text-xs font-semibold ${typeBadge}`}>
            {type}
          </span>
        </div>

        <h3 className="font-semibold text-sm mb-1">{title}</h3>

        <p className="text-xs text-gray-500 mb-4">{description}</p>

        <div className="grid grid-cols-3 text-center text-xs mb-4">
          <div>
            <div className="font-semibold">{impact}</div>
            <div className="text-gray-400">Impact Factor</div>
          </div>
          <div>
            <div className="font-semibold">{issues}</div>
            <div className="text-gray-400">Issues/Year</div>
          </div>
          <div>
            <div className="font-semibold">{reviewTime}</div>
            <div className="text-gray-400">Review Time</div>
          </div>
        </div>

        <button
          className="w-full h-9 rounded-lg bg-[#4C1D95] text-white text-xs font-semibold
          transition-all duration-300
          hover:bg-[#5B21B6]
          hover:-translate-y-0.5
          hover:shadow-lg
          active:translate-y-0"
        >
          View Journal
        </button>
      </div>
    </div>
  )
}

/* =========================
   FILTER BAR
========================= */
function FiltersBar() {
  return (
    <div className="border-y border-[#E5E7EB] bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="text-[#6B7280]">Field:</span>
          <select className="h-9 px-3 rounded-md border border-[#E5E7EB] text-xs bg-white">
            <option>All Fields</option>
          </select>

          <span className="text-[#6B7280]">Impact Factor:</span>
          <select className="h-9 px-3 rounded-md border border-[#E5E7EB] text-xs bg-white">
            <option>All</option>
          </select>

          <span className="text-[#6B7280]">Access:</span>
          <select className="h-9 px-3 rounded-md border border-[#E5E7EB] text-xs bg-white">
            <option>All</option>
          </select>

          <button className="h-9 px-4 rounded-md bg-[#4C1D95] text-white text-xs font-semibold hover:bg-[#5B21B6]">
            Apply Filters
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-[#6B7280]">Sort by:</span>
          <select className="h-9 px-3 rounded-md border border-[#E5E7EB] text-xs bg-white">
            <option>Relevance</option>
          </select>
        </div>
      </div>
    </div>
  )
}

/* =========================
   PAGINATION
========================= */
function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button className="w-8 h-8 flex items-center justify-center text-[#6B7280] hover:text-[#4C1D95]">
        <ChevronLeft size={16} />
      </button>
      <button className="w-8 h-8 rounded-full bg-[#4C1D95] text-white text-sm font-semibold">
        1
      </button>
      <button className="w-8 h-8 rounded-full text-sm text-[#4B5563] hover:text-[#4C1D95]">2</button>
      <button className="w-8 h-8 rounded-full text-sm text-[#4B5563] hover:text-[#4C1D95]">3</button>
      <span className="px-1 text-sm text-[#6B7280]">...</span>
      <button className="w-8 h-8 rounded-full text-sm text-[#4B5563] hover:text-[#4C1D95]">25</button>
      <button className="w-8 h-8 flex items-center justify-center border border-[#E5E7EB] hover:border-[#4C1D95]">
        <ChevronRight size={16} />
      </button>
    </div>
  )
}

/* =========================
   STATS STRIP
========================= */
function StatsStrip() {
  return (
    <section className="bg-white py-10 border-t border-[#E5E7EB]">
      <div className="max-w-[900px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          ['248', 'Active Journals'],
          ['50K+', 'Published Articles'],
          ['15', 'Research Fields'],
          ['95%', 'Author Satisfaction'],
        ].map(([v, l]) => (
          <div key={l}>
            <div className="text-2xl font-bold">{v}</div>
            <div className="text-xs text-[#6B7280] mt-1">{l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* =========================
   DATA JOURNALS (LENGKAP)
========================= */
const journals = [
  {
    field: 'Medicine',
    title: 'Journal of Medical Research',
    type: 'Open Access',
    bgFrom: 'from-blue-500',
    bgTo: 'to-blue-700',
    description:
      'Leading publication in clinical and translational medicine with focus on innovative treatments.',
    impact: '4.2',
    issues: '12',
    reviewTime: '45d',
  },
  {
    field: 'Computer Science',
    title: 'AI & Machine Learning Today',
    type: 'Subscription',
    bgFrom: 'from-green-500',
    bgTo: 'to-green-700',
    description:
      'Premier venue for artificial intelligence and machine learning research breakthroughs.',
    impact: '6.8',
    issues: '6',
    reviewTime: '30d',
  },
  {
    field: 'Physics',
    title: 'Quantum Physics Review',
    type: 'Hybrid',
    bgFrom: 'from-purple-500',
    bgTo: 'to-purple-700',
    description:
      'Cutting-edge research in quantum mechanics, quantum computing, and related fields.',
    impact: '5.1',
    issues: '24',
    reviewTime: '60d',
  },
  {
    field: 'Biology',
    title: 'Molecular Biology Advances',
    type: 'Open Access',
    bgFrom: 'from-red-500',
    bgTo: 'to-red-700',
    description:
      'Comprehensive coverage of molecular biology, genetics, and cellular mechanisms.',
    impact: '3.9',
    issues: '12',
    reviewTime: '50d',
  },
  {
    field: 'Engineering',
    title: 'Advanced Engineering Systems',
    type: 'Subscription',
    bgFrom: 'from-orange-400',
    bgTo: 'to-orange-600',
    description:
      'Innovation in mechanical, electrical, and systems engineering applications.',
    impact: '4.7',
    issues: '8',
    reviewTime: '40d',
  },
  {
    field: 'Chemistry',
    title: 'Chemical Sciences International',
    type: 'Hybrid',
    bgFrom: 'from-indigo-500',
    bgTo: 'to-indigo-700',
    description:
      'Leading research in organic, inorganic, and analytical chemistry innovations.',
    impact: '5.3',
    issues: '12',
    reviewTime: '35d',
  },
]

/* =========================
   MAIN PAGE
========================= */
export default function BrowseJournals() {
  return (
    <div className="min-h-screen bg-[#F5F7FB] flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="bg-[#5B21B6] text-white pt-12 pb-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <h1 className="text-4xl font-bold text-center mb-3">
              Discover <span className="text-[#A5B4FC]">Academic Journals</span>
            </h1>
            <p className="text-center text-white/80 max-w-2xl mx-auto mb-8">
              Explore our comprehensive collection of peer-reviewed journals across all scientific disciplines.
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-full shadow-[0_20px_50px_rgba(15,23,42,0.35)] flex items-center px-5 py-1">
                <input
                  placeholder="Search journals by name, field, or keyword..."
                  className="flex-1 bg-transparent h-11 text-sm focus:outline-none text-black"
                />
                <button className="w-11 h-11 rounded-full bg-[#4C1D95] flex items-center justify-center hover:bg-[#5B21B6]">
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <FiltersBar />

        {/* JOURNAL GRID */}
        <section className="py-10">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-lg font-semibold mb-1">Featured Journals</h2>
            <p className="text-xs text-[#6B7280] mb-6">Showing 248 journals</p>

            <div className="grid gap-6 md:grid-cols-3">
              {journals.map((j, i) => (
                <JournalCard key={i} {...j} />
              ))}
            </div>

            <Pagination />
          </div>
        </section>

        <StatsStrip />
      </main>

      <Footer />
    </div>
  )
}
