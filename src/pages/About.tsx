import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const values = [
  {
    icon: 'workspace_premium',
    title: 'Qualité Irréprochable',
    desc: 'Nous sélectionnons des matériaux de première qualité et appliquons des méthodes de travail éprouvées pour garantir des résultats durables sur chaque chantier dans le Nord.',
  },
  {
    icon: 'schedule',
    title: 'Respect des Délais',
    desc: 'Votre temps est précieux. EGR Concept s\'engage contractuellement sur les délais d\'exécution et vous tient informé à chaque étape de vos travaux.',
  },
  {
    icon: 'verified_user',
    title: 'Artisan Licencié & Assuré',
    desc: 'Notre équipe est qualifiée, certifiée et couverte par une assurance décennale et responsabilité civile professionnelle pour votre tranquillité d\'esprit.',
  },
  {
    icon: 'handshake',
    title: 'Confiance & Transparence',
    desc: 'Devis détaillé, prix fixe sans surprise. Nous construisons une relation de confiance durable avec chacun de nos clients particuliers et professionnels.',
  },
  {
    icon: 'eco',
    title: 'Solutions Durables',
    desc: 'Nous proposons des solutions respectueuses de l\'environnement, notamment pour l\'isolation thermique et les systèmes de chauffage économes en énergie.',
  },
  {
    icon: 'support_agent',
    title: 'Service Après-Vente',
    desc: 'Notre engagement ne s\'arrête pas à la livraison. Nous assurons un suivi post-chantier et intervenons rapidement en cas de besoin.',
  },
];

const guarantees = [
  { icon: 'shield', label: 'Assurance Décennale', sub: 'Couverture 10 ans sur nos travaux' },
  { icon: 'verified', label: 'RC Professionnelle', sub: 'Responsabilité civile complète' },
  { icon: 'workspace_premium', label: 'Artisans Qualifiés', sub: 'Équipe formée et expérimentée' },
  { icon: 'price_check', label: 'Devis Gratuit', sub: 'Sans engagement, sans surprise' },
];

function ValueCard({ value, index }: { value: typeof values[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="service-icon-wrap group-hover:bg-amber/20 transition-colors">
        <span className="material-icons text-amber text-3xl">{value.icon}</span>
      </div>
      <h3 className="font-heading font-bold text-navy text-lg mb-3">{value.title}</h3>
      <p className="text-charcoal/70 text-sm leading-relaxed">{value.desc}</p>
    </div>
  );
}

export default function About() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className={`text-amber font-semibold text-sm uppercase tracking-widest mb-4 block transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Notre Histoire
          </span>
          <h1
            className={`font-heading text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            À Propos d'EGR Concept
          </h1>
          <p
            className={`text-white/70 text-lg max-w-3xl mx-auto transition-all duration-700 delay-200 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            Entreprise générale de rénovation spécialisée en électricité et décoration, 
            au service des particuliers et professionnels du Nord et Nord-Pas-de-Calais.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-charcoal/50">
            <Link to="/" className="hover:text-amber transition-colors">Accueil</Link>
            <span className="material-icons text-xs">chevron_right</span>
            <span className="text-navy font-medium">À Propos</span>
          </nav>
        </div>
      </div>

      {/* ─── STORY ─── */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-3 block">Qui sommes-nous ?</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                Votre Partenaire de Confiance pour Tous Vos Travaux dans le Nord
              </h2>
              <div className="space-y-4 text-charcoal/80 leading-relaxed">
                <p>
                  <strong className="text-navy">EGR Concept</strong> est une entreprise du bâtiment spécialisée en 
                  électricité générale et décoration, intervenant dans le <strong>Nord et le Nord-Pas-de-Calais</strong> 
                  (Lille, Roubaix, Tourcoing, Dunkerque, Valenciennes, Douai, Arras, Béthune).
                </p>
                <p>
                  Notre expertise couvre l'ensemble des métiers du bâtiment : <strong>Installation – Maintenance – 
                  Rénovation – Dépannage</strong>. Nous accompagnons aussi bien les particuliers que les professionnels 
                  sur tous types de projets, de la simple réparation à la rénovation complète d'un logement ou d'un 
                  local commercial.
                </p>
                <p>
                  Grâce à nos <strong>plusieurs années d'expérience</strong> dans la région, nous avons développé 
                  une expertise reconnue et une réputation solide basée sur la qualité de nos prestations, le respect 
                  des délais et la satisfaction de nos clients.
                </p>
                <p>
                  Notre équipe de techniciens qualifiés et certifiés est à votre écoute pour répondre à tous vos 
                  besoins en matière de <strong>rénovation dans le Nord-Pas-de-Calais</strong>.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/devis"
                  className="bg-amber text-navy font-bold px-7 py-3 rounded-xl hover:bg-amber-500 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span className="material-icons">request_quote</span>
                  Devis Gratuit
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-navy text-navy font-semibold px-7 py-3 rounded-xl hover:bg-navy hover:text-white transition-all inline-flex items-center gap-2"
                >
                  <span className="material-icons">contact_phone</span>
                  Nous Contacter
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6474459/pexels-photo-6474459.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
                  alt="Équipe EGR Concept rénovation Nord-Pas-de-Calais"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-navy rounded-2xl p-5 shadow-xl text-center">
                <div className="font-heading font-bold text-amber text-3xl">500+</div>
                <div className="text-white/80 text-sm">Chantiers réalisés</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-3 block">Notre ADN</span>
            <h2 className="section-title">Nos Valeurs</h2>
            <p className="section-subtitle mx-auto text-center">
              Chaque projet est une opportunité de démontrer notre engagement envers l'excellence 
              et la satisfaction de nos clients dans le Nord.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <ValueCard key={v.title} value={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── GUARANTEES ─── */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Nos Garanties pour Votre Tranquillité
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Artisan qualifié et assuré, EGR Concept vous offre toutes les garanties nécessaires 
              pour réaliser vos travaux en toute sérénité.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g) => (
              <div key={g.label} className="bg-white/10 rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 transition-colors">
                <span className="material-icons text-amber text-4xl mb-4">{g.icon}</span>
                <h3 className="font-heading font-bold text-white text-base mb-2">{g.label}</h3>
                <p className="text-white/60 text-xs">{g.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM / EXPERTISE ─── */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/15798783/pexels-photo-15798783.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
                  alt="Chantier rénovation EGR Concept Nord"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-3 block">Notre Expertise</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                Une Équipe Qualifiée au Service du Nord-Pas-de-Calais
              </h2>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Notre équipe pluridisciplinaire réunit des techniciens spécialisés dans chaque corps 
                de métier. Électriciens, plombiers, carreleurs, peintres, plâtriers — tous partagent 
                la même exigence de qualité et le même souci du détail.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Électricité générale', level: 95 },
                  { label: 'Revêtement de sol & murs', level: 90 },
                  { label: 'Plomberie sanitaire', level: 88 },
                  { label: 'Rénovation intérieure complète', level: 92 },
                ].map((skill) => (
                  <div key={skill.label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-navy font-semibold text-sm">{skill.label}</span>
                      <span className="text-amber font-bold text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 bg-amber">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy mb-4">
            Prêt à Démarrer Votre Projet de Rénovation ?
          </h2>
          <p className="text-navy/70 mb-8">
            Contactez-nous pour un devis gratuit et sans engagement dans tout le Nord-Pas-de-Calais.
          </p>
          <Link
            to="/devis"
            className="bg-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-navy/90 transition-all hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2"
          >
            <span className="material-icons">request_quote</span>
            Demander un Devis Gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
