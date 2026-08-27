import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

type Category = 'tous' | 'renovation' | 'electricite' | 'revetement' | 'peinture' | 'sdb' | 'platrerie';

const projects = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/8146336/pexels-photo-8146336.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    title: 'Rénovation Complète Appartement',
    location: 'Lille',
    category: 'renovation' as Category,
    label: 'Rénovation intérieure',
    desc: 'Rénovation intégrale d\'un appartement T3 : électricité, plomberie, revêtements, peinture.',
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/15798781/pexels-photo-15798781.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    title: 'Travaux Plâtrerie & Isolation',
    location: 'Roubaix',
    category: 'platrerie' as Category,
    label: 'Plâtrerie & Isolation',
    desc: 'Pose de cloisons en placo, isolation thermique et phonique, faux-plafond.',
  },
  {
    id: 3,
    img: 'https://images.pexels.com/photos/8146330/pexels-photo-8146330.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    title: 'Pose Parquet & Peinture',
    location: 'Tourcoing',
    category: 'revetement' as Category,
    label: 'Revêtement de sol',
    desc: 'Pose de parquet flottant contrecollé et peinture murale dans un salon.',
  },
  {
    id: 4,
    img: 'https://images.pexels.com/photos/8146158/pexels-photo-8146158.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    title: 'Rénovation Maison Individuelle',
    location: 'Dunkerque',
    category: 'renovation' as Category,
    label: 'Rénovation intérieure',
    desc: 'Rénovation complète d\'une maison : enduits, revêtements, électricité mise aux normes.',
  },
  {
    id: 5,
    img: 'https://images.pexels.com/photos/7533848/pexels-photo-7533848.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    title: 'Aménagement Cuisine & Salon',
    location: 'Valenciennes',
    category: 'renovation' as Category,
    label: 'Rénovation intérieure',
    desc: 'Réaménagement complet cuisine ouverte et salon avec revêtements sol unifiés.',
  },
  {
    id: 6,
    img: 'https://images.pexels.com/photos/15798783/pexels-photo-15798783.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    title: 'Travaux Électricité Mise aux Normes',
    location: 'Douai',
    category: 'electricite' as Category,
    label: 'Électricité',
    desc: 'Mise aux normes NF C 15-100, remplacement tableau électrique et installation complète.',
  },
  {
    id: 7,
    img: 'https://images.pexels.com/photos/8146337/pexels-photo-8146337.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    title: 'Carrelage & Revêtement Sol',
    location: 'Arras',
    category: 'revetement' as Category,
    label: 'Revêtement de sol',
    desc: 'Pose de carrelage grand format dans une pièce à vivre avec ragréage préalable.',
  },
  {
    id: 8,
    img: 'https://images.pexels.com/photos/8082324/pexels-photo-8082324.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    title: 'Rénovation Combles & Isolation',
    location: 'Béthune',
    category: 'platrerie' as Category,
    label: 'Plâtrerie & Isolation',
    desc: 'Aménagement de combles perdus en chambre avec isolation et cloisons.',
  },
  {
    id: 9,
    img: 'https://images.pexels.com/photos/15798780/pexels-photo-15798780.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    title: 'Chantier Rénovation Globale',
    location: 'Lille',
    category: 'renovation' as Category,
    label: 'Rénovation intérieure',
    desc: 'Rénovation globale d\'un local commercial : démolition, reconstruction, finitions.',
  },
  {
    id: 10,
    img: 'https://images.pexels.com/photos/7031603/pexels-photo-7031603.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    title: 'Peinture & Enduits Décoratifs',
    location: 'Roubaix',
    category: 'peinture' as Category,
    label: 'Peinture',
    desc: 'Application d\'enduits décoratifs et peinture mate dans un appartement haussmannien.',
  },
  {
    id: 11,
    img: 'https://images.pexels.com/photos/8146156/pexels-photo-8146156.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    title: 'Rénovation Pièce à Vivre',
    location: 'Tourcoing',
    category: 'renovation' as Category,
    label: 'Rénovation intérieure',
    desc: 'Transformation complète d\'une pièce à vivre : sol, murs, plafond et menuiseries.',
  },
  {
    id: 12,
    img: 'https://images.pexels.com/photos/5484744/pexels-photo-5484744.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800',
    title: 'Structure & Charpente Intérieure',
    location: 'Valenciennes',
    category: 'renovation' as Category,
    label: 'Rénovation intérieure',
    desc: 'Travaux de structure intérieure, création d\'ouvertures et renforcement charpente.',
  },
];

const categories: { id: Category; label: string; icon: string }[] = [
  { id: 'tous', label: 'Tous les projets', icon: 'grid_view' },
  { id: 'renovation', label: 'Rénovation', icon: 'home_repair_service' },
  { id: 'electricite', label: 'Électricité', icon: 'bolt' },
  { id: 'revetement', label: 'Revêtements', icon: 'layers' },
  { id: 'peinture', label: 'Peinture', icon: 'format_paint' },
  { id: 'platrerie', label: 'Plâtrerie', icon: 'apartment' },
];

