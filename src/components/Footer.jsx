import BrandMark from './BrandMark';

export default function Footer() {
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
