import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: 'layers',
    title: 'Revêtement de Sol & Murs',
    desc: 'Pose de carrelage, parquet, stratifié, faïence. Finitions soignées et durables.',
    slug: 'revetement',
  },
  {
    icon: 'bolt',
    title: 'Électricité',
    desc: 'Installation, mise aux normes, dépannage électrique pour particuliers et professionnels.',
    slug: 'electricite',
  },
  {
    icon: 'plumbing',
    title: 'Plomberie',
    desc: 'Installations sanitaires, réparations, remplacement de canalisations et dépannage.',
    slug: 'plomberie',
  },
  {
    icon: 'format_paint',
    title: 'Peinture',
    desc: 'Peinture intérieure et extérieure, enduits décoratifs, finitions de haute qualité.',
    slug: 'peinture',
  },
  {
    icon: 'home_repair_service',
    title: 'Rénovation Intérieure',
    desc: 'Rénovation complète de logements, aménagement intérieur et transformation d\'espaces.',
    slug: 'renovation',
  },
  {
    icon: 'apartment',
    title: 'Plâtrerie & Isolation',
    desc: 'Pose de cloisons, faux-plafonds, isolation thermique et phonique.',
    slug: 'platrerie',
  },
  {
    icon: 'air',
    title: 'VMC & Ventilation',
    desc: 'Installation et entretien de systèmes VMC, aération et ventilation.',
    slug: 'vmc',
  },
  {
    icon: 'local_fire_department',
    title: 'Chauffage',
    desc: 'Installation et maintenance de systèmes de chauffage central, pompes à chaleur.',
    slug: 'chauffage',
  },
];

const stats = [
  { icon: 'emoji_events', value: '20+', label: 'Années d\'expérience' },
  { icon: 'check_circle', value: '500+', label: 'Chantiers réalisés' },
  { icon: 'star', value: '100%', label: 'Clients satisfaits' },
  { icon: 'verified', value: 'Assuré', label: 'Décennale & RC Pro' },
];

const cities = [
  'Lille', 'Roubaix', 'Tourcoing', 'Dunkerque',
  'Valenciennes', 'Douai', 'Arras', 'Béthune',
  'Lens', 'Maubeuge', 'Cambrai', 'Hazebrouck',
];

