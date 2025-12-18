import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SignIn() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1F2937]">
      <Header />
      <Hero />
      <WhySection />
      <Footer />
    </div>
  )
}

/* ================= HERO ================= */

function Hero() {
  return (
    <section className="py-14">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
        <div>
          <h1 className="text-[40px] leading-tight font-bold mb-4">
            Welcome Back to{" "}
            <span className="text-[#7C3AED]">AcademiaPress</span>
          </h1>

          <p className="text-[#4B5563] max-w-xl mb-8">
            Sign in to access your research dashboard, manage submissions,
            and stay connected with the global academic community.
          </p>

          <div className="space-y-6">
            <Feature
              icon={<DocIcon />}
              title="Manage Your Submissions"
              desc="Track the status of your papers, respond to reviewer comments, and upload revisions."
            />
            <Feature
              icon={<SearchIcon />}
              title="Discover Research"
              desc="Access thousands of peer-reviewed articles across all scientific disciplines."
            />
            <Feature
              icon={<UsersIcon />}
              title="Connect with Peers"
              desc="Network with researchers worldwide and collaborate on groundbreaking projects."
            />
          </div>
        </div>

        <div className="flex justify-end">
          <SignInCard />
        </div>
      </div>
    </section>
  )
}

/* ================= FEATURE ================= */

function Feature({ icon, title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="w-11 h-11 rounded-full bg-[#EDE9FE] flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-[#6B7280]">{desc}</div>
      </div>
    </div>
  )
}

/* ================= SIGN IN CARD ================= */

function SignInCard() {
  return (
    <div className="bg-white w-[420px] rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,.15)] px-8 py-8">
      <div className="text-center mb-6">
        <h3 className="text-[22px] font-bold text-[#5B21B6]">Sign In</h3>
        <p className="text-sm text-[#6B7280] mt-1">
          Enter your credentials to access your account
        </p>
      </div>

      <form className="space-y-4">
        <Input label="Email Address" placeholder="researcher@university.edu" />
        <Input label="Password" placeholder="Enter your password" type="password" />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-[#374151]">
            <input type="checkbox" className="w-4 h-4" />
            Remember me
          </label>
          <span className="text-[#7C3AED] font-medium cursor-pointer">
            Forgot password?
          </span>
        </div>

        <button className="w-full bg-[#5B21B6] hover:bg-[#4C1D95] text-white py-3 rounded-lg font-semibold">
          Sign In
        </button>

        <Divider />

        <div className="grid grid-cols-2 gap-3">
          <OAuthButton icon={<GoogleIcon />} label="Google" />
          <OAuthButton icon={<OrcidIcon />} label="ORCID" />
        </div>

        <p className="text-center text-sm text-[#6B7280]">
          Don't have an account?{" "}
          <span className="text-[#7C3AED] font-semibold">
            Create one now
          </span>
        </p>

        <div className="flex items-center justify-center gap-2 text-xs text-[#6B7280] mt-2">
          <ShieldIcon />
          Your data is protected with industry-standard encryption
        </div>
      </form>
    </div>
  )
}

/* ================= WHY SECTION ================= */

function WhySection() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-[26px] font-bold text-[#5B21B6] mb-10">
        Why Researchers Choose AcademiaPress
      </h2>

      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-4 gap-8">
        <WhyItem icon={<BoltIcon />} title="Fast Review" desc="Average review time of 21 days" />
        <WhyItem icon={<GlobeIcon />} title="Global Reach" desc="Readers in 180+ countries" />
        <WhyItem icon={<LockIcon />} title="Open Access" desc="Maximize your research impact" />
        <WhyItem icon={<HeadsetIcon />} title="Expert Support" desc="24/7 author assistance" />
      </div>
    </section>
  )
}

function WhyItem({ icon, title, desc }) {
  return (
    <div className="text-center">
      <div className="w-14 h-14 rounded-full bg-[#7C3AED] text-white mx-auto mb-4 flex items-center justify-center">
        {icon}
      </div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-[#6B7280]">{desc}</div>
    </div>
  )
}

/* ================= REUSABLE ================= */

function Input({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:ring-purple-200 focus:border-purple-400"
      />
    </div>
  )
}

function Divider() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 border-t" />
      <span className="text-xs text-[#6B7280]">Or continue with</span>
      <div className="flex-1 border-t" />
    </div>
  )
}

function OAuthButton({ icon, label }) {
  return (
    <button className="border rounded-lg py-2.5 flex items-center justify-center gap-2 font-medium text-sm">
      {icon}
      {label}
    </button>
  )
}

/* ================= ICONS ================= */

const DocIcon = () => <span>📄</span>
const SearchIcon = () => <span>🔍</span>
const UsersIcon = () => <span>👥</span>
const GoogleIcon = () => <span className="text-red-500 font-bold">G</span>
const OrcidIcon = () => <span className="text-green-600 font-bold">iD</span>
const ShieldIcon = () => <span>🔒</span>
const BoltIcon = () => <span>⚡</span>
const GlobeIcon = () => <span>🌍</span>
const LockIcon = () => <span>🔓</span>
const HeadsetIcon = () => <span>🎧</span>
