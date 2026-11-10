import React, { useLayoutEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import doctorImg from "../assets/dr.png";
import { respiratoryServices, Steps } from "../utils/utils";

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

const INTRO =
  "Pneumologue et allergologue, le Dr Bouchra El Berhichi a exercé dans plusieurs établissements hospitaliers, à Dakar, à Marrakech et dans le Sud-Ouest de la France, avant d'ouvrir son cabinet à Inezgane.";

// ⚠️ To confirm with the doctor before publishing
const APPROACH =
  "Une écoute attentive, des explications claires et une prise en charge adaptée à chaque patient.";

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

      /* ---- À propos ---- */
      gsap.fromTo(
        "[data-anim='about-left'] > *",
        { y: 24, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: "[data-anim='about-left']",
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        "[data-anim='about-title']",
        { y: 24, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: "[data-anim='about-title']",
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        "[data-anim='about-line']",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-anim='about-steps']",
            start: "top 75%",
            end: "bottom 65%",
            scrub: true,
          },
        },
      );

      gsap.utils
        .toArray<HTMLElement>("[data-anim='about-step']")
        .forEach((li) => {
          const st = { trigger: li, start: "top 85%", once: true };
          gsap.fromTo(
            li.querySelector("[data-anim='about-dot']"),
            { scale: 0 },
            { scale: 1, duration: 0.5, ease: "back.out(2)", scrollTrigger: st },
          );
          gsap.fromTo(
            li.querySelector("[data-anim='about-step-body']"),
            { y: 22, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              ease: "power3.out",
              clearProps: "all",
              scrollTrigger: st,
            },
          );
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

        {/* a propos */}
        <div
          id="apropos"
          className="mt-20 scroll-mt-24 border-t border-[#D4E2EB] pt-16 sm:mt-28 sm:pt-20 lg:mt-32 lg:pt-24"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
            {/* Left: who she is */}
            <div
              data-anim="about-left"
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <p className="flex items-center gap-3 text-[15px] font-semibold text-[#3D8CA0]">
                <span aria-hidden="true" className="h-px w-8 bg-[#3D8CA0]" />À
                propos du médecin
              </p>

              <h3 className="mt-4 text-[clamp(2.2rem,4.6vw,3.8rem)] font-extrabold leading-[1.03] tracking-[-0.03em] text-[#173D55]">
                Dr Bouchra El Berhichi
              </h3>

              <p className="mt-3 text-[clamp(1.1rem,1.8vw,1.4rem)] font-semibold tracking-[-0.01em] text-[#CC5778]">
                Pneumologue &amp; Allergologue
              </p>

              <p className="mt-6 max-w-136 text-[16px] leading-[1.65] text-[#536A7C] sm:text-[17px]">
                {INTRO}
              </p>

              <div className="mt-8 max-w-136 border-t border-[#D4E2EB] pt-6">
                <p className="text-[14px] font-semibold text-[#173D55]">
                  Mon approche
                </p>
                <p className="mt-2 text-[16px] leading-[1.6] text-[#536A7C]">
                  {APPROACH}
                </p>
              </div>
            </div>

            {/* Right: career timeline */}
            <div>
              <h4
                data-anim="about-title"
                className="text-[clamp(1.4rem,2.4vw,1.9rem)] font-bold tracking-[-0.02em] text-[#173D55]"
              >
                Un parcours au service de votre santé.
              </h4>

              <div data-anim="about-steps" className="relative mt-8">
                <span
                  data-anim="about-line"
                  aria-hidden="true"
                  className="absolute bottom-2 left-1.75 top-2 w-px origin-top bg-[#3D8CA0]/50"
                />

                <ol>
                  {Steps.map((s) => (
                    <li
                      key={s.title}
                      data-anim="about-step"
                      className="relative pb-10 pl-10 last:pb-0"
                    >
                      <span
                        data-anim="about-dot"
                        aria-hidden="true"
                        className="absolute left-0 top-1.75 h-3.75 w-3.75 rounded-full border-2 border-[#3D8CA0] bg-[#F8FAFC]"
                      />
                      <div data-anim="about-step-body">
                        <h5 className="text-[20px] font-bold tracking-[-0.01em] text-[#173D55] sm:text-[22px]">
                          {s.title}
                        </h5>
                        <ul className="mt-2 space-y-1">
                          {s.places.map((p) => (
                            <li
                              key={p}
                              className="text-[16px] leading-normal text-[#536A7C]"
                            >
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
