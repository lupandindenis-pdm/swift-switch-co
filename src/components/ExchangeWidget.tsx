import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownUp, ChevronDown } from "lucide-react";

const cryptoList = [
  { symbol: "BTC", name: "Bitcoin", icon: "₿", rate: 97500 },
  { symbol: "ETH", name: "Ethereum", icon: "Ξ", rate: 3450 },
  { symbol: "USDT", name: "Tether", icon: "₮", rate: 1 },
  { symbol: "SOL", name: "Solana", icon: "◎", rate: 185 },
  { symbol: "XRP", name: "Ripple", icon: "✕", rate: 2.15 },
];

const ExchangeWidget = () => {
  const [fromCrypto, setFromCrypto] = useState(cryptoList[0]);
  const [toCrypto, setToCrypto] = useState(cryptoList[1]);
  const [fromAmount, setFromAmount] = useState("1");
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  const calculateToAmount = () => {
    const amount = parseFloat(fromAmount) || 0;
    const rate = fromCrypto.rate / toCrypto.rate;
    return (amount * rate).toFixed(6);
  };

  const handleSwap = () => {
    const temp = fromCrypto;
    setFromCrypto(toCrypto);
    setToCrypto(temp);
  };

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
      
      <div className="relative bg-card border border-border rounded-2xl p-6 shadow-xl">
        <h3 className="font-display font-semibold text-lg mb-6">Обменять криптовалюту</h3>
        
        {/* From Section */}
        <div className="bg-secondary/50 rounded-xl p-4 mb-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Отдаёте</span>
            <span className="text-sm text-muted-foreground">Баланс: 0.00</span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="number"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="flex-1 bg-transparent text-2xl font-semibold outline-none"
              placeholder="0"
            />
            <div className="relative">
              <button
                onClick={() => {
                  setShowFromDropdown(!showFromDropdown);
                  setShowToDropdown(false);
                }}
                className="flex items-center gap-2 bg-background rounded-lg px-3 py-2 hover:bg-muted transition-colors"
              >
                <span className="text-lg">{fromCrypto.icon}</span>
                <span className="font-semibold">{fromCrypto.symbol}</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
              
              {showFromDropdown && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg z-10 animate-scale-in">
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
            className="p-3 bg-primary rounded-full hover:bg-primary/90 transition-all hover:scale-110 shadow-lg"
          >
            <ArrowDownUp className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
        
        {/* To Section */}
        <div className="bg-secondary/50 rounded-xl p-4 mt-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Получаете</span>
            <span className="text-sm text-accent">Лучший курс</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex-1 text-2xl font-semibold text-foreground">
              {calculateToAmount()}
            </div>
            <div className="relative">
              <button
                onClick={() => {
                  setShowToDropdown(!showToDropdown);
                  setShowFromDropdown(false);
                }}
                className="flex items-center gap-2 bg-background rounded-lg px-3 py-2 hover:bg-muted transition-colors"
              >
                <span className="text-lg">{toCrypto.icon}</span>
                <span className="font-semibold">{toCrypto.symbol}</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
              
              {showToDropdown && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg z-10 animate-scale-in">
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
          <span className="text-muted-foreground">Курс</span>
          <span className="font-medium">
            1 {fromCrypto.symbol} = {(fromCrypto.rate / toCrypto.rate).toFixed(4)} {toCrypto.symbol}
          </span>
        </div>
        
        {/* CTA Button */}
        <Button variant="gradient" className="w-full mt-6" size="lg">
          Обменять сейчас
        </Button>
        
        {/* Fee info */}
        <p className="text-center text-xs text-muted-foreground mt-4">
          Комиссия сети включена • Без скрытых платежей
        </p>
      </div>
    </div>
  );
};

export default ExchangeWidget;
