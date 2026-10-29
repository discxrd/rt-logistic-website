import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-xl font-bold text-footer-foreground mb-6">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-4 mt-1 text-footer-foreground flex-shrink-0" />
                <span className="text-footer-foreground/80">{t('footer.address')}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-4 text-footer-foreground" />
                <a href={`tel:${t('footer.phone')}`} className="text-footer-foreground/80 hover:text-footer-foreground transition-colors">{t('footer.phone')}</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-4 text-footer-foreground" />
                <a href={`mailto:${t('footer.email')}`} className="text-footer-foreground/80 hover:text-footer-foreground transition-colors">{t('footer.email')}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-footer-foreground mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li><NavLink to="/" className="text-footer-foreground/80 hover:text-footer-foreground transition-colors">{t('nav.home')}</NavLink></li>
              <li><NavLink to="/international-freight" className="text-footer-foreground/80 hover:text-footer-foreground transition-colors">{t('nav.internationalFreight')}</NavLink></li>
              <li><NavLink to="/groupage-freight" className="text-footer-foreground/80 hover:text-footer-foreground transition-colors">{t('nav.groupageFreight')}</NavLink></li>
              <li><NavLink to="/welding-works" className="text-footer-foreground/80 hover:text-footer-foreground transition-colors">{t('nav.weldingWorks')}</NavLink></li>
              <li><NavLink to="/recruitment-uzbekistan" className="text-footer-foreground/80 hover:text-footer-foreground transition-colors">{t('nav.recruitmentUzbekistan')}</NavLink></li>
              <li><NavLink to="/about" className="text-footer-foreground/80 hover:text-footer-foreground transition-colors">{t('nav.about')}</NavLink></li>
              <li><NavLink to="/contact" className="text-footer-foreground/80 hover:text-footer-foreground transition-colors">{t('nav.contact')}</NavLink></li>
            </ul>
          </div>

        </div>
      </div>
      <div className="border-t border-white/40 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/60 text-sm">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;