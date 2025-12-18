import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Search, 
  Users, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  Zap, 
  Globe, 
  LockOpen, 
  Headphones 
} from 'lucide-react';

export default function SignIn() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1F2937] font-sans">
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
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* Left Column */}
        <div>
          <h1 className="text-4xl md:text-5xl leading-[1.15] font-bold mb-6 text-gray-900">
            Welcome Back to <br />
            <span className="text-[#7C3AED]">AcademiaPress</span>
          </h1>

          <p className="text-[#4B5563] text-lg max-w-xl mb-10 leading-relaxed">
            Sign in to access your research dashboard, manage submissions,
            and stay connected with the global academic community.
          </p>

          <div className="space-y-8">
            <Feature
              icon={<FileText className="text-[#7C3AED]" size={24} />}
              title="Manage Your Submissions"
              desc="Track the status of your papers, respond to reviewer comments, and upload revisions."
            />
            <Feature
              icon={<Search className="text-[#7C3AED]" size={24} />}
              title="Discover Research"
              desc="Access thousands of peer-reviewed articles across all scientific disciplines."
            />
            <Feature
              icon={<Users className="text-[#7C3AED]" size={24} />}
              title="Connect with Peers"
              desc="Network with researchers worldwide and collaborate on groundbreaking projects."
            />
          </div>
        </div>

        {/* Right Column - Card */}
        <div className="flex justify-center lg:justify-end">
          <SignInCard />
        </div>
      </div>
    </section>
  )
}

/* ================= FEATURE ================= */

function Feature({ icon, title, desc }) {
  return (
    <div className="flex gap-5 items-start">
      <div className="w-12 h-12 rounded-full bg-[#F3F0FF] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-bold text-lg text-gray-900 mb-1">{title}</div>
        <div className="text-[#6B7280] leading-relaxed">{desc}</div>
      </div>
    </div>
  )
}

/* ================= SIGN IN CARD ================= */

function SignInCard() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white w-full max-w-[480px] rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-8 md:p-10 border border-gray-100">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#4C1D95] mb-2">Sign In</h3>
        <p className="text-sm text-[#6B7280]">
          Enter your credentials to access your account
        </p>
      </div>

      <form className="space-y-5">
        <div className="space-y-5">
            <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Email Address</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <Mail size={18} />
                    </div>
                    <input 
                        type="email" 
                        placeholder="researcher@university.edu" 
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10 outline-none transition-all text-sm font-medium text-gray-700 placeholder:text-gray-400"
                    />
                </div>
            </div>

            <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Password</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <Lock size={18} />
                    </div>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Enter your password" 
                        className="w-full pl-11 pr-11 py-3 rounded-xl border border-gray-200 focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10 outline-none transition-all text-sm font-medium text-gray-700 placeholder:text-gray-400"
                    />
                    <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-between text-sm pt-1">
          <label className="flex items-center gap-2 text-[#4B5563] cursor-pointer select-none">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#7C3AED] focus:ring-[#7C3AED]" />
            Remember me
          </label>
          <Link to="#" className="text-[#7C3AED] font-bold hover:text-[#6D28D9]">
            Forgot password?
          </Link>
        </div>

        <button className="w-full bg-[#4C1D95] hover:bg-[#3b1676] text-white py-3.5 rounded-xl font-bold shadow-lg shadow-purple-900/20 transition-all active:scale-[0.98]">
          Sign In
        </button>

        <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center">
                <span className="px-4 bg-white text-xs text-gray-400 font-medium">Or continue with</span>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button type="button" className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-bold text-gray-700">
            <span className="text-lg">G</span> Google
          </button>
          <button type="button" className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-bold text-gray-700">
             <span className="text-[#A6CE39] font-black text-lg">iD</span> ORCID
          </button>
        </div>

        <div className="text-center pt-2">
            <p className="text-sm text-[#6B7280]">
                Don't have an account?{" "}
                <Link to="/register" className="text-[#7C3AED] font-bold hover:underline">
                    Create one now
                </Link>
            </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-[11px] text-[#9CA3AF] pt-2">
          <ShieldCheck size={14} />
          <span>Your data is protected with industry-standard encryption</span>
        </div>
      </form>
    </div>
  )
}

/* ================= WHY SECTION ================= */

function WhySection() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#4C1D95] mb-4">
                Why Researchers Choose AcademiaPress
            </h2>
        </div>

      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-4 gap-8">
        <WhyItem 
            icon={<Zap size={28} className="text-white" />} 
            title="Fast Review" 
            desc="Average review time of 21 days" 
        />
        <WhyItem 
            icon={<Globe size={28} className="text-white" />} 
            title="Global Reach" 
            desc="Readers in 180+ countries" 
        />
        <WhyItem 
            icon={<LockOpen size={28} className="text-white" />} 
            title="Open Access" 
            desc="Maximize your research impact" 
        />
        <WhyItem 
            icon={<Headphones size={28} className="text-white" />} 
            title="Expert Support" 
            desc="24/7 author assistance" 
        />
      </div>
    </section>
  )
}

function WhyItem({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-16 h-16 rounded-full bg-[#4C1D95] text-white mb-6 flex items-center justify-center shadow-lg shadow-purple-900/20 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="font-bold text-lg text-gray-900 mb-2">{title}</div>
      <div className="text-sm text-gray-500 leading-relaxed">{desc}</div>
    </div>
  )
}
