import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Calendar, ChevronDown, Menu, X } from "lucide-react";
import gsap from "gsap";
import logo from "../assets/logo.png";
import { navLinks } from "../utils/utils";

interface NavbarProps {
  activeSection?: string;
  onSelectSection?: (id: string) => void;
  onOpenBooking?: () => void;
}

export default function Navbar({
  activeSection = "accueil",
  onSelectSection,
  onOpenBooking,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  /* 1) Animation d'entrée (une seule fois au chargement) */
  useLayoutEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-anim='logo']",
        { y: -20, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, clearProps: "all" },
      )
        .fromTo(
          "[data-anim='link']",
          { y: -16, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.07,
            clearProps: "all",
          },
          "-=0.35",
        )
        .fromTo(
          "[data-anim='right']",
          { y: -16, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.5, clearProps: "all" },
          "-=0.4",
        );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  /* 2) Souligné qui glisse vers le lien actif (desktop) */
  useEffect(() => {
    const el = linkRefs.current[activeSection];
    const bar = underlineRef.current;
    const nav = desktopNavRef.current;
    if (!el || !bar || !nav) return;

    const move = () => {
      const navBox = nav.getBoundingClientRect();
      const box = el.getBoundingClientRect();
      gsap.to(bar, {
        x: box.left - navBox.left,
        width: box.width,
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    move();
    window.addEventListener("resize", move);
    return () => window.removeEventListener("resize", move);
  }, [activeSection]);

  /* 3) Ouverture / fermeture du menu mobile */
  useEffect(() => {
    const drawer = drawerRef.current;
    if (!drawer) return;

    const items = drawer.querySelectorAll("[data-anim='m-item']");

    if (mobileMenuOpen) {
      gsap.killTweensOf([drawer, items]);
      gsap.set(drawer, { display: "block" });
      gsap.fromTo(
        drawer,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" },
      );
      gsap.fromTo(
        items,
        { x: -16, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.05,
          delay: 0.1,
          ease: "power2.out",
        },
      );
    } else {
      gsap.killTweensOf([drawer, items]);
      gsap.to(drawer, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(drawer, { display: "none" });
        },
      });
    }
  }, [mobileMenuOpen]);

  /* Ferme le menu si on passe en desktop */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    onSelectSection?.(id);
    setMobileMenuOpen(false);
  };

  return (
    <header ref={headerRef} className="relative z-30 w-full">
      <div className="w-[92%] sm:w-[90%] max-w-350 h-20 sm:h-24 lg:h-20 mx-auto flex items-center justify-between gap-3 sm:gap-6">
        {/* Logo */}
        <a
          href="#accueil"
          data-anim="logo"
          className="flex items-center shrink-0 transition-opacity hover:opacity-90"
        >
          <img
            src={logo}
            alt="Dr. Bouchra El Berhichi — Pneumologie & Allergologie"
            className="h-24 sm:h-28 lg:h-26 w-auto object-contain"
          />
        </a>

        {/* Navigation desktop (>= 1024px) */}
        <nav
          ref={desktopNavRef}
          className="relative hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-medium"
        >
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                ref={(el) => {
                  linkRefs.current[item.id] = el;
                }}
                data-anim="link"
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`py-1.5 transition-colors whitespace-nowrap ${
                  isActive
                    ? "text-[#CC5778] font-semibold"
                    : "text-[#173D55] hover:text-[#CC5778]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          {/* Barre animée par GSAP */}
          <span
            ref={underlineRef}
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-[2.5px] w-0 opacity-0 bg-[#CC5778] rounded-full"
          />
        </nav>

        {/* CTA + langue + burger */}
        <div
          data-anim="right"
          className="flex items-center gap-2 sm:gap-4 shrink-0"
        >
          <button
            type="button"
            className="flex items-center gap-1 text-[13px] sm:text-[14px] font-semibold text-[#173D55] hover:text-[#CC5778] transition-colors py-1.5 px-1.5 sm:px-2"
          >
            <span>FR</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#536A7C]" />
          </button>

          {/* Bouton RDV : texte complet dès sm (tablette), icône seule sur mobile */}
          <button
            type="button"
            onClick={onOpenBooking}
            aria-label="Prendre rendez-vous"
            className="h-9 w-9 sm:w-auto sm:px-5 rounded-full bg-[#CC5778] hover:bg-[#B84768] active:scale-[0.97] text-white text-[14.5px] font-medium inline-flex items-center justify-center sm:gap-2.5 shadow-[0_6px_20px_rgba(204,87,120,0.30)] transition-colors whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-white shrink-0" />
            <span className="hidden sm:inline">Prendre rendez-vous</span>
          </button>

          {/* Burger (< 1024px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Ouvrir ou fermer le menu"
            aria-expanded={mobileMenuOpen}
            className="lg:hidden h-10 w-10 rounded-xl bg-white/80 border border-[#D4E2EB] text-[#173D55] inline-flex items-center justify-center cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile / tablette — toujours dans le DOM, GSAP gère l'affichage */}
      <div
        ref={drawerRef}
        style={{ display: "none", height: 0, opacity: 0 }}
        className="lg:hidden absolute top-full left-0 w-full overflow-hidden bg-white/95 backdrop-blur-md border-b border-[#D4E2EB] shadow-lg"
      >
        <nav className="flex flex-col gap-1 px-5 sm:px-8 py-4 max-h-[calc(100vh-6rem)] overflow-y-auto">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                data-anim="m-item"
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`py-3 px-3 rounded-lg text-[16px] font-medium transition-colors ${
                  isActive
                    ? "bg-[#CC5778]/10 text-[#CC5778] font-semibold"
                    : "text-[#173D55] hover:bg-[#F0F4F8]"
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <button
            type="button"
            data-anim="m-item"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking?.();
            }}
            className="mt-3 h-11 rounded-full bg-[#CC5778] text-white font-medium inline-flex items-center justify-center gap-2 sm:hidden"
          >
            <Calendar className="w-4 h-4" />
            Prendre rendez-vous
          </button>
        </nav>
      </div>
    </header>
  );
}
