import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { 
  CheckCircle, 
  HelpCircle, 
  FileText, 
  Download, 
  Mail, 
  Phone, 
  ArrowRight, 
  Save,
  ChevronDown
} from 'lucide-react'

export default function SubmitPaper() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-sans">
      <Header />
      
      {/* HERO SECTION */}
      <section className="bg-[#5B21B6] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10"></div>
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">
            Submit Your <span className="text-white/80 font-light">Research Paper</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg mb-6">
            Share your groundbreaking research with the global academic community
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-white/70 uppercase tracking-wide">
            <span>Fast peer review</span>
            <span>•</span>
            <span>Open access options</span>
            <span>•</span>
            <span>High visibility</span>
            <span>•</span>
            <span>Expert editorial support</span>
          </div>
        </div>
      </section>

      {/* STEPPER */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-[1000px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
             <StepItem number="1" label="Manuscript Details" active />
             <StepConnector />
             <StepItem number="2" label="Authors & Contributors" />
             <StepConnector />
             <StepItem number="3" label="Upload Files" />
             <StepConnector />
             <StepItem number="4" label="Review & Submit" />
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-grow max-w-[1200px] mx-auto px-6 py-12 grid lg:grid-cols-[1fr_340px] gap-8 items-start">
        
        {/* LEFT COLUMN: FORM */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#5B21B6] mb-1">Manuscript Details</h2>
            <div className="h-1 w-12 bg-[#5B21B6] rounded-full"></div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
               <FormSelect label="Select Journal *" placeholder="Choose a journal..." />
               <FormSelect label="Article Type *" placeholder="Select article type..." />
            </div>

            <FormInput label="Manuscript Title *" placeholder="Enter your manuscript title" />
            
            <FormInput 
              label="Running Title (Short Title)" 
              placeholder="Enter a short title (max 50 characters)" 
              helperText="Optional: A shortened version for page headers"
            />

            <FormTextarea 
              label="Abstract *" 
              placeholder="Enter your abstract (200-300 words)" 
              rows={5}
              helperText="Provide a concise summary of your research"
            />

            <FormInput 
              label="Keywords *" 
              placeholder="Enter keywords separated by commas" 
              helperText="3-6 keywords that describe your research"
            />

            <div className="grid md:grid-cols-2 gap-6">
               <FormSelect label="Research Field *" placeholder="Select field..." />
               <FormInput label="Subspecialty" placeholder="Enter subspecialty" />
            </div>

            <FormTextarea 
              label="Funding Information" 
              placeholder="List funding sources and grant numbers (if applicable)" 
              rows={3}
            />

            <FormTextarea 
              label="Conflict of Interest Statement *" 
              placeholder="Declare any conflicts of interest or state 'None'" 
              rows={3}
            />

            <div className="space-y-4 pt-4 border-t border-gray-100">
               <FormCheckbox label="I confirm that this manuscript has not been published elsewhere and is not under consideration by another journal" />
               <FormCheckbox label="I agree to the journal's ethical guidelines and publication policies" />
            </div>

            <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
               <button type="button" className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                 <Save size={18} />
                 Save Draft
               </button>
               <button type="button" className="flex items-center gap-2 px-8 py-2.5 bg-[#4C1D95] text-white font-semibold rounded-lg hover:bg-[#3b1676] transition-colors shadow-lg shadow-purple-900/20">
                 Continue to Next Step
                 <ArrowRight size={18} />
               </button>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <div className="space-y-6 sticky top-24">
          
          {/* Guidelines Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-4">
              <div className="p-1.5 bg-purple-100 rounded-md">
                 <FileText size={18} className="text-[#5B21B6]" />
              </div>
              Submission Guidelines
            </h3>
            <ul className="space-y-3">
              {[
                "Ensure your manuscript follows the journal's formatting guidelines",
                "Include all required sections: abstract, introduction, methods, results, discussion",
                "Provide high-quality figures and tables with proper captions",
                "List all authors with their affiliations and contributions",
                "Include complete references in the required citation style"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
              <Link to="#" className="flex items-center gap-2 text-sm font-semibold text-[#5B21B6] hover:underline">
                <Download size={16} /> Download Author Guidelines
              </Link>
              <Link to="#" className="flex items-center gap-2 text-sm font-semibold text-[#5B21B6] hover:underline">
                <Download size={16} /> Download Manuscript Template
              </Link>
            </div>
          </div>

          {/* Need Help Card */}
          <div className="bg-[#5B21B6] rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
               <h3 className="flex items-center gap-2 font-bold mb-4">
                 <HelpCircle size={20} />
                 Need Help?
               </h3>
               <p className="text-purple-100 text-sm mb-4 leading-relaxed">
                 Our editorial team is here to assist you with your submission.
               </p>
               <div className="space-y-2 mb-6 text-sm">
                 <div className="flex items-center gap-2 text-purple-100">
                   <Mail size={14} /> support@academiapress.com
                 </div>
                 <div className="flex items-center gap-2 text-purple-100">
                   <Phone size={14} /> +1 (800) 123-4567
                 </div>
               </div>
               <button className="w-full py-2.5 bg-white text-[#5B21B6] font-bold rounded-lg hover:bg-purple-50 transition-colors text-sm">
                 Contact Support
               </button>
            </div>
          </div>

        </div>

      </main>

      {/* FAQ SECTION */}
      <section className="bg-white border-t border-gray-100 py-16">
         <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-2xl font-bold text-center text-[#5B21B6] mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
               <FAQItem 
                 question="How long does the review process take?" 
                 answer="The typical review process takes 30-60 days depending on the journal and complexity of the manuscript. You'll receive regular updates on your submission status."
               />
               <FAQItem 
                 question="What file formats are accepted?" 
                 answer="We accept Word (.doc, .docx), LaTeX, and PDF formats for manuscripts. Figures should be submitted as high-resolution TIFF, PNG, or JPEG files."
               />
               <FAQItem 
                 question="Can I track my submission?" 
                 answer="Yes, you'll receive a unique tracking number and can log into your account to view the status of your submission at any time."
               />
               <FAQItem 
                 question="Are there any submission fees?" 
                 answer="Submission is free. Publication fees vary by journal and article type. Open access options are available for increased visibility of your research."
               />
            </div>
         </div>
      </section>

      <Footer />
    </div>
  )
}

/* ============================
   HELPER COMPONENTS
   ============================ */

function StepItem({ number, label, active }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`
        w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors
        ${active ? 'bg-[#5B21B6] text-white' : 'bg-gray-200 text-gray-500'}
      `}>
        {number}
      </div>
      <span className={`text-sm font-medium hidden md:block ${active ? 'text-[#5B21B6]' : 'text-gray-500'}`}>
        {label}
      </span>
    </div>
  )
}

function StepConnector() {
  return <div className="h-[2px] w-8 md:w-16 bg-gray-200"></div>
}

function FormInput({ label, placeholder, helperText }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <input 
        type="text" 
        className="px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#5B21B6] focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm placeholder:text-gray-400"
        placeholder={placeholder}
      />
      {helperText && <p className="text-xs text-gray-500">{helperText}</p>}
    </div>
  )
}

function FormSelect({ label, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <div className="relative">
        <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#5B21B6] focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm text-gray-600 appearance-none bg-white">
          <option value="" disabled selected>{placeholder}</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
      </div>
    </div>
  )
}

function FormTextarea({ label, placeholder, rows, helperText }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <textarea 
        rows={rows}
        className="px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5B21B6] focus:ring-2 focus:ring-purple-100 outline-none transition-all text-sm placeholder:text-gray-400 resize-y"
        placeholder={placeholder}
      />
      {helperText && <p className="text-xs text-gray-500">{helperText}</p>}
    </div>
  )
}

function FormCheckbox({ label }) {
  return (
    <label className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
      <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-[#5B21B6] focus:ring-[#5B21B6]" />
      <span className="text-sm text-gray-600 leading-relaxed select-none">{label}</span>
    </label>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[#F8F9FA] rounded-xl overflow-hidden border border-gray-100 transition-all hover:border-purple-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-white"
      >
        <span className="font-bold text-[#5B21B6] text-sm md:text-base">{question}</span>
        <ChevronDown 
          size={20} 
          className={`text-[#5B21B6] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-5 pt-0 text-sm text-gray-600 leading-relaxed bg-white">
          {answer}
        </div>
      </div>
    </div>
  )
}
