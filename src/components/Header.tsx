import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CS</span>
            </div>
            <span className="font-display font-bold text-xl">CryptoSwap</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Возможности
            </a>
            <a href="#rates" className="text-muted-foreground hover:text-foreground transition-colors">
              Курсы
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              Как это работает
            </a>
            <a href="#trust" className="text-muted-foreground hover:text-foreground transition-colors">
              Безопасность
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm">
              Войти
            </Button>
            <Button variant="gradient" size="sm">
              Начать обмен
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Возможности
              </a>
              <a href="#rates" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Курсы
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Как это работает
              </a>
              <a href="#trust" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Безопасность
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" className="w-full">
                  Войти
                </Button>
                <Button variant="gradient" className="w-full">
                  Начать обмен
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
