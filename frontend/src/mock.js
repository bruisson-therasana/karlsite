// Mock data pour Karl Bruisson - MTC

export const practitionerInfo = {
  name: "Karl Bruisson",
  title: "Praticien en Médecine Traditionnelle Chinoise",
  subtitle: "Acupuncture • Moxibustion • Ventouses",
  location: "CEERS Basque - Domaine du Makila, Bassussarry près de Bayonne",
  description: "Formé aux techniques traditionnelles de la Médecine Chinoise, je vous accompagne dans le rééquilibrage de votre énergie vitale pour retrouver harmonie et bien-être durable.",
  phone: "06 XX XX XX XX",
  email: "contact@karlbruisson-mtc.fr"
};

export const whyConsultReasons = [
  {
    id: 1,
    icon: "brain",
    title: "Stress & Anxiété",
    description: "Retrouver calme mental, gérer les émotions et l'anxiété chronique.",
    keywords: "stress, anxiété, burn-out, mental, émotions"
  },
  {
    id: 2,
    icon: "activity",
    title: "Douleurs & Tensions",
    description: "Soulager douleurs musculaires, articulaires, lombalgies, cervicalgies, tendinites.",
    keywords: "douleurs, tensions, mal de dos, arthrose, rhumatismes"
  },
  {
    id: 3,
    icon: "moon",
    title: "Troubles du Sommeil",
    description: "Améliorer la qualité du sommeil, lutter contre les insomnies et réveils nocturnes.",
    keywords: "insomnie, sommeil, fatigue, réveil nocturne"
  },
  {
    id: 4,
    icon: "droplets",
    title: "Troubles Digestifs",
    description: "Accompagner les troubles digestifs, ballonnements, reflux, syndrome de l'intestin irritable.",
    keywords: "digestion, ballonnements, reflux, côlon irritable"
  },
  {
    id: 5,
    icon: "heart",
    title: "Troubles Gynécologiques",
    description: "Accompagnement des cycles menstruels, ménopause, fertilité, endométriose.",
    keywords: "gynécologie, menstruation, ménopause, fertilité, endométriose"
  },
  {
    id: 6,
    icon: "wind",
    title: "Troubles Respiratoires & Allergies",
    description: "Soutenir l'organisme face aux allergies saisonnières, asthme, rhinites.",
    keywords: "allergies, asthme, rhinite, respiration, pollen"
  },
  {
    id: 7,
    icon: "zap",
    title: "Fatigue Chronique",
    description: "Retrouver énergie et vitalité, lutter contre l'épuisement physique et mental.",
    keywords: "fatigue, épuisement, manque d'énergie, vitalité"
  },
  {
    id: 8,
    icon: "shield",
    title: "Renforcement Immunitaire",
    description: "Prévention et renforcement des défenses naturelles face aux infections.",
    keywords: "immunité, défenses, prévention, santé"
  }
];

export const mtcTreatments = [
  {
    id: 1,
    name: "Acupuncture",
    chineseChar: "針",
    description: "Technique millénaire consistant à stimuler des points précis sur les méridiens avec de fines aiguilles stériles pour rééquilibrer la circulation de l'énergie vitale (Qi).",
    benefits: ["Rééquilibrage énergétique", "Soulagement des douleurs", "Harmonisation corps-esprit"]
  },
  {
    id: 2,
    name: "Moxibustion",
    chineseChar: "灸",
    description: "Utilisation de l'armoise, plante médicinale ancestrale, pour réchauffer les points d'acupuncture et stimuler la circulation du Qi. Efficace contre le froid interne et les douleurs.",
    benefits: ["Réchauffement de l'organisme", "Réduction des inflammations", "Stimulation énergétique"]
  },
  {
    id: 3,
    name: "Ventouses",
    chineseChar: "罐",
    description: "Technique de succion appliquée sur la peau pour débloquer les tensions, faire circuler le sang et l'énergie dans les zones de stagnation.",
    benefits: ["Décontraction musculaire", "Amélioration circulation", "Élimination des toxines"]
  }
];

