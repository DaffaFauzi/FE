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
          <Link to="/submit" className="opacity-90 hover:opacity-100">Submit Paper</Link>
          <Link to="/about" className="opacity-90 hover:opacity-100">About</Link>
          <Link to="#" className="opacity-90 hover:opacity-100">Contact</Link>
        </nav>

        <div className="flex gap-3">
          <Link to="/signin" className="px-4 py-2 bg-white text-[#4C1D95] rounded-lg text-sm font-semibold">
            Sign In
          </Link>
          <Link to="/register" className="px-4 py-2 border border-white/40 rounded-lg text-sm font-semibold">
            Register
          </Link>
        </div>
      </div>
    </header>
  )
}

const MortarIcon = () => <span className="text-xl">🎓</span>
