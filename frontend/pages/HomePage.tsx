
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Seo from '../components/Seo';
import ContactForm from '../components/ContactForm';
import { Globe, ShieldCheck, Wrench, Clock, Zap, Scissors, Cog } from 'lucide-react';
import AnimatedElement from '../components/AnimatedElement';
import HeroBackgroundImage from "/hero_background.png";
import MetalBackgroundImage from "/metal_hero_background.png";

const HeroLogisticsSection: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div
            className="relative bg-cover bg-center flex items-center"
            style={{
                backgroundImage: `url(${HeroBackgroundImage})`,
                minHeight: 'calc(100vh - 5rem)' // Full screen height minus header height (h-20 = 5rem)
            }}
        >
            <div className="absolute inset-0 bg-foreground/60"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-4xl text-center py-16 mx-auto">
                    <span className="block text-sm font-bold text-white/90 tracking-widest mb-4 opacity-0 animate-fade-in-up">
                        {t('hero.preheadline')}
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 opacity-0 animate-fade-in-up animation-delay-200">
                        {t('hero.headline')}
                    </h1>

                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up animation-delay-400">
                        {t('hero.subheadline')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-600">
                        <NavLink
                            to="/recruitment-uzbekistan"
                            className="inline-flex items-center justify-center border border-white/80 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-white hover:text-foreground transition-colors"
                        >
                            {t('hero.secondaryCta')}
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary/90 transition-colors"
                        >
                            {t('hero.cta')}
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MetalHeroSection: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div
            className="relative bg-cover bg-center flex items-center"
            style={{
                backgroundImage: `url(${MetalBackgroundImage})`,
                minHeight: 'calc(100vh - 5rem)'
            }}
            aria-label={t('altTexts.metalworkingImage')}
        >
            <div className="absolute inset-0 bg-foreground/60"></div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-4xl text-center py-16 mx-auto">
                    <span className="block text-sm font-bold text-white/90 tracking-widest mb-4 opacity-0 animate-fade-in-up">
                        {t('metalHero.preheadline')}
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 opacity-0 animate-fade-in-up animation-delay-200">
                        {t('metalHero.headline')}
                    </h1>

                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up animation-delay-400">
                        {t('metalHero.subheadline')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-600">
                        <NavLink
                            to="/welding-works"
                            className="inline-flex items-center justify-center border border-white/80 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-white hover:text-foreground transition-colors"
                        >
                            {t('metalHero.secondaryCta')}
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary/90 transition-colors"
                        >
                            {t('metalHero.cta')}
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AboutSection: React.FC = () => {
    const { t } = useLanguage();
    return (
        <AnimatedElement tag="section" aria-labelledby="about-section-title" className="py-20 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 id="about-section-title" className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">{t('aboutSection.title')}</h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">{t('aboutSection.text')}</p>
                <div className="mt-8">
                    <NavLink
                        to="/recruitment-uzbekistan"
                        className="text-primary font-semibold hover:text-primary/80 transition-colors"
                    >
                        {t("hero.secondaryCta")}
                    </NavLink>
                </div>
            </div>
        </AnimatedElement>
    );
};

const FeatureIcon: React.FC<{ icon: string }> = ({ icon }) => {
    const className = "h-10 w-10 text-primary";
    switch (icon) {
        case 'Globe': return <Globe className={className} />;
        case 'ShieldCheck': return <ShieldCheck className={className} />;
        case 'Wrench': return <Wrench className={className} />;
        case 'Clock': return <Clock className={className} />;
        default: return null;
    }
};

const WhyChooseUs: React.FC = () => {
    const { t } = useLanguage();
    const features = t('whyChooseUs');

    return (
        <AnimatedElement tag="section" className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{features.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {(features.cards || []).map((card: { icon: string, title: string, text: string }, index: number) => (
                        <AnimatedElement key={index} delay={index * 150} className="text-center p-8 bg-card rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="flex justify-center items-center mb-6">
                                <div className="p-4 bg-primary/10 rounded-full">
                                    <FeatureIcon icon={card.icon} />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-card-foreground mb-3">{card.title}</h3>
                            <p className="text-muted-foreground">{card.text}</p>
                        </AnimatedElement>
                    ))}
                </div>
            </div>
        </AnimatedElement>
    );
};

const MetalworkingIcon: React.FC<{ icon: string }> = ({ icon }) => {
    const className = "h-8 w-8 text-primary";
    switch (icon) {
        case 'Zap': return <Zap className={className} />;
        case 'Scissors': return <Scissors className={className} />;
        case 'Cog': return <Cog className={className} />;
        default: return null;
    }
};

const MetalworkingSection: React.FC = () => {
    const { t } = useLanguage();
    const content = t('metalworkingSection');

    return (
        <AnimatedElement tag="section" className="py-20 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{content.title}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{content.text}</p>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {(content.services || []).map((service: { icon: string, title: string, description: string }, index: number) => (
                        <AnimatedElement
                            key={index}
                            delay={index * 150}
                            className="bg-card p-6 rounded-lg border-l-4 border-primary shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/80"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 pt-1">
                                    <MetalworkingIcon icon={service.icon} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </div>
                            </div>
                        </AnimatedElement>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <NavLink to="/welding-works" className="inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary/90 transition-colors">
                        {content.cta}
                    </NavLink>
                </div>
            </div>
        </AnimatedElement>
    );
};

const HomeContactSection: React.FC = () => {
    const { t } = useLanguage();
    const content = t('homeContactSection');

    return (
        <AnimatedElement tag="section" className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="bg-card p-8 sm:p-10 rounded-lg shadow-md">
                        <ContactForm />
                    </div>
                    <div className="text-center lg:text-left flex flex-col justify-center">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">{content.title}</h2>
                        <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground leading-relaxed">{content.subtitle}</p>
                    </div>
                </div>
            </div>
        </AnimatedElement>
    );
};


const QuoteBanner: React.FC = () => {
    const { t } = useLanguage();
    return (
        <AnimatedElement tag="section" aria-labelledby="quote-banner-title" className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h2 id="quote-banner-title" className="text-3xl font-extrabold sm:text-4xl">{t('quoteBanner.title')}</h2>
                <p className="mt-4 text-lg text-primary-foreground/80">{t('quoteBanner.subtitle')}</p>
                <div className="mt-8">
                    <NavLink to="/contact" className="inline-block bg-background text-foreground font-bold py-3 px-8 rounded-lg text-lg hover:bg-white transition-colors">
                        {t('quoteBanner.cta')}
                    </NavLink>
                </div>
            </div>
        </AnimatedElement>
    );
};

const HomePage: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div>
            <Seo
                title={t('homePage.seo.title')}
                description={t('homePage.seo.description')}
                keywords={t('homePage.seo.keywords')}
            />
            <HeroLogisticsSection />
            <AboutSection />
            <MetalHeroSection />
            <MetalworkingSection />
            <WhyChooseUs />
            <HomeContactSection />
        </div>
    );
};

export default HomePage;