import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Seo from '../components/Seo';
import { CheckCircle, Map } from 'lucide-react';
import AnimatedElement from '../components/AnimatedElement';

const GroupageFreightPage: React.FC = () => {
  const { t } = useLanguage();
  const pageContent = t('groupageFreightPage');
  const steps = pageContent.howItWorksSteps || [];
  const benefits = pageContent.whyChooseUsBenefits || [];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedElement tag="section" aria-labelledby="how-it-works-title">
            <h2 id="how-it-works-title" className="text-3xl font-bold tracking-tight text-foreground mb-8">{pageContent.howItWorksTitle}</h2>
            <div className="relative pl-8">
              <div className="absolute left-0 h-full w-0.5 bg-border -translate-x-1/2 ml-4"></div>
              {steps.map((step: { title: string, text: string }, index: number) => (
                <AnimatedElement key={index} className="relative mb-10 pl-8" delay={index * 150}>
                  <div className="absolute left-0 top-1 h-8 w-8 bg-primary rounded-full flex items-center justify-center -translate-x-1/2 ring-8 ring-background">
                    <span className="text-base font-bold text-primary-foreground">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.text}</p>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>

          <AnimatedElement tag="section" aria-labelledby="why-choose-us-title" delay={200}>
            <h2 id="why-choose-us-title" className="text-3xl font-bold tracking-tight text-foreground mb-8">{pageContent.whyChooseUsTitle}</h2>
            <ul className="space-y-4">
              {benefits.map((benefit: string, index: number) => (
                <AnimatedElement tag="li" key={index} className="flex items-start bg-card shadow-sm p-4 rounded-lg" delay={index * 150}>
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-lg font-medium text-secondary-foreground">{benefit}</span>
                  </div>
                </AnimatedElement>
              ))}
            </ul>
          </AnimatedElement>
        </div>

        <AnimatedElement tag="section" aria-labelledby="geography-title" className="mt-24 bg-card p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
              <Map className="h-16 w-16 text-primary mb-6 md:mb-0 md:mr-8 flex-shrink-0"/>
              <div>
                <h2 id="geography-title" className="text-2xl font-bold text-card-foreground mb-2">{pageContent.geographyTitle}</h2>
                <p className="text-muted-foreground mb-3">{pageContent.geographyText}</p>
                <p className="text-sm text-muted-foreground italic">{pageContent.countries}</p>
              </div>
          </div>
        </AnimatedElement>

        <AnimatedElement className="text-center mt-24">
            <NavLink to="/contact" className="inline-block bg-primary text-primary-foreground font-bold py-4 px-10 rounded-lg text-xl hover:bg-primary/90 transition-colors">
                {pageContent.cta}
            </NavLink>
        </AnimatedElement>

      </div>
    </div>
  );
};

export default GroupageFreightPage;