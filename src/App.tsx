import { useState } from "react";
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import heroBg from "./assets/hero.jpg";
import CabinetSection from "./components/CabinetSection";
import SpecialitesSection from "./components/SpecialitesSection";

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function App() {
  const [activeSection, setActiveSection] = useState("accueil");

  const bg = { backgroundImage: `url(${heroBg})` };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAFC] text-[#173D55]">
      <section
        id="accueil"
        className="relative w-full overflow-hidden bg-[#E9F2F7]"
        aria-label="Cabinet Dr. Bouchra El Berhichi"
      >
        {/* Navbar + contenu*/}
        <div
          style={bg}
          className="relative flex flex-col min-h-svh bg-no-repeat bg-top-left bg-size-[auto_165%] md:bg-size-[auto_190%] lg:bg-cover lg:bg-center"
        >
          <Navbar
            activeSection={activeSection}
            onSelectSection={(id) => setActiveSection(id)}
            onOpenBooking={() => scrollToId("contact")}
          />

          <div className="flex-1 flex items-center">
            <div className="w-full">
              <HeroSection
                onOpenBooking={() => scrollToId("contact")}
                onDiscoverCabinet={() => scrollToId("cabinet")}
              />
            </div>
          </div>
        </div>
      </section>
      <CabinetSection />
      <SpecialitesSection />
    </div>
  );
}
