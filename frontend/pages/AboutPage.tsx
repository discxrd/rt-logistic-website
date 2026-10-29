import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Seo from '../components/Seo';
import AnimatedElement from '../components/AnimatedElement';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-background py-20 lg:py-32">
      <Seo
        title={t('aboutPage.seo.title')}
        description={t('aboutPage.seo.description')}
        keywords={t('aboutPage.seo.keywords')}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
            <article>
                <AnimatedElement>
                  <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-center">{t('aboutPage.title')}</h1>
                </AnimatedElement>
                
                <AnimatedElement tag="section" className="mt-12" delay={150}>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{t('aboutPage.historyTitle')}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">{t('aboutPage.historyText')}</p>
                </AnimatedElement>

                <AnimatedElement tag="section" className="mt-10" delay={300}>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{t('aboutPage.missionTitle')}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">{t('aboutPage.missionText')}</p>

                </AnimatedElement>

                 <AnimatedElement className="mt-12" delay={450}>
                    <NavLink
                        to="/contact"
                        className="inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary/90 transition-colors"
                    >
                        {t('aboutPage.cta')}
                    </NavLink>
                </AnimatedElement>
            </article>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;