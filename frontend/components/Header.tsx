
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import LogoImage from "/logo.png";

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isFreightMenuOpen, setIsFreightMenuOpen] = useState(false);
  const [isMetalMenuOpen, setIsMetalMenuOpen] = useState(false);
  const [isDesktopFreightMenuOpen, setIsDesktopFreightMenuOpen] = useState(false);
  const [isDesktopMetalMenuOpen, setIsDesktopMetalMenuOpen] = useState(false);
  const [isPersonnelMenuOpen, setIsPersonnelMenuOpen] = useState(false);
  const [isDesktopPersonnelMenuOpen, setIsDesktopPersonnelMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', text: t('nav.home') },
    { to: '/about', text: t('nav.about') },
    { to: '/contact', text: t('nav.contact') },
  ];

  const languages: { code: Language; name: string }[] = [
    { code: 'ru', name: t('languages.ru') },
    { code: 'lv', name: t('languages.lv') },
    { code: 'en', name: t('languages.en') },
  ];

  const handleMobileLangChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  const handleDesktopFreightMenuToggle = (isOpen: boolean) => {
    setIsDesktopFreightMenuOpen(isOpen);
  };

  const handleDesktopMetalMenuToggle = (isOpen: boolean) => {
    setIsDesktopMetalMenuOpen(isOpen);
  };

  const handleDesktopPersonnelMenuToggle = (isOpen: boolean) => {
    setIsDesktopPersonnelMenuOpen(isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header className={`sticky top-0 z-50 bg-background/90 backdrop-blur-sm shadow-sm`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <NavLink to="/" className="flex items-center">
              <img src={LogoImage} alt="LUMAR GROUP Logo" className="h-10 w-auto" />
            </NavLink>

            <nav className="hidden lg:flex items-center space-x-8">
              <NavLink to="/" className={({ isActive }) => isActive ? 'font-semibold text-primary' : 'text-muted-foreground hover:text-primary transition-colors'}>
                {t('nav.home')}
              </NavLink>

              <div
                className="relative"
                onMouseEnter={() => handleDesktopFreightMenuToggle(true)}
                onMouseLeave={() => handleDesktopFreightMenuToggle(false)}
              >
                <button className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.freight')}
                  <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${isDesktopFreightMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 bg-popover text-popover-foreground rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-20 transition-all duration-300 ease-in-out transform ${isDesktopFreightMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                  onClick={() => handleDesktopFreightMenuToggle(false)}
                >
                  <div className="py-2">
                    <NavLink to="/international-freight" className="block px-4 py-2 text-sm text-popover-foreground hover:bg-secondary hover:text-primary rounded-md mx-2">
                      {t('nav.internationalFreight')}
                    </NavLink>
                    <NavLink to="/groupage-freight" className="block px-4 py-2 text-sm text-popover-foreground hover:bg-secondary hover:text-primary rounded-md mx-2">
                      {t('nav.groupageFreight')}
                    </NavLink>
                  </div>
                </div>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleDesktopMetalMenuToggle(true)}
                onMouseLeave={() => handleDesktopMetalMenuToggle(false)}
              >
                <button className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.metalworking')}
                  <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${isDesktopMetalMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 bg-popover text-popover-foreground rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-20 transition-all duration-300 ease-in-out transform ${isDesktopMetalMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                  onClick={() => handleDesktopMetalMenuToggle(false)}
                >
                  <div className="py-2">
                    <NavLink to="/welding-works" className="block px-4 py-2 text-sm text-popover-foreground hover:bg-secondary hover:text-primary rounded-md mx-2">
                      {t('nav.weldingWorks')}
                    </NavLink>
                  </div>
                </div>
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleDesktopPersonnelMenuToggle(true)}
                onMouseLeave={() => handleDesktopPersonnelMenuToggle(false)}
              >
                <button className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.recruitmentUzbekistan')}
                  <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${isDesktopPersonnelMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 bg-popover text-popover-foreground rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-20 transition-all duration-300 ease-in-out transform ${isDesktopPersonnelMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                  onClick={() => handleDesktopPersonnelMenuToggle(false)}
                >
                  <div className="py-2">
                    <NavLink to="/recruitment-uzbekistan" className="block px-4 py-2 text-sm text-popover-foreground hover:bg-secondary hover:text-primary rounded-md mx-2">
                      {t('nav.recruitmentUzbekistan')}
                    </NavLink>
                  </div>
                </div>
              </div>

              {navLinks.slice(1).map((link) => (
                <NavLink key={link.to} to={link.to} className={({ isActive }) => isActive ? 'font-semibold text-primary' : 'text-muted-foreground hover:text-primary transition-colors'}>
                  {link.text}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSwitcher />
              <NavLink
                to="/contact"
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                {t('hero.cta')}
              </NavLink>
            </div>

            <div className="lg:hidden flex items-center space-x-2">
              <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="p-2 text-foreground">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-20 z-20 left-0 right-0 bottom-0 bg-background/100 backdrop-blur-none transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 space-y-2">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-lg font-medium text-foreground hover:text-primary hover:bg-secondary">
              {link.text}
            </NavLink>
          ))}

          <div className="border-t border-border pt-2">
            <button onClick={() => setIsFreightMenuOpen(!isFreightMenuOpen)} className="w-full flex justify-between items-center px-3 py-2 rounded-md text-lg font-medium text-foreground hover:text-primary hover:bg-secondary">
              <span>{t('nav.freight')}</span>
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isFreightMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isFreightMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="min-h-0">
                <div className="pl-4 pt-2 space-y-2">
                  <NavLink to="/international-freight" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-secondary">
                    {t('nav.internationalFreight')}
                  </NavLink>
                  <NavLink to="/groupage-freight" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-secondary">
                    {t('nav.groupageFreight')}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-2">
            <button onClick={() => setIsMetalMenuOpen(!isMetalMenuOpen)} className="w-full flex justify-between items-center px-3 py-2 rounded-md text-lg font-medium text-foreground hover:text-primary hover:bg-secondary">
              <span>{t('nav.metalworking')}</span>
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isMetalMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isMetalMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="min-h-0">
                <div className="pl-4 pt-2 space-y-2">
                  <NavLink to="/welding-works" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-secondary">
                    {t('nav.weldingWorks')}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-2">
            <button onClick={() => setIsPersonnelMenuOpen(!isPersonnelMenuOpen)} className="w-full flex justify-between items-center px-3 py-2 rounded-md text-lg font-medium text-foreground hover:text-primary hover:bg-secondary">
              <span>{t('nav.recruitmentUzbekistan')}</span>
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isPersonnelMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isPersonnelMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="min-h-0">
                <div className="pl-4 pt-2 space-y-2">
                  <NavLink to="/recruitment-uzbekistan" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-secondary">
                    {t('nav.recruitmentUzbekistan')}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-2">
            <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="w-full flex justify-between items-center px-3 py-2 rounded-md text-lg font-medium text-foreground hover:text-primary hover:bg-secondary">
              <span>{t('languages.select')}</span>
              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isLangMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="min-h-0">
                <div className="pl-4 pt-2 space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleMobileLangChange(lang.code)}
                      className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${language === lang.code
                        ? 'text-primary bg-secondary'
                        : 'text-foreground hover:text-primary hover:bg-secondary'
                        }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold">
            {t('hero.cta')}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;