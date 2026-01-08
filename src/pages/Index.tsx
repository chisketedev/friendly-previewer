import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StickmanWorld from "@/components/stickman/StickmanWorld";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div id="menu-zones">
          <StickmanWorld />
        </div>
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
