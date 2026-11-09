import React, { useLayoutEffect, useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import gsap from "gsap";
import {
  AllergologyIcon,
  CareHeartIcon,
  ClinicBuildingIcon,
  LungsIcon,
  StethoscopeBadgeIcon,
} from "./MedicalIcons";

interface HeroSectionProps {
  onOpenBooking?: () => void;
  onDiscoverCabinet?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onDiscoverCabinet,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia(root);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        "[data-hero='badge']",
        { y: 16, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, clearProps: "all" },
      )
        // titre
        .fromTo(
          "[data-hero='line']",
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power4.out",
            clearProps: "all",
          },
          "-=0.3",
        )
        .fromTo(
          "[data-hero='sub']",
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7, clearProps: "all" },
          "-=0.5",
        )
        .fromTo(
          "[data-hero='cta']",
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            stagger: 0.1,
            clearProps: "all",
          },
          "-=0.45",
        )
        .fromTo(
          "[data-hero='pillar']",
          { y: 16, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            stagger: 0.12,
            clearProps: "all",
          },
          "-=0.35",
        )
        .fromTo(
          "[data-hero='divider']",
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 0.5,
            stagger: 0.12,
            transformOrigin: "center",
            clearProps: "all",
          },
          "<0.15",
        );
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative z-10 w-[92%] sm:w-[90%] max-w-350 mx-auto pt-4 sm:pt-8 lg:pt-12 pb-12 sm:pb-16 lg:pb-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* colonne left */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <div
            data-hero="badge"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#E5EFF5]/90 border border-[#D0E2EC] shadow-[0_2px_8px_rgba(23,61,85,0.04)] backdrop-blur-xs"
          >
            <StethoscopeBadgeIcon className="w-4 h-4 shrink-0 text-[#3D8CA0]" />
            <span className="text-[#173D55] text-[13px] sm:text-[14.5px] font-medium tracking-tight">
              Cabinet de Pneumologie &amp; Allergologie
            </span>
          </div>

          {/* titre */}
          <h1 className="mt-6 sm:mt-7 font-extrabold tracking-[-0.02em] leading-[1.08] text-[36px] min-[420px]:text-[42px] sm:text-[54px] md:text-[60px] xl:text-[62px]">
            <span className="block overflow-hidden pb-[0.12em]">
              <span data-hero="line" className="block text-[#173D55]">
                Respirez mieux.
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.12em] mt-[-0.12em]">
              <span data-hero="line" className="block text-[#CC5778]">
                Vivez pleinement.
              </span>
            </span>
          </h1>

          {/* description */}
          <p
            data-hero="sub"
            className="mt-4 sm:mt-6 text-[#536A7C] text-[16px] sm:text-[18px] leading-[1.55] font-normal max-w-122.5"
          >
            Une prise en charge attentive et spécialisée en pneumologie et
            allergologie, pour mieux comprendre votre santé respiratoire.
          </p>

          {/* boutons */}
          <div className="mt-8 sm:mt-9 w-full sm:w-auto flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              type="button"
              data-hero="cta"
              onClick={onOpenBooking}
              className="h-13 px-6 sm:px-7 rounded-full bg-[#CC5778] hover:bg-[#B84768] active:scale-[0.98] text-white text-[15px] font-medium inline-flex items-center justify-center gap-2.5 shadow-[0_10px_25px_rgba(204,87,120,0.32)] transition-colors whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white shrink-0" />
              <span>Prendre rendez-vous</span>
              <ArrowRight className="w-4 h-4 text-white shrink-0 ml-0.5" />
            </button>

            <button
              type="button"
              data-hero="cta"
              onClick={onDiscoverCabinet}
              className="h-13 px-6 sm:px-7 rounded-full bg-white/70 hover:bg-white active:scale-[0.98] border border-[#536A7C]/40 text-[#173D55] text-[15px] font-medium inline-flex items-center justify-center gap-2.5 shadow-[0_4px_14px_rgba(23,61,85,0.05)] transition-colors whitespace-nowrap backdrop-blur-xs cursor-pointer"
            >
              <ClinicBuildingIcon className="w-4 h-4 text-[#173D55] shrink-0" />
              <span>Découvrir le cabinet</span>
              <ArrowRight className="w-4 h-4 text-[#173D55] shrink-0 ml-0.5" />
            </button>
          </div>

          {/* 3 piliers */}
          <div className="mt-10 sm:mt-14 lg:mt-16 pt-1 w-full max-w-162.5 flex flex-wrap items-center gap-y-5 md:flex-nowrap md:gap-0">
            <div
              data-hero="pillar"
              className="flex items-center gap-3 w-1/2 md:w-auto md:pr-8"
            >
              <LungsIcon className="w-9 h-9 shrink-0 text-[#3D8CA0]" />
              <div className="text-[#173D55] text-[14px] sm:text-[14.5px] leading-tight font-medium">
                <span className="block font-semibold">Pneumologie</span>
                <span className="block text-[#536A7C]">experte</span>
              </div>
            </div>

            <div
              data-hero="divider"
              className="hidden md:block h-9 w-px bg-[#536A7C]/30 shrink-0"
              aria-hidden="true"
            />

            <div
              data-hero="pillar"
              className="flex items-center gap-3 w-1/2 md:w-auto md:px-8"
            >
              <AllergologyIcon className="w-9 h-9 shrink-0 text-[#3D8CA0]" />
              <div className="text-[#173D55] text-[14px] sm:text-[14.5px] leading-tight font-medium">
                <span className="block font-semibold">Allergologie</span>
                <span className="block text-[#536A7C]">spécialisée</span>
              </div>
            </div>

            <div
              data-hero="divider"
              className="hidden md:block h-9 w-px bg-[#536A7C]/30 shrink-0"
              aria-hidden="true"
            />

            <div
              data-hero="pillar"
              className="flex items-center gap-3 w-full md:w-auto md:justify-start md:pl-8"
            >
              <CareHeartIcon className="w-9 h-9 shrink-0 text-[#3D8CA0]" />
              <div className="text-[#173D55] text-[14px] sm:text-[14.5px] leading-tight font-medium">
                <span className="block font-semibold">Un accompagnement</span>
                <span className="block text-[#536A7C]">bienveillant</span>
              </div>
            </div>
          </div>
        </div>

        {/* colonne right */}
        <div
          className="hidden lg:block lg:col-span-5 min-h-125"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
