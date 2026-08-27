import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Accueil' },
  { path: '/a-propos', label: 'À Propos' },
  { path: '/services', label: 'Services' },
  { path: '/realisations', label: 'Réalisations' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) =>
    location.pathname === path ? 'text-amber font-bold' : 'text-white/90 hover:text-amber';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-xl py-3' : 'bg-navy/95 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white p-1 shadow-md group-hover:shadow-amber/40 transition-shadow">
              <img
                src="/logo.png"
                alt="EGR Concept Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = 'none';
                  const parent = t.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="material-icons text-navy text-2xl flex items-center justify-center w-full h-full">home_repair_service</span>`;
                  }
                }}
              />
            </div>
            <div>
              <div className="text-white font-heading font-bold text-lg leading-tight">EGR Concept</div>
              <div className="text-amber text-xs font-medium leading-tight">Entreprise Générale de Rénovation</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 ${isActive(link.path)}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/devis"
              className="bg-amber text-navy font-bold px-5 py-2.5 rounded-lg hover:bg-amber-500 transition-all duration-300 text-sm shadow-md hover:shadow-amber/30 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <span className="material-icons text-base">request_quote</span>
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="material-icons text-2xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${
                  location.pathname === link.path
                    ? 'bg-white/10 text-amber'
                    : 'text-white/90 hover:bg-white/5 hover:text-amber'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/devis"
              className="mt-4 w-full bg-amber text-navy font-bold px-5 py-3 rounded-lg hover:bg-amber-500 transition-colors text-sm flex items-center justify-center gap-2"
            >
              <span className="material-icons text-base">request_quote</span>
              Demander un Devis Gratuit
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
