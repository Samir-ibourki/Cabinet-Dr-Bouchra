import React, { useLayoutEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import photoMain from "../assets/img2.jpg";
import photoA from "../assets/br.jpg";
import photoB from "../assets/img3.jpg";
import { STEPS } from "../utils/utils";

gsap.registerPlugin(ScrollTrigger);

const INTRO =
  "Du premier accueil au suivi, chaque étape de votre visite est pensée pour être simple, claire et rassurante.";

const PHOTOS = [
  { src: photoMain, label: "Salle de consultation" },
  { src: photoA, label: "Salle d'attente" },
  { src: photoB, label: "Matériel d'examen" },
];

/* Accent color: rose now. For blue use #006cd2 */
const tokens = { "--cab-accent": "#CC5778" } as React.CSSProperties;

const CSS = `
.cab-photo{position:relative;overflow:hidden;background:#E5EFF5}
.cab-photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.cab-glass{position:absolute;left:14px;bottom:14px;display:inline-flex;align-items:center;height:36px;padding:0 16px;background:rgba(0,0,0,.28);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);color:#fff;font-size:13px;font-weight:500;letter-spacing:-.01em}
`;

export default function CabinetSection() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia(root);

    /* All screens: header, photos, address/hours */
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap
        .timeline({
          defaults: { ease: "expo.out" },
          scrollTrigger: {
            trigger: "[data-cab='head']",
            start: "top 80%",
            once: true,
          },
        })
        .fromTo(
          "[data-cab='h2']",
          { yPercent: 110 },
          { yPercent: 0, duration: 1, clearProps: "all" },
        )
        .fromTo(
          "[data-cab='intro']",
          { y: 20, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, clearProps: "all" },
          "-=0.6",
        );

      gsap
        .timeline({
          defaults: { ease: "expo.out" },
          scrollTrigger: {
            trigger: "[data-cab='gallery']",
            start: "top 85%",
            once: true,
          },
        })
        .fromTo(
          "[data-cab='photo']",
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1,
            stagger: 0.12,
            clearProps: "clipPath",
          },
        )
        .fromTo(
          "[data-cab='photo'] img",
          { scale: 1.1 },
          { scale: 1, duration: 1.4, stagger: 0.12, clearProps: "all" },
          "<",
        )
        .fromTo(
          "[data-cab='cap']",
          { y: 10, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.1,
            clearProps: "all",
          },
          "-=0.5",
        );

      gsap
        .timeline({
          defaults: { ease: "expo.out" },
          scrollTrigger: {
            trigger: "[data-cab='info']",
            start: "top 90%",
            once: true,
          },
        })
        .fromTo(
          "[data-cab='info-line']",
          { scaleX: 0 },
          { scaleX: 1, duration: 1, ease: "expo.inOut" },
        )
        .fromTo(
          "[data-cab='info-body']",
          { y: 24, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.1,
            clearProps: "all",
          },
          "-=0.6",
        );
    });

    /* Desktop: the rule draws left → right, markers pop, columns rise */
    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap
          .timeline({
            defaults: { ease: "expo.out" },
            scrollTrigger: {
              trigger: "[data-cab='band']",
              start: "top 80%",
              once: true,
            },
          })
          .fromTo(
            "[data-cab='rule']",
            { scaleX: 0 },
            { scaleX: 1, duration: 1.4, ease: "expo.inOut" },
          )
          .fromTo(
            "[data-cab='dot']",
            { scale: 0 },
            { scale: 1, duration: 0.5, stagger: 0.28, ease: "back.out(2)" },
            0.1,
          )
          .fromTo(
            "[data-cab='body']",
            { y: 28, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              stagger: 0.28,
              clearProps: "all",
            },
            0.25,
          );
      },
    );

    /* Mobile / tablet: vertical rule follows the scroll, each step reveals in turn */
    mm.add(
      "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.fromTo(
          "[data-cab='rule']",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-cab='band']",
              start: "top 75%",
              end: "bottom 60%",
              scrub: true,
            },
          },
        );

        gsap.utils.toArray<HTMLElement>("[data-cab='item']").forEach((li) => {
          const st = { trigger: li, start: "top 85%", once: true };
          gsap.fromTo(
            li.querySelector("[data-cab='dot']"),
            { scale: 0 },
            { scale: 1, duration: 0.5, ease: "back.out(2)", scrollTrigger: st },
          );
          gsap.fromTo(
            li.querySelector("[data-cab='body']"),
            { y: 24, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              ease: "expo.out",
              clearProps: "all",
              scrollTrigger: st,
            },
          );
        });
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="cabinet"
      style={{
        ...tokens,
        fontFamily: '"Inter","Helvetica Neue",Helvetica,Arial,sans-serif',
      }}
      className="w-full bg-white text-[#0a0a0a] antialiased"
    >
      <style>{CSS}</style>

      <div className="mx-auto w-full max-w-350 px-[clamp(20px,3.52vw,64px)] py-20 sm:py-28 lg:py-20">
        {/*  heade titre centered*/}
        <div data-cab="head" className="flex flex-col items-center text-center">
          <h2 className="overflow-hidden pb-[0.1em]">
            <span
              data-cab="h2"
              className="block font-semibold tracking-[-0.038em] leading-[1.12] text-[clamp(2.2rem,5.2vw,4.5rem)]"
            >
              Un espace calme, pensé pour{" "}
              <span className="text-(--cab-accent)">mieux respirer.</span>
            </span>
          </h2>
          <p
            data-cab="intro"
            className="mt-5 sm:mt-6 w-full md:max-w-[66%] text-[#1a1a1a] font-light text-[clamp(17px,1.8vw,20px)] leading-normal tracking-[-0.01em]"
          >
            {INTRO}
          </p>
        </div>

        {/* Timeline band */}
        <div data-cab="band" className="relative mt-14 sm:mt-20 lg:mt-24">
          <span
            data-cab="rule"
            aria-hidden="true"
            className="absolute bg-[#0a0a0a]/25 origin-top lg:origin-left left-1.5 top-0 bottom-0 w-px lg:left-0 lg:right-0 lg:bottom-auto lg:h-px lg:w-auto"
          />

          <ol className="grid grid-cols-1 lg:grid-cols-4 gap-y-12 lg:gap-x-8">
            {STEPS.map(({ icon: Icon, badge, title, text, href, cta }) => (
              <li
                key={title}
                data-cab="item"
                className="relative flex flex-col pl-9 lg:pl-0 lg:pt-10"
              >
                <span
                  data-cab="dot"
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 lg:top-0 lg:-translate-y-1/2 h-3 w-3 rounded-full border-2 border-(--cab-accent) bg-white"
                />

                <div
                  data-cab="body"
                  className="flex flex-1 flex-col items-start"
                >
                  <span className="inline-flex h-8 items-center gap-2 border border-(--cab-accent)/25 bg-white/30 px-3 text-[13px] font-medium tracking-[-0.01em] text-[#1a1a1a]">
                    <Icon
                      className="h-3.5 w-3.5 text-(--cab-accent)"
                      aria-hidden="true"
                    />
                    <span>{badge}</span>
                  </span>

                  <h3 className="mt-4 text-[clamp(19px,1.7vw,22px)] font-bold tracking-[-0.02em] leading-[1.2]">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-[24rem] text-[15.5px] leading-[1.55] text-[#6b7378]">
                    {text}
                  </p>

                  <a
                    href={href}
                    className="group mt-auto pt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-(--cab-accent) hover:text-[#0a0a0a] transition-colors"
                  >
                    {cta}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* photos */}
        <div
          data-cab="gallery"
          className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          {PHOTOS.map((p) => (
            <figure
              key={p.label}
              data-cab="photo"
              className="cab-photo aspect-4/3 sm:aspect-3/4"
            >
              <img src={p.src} alt={p.label} loading="lazy" />
              <figcaption data-cab="cap" className="cab-glass">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
