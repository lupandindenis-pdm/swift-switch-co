import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import LiveRates from "@/components/LiveRates";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <LiveRates />
        <HowItWorks />
        <Trust />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
