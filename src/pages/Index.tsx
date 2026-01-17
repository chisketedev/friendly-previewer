import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuDivider from "@/components/MenuDivider";
import StickmanWorld from "@/components/stickman/StickmanWorld";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MenuDivider />
        <div id="menu-zones">
          <StickmanWorld />
        </div>
        <VisitUs />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
