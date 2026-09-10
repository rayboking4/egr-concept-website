import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    id: 'revetement',
    icon: 'layers',
    title: 'Revêtement de Sol et de Murs',
    shortTitle: 'Revêtement',
    seoTitle: 'Pose de revêtement de sol et murs à Lille et dans le Nord',
    description:
      'Expert en pose de revêtements de sol et de murs dans le Nord-Pas-de-Calais, EGR Concept réalise l\'installation de tous types de revêtements avec précision et soin. Du carrelage, parquet, vinyle, en passant par le stratifié et la faïence, nous garantissons un résultat impeccable.',
    prestations: [
      'Pose de carrelage sol et mur',
      'Parquet massif et contrecollé',
      'Sol stratifié et vinyle',
      'Faïence salle de bain et cuisine',
      'Mosaïque et Pierre naturelle',
      'Moquette et sol souple',
      'Ragréage et préparation des supports',
      'Pose de plinthes et accessoires',
    ],
    img: 'https://images.pexels.com/photos/8146337/pexels-photo-8146337.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700',
  },
  {
    id: 'electricite',
    icon: 'bolt',
    title: 'Électricité Générale',
    shortTitle: 'Électricité',
    seoTitle: 'Électricien dans le Nord-Pas-de-Calais – Installation & Dépannage',
    description:
      'Électricien qualifié dans le Nord, EGR Concept intervient pour toutes vos installations électriques, mises aux normes NF C 15-100 et dépannages d\'urgence à Lille, Roubaix, Tourcoing et dans toute la région.',
    prestations: [
      'Installation électrique neuve et rénovation',
      'Mise aux normes NF C 15-100',
      'Tableau électrique et disjoncteurs',
      'Prises, interrupteurs, éclairage',
      'Domotique et éclairage connecté',
      'Bornes de recharge véhicule électrique',
      'Éclairage extérieur et sécurité',
      'Dépannage électrique urgent',
    ],
    img: 'https://images.pexels.com/photos/15798782/pexels-photo-15798782.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700',
  },
  {
    id: 'plomberie',
    icon: 'plumbing',
    title: 'Plomberie & Sanitaires',
    shortTitle: 'Plomberie',
    seoTitle: 'Plombier dans le Nord-Pas-de-Calais – Installation & Réparation',
    description:
      'Plombier professionnel dans le Nord, notre équipe assure l\'installation, la rénovation et le dépannage de tous vos équipements sanitaires. Robinetterie, WC, douche, baignoire, canalisations — nous intervenons rapidement sur Lille et toute la région.',
    prestations: [
      'Installation de salle de bain complète',
      'Remplacement de baignoire et douche',
      'Pose de WC, vasque, robinetterie',
      'Réparation de fuites et canalisations',
      'Débouchage de canalisations',
      'Chauffe-eau et ballon thermodynamique',
      'Soudure et remplacement de tuyauterie',
      'Dépannage plomberie urgent',
    ],
    img: 'https://images.pexels.com/photos/8146158/pexels-photo-8146158.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700',
  },
  {
    id: 'peinture',
    icon: 'format_paint',
    title: 'Peinture Intérieure & Extérieure',
    shortTitle: 'Peinture',
    seoTitle: 'Peintre professionnel à Tourcoing, Lille, Nord-Pas-de-Calais',
    description:
      'Peintre professionnel dans le Nord-Pas-de-Calais, EGR Concept réalise tous vos travaux de peinture intérieure et extérieure avec des matériaux de qualité. Préparation des supports, application soignée, rendu parfait.',
    prestations: [
      'Peinture murale et plafond',
      'Revêtements muraux et papier peint',
      'Enduits décoratifs et béton ciré',
      'Peinture façade et extérieur',
      'Lasure et vernis boiseries',
      'Préparation et rebouchage des supports',
      'Peinture de protection métaux',
      'Conseil en colorimétrie',
    ],
    img: 'https://images.pexels.com/photos/8082324/pexels-photo-8082324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700',
  },
  {
    id: 'renovation',
    icon: 'home_repair_service',
    title: 'Rénovation Intérieure Complète',
    shortTitle: 'Rénovation',
    seoTitle: 'Rénovation intérieure dans le Nord-Pas-de-Calais – EGR Concept',
    description:
      'Spécialiste de la rénovation intérieure dans le Nord, EGR Concept prend en charge vos projets de A à Z : de la conception à la livraison clé en main. Rénovation d\'appartement, maison, local commercial à Lille, Dunkerque, Valenciennes.',
    prestations: [
      'Rénovation complète d\'appartement',
      'Rénovation de maison individuelle',
      'Aménagement de combles',
      'Réhabilitation de locaux commerciaux',
      'Création et suppression de cloisons',
      'Aménagement de cuisine et salle de bain',
      'Rénovation de façade',
      'Gestion de chantier clé en main',
    ],
    img: 'https://images.pexels.com/photos/15798780/pexels-photo-15798780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700',
  },
  {
    id: 'platrerie',
    icon: 'apartment',
    title: 'Plâtrerie & Isolation',
    shortTitle: 'Plâtrerie',
    seoTitle: 'Artisan plâtrier isolateur dans le Nord – EGR Concept',
    description:
      'Artisan plâtrier qualifié dans le Nord, EGR Concept réalise tous vos travaux de plâtrerie, pose de cloisons et d\'isolation thermique et phonique. Économies d\'énergie et confort amélioré pour votre logement.',
    prestations: [
      'Pose de cloisons en placo',
      'Faux-plafonds et combles aménagés',
      'Isolation thermique par l\'intérieur',
      'Isolation phonique et acoustique',
      'Enduits et crépis',
      'Doublage de murs',
      'Traitement de l\'humidité',
      'Habillage de conduits et gaines',
    ],
    img: 'https://images.pexels.com/photos/15798781/pexels-photo-15798781.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700',
  },
  {
    id: 'vmc',
    icon: 'air',
    title: 'VMC – Ventilation – Aération',
    shortTitle: 'VMC',
    seoTitle: 'Installation VMC dans le Nord-Pas-de-Calais – Ventilation & Aération',
    description:
      'Spécialiste en ventilation mécanique contrôlée dans le Nord, EGR Concept installe et entretient vos systèmes VMC simple flux et double flux pour garantir une qualité d\'air optimale dans votre logement ou local professionnel.',
    prestations: [
      'Installation VMC simple flux',
      'Installation VMC double flux',
      'VMC hygroréglable',
      'Entretien et nettoyage de VMC',
      'Remplacement de caisson de ventilation',
      'Pose de bouches d\'aération',
      'Extraction dans cuisines et salles de bain',
      'Vérification et réglage des débits',
    ],
    img: 'https://images.pexels.com/photos/7031603/pexels-photo-7031603.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700',
  },
  {
    id: 'chauffage',
    icon: 'local_fire_department',
    title: 'Chauffage & Climatisation',
    shortTitle: 'Chauffage',
    seoTitle: 'Chauffagiste dans le Nord-Pas-de-Calais – Installation & Entretien',
    description:
      'Chauffagiste qualifié dans le Nord, EGR Concept installe, entretient et répare tous vos systèmes de chauffage. Chaudière gaz, pompe à chaleur, radiateurs électriques — nous trouvons la solution la plus adaptée à votre logement et à votre budget.',
    prestations: [
      'Installation de chaudière gaz et fioul',
      'Pompe à chaleur air/eau et air/air',
      'Radiateurs et plancher chauffant',
      'Remplacement de chaudière ancienne',
      'Thermostat connecté et programmable',
      'Climatisation réversible',
      'Dépannage chauffage urgent',
    ],
    img: 'https://images.pexels.com/photos/7533848/pexels-photo-7533848.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=700',
  },
];

function ServiceSection({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const isEven = index % 2 === 0;

  return (
    <section
      id={service.id}
      className={`py-16 ${isEven ? 'bg-white' : 'bg-offwhite'}`}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-14 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div
            className={`${!isEven ? 'lg:order-2' : ''} transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : isEven ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber/15 rounded-xl flex items-center justify-center">
                <span className="material-icons text-amber text-2xl">{service.icon}</span>
              </div>
              <span className="text-amber font-semibold text-sm uppercase tracking-widest">
                {service.shortTitle}
              </span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-3">
              {service.title}
            </h2>
            <p className="text-amber/80 text-sm font-medium mb-4 italic">{service.seoTitle}</p>
            <p className="text-charcoal/80 leading-relaxed mb-6">{service.description}</p>

            <div className="bg-navy/5 rounded-xl p-5 mb-6">
              <h3 className="font-heading font-bold text-navy text-sm mb-3 uppercase tracking-wide">
                Nos prestations incluent :
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.prestations.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-charcoal/80 text-sm">
                    <span className="material-icons text-amber text-sm">check_circle</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/devis"
              className="inline-flex items-center gap-2 bg-amber text-navy font-bold px-6 py-3 rounded-xl hover:bg-amber-500 transition-all hover:-translate-y-0.5 shadow-md text-sm"
            >
              <span className="material-icons text-base">request_quote</span>
              Devis Gratuit pour ce Service
            </Link>
          </div>

          {/* Image */}
          <div
            className={`${!isEven ? 'lg:order-1' : ''} transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : isEven ? 'opacity-0 translate-x-10' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={service.img}
                alt={`${service.title} Nord-Pas-de-Calais – EGR Concept`}
                className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

  return (
    <>
      {/* Page Hero with Blended Image Background */}
      <section className="relative bg-navy py-20 lg:py-28 overflow-hidden">
        {/* Background Key Handover Image with Navy Gradient Blend */}
        <div className="absolute inset-0 z-0">
          <img
            src="/EGR hand key.jpg"
            alt="EGR Concept Remise de clés travaux rénovation"
            className="w-full h-full object-cover object-center opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />
        </div>

        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className={`text-amber font-semibold text-sm uppercase tracking-widest mb-4 block transition-all duration-700 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Nos Prestations
          </span>
          <h1
            className={`font-heading text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Tous Vos Travaux de Rénovation<br />
            dans le <span className="text-amber">Nord-Pas-de-Calais</span>
          </h1>
          <p
            className={`text-white/80 text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
              heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Électricité, plomberie, revêtement de sol, peinture, rénovation intérieure, 
            plâtrerie, VMC et chauffage — EGR Concept est votre partenaire unique pour tous vos chantiers.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-charcoal/50">
            <Link to="/" className="hover:text-amber transition-colors">Accueil</Link>
            <span className="material-icons text-xs">chevron_right</span>
            <span className="text-navy font-medium">Services</span>
          </nav>
        </div>
      </div>

      {/* Services Quick Nav */}
      <section className="bg-white py-8 border-b border-gray-100 sticky top-[72px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-1.5 whitespace-nowrap px-4 py-2 bg-navy/5 hover:bg-amber hover:text-navy text-navy/80 rounded-full text-sm font-semibold transition-all"
              >
                <span className="material-icons text-sm">{s.icon}</span>
                {s.shortTitle}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => (
        <ServiceSection key={service.id} service={service} index={i} />
      ))}

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Besoin d'un Artisan dans le Nord-Pas-de-Calais ?
          </h2>
          <p className="text-white/60 mb-8">
            Demandez votre devis gratuit et sans engagement. EGR Concept intervient rapidement 
            à Lille, Roubaix, Tourcoing, Dunkerque et toute la région.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/devis"
              className="bg-amber text-navy font-bold px-8 py-4 rounded-xl hover:bg-amber-500 transition-all hover:-translate-y-0.5 shadow-lg inline-flex items-center justify-center gap-2"
            >
              <span className="material-icons">request_quote</span>
              Demander un Devis Gratuit
            </Link>
            <a
              href="tel:0619020888"
              className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:border-amber hover:text-amber transition-all inline-flex items-center justify-center gap-2"
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
