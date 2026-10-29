/* ============================================================
   TES DONNÉES — modifie uniquement cette partie.
   B("English", "Français") = texte affiché dans la langue choisie.
   Laisse "" (ou []) pour masquer un champ.
   Pour ajouter un élément : copie un bloc { ... } et sépare-les par une virgule.
   Les lignes marquées  // ← À REMPLACER  sont à compléter.
   ============================================================ */
const B = (en, fr) => ({ en, fr });

window.DATA = {
  /* ---------- 1. WELCOME ---------- */
  profile: {
    name: "Thomas Casteran",
    pitch: B("Engineering student in Fluid Mechanics, Energetics & Environment (MF2E) at ENSEEIHT, passionate about physical modeling, music, and climate challenges.",
             "Élève ingénieur en Mécanique des fluides, Énergétique et Environnement (MF2E) à l'ENSEEIHT, passionné par la modélisation physique, la musique et les défis climatiques."),
    highlights: [B("Fluid Mechanics & Energy", "Mécanique des fluides & Énergétique"), B("ENSEEIHT, Toulouse", "ENSEEIHT, Toulouse")],
    photo: "assets/img/photo.jpg",
    linkedin: "https://www.linkedin.com/in/thomas-casteran",
    github: "https://github.com/thomascasteran"
  },

  /* ---------- 2. ENGINEERING COURSE ---------- */
  engineering: {
    skills: [
      { group: B("Languages & Software", "Langages & Logiciels"), items: ["Python", "Pandas", "Matplotlib", "Qt Designer", "LaTeX"] },
      { group: B("Engineering & Physics", "Ingénierie & Physique"), items: [B("Fluid Mechanics", "Mécanique des fluides"), B("Thermodynamics", "Thermodynamique"), B("Data Analysis", "Analyse de données"), B("Physical Measurements", "Mesures physiques")] },
      { group: B("Soft skills", "Savoir-être"), items: [B("Teamwork", "Travail en équipe"), B("Rigor", "Rigueur scientifique"), B("Adaptability", "Adaptabilité"), B("Leadership", "Esprit d'initiative")] }
    ],
    projects: [
      {
        title: B("Solar Energy Exploitation & Guiana Case Study", "Exploitation de l'énergie solaire & Étude de cas Guyane"),
        type: B("School Project", "Projet scolaire"),
        period: "2026",
        text: B("Conducted an applied physics research project during Prépa T² on solar energy conversion on Earth, combining lab experiments at IUT Mesures Physiques with a contextual case study on French Guiana.",
               "Réalisation d'un projet d'étude en prépa T² sur l'exploitation de l'énergie solaire sur Terre, alliant travaux pratiques à l'IUT Mesures Physiques et étude de cas appliquée au projet Hyguane en Guyane."),
        result: B("Comprehensive LaTeX technical report evaluating solar yield efficiency and tropical micro-grid constraints.",
                  "Rapport technique sous LaTeX évaluant les rendements solaires et les contraintes d'intégration en milieu tropical."),
        learned: B("Experimental measurements, solar irradiance physics, and technical synthesis in LaTeX.",
                   "Mesures expérimentales, physique de l'irradiance solaire et rédaction technique sous LaTeX."),
        tools: ["LaTeX", "Python", "Physical Measurements", "Solar Energy"],
        link: "",
        linkLabel: B("View project", "Voir le projet"),
        image: "assets/img/projet-solaire.jpg"
      }
      /* Pour ajouter un projet : mets une virgule après le } ci-dessus, puis copie le bloc entier. */
    ]
  },

  /* ---------- 3. INTERNATIONAL MOBILITY ---------- */
  mobility: {
    languages: [
      { name: B("English", "Anglais"), level: "B2" },
      { name: B("German", "Allemand"), level: "A2-B1" },
      { name: B("Spanish", "Espagnol"), level: "A1" }
    ],
    experiences: [
      {
        title: B("Language Immersion – Ireland", "Immersion linguistique – Irlande"),
        period: B("August 2025 (2 weeks)", "Août 2025 (2 semaines)"),
        text: B("Language courses and cultural discovery in Ireland to refine fluency and autonomy in an English-speaking environment.",
                "Cours de langues et immersion culturelle en Irlande pour perfectionner l'anglais et renforcer l'autonomie à l'étranger."),
        // PHOTO : dépose ton image dans assets/img/ avec exactement ce nom (en minuscules, .jpg).
        photos: [
          { src: "assets/img/irlande-dublin.jpg", caption: B("Dublin", "Dublin") }
        ]
      },
      {
        title: B("Language Immersion – Malta", "Immersion linguistique – Malte"),
        period: B("July 2024 (2 weeks)", "Juillet 2024 (2 semaines)"),
        text: B("Daily communication and cultural immersion in Malta.",
                "Pratique quotidienne de l'anglais et adaptation rapide à un cadre multiculturel à Malte."),
        photos: [
          { src: "assets/img/malte-la-valette.jpg", caption: B("Valletta", "La Valette") }
        ]
      },
      {
        title: B("Manchester City Football Camp", "Camp de football – Manchester City"),
        period: B("August 2022 (2 weeks)","Août 2022 (2 semaines)")
        text: B("High-level sports training combined with daily English language practice in England.",
                "Entraînement sportif intensif de haut niveau combiné à une pratique quotidienne de l'anglais en Angleterre."),
        photos: [
          { src: "assets/img/manchester.jpg", caption: B("Manchester", "Manchester") }
        ]
      }
    ],
    text: [
      B("My goal is to complete an academic semester or an engineering R&D internship abroad, focusing on advanced fluid mechanics, renewable energy systems, or computational climate modeling.",
        "Mon objectif est de réaliser un semestre académique ou un stage R&D à l'étranger, axé sur la mécanique des fluides avancée, les énergies renouvelables ou la modélisation numérique des risques climatiques.")
    ]
  },

  /* ---------- 4. SUSTAINABILITY & CIVIC ENGAGEMENT ---------- */
  engagement: [
    {
      title: B("Universal National Service (SNU)", "Service National Universel (SNU)"),
      text: [
        B("Participation in citizenship and defense workshops, fostering team spirit and civic leadership.",
          "Participation active aux ateliers sur la citoyenneté, la défense et la mémoire. Développement de la cohésion d'équipe et du sens de l'engagement.")
      ]
    }
  ],

  /* ---------- 5. SPORT & INTERESTS ---------- */
  activities: [
    {
      category: B("Music & Media", "Musique & Média"),
      items: [
        {
          title: B("Piano & Viola (Conservatoire)", "Piano & Alto (Conservatoire)"),
          text: B("Practicing piano for over 10 years and former viola student at the Conservatoire for 4 years.",
                  "Pratique du piano depuis plus de 10 ans et ancien élève en alto au conservatoire pendant 4 ans.")
        },
        {
          title: B("Music Band", "Groupe de musique"),
          text: B("Playing music collectively in a band, sharing live performances and arrangements.",
                  "Pratique musicale en groupe, partage de performances live et arrangements.")
        },
        {
          title: B("Film Soundtrack Composition", "Composition de bande originale de film"),
          text: B("Composed an original soundtrack piece for the feature film 'Une Étoile à son nom' directed by Matthieu Gerbaud and Mathieu Louit.",
                  "Composition d'un morceau original pour la bande originale du long-métrage 'Une Étoile à son nom' (réalisé par Matthieu Gerbaud et Mathieu Louit).")
        },
        {
          title: B("TV Appearance for KiKa (German Channel)", "Intervention TV pour KiKa (chaîne allemande)"),
          text: B("Participated in an educational treasure hunt show filmed in Toulouse for German TV channel KiKa. Presented iconic spots of the city (Airbus, Cité de l'Espace, city center).",
                  "Participation au tournage d'une émission jeunesse à Toulouse pour la chaîne allemande KiKa. Présentation des sites phares de la ville (Airbus, Cité de l'Espace, centre-ville).")
        }
      ]
    },
    {
      category: B("Sport", "Sport"),
      items: [
        {
          title: B("Football (ASINP)", "Football (ASINP)"),
          text: B("Playing football with the INP sports association (ASINP). Team spirit and regular matches.",
                  "Pratique du football au sein de l'association sportive de l'INP (ASINP). Esprit d'équipe et matchs réguliers.")
        },
        {
          title: B("Running", "Course à pied"),
          text: B("Regular running sessions for endurance and conditioning.",
                  "Séances régulières de course à pied pour l'endurance et le cardio.")
        }
      ]
    }
  ],

  /* ---------- 6. CAREER DEVELOPMENT ---------- */
  career: {
    cv: { en: "assets/cv/cv-en.pdf", fr: "assets/cv/cv-fr.pdf" },

    /* Elevator pitch : remplace [COLLE_TON_ID_ICI] par l'ID de ta vidéo YouTube (non répertoriée).
       Exemple : "https://youtu.be/AbC123xyz_0"  — tant qu'il reste un "[", l'encadré "Vidéo bientôt disponible" s'affiche. */
    video: "https://youtu.be/[COLLE_TON_ID_ICI]",
    videoFile: "",   // OU un petit fichier : "assets/video/pitch.mp4"

    experiences: [
      {
        title: B("Materials Engineering & Data GUI Intern", "Stagiaire création d'interface & matériaux"),
        org: "ONERA (DMPE), Toulouse",
        period: B("May – June 2025", "Mai – Juin 2025"),
        logo: "",
        text: B("Within the DMPE department at ONERA, I designed and developed a custom graphical desktop interface to centralize, query, and visualize laboratory materials data.",
                "Au sein du département DMPE de l'ONERA, j'ai conçu et développé une interface graphique sur mesure pour centraliser, consulter et visualiser les données matériaux du laboratoire."),
        bullets: [
          B("Designed user-friendly GUI layouts using Qt Designer integrated with Python (PySide/PyQt).", "Conception d'interfaces ergonomiques avec Qt Designer intégrées à Python (PySide/PyQt)."),
          B("Automated spreadsheet reading and queries using Pandas to process test records.", "Automatisation de la lecture et des requêtes de bases de données avec Pandas."),
          B("Accelerated data access for researchers conducting high-temperature material testing.", "Accélération de l'accès aux données pour les chercheurs analysant les matériaux à haute température.")
        ],
        tools: ["Python", "PyQt", "Pandas", "Qt Designer", "Git"],
        // BOUTON RAPPORT : dépose ton PDF dans assets/docs/ avec ce nom. Le bouton apparaît tout seul une fois le fichier en ligne.
        report: "assets/docs/rapport-onera.pdf"
        // Autres boutons possibles : links: [ { label: B("Poster", "Poster"), href: "assets/docs/poster.pdf" } ]
      },
      {
        title: B("Cadet of the Gendarmerie", "Cadet de la Gendarmerie"),
        org: "Gendarmerie Nationale, Toulouse",
        period: B("July 2023", "Juillet 2023"),
        logo: "",
        text: B("Discovery of public safety operations, institutional protocols, and team discipline.",
                "Immersion dans les missions de sécurité publique, découverte de la rigueur institutionnelle et des protocoles d'intervention."),
        bullets: [
          B("Observed teamwork dynamics, chain of command, and crisis management protocols.", "Observation du travail d'équipe, de la chaîne de commandement et de la gestion de crise.")
        ],
        tools: ["Teamwork", "Discipline", "Public Safety"]
      }
    ],

    /* 3 role models : remplace par de VRAIS profils (My Job Glasses, anciens, etc.) */
    roleModels: [
      { name: "Role Model 1",   // ← À REMPLACER : Prénom NOM
        job: B("Fluid Mechanics Specialist", "Spécialiste Mécanique des Fluides"), photo: "",
        points: [
          B("Path: [school, first jobs, current role]", "Parcours : [école, premiers postes, poste actuel]"),   // ← À REMPLACER
          B("Key skills: [2–3 skills]", "Compétences clés : [2–3 compétences]"),                              // ← À REMPLACER
          B("What I take from it: [lesson]", "Ce que j'en retiens : [leçon]")                                 // ← À REMPLACER
        ] },
      { name: "Role Model 2",   // ← À REMPLACER
        job: B("Renewable Energy Project Manager", "Chef de projet Énergies Renouvelables"), photo: "",
        points: [
          B("Path: [school, first jobs, current role]", "Parcours : [école, premiers postes, poste actuel]"),
          B("Key skills: [2–3 skills]", "Compétences clés : [2–3 compétences]"),
          B("What I take from it: [lesson]", "Ce que j'en retiens : [leçon]")
        ] },
      { name: "Role Model 3",   // ← À REMPLACER
        job: B("Catastrophe Risk Analyst", "Analyste des risques climatiques"), photo: "",
        points: [
          B("Path: [school, first jobs, current role]", "Parcours : [école, premiers postes, poste actuel]"),
          B("Key skills: [2–3 skills]", "Compétences clés : [2–3 compétences]"),
          B("What I take from it: [lesson]", "Ce que j'en retiens : [leçon]")
        ] }
    ],

    /* 3 projets de mobilité, chacun aligné avec un role model (garde le même nom que ci-dessus) */
    mobilityProjects: [
      {
        title: B("Academic Exchange in Energetics", "Échange académique en énergétique"),
        place: "[University, Country]",   // ← À REMPLACER
        roleModel: "Role Model 1",
        text: B("Completing a semester focused on advanced fluid dynamics and renewable energy modeling.",
                "Réalisation d'un semestre axé sur la dynamique des fluides avancée et les énergies renouvelables.")
      },
      {
        title: B("International R&D Internship", "Stage R&D à l'international"),
        place: "[Company or lab, Country]",   // ← À REMPLACER
        roleModel: "Role Model 2",
        text: B("Engineering internship working on fluid/thermal optimization and clean energy systems.",
                "Stage ingénieur travaillant sur l'optimisation thermo-fluide et les systèmes d'énergie propre.")
      },
      {
        title: B("Climate Risk & Wind Modeling Mission", "Mission modélisation des risques climatiques"),
        place: "[Agency or lab, Country]",   // ← À REMPLACER
        roleModel: "Role Model 3",
        text: B("Applying numerical wind field modeling to catastrophic event prevention.",
                "Application de la modélisation numérique des champs de vent à la prévention des catastrophes.")
      }
    ]
  },

  /* ---------- CONTACT ---------- */
  contact: {
    email: "thomas.casteran@etu.toulouse-inp.fr",
    phone: "+33 6 28 23 61 79",   // site public : pour masquer ton numéro, mets "" ici
    linkedin: "https://www.linkedin.com/in/thomas-casteran"
  }
};
/* ===================== FIN DES DONNÉES ===================== */
