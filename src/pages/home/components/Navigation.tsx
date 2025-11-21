import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavClick('/')}
              className="text-2xl font-bold text-teal-600 cursor-pointer hover:text-teal-700 transition-colors"
              style={{ fontFamily: '"Pacifico", serif' }}
            >
              Kyroscoe
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('/services')}
              className={`${
                isActive('/services') ? 'text-teal-600' : 'text-gray-700'
              } hover:text-teal-600 transition-colors font-medium cursor-pointer whitespace-nowrap`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('/development')}
              className={`${
                isActive('/development') ? 'text-teal-600' : 'text-gray-700'
              } hover:text-teal-600 transition-colors font-medium cursor-pointer whitespace-nowrap`}
            >
              Development
            </button>
            <button
              onClick={() => handleNavClick('/web-design')}
              className={`${
                isActive('/web-design') ? 'text-teal-600' : 'text-gray-700'
              } hover:text-teal-600 transition-colors font-medium cursor-pointer whitespace-nowrap`}
            >
              Web Design
            </button>
            <button
              onClick={() => handleNavClick('/contact')}
              className={`${
                isActive('/contact') ? 'text-teal-600' : 'text-gray-700'
              } hover:text-teal-600 transition-colors font-medium cursor-pointer whitespace-nowrap`}
            >
              Contact
            </button>
            <button
              onClick={() => handleNavClick('/payment-portal')}
              className={`${
                isActive('/payment-portal') ? 'text-teal-600' : 'text-gray-700'
              } hover:text-teal-600 transition-colors font-medium cursor-pointer whitespace-nowrap`}
            >
              Pay Invoice
            </button>
            <button
              onClick={() => handleNavClick('/booking')}
              className="bg-gradient-to-r from-teal-500 to-cyan-400 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-teal-600 transition-colors cursor-pointer"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('/services')}
                className={`${
                  isActive('/services') ? 'text-teal-600' : 'text-gray-700'
                } hover:text-teal-600 transition-colors font-medium text-left cursor-pointer whitespace-nowrap`}
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('/development')}
                className={`${
                  isActive('/development') ? 'text-teal-600' : 'text-gray-700'
                } hover:text-teal-600 transition-colors font-medium text-left cursor-pointer whitespace-nowrap`}
              >
                Development
              </button>
              <button
                onClick={() => handleNavClick('/web-design')}
                className={`${
                  isActive('/web-design') ? 'text-teal-600' : 'text-gray-700'
                } hover:text-teal-600 transition-colors font-medium text-left cursor-pointer whitespace-nowrap`}
              >
                Web Design
              </button>
              <button
                onClick={() => handleNavClick('/contact')}
                className={`${
                  isActive('/contact') ? 'text-teal-600' : 'text-gray-700'
                } hover:text-teal-600 transition-colors font-medium text-left cursor-pointer whitespace-nowrap`}
              >
                Contact
              </button>
              <button
                onClick={() => handleNavClick('/payment-portal')}
                className={`${
                  isActive('/payment-portal') ? 'text-teal-600' : 'text-gray-700'
                } hover:text-teal-600 transition-colors font-medium text-left cursor-pointer whitespace-nowrap`}
              >
                Pay Invoice
              </button>
              <button
                onClick={() => handleNavClick('/booking')}
                className="bg-gradient-to-r from-teal-500 to-cyan-400 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all text-left cursor-pointer whitespace-nowrap"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
