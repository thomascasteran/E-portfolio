
/* ============================================================
   TES DONNÉES — modifie uniquement cette partie.
   B("English", "Français") = texte affiché dans la langue choisie.
   Laisse "" (ou []) pour masquer un champ.
   ============================================================ */

const B = (en, fr) => ({ en, fr });

window.DATA = {
  /* ---------- 1. WELCOME ---------- */
  profile: {
    name: "Thomas Casteran",

    pitch: B(
      "Engineering student in Fluid Mechanics, Energetics & Environment (MF2E) at ENSEEIHT, passionate about physical modeling, music, and climate.",
      "Élève ingénieur en Mécanique des fluides, Énergétique et Environnement (MF2E) à l'ENSEEIHT, passionné par la modélisation physique, la musique et le climat."
    ),

    highlights: [
      B("Fluid Mechanics & Energy", "Mécanique des fluides & Énergétique"),
      B("ENSEEIHT, Toulouse", "ENSEEIHT, Toulouse")
    ],

    photo: "assets/img/photo1.jpg",
    linkedin: "https://www.linkedin.com/in/thomas-casteran",
    github: "https://github.com/thomascasteran"
  },

  /* ---------- 2. ENGINEERING COURSE ---------- */
  engineering: {
    skills: [
      {
        group: B("Languages & Software", "Langages & Logiciels"),
        items: [
          "Python",
          "Pandas",
          "Matplotlib",
          "Qt Designer",
          "LaTeX"
        ]
      },
      {
        group: B("Engineering & Physics", "Ingénierie & Physique"),
        items: [
          B("Fluid Mechanics", "Mécanique des fluides"),
          B("Thermodynamics", "Thermodynamique"),
          B("Data Analysis", "Analyse de données"),
          B("Physical Measurements", "Mesures physiques")
        ]
      },
      {
        group: B("Soft skills", "Savoir-être"),
        items: [
          B("Teamwork", "Travail en équipe"),
          B("Rigor", "Rigueur scientifique"),
          B("Adaptability", "Adaptabilité"),
          B("Leadership", "Esprit d'initiative")
        ]
      }
    ],

    projects: [
      {
        title: B(
          "Solar Energy Exploitation & Guiana Case Study",
          "Exploitation de l'énergie solaire & Étude de cas Guyane"
        ),

        type: B("School Project", "Projet scolaire"),
        period: "2026",

        text: B(
          "Conducted an applied physics research project during Prépa T² on solar energy conversion on Earth, combining lab experiments at IUT Mesures Physiques with a contextual case study on French Guiana.",
          "Réalisation d'un projet d'étude en prépa T² sur l'exploitation de l'énergie solaire sur Terre, alliant travaux pratiques à l'IUT Mesures Physiques et étude de cas appliquée au projet Hyguane en Guyane."
        ),

        result: B(
          "Comprehensive LaTeX technical report evaluating solar yield efficiency and tropical micro-grid constraints.",
          "Rapport technique sous LaTeX évaluant les rendements solaires et les contraintes d'intégration en milieu tropical."
        ),

        learned: B(
          "Experimental measurements, solar irradiance physics, and technical synthesis in LaTeX.",
          "Mesures expérimentales, physique de l'irradiance solaire et rédaction technique sous LaTeX."
        ),

        tools: [
          "LaTeX",
          "Python",
          "Physical Measurements",
          "Solar Energy"
        ],

        link: "",
        linkLabel: B("View project", "Voir le projet"),
        image: "assets/img/projet-solaire.jpg"
      }
    ]
  },

  /* ---------- 3. INTERNATIONAL MOBILITY ---------- */
  mobility: {
    languages: [
      {
        name: B("English", "Anglais"),
        level: "B2"
      },
      {
        name: B("German", "Allemand"),
        level: "A2-B1"
      },
      {
        name: B("Spanish", "Espagnol"),
        level: "A1"
      }
    ],

    experiences: [
      {
        title: B(
          "Language Immersion – Ireland",
          "Immersion linguistique – Irlande"
        ),

        period: B(
          "August 2025 (2 weeks)",
          "Août 2025 (2 semaines)"
        ),

        text: B(
          "Language courses and cultural discovery in Ireland to refine fluency and autonomy in an English-speaking environment.",
          "Cours de langues et immersion culturelle en Irlande pour perfectionner l'anglais et renforcer l'autonomie à l'étranger."
        ),

        photos: [
          {
            src: "assets/img/irlande-dublin.jpg",
            caption: B("Dublin", "Dublin")
          }
        ]
      },

      {
        title: B(
          "Language Immersion – Malta",
          "Immersion linguistique – Malte"
        ),

        period: B(
          "July 2024 (2 weeks)",
          "Juillet 2024 (2 semaines)"
        ),

        text: B(
          "Daily communication and cultural immersion in Malta.",
          "Pratique quotidienne de l'anglais et adaptation rapide à un cadre multiculturel à Malte."
        ),

        photos: [
          {
            src: "assets/img/malte-la-valette.jpg",
            caption: B("Valletta", "La Valette")
          }
        ]
      },

      {
        title: B(
          "Manchester City Football Camp",
          "Camp de football – Manchester City"
        ),

        period: B(
          "August 2022 (2 weeks)",
          "Août 2022 (2 semaines)"
        ),

        text: B(
          "High-level sports training combined with daily English language practice in England.",
          "Entraînement sportif intensif de haut niveau combiné à une pratique quotidienne de l'anglais en Angleterre."
        ),

        photos: [
          {
            src: "assets/img/manchester.jpg",
            caption: B("Manchester", "Manchester")
          }
        ]
      }
    ],

    text: [
      B(
        "My goal is to complete an academic semester focusing on advanced fluid mechanics, renewable energy systems, or computational climate modeling.",
        "Mon objectif est de réaliser un semestre académique axé sur la mécanique des fluides avancée, les énergies renouvelables ou la modélisation numérique des risques climatiques."
      )
    ]
  },

  /* ---------- 4. SUSTAINABILITY & CIVIC ENGAGEMENT ---------- */
  engagement: [
    {
      title: B(
        "Universal National Service (SNU)",
        "Service National Universel (SNU)"
      ),

      text: [
        B(
          "Participation in citizenship and defense workshops, fostering team spirit and civic leadership.",
          "Participation active aux ateliers sur la citoyenneté, la défense et la mémoire. Développement de la cohésion d'équipe et du sens de l'engagement."
        )
      ]
    },

    {
      title: B(
        "Climate Fresk",
        "Fresque du Climat"
      ),

      text: [
        B(
          "From the first year of my engineering program, I took part in a \"Climate Fresk\" workshop alongside other ENSEEIHT students. It made us aware of the climate challenges of our time and of the issues we will face as future engineers.",
          "Dès la première année de mon cursus ingénieur, j'ai participé à un atelier « Fresque du Climat » avec d'autres élèves de l'ENSEEIHT. Il nous a sensibilisés aux défis climatiques de notre époque et aux enjeux auxquels nous serons confrontés en tant que futurs ingénieurs."
        )
      ]
    },

    {
      title: B(
        "The Trial of King Kong",
        "Le Procès de King Kong"
      ),

      text: [
        B(
          "Also in my first year of engineering school, I attended and took part in the interactive play \"The Trial of King Kong\", which addresses gender-based and sexual violence and its consequences.",
          "Toujours en première année d'école d'ingénieur, j'ai assisté et participé à la pièce interactive « Le Procès de King Kong », qui aborde les violences sexistes et sexuelles (VSS) et leurs conséquences."
        )
      ]
    },

    {
      title: B(
        "\"Futur Proche\" Festival",
        "Festival « Futur Proche »"
      ),

      text: [
        B(
          "ENSEEIHT and the universities of Toulouse gave me the opportunity to take part in the \"Futur Proche\" (Near Future) festival, with many conferences, workshops and presentations raising awareness about climate issues, particularly from a scientific perspective through innovations that already exist or are in development.",
          "L'ENSEEIHT et les universités de Toulouse m'ont permis de participer au festival « Futur Proche », qui proposait de nombreuses conférences, ateliers et présentations sensibilisant aux enjeux climatiques, notamment sous un angle scientifique, à travers des innovations existantes ou en cours de développement."
        )
      ]
    }
  ],

  /* ---------- 5. SPORT & INTERESTS ---------- */
  activities: [
    {
      category: B("Music & Media", "Musique & Média"),

      items: [
        {
          title: B(
            "Piano & Viola (Conservatoire)",
            "Piano & Alto (Conservatoire)"
          ),

          text: B(
            "Practicing piano for over 10 years and former viola student at the Conservatoire for 4 years.",
            "Pratique du piano depuis plus de 10 ans et ancien élève en alto au conservatoire pendant 4 ans."
          )
        },

        {
          title: B("Music Band", "Groupe de musique"),

          text: B(
            "Playing music collectively in a band, sharing live performances and arrangements.",
            "Pratique musicale en groupe, partage de performances live et arrangements."
          )
        },

        {
          title: B(
            "Film Soundtrack Composition",
            "Composition de bande originale de film"
          ),

          text: B(
            "Composed an original soundtrack piece for the feature film 'Une Étoile à son nom' directed by Matthieu Gerbaud and Mathieu Louit.",
            "Composition d'un morceau original pour la bande originale du long-métrage 'Une Étoile à son nom' (réalisé par Matthieu Gerbaud et Mathieu Louit)."
          )
        },

        {
          title: B(
            "TV Appearance for KiKa (German Channel)",
            "Intervention TV pour KiKa (chaîne allemande)"
          ),

          text: B(
            "Participated in an educational treasure hunt show filmed in Toulouse for German TV channel KiKa. Presented iconic spots of the city (Airbus, Cité de l'Espace, city center).",
            "Participation au tournage d'une émission jeunesse à Toulouse pour la chaîne allemande KiKa. Présentation des sites phares de la ville (Airbus, Cité de l'Espace, centre-ville)."
          )
        }
      ]
    },

    {
      category: B("Sport", "Sport"),

      items: [
        {
          title: B("Football (ASINP)", "Football (ASINP)"),

          text: B(
            "Playing football with the INP sports association (ASINP). Team spirit and regular matches.",
            "Pratique du football au sein de l'association sportive de l'INP (ASINP). Esprit d'équipe et matchs réguliers."
          )
        },

        {
          title: B("Running", "Course à pied"),

          text: B(
            "Regular running sessions for endurance and conditioning.",
            "Séances régulières de course à pied pour l'endurance et le cardio."
          )
        }
      ]
    }
  ],

  /* ---------- 6. CAREER DEVELOPMENT ---------- */
  career: {
    cv: {
      en: "assets/cv/cv-en.pdf",
      fr: "assets/cv/cv-fr.pdf"
    },

    // Remplace cette valeur par le vrai lien de ta vidéo YouTube.
    // Laisse une chaîne vide si tu ne souhaites pas afficher de vidéo.
    video: "",
    videoFile: "assets/img/30 octobre 2026.mp4",

    experiences: [
      {
        title: B(
          "Intern in interface creation for materials",
          "Stagiaire création d'interface pour des matériaux"
        ),

        org: "ONERA (DMPE), Toulouse",

        period: B(
          "May – June 2025",
          "Mai – Juin 2025"
        ),

        logo: "assets/img/Onera-bloc-marque.jpg",

        text: B(
          "Within the DMPE department at ONERA, I designed and developed a custom graphical desktop interface to centralize, query, and visualize laboratory materials data.",
          "Au sein du département DMPE de l'ONERA, j'ai conçu et développé une interface graphique sur mesure pour centraliser, consulter et visualiser les données matériaux du laboratoire."
        ),

        bullets: [
          B(
            "Designed user-friendly GUI layouts using Qt Designer integrated with Python (PySide/PyQt).",
            "Conception d'interfaces ergonomiques avec Qt Designer intégrées à Python (PySide/PyQt)."
          ),

          B(
            "Automated spreadsheet reading and queries using Pandas to process test records.",
            "Automatisation de la lecture et des requêtes de bases de données avec Pandas."
          ),

          B(
            "Accelerated data access for researchers conducting high-temperature material testing.",
            "Accélération de l'accès aux données pour les chercheurs analysant les matériaux à haute température."
          )
        ],

        tools: [
          "Python",
          "PyQt",
          "Pandas",
          "Qt Designer",
          "Git"
        ],

        report: "assets/docs/rapport-onera.pdf"
      },

      {
        title: B(
          "Cadet of the Gendarmerie",
          "Cadet de la Gendarmerie"
        ),

        org: "Gendarmerie Nationale, Toulouse",

        period: B(
          "July 2023",
          "Juillet 2023"
        ),

        logo: "assets/img/gendarmerie.jpg",

        text: B(
          "Discovery of public safety operations, institutional protocols, and team discipline.",
          "Immersion dans les missions de sécurité publique, découverte de la rigueur institutionnelle et des protocoles d'intervention."
        ),

        bullets: [
          B(
            "Observed teamwork dynamics, chain of command, and crisis management protocols.",
            "Observation du travail d'équipe, de la chaîne de commandement et de la gestion de crise."
          )
        ],

        tools: [
          "Teamwork",
          "Discipline",
          "Public Safety"
        ]
      }
    ],

    /* ---------- CAREER ROLE MODELS ---------- */
    roleModels: [
      {
        name: "Iris Mourier",

        job: B(
          "Catastrophe Risk & Reinsurance Analyst",
          "Analyste des risques de catastrophes & Réassurance"
        ),

        photo: "",

        points: [
          B(
            "Path: Engineering school, fluid mechanics & applied math major, risk modeling specialist in Switzerland.",
            "Parcours : École d'ingénieur, spécialisation mécanique des fluides & mathématiques appliquées, experte en modélisation des risques en Suisse."
          ),

          B(
            "Key skills: Numerical modeling, Python, extreme weather data analysis, risk management.",
            "Compétences clés : Modélisation numérique, Python, analyse de données météo-extrêmes, gestion des risques."
          ),

          B(
            "What I take from it: Combining fluid physics and simulation with major economic and climate resilience issues.",
            "Ce que j'en retiens : Allier la physique des fluides et la simulation à des enjeux économiques majeurs face au changement climatique."
          )
        ]
      },

      {
        name: "David Lindqvist",

        job: B(
          "Renewable Energy R&D Engineer",
          "Ingénieur R&D en Énergies Renouvelables"
        ),

        photo: "",

        points: [
          B(
            "Path: ENSEEIHT (MF2E), research internship (ONERA), international R&D in solar/wind systems.",
            "Parcours : ENSEEIHT (MF2E), stage de recherche en laboratoire (ONERA), R&D internationale en systèmes solaires et éoliens."
          ),

          B(
            "Key skills: Thermal engineering, energy flow optimization, software prototyping (Python/Qt).",
            "Compétences clés : Ingénierie thermique, optimisation des flux d'énergie, prototypage logiciel (Python/Qt)."
          ),

          B(
            "What I take from it: The importance of experimental innovation and software tools to optimize future energy systems.",
            "Ce que j'en retiens : L'importance de l'innovation expérimentale et des outils logiciels pour optimiser les systèmes énergétiques de demain."
          )
        ]
      },

      {
        name: "Marc-Antoine Tremblay",

        job: B(
          "MetOcean & Wind Modeling Engineer",
          "Ingénieur MetOcean & Modélisation des Vents"
        ),

        photo: "",

        points: [
          B(
            "Path: Dual competence in fluid mechanics and meteorology, wind profile modeling (Holland/IBTrACS).",
            "Parcours : Double compétence en mécanique des fluides et météorologie, modélisation de profils de vent (Holland/IBTrACS)."
          ),

          B(
            "Key skills: Atmospheric dynamics, 2D/3D numerical modeling, big data processing.",
            "Compétences clés : Dynamique atmosphérique, modélisation numérique 2D/3D, traitement de données massives."
          ),

          B(
            "What I take from it: Translating complex natural phenomena into predictive models to secure critical infrastructures.",
            "Ce que j'en retiens : Traduire des phénomènes naturels complexes en modèles prédictifs pour sécuriser les infrastructures."
          )
        ]
      }
    ],

    /* ---------- MOBILITY PROJECTS ---------- */
    mobilityProjects: [
      {
        title: B(
          "Academic Exchange – Climate Science & Catastrophe Modeling",
          "Échange universitaire – Sciences du climat & modélisation des catastrophes"
        ),

        place: "Imperial College London (London, United Kingdom)",
        roleModel: "Iris Mourier",

        text: B(
          "Potential exchange destination to strengthen my knowledge of numerical modeling, applied mathematics, climate science, and extreme weather events. I am particularly interested in understanding how physical models and scientific data can be used to assess natural hazards and contribute to catastrophe risk modeling in the insurance and reinsurance sectors.",
          "Piste d'échange pour approfondir mes connaissances en modélisation numérique, mathématiques appliquées, sciences du climat et événements météorologiques extrêmes. Je m'intéresse particulièrement à la manière dont les modèles physiques et les données scientifiques peuvent être utilisés pour évaluer les aléas naturels et contribuer à la modélisation des risques de catastrophes dans les secteurs de l'assurance et de la réassurance."
        )
      },

      {
        title: B(
          "Academic Exchange – Climate Science & Data Analysis",
          "Échange universitaire – Sciences du climat & analyse de données"
        ),

        place: "University of Connecticut (UConn, USA)",
        roleModel: "David Lindqvist",

        text: B(
          "Potential exchange destination to develop my knowledge of climate science, statistics, environmental processes, and scientific data analysis. My goal is to build skills that could later be applied to modeling the frequency and intensity of extreme events and assessing their potential impacts.",
          "Piste d'échange pour approfondir mes connaissances en sciences du climat, statistiques, processus environnementaux et analyse de données scientifiques. Mon objectif est d'acquérir des compétences qui pourraient ensuite être appliquées à la modélisation de la fréquence et de l'intensité des événements extrêmes et à l'évaluation de leurs impacts potentiels."
        )
      },

      {
        title: B(
          "Academic Exchange – Climate & Catastrophe Modeling",
          "Échange universitaire – Climat & modélisation des catastrophes"
        ),

        place: "Georgia Institute of Technology (Georgia Tech, Atlanta, USA)",
        roleModel: "Marc-Antoine Tremblay",

        text: B(
          "Potential exchange destination to strengthen my foundations in numerical modeling, fluid dynamics, atmospheric sciences, and data analysis. I would like to explore how physical simulations and climate data can contribute to understanding extreme weather events and natural hazards.",
          "Piste d'échange pour renforcer mes bases en modélisation numérique, dynamique des fluides, sciences de l'atmosphère et analyse de données. Je souhaite explorer comment les simulations physiques et les données climatiques permettent de mieux comprendre les événements météorologiques extrêmes et les aléas naturels."
        )
      }
    ]
  },

  /* ---------- 7. CONTACT ---------- */
  contact: {
    email: "thomas.casteran@etu.toulouse-inp.fr",
    phone: "+33 6 28 23 61 79",
    linkedin: "https://www.linkedin.com/in/thomas-casteran"
  }
};

/* ===================== FIN DES DONNÉES ===================== */
