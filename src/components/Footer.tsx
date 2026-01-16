import { ArrowRight, Mail, MessageCircle, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t('footer.cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              {t('footer.cta.desc')}
            </p>
            <Button variant="gradient" size="xl">
              {t('footer.cta.button')}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 border-t border-border">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">CS</span>
              </div>
              <span className="font-display font-bold text-xl">CryptoSwap</span>
            </div>
            <p className="text-muted-foreground mb-4">
              {t('footer.brand_desc')}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.product.title')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('footer.product.exchange')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('footer.product.rates')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('footer.product.api')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('footer.product.mobile')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.company.title')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('footer.company.about')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('footer.company.blog')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('footer.company.careers')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('footer.company.contacts')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.support.title')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('footer.support.faq')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('footer.support.service')}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t('footer.support.status')}</a></li>
              <li>
                <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  support@cryptoswap.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom */}
      <div className="container mx-auto px-4 py-6 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('footer.aml')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
