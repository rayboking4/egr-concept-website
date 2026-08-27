import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Devis from './pages/Devis';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-offwhite">
          <Navbar />
          <main className="flex-grow pt-[72px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/realisations" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/devis" element={<Devis />} />
              {/* 404 */}
              <Route path="*" element={
                <div className="flex-grow flex items-center justify-center min-h-[60vh] bg-offwhite">
                  <div className="text-center px-4">
                    <span className="material-icons text-navy/20 text-8xl mb-4">search_off</span>
                    <h1 className="font-heading text-4xl font-bold text-navy mb-4">Page Introuvable</h1>
                    <p className="text-charcoal/60 mb-8">La page que vous recherchez n'existe pas ou a été déplacée.</p>
                    <a
                      href="/"
                      className="bg-amber text-navy font-bold px-7 py-3 rounded-xl hover:bg-amber-500 transition-all inline-flex items-center gap-2"
                    >
                      <span className="material-icons">home</span>
                      Retour à l'accueil
                    </a>
                  </div>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTop />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
