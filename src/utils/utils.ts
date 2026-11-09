import { Activity, CalendarCheck, DoorOpen, Stethoscope } from "lucide-react";

export const navLinks = [
  { id: "accueil", label: "Accueil" },
  { id: "cabinet", label: "Le Cabinet" },
  { id: "specialites", label: "Spécialités" },
  { id: "apropos", label: "À propos" },
  { id: "contact", label: "Contact" },
];

export const STEPS = [
  {
    icon: DoorOpen,
    badge: "À l'arrivée",
    title: "Un accueil attentif",
    text: "Du temps pour vous écouter, dès votre arrivée au cabinet.",
    href: "#contact",
    cta: "Nous contacter",
  },
  {
    icon: Stethoscope,
    badge: "La consultation",
    title: "Un échange serein",
    text: "Un moment pour comprendre vos symptômes et votre santé respiratoire.",
    href: "#specialites",
    cta: "Voir les spécialités",
  },
  {
    icon: Activity,
    badge: "Les examens",
    title: "Des examens sur place",
    text: "Les examens respiratoires et allergologiques réalisés au même endroit.",
    href: "#examens",
    cta: "Voir les examens",
  },
  {
    icon: CalendarCheck,
    badge: "Le suivi",
    title: "Un suivi clair",
    text: "Des explications simples et un suivi adapté à votre situation.",
    href: "#contact",
    cta: "Prendre rendez-vous",
  },
];
