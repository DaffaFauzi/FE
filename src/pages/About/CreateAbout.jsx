import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ValueCard({ icon, title, text }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center flex-1 min-w-[280px]">
      <div className="w-16 h-16 mx-auto mb-6 bg-[#F3F1FE] rounded-full flex items-center justify-center text-[var(--color-primary)]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[var(--color-primary-800)] mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  )
}

function TimelineItem({ year, title, text }) {
  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#9F7AEA] to-[#6B46C1] text-white font-bold text-xs shadow-sm">
          {year}
        </span>
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-800 leading-none mb-2 mt-1">{title}</h4>
        <p className="text-sm text-gray-500 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  )
}

function LeadershipCard({ name, role, bio, image }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center flex-1 min-w-[300px] border border-gray-100">
      <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#F3F1FE]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold text-[var(--color-primary-800)] mb-2">{name}</h3>
      <div className="text-[var(--color-primary)] font-semibold text-sm mb-4 uppercase tracking-wide opacity-80">{role}</div>
      <p className="text-gray-500 text-sm leading-relaxed">
        {bio}
      </p>
    </div>
  )
}

function StatItem({ icon, number, label }) {
  return (
    <div className="text-center flex-1 min-w-[150px]">
      <div className="w-16 h-16 mx-auto mb-4 bg-[var(--color-primary-900)] rounded-full flex items-center justify-center text-white shadow-lg">
        {icon}
      </div>
      <div className="text-3xl font-bold text-[var(--color-primary-900)] mb-1">{number}</div>
      <div className="text-gray-500 font-medium">{label}</div>
    </div>
  )
}

function PartnerCard({ icon, label }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center flex-1 min-w-[200px] border border-gray-50">
      <div className="w-12 h-12 mx-auto mb-4 text-[var(--color-primary-800)] flex items-center justify-center">
        {icon}
      </div>
      <div className="font-medium text-gray-800">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="bg-[var(--color-primary-800)] text-white py-20 px-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-[#DDD6FE]">AcademiaPress</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 opacity-95">
            Advancing scientific knowledge through excellence in academic publishing
          </p>
          <p className="text-sm md:text-base opacity-80 font-medium">
            Connecting researchers worldwide • Promoting open science • Ensuring research integrity
          </p>
        </section>

        {/* MAIN CONTENT */}
        <section className="max-w-[1100px] mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
          
          {/* TEXT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-primary-800)] mb-6">Our Mission</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-[16px]">
              <p>
                AcademiaPress is dedicated to advancing scientific knowledge by providing researchers worldwide with a premier platform for publishing high-quality academic research. We believe in the power of open science to drive innovation and solve global challenges.
              </p>
              <p>
                Our mission is to democratize access to scientific knowledge while maintaining the highest standards of peer review and editorial excellence. We support researchers at every stage of their careers, from emerging scholars to established experts.
              </p>
            </div>

            {/* STATS */}
            <div className="flex flex-wrap gap-12 mt-10">
              <div>
                <div className="text-4xl font-bold text-[var(--color-primary-800)]">50,000+</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold mt-1">
                  Published Articles
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[var(--color-primary-800)]">180+</div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold mt-1">
                  Countries Served
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 aspect-[4/3] group">
            <img 
              src="/tentang.png" 
              alt="Scientific Collaboration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        </section>

        {/* VALUES SECTION */}
        <section className="bg-[var(--color-bg)] py-20 px-6">
          <div className="max-w-[1100px] mx-auto">
            <h2 className="text-center text-3xl font-bold text-[var(--color-primary-800)] mb-12">Our Core Values</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <ValueCard 
                icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>}
                title="Research Integrity"
                text="We uphold the highest ethical standards in research publication, ensuring transparency, accuracy, and responsible conduct in all our processes."
              />
              <ValueCard 
                icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>}
                title="Global Collaboration"
                text="We foster international partnerships and cross-cultural scientific exchange to address humanity's greatest challenges through collective knowledge."
              />
              <ValueCard 
                icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5s-6 8.5-6 13.5c0 1.8 1.2 3.3 2.8 3.8L8 22l4-2 4 2-.8-2.2c1.6-.5 2.8-2 2.8-3.8C18 11 12 2.5 12 2.5zM12 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>}
                title="Innovation"
                text="We continuously evolve our publishing technologies and methodologies to enhance the research experience and accelerate scientific discovery."
              />
            </div>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="max-w-[1100px] mx-auto py-24 px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* IMAGE */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] md:aspect-auto md:h-full group">
            <img 
              src="/public/our.png" 
              alt="Our Story" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* TIMELINE CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-primary-800)] mb-10">Our Story</h2>
            <div className="space-y-8">
              <TimelineItem 
                year="2010"
                title="Foundation"
                text="AcademiaPress was founded by a group of visionary researchers and publishers committed to transforming academic publishing."
              />
              <TimelineItem 
                year="2015"
                title="Global Expansion"
                text="We expanded our reach internationally, establishing partnerships with leading research institutions across six continents."
              />
              <TimelineItem 
                year="2020"
                title="Digital Innovation"
                text="We launched our advanced digital platform, incorporating AI-assisted peer review and enhanced research discovery tools."
              />
              <TimelineItem 
                year="2024"
                title="Future Forward"
                text="Today, we continue to lead the industry in open access publishing and research integrity initiatives."
              />
            </div>
          </div>
        </section>

        {/* LEADERSHIP & IMPACT SECTION */}
        <section className="bg-[var(--color-bg)] py-24 px-6">
          <div className="max-w-[1100px] mx-auto">
            {/* LEADERSHIP */}
            <div className="mb-24">
              <h2 className="text-center text-3xl font-bold text-[var(--color-primary-800)] mb-12">Leadership Team</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <LeadershipCard 
                  name="Dr. Sarah Chen"
                  role="Chief Executive Officer"
                  bio="Former MIT researcher with 20+ years in academic publishing. PhD in Computational Biology."
                  image="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20woman%20portrait%20corporate%20headshot%20smile%20business%20attire&image_size=square"
                />
                <LeadershipCard 
                  name="Dr. Michael Rodriguez"
                  role="Chief Technology Officer"
                  bio="Technology visionary specializing in AI and machine learning applications in academic research."
                  image="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20man%20portrait%20corporate%20headshot%20smile%20tech%20leader&image_size=square"
                />
                <LeadershipCard 
                  name="Prof. Emma Thompson"
                  role="Editor-in-Chief"
                  bio="Renowned physicist and former Nature editor, champion of open science and research transparency."
                  image="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20woman%20academic%20portrait%20glasses%20smile&image_size=square"
                />
              </div>
            </div>

            {/* DIVIDER */}
            <div className="h-px bg-gray-200 w-full mb-20"></div>

            {/* GLOBAL IMPACT */}
            <div>
              <h2 className="text-center text-3xl font-bold text-[var(--color-primary-800)] mb-16">Our Global Impact</h2>
              <div className="flex flex-wrap gap-10 justify-center">
                <StatItem 
                  icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>}
                  number="50,000+"
                  label="Articles Published"
                />
                <StatItem 
                  icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>}
                  number="25,000+"
                  label="Active Researchers"
                />
                <StatItem 
                  icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>}
                  number="180+"
                  label="Countries Reached"
                />
                <StatItem 
                  icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7.4l-1.65-3.66L6.81 2l1.65 3.66L12 7.4zM22 2l-3.54 1.74L16.81 2l1.65 3.66L22 7.4l-1.65-3.66L22 2zM12 15.4l-3.54 1.74L6.81 13.5l3.54-1.74L12 15.4zM16.81 13.5l1.65 3.66L22 15.4l-3.54-1.74L16.81 13.5zM12 22l-3.54-1.74 1.65-3.66 1.89 5.4z"/></svg>}
                  number="150+"
                  label="Journal Titles"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TRUSTED PARTNERS SECTION */}
        <section className="py-24 px-6 bg-[var(--color-bg)]">
          <div className="max-w-[1100px] mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--color-primary-800)] mb-6">Trusted Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
              We collaborate with leading institutions, libraries, and research organizations worldwide to advance scientific knowledge and improve research accessibility.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <PartnerCard 
                icon={<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>}
                label="Harvard University"
              />
              <PartnerCard 
                icon={<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M7 17l-5-5 1.41-1.41L7 14.17l8.17-8.17 1.41 1.41L7 17M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>}
                label="Max Planck Institute"
              />
              <PartnerCard 
                icon={<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm-5 8c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/></svg>}
                label="CERN"
              />
              <PartnerCard 
                icon={<svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.85 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"/></svg>}
                label="NIH"
              />
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-[var(--color-primary-800)] py-20 px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the AcademiaPress Community</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Be part of a global network of researchers, authors, and institutions working together to advance human knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button className="bg-[#E9D8FD] text-[var(--color-primary-900)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors">
                Submit Your Research
              </button>
              <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                Become a Reviewer
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