function GalleryCard({ project, index, onClick }: { project: typeof projects[0]; index: number; onClick: () => void }) {
  const [imgError, setImgError] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`gallery-item bg-white rounded-2xl shadow-sm hover:shadow-xl cursor-pointer group transition-all duration-500 flex flex-col ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      {/* Image Area */}
      <div className="relative overflow-hidden rounded-t-2xl h-56 shrink-0">
        {!imgError ? (
          <img
            src={project.img}
            alt={`${project.title} – EGR Concept ${project.location}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-navy/10 flex items-center justify-center">
            <span className="material-icons text-navy/30 text-6xl">image</span>
          </div>
        )}

        {/* Hover Zoom Overlay */}
        <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="material-icons text-white text-5xl drop-shadow-md">zoom_in</span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-amber text-navy text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
            {project.label}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col grow border border-t-0 border-gray-100 rounded-b-2xl">
        <h3 className="font-heading font-bold text-navy text-lg mb-2">{project.title}</h3>
        <p className="text-charcoal/50 text-sm flex items-center gap-1.5 mb-3">
          <span className="material-icons text-sm">place</span>
          {project.location}
        </p>
        <p className="text-charcoal/70 text-sm leading-relaxed line-clamp-2">
          {project.desc}
        </p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('tous');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

  const filtered = activeCategory === 'tous'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className={`text-amber font-semibold text-sm uppercase tracking-widest mb-4 block transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Portfolio
          </span>
          <h1
            className={`font-heading text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            Nos Réalisations dans le Nord
          </h1>
          <p
            className={`text-white/70 text-lg max-w-3xl mx-auto transition-all duration-700 delay-200 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            Découvrez nos chantiers réalisés à Lille, Roubaix, Tourcoing, Dunkerque et dans tout 
            le Nord-Pas-de-Calais. Chaque projet témoigne de notre savoir-faire et de notre exigence qualité.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-charcoal/50">
            <Link to="/" className="hover:text-amber transition-colors">Accueil</Link>
            <span className="material-icons text-xs">chevron_right</span>
            <span className="text-navy font-medium">Réalisations</span>
          </nav>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-amber text-navy shadow-md shadow-amber/30'
                    : 'bg-navy/5 text-navy/70 hover:bg-amber/15 hover:text-navy'
                }`}
              >
                <span className="material-icons text-sm">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center mb-6">
            <p className="text-charcoal/60 text-sm">
              <span className="font-bold text-navy">{filtered.length}</span> réalisation{filtered.length > 1 ? 's' : ''} trouvée{filtered.length > 1 ? 's' : ''}
            </p>
            <span className="text-amber text-sm font-semibold flex items-center gap-1">
              <span className="material-icons text-sm">place</span>
              Nord & Nord-Pas-de-Calais
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <GalleryCard 
                key={project.id} 
                project={project} 
                index={i} 
                onClick={() => setSelectedProject(project)} 
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <span className="material-icons text-6xl text-navy/20 mb-4">search_off</span>
              <p className="text-charcoal/50">Aucune réalisation dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Upload Callout */}
      <section className="py-10 bg-offwhite border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center gap-4 shadow-sm border border-gray-100">
            <span className="material-icons text-navy text-3xl">photo_camera</span>
            <p className="text-charcoal/80 text-sm sm:text-base font-medium">
              Vous avez des photos de nos chantiers ? Envoyez-les nous pour enrichir notre galerie ! 
              <a href="mailto:contact@egrconcept.fr" className="text-amber hover:underline ml-1 font-bold">
                contact@egrconcept.fr
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy mb-4">
            Votre Projet Sera Notre Prochain Chef-d'Œuvre
          </h2>
          <p className="text-navy/70 mb-8">
            Rejoignez nos clients satisfaits dans le Nord-Pas-de-Calais. 
            Contactez-nous pour un devis gratuit et personnalisé.
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

      {/* Modal / Lightbox */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-6 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <span className="material-icons">close</span>
            </button>

            {/* Image Area */}
            <div className="w-full h-[40vh] sm:h-[60vh] bg-navy/10 relative shrink-0">
              <img 
                src={selectedProject.img} 
                alt={`${selectedProject.title} – EGR Concept ${selectedProject.location}`} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <h3 className="font-heading font-bold text-navy text-2xl md:text-3xl">
                  {selectedProject.title}
                </h3>
                <span className="bg-amber text-navy text-sm font-bold px-5 py-2 rounded-full shrink-0">
                  {selectedProject.label}
                </span>
              </div>
              
              <p className="text-charcoal/80 text-base leading-relaxed mb-6">
                {selectedProject.desc}
              </p>
              
              <div className="flex items-center gap-2 text-charcoal/60 text-sm font-medium">
                <span className="material-icons text-amber text-xl">place</span>
                {selectedProject.location} – Nord-Pas-de-Calais
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
