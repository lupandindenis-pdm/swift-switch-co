import { Zap, Shield, Clock, Wallet, Globe, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Мгновенные транзакции",
    description: "Обмен происходит за считанные минуты благодаря оптимизированной инфраструктуре.",
  },
  {
    icon: Shield,
    title: "Максимальная безопасность",
    description: "Многоуровневая защита данных и средств с использованием современных технологий.",
  },
  {
    icon: Clock,
    title: "24/7 Доступность",
    description: "Платформа работает круглосуточно, обменивайте криптовалюту в любое время.",
  },
  {
    icon: Wallet,
    title: "300+ Криптовалют",
    description: "Поддержка всех популярных монет и токенов для обмена.",
  },
  {
    icon: Globe,
    title: "Глобальный охват",
    description: "Работаем по всему миру без ограничений и блокировок.",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Команда профессионалов готова помочь в любой момент.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Почему выбирают <span className="gradient-text">CryptoSwap</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы создали идеальную платформу для обмена криптовалют, объединив скорость, безопасность и удобство.
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
