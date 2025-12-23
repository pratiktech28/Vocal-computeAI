import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AIAssistant from "@/components/AIAssistant";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AIAssistant />
      <Features />
      <Footer />
    </main>
  );
};

export default Index;