export const sessionProcess = [
  {
    id: 1,
    step: "01",
    title: "Bilan Énergétique",
    duration: "20-30 min",
    description: "Entretien approfondi sur vos motifs de consultation, observation de la langue, prise des pouls chinois, analyse de votre terrain énergétique selon les principes de la MTC."
  },
  {
    id: 2,
    step: "02",
    title: "Traitement Personnalisé",
    duration: "30-40 min",
    description: "Mise en place du soin adapté : acupuncture, moxibustion et/ou ventouses selon le bilan établi. Chaque traitement est unique et personnalisé."
  },
  {
    id: 3,
    step: "03",
    title: "Conseils & Suivi",
    duration: "10 min",
    description: "Recommandations diététiques et d'hygiène de vie selon la MTC. Discussion sur le nombre de séances nécessaires et planification du suivi."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sophie M.",
    issue: "Migraines chroniques",
    text: "Après des années de migraines invalidantes, Karl a réussi là où la médecine conventionnelle avait échoué. En quelques séances, l'intensité et la fréquence ont drastiquement diminué.",
    rating: 5
  },
  {
    id: 2,
    name: "Thomas L.",
    issue: "Lombalgie chronique",
    text: "Grâce à l'acupuncture et aux ventouses, mes douleurs de dos ont considérablement diminué. Karl est à l'écoute et explique parfaitement son approche. Je recommande vivement.",
    rating: 5
  },
  {
    id: 3,
    name: "Marie B.",
    issue: "Stress et anxiété",
    text: "L'approche de Karl est globale et bienveillante. Les séances m'ont permis de retrouver un équilibre émotionnel et une sérénité que je n'avais plus depuis longtemps.",
    rating: 5
  },
  {
    id: 4,
    name: "Jean-Pierre D.",
    issue: "Troubles digestifs",
    text: "Après avoir tout essayé, l'acupuncture avec Karl a été la solution à mes problèmes digestifs. Professionnel, compétent et à l'écoute. Merci !",
    rating: 5
  }
];

export const faqItems = [
  {
    id: 1,
    question: "Qu'est-ce que la Médecine Traditionnelle Chinoise ?",
    answer: "La MTC est un système médical millénaire qui considère l'être humain dans sa globalité. Elle repose sur les concepts de Yin-Yang, des 5 éléments et de l'énergie vitale (Qi) circulant dans les méridiens. Elle comprend l'acupuncture, la pharmacopée, la diététique et le massage Tuina."
  },
  {
    id: 2,
    question: "L'acupuncture est-elle douloureuse ?",
    answer: "Non. Les aiguilles utilisées sont extrêmement fines (0,20-0,30mm) et stériles à usage unique. L'insertion est généralement indolore. Vous pouvez ressentir une légère sensation de picotement, de chaleur ou de fourmillement, signe que le point est bien stimulé."
  },
  {
    id: 3,
    question: "Combien de séances sont nécessaires ?",
    answer: "Cela dépend de votre problématique et de son ancienneté. Pour un trouble aigu : 2-4 séances peuvent suffire. Pour des troubles chroniques : un suivi plus long (8-12 séances) est souvent nécessaire. L'amélioration est généralement progressive."
  },
  {
    id: 4,
    question: "La MTC peut-elle remplacer mon traitement médical ?",
    answer: "Non, la Médecine Traditionnelle Chinoise ne se substitue pas à la médecine conventionnelle. Elle intervient en complément pour optimiser votre bien-être et peut renforcer l'efficacité de certains traitements ou atténuer leurs effets secondaires. Ne modifiez jamais un traitement sans l'avis de votre médecin."
  },
  {
    id: 5,
    question: "Les séances sont-elles remboursées ?",
    answer: "Les séances d'acupuncture et de MTC ne sont pas prises en charge par la Sécurité Sociale. Cependant, de nombreuses mutuelles proposent des forfaits médecines douces. Renseignez-vous auprès de votre complémentaire santé."
  }
];

export const pricing = {
  firstSession: {
    duration: "75 min",
    price: "70€",
    description: "Première consultation avec bilan énergétique complet et premier traitement"
  },
  followUp: {
    duration: "60 min",
    price: "60€",
    description: "Séance de suivi avec traitement adapté"
  }
};
