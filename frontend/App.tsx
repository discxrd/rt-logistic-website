
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GroupageFreightPage from './pages/GroupageFreightPage';
import InternationalFreightPage from './pages/InternationalFreightPage';
import WeldingWorksPage from './pages/WeldingWorksPage';
import RecruitmentUzbekistanPage from './pages/RecruitmentUzbekistanPage';
import ScrollToTopButton from './components/ScrollToTopButton';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      // Start fade out
      loader.classList.add('hidden');
      // Remove from DOM after transition, matching the CSS transition duration
      setTimeout(() => {
        if (loader) {
          loader.style.display = 'none';
        }
      }, 500);
    }
  }, []);
  
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/groupage-freight" element={<GroupageFreightPage />} />
              <Route path="/international-freight" element={<InternationalFreightPage />} />
              <Route path="/welding-works" element={<WeldingWorksPage />} />
              <Route path="/recruitment-uzbekistan" element={<RecruitmentUzbekistanPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;