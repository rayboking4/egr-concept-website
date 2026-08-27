import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const servicesList = [
  'Revêtement de sol (carrelage, parquet, stratifié…)',
  'Revêtement mural (faïence, carrelage, mosaïque…)',
  'Électricité (installation, mise aux normes, dépannage)',
  'Plomberie (sanitaires, canalisations, dépannage)',
  'Peinture intérieure',
  'Peinture extérieure / façade',
  'Rénovation intérieure complète',
  'Plâtrerie et cloisons',
  'Isolation thermique / phonique',
  'VMC / Ventilation / Aération',
  'Chauffage (chaudière, pompe à chaleur)',
  'Autre / Plusieurs prestations',
];

const budgetOptions = [
  'Moins de 1 000 €',
  '1 000 – 5 000 €',
  '5 000 – 15 000 €',
  '15 000 – 30 000 €',
  'Plus de 30 000 €',
  'Je ne sais pas encore',
];

const delaiOptions = [
  'Le plus tôt possible (urgent)',
  'Dans le mois',
  'Dans les 3 prochains mois',
  'Dans les 6 prochains mois',
  'Plus d\'un an',
  'Pas encore défini',
];

const cityOptions = [
  'Lille', 'Roubaix', 'Tourcoing', 'Dunkerque',
  'Valenciennes', 'Douai', 'Arras', 'Béthune',
  'Lens', 'Maubeuge', 'Cambrai', 'Hazebrouck',
  'Autre ville du Nord', 'Autre ville du Pas-de-Calais',
];

