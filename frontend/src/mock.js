// Mock data pour Karl Bruisson - MTC - Version enrichie

export const practitionerInfo = {
  name: "Karl Bruisson",
  title: "Praticien en Médecine Traditionnelle Chinoise",
  subtitle: "Acupuncture • Moxibustion • Ventouses",
  location: "CEERS Basque - Domaine du Makila, Bassussarry près de Bayonne",
  description: "Formé aux techniques traditionnelles de la Médecine Chinoise, je vous accompagne dans le rééquilibrage de votre énergie vitale pour retrouver harmonie et bien-être durable. Mon approche personnalisée allie tradition millénaire et compréhension moderne du corps.",
  phone: "06 XX XX XX XX",
  email: "contact@karlbruisson-mtc.fr",
  experience: "5",
  experienceLabel: "ans d'expérience",
  photoUrl: "https://customer-assets.emergentagent.com/job_chinese-web-elegant/artifacts/pconcy80_IMG_2824.JPG",
  cabinetPhotoUrl: "https://customer-assets.emergentagent.com/job_chinese-web-elegant/artifacts/62fjnikr_03786D23-D7F4-4038-9F70-23FBF632BB92.JPG",
  socialLinks: {
    facebook: "https://www.facebook.com/people/Karl-Bruisson/100083837924922/",
    linkedin: "https://www.linkedin.com/in/karl-bruisson-therasana/",
    therasana: "https://therasana.fr",
    resalib: "https://www.resalib.fr/agenda/81042#/"
  },
  therasanaInfo: {
    isFounder: true,
    description: "Fondateur du collectif Therasana, regroupant des thérapeutes engagés pour la prévention des Risques Psychosociaux (RPS) et l'amélioration de la Qualité de Vie au Travail (QVT) dans les Landes (40) et Pyrénées-Atlantiques (64)."
  }
};

export const whyConsultReasons = [
  {
    id: 1,
    icon: "brain",
    title: "Stress & Anxiété",
    chineseChar: "神",
    description: "Retrouver calme mental, gérer les émotions, burn-out et anxiété chronique.",
    keywords: "stress, anxiété, burn-out, mental, émotions, nervosité"
  },
  {
    id: 2,
    icon: "activity",
    title: "Douleurs & Tensions",
    chineseChar: "痛",
    description: "Soulager douleurs musculaires, articulaires, lombalgies, cervicalgies, sciatique, tendinites.",
    keywords: "douleurs, tensions, mal de dos, arthrose, rhumatismes, lombalgie, sciatique"
  },
  {
    id: 3,
    icon: "moon",
    title: "Troubles du Sommeil",
    chineseChar: "眠",
    description: "Améliorer la qualité du sommeil, lutter contre les insomnies et réveils nocturnes.",
    keywords: "insomnie, sommeil, fatigue, réveil nocturne"
  },
  {
    id: 4,
    icon: "droplets",
    title: "Troubles Digestifs",
    chineseChar: "胃",
    description: "Accompagner troubles digestifs, ballonnements, reflux, côlon irritable, constipation, diarrhée.",
    keywords: "digestion, ballonnements, reflux, côlon irritable, estomac"
  },
  {
    id: 5,
    icon: "heart",
    title: "Troubles Gynécologiques",
    chineseChar: "血",
    description: "Accompagnement cycles menstruels, règles douloureuses, ménopause, fertilité, endométriose.",
    keywords: "gynécologie, menstruation, ménopause, fertilité, endométriose"
  },
  {
    id: 6,
    icon: "wind",
    title: "Troubles Respiratoires & Allergies",
    chineseChar: "肺",
    description: "Soutenir l'organisme face aux allergies saisonnières, asthme, rhinites, toux.",
    keywords: "allergies, asthme, rhinite, respiration, pollen, toux"
  },
  {
    id: 7,
    icon: "zap",
    title: "Fatigue Chronique",
    chineseChar: "虚",
    description: "Retrouver énergie et vitalité, lutter contre l'épuisement physique et mental.",
    keywords: "fatigue, épuisement, manque d'énergie, vitalité"
  },
  {
    id: 8,
    icon: "shield",
    title: "Renforcement Immunitaire",
    chineseChar: "衛",
    description: "Prévention et renforcement des défenses naturelles face aux infections et maladies.",
    keywords: "immunité, défenses, prévention, santé"
  }
];

