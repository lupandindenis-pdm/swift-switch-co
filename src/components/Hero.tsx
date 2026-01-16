import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";
import ExchangeWidget from "./ExchangeWidget";

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Мгновенный обмен криптовалют</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Обменивайте крипту{" "}
              <span className="gradient-text">быстро и безопасно</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Лучшие курсы на рынке, мгновенные транзакции и полная безопасность ваших средств. Обменяйте более 300 криптовалют.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="gradient" size="xl">
                Начать обмен
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero" size="xl">
                Узнать больше
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="font-display text-2xl md:text-3xl font-bold gradient-text">$2.5B+</div>
                <div className="text-sm text-muted-foreground">Объём обменов</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display text-2xl md:text-3xl font-bold gradient-text">300+</div>
                <div className="text-sm text-muted-foreground">Криптовалют</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display text-2xl md:text-3xl font-bold gradient-text">500K+</div>
                <div className="text-sm text-muted-foreground">Пользователей</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Exchange Widget */}
          <div className="animate-scale-in lg:animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <ExchangeWidget />
          </div>
        </div>
        
        {/* Trust badges */}
        <div className="mt-16 md:mt-24 flex flex-wrap items-center justify-center gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-sm">SSL защита</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="w-5 h-5 text-accent" />
            <span className="text-sm">Мгновенные транзакции</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <TrendingUp className="w-5 h-5 text-accent" />
            <span className="text-sm">Лучшие курсы</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
