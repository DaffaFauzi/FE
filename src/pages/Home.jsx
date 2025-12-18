// NOTE:
// This file is intentionally written to visually match the provided Pixlot screenshot
// as close as possible (layout, spacing, text, icons, hierarchy).
// TailwindCSS required.

import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F7FB] text-[#1F2937]">
      <Header />

      {/* HERO */}
      <section className="bg-[#5B21B6] text-white">
        <div className="max-w-[1200px] mx-auto px-6 py-[96px] grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-[44px] leading-[1.2] font-bold mb-6">
              Publish Your Research with <br />
              <span className="text-[#C4B5FD]">Academic Excellence</span>
            </h1>
            <p className="text-[16px] text-white/80 max-w-[520px] mb-8">
              Join thousands of researchers worldwide in sharing groundbreaking
              scientific discoveries through our premier academic publishing platform.
            </p>

            <div className="flex gap-4 mb-10">
              <Link
                to="#"
                className="px-6 py-3 bg-white text-[#5B21B6] rounded-lg text-sm font-semibold"
              >
                Submit Your Paper
              </Link>
              <button className="px-6 py-3 border border-white/40 rounded-lg text-sm font-semibold">
                Browse Journals
              </button>
            </div>
          </div>

          {/* STATS */}
          <div className="bg-white/10 border border-white/20 rounded-xl p-8 grid grid-cols-2 gap-y-6 gap-x-10 text-center">
            <Stat value="50K+" label="Published Papers" />
            <Stat value="25K+" label="Active Researchers" />
            <Stat value="200+" label="Academic Journals" />
            <Stat value="95%" label="Satisfaction Rate" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-center text-[26px] font-bold text-[#4C1D95] mb-3">
            Why Choose AcademiaPress?
          </h2>
          <p className="text-center text-[#6B7280] max-w-[640px] mx-auto mb-14">
            Our platform provides cutting-edge tools and services to streamline your
            academic publishing journey
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <WhyCard icon={<RocketIcon />} title="Fast Publication" desc="Accelerated peer review process with average publication time of 4–6 weeks from submission to publication." />
            <WhyCard icon={<ShieldIcon />} title="Quality Assurance" desc="Rigorous peer review by leading experts in your field ensures the highest quality publications." />
            <WhyCard icon={<GlobeIcon />} title="Global Reach" desc="Your research reaches a worldwide audience through our extensive distribution network." />
            <WhyCard icon={<ChartIcon />} title="Impact Tracking" desc="Comprehensive analytics and metrics to track your publication’s impact and citations." />
            <WhyCard icon={<UsersIcon />} title="Expert Support" desc="Dedicated editorial support team to guide you through every step of the publishing process." />
            <WhyCard icon={<LockIcon />} title="Secure Platform" desc="Advanced security measures protect your intellectual property throughout the publication process." />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-[#F5F7FB]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-center text-[26px] font-bold text-[#4C1D95] mb-12">
            Simple Publishing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-center">
            <Step number="1" title="Submit" desc="Upload your manuscript and supporting documents through our secure platform." />
            <Step number="2" title="Review" desc="Expert reviewers evaluate your work for quality, originality, and significance." />
            <Step number="3" title="Revise" desc="Make any necessary revisions based on reviewer feedback and recommendations." />
            <Step number="4" title="Publish" desc="Your research is published and made available to the global academic community." />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL – PIXLOT MATCH */}
      <section className="py-24 bg-gradient-to-b from-[#5B21B6] to-[#6D28D9] text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-center text-[32px] font-bold mb-3">
            What Researchers Say
          </h2>
          <p className="text-center text-white/80 mb-16">
            Hear from leading academics who have published with AcademiaPress
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <Testimonial
              avatar="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
              name="Dr. Sarah Chen"
              role="Stanford University"
              text="The publishing process was incredibly smooth and efficient. The editorial team provided excellent support throughout."
            />
            <Testimonial
              avatar="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
              name="Prof. Michael Rodriguez"
              role="MIT"
              text="AcademiaPress has become my go-to platform for publishing. The peer review quality is outstanding."
            />
            <Testimonial
              avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
              name="Dr. Emma Thompson"
              role="Oxford University"
              text="The platform’s user interface is intuitive and the publication timeline exceeded my expectations."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-[26px] font-bold text-[#4C1D95] mb-3">
          Ready to Share Your Research?
        </h2>
        <p className="text-[#6B7280] mb-8">
          Join the global community of researchers and make your mark in the academic world
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-[#5B21B6] text-white rounded-lg text-sm font-semibold">
            Start Your Submission
          </button>
          <button className="px-6 py-3 border border-[#5B21B6] text-[#5B21B6] rounded-lg text-sm font-semibold">
            Learn More
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

/* ---------- COMPONENTS ---------- */

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-[22px] font-bold">{value}</div>
      <div className="text-sm text-white/70">{label}</div>
    </div>
  )
}

function WhyCard({ icon, title, desc }) {
  return (
    <div className="group bg-white rounded-2xl p-7 border border-[#E5E7EB]
      shadow-[0_8px_24px_rgba(17,24,39,0.06)]
      transition-all duration-300 ease-out
      hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(91,33,182,0.18)]">
      <div className="w-12 h-12 rounded-xl bg-[#EDE9FE] text-[#5B21B6]
        flex items-center justify-center mb-5
        transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-[16px] font-semibold text-[#4C1D95] mb-2">{title}</h3>
      <p className="text-[14px] leading-relaxed text-[#6B7280]">{desc}</p>
    </div>
  )
}

function Step({ number, title, desc }) {
  return (
    <div>
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#5B21B6] text-white flex items-center justify-center font-bold">
        {number}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-[#6B7280]">{desc}</p>
    </div>
  )
}

function Testimonial({ avatar, name, role, text }) {
  return (
    <div className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm">
      <div className="flex items-center gap-4 mb-5">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold leading-tight">{name}</div>
          <div className="text-sm text-white/70">{role}</div>
        </div>
      </div>

      <p className="text-sm italic leading-relaxed mb-5">
        “{text}”
      </p>

      <div className="text-yellow-400 text-sm">★★★★★</div>
    </div>
  )
}

/* ---------- ICONS ---------- */

const RocketIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 15c-1 1-1 4-1 4s3 0 4-1l11-11a4 4 0 0 0-6-6L5 15z" />
    <path d="M15 5l4 4" />
  </svg>
)

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z" />
  </svg>
)

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
  </svg>
)

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18h18" />
    <path d="M7 14l4-4 4 3 5-6" />
  </svg>
)

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="7" r="3" />
    <circle cx="17" cy="7" r="3" />
    <path d="M2 21c0-4 4-6 7-6s7 2 7 6" />
  </svg>
)

const LockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="11" width="16" height="9" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
)