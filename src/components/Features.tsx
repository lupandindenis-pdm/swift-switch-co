import { Zap, Shield, Clock, Wallet, Globe, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t('features.items.speed.title'),
      description: t('features.items.speed.desc'),
    },
    {
      icon: Shield,
      title: t('features.items.security.title'),
      description: t('features.items.security.desc'),
    },
    {
      icon: Clock,
      title: t('features.items.availability.title'),
      description: t('features.items.availability.desc'),
    },
    {
      icon: Wallet,
      title: t('features.items.coins.title'),
      description: t('features.items.coins.desc'),
    },
    {
      icon: Globe,
      title: t('features.items.global.title'),
      description: t('features.items.global.desc'),
    },
    {
      icon: Headphones,
      title: t('features.items.support.title'),
      description: t('features.items.support.desc'),
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('features.title')} <span className="gradient-text">{t('features.brand')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-display font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
