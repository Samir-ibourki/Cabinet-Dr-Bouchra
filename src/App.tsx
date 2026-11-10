import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import heroBg from "./assets/hero.jpg";
import CabinetSection from "./components/CabinetSection";
import SpecialitesSection from "./components/SpecialitesSection";
import FAQSection from "./components/FaqSection";
import ContactSection from "./components/Contact";
import { navLinks } from "./utils/utils";

export default function App() {
  const [activeSection, setActiveSection] = useState("accueil");

  // Scroll to a section (navbar links, hero buttons, "Prendre rendez-vous")
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  // Updates the active navbar link while the user scrolls
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && setActiveSection(e.target.id),
        ),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

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
            onSelectSection={goTo}
            onOpenBooking={() => goTo("contact")}
          />

          <div className="flex-1 flex items-center">
            <div className="w-full">
              <HeroSection
                onOpenBooking={() => goTo("contact")}
                onDiscoverCabinet={() => goTo("cabinet")}
              />
            </div>
          </div>
        </div>
      </section>
      <SpecialitesSection />
      <CabinetSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