const testimonials = [
  {
    name: 'Marie L.',
    city: 'Lille',
    text: 'Très professionnels ! La rénovation de notre appartement s\'est faite dans les délais et la qualité est au rendez-vous. Je recommande vivement EGR Concept.',
    stars: 5,
  },
  {
    name: 'Thomas R.',
    city: 'Roubaix',
    text: 'Excellent travail pour la pose de notre parquet et la peinture. Équipe sérieuse, propre et ponctuelle. Prix juste pour un travail de qualité.',
    stars: 5,
  },
  {
    name: 'Sophie D.',
    city: 'Tourcoing',
    text: 'Rénovation complète de ma salle de bain. Résultat impeccable, délais respectés. Je ferai de nouveau appel à eux pour mes prochains travaux.',
    stars: 5,
  },
];

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`stat-card bg-white rounded-xl p-6 shadow-md transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <span className="material-icons text-amber text-3xl mb-3">{icon}</span>
      <div className="text-3xl font-heading font-bold text-navy mb-1">{value}</div>
      <div className="text-charcoal/70 text-sm">{label}</div>
    </div>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="service-icon-wrap group-hover:bg-amber/20 transition-colors">
        <span className="material-icons text-amber text-3xl">{service.icon}</span>
      </div>
      <h3 className="font-heading font-bold text-navy text-lg mb-2">{service.title}</h3>
      <p className="text-charcoal/70 text-sm leading-relaxed mb-4">{service.desc}</p>
      <Link
        to="/services"
        className="text-amber font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
      >
        En savoir plus
        <span className="material-icons text-base">arrow_forward</span>
      </Link>
    </div>
  );
}

export default function Home() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

  return (
    <>
      {/* SEO: Page-level meta via document.title effect */}

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1B2A4A 0%, #253d6b 60%, #1B2A4A 100%)',
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Background image overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/15798784/pexels-photo-15798784.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
            alt="Rénovation intérieure Nord-Pas-de-Calais"
            className="w-full h-full object-cover opacity-15"
          />
        </div>

        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-amber/20 border border-amber/40 text-amber px-4 py-2 rounded-full text-sm font-semibold mb-8 transition-all duration-700 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="material-icons text-base">location_on</span>
            Nord & Nord-Pas-de-Calais
          </div>

          {/* H1 */}
          <h1
            className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-100 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Votre Expert en{' '}
            <span className="text-amber">Rénovation</span>
            <br />
            dans le{' '}
            <span className="text-amber">Nord</span>
          </h1>

          <p
            className={`text-white/80 text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            EGR Concept — Entreprise Générale de Rénovation à Lille, Roubaix, Tourcoing et dans tout le 
            Nord-Pas-de-Calais. Électricité, plomberie, revêtement de sol, peinture, VMC & chauffage.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-300 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Link
              to="/devis"
              className="bg-amber text-navy font-bold px-8 py-4 rounded-xl hover:bg-amber-500 transition-all duration-300 text-base shadow-lg hover:shadow-amber/40 hover:-translate-y-1 inline-flex items-center gap-2"
            >
              <span className="material-icons">request_quote</span>
              Demander un Devis Gratuit
            </Link>
            <a
              href="tel:0619020888"
              className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:border-amber hover:text-amber transition-all duration-300 text-base inline-flex items-center gap-2"
            >
              <span className="material-icons">phone</span>
              06 19 02 08 88
            </a>
          </div>

          {/* Quick Stats Row */}
          <div
            className={`flex flex-wrap justify-center gap-8 transition-all duration-700 delay-400 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {[
              { icon: 'verified', text: 'Artisan Qualifié & Assuré' },
              { icon: 'schedule', text: 'Délais Respectés' },
              { icon: 'workspace_premium', text: 'Garantie de Qualité' },
              { icon: 'lightbulb', text: 'Conseils' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/80 text-sm">
                <span className="material-icons text-amber text-base">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-icons text-white/40 text-4xl">keyboard_arrow_down</span>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-offwhite py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <StatCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-3 block">Nos Prestations</span>
            <h2 className="section-title">
              Tous Vos Travaux, Un Seul Interlocuteur
            </h2>
            <p className="section-subtitle mx-auto text-center">
              EGR Concept intervient sur tous types de chantiers dans le Nord-Pas-de-Calais — 
              de la simple réparation à la rénovation complète.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-navy/90 transition-all duration-300 hover:-translate-y-0.5 shadow-md"
            >
              Voir tous nos services
              <span className="material-icons">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-3 block">Pourquoi nous choisir ?</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                L'Excellence au Service de Votre Rénovation dans le Nord
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Depuis plusieurs années, EGR Concept accompagne particuliers et professionnels 
                dans leurs projets de rénovation à Lille, Roubaix, Tourcoing et dans tout le Nord-Pas-de-Calais.
              </p>
              <div className="space-y-5">
                {[
                  { icon: 'workspace_premium', title: 'Garantie Qualité', desc: 'Matériaux de qualité supérieure et finitions soignées sur chaque chantier.' },
                  { icon: 'schedule', title: 'Respect des Délais', desc: 'Engagement contractuel sur les délais d\'exécution pour tous nos chantiers.' },
                  { icon: 'verified_user', title: 'Artisan Licencié & Assuré', desc: 'Équipe qualifiée, assurée en décennale et responsabilité civile professionnelle.' },
                  { icon: 'groups', title: 'Accompagnement Personnalisé', desc: 'Un interlocuteur dédié du devis jusqu\'à la livraison de votre chantier.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 min-w-[48px] bg-amber/20 rounded-xl flex items-center justify-center">
                      <span className="material-icons text-amber">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white text-base mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  to="/a-propos"
                  className="inline-flex items-center gap-2 bg-amber text-navy font-bold px-7 py-3 rounded-xl hover:bg-amber-500 transition-all hover:-translate-y-0.5"
                >
                  En savoir plus sur nous
                  <span className="material-icons">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Image side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6473978/pexels-photo-6473978.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800"
                  alt="Artisan rénovation Nord-Pas-de-Calais EGR Concept"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-amber rounded-2xl p-5 shadow-xl">
                <div className="font-heading font-bold text-navy text-2xl">20+</div>
                <div className="text-navy/80 text-sm font-medium">Années d'expérience</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3">
                <span className="material-icons text-amber text-3xl">verified</span>
                <div>
                  <div className="font-bold text-navy text-sm">Assuré</div>
                  <div className="text-charcoal/60 text-xs">Décennale & RC Pro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ZONE D'INTERVENTION ─── */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-3 block">Secteur géographique</span>
            <h2 className="section-title">
              Notre Zone d'Intervention : Nord & Nord-Pas-de-Calais
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Électricien, plombier, peintre et rénovateur dans toute la région Nord.
              <br />
              Nous intervenons rapidement sur votre chantier.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {cities.map((city) => (
              <span key={city} className="zone-badge">
                <span className="material-icons text-amber text-sm">place</span>
                {city}
              </span>
            ))}
          </div>
          <div className="text-center">
            <p className="text-charcoal/60 text-sm mb-6">
              Et toutes les communes environnantes du Nord (59) et du Pas-de-Calais (62)
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-7 py-3 rounded-xl hover:bg-navy/90 transition-all hover:-translate-y-0.5"
            >
              <span className="material-icons">location_on</span>
              Vérifier si nous intervenons chez vous
            </Link>
          </div>
        </div>
      </section>

      {/* ─── GALLERY PREVIEW ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-3 block">Nos Réalisations</span>
            <h2 className="section-title">Chantiers Réalisés dans le Nord</h2>
            <p className="section-subtitle mx-auto text-center">
              Découvrez quelques-uns de nos travaux récents réalisés pour nos clients du Nord-Pas-de-Calais.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                url: 'https://images.pexels.com/photos/8146336/pexels-photo-8146336.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700',
                label: 'Rénovation Complète – Lille',
                type: 'Rénovation intérieure',
              },
              {
                url: 'https://images.pexels.com/photos/15798781/pexels-photo-15798781.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700',
                label: 'Travaux Plâtrerie – Roubaix',
                type: 'Plâtrerie & Isolation',
              },
              {
                url: 'https://images.pexels.com/photos/8146330/pexels-photo-8146330.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700',
                label: 'Parquet & Peinture – Tourcoing',
                type: 'Revêtement de sol',
              },
            ].map((img, i) => (
              <div key={i} className="gallery-item rounded-2xl shadow-md cursor-pointer" onClick={() => {}}>
                <img
                  src={img.url}
                  alt={img.label}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <div className="gallery-overlay rounded-2xl">
                  <div>
                    <div className="text-amber text-xs font-semibold mb-1">{img.type}</div>
                    <div className="text-white font-bold">{img.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 bg-navy text-white font-semibold px-7 py-3 rounded-xl hover:bg-navy/90 transition-all hover:-translate-y-0.5 shadow-md"
            >
              Voir toutes nos réalisations
              <span className="material-icons">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-amber font-semibold text-sm uppercase tracking-widest mb-3 block">Avis Clients</span>
            <h2 className="section-title">Ce Que Disent Nos Clients du Nord</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(t.stars)].map((_, s) => (
                    <span key={s} className="material-icons text-amber text-base">star</span>
                  ))}
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center">
                    <span className="material-icons text-white text-base">person</span>
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{t.name}</div>
                    <div className="text-charcoal/50 text-xs flex items-center gap-1">
                      <span className="material-icons text-xs">place</span>
                      {t.city}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-20 bg-amber">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Un Projet de Rénovation dans le Nord ?
          </h2>
          <p className="text-navy/70 text-lg mb-8">
            Contactez-nous pour un devis gratuit et sans engagement. 
            Intervention rapide sur Lille, Roubaix, Tourcoing et toute la région.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/devis"
              className="bg-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-navy/90 transition-all hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2 text-base"
            >
              <span className="material-icons">request_quote</span>
              Demander un Devis Gratuit
            </Link>
            <a
              href="tel:0619020888"
              className="bg-white text-navy font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all hover:-translate-y-0.5 shadow-md inline-flex items-center gap-2 text-base"
            >
              <span className="material-icons">phone</span>
              06 19 02 08 88
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
