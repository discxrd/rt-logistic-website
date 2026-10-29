import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Seo from '../components/Seo';
import AnimatedElement from '../components/AnimatedElement';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-background py-20 lg:py-32">
      <Seo
        title={t('contactPage.seo.title')}
        description={t('contactPage.seo.description')}
        keywords={t('contactPage.seo.keywords')}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement tag="header" className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">{t('contactPage.title')}</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">{t('contactPage.subtitle')}</p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <AnimatedElement tag="section" className="lg:col-span-2 bg-card p-8 rounded-lg shadow-lg" aria-labelledby="contact-form-title">
             <h2 id="contact-form-title" className="sr-only">Форма запроса стоимости</h2>
            <ContactForm />
          </AnimatedElement>

          <aside className="space-y-8">
             <AnimatedElement tag="section" delay={200} className="bg-card p-8 rounded-lg shadow-lg" aria-labelledby="contact-info-title">
                <h2 id="contact-info-title" className="text-2xl font-bold text-card-foreground mb-6">{t('contactPage.infoTitle')}</h2>
                <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                        <MapPin className="h-6 w-6 mr-4 mt-1 text-primary flex-shrink-0" />
                        <span>{t('footer.address')}</span>
                    </li>
                    <li className="flex items-center">
                        <Phone className="h-6 w-6 mr-4 text-primary" />
                        <a href={`tel:${t('footer.phone')}`} className="hover:text-primary transition-colors">{t('footer.phone')}</a>
                    </li>
                    <li className="flex items-center">
                        <Mail className="h-6 w-6 mr-4 text-primary" />
                        <a href={`mailto:${t('footer.email')}`} className="hover:text-primary transition-colors">{t('footer.email')}</a>
                    </li>
                    <li className="flex items-center">
                        <Clock className="h-6 w-6 mr-4 text-primary" />
                        <div>
                            <p className="font-semibold text-card-foreground">{t('contactPage.workingHours')}</p>
                            <p>{t('contactPage.hours')}</p>
                        </div>
                    </li>
                </ul>
             </AnimatedElement>
             <AnimatedElement tag="section" delay={400} className="bg-card rounded-lg shadow-lg overflow-hidden h-64" aria-label="Карта местоположения офиса">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2174.524458518935!2d24.03222831597805!3d56.97341098089495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfe3e632299b%3A0xc02e4b4cf8721c4c!2sDammes%20iela%2031%2C%20Kurzemes%20rajons%2C%20R%C4%ABga%2C%20LV-1069!5e0!3m2!1sru!2slv!4v1716905581977!5m2!1sru!2slv"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Карта местоположения LUMAR GROUP"
                ></iframe>
             </AnimatedElement>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;