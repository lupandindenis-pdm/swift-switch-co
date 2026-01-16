import { Wallet, ArrowRightLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Wallet,
    number: "01",
    title: "Выберите валюты",
    description: "Укажите криптовалюту для обмена и валюту, которую хотите получить.",
  },
  {
    icon: ArrowRightLeft,
    number: "02",
    title: "Введите сумму",
    description: "Укажите количество монет и получите мгновенный расчёт по лучшему курсу.",
  },
  {
    icon: CheckCircle2,
    number: "03",
    title: "Получите криптовалюту",
    description: "После подтверждения средства поступят на ваш кошелёк в течение минут.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Как это <span className="gradient-text">работает</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Всего три простых шага для обмена криптовалюты. Без регистрации и лишних действий.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}
              
              <div className="relative bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-lg">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-bold text-sm px-4 py-1 rounded-full">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mt-4 mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-display font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Button variant="gradient" size="xl">
            Начать обмен прямо сейчас
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
