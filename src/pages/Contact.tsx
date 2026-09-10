import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const cities = [
  'Lille', 'Roubaix', 'Tourcoing', 'Dunkerque',
  'Valenciennes', 'Douai', 'Arras', 'Béthune',
  'Lens', 'Maubeuge', 'Cambrai', 'Hazebrouck',
  'Bruay-la-Buissière', 'Denain', 'Calais', 'Boulogne-sur-Mer',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const mailtoLink = `mailto:contact@egrconcept.fr?subject=${encodeURIComponent(
      `[Contact EGR Concept] ${formData.subject || 'Nouveau message'}`
    )}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nTéléphone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(mailtoLink, '_blank');
    }, 1000);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className={`text-amber font-semibold text-sm uppercase tracking-widest mb-4 block transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Nous Joindre
          </span>
          <h1
            className={`font-heading text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            Contactez EGR Concept
          </h1>
          <p
            className={`text-white/70 text-lg max-w-3xl mx-auto transition-all duration-700 delay-200 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            Une question ? Un projet ? Nos experts en rénovation dans le Nord 
            sont disponibles du lundi au vendredi, de 8h à 18h.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-charcoal/50">
            <Link to="/" className="hover:text-amber transition-colors">Accueil</Link>
            <span className="material-icons text-xs">chevron_right</span>
            <span className="text-navy font-medium">Contact</span>
          </nav>
        </div>
      </div>

      {/* ─── CONTACT SECTION ─── */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                  Nos Coordonnées
                </h2>
              </div>

              {[
                {
                  icon: 'phone',
                  title: 'Téléphone',
                  content: '06 19 02 08 88',
                  sub: 'Lun–Ven 8h–18h | Sam sur RDV',
                  href: 'tel:0619020888',
                  color: 'bg-green-50 border-green-200',
                  iconColor: 'text-green-600',
                },
                {
                  icon: 'email',
                  title: 'Email',
                  content: 'contact@egrconcept.fr',
                  sub: 'Réponse sous 24h',
                  href: 'mailto:contact@egrconcept.fr',
                  color: 'bg-blue-50 border-blue-200',
                  iconColor: 'text-blue-600',
                },
                {
                  icon: 'location_on',
                  title: 'Adresse',
                  content: '60 rue François 1er',
                  sub: '57008, Paris',
                  href: 'https://maps.google.com/?q=60+rue+François+1er+57008+Paris',
                  color: 'bg-amber/10 border-amber/30',
                  iconColor: 'text-amber',
                },
                {
                  icon: 'schedule',
                  title: 'Horaires d\'ouverture',
                  content: 'Lun–Ven : 8h00 – 18h00',
                  sub: 'Samedi : sur rendez-vous',
                  href: null,
                  color: 'bg-navy/5 border-navy/20',
                  iconColor: 'text-navy',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border ${item.color} hover:shadow-md transition-shadow`}
                >
                  <div className={`w-12 h-12 min-w-[48px] rounded-xl flex items-center justify-center bg-white shadow-sm`}>
                    <span className={`material-icons ${item.iconColor} text-2xl`}>{item.icon}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm mb-0.5">{item.title}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-charcoal font-medium hover:text-amber transition-colors block"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <div className="text-charcoal font-medium">{item.content}</div>
                    )}
                    <div className="text-charcoal/50 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/33619020888?text=Bonjour%20EGR%20Concept%2C%20je%20souhaite%20vous%20contacter."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366] text-white rounded-2xl p-5 shadow-sm hover:bg-[#20b858] transition-colors"
              >
                <div className="w-12 h-12 min-w-[48px] bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-base">WhatsApp</div>
                  <div className="text-white/80 text-sm">Réponse rapide via WhatsApp</div>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                  Envoyez-nous un Message
                </h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <span className="material-icons text-green-600 text-4xl">check_circle</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-navy mb-2">Message Envoyé !</h3>
                    <p className="text-charcoal/70 mb-6">
                      Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                      className="bg-navy text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-navy/90 transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">Nom complet *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jean Dupont"
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="form-label">Téléphone *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="06 xx xx xx xx"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="form-label">Adresse email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jean@exemple.fr"
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label className="form-label">Sujet</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Sélectionner un sujet</option>
                        <option>Demande d'information</option>
                        <option>Demande de devis</option>
                        <option>Intervention urgente</option>
                        <option>Partenariat professionnel</option>
                        <option>Autre</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label">Votre message *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet ou votre demande..."
                        className="form-input resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-amber text-navy font-bold px-8 py-4 rounded-xl hover:bg-amber-500 transition-all hover:-translate-y-0.5 shadow-md inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <span className="material-icons animate-spin text-base">refresh</span>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <span className="material-icons">send</span>
                          Envoyer le Message
                        </>
                      )}
                    </button>

                    <p className="text-charcoal/40 text-xs text-center">
                      Vos données sont traitées de façon confidentielle. Réponse sous 24h ouvrées.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl font-bold text-white mb-3">
              Zone d'Intervention : Nord & Nord-Pas-de-Calais
            </h2>
            <p className="text-white/60">
              Rénovation, électricité, plomberie — EGR Concept intervient dans toutes ces villes et communes environnantes.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {cities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white font-medium px-4 py-2 rounded-full text-sm hover:bg-amber hover:text-navy transition-all duration-200"
              >
                <span className="material-icons text-amber text-sm">place</span>
                {city}
              </span>
            ))}
          </div>
          <p className="text-center text-white/40 text-sm mt-6">
            + Toutes les communes du Nord (59) et du Pas-de-Calais (62)
          </p>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gray-100 h-64 flex items-center justify-center">
        <div className="text-center">
          <span className="material-icons text-navy/30 text-6xl mb-3">map</span>
          <p className="text-navy/40 font-medium">Carte interactive</p>
          <a
            href="https://maps.google.com/?q=Nord-Pas-de-Calais,France"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber font-semibold text-sm mt-2 inline-flex items-center gap-1 hover:underline"
          >
            <span className="material-icons text-sm">open_in_new</span>
            Voir sur Google Maps
          </a>
        </div>
      </section>
    </>
  );
}
