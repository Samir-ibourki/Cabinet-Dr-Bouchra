import React, { useLayoutEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import doctorImg from "../assets/dr.png";
import { respiratoryServices } from "../utils/utils";

gsap.registerPlugin(ScrollTrigger);

const COLUMNS = [
  {
    key: "left",
    label: "Pneumologie",
    color: "#CC5778",
    items: respiratoryServices.slice(0, 3),
  },
  {
    key: "right",
    label: "Allergologie",
    color: "#3D8CA0",
    items: respiratoryServices.slice(3, 6),
  },
];

export default function SpecialitesSection() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia(root);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const trigger = {
        trigger: "[data-anim='spec-grid']",
        start: "top 78%",
        once: true,
      };

      gsap.fromTo(
        "[data-anim='spec-head']",
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: { trigger: root, start: "top 80%", once: true },
        },
      );

      gsap.fromTo(
        "[data-anim='spec-doctor']",
        { y: 40, autoAlpha: 0, scale: 0.95 },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: trigger,
        },
      );

      (["left", "right"] as const).forEach((side) => {
        gsap.fromTo(
          `[data-anim='spec-${side}']`,
          { x: side === "left" ? -30 : 30, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.14,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: trigger,
          },
        );
      });

      gsap.fromTo(
        "[data-anim='spec-cta']",
        { y: 20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: "[data-anim='spec-cta']",
            start: "top 95%",
            once: true,
          },
        },
      );

      gsap.to("[data-anim='spec-ring']", {
        rotation: 360,
        duration: 80,
        ease: "none",
        repeat: -1,
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="specialites"
      aria-labelledby="specialites-title"
      className="relative w-full overflow-hidden bg-[#F8FAFC] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-340 px-5 sm:px-8 lg:px-12">
        {/* head */}
        <div
          data-anim="spec-head"
          className="mx-auto mb-14 sm:mb-20 flex max-w-3xl flex-col items-center text-center"
        >
          <h2
            id="specialites-title"
            className="text-[clamp(2rem,4.6vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#173D55]"
          >
            Des soins spécialisés, à votre écoute.
          </h2>
          <p className="mt-4 max-w-xl text-[16px] sm:text-[17px] leading-relaxed text-[#536A7C]">
            Des examens avancés et un accompagnement médical bienveillant,
            adaptés à chaque étape de votre santé respiratoire.
          </p>
        </div>

        {/* ---- */}
        <div
          data-anim="spec-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 items-center gap-x-8 gap-y-12 lg:gap-x-6"
        >
          {/* Doctor (first on mobile, centered on desktop) */}
          <div
            data-anim="spec-doctor"
            className="relative order-1 flex items-end justify-center sm:col-span-2 lg:order-2 lg:col-span-4"
          >
            <div
              data-anim="spec-ring"
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 z-0 h-75 w-75 -translate-x-1/2 rounded-full border border-dashed border-[#3D8CA0]/40 sm:h-95 sm:w-95 lg:h-110 lg:w-110"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-4 left-1/2 z-0 h-65 w-65 -translate-x-1/2 rounded-full bg-linear-to-t from-[#D7E8F1] via-[#EAF3F8] to-transparent sm:h-82.5 sm:w-82.5 lg:h-97.5 lg:w-97.5"
            />
            <img
              src={doctorImg}
              alt="Dr. Bouchra El Berhichi, médecin spécialiste en pneumologie et allergologie"
              loading="lazy"
              className="relative z-10 max-h-90 w-auto select-none object-contain object-bottom drop-shadow-[0_18px_35px_rgba(23,61,85,0.14)] sm:max-h-110 lg:max-h-130"
            />
          </div>

          {COLUMNS.map(({ key, label, color, items }) => (
            <div
              key={key}
              style={{ "--c": color } as React.CSSProperties}
              className={`${
                key === "left" ? "order-2 lg:order-1" : "order-3"
              } lg:col-span-4`}
            >
              {/* Column label ties each side to one specialty */}
              <p className="mb-6 sm:mb-8 flex items-center gap-3 text-[15px] font-semibold text-(--c)">
                <span aria-hidden="true" className="h-px w-8 bg-(--c)" />
                {label}
              </p>

              <ul className="space-y-8 sm:space-y-10 lg:space-y-12">
                {items.map(({ label: name, detail, icon: Icon }) => (
                  <li
                    key={name}
                    data-anim={`spec-${key}`}
                    className="group flex items-start gap-4 sm:gap-5"
                  >
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-slate-100 bg-white shadow-[0_8px_25px_rgba(23,61,85,0.08)] transition-[transform,background-color,box-shadow] duration-300 group-hover:scale-105 group-hover:bg-(--c) group-hover:shadow-[0_12px_30px_rgba(23,61,85,0.18)] sm:h-17.5 sm:w-17.5">
                      <Icon
                        className="h-7 w-7 text-(--c) transition-colors duration-300 group-hover:text-white sm:h-8 sm:w-8"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="flex-1 pt-1 text-left">
                      <h3 className="text-[17px] sm:text-[18px] font-bold leading-snug text-[#173D55]">
                        {name}
                      </h3>
                      <p className="mt-1 max-w-72.5 text-[14.5px] leading-relaxed text-[#536A7C]">
                        {detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* btn */}
        <div
          data-anim="spec-cta"
          className="mt-14 sm:mt-20 flex justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex h-13.5 items-center gap-2.5 rounded-full bg-[#CC5778] px-7 text-[15px] font-medium text-white shadow-[0_10px_25px_rgba(204,87,120,0.32)] transition-colors hover:bg-[#B84768]"
          >
            Prendre rendez-vous
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
