import BrandMark from './BrandMark';

export default function Header() {
  return (
    <header className="bg-[var(--color-primary-900)] text-white">
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-white no-underline">
          <BrandMark />
          <span className="text-[18px]">AcademiaPress</span>
        </a>
        <nav className="hidden md:flex gap-6">
          <a className="text-gray-200 hover:text-white" href="#">Browse Journals</a>
          <a className="text-gray-200 hover:text-white" href="#">Submit Paper</a>
          <a className="text-gray-200 hover:text-white" href="#">About</a>
          <a className="text-gray-200 hover:text-white" href="#">Contact</a>
        </nav>
        <div className="flex gap-3">
          <a className="inline-flex items-center font-semibold rounded-lg px-3 py-2 bg-white text-gray-900" href="#">Sign In</a>
          <a className="inline-flex items-center font-semibold rounded-lg px-3 py-2 border border-white/40" href="#">Register</a>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-white/15 via-white/5 to-white/15" />
    </header>
  )
}