export const mtcTreatments = [
  {
    id: 1,
    name: "Acupuncture",
    chineseChar: "針",
    chineseName: "针灸",
    description: "Technique millénaire consistant à stimuler des points précis sur les méridiens avec de fines aiguilles stériles à usage unique pour rééquilibrer la circulation de l'énergie vitale (Qi) et harmoniser le corps et l'esprit.",
    benefits: ["Rééquilibrage énergétique global", "Soulagement durable des douleurs", "Harmonisation corps-esprit"]
  },
  {
    id: 2,
    name: "Moxibustion",
    chineseChar: "灸",
    chineseName: "艾灸",
    description: "Utilisation de l'armoise (艾), plante médicinale ancestrale, pour réchauffer les points d'acupuncture et stimuler la circulation du Qi. Efficace contre le froid interne, les douleurs et les inflammations.",
    benefits: ["Réchauffement profond de l'organisme", "Réduction des inflammations", "Stimulation énergétique intense"]
  },
  {
    id: 3,
    name: "Ventouses",
    chineseChar: "罐",
    chineseName: "拔罐",
    description: "Technique de succion (cupping) appliquée sur la peau pour débloquer les tensions, faire circuler le sang et l'énergie dans les zones de stagnation. Très appréciée des sportifs.",
    benefits: ["Décontraction musculaire profonde", "Amélioration circulation sanguine", "Élimination des toxines"]
  },
  {
    id: 4,
    name: "Diététique Chinoise",
    chineseChar: "食",
    chineseName: "食疗",
    description: "L'alimentation comme premier médicament selon la MTC. Conseils personnalisés basés sur les propriétés énergétiques des aliments (chaud/froid, saveurs, actions sur les organes).",
    benefits: ["Prévention par l'alimentation", "Renforcement du terrain", "Équilibre énergétique quotidien"]
  }
];

export const sessionProcess = [
  {
    id: 1,
    step: "01",
    title: "Bilan Énergétique Complet",
    chineseChar: "診",
    duration: "20-30 min",
    description: "Entretien approfondi sur vos motifs de consultation, observation de la langue (望舌), prise des pouls chinois (脉诊) sur les deux poignets, analyse de votre terrain énergétique selon les principes de la MTC."
  },
  {
    id: 2,
    step: "02",
    title: "Traitement Personnalisé",
    chineseChar: "治",
    duration: "30-40 min",
    description: "Mise en place du soin adapté à votre bilan : acupuncture (针), moxibustion (灸) et/ou ventouses (罐) selon le principe établi. Chaque traitement est unique, pensé pour vous."
  },
  {
    id: 3,
    step: "03",
    title: "Conseils & Suivi",
    chineseChar: "养",
    duration: "10 min",
    description: "Recommandations diététiques et d'hygiène de vie (养生) selon la MTC. Discussion sur le nombre de séances nécessaires et planification du suivi pour un résultat optimal."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sophie M.",
    issue: "Migraines chroniques",
    text: "Après des années de migraines invalidantes, Karl a réussi là où la médecine conventionnelle avait échoué. En quelques séances, l'intensité et la fréquence ont drastiquement diminué. Un vrai soulagement !",
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
  },
  {
    id: 5,
    name: "Isabelle R.",
    issue: "Insomnie",
    text: "Je dors enfin ! Après des mois d'insomnies, quelques séances ont suffi pour retrouver un sommeil réparateur. Karl a su identifier les causes profondes.",
    rating: 5
  },
  {
    id: 6,
    name: "Marc T.",
    issue: "Tendinite épaule",
    text: "Sportif régulier, j'avais une tendinite rebelle. Les ventouses et l'acupuncture m'ont permis de reprendre l'entraînement rapidement. Efficace !",
    rating: 5
  }
];

