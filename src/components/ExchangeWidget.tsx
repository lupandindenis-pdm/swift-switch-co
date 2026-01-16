import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownUp, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const cryptoList = [
  { symbol: "BTC", name: "Bitcoin", icon: "₿", rate: 97500 },
  { symbol: "ETH", name: "Ethereum", icon: "Ξ", rate: 3450 },
  { symbol: "USDT", name: "Tether", icon: "₮", rate: 1 },
  { symbol: "SOL", name: "Solana", icon: "◎", rate: 185 },
  { symbol: "XRP", name: "Ripple", icon: "✕", rate: 2.15 },
];

const ExchangeWidget = () => {
  const { t } = useLanguage();
  const [fromCrypto, setFromCrypto] = useState(cryptoList[0]);
  const [toCrypto, setToCrypto] = useState(cryptoList[1]);
  const [fromAmount, setFromAmount] = useState("1");
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);

  const calculateToAmount = () => {
    const amount = parseFloat(fromAmount) || 0;
    const rate = fromCrypto.rate / toCrypto.rate;
    return (amount * rate).toFixed(6);
  };

  const handleSwap = () => {
    setIsSwapping(true);
    setTimeout(() => setIsSwapping(false), 500);
    const temp = fromCrypto;
    setFromCrypto(toCrypto);
    setToCrypto(temp);
  };

  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl group-hover:from-primary/30 group-hover:to-accent/30" />
      
      <div className="relative bg-card border border-border rounded-2xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
        <h3 className="font-display font-semibold text-lg mb-6">{t('exchange.title')}</h3>
        
        {/* From Section */}
        <div className="bg-secondary/50 rounded-xl p-4 mb-3 transition-colors hover:bg-secondary/70">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">{t('exchange.give')}</span>
            <span className="text-sm text-muted-foreground">{t('exchange.balance')}: 0.00</span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="flex-1 bg-transparent text-2xl font-semibold outline-none transition-all focus:scale-[1.02] origin-left"
              placeholder="0"
            />
            <div className="relative">
              <button
                onClick={() => {
                  setShowFromDropdown(!showFromDropdown);
                  setShowToDropdown(false);
                }}
                className="flex items-center gap-2 bg-background rounded-lg px-3 py-2 hover:bg-muted transition-all active:scale-95"
              >
                <span className="text-lg">{fromCrypto.icon}</span>
                <span className="font-semibold">{fromCrypto.symbol}</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${showFromDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showFromDropdown && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg z-10 animate-scale-in origin-top-right">
                  {cryptoList.map((crypto) => (
                    <button
                      key={crypto.symbol}
                      onClick={() => {
                        setFromCrypto(crypto);
                        setShowFromDropdown(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      <span className="text-lg">{crypto.icon}</span>
                      <div className="text-left">
                        <div className="font-semibold">{crypto.symbol}</div>
                        <div className="text-xs text-muted-foreground">{crypto.name}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Swap Button */}
        <div className="flex justify-center -my-1 relative z-10">
          <button
            onClick={handleSwap}
            className={`p-3 bg-primary rounded-full hover:bg-primary/90 transition-all hover:scale-110 shadow-lg hover:shadow-primary/50 ${isSwapping ? 'animate-shake' : ''}`}
          >
            <ArrowDownUp className={`w-5 h-5 text-primary-foreground transition-transform duration-500 ${isSwapping ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        {/* To Section */}
        <div className="bg-secondary/50 rounded-xl p-4 mt-3 transition-colors hover:bg-secondary/70">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">{t('exchange.get')}</span>
            <span className="text-sm text-accent animate-pulse">{t('exchange.best_rate')}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 text-2xl font-semibold text-foreground transition-all">
              {calculateToAmount()}
            </div>
            <div className="relative">
              <button
                onClick={() => {
                  setShowToDropdown(!showToDropdown);
                  setShowFromDropdown(false);
                }}
                className="flex items-center gap-2 bg-background rounded-lg px-3 py-2 hover:bg-muted transition-all active:scale-95"
              >
                <span className="text-lg">{toCrypto.icon}</span>
                <span className="font-semibold">{toCrypto.symbol}</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${showToDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showToDropdown && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg z-10 animate-scale-in origin-top-right">
                  {cryptoList.map((crypto) => (
                    <button
                      key={crypto.symbol}
                      onClick={() => {
                        setToCrypto(crypto);
                        setShowToDropdown(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      <span className="text-lg">{crypto.icon}</span>
                      <div className="text-left">
                        <div className="font-semibold">{crypto.symbol}</div>
                        <div className="text-xs text-muted-foreground">{crypto.name}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Exchange Rate */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <span className="text-muted-foreground">{t('exchange.rate')}</span>
          <span className="font-medium">
            1 {fromCrypto.symbol} = {(fromCrypto.rate / toCrypto.rate).toFixed(4)} {toCrypto.symbol}
          </span>
        </div>
        
        {/* CTA Button */}
        <Button variant="gradient" className="w-full mt-6 group relative overflow-hidden" size="lg">
          <span className="relative z-10">{t('exchange.action')}</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </Button>
        
        {/* Fee info */}
        <p className="text-center text-xs text-muted-foreground mt-4">
          {t('exchange.fee')}
        </p>
      </div>
    </div>
  );
};

export default ExchangeWidget;
