import Header from '../../components/Header';
import Footer from '../../components/Footer';

function StatCard({ icon, color, number, label }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-[0_10px_25px_rgba(15,23,42,0.12)] flex items-center gap-3 flex-1 min-w-[160px]">
      <div className={`w-[42px] h-[42px] rounded-xl flex items-center justify-center text-white font-bold text-xl ${color === 'blue' ? 'bg-[#2563eb]' : 'bg-[#16a34a]'}`}>
        {icon}
      </div>
      <div>
        <div className="font-bold text-lg text-[#1f2933]">{number}</div>
        <div className="text-xs text-[#6b7280] mt-0.5">{label}</div>
      </div>
    </div>
  )
}

function FeatureItem({ icon, title, desc }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-3 items-start">
      <div className="w-8 h-8 rounded-full bg-[rgba(91,33,255,0.08)] flex items-center justify-center text-[var(--color-primary)] text-lg">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-sm mb-0.5 text-[#1f2933]">{title}</div>
        <div className="text-[13px] text-[#6b7280] leading-[1.4]">{desc}</div>
      </div>
    </div>
  )
}

function SocialButton({ icon, label, className }) {
  return (
    <button type="button" className={`rounded-lg border border-[#e5e7eb] py-[9px] text-[13px] font-medium flex items-center justify-center gap-2 bg-white cursor-pointer hover:bg-[#f9fafb] hover:shadow-sm transition-all duration-200 ${className}`}>
      <span className="w-4 h-4 rounded bg-[#f3f4f6] inline-flex items-center justify-center text-[11px] font-bold">
        {icon}
      </span>
      <span>{label}</span>
    </button>
  )
}

