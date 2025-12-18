function BrandMark() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="14" fill="#7C3AED" />
      <path d="M7 18.5L12.2 9h3.6L21 18.5h-3.2l-1-2.1h-6.7l-1 2.1H7z" fill="white" />
    </svg>
  )
}

function Header() {
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

function Feature({ icon, title, sub }) {
  return (
    <div className="flex gap-4">
      <span className="w-11 h-11 rounded-xl bg-[#F3F1FE] flex items-center justify-center">{icon}</span>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-[var(--color-muted)]">{sub}</div>
      </div>
    </div>
  )
}

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="14" rx="2" fill="#7C3AED" />
      <rect x="7" y="8" width="10" height="2" rx="1" fill="white" />
      <rect x="7" y="11" width="6" height="2" rx="1" fill="white" />
      <rect x="9" y="19" width="6" height="2" rx="1" fill="#7C3AED" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="7" stroke="#7C3AED" strokeWidth="2" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="9" r="3" fill="#7C3AED" />
      <circle cx="17" cy="9" r="3" fill="#7C3AED" />
      <path d="M3 19c1.5-2.5 4-4 7-4s5.5 1.5 7 4" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function SignCard() {
  return (
    <div className="bg-white border border-[var(--color-border)] rounded-[18px] shadow-[0_20px_40px_rgba(15,23,42,.12)] p-6 w-[430px]">
      <div className="text-center">
        <h3 className="text-[22px] m-0 text-[var(--color-primary-800)] font-bold">Sign In</h3>
        <div className="text-[var(--color-muted)] mt-1">Enter your credentials to access your account</div>
      </div>
      <form className="flex flex-col gap-3 mt-5">
        <label className="text-[14px] font-semibold text-[#374151]">Email Address</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16v12H4V6z" stroke="#9CA3AF" strokeWidth="2" />
              <path d="M4 7l8 6 8-6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <input type="email" placeholder="researcher@university.edu" className="w-full pl-10 pr-3 py-3 border rounded-lg text-[14px] outline-none border-[var(--color-border)] focus:border-[#C4B5FD] focus:ring-4 focus:ring-[rgba(124,58,237,.12)]" />
        </div>
        <label className="text-[14px] font-semibold text-[#374151]">Password</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="10" width="14" height="9" rx="2" stroke="#9CA3AF" strokeWidth="2" />
              <circle cx="12" cy="7" r="3" stroke="#9CA3AF" strokeWidth="2" />
            </svg>
          </span>
          <input type="password" placeholder="Enter your password" className="w-full pl-10 pr-3 py-3 border rounded-lg text-[14px] outline-none border-[var(--color-border)] focus:border-[#C4B5FD] focus:ring-4 focus:ring-[rgba(124,58,237,.12)]" />
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-[#374151]"><input type="checkbox" className="w-4 h-4" /><span>Remember me</span></label>
          <a href="#" className="text-[var(--color-muted)] no-underline hover:text-[var(--color-primary)] font-semibold">Forgot password?</a>
        </div>
        <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-700)] text-white w-full py-3 rounded-lg font-semibold">Sign in</button>
        <div className="h-1 rounded-md bg-[var(--color-primary)]/90 mt-1"></div>
        <div className="flex items-center gap-3 my-2">
          <div className="flex-1 border-t border-[var(--color-border)]"></div>
          <div className="text-[13px] text-[var(--color-muted)]">or continue with</div>
          <div className="flex-1 border-t border-[var(--color-border)]"></div>
        </div>
        <div className="flex gap-3">
          <button type="button" className="bg-white border border-[var(--color-border)] rounded-lg px-4 py-2 font-semibold flex items-center gap-2">
            <span>
              <svg width="18" height="18" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M130 115h106c2 10 2 20 0 30h-106v-30z" />
                <path fill="#FBBC05" d="M130 115H66v30h64c-4 20-24 35-47 35-28 0-51-23-51-51s23-51 51-51c12 0 24 4 33 12l21-21c-14-13-32-21-54-21-45 0-82 37-82 82s37 82 82 82c45 0 78-32 78-78 0-5-1-9-2-13z" />
                <path fill="#34A853" d="M83 180c23 0 43-15 47-35H66v-30h64c1 4 2 8 2 13 0 46-33 78-78 78-22 0-40-8-54-21l21-21c9 8 21 12 33 12z" />
                <path fill="#4285F4" d="M236 115H130v30h59c-7 34-36 56-76 56-22 0-40-8-54-21l-21 21c19 18 44 29 75 29 61 0 104-42 104-104 0-7-1-14-2-21z" />
              </svg>
            </span>
            <span>Google</span>
          </button>
          <button type="button" className="bg-white border border-[#A6CE39] rounded-lg px-4 py-2 font-semibold flex items-center gap-2">
            <span>
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#A6CE39" />
                <text x="12" y="15" fontSize="10" textAnchor="middle" fill="#fff">iD</text>
              </svg>
            </span>
            <span>ORCID</span>
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 text-[13px] text-[var(--color-muted)]">
          <span>Don't have an account?</span>
          <a className="text-[var(--color-primary)] font-semibold no-underline" href="#">Create one now</a>
        </div>
        <div className="flex items-center gap-2 text-[13px] text-[var(--color-muted)]">
          <span className="w-[6px] h-[6px] rounded-full bg-[#10B981] inline-block" />
          <span>Your data is protected with industry-standard encryption</span>
        </div>
      </form>
    </div>
  )
}

function WhyItem({ icon, title, sub }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 mx-auto mb-3 flex items-center justify-center">{icon}</div>
      <div className="font-semibold">{title}</div>
      <div className="text-[var(--color-muted)]">{sub}</div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-[var(--color-primary-900)] text-gray-200 mt-8">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 py-9 border-b border-white/15">
        <div>
          <div className="flex items-center gap-2 font-bold text-white">
            <BrandMark />
            <span>AcademiaPress</span>
          </div>
          <p className="mt-2">Empowering researchers worldwide with cutting-edge academic publishing solutions.</p>
          <div className="flex gap-2 mt-3">
            <a href="#" className="flex w-9 h-9 border border-white/25 rounded-lg items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7h-2.6V12h2.6V9.8c0-2.6 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z" fill="#fff"/></svg>
            </a>
            <a href="#" className="flex w-9 h-9 border border-white/25 rounded-lg items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 01-3.1 1.1A4.5 4.5 0 0016 2c-2.5 0-4.5 2-4.5 4.5 0 .4 0 .8.1 1.1C8 7.5 5 6.1 3 3.8c-.5.9-.7 2-.7 3.1 0 2.1 1.1 4 2.8 5A4.6 4.6 0 012 11v.1c0 2.2 1.6 4.1 3.7 4.5-.4.1-.9.2-1.3.2-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.4 3.3A9 9 0 012 20.5a12.7 12.7 0 006.9 2c8.3 0 12.8-7 12.8-13 0-.2 0-.4 0-.6A9 9 0 0023 3z" fill="#fff"/></svg>
            </a>
            <a href="#" className="flex w-9 h-9 border border-white/25 rounded-lg items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.5 2h-19C1.7 2 1 2.7 1 3.5v17C1 21.3 1.7 22 2.5 22h19c.8 0 1.5-.7 1.5-1.5v-17C23 2.7 22.3 2 21.5 2zM8.8 18.5H6.2V9.8h2.6v8.7zM7.5 8.5C6.7 8.5 6 7.8 6 7s.7-1.5 1.5-1.5S9 6.2 9 7s-.7 1.5-1.5 1.5zM19.5 18.5h-2.6v-4.7c0-1.1-.4-1.8-1.4-1.8-.8 0-1.2.5-1.4 1v5.5h-2.6V9.8h2.5v1.1c.4-.5 1.1-1.3 2.4-1.3 1.8 0 3.1 1.2 3.1 3.7v5.2z" fill="#fff"/></svg>
            </a>
          </div>
        </div>
        <div>
          <div className="text-white font-bold mb-2">Services</div>
          <a href="#" className="block text-gray-200 no-underline my-2">Journal Publishing</a>
          <a href="#" className="block text-gray-200 no-underline my-2">Peer Review</a>
          <a href="#" className="block text-gray-200 no-underline my-2">Editorial Support</a>
          <a href="#" className="block text-gray-200 no-underline my-2">Research Analytics</a>
        </div>
        <div>
          <div className="text-white font-bold mb-2">Resources</div>
          <a href="#" className="block text-gray-200 no-underline my-2">Author Guidelines</a>
          <a href="#" className="block text-gray-200 no-underline my-2">Reviewer Handbook</a>
          <a href="#" className="block text-gray-200 no-underline my-2">Publication Ethics</a>
          <a href="#" className="block text-gray-200 no-underline my-2">FAQ</a>
        </div>
        <div>
          <div className="text-white font-bold mb-2">Contact</div>
          <div className="flex items-center gap-2 text-white my-2">
            <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4z" fill="#7C3AED"/><path d="M4 6l8 6 8-6" fill="#fff"/></svg>
            <span>support@academiapress.com</span>
          </div>
          <div className="flex items-center gap-2 text-white my-2">
            <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 3h4l2 4-3 2c1 2.5 3.5 5 6 6l2-3 4 2v4c-8 2-16-6-19-15z" fill="#7C3AED"/></svg>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2 text-white my-2">
            <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l7 7-7 13-7-13 7-7z" fill="#7C3AED"/></svg>
            <span>123 Academic St, Research City</span>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between py-4 text-gray-200">
        <div>© 2024 AcademiaPress. All rights reserved.</div>
        <div className="flex gap-2"><a href="#" className="text-white no-underline">Privacy Policy</a><span>•</span><a href="#" className="text-white no-underline">Terms of Service</a></div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          <div>
            <h1 className="text-[42px] leading-tight font-bold mb-3">Welcome Back to <span className="text-[var(--color-primary)]">AcademiaPress</span></h1>
            <p className="text-[#4B5563] mb-7 text-[16px]">Sign in to access your research dashboard, manage submissions, and stay connected with the global academic community.</p>
            <div className="grid gap-4">
              <Feature icon={<MailIcon />} title="Manage Your Submissions" sub="Track the status of your papers, respond to reviewer comments, and upload revisions." />
              <Feature icon={<SearchIcon />} title="Discover Research" sub="Access thousands of peer-reviewed articles across all scientific disciplines." />
              <Feature icon={<UsersIcon />} title="Connect with Peers" sub="Network with researchers worldwide and collaborate on groundbreaking projects." />
            </div>
          </div>
          <div className="flex md:justify-end">
            <SignCard />
          </div>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-center text-[var(--color-primary-800)] mb-6 font-bold">Why Researchers Choose AcademiaPress</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            <WhyItem icon={<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l8 4-8 4-8-4 8-4z" fill="#7C3AED"/><path d="M4 12l8 4 8-4" stroke="#7C3AED" strokeWidth="2"/></svg>} title="Fast Review" sub="Average review time of 21 days" />
            <WhyItem icon={<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" stroke="#7C3AED" strokeWidth="2"/><path d="M12 3v6l4 2" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/></svg>} title="Global Reach" sub="Readers in 100+ countries" />
            <WhyItem icon={<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="6" width="16" height="12" rx="2" stroke="#7C3AED" strokeWidth="2"/><path d="M8 10h8" stroke="#7C3AED" strokeWidth="2"/></svg>} title="Open Access" sub="Maximize your research impact" />
            <WhyItem icon={<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6a6 6 0 100 12 6 6 0 000-12z" stroke="#7C3AED" strokeWidth="2"/><path d="M12 9v3l2 2" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/></svg>} title="Expert Support" sub="24/7 author assistance" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
