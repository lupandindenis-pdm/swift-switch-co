import { TrendingUp, TrendingDown } from "lucide-react";

const cryptoRates = [
  { symbol: "BTC", name: "Bitcoin", price: 97523.45, change: 2.34, icon: "₿" },
  { symbol: "ETH", name: "Ethereum", price: 3456.78, change: -1.23, icon: "Ξ" },
  { symbol: "SOL", name: "Solana", price: 185.42, change: 5.67, icon: "◎" },
  { symbol: "XRP", name: "Ripple", price: 2.15, change: 3.21, icon: "✕" },
  { symbol: "ADA", name: "Cardano", price: 0.89, change: -0.45, icon: "₳" },
  { symbol: "DOGE", name: "Dogecoin", price: 0.32, change: 8.92, icon: "Ð" },
];

const LiveRates = () => {
  return (
    <section id="rates" className="py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Актуальные <span className="gradient-text">курсы</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Отслеживайте курсы криптовалют в реальном времени и обменивайте по лучшим ценам.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 px-4 py-3 text-sm text-muted-foreground font-medium">
              <div>Криптовалюта</div>
              <div className="text-right">Цена (USD)</div>
              <div className="text-right">Изменение 24ч</div>
              <div className="text-right">Действие</div>
            </div>
            
            {/* Rows */}
            <div className="space-y-2">
              {cryptoRates.map((crypto, index) => (
                <div
                  key={crypto.symbol}
                  className="grid grid-cols-4 gap-4 items-center bg-card border border-border rounded-xl px-4 py-4 hover:border-primary/30 transition-all hover:shadow-md"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-lg font-semibold">{crypto.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{crypto.symbol}</div>
                      <div className="text-sm text-muted-foreground">{crypto.name}</div>
                    </div>
                  </div>
                  
                  <div className="text-right font-semibold">
                    ${crypto.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </div>
                  
                  <div className={`text-right flex items-center justify-end gap-1 ${
                    crypto.change >= 0 ? 'text-success' : 'text-destructive'
                  }`}>
                    {crypto.change >= 0 ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="font-medium">
                      {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%
                    </span>
                  </div>
                  
                  <div className="text-right">
                    <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                      Обменять
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveRates;
