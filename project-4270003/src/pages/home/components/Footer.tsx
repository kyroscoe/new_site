export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <span className="text-xl font-bold">Kyroscoe</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for comprehensive IT solutions, software development, and modern web design services.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="nofollow noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="nofollow noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer">
                <i className="ri-twitter-x-line text-xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="nofollow noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="nofollow noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors cursor-pointer">
                <i className="ri-github-fill text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">IT Services</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  Helpdesk Support
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  Network Infrastructure
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  Cybersecurity
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  Computer Repair
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  Managed IT
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Development</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('development')} className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  Web App Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('development')} className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  Mobile Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('development')} className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  Automation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('web-design')} className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  Web Design
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('web-design')} className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  Hosting & Deployment
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('client-portal')} className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  Client Portal
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('booking')} className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  Book Consultation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-gray-400 hover:text-teal-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:support@kyroscoe.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                  support@kyroscoe.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Kyroscoe IT Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </a>
              <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                Web Design
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
