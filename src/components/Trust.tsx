import { Shield, Lock, Eye, Server, Award, Users } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "Защита средств",
    description: "Холодное хранение активов и многоуровневая система безопасности.",
  },
  {
    icon: Lock,
    title: "Шифрование данных",
    description: "Все данные защищены 256-битным SSL шифрованием.",
  },
  {
    icon: Eye,
    title: "Прозрачность",
    description: "Полная прозрачность транзакций и отчётность.",
  },
  {
    icon: Server,
    title: "Надёжная инфраструктура",
    description: "Распределённые серверы с 99.9% uptime гарантией.",
  },
];

const stats = [
  { icon: Award, value: "5 лет", label: "На рынке" },
  { icon: Users, value: "500K+", label: "Клиентов" },
  { icon: Shield, value: "0", label: "Взломов" },
];

const Trust = () => {
  return (
    <section id="trust" className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ваша безопасность — <span className="gradient-text">наш приоритет</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Мы используем передовые технологии безопасности для защиты ваших средств и личных данных. Доверьтесь профессионалам.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{point.title}</h4>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right content - Stats card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative bg-card border border-border rounded-3xl p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                  <Shield className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Надёжность подтверждена</h3>
                <p className="text-muted-foreground">Тысячи успешных транзакций каждый день</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-secondary/50 rounded-xl">
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="font-display font-bold text-xl md:text-2xl gradient-text">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Certifications */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-center text-sm text-muted-foreground mb-4">Сертификаты и лицензии</p>
                <div className="flex justify-center gap-4">
                  <div className="px-4 py-2 bg-secondary/50 rounded-lg text-sm font-medium">ISO 27001</div>
                  <div className="px-4 py-2 bg-secondary/50 rounded-lg text-sm font-medium">PCI DSS</div>
                  <div className="px-4 py-2 bg-secondary/50 rounded-lg text-sm font-medium">SOC 2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
