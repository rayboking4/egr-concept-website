import { Link } from 'react-router-dom';

const services = [
  'Revêtement de sol et murs',
  'Électricité',
  'Plomberie',
  'Peinture',
  'Rénovation intérieure',
  'Plâtrerie & Isolation',
  'VMC / Ventilation',
  'Chauffage',
];

const cities = [
  'Lille', 'Roubaix', 'Tourcoing', 'Dunkerque',
  'Valenciennes', 'Douai', 'Arras', 'Béthune',
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white p-1">
                <img
                  src="/logo.png"
                  alt="EGR Concept"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <div className="font-heading font-bold text-lg leading-tight">EGR Concept</div>
                <div className="text-amber text-xs">Entreprise Générale de Rénovation</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Spécialistes en rénovation dans le Nord et Nord-Pas-de-Calais. 
              Qualité, ponctualité et savoir-faire depuis plusieurs années.
            </p>
            <div className="space-y-3">
              <a href="tel:0619020888" className="flex items-center gap-2 text-white/80 hover:text-amber transition-colors text-sm">
                <span className="material-icons text-amber text-base">phone</span>
                06 19 02 08 88
              </a>
              <a href="mailto:contact@egrconcept.fr" className="flex items-center gap-2 text-white/80 hover:text-amber transition-colors text-sm">
                <span className="material-icons text-amber text-base">email</span>
                contact@egrconcept.fr
              </a>
              <div className="flex items-start gap-2 text-white/80 text-sm">
                <span className="material-icons text-amber text-base mt-0.5">location_on</span>
                60 rue François 1er 57008, Paris
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <span className="material-icons text-amber text-base">schedule</span>
                Lun–Ven 8h–18h | Sam sur RDV
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-heading font-bold text-base mb-5 text-amber uppercase tracking-wide">Navigation</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Accueil' },
                { to: '/a-propos', label: 'À Propos' },
                { to: '/services', label: 'Services' },
                { to: '/realisations', label: 'Réalisations' },
                { to: '/contact', label: 'Contact' },
                { to: '/devis', label: 'Devis Gratuit' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-amber transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="material-icons text-amber/50 text-xs">chevron_right</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-base mb-5 text-amber uppercase tracking-wide">Nos Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-white/70 hover:text-amber transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="material-icons text-amber/50 text-xs">chevron_right</span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h3 className="font-heading font-bold text-base mb-5 text-amber uppercase tracking-wide">Zone d'intervention</h3>
            <p className="text-white/70 text-sm mb-4">Nord & Nord-Pas-de-Calais</p>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="text-xs bg-white/10 border border-white/20 text-white/80 px-3 py-1 rounded-full"
                >
                  {city}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <Link
                to="/devis"
                className="inline-flex items-center gap-2 bg-amber text-navy font-bold px-5 py-2.5 rounded-lg hover:bg-amber-500 transition-all text-sm"
              >
                <span className="material-icons text-base">request_quote</span>
                Devis Gratuit
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} EGR Concept – Tous droits réservés. Entreprise Générale de Rénovation Nord-Pas-de-Calais.
          </p>
          <p className="text-white/40 text-xs">
            Artisan qualifié | RGE | Assuré décennale
          </p>
        </div>
      </div>
    </footer>
  );
}