function JourneyCard({ icon, title, desc, bg, iconBg }) {
  return (
    <div className={`p-6 rounded-xl border border-transparent hover:border-black/5 hover:shadow-md transition-all ${bg}`}>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-4 ${iconBg}`}>
        {icon}
      </div>
      <h3 className="text-center font-bold text-[var(--color-primary-900)] mb-2">{title}</h3>
      <p className="text-center text-sm text-[#6b7280] leading-relaxed">
        {desc}
      </p>
    </div>
  )
}

export default function CreateAccount() {
  return (
    <div className="min-h-screen bg-[#f5f5fb] font-sans text-[#1f2933] flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-[1140px] mx-auto px-4 py-8 w-full">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 items-stretch mb-16">
          {/* LEFT SIDE */}
          <section className="py-8 md:pr-6">
            <h1 className="text-[32px] font-extrabold leading-[1.2] mb-3 text-[#1f2933]">
              Join the <span className="text-[var(--color-primary)]">AcademiaPress</span> Community
            </h1>
            <p className="text-sm text-[#6b7280] max-w-[420px] mb-8">
              Create your account to publish groundbreaking research, connect with peers worldwide, and advance scientific knowledge.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <StatCard icon="👥" color="blue" number="50,000+" label="Active Researchers" />
              <StatCard icon="📄" color="green" number="25,000+" label="Published Papers" />
            </div>

            <div className="grid gap-4">
              <FeatureItem 
                icon="⏱" 
                title="Fast-Track Publishing" 
                desc="Get your research published in record time with our streamlined review process." 
              />
              <FeatureItem 
                icon="✅" 
                title="Quality Assurance" 
                desc="Rigorous peer-review process ensures the highest publication standards." 
              />
              <FeatureItem 
                icon="📊" 
                title="Impact Analytics" 
                desc="Track your research impact with detailed analytics and citation metrics." 
              />
            </div>
          </section>

          {/* RIGHT SIDE (FORM) */}
          <section className="bg-white rounded-[24px] p-7 shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
            <header className="text-center mb-5">
              <h2 className="text-[22px] font-extrabold mb-1 text-[#1f2933]">Create Your Account</h2>
              <p className="text-[13px] text-[#6b7280]">Join thousands of researchers worldwide</p>
            </header>

            <form className="grid gap-[14px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#4b5563] mb-1.5" htmlFor="first-name">First Name</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <input id="first-name" type="text" placeholder="John" required className="w-full rounded-lg border border-[#e5e7eb] pl-9 pr-3 py-[9px] text-[13px] outline-none bg-[#f9fafb] focus:border-[var(--color-primary)] focus:bg-white focus:ring-[1px] focus:ring-[rgba(91,33,255,0.14)] transition-all placeholder-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#4b5563] mb-1.5" htmlFor="last-name">Last Name</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <input id="last-name" type="text" placeholder="Doe" required className="w-full rounded-lg border border-[#e5e7eb] pl-9 pr-3 py-[9px] text-[13px] outline-none bg-[#f9fafb] focus:border-[var(--color-primary)] focus:bg-white focus:ring-[1px] focus:ring-[rgba(91,33,255,0.14)] transition-all placeholder-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4b5563] mb-1.5" htmlFor="email">Email Address</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <input id="email" type="email" placeholder="researcher@university.edu" required className="w-full rounded-lg border border-[#e5e7eb] pl-9 pr-3 py-[9px] text-[13px] outline-none bg-[#f9fafb] focus:border-[var(--color-primary)] focus:bg-white focus:ring-[1px] focus:ring-[rgba(91,33,255,0.14)] transition-all placeholder-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4b5563] mb-1.5" htmlFor="institution">Institution/Affiliation</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-9a4 4 0 0 1 4-4 4 4 0 0 1 4 4v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <input id="institution" type="text" placeholder="Harvard University" className="w-full rounded-lg border border-[#e5e7eb] pl-9 pr-3 py-[9px] text-[13px] outline-none bg-[#f9fafb] focus:border-[var(--color-primary)] focus:bg-white focus:ring-[1px] focus:ring-[rgba(91,33,255,0.14)] transition-all placeholder-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4b5563] mb-1.5" htmlFor="field">Research Field</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <select id="field" className="w-full rounded-lg border border-[#e5e7eb] pl-9 pr-3 py-[9px] text-[13px] outline-none bg-[#f9fafb] focus:border-[var(--color-primary)] focus:bg-white focus:ring-[1px] focus:ring-[rgba(91,33,255,0.14)] transition-all appearance-none text-[#1f2933]">
                    <option value="">Select your field</option>
                    <option>Computer Science</option>
                    <option>Biology</option>
                    <option>Physics</option>
                    <option>Mathematics</option>
                    <option>Social Sciences</option>
                    <option>Humanities</option>
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4b5563] mb-1.5" htmlFor="password">Password</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <input id="password" type="password" placeholder="Create a strong password" required className="w-full rounded-lg border border-[#e5e7eb] pl-9 pr-3 py-[9px] text-[13px] outline-none bg-[#f9fafb] focus:border-[var(--color-primary)] focus:bg-white focus:ring-[1px] focus:ring-[rgba(91,33,255,0.14)] transition-all placeholder-gray-400" />
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                  </button>
                </div>
                <p className="text-[11px] text-[#9ca3af] mt-1">
                  Password must be at least 8 characters with uppercase, lowercase, and numbers.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4b5563] mb-1.5" htmlFor="confirm-password">Confirm Password</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <input id="confirm-password" type="password" placeholder="Confirm your password" required className="w-full rounded-lg border border-[#e5e7eb] pl-9 pr-3 py-[9px] text-[13px] outline-none bg-[#f9fafb] focus:border-[var(--color-primary)] focus:bg-white focus:ring-[1px] focus:ring-[rgba(91,33,255,0.14)] transition-all placeholder-gray-400" />
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs text-[#6b7280]">
                <input id="terms" type="checkbox" required className="mt-0.5 w-[14px] h-[14px] rounded border-gray-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]" />
                <label htmlFor="terms">
                  I agree to the <a href="#" className="text-[var(--color-primary)] font-medium hover:underline">Terms of Service</a> and <a href="#" className="text-[var(--color-primary)] font-medium hover:underline">Privacy Policy</a>
                </label>
              </div>

              <div className="flex items-start gap-2 text-xs text-[#6b7280]">
                <input id="updates" type="checkbox" className="mt-0.5 w-[14px] h-[14px] rounded border-gray-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]" />
                <label htmlFor="updates">
                  I would like to receive updates about new journals and features
                </label>
              </div>

              <button type="submit" className="mt-1.5 w-full border-none rounded-lg bg-[var(--color-primary)] text-white font-semibold py-[11px] text-sm cursor-pointer hover:bg-[var(--color-primary-800)] hover:-translate-y-px hover:shadow-[0_8px_22px_rgba(91,33,255,0.35)] active:translate-y-0 active:shadow-none transition-all duration-200">
                Create Account
              </button>

              <div className="flex items-center gap-2 text-[#9ca3af] text-[11px] my-1">
                <div className="flex-1 h-px bg-[#e5e7eb]"></div>
                <span>Or register with</span>
                <div className="flex-1 h-px bg-[#e5e7eb]"></div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <SocialButton icon="G" label="Google" className="google text-[#db4437]" />
                <SocialButton icon="O" label="ORCID" className="orcid text-[#16a34a]" />
              </div>
            </form>

            <p className="mt-3.5 text-center text-xs text-[#6b7280]">
              Already have an account? <a href="#" className="text-[var(--color-primary)] font-semibold hover:underline">Sign in here</a>
            </p>
          </section>
        </div>

        {/* JOURNEY SECTION */}
        <section className="bg-white rounded-2xl p-10 text-center shadow-sm">
          <h2 className="text-[28px] font-bold text-[var(--color-primary-900)] mb-2">Start Your Research Journey Today</h2>
          <p className="text-[#6b7280] mb-10">Join our community and unlock powerful tools for academic success</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <JourneyCard 
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16V4M12 4L8 8M12 4L16 8M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              title="Easy Submission"
              desc="Upload your manuscripts with our intuitive submission system and track progress in real-time."
              bg="bg-[#EFF6FF]"
              iconBg="bg-[#2563EB]"
            />
            <JourneyCard 
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0101 6.11683 19.0101 7C19.0101 7.88317 18.7122 8.74608 18.1676 9.44768C17.623 10.1493 16.8604 10.6497 16 10.87M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              title="Expert Review"
              desc="Get feedback from leading experts in your field through our rigorous peer-review process."
              bg="bg-[#F3F1FE]"
              iconBg="bg-[#8B5CF6]"
            />
            <JourneyCard 
              icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10M18 20V4M6 20V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              title="Impact Tracking"
              desc="Monitor citations, downloads, and research impact with comprehensive analytics tools."
              bg="bg-[#ECFDF5]"
              iconBg="bg-[#10B981]"
            />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
