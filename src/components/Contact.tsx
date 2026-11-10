import { useLayoutEffect, useRef } from "react";
import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PHONE_LABEL = "+212 528332332";
const PHONE_TEL = "+212661289464"; 
const WHATSAPP_NUMBER = "+212661289464"; 
const WHATSAPP_MSG =
  "Bonjour, je souhaite prendre rendez-vous au cabinet du Dr El Berhichi.";

const ADDRESS_LINES = [
  "Imm Alhouria N 45",
  "En face souk Al Houria, 4eme etage (avec ascenceur), Inezgane",
];

const HOURS = [
  { day: "Lundi – Vendredi", time: "09:00 – 18:00" },
  { day: "Samedi", time: "09:00 – 13:00" },
  { day: "Dimanche", time: "Fermé" },
];

const MAPS_QUERY = "Inezgane, Maroc";
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  MAPS_QUERY,
)}&output=embed`;
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  MAPS_QUERY,
)}`;

export default function ContactSection() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia(root);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        "[data-anim='ct-head']",
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
        "[data-anim='ct-item']",
        { y: 24, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: "[data-anim='ct-grid']",
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        "[data-anim='ct-map']",
        { clipPath: "inset(0 0 0 100% round 24px)" },
        {
          clipPath: "inset(0 0 0 0% round 24px)",
          duration: 1.1,
          ease: "power4.inOut",
          clearProps: "clipPath",
          scrollTrigger: {
            trigger: "[data-anim='ct-grid']",
            start: "top 75%",
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
      id="contact"
      aria-labelledby="contact-title"
      className="relative w-full bg-white py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-340 px-5 sm:px-8 lg:px-12">
        {/* head */}
        <div
          data-anim="ct-head"
          className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center sm:mb-16"
        >
          <h2
            id="contact-title"
            className="text-[clamp(2rem,4.6vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#173D55]"
          >
            Prenez rendez-vous au cabinet.
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#536A7C] sm:text-[17px]">
            Un appel ou un message suffit. Le cabinet vous répond pour fixer le
            créneau qui vous convient.
          </p>
        </div>

        <div
          data-anim="ct-grid"
          className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[5fr_7fr] lg:gap-14"
        >
          {/* Left: actions + info */}
          <div className="flex flex-col gap-8">
            <div data-anim="ct-item" className="flex flex-col gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="group inline-flex h-14 items-center justify-between gap-3 rounded-full bg-[#CC5778] px-6 text-white shadow-[0_10px_25px_rgba(204,87,120,0.32)] transition-colors hover:bg-[#B84768]"
              >
                <span className="inline-flex items-center gap-3 text-[15.5px] font-medium">
                  <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                  Appeler le cabinet
                </span>
                <span className="text-[14.5px] opacity-90">{PHONE_LABEL}</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  WHATSAPP_MSG,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-14 items-center gap-3 rounded-full border border-[#D4E2EB] bg-white px-6 text-[15.5px] font-medium text-[#173D55] transition-[border-color,background-color] hover:border-[#3D8CA0]/60 hover:bg-[#F8FAFC]"
              >
                <MessageCircle
                  className="h-4.5 w-4.5 text-[#3D8CA0]"
                  aria-hidden="true"
                />
                Écrire sur WhatsApp
              </a>
            </div>

            <div data-anim="ct-item" className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-100 bg-white shadow-[0_8px_25px_rgba(23,61,85,0.08)]">
                <MapPin className="h-5 w-5 text-[#3D8CA0]" aria-hidden="true" />
              </span>
              <div className="pt-0.5">
                <h3 className="text-[17px] font-bold text-[#173D55]">
                  Adresse
                </h3>
                <address className="mt-1 not-italic text-[15.5px] leading-[1.6] text-[#536A7C]">
                  {ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>

            <div data-anim="ct-item" className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-100 bg-white shadow-[0_8px_25px_rgba(23,61,85,0.08)]">
                <Clock className="h-5 w-5 text-[#3D8CA0]" aria-hidden="true" />
              </span>
              <div className="w-full pt-0.5">
                <h3 className="text-[17px] font-bold text-[#173D55]">
                  Horaires
                </h3>
                <dl className="mt-2 space-y-2 text-[15.5px]">
                  {HOURS.map(({ day, time }) => (
                    <div key={day} className="flex items-baseline gap-3">
                      <dt className="text-[#536A7C]">{day}</dt>
                      <span
                        aria-hidden="true"
                        className="flex-1 -translate-y-1 border-b border-dotted border-[#173D55]/25"
                      />
                      <dd className="whitespace-nowrap font-semibold text-[#173D55]">
                        {time}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Right: map */}
          <div
            data-anim="ct-map"
            className="relative h-90 overflow-hidden rounded-3xl border border-[#D4E2EB] bg-[#E5EFF5] shadow-[0_18px_45px_rgba(23,61,85,0.10)] sm:h-115 lg:h-full lg:min-h-130"
          >
            <iframe
              src={MAPS_EMBED_SRC}
              title="Carte Google Maps du cabinet du Dr Bouchra El Berhichi"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />

            <a
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 left-4 inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-[14.5px] font-semibold text-[#173D55] shadow-[0_8px_25px_rgba(23,61,85,0.18)] transition-colors hover:text-[#CC5778]"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Itinéraire
            </a>
          </div>
        </div>

        {/* footer line */}
        <p className="mt-16 border-t border-[#D4E2EB] pt-6 text-center text-[13.5px] text-[#536A7C] sm:mt-20">
          © 2026 Dr Bouchra El Berhichi · Pneumologie &amp; Allergologie
        </p>
      </div>
    </section>
  );
}