export default function Devis() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1 – Project
    projectType: '',
    projectDesc: '',
    surface: '',
    typeLogement: '',
    budget: '',
    delai: '',
    // Step 2 – Contact
    civilite: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    // Step 3 – Extra
    comment: '',
    photos: false,
    accept: false,
  });

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const buildEmailBody = () => {
    return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEMANDE DE DEVIS – EGR CONCEPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 PROJET
Service demandé : ${formData.projectType}
Description : ${formData.projectDesc}
Surface estimée : ${formData.surface || 'Non précisée'}
Type de logement : ${formData.typeLogement || 'Non précisé'}
Budget envisagé : ${formData.budget || 'Non précisé'}
Délai souhaité : ${formData.delai || 'Non précisé'}

📞 COORDONNÉES DU CLIENT
Civilité : ${formData.civilite || 'Non précisée'}
Nom : ${formData.name}
Email : ${formData.email}
Téléphone : ${formData.phone}
Adresse des travaux : ${formData.address || 'Non précisée'}
Ville : ${formData.city || 'Non précisée'}

💬 INFORMATIONS COMPLÉMENTAIRES
${formData.comment || 'Aucune information complémentaire.'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Demande envoyée depuis egrconcept.fr
    `.trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.accept) return;
    setLoading(true);

    const subject = encodeURIComponent(
      `[Devis EGR Concept] ${formData.projectType} – ${formData.name} – ${formData.city}`
    );
    const body = encodeURIComponent(buildEmailBody());
    const mailtoLink = `mailto:contact@egrconcept.fr?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(mailtoLink, '_blank');
    }, 1200);
  };

  const steps = [
    { num: 1, label: 'Votre Projet', icon: 'home_repair_service' },
    { num: 2, label: 'Vos Coordonnées', icon: 'person' },
    { num: 3, label: 'Confirmation', icon: 'check_circle' },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className={`text-amber font-semibold text-sm uppercase tracking-widest mb-4 block transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Gratuit & Sans Engagement
          </span>
          <h1
            className={`font-heading text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            Demandez Votre Devis Gratuit
          </h1>
          <p
            className={`text-white/70 text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            Remplissez ce formulaire et recevez une estimation personnalisée pour vos travaux 
            de rénovation dans le Nord-Pas-de-Calais. Réponse sous 24h.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-charcoal/50">
            <Link to="/" className="hover:text-amber transition-colors">Accueil</Link>
            <span className="material-icons text-xs">chevron_right</span>
            <span className="text-navy font-medium">Demande de Devis</span>
          </nav>
        </div>
      </div>

      <section className="py-16 bg-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: 'verified', label: 'Devis 100% Gratuit' },
              { icon: 'lock', label: 'Sans Engagement' },
              { icon: 'schedule', label: 'Réponse sous 24h' },
              { icon: 'security', label: 'Données sécurisées' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 bg-white border border-gray-100 px-4 py-2 rounded-full text-sm text-navy shadow-sm">
                <span className="material-icons text-amber text-base">{b.icon}</span>
                <span className="font-semibold">{b.label}</span>
              </div>
            ))}
          </div>

          {/* Step Indicator */}
          {!submitted && (
            <div className="flex items-center justify-center mb-10">
              {steps.map((s, i) => (
                <div key={s.num} className="flex items-center">
                  <button
                    onClick={() => s.num < step && setStep(s.num)}
                    className={`flex flex-col items-center gap-1 group ${s.num < step ? 'cursor-pointer' : 'cursor-default'}`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                        step === s.num
                          ? 'bg-amber text-navy shadow-lg shadow-amber/30 scale-110'
                          : step > s.num
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {step > s.num ? (
                        <span className="material-icons text-base">check</span>
                      ) : (
                        <span className="material-icons text-base">{s.icon}</span>
                      )}
                    </div>
                    <span
                      className={`text-xs font-semibold hidden sm:block ${
                        step === s.num ? 'text-navy' : step > s.num ? 'text-green-600' : 'text-gray-400'
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                  {i < steps.length - 1 && (
                    <div
                      className={`h-1 w-16 sm:w-24 mx-2 rounded-full transition-all ${
                        step > s.num ? 'bg-green-400' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {submitted ? (
              /* Success */
              <div className="text-center py-10">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-icons text-green-500 text-5xl">check_circle</span>
                </div>
                <h2 className="font-heading text-2xl font-bold text-navy mb-3">
                  Demande Envoyée avec Succès !
                </h2>
                <p className="text-charcoal/70 mb-3 leading-relaxed">
                  Merci <strong>{formData.name}</strong> ! Votre demande de devis a bien été transmise à notre équipe.
                </p>
                <p className="text-charcoal/70 mb-8 leading-relaxed">
                  Nous vous contacterons sous <strong>24h ouvrées</strong> au <strong>{formData.phone}</strong> 
                  ou par email à <strong>{formData.email}</strong> pour planifier votre rendez-vous gratuit.
                </p>
                <div className="bg-amber/10 border border-amber/30 rounded-xl p-5 mb-8 text-sm text-navy text-left">
                  <div className="font-bold mb-2 flex items-center gap-2">
                    <span className="material-icons text-amber text-base">info</span>
                    Résumé de votre demande
                  </div>
                  <div className="space-y-1 text-charcoal/80">
                    <div><strong>Service :</strong> {formData.projectType}</div>
                    <div><strong>Ville :</strong> {formData.city}</div>
                    <div><strong>Budget :</strong> {formData.budget || 'Non précisé'}</div>
                    <div><strong>Délai :</strong> {formData.delai || 'Non précisé'}</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/"
                    className="bg-navy text-white font-semibold px-6 py-3 rounded-xl hover:bg-navy/90 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <span className="material-icons text-base">home</span>
                    Retour à l'accueil
                  </Link>
                  <a
                    href="tel:0619020888"
                    className="bg-amber text-navy font-bold px-6 py-3 rounded-xl hover:bg-amber-500 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <span className="material-icons text-base">phone</span>
                    Appeler maintenant
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* ─── STEP 1: Project ─── */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-heading text-xl font-bold text-navy mb-1">
                        Votre Projet de Rénovation
                      </h2>
                      <p className="text-charcoal/60 text-sm">
                        Décrivez-nous votre projet pour que nous puissions vous établir une estimation précise.
                      </p>
                    </div>

                    <div>
                      <label className="form-label">Type de service souhaité *</label>
                      <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Sélectionner un service...</option>
                        {servicesList.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="form-label">Type de logement</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {['Appartement', 'Maison', 'Local commercial', 'Autre'].map((type) => (
                          <label
                            key={type}
                            className={`flex flex-col items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all text-sm font-semibold text-center ${
                              formData.typeLogement === type
                                ? 'border-amber bg-amber/10 text-navy'
                                : 'border-gray-200 text-gray-400 hover:border-amber/50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="typeLogement"
                              value={type}
                              checked={formData.typeLogement === type}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <span className="material-icons text-2xl">
                              {type === 'Appartement' ? 'apartment' :
                               type === 'Maison' ? 'house' :
                               type === 'Local commercial' ? 'store' : 'help_outline'}
                            </span>
                            {type}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">Surface estimée (m²)</label>
                        <input
                          type="text"
                          name="surface"
                          value={formData.surface}
                          onChange={handleChange}
                          placeholder="ex: 45 m²"
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="form-label">Budget envisagé</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="form-input"
                        >
                          <option value="">Sélectionner...</option>
                          {budgetOptions.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="form-label">Délai souhaité</label>
                      <select
                        name="delai"
                        value={formData.delai}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Sélectionner...</option>
                        {delaiOptions.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="form-label">Description de votre projet *</label>
                      <textarea
                        name="projectDesc"
                        required
                        rows={4}
                        value={formData.projectDesc}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet en détail : travaux à réaliser, état actuel, contraintes particulières, résultat souhaité..."
                        className="form-input resize-none"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => {
                          if (!formData.projectType || !formData.projectDesc) {
                            alert('Veuillez remplir les champs obligatoires (*)');
                            return;
                          }
                          setStep(2);
                        }}
                        className="bg-amber text-navy font-bold px-8 py-3.5 rounded-xl hover:bg-amber-500 transition-all hover:-translate-y-0.5 shadow-md inline-flex items-center gap-2"
                      >
                        Étape suivante
                        <span className="material-icons">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* ─── STEP 2: Contact ─── */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-heading text-xl font-bold text-navy mb-1">
                        Vos Coordonnées
                      </h2>
                      <p className="text-charcoal/60 text-sm">
                        Pour vous recontacter et planifier la visite gratuite sur votre chantier.
                      </p>
                    </div>

                    <div>
                      <label className="form-label">Civilité</label>
                      <div className="flex gap-4">
                        {['M.', 'Mme', 'Autre'].map((c) => (
                          <label key={c} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="civilite"
                              value={c}
                              checked={formData.civilite === c}
                              onChange={handleChange}
                              className="accent-amber w-4 h-4"
                            />
                            <span className="text-charcoal text-sm font-medium">{c}</span>
                          </label>
                        ))}
                      </div>
                    </div>

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
                      <label className="form-label">Adresse des travaux</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="12 rue de la Paix..."
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label className="form-label">Ville *</label>
                      <select
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Sélectionner votre ville...</option>
                        {cityOptions.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="border-2 border-navy text-navy font-semibold px-6 py-3 rounded-xl hover:bg-navy hover:text-white transition-all inline-flex items-center gap-2"
                      >
                        <span className="material-icons">arrow_back</span>
                        Retour
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (!formData.name || !formData.phone || !formData.email || !formData.city) {
                            alert('Veuillez remplir tous les champs obligatoires (*)');
                            return;
                          }
                          setStep(3);
                        }}
                        className="bg-amber text-navy font-bold px-8 py-3 rounded-xl hover:bg-amber-500 transition-all hover:-translate-y-0.5 shadow-md inline-flex items-center gap-2"
                      >
                        Étape suivante
                        <span className="material-icons">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* ─── STEP 3: Confirm ─── */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-heading text-xl font-bold text-navy mb-1">
                        Vérification & Envoi
                      </h2>
                      <p className="text-charcoal/60 text-sm">
                        Vérifiez votre demande avant de l'envoyer.
                      </p>
                    </div>

                    {/* Summary */}
                    <div className="bg-offwhite rounded-2xl p-6 space-y-5">
                      <div>
                        <h3 className="font-semibold text-navy text-sm mb-3 flex items-center gap-2">
                          <span className="material-icons text-amber text-base">home_repair_service</span>
                          Votre Projet
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-2 text-sm text-charcoal/80">
                          <div><span className="font-medium text-navy">Service :</span> {formData.projectType}</div>
                          <div><span className="font-medium text-navy">Logement :</span> {formData.typeLogement || 'Non précisé'}</div>
                          <div><span className="font-medium text-navy">Surface :</span> {formData.surface || 'Non précisée'}</div>
                          <div><span className="font-medium text-navy">Budget :</span> {formData.budget || 'Non précisé'}</div>
                          <div><span className="font-medium text-navy">Délai :</span> {formData.delai || 'Non précisé'}</div>
                        </div>
                        <div className="mt-3">
                          <span className="font-medium text-navy text-sm">Description :</span>
                          <p className="text-charcoal/70 text-sm mt-1">{formData.projectDesc}</p>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-5">
                        <h3 className="font-semibold text-navy text-sm mb-3 flex items-center gap-2">
                          <span className="material-icons text-amber text-base">person</span>
                          Vos Coordonnées
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-2 text-sm text-charcoal/80">
                          <div><span className="font-medium text-navy">Nom :</span> {formData.civilite} {formData.name}</div>
                          <div><span className="font-medium text-navy">Téléphone :</span> {formData.phone}</div>
                          <div><span className="font-medium text-navy">Email :</span> {formData.email}</div>
                          <div><span className="font-medium text-navy">Ville :</span> {formData.city}</div>
                          {formData.address && (
                            <div className="sm:col-span-2">
                              <span className="font-medium text-navy">Adresse :</span> {formData.address}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="form-label">Informations complémentaires</label>
                      <textarea
                        name="comment"
                        rows={3}
                        value={formData.comment}
                        onChange={handleChange}
                        placeholder="Toute information supplémentaire utile pour votre devis..."
                        className="form-input resize-none"
                      />
                    </div>

                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="accept"
                          checked={formData.accept}
                          onChange={handleChange}
                          className="mt-0.5 w-4 h-4 accent-amber"
                          required
                        />
                        <span className="text-charcoal/70 text-sm">
                          J'accepte que mes données soient utilisées par EGR Concept pour traiter ma demande de devis. 
                          Vos informations restent confidentielles et ne sont pas transmises à des tiers. *
                        </span>
                      </label>
                    </div>

                    <div className="bg-amber/10 border border-amber/30 rounded-xl p-4 flex items-start gap-3">
                      <span className="material-icons text-amber text-base mt-0.5">info</span>
                      <p className="text-charcoal/80 text-sm">
                        En cliquant sur "Envoyer ma demande", votre demande de devis sera envoyée à 
                        <strong> contact@egrconcept.fr</strong>. Vous recevrez une réponse sous 24h ouvrées.
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="border-2 border-navy text-navy font-semibold px-6 py-3 rounded-xl hover:bg-navy hover:text-white transition-all inline-flex items-center gap-2"
                      >
                        <span className="material-icons">arrow_back</span>
                        Retour
                      </button>
                      <button
                        type="submit"
                        disabled={loading || !formData.accept}
                        className="bg-amber text-navy font-bold px-8 py-3.5 rounded-xl hover:bg-amber-500 transition-all hover:-translate-y-0.5 shadow-lg inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        {loading ? (
                          <>
                            <span className="material-icons animate-spin text-base">refresh</span>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <span className="material-icons">send</span>
                            Envoyer ma Demande
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Quick Contact Alternative */}
          {!submitted && (
            <div className="mt-8 text-center">
              <p className="text-charcoal/60 text-sm mb-4">
                Préférez-vous nous contacter directement ?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:0619020888"
                  className="flex items-center gap-2 bg-navy text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-navy/90 transition-all text-sm"
                >
                  <span className="material-icons text-base">phone</span>
                  06 19 02 08 88
                </a>
                <a
                  href="https://wa.me/33619020888?text=Bonjour%20EGR%20Concept%2C%20je%20souhaite%20un%20devis%20gratuit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#20b858] transition-all text-sm"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