export const faqItems = [
  {
    id: 1,
    question: "Qu'est-ce que la Médecine Traditionnelle Chinoise ?",
    answer: "La MTC (中医) est un système médical millénaire qui considère l'être humain dans sa globalité. Elle repose sur les concepts de Yin-Yang (阴阳), des 5 éléments (五行) et de l'énergie vitale (气 Qi) circulant dans les méridiens (经络). Elle comprend l'acupuncture, la pharmacopée, la diététique et les massages."
  },
  {
    id: 2,
    question: "L'acupuncture est-elle douloureuse ?",
    answer: "Non. Les aiguilles utilisées sont extrêmement fines (0,20-0,30mm) et stériles à usage unique. L'insertion est généralement indolore. Vous pouvez ressentir une légère sensation de picotement, de chaleur ou de fourmillement (得气 De Qi), signe que le point est bien stimulé."
  },
  {
    id: 3,
    question: "Combien de séances sont nécessaires ?",
    answer: "Cela dépend de votre problématique et de son ancienneté. Pour un trouble aigu : 2-4 séances peuvent suffire. Pour des troubles chroniques : un suivi plus long (8-12 séances) est souvent nécessaire. L'amélioration est généralement progressive et durable."
  },
  {
    id: 4,
    question: "La MTC peut-elle remplacer mon traitement médical ?",
    answer: "Non, la Médecine Traditionnelle Chinoise ne se substitue pas à la médecine conventionnelle. Elle intervient en complément pour optimiser votre bien-être et peut renforcer l'efficacité de certains traitements ou atténuer leurs effets secondaires. Ne modifiez jamais un traitement sans l'avis de votre médecin."
  },
  {
    id: 5,
    question: "Les séances sont-elles remboursées ?",
    answer: "Les séances d'acupuncture et de MTC ne sont pas prises en charge par la Sécurité Sociale. Cependant, de nombreuses mutuelles proposent des forfaits médecines douces (entre 20€ et 40€ par séance selon les contrats). Renseignez-vous auprès de votre complémentaire santé."
  },
  {
    id: 6,
    question: "Y a-t-il des contre-indications ?",
    answer: "Peu de contre-indications existent. L'acupuncture est déconseillée sur certaines zones en cas de grossesse avancée, sur des zones inflammatoires aiguës ou en cas de troubles de la coagulation sévères. Lors du bilan, nous évaluerons ensemble si la MTC est adaptée à votre situation."
  }
];

export const pricing = {
  firstSession: {
    duration: "1h30",
    price: "60€",
    description: "Première consultation avec bilan énergétique complet et premier traitement personnalisé"
  },
  followUp: {
    duration: "1h",
    price: "60€",
    description: "Séance de suivi avec traitement adapté à votre évolution"
  },
  children: {
    duration: "1h",
    price: "40€",
    description: "Séance pour enfants avec techniques adaptées"
  }
};

export const chineseWisdom = [
  {
    id: 1,
    chinese: "上工治未病",
    pinyin: "Shàng gōng zhì wèi bìng",
    translation: "Le praticien supérieur traite ce qui n'est pas encore malade",
    meaning: "La prévention est au cœur de la MTC"
  },
  {
    id: 2,
    chinese: "气血调和",
    pinyin: "Qì xuè tiáo hé",
    translation: "Harmoniser le Qi et le Sang",
    meaning: "Base de l'équilibre énergétique"
  },
  {
    id: 3,
    chinese: "阴阳平衡",
    pinyin: "Yīn yáng píng héng",
    translation: "Équilibre du Yin et du Yang",
    meaning: "Principe fondamental de santé"
  }
];
