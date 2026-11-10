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
  { id: "specialites", label: "Spécialités" },
  { id: "cabinet", label: "Le Cabinet" },
  { id: "faq", label: "FAQ" },
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

export const Steps = [
  {
    title: "Expérience hospitalière",
    places: [
      "CHU de Dakar",
      "CHU de Marrakech",
      "Hôpitaux du Sud-Ouest de France",
    ],
  },
  {
    title: "Formation en allergologie",
    places: ["Université Paris-Sorbonne"],
  },
  {
    title: "Formations complémentaires",
    places: ["Université Paris Cité", "Université de Lille"],
  },
  {
    title: "Activité en cabinet",
    places: ["Cabinet de Pneumologie & Allergologie, Inezgane"],
  },
];

export const FAQS = [
  {
    q: "Comment prendre rendez-vous ?",
    a: "Vous pouvez réserver [par téléphone / par WhatsApp / en ligne]. Le bouton « Prendre rendez-vous » de ce site vous mène directement aux coordonnées du cabinet.",
  },
  {
    q: "Faut-il une ordonnance ou une lettre de mon médecin pour consulter ?",
    a: "[À compléter : indiquer si une lettre du médecin traitant est nécessaire, utile ou non demandée.]",
  },
  {
    q: "Que dois-je apporter à la consultation ?",
    a: "Apportez vos anciens examens (radiographies, analyses, comptes rendus), la liste de vos traitements en cours et vos dernières ordonnances. Pour une allergie, notez aussi les situations où les symptômes apparaissent.",
  },
  {
    q: "Comment me préparer à un examen (spirométrie, tests cutanés) ?",
    a: "[À compléter par le Dr El Berhichi : consignes de préparation pour chaque examen proposé au cabinet.]",
  },
  {
    q: "Le cabinet accepte-t-il la CNSS, l'AMO et les mutuelles ?",
    a: "[À compléter : organismes acceptés et modalités de remboursement.]",
  },
  {
    q: "Combien de temps dure une consultation ?",
    a: "[À compléter : durée moyenne d'une consultation et d'un examen.]",
  },
  {
    q: "Comment annuler ou déplacer mon rendez-vous ?",
    a: "[À compléter : délai à respecter et moyen de contact pour modifier un rendez-vous.]",
  },
];
