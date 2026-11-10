import { useLayoutEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FAQS } from "../utils/utils";

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  const rootRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(0);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia(root);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        "[data-anim='faq-head']",
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
        "[data-anim='faq-item']",
        { y: 24, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: "[data-anim='faq-list']",
            start: "top 85%",
            once: true,
          },
        },
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="faq"
      aria-labelledby="faq-title"
      className="relative w-full bg-[#F8FAFC] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-340 px-5 sm:px-8 lg:px-12">
        <div
          data-anim="faq-head"
          className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center sm:mb-16"
        >
          <h2
            id="faq-title"
            className="text-[clamp(2rem,4.6vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#173D55]"
          >
            Vos questions, nos réponses.
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#536A7C] sm:text-[17px]">
            L'essentiel à savoir avant votre première consultation.
          </p>
        </div>

        <ul data-anim="faq-list" className="mx-auto max-w-3xl space-y-3">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <li
                key={q}
                data-anim="faq-item"
                className={`rounded-[18px] border bg-white transition-[border-color,box-shadow] duration-300 ${
                  isOpen
                    ? "border-[#3D8CA0]/50 shadow-[0_10px_30px_rgba(23,61,85,0.08)]"
                    : "border-[#D4E2EB] hover:border-[#3D8CA0]/40"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-[16.5px] font-bold leading-snug text-[#173D55] sm:text-[18px]">
                      {q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-300 ${
                        isOpen
                          ? "rotate-45 bg-[#CC5778] text-white"
                          : "bg-[#EAF3F8] text-[#3D8CA0]"
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                  </button>
                </h3>

                {/* grid-rows 0fr → 1fr animates the height without JS */}
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-[15.5px] leading-[1.65] text-[#536A7C] sm:px-6 sm:text-[16px]">
                      {a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
