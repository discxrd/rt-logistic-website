import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Seo from '../components/Seo';
import { Truck, Boxes, CheckCircle } from 'lucide-react';
import AnimatedElement from '../components/AnimatedElement';

const TransportIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className = "h-12 w-12 text-primary" }) => {
    switch (icon) {
        case 'Truck': return <Truck className={className} />;
        case 'Boxes': return <Boxes className={className} />;
        default: return <CheckCircle className={className} />;
    }
};


const InternationalFreightPage: React.FC = () => {
  const { t } = useLanguage();
  const pageContent = t('internationalFreightPage');
  const freightTypes = pageContent.freightTypes || [];
  const additionalServices = pageContent.additionalServices || [];

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

        <AnimatedElement tag="section" aria-labelledby="freight-types-title">
            <h2 id="freight-types-title" className="text-3xl font-bold tracking-tight text-foreground text-center mb-12">{pageContent.freightTypesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {freightTypes.map((type: { title: string; text: string; icon: string }, index: number) => (
                <AnimatedElement key={index} delay={index * 150} className="text-center p-8 bg-card rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center">
                    <div className="flex justify-center items-center mb-6">
                        <div className="p-4 bg-primary/10 rounded-full">
                            <TransportIcon icon={type.icon} className="h-10 w-10 text-primary" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-card-foreground mb-3">{type.title}</h3>
                    <p className="text-muted-foreground flex-grow">{type.text}</p>
                </AnimatedElement>
              ))}
            </div>
        </AnimatedElement>

        <AnimatedElement tag="section" aria-labelledby="additional-services-title" className="mt-24" delay={300}>
            <div className="max-w-4xl mx-auto bg-secondary p-8 rounded-lg">
                <h2 id="additional-services-title" className="text-2xl font-bold tracking-tight text-secondary-foreground mb-6 text-center sm:text-left">{pageContent.additionalServicesTitle}</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {additionalServices.map((service: string, index: number) => (
                        <li key={index} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{service}</span>
                        </li>
                    ))}
                </ul>
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

export default InternationalFreightPage;