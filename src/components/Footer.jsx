export default function Footer() {
  return (
    <footer className="bg-[#5B21B6] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 border-b border-white/20">
        <div>
          <div className="flex items-center gap-2 font-bold mb-3">
            <MortarIcon />
            AcademiaPress
          </div>
          <p className="text-sm text-white/80">
            Empowering researchers worldwide with cutting-edge academic publishing solutions.
          </p>
        </div>

        <FooterCol title="Services" items={["Journal Publishing", "Peer Review", "Editorial Support", "Research Analytics"]} />
        <FooterCol title="Resources" items={["Author Guidelines", "Reviewer Handbook", "Publication Ethics", "FAQ"]} />
        <FooterCol title="Contact" items={["support@academiapress.com", "+1 (555) 123-4567", "123 Academic St, Research City"]} />
      </div>

      <div className="text-center text-sm py-4 text-white/80">
        © 2024 AcademiaPress. All rights reserved. | Privacy Policy | Terms of Service
      </div>
    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div className="font-semibold mb-3">{title}</div>
      {items.map((i) => (
        <div key={i} className="text-sm text-white/80 mb-2">{i}</div>
      ))}
    </div>
  )
}

const MortarIcon = () => <span className="text-xl">🎓</span>
