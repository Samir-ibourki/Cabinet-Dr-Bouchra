import {
  Activity,
  CalendarCheck,
  CigaretteOff,
  ClipboardCheck,
  DoorOpen,
  HeartPulse,
  Moon,
  ScanLine,
  Stethoscope,
  Wind,
} from "lucide-react";
import { AllergologyIcon, LungsIcon } from "../components/MedicalIcons";

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

export const SPECIALTIES = [
  {
    id: "pneumologie",
    icon: LungsIcon,
    title: "Pneumologie",
    intro:
      "Diagnostic et suivi des maladies de l'appareil respiratoire, de la toux qui dure aux maladies chroniques.",
    items: [
      "Asthme",
      "BPCO",
      "Toux chronique",
      "Essoufflement",
      "Apnée du sommeil",
      "Sevrage tabagique",
    ],
    exams: [
      "Spirométrie (EFR)",
      "Oxymétrie",
      "Test de marche",
      "Polygraphie du sommeil",
    ],
  },
  {
    id: "allergologie",
    icon: AllergologyIcon,
    title: "Allergologie",
    intro:
      "Identifier ce qui déclenche vos réactions et mettre en place une prise en charge adaptée.",
    items: [
      "Rhinite allergique",
      "Asthme allergique",
      "Allergies alimentaires",
      "Allergies médicamenteuses",
      "Urticaire",
      "Allergies aux piqûres",
    ],
    exams: ["Tests cutanés (prick tests)", "Bilan allergique"],
  },
];

export const respiratoryServices = [
  {
    label: "Asthme & allergies respiratoires",
    detail: "Évaluation et suivi des symptômes respiratoires.",
    icon: Wind,
  },
  {
    label: "Tests d’allergie & examen du souffle",
    detail: "Des examens adaptés pour mieux comprendre votre respiration.",
    icon: ClipboardCheck,
  },
  {
    label: "Tuberculose",
    detail: "Dépistage et accompagnement spécialisé.",
    icon: HeartPulse,
  },
  {
    label: "Endoscopie bronchique",
    detail: "Exploration des bronches selon votre situation.",
    icon: ScanLine,
  },
  {
    label: "Sevrage tabagique",
    detail: "Un accompagnement adapté pour arrêter de fumer.",
    icon: CigaretteOff,
  },
  {
    label: "Sommeil & ventilation",
    detail: "Prise en charge des troubles du sommeil et de la respiration.",
    icon: Moon,
  },
];
