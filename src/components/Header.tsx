import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

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
              {t('nav.features')}
            </a>
            <a href="#rates" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.rates')}
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('nav.howItWorks')}
            </a>
            <a href="#trust" className="text-muted-foreground hover:text-foreground transition-colors">
              {t('features.items.security.title')}
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={toggleLanguage} className="rounded-full">
              <span className="font-bold text-xs">{language.toUpperCase()}</span>
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="sm">
              {t('nav.login')}
            </Button>
            <Button variant="gradient" size="sm">
              {t('nav.getStarted')}
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
                {t('nav.features')}
              </a>
              <a href="#rates" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                {t('nav.rates')}
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                {t('nav.howItWorks')}
              </a>
              <a href="#trust" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                {t('features.items.security.title')}
              </a>
              <div className="flex items-center justify-between py-2">
                 <span className="text-muted-foreground">Language</span>
                 <Button variant="ghost" size="sm" onClick={toggleLanguage}>
                   <Globe className="w-4 h-4 mr-2" />
                   {language === 'ru' ? 'English' : 'Русский'}
                 </Button>
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" className="w-full">
                  {t('nav.login')}
                </Button>
                <Button variant="gradient" className="w-full">
                  {t('nav.getStarted')}
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
