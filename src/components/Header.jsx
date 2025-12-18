import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-[#5B21B6] text-white">
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-[18px]">
          <MortarIcon />
          AcademiaPress
        </Link>

        <nav className="hidden md:flex gap-8 text-[14px] font-medium">
          <Link to="/" className="opacity-90 hover:opacity-100">Home</Link>
          <Link to="/browse" className="opacity-90 hover:opacity-100">Browse Journals</Link>
          <a className="opacity-90 hover:opacity-100 cursor-pointer">Submit Paper</a>
          <a className="opacity-90 hover:opacity-100 cursor-pointer">About</a>
          <a className="opacity-90 hover:opacity-100 cursor-pointer">Contact</a>
        </nav>

        <div className="flex gap-3">
          <Link to="/signin" className="px-4 py-2 bg-white text-[#4C1D95] rounded-lg text-sm font-semibold">
            Sign In
          </Link>
          <button className="px-4 py-2 border border-white/40 rounded-lg text-sm font-semibold">
            Register
          </button>
        </div>
      </div>
    </header>
  )
}

const MortarIcon = () => <span className="text-xl">🎓</span>
