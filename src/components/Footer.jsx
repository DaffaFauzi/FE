import { Link } from 'react-router-dom';

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

        <FooterCol 
            title="Services" 
            items={[
                {label: "Journal Publishing", path: "/browse"},
                {label: "Peer Review", path: "#"},
                {label: "Editorial Support", path: "#"},
                {label: "Research Analytics", path: "#"}
            ]} 
        />
        <FooterCol 
            title="Resources" 
            items={[
                {label: "Author Guidelines", path: "/submit"},
                {label: "Reviewer Handbook", path: "#"},
                {label: "Publication Ethics", path: "/about"},
                {label: "FAQ", path: "#"}
            ]} 
        />
        <FooterCol 
            title="Contact" 
            items={[
                "support@academiapress.com", 
                "+1 (555) 123-4567", 
                "123 Academic St, Research City"
            ]} 
        />
      </div>

      <div className="text-center text-sm py-4 text-white/80">
        © 2024 AcademiaPress. All rights reserved. | <Link to="#" className="hover:text-white">Privacy Policy</Link> | <Link to="#" className="hover:text-white">Terms of Service</Link>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div className="font-semibold mb-3">{title}</div>
      {items.map((item, index) => (
        <div key={index} className="text-sm text-white/80 mb-2">
            {typeof item === 'string' ? (
                item
            ) : (
                <Link to={item.path} className="hover:text-white transition-colors">
                    {item.label}
                </Link>
            )}
        </div>
      ))}
    </div>
  )
}

const MortarIcon = () => <span className="text-xl">🎓</span>
