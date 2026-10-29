import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Seo from '../components/Seo';
import { ShieldCheck, Zap } from 'lucide-react';
import AnimatedElement from '../components/AnimatedElement';

const WeldingWorksPage: React.FC = () => {
  const { t } = useLanguage();
  const pageContent = t('weldingWorksPage');
  const services = pageContent.services || [];
  const benefits = pageContent.benefits || [];

  return (
    <div className="bg-background py-20 lg:py-32">
      <Seo
        title={pageContent.seo.title}
        description={pageContent.seo.description}
        keywords={pageContent.seo.keywords}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement tag="header" className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">{pageContent.title}</h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">{pageContent.description}</p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: Services */}
          <AnimatedElement tag="section" aria-labelledby="services-title" className="bg-secondary p-8 rounded-lg flex flex-col">
            <h2 id="services-title" className="text-3xl font-bold tracking-tight text-foreground mb-8">{pageContent.servicesTitle}</h2>
            <ul className="space-y-4">
              {services.map((service: string, index: number) => (
                <AnimatedElement tag="li" key={index} className="flex items-start" delay={index * 100}>
                  <Zap className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <span className="text-lg font-medium text-secondary-foreground">{service}</span>
                </AnimatedElement>
              ))}
            </ul>
          </AnimatedElement>

          {/* Column 2: Benefits */}
          <AnimatedElement tag="section" aria-labelledby="benefits-title" delay={200} className="bg-secondary p-8 rounded-lg flex flex-col">
            <h2 id="benefits-title" className="text-3xl font-bold tracking-tight text-foreground mb-8">{pageContent.benefitsTitle}</h2>
            <ul className="space-y-4">
              {benefits.map((benefit: string, index: number) => (
                <AnimatedElement tag="li" key={index} className="flex items-start" delay={index * 100}>
                  <ShieldCheck className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-lg font-medium text-secondary-foreground">{benefit}</span>
                </AnimatedElement>
              ))}
            </ul>
          </AnimatedElement>
        </div>

        <AnimatedElement className="text-center mt-24">
            <NavLink to="/contact" className="inline-block bg-primary text-primary-foreground font-bold py-4 px-10 rounded-lg text-xl hover:bg-primary/90 transition-colors">
                {pageContent.cta}
            </NavLink>
        </AnimatedElement>

      </div>
    </div>
  );
};

export default WeldingWorksPage;