import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import {
  Microscope,
  Laptop,
  Atom,
  Dna,
  Cog,
  FlaskConical,
  Search,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

/* =========================
   ICON MAPPER
========================= */
const fieldIcons = {
  Medicine: Microscope,
  'Computer Science': Laptop,
  Physics: Atom,
  Biology: Dna,
  Engineering: Cog,
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
  const Icon = fieldIcons[field] || Atom

  // Badge styles based on type
  const typeBadgeClass = {
    'Open Access': 'text-green-600',
    Subscription: 'text-blue-600',
    Hybrid: 'text-orange-500',
  }[type]

  // Field badge color - subtle background matching field? 
  // For now, using a generic purple/gray style as seen in image for "Medicine"
  const fieldBadgeClass = "bg-purple-100 text-purple-700"

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full">
      {/* HEADER: Solid Gradient with Centered Icon */}
      <div
        className={`h-36 bg-gradient-to-br ${bgFrom} ${bgTo}
        flex items-center justify-center relative`}
      >
         {/* Icon Circle */}
        <div
          className="w-16 h-16 rounded-full bg-white/20
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110 hover:bg-white/30
          hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
        >
          <Icon size={32} className="text-white" />
        </div>
      </div>

      {/* BODY: White background */}
      <div className="p-6 flex flex-col flex-1">
        {/* Badges Row */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-[11px] font-bold px-2.5 py-1 rounded ${fieldBadgeClass}`}>
            {field}
          </span>
          <span className={`text-[11px] font-bold ${typeBadgeClass}`}>
            {type}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg leading-tight text-gray-900 mb-2">{title}</h3>

        {/* Description */}
        <p className="text-xs text-gray-500 leading-relaxed mb-6 flex-1">{description}</p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 text-center border-t border-gray-100 pt-4 pb-5">
          <div>
            <div className="text-lg font-bold text-gray-900">{impact}</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wide">Impact Factor</div>
          </div>
          <div className="border-x border-gray-100">
            <div className="text-lg font-bold text-gray-900">{issues}</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wide">Issues/Year</div>
          </div>
          <div>
            <div className="text-lg font-bold text-gray-900">{reviewTime}</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-wide">Review Time</div>
          </div>
        </div>

        {/* Button */}
        <button
          className="w-full h-10 rounded-lg bg-[#4C1D95] text-white text-xs font-bold tracking-wide
          transition-all duration-300
          hover:bg-[#5B21B6]
          hover:shadow-lg
          active:scale-[0.98]"
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
    <div className="border-y border-[#E5E7EB] bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="text-[#6B7280] font-medium">Field:</span>
          <select className="h-9 px-3 rounded-md border border-[#E5E7EB] text-xs font-medium text-gray-700 bg-white focus:border-[#4C1D95] focus:outline-none">
            <option>All Fields</option>
            <option>Medicine & Health</option>
            <option>Engineering</option>
            <option>Computer Science</option>
            <option>Biology</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Mathematics</option>
            <option>Social Sciences</option>
          </select>

          <span className="text-[#6B7280] font-medium ml-2">Impact Factor:</span>
          <select className="h-9 px-3 rounded-md border border-[#E5E7EB] text-xs font-medium text-gray-700 bg-white focus:border-[#4C1D95] focus:outline-none">
            <option>All</option>
            <option>High (&gt;5.0)</option>
            <option>Medium (2.0-5.0)</option>
            <option>Emerging (&lt;2.0)</option>
          </select>

          <span className="text-[#6B7280] font-medium ml-2">Access:</span>
          <select className="h-9 px-3 rounded-md border border-[#E5E7EB] text-xs font-medium text-gray-700 bg-white focus:border-[#4C1D95] focus:outline-none">
            <option>All</option>
            <option>Open Access</option>
            <option>Subscription</option>
            <option>Hybrid</option>
          </select>

          <button className="h-9 px-5 ml-2 rounded-md bg-[#4C1D95] text-white text-xs font-bold shadow-md hover:bg-[#5B21B6] transition-colors">
            Apply Filters
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-[#6B7280] font-medium">Sort by:</span>
          <select className="h-9 px-3 rounded-md border border-[#E5E7EB] text-xs font-medium text-gray-700 bg-white focus:border-[#4C1D95] focus:outline-none">
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
    <div className="flex items-center justify-center gap-2 mt-12 mb-8">
      <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:text-[#4C1D95] hover:border-[#4C1D95] transition-colors bg-white">
        <ChevronLeft size={16} />
      </button>
      <button className="w-9 h-9 rounded-lg bg-[#4C1D95] text-white text-sm font-bold shadow-md">
        1
      </button>
      <button className="w-9 h-9 rounded-lg border border-transparent text-sm font-medium text-gray-500 hover:text-[#4C1D95] hover:bg-white hover:border-gray-200 transition-all">2</button>
      <button className="w-9 h-9 rounded-lg border border-transparent text-sm font-medium text-gray-500 hover:text-[#4C1D95] hover:bg-white hover:border-gray-200 transition-all">3</button>
      <button className="w-9 h-9 rounded-lg border border-transparent text-sm font-medium text-gray-500 hover:text-[#4C1D95] hover:bg-white hover:border-gray-200 transition-all">4</button>
      <span className="px-1 text-sm text-gray-400">...</span>
      <button className="w-9 h-9 rounded-lg border border-transparent text-sm font-medium text-gray-500 hover:text-[#4C1D95] hover:bg-white hover:border-gray-200 transition-all">25</button>
      <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:text-[#4C1D95] hover:border-[#4C1D95] transition-colors bg-white">
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
    <section className="bg-white py-12 border-t border-[#E5E7EB]">
      <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
        {[
          ['248', 'Active Journals'],
          ['50K+', 'Published Articles'],
          ['15', 'Research Fields'],
          ['95%', 'Author Satisfaction'],
        ].map(([v, l], i) => (
          <div key={l} className={i === 0 ? "" : "pl-8"}>
            <div className="text-3xl font-bold text-[#4C1D95] mb-2">{v}</div>
            <div className="text-sm text-gray-500 font-medium">{l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* =========================
   MOCK DATA
========================= */
const journals = [
  {
    id: 1,
    field: 'Medicine',
    title: 'Journal of Clinical Medicine & Research',
    type: 'Open Access',
    bgFrom: 'from-purple-500',
    bgTo: 'to-indigo-600',
    description: 'Leading research in clinical practice, medical innovations, and healthcare outcomes.',
    impact: '8.4',
    issues: '12',
    reviewTime: '3 Weeks',
  },
  {
    id: 2,
    field: 'Computer Science',
    title: 'International Journal of AI & Machine Learning',
    type: 'Subscription',
    bgFrom: 'from-blue-500',
    bgTo: 'to-cyan-600',
    description: 'Cutting-edge developments in artificial intelligence, neural networks, and data science.',
    impact: '9.2',
    issues: '6',
    reviewTime: '4 Weeks',
  },
  {
    id: 3,
    field: 'Physics',
    title: 'Applied Physics & Quantum Mechanics',
    type: 'Hybrid',
    bgFrom: 'from-orange-500',
    bgTo: 'to-red-600',
    description: 'Explorations into quantum theory, thermodynamics, and material science applications.',
    impact: '7.8',
    issues: '8',
    reviewTime: '5 Weeks',
  },
  {
    id: 4,
    field: 'Biology',
    title: 'Biological Sciences Review',
    type: 'Open Access',
    bgFrom: 'from-green-500',
    bgTo: 'to-emerald-600',
    description: 'Comprehensive studies on genetics, ecology, and cellular biology.',
    impact: '6.5',
    issues: '4',
    reviewTime: '6 Weeks',
  },
  {
    id: 5,
    field: 'Engineering',
    title: 'Journal of Civil & Structural Engineering',
    type: 'Subscription',
    bgFrom: 'from-gray-600',
    bgTo: 'to-gray-800',
    description: 'Innovative solutions for infrastructure, urban planning, and sustainable construction.',
    impact: '5.9',
    issues: '12',
    reviewTime: '3 Weeks',
  },
  {
    id: 6,
    field: 'Chemistry',
    title: 'Molecular Chemistry Today',
    type: 'Hybrid',
    bgFrom: 'from-teal-500',
    bgTo: 'to-teal-700',
    description: 'Research on chemical synthesis, organic compounds, and industrial applications.',
    impact: '7.1',
    issues: '6',
    reviewTime: '4 Weeks',
  },
]

/* =========================
   MAIN PAGE COMPONENT
========================= */
export default function BrowseJournals() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900">
      <Header />
      
      {/* HERO SECTION */}
      <section className="bg-[#4C1D95] text-white py-16 px-6 relative overflow-hidden">
        {/* Background Patterns (Optional - simplified for now) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-white rounded-full blur-3xl"></div>
           <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-[800px] mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Discover Academic Journals
          </h1>
          <p className="text-purple-100 text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Browse our extensive collection of peer-reviewed journals across multiple disciplines. 
            Find the perfect home for your research or explore the latest scientific breakthroughs.
          </p>
          
          {/* SEARCH BAR */}
          <div className="relative max-w-lg mx-auto">
            <input 
              type="text" 
              placeholder="Search journals by title, keyword, or ISSN..." 
              className="w-full h-12 pl-12 pr-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all backdrop-blur-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-200" size={20} />
            <button className="absolute right-1 top-1 bottom-1 px-5 bg-white text-[#4C1D95] rounded-full text-xs font-bold hover:bg-gray-100 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      <FiltersBar />

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 py-12">
          {/* RESULTS COUNT */}
          <div className="mb-6 text-gray-500 text-sm font-medium">
            Showing <span className="text-gray-900 font-bold">1-6</span> of <span className="text-gray-900 font-bold">248</span> journals
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journals.map((journal) => (
              <JournalCard key={journal.id} {...journal} />
            ))}
          </div>

          <Pagination />
        </div>
      </main>

      <StatsStrip />
      <Footer />
    </div>
  )
}
