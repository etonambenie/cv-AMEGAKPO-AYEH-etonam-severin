import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Globe,
  Sparkles,
  Layers,
  Code2,
  TrendingUp,
  Briefcase,
  CheckCircle2,
  Send,
  Copy,
  Check,
  ChevronRight,
  Menu,
  X,
  Award,
  Users,
  Compass,
  HeartHandshake,
  FileText,
  MapPin,
  ExternalLink
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // References for animations
  const heroRef = useRef(null);
  const heroBadgeRef = useRef(null);
  const heroNameRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroStatsRef = useRef(null);
  const heroCtasRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  // Exact Experiences from user documentation
  const experiences = [
    {
      period: "2025 — Aujourd'hui",
      role: "Fondateur & Stratège Numérique",
      organization: "Midjolazin",
      tag: "Leadership & Entrepreneuriat",
      location: "Lomé, Togo",
      description: "Création et direction de Midjolazin, une initiative née du constat que de nombreux entrepreneurs et artisans disposent d'un savoir-faire de valeur mais manquent d'outils et de visibilité pour émerger. Conception de solutions combinant communication digitale, création de contenu, conception graphique, développement web et accompagnement stratégique.",
      achievements: [
        "Conception d'identités de marque et de supports numériques adaptés aux entrepreneurs locaux",
        "Développement de sites web, interfaces modernes et prototypes facilitant l'accès aux opportunités économiques",
        "Accompagnement sur-mesure de PME dans leur stratégie de réseaux sociaux et leur transition numérique",
        "Animation d'ateliers et création de contenus de formation pour les jeunes et primo-entrepreneurs"
      ]
    },
    {
      period: "2026 — Aujourd'hui",
      role: "Chargé de Communication, Marketing Numérique & Dév Web",
      organization: "SIEDD (Association de Solidarité Internationale)",
      tag: "Engagement Communautaire & Impact",
      location: "France — Togo",
      description: "Engagement bénévole au service de l'association SIEDD, active dans l'inclusion, l'éducation, l'accès aux droits fondamentaux et le développement durable. Valorisation des initiatives franco-togolaises et conception d'outils numériques pour amplifier la solidarité.",
      achievements: [
        "Développement de supports de communication et de solutions web dédiés aux projets associatifs",
        "Pilotage de la communication pour le projet phare « Un geste, une mobilité, un avenir » (assistance aux personnes en situation de handicap)",
        "Mobilisation de partenaires stratégiques et sensibilisation des publics cibles",
        "Conception et réflexion autour d'un prototype de CRM dédié au suivi des partenaires associatifs"
      ]
    },
    {
      period: "2023 — 2024",
      role: "Responsable Financier et Administratif & Lead Web",
      organization: "Institut Tamberma pour la Gouvernance (ITG)",
      tag: "Gouvernance & Gestion de Projet",
      location: "Lomé, Togo",
      description: "Deux années d'engagement au cœur d'une organisation de la société civile dédiée à la gouvernance locale, à la participation citoyenne et au développement communautaire. Gestion rigoureuse des ressources, transparence organisationnelle et modernisation des outils de communication.",
      achievements: [
        "Supervision administrative et financière complète avec suivi budgétaire rigoureux des projets",
        "Préparation des rapports financiers et renforcement de la confiance avec les bailleurs et partenaires",
        "Conception et déploiement du site web officiel de l'Institut Tamberma pour la Gouvernance",
        "Élaboration des supports de communication pour renforcer la visibilité institutionnelle de l'ITG"
      ]
    },
    {
      period: "2017 — 2023",
      role: "Comptable & Responsable des Ressources Humaines",
      organization: "Charon & Partners",
      tag: "Rigueur Organisationnelle",
      location: "Lomé, Togo",
      description: "Exercice simultané de responsabilités financières et humaines pendant 6 ans, développant une vision 360° de la performance organisationnelle, de la maîtrise budgétaire et de l'animation des équipes.",
      achievements: [
        "Tenue de la comptabilité générale, suivi budgétaire et clôture des états financiers annuels",
        "Recrutement, accueil, intégration et gestion administrative complète du personnel",
        "Gestion de la paie, veille sociale et structuration des plans de formation continue",
        "Optimisation des procédures internes pour accroître l'efficacité collective"
      ]
    }
  ];

  // Specific Real Projects & Digital Initiatives
  const digitalProjects = [
    {
      title: "Plateforme & Hub Midjolazin",
      category: "Entrepreneuriat & PME",
      desc: "Écosystème digital accompagnant les jeunes entrepreneurs et commerçants africains dans leur transition numérique (création d'identité, visibilité web et formation aux outils digitaux).",
      tags: ["Communication 360°", "Développement Web", "Marketing Digital", "Formation"],
      link: null
    },
    {
      title: "Site Web — Institut Tamberma (ITG)",
      category: "Gouvernance & Société Civile",
      desc: "Conception intégrale d'un site web institutionnel avec interfaces pensées pour la transparence, le plaidoyer pour la gouvernance locale et la publication d'études citoyennes.",
      tags: ["Architecture UI/UX", "Web Design", "Publication & Médias", "Gouvernance"],
      link: "https://www.itg-togo.org/"
    },
    {
      title: "Projet Solidaire SIEDD — « Un geste, une mobilité »",
      category: "Inclusion & Handicap",
      desc: "Stratégie de communication multicanale et mobilisation de donateurs pour faciliter l'accès à des équipements d'assistance pour personnes en situation de handicap au Togo.",
      tags: ["Communication d'Impact", "Sensibilisation", "Partenariats", "Réseaux Sociaux"],
      link: "https://bit.ly/4jr6jfB"
    },
    {
      title: "Prototype CRM Partenaires & Donateurs",
      category: "Outils Numériques",
      desc: "Architecture et prototypage d'une solution numérique centralisée pour la traçabilité des partenariats, la gestion des donateurs et le suivi de projets solidaires.",
      tags: ["UI Prototyping", "Gestion de Données", "Process Associatifs"],
      link: null
    }
  ];

  // 4 Core Skill Competencies matching exact documentation
  const skillCategories = [
    {
      title: "Transformation Numérique",
      level: 95,
      role: "Développement & Stratégie Digitale",
      description: "Création de sites et interfaces réactives, déploiement de stratégies de communication multicanales et acquisition d'audience.",
      skills: [
        "Marketing Digital & Social Media",
        "Développement Web & Prototypes",
        "Stratégie de Réseaux Sociaux",
        "SEO (Référencement Naturel)",
        "Publicité Numérique (Meta/Google)",
        "Création de Contenu & Graphisme",
        "Montage Vidéo & Storytelling"
      ]
    },
    {
      title: "Entrepreneuriat & Innovation",
      level: 92,
      role: "Initiatives & Accompagnement PME",
      description: "Capacité à transformer un problème d'accès aux technologies en opportunité d'autonomisation économique locale.",
      skills: [
        "Conception & Pilotage de Projets",
        "Accompagnement de TPE & PME",
        "Formation de Primo-Entrepreneurs",
        "Développement de Solutions Web",
        "Innovation Frugale & Modèles Locaux",
        "Résolution de Problèmes Complexes"
      ]
    },
    {
      title: "Leadership & Engagement",
      level: 96,
      role: "Impact Social & Société Civile",
      description: "Mobilisation citoyenne, plaidoyer pour l'inclusion sociale et mise en réseau d'acteurs de la solidarité internationale.",
      skills: [
        "Mobilisation de Partenaires",
        "Leadership Communautaire",
        "Communication Stratégique & Plaidoyer",
        "Sensibilisation Handicap & Inclusion",
        "Animation de Réseaux Solidaires",
        "Coordination Transnationale (Togo-France)"
      ]
    },
    {
      title: "Gestion Organisationnelle",
      level: 90,
      role: "Rigueur Financière & RH",
      description: "Plus de 6 ans d'ancrage en comptabilité, finances et RH garantissant une exécution transparente, budgétée et pérenne.",
      skills: [
        "Gestion Financière & Budgétaire",
        "Ressources Humaines & Recrutement",
        "Reporting & Transparence Bailleurs",
        "Coordination Opérationnelle",
        "Planification Stratégique de Ressources",
        "Suivi de la Performance des Équipes"
      ]
    }
  ];

  // Education & Distinctions
  const education = [
    {
      year: "2025 — 2026",
      degree: "Lauréat du Programme D-Clic & Certification en Communication et Marketing Numérique",
      institution: "Organisation Internationale de la Francophonie (OIF)",
      detail: "Sélection d'excellence : approfondissement en stratégie de communication numérique, développement web, création de contenu, SEO, publicité ciblée et mesure de la performance digitale."
    },
    {
      year: "2017",
      degree: "Diplôme en Gestion des Ressources Humaines",
      institution: "Université de Lomé — Faculté des Sciences Économiques et de Gestion (FASEG)",
      detail: "Formation supérieure axée sur la gestion stratégique des équipes, la psychologie du travail, le droit social et la structuration organisationnelle."
    },
    {
      year: "2013",
      degree: "Baccalauréat Deuxième Partie — Comptabilité & Gestion (Série G2)",
      institution: "Collège Technique et Commercial Les Éléphanteaux",
      detail: "Fondations rigoureuses en comptabilité d'entreprise, finances, droit des affaires et analyse budgétaire."
    }
  ];

  // References
  const references = [
    {
      name: "Aloegninou Ablavi",
      title: "Présidente",
      organization: "Association SIEDD (Solidarité France-Togo)",
      phone: "+33 6 03 37 79 20"
    },
    {
      name: "Amegakpo-Ayeh Komivi Semeko Paul",
      title: "Directeur",
      organization: "Institut Tamberma pour la Gouvernance (ITG)",
      phone: "+228 90 81 28 15"
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("severinamegakpoayeh93@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+22892625926");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  // Download official CV in PDF
  const handleDownloadCV = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const link = document.createElement('a');
    link.href = '/CV_Etonam_Severin_AMEGAKPO-AYEH.pdf';
    link.setAttribute('download', 'CV_Etonam_Severin_AMEGAKPO-AYEH.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);

    const ctx = gsap.context(() => {
      // 1. Hero Entrance
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTl
        .from(heroBadgeRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.8,
          delay: 0.1
        })
        .from(heroNameRef.current, {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.12
        }, "-=0.4")
        .from(heroTitleRef.current, {
          y: 25,
          opacity: 0,
          duration: 0.8
        }, "-=0.5")
        .from(".hero-stat-item", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12
        }, "-=0.4")
        .from(heroCtasRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.7
        }, "-=0.3");

      // 2. About reveal
      gsap.from(".about-fade", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out"
      });

      // 3. Experience Cards
      gsap.utils.toArray(".exp-card-left").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          x: -50,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out"
        });
      });

      gsap.utils.toArray(".exp-card-right").forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          x: 50,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out"
        });
      });

      // Timeline dots
      gsap.utils.toArray(".timeline-dot").forEach((dot) => {
        gsap.from(dot, {
          scrollTrigger: {
            trigger: dot,
            start: "top 85%",
          },
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(2)"
        });
      });

      // 4. Digital Projects Cards
      gsap.from(".proj-card", {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out"
      });

      // 5. Skills Cards & SVG meters
      gsap.from(".skill-block", {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out"
      });

      gsap.utils.toArray(".skill-svg-circle").forEach((circle) => {
        const targetOffset = circle.getAttribute("data-target-offset");
        gsap.fromTo(circle,
          { strokeDashoffset: 176 },
          {
            scrollTrigger: {
              trigger: circle,
              start: "top 85%",
            },
            strokeDashoffset: targetOffset,
            duration: 1.5,
            ease: "power2.out"
          }
        );
      });

      // 6. Education
      gsap.from(".edu-card", {
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  return (
    <div className="min-h-screen bg-neige text-encre font-sans relative selection:bg-corail selection:text-white">

      {/* ========================================================
          A. NAVBAR — "La Signature Flottante"
         ======================================================== */}
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between gap-4 md:gap-8 px-5 py-3 rounded-full ${
            navScrolled
              ? 'bg-white/85 backdrop-blur-xl border border-encre/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] text-encre'
              : 'bg-encre/85 backdrop-blur-md border border-white/10 shadow-lg text-neige'
          } max-w-5xl w-full`}
        >
          {/* Logo / Photo miniature */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group link-lift cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-corail shadow-sm flex items-center justify-center bg-encre shrink-0">
              <img
                src="/profile.jpg"
                alt="Etonam AMEGAKPO-AYEH"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-bold tracking-tight text-xs uppercase leading-none">
                Etonam AMEGAKPO-AYEH
              </span>
              <span className="text-[10px] font-mono text-corail opacity-90">
                Fondateur Midjolazin
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-medium uppercase tracking-wider">
            <a href="#about" className={`link-lift hover:text-corail ${navScrolled ? 'text-graphite' : 'text-neige/90'}`}>
              Manifeste
            </a>
            <a href="#experience" className={`link-lift hover:text-corail ${navScrolled ? 'text-graphite' : 'text-neige/90'}`}>
              Parcours
            </a>
            <a href="#projects" className={`link-lift hover:text-corail ${navScrolled ? 'text-graphite' : 'text-neige/90'}`}>
              Réalisations
            </a>
            <a href="#skills" className={`link-lift hover:text-corail ${navScrolled ? 'text-graphite' : 'text-neige/90'}`}>
              Compétences
            </a>
            <a href="#education" className={`link-lift hover:text-corail ${navScrolled ? 'text-graphite' : 'text-neige/90'}`}>
              Formation
            </a>
            <a href="#contact" className={`link-lift hover:text-corail ${navScrolled ? 'text-graphite' : 'text-neige/90'}`}>
              Contact
            </a>
          </div>

          {/* Right Action: Download CV */}
          <div className="flex items-center gap-2">
            <a
              href="/CV_Etonam_Severin_AMEGAKPO-AYEH.pdf"
              download="CV_Etonam_Severin_AMEGAKPO-AYEH.pdf"
              className="btn-magnetic flex items-center gap-2 bg-corail hover:bg-corail-hover text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md shadow-corail/25 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Télécharger CV (PDF)</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-black/5"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-encre/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 text-neige text-lg font-medium lg:hidden">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-corail transition-colors"
          >
            Manifeste & Vision
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-corail transition-colors"
          >
            Parcours & Leadership
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-corail transition-colors"
          >
            Réalisations Numériques
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-corail transition-colors"
          >
            Compétences Clés
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-corail transition-colors"
          >
            Formation & Diplômes
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-corail transition-colors"
          >
            Contact Direct
          </a>
          <a
            href="/CV_Etonam_Severin_AMEGAKPO-AYEH.pdf"
            download="CV_Etonam_Severin_AMEGAKPO-AYEH.pdf"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 flex items-center gap-2 bg-corail text-white px-6 py-3 rounded-full font-semibold"
          >
            <Download className="w-4 h-4" />
            <span>Télécharger mon CV (PDF)</span>
          </a>
        </div>
      )}

      {/* ========================================================
          B. SECTION HERO — "La Première Impression"
         ======================================================== */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-[100dvh] bg-encre text-neige flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden"
      >
        {/* Subtle Architectural Pattern & Warm Light Glow */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(232,99,74,0.22)_0%,transparent_65%)]" />
          <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Photo de Profil Officielle */}
          <div
            ref={heroBadgeRef}
            className="mb-7 flex flex-col items-center"
          >
            <div className="relative mb-5 group">
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-tr from-corail via-white/50 to-corail/70 shadow-2xl shadow-corail/35 flex items-center justify-center">
                <img
                  src="/profile.jpg"
                  alt="Etonam AMEGAKPO-AYEH"
                  className="w-full h-full rounded-full object-cover object-top border-2 border-encre"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-graphite/95 border border-white/20 backdrop-blur-md px-3.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-xl whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-zinc-200 uppercase tracking-wider font-semibold">Disponible</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md text-xs font-mono text-zinc-300">
                <Award className="w-3.5 h-3.5 text-corail" />
                <span>Lauréat Programme D-Clic (OIF)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-corail/15 border border-corail/30 text-xs font-mono text-corail">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Lomé, Togo & International</span>
              </div>
            </div>
          </div>

          {/* Nom Massif Sans-Serif & Serif Dramatique */}
          <div ref={heroNameRef} className="space-y-1 mb-4">
            <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase font-sans text-neige">
              AMEGAKPO-AYEH
            </h1>
            <p className="font-serif italic text-2xl sm:text-4xl md:text-5xl text-corail font-semibold tracking-normal capitalize">
              etonam severin
            </p>
          </div>

          {/* Titre Professionnel Exact */}
          <div ref={heroTitleRef} className="max-w-3xl mb-8 space-y-2">
            <p className="text-zinc-200 font-sans text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              Communicant et Stratège du Numérique <span className="text-corail font-mono">/</span> Développeur Web
            </p>
            <p className="text-zinc-400 font-sans text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto">
              Spécialiste en communication digitale, développement web et transformation communautaire. Fondateur de <strong className="text-white font-medium">Midjolazin</strong>.
            </p>
          </div>

          {/* 3 Stats en Monospace */}
          <div
            ref={heroStatsRef}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 py-4 px-6 sm:px-8 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm mb-10 text-xs sm:text-sm font-mono text-zinc-300"
          >
            <div className="hero-stat-item flex items-center gap-2">
              <span className="text-corail font-bold text-base">+5 Ans</span>
              <span>d'Expérience Globale</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <div className="hero-stat-item flex items-center gap-2">
              <span className="text-corail font-bold text-base">Impact</span>
              <span>Société Civile & PME</span>
            </div>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <div className="hero-stat-item flex items-center gap-2">
              <span className="text-corail font-bold text-base">D-Clic</span>
              <span>Francophonie (OIF)</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div
            ref={heroCtasRef}
            className="flex flex-wrap justify-center items-center gap-4"
          >
            <a
              href="/CV_Etonam_Severin_AMEGAKPO-AYEH.pdf"
              download="CV_Etonam_Severin_AMEGAKPO-AYEH.pdf"
              className="btn-magnetic flex items-center gap-2.5 bg-corail hover:bg-corail-hover text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-xl shadow-corail/30"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger mon CV (PDF)</span>
            </a>
            <a
              href="#contact"
              className="btn-magnetic flex items-center gap-2.5 bg-transparent hover:bg-white/10 text-neige border border-white/20 px-7 py-3.5 rounded-full font-semibold text-sm transition-colors"
            >
              <span>Me contacter</span>
              <ArrowDown className="w-4 h-4 text-corail" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-6 flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer group"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 group-hover:text-corail transition-colors">
            Découvrir le profil
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-corail animate-bounce" />
          </div>
        </a>
      </section>

      {/* ========================================================
          C. SECTION À PROPOS — "Le Manifeste Personnel"
         ======================================================== */}
      <section
        id="about"
        ref={aboutRef}
        className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Colonne Gauche: Titre Dramatique & Vision */}
          <div className="lg:col-span-5 about-fade space-y-4">
            <span className="font-mono text-xs text-corail uppercase tracking-widest font-semibold block">
              01 / Profil & Vision
            </span>
            <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-encre font-bold leading-tight">
              « Transformer les compétences numériques en opportunités économiques et en impact communautaire. »
            </h2>
            <div className="pt-2 flex items-center gap-3">
              <div className="w-10 h-[2px] bg-corail" />
              <span className="font-mono text-xs text-muted uppercase tracking-wider">
                De la Gestion à la Tech
              </span>
            </div>

            <div className="pt-6 space-y-3">
              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
                <span className="font-mono text-xs text-corail font-semibold block mb-1">
                  DOUBLE ANCRAGE RARE
                </span>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Rigueur en gestion financière, administrative et ressources humaines (6+ ans) alliée à une maîtrise technique du développement web et de la stratégie numérique.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
                <span className="font-mono text-xs text-corail font-semibold block mb-1">
                  MISSION CITOYENNE
                </span>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Utiliser la technologie pour outiller les entrepreneurs locaux, appuyer les associations de solidarité (handicap, éducation) et renforcer la gouvernance locale.
                </p>
              </div>
            </div>
          </div>

          {/* Ligne Accent Séparatrice */}
          <div className="hidden lg:block lg:col-span-1 flex justify-center">
            <div className="w-[2px] h-96 bg-gradient-to-b from-corail via-corail/30 to-transparent mx-auto rounded-full" />
          </div>

          {/* Colonne Droite: Texte du Profil Officiel */}
          <div className="lg:col-span-6 space-y-6 about-fade">
            <p className="text-lg sm:text-xl text-graphite font-normal leading-relaxed">
              Professionnel togolais engagé dans la transformation numérique, l'entrepreneuriat et le développement communautaire, avec plus de cinq années d'expérience à l'intersection de la gestion, de la société civile et des technologies numériques.
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              J'ai débuté mon parcours dans la gestion financière, l'administration et les ressources humaines avant d'évoluer vers la communication digitale, le développement web et l'entrepreneuriat numérique.
            </p>

            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
              Lauréat du programme <strong className="text-encre font-medium">D-Clic de l'Organisation internationale de la Francophonie (OIF)</strong>, je mobilise aujourd'hui mes compétences pour accompagner des entrepreneurs, des organisations de la société civile et des initiatives sociales dans leur transformation numérique. Mon approche consiste à utiliser le numérique non seulement pour améliorer la visibilité, mais aussi pour créer des opportunités économiques, renforcer les capacités locales et répondre à des défis communautaires.
            </p>

            {/* Domaines d'Impact Social Cards */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-[2rem] bg-white border border-black/[0.06] shadow-sm card-hover">
                <div className="w-9 h-9 rounded-xl bg-corail/10 text-corail flex items-center justify-center mb-3">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-encre mb-1">Autonomisation des Jeunes</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Formations et contenus pratiques pour permettre aux débutants de maîtriser le numérique.
                </p>
              </div>

              <div className="p-5 rounded-[2rem] bg-white border border-black/[0.06] shadow-sm card-hover">
                <div className="w-9 h-9 rounded-xl bg-corail/10 text-corail flex items-center justify-center mb-3">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-encre mb-1">Inclusion & Handicap</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Engagement avec SIEDD sur le projet « Un geste, une mobilité, un avenir » au Togo.
                </p>
              </div>

              <div className="p-5 rounded-[2rem] bg-white border border-black/[0.06] shadow-sm card-hover">
                <div className="w-9 h-9 rounded-xl bg-corail/10 text-corail flex items-center justify-center mb-3">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-encre mb-1">Digitalisation des PME</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Création d'identités et de vitrines web pour ouvrir l'accès aux opportunités de marché.
                </p>
              </div>

              <div className="p-5 rounded-[2rem] bg-white border border-black/[0.06] shadow-sm card-hover">
                <div className="w-9 h-9 rounded-xl bg-corail/10 text-corail flex items-center justify-center mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-encre mb-1">Gouvernance Locale</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Expérience ITG en transparence des ressources et structuration de projets citoyens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          D. SECTION EXPÉRIENCE — "La Timeline Vivante"
         ======================================================== */}
      <section
        id="experience"
        ref={experienceRef}
        className="py-28 px-6 md:px-12 bg-warmgrey/50 border-y border-black/[0.04]"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header section */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-mono text-xs text-corail uppercase tracking-widest font-semibold block mb-2">
              02 / Parcours Professionnel & Leadership
            </span>
            <h2 className="font-serif italic text-4xl sm:text-5xl text-encre font-bold mb-4">
              L'expérience façonnée par l'action et le terrain.
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base">
              Une progression continue : de la gestion des ressources à la création de solutions numériques pour les communautés.
            </p>
          </div>

          {/* Timeline Wrapper */}
          <div className="relative">
            {/* Central Vertical Line on Desktop */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-corail via-zinc-300 to-corail -translate-x-1/2 rounded-full" />
            {/* Mobile Line */}
            <div className="md:hidden absolute left-5 top-4 bottom-4 w-[2px] bg-zinc-300 rounded-full" />

            {/* Timeline Cards */}
            <div className="space-y-12 md:space-y-16">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="timeline-dot absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-corail shadow-md z-10" />

                    {/* Content Card */}
                    <div className="ml-12 md:ml-0 md:w-1/2 md:px-10 w-full">
                      <div
                        className={`exp-card-${isEven ? 'right' : 'left'} bg-white p-8 rounded-[2.5rem] border border-black/[0.06] shadow-sm card-hover relative`}
                      >
                        {/* Period & Tag */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="font-mono text-xs font-semibold text-corail bg-corail/10 px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                          <span className="font-mono text-[11px] text-muted bg-zinc-100 px-2.5 py-0.5 rounded-full">
                            {exp.tag}
                          </span>
                        </div>

                        {/* Role & Org */}
                        <h3 className="text-xl sm:text-2xl font-bold text-encre tracking-tight mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-graphite mb-1">
                          {exp.organization}
                        </p>
                        <p className="text-xs font-mono text-muted mb-4 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-corail" />
                          <span>{exp.location}</span>
                        </p>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6 font-light">
                          {exp.description}
                        </p>

                        {/* Key Responsibilities / Achievements */}
                        <div className="space-y-2 pt-4 border-t border-black/[0.05]">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-muted block mb-2 font-medium">
                            Actions & Responsabilités Clés :
                          </span>
                          {exp.achievements.map((item, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-700">
                              <CheckCircle2 className="w-4 h-4 text-corail shrink-0 mt-0.5" />
                              <span className="leading-snug">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          RÉALISATIONS ET INITIATIVES NUMÉRIQUES (Showcase)
         ======================================================== */}
      <section
        id="projects"
        ref={projectsRef}
        className="py-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs text-corail uppercase tracking-widest font-semibold block mb-2">
            03 / Réalisations & Projets
          </span>
          <h2 className="font-serif italic text-4xl sm:text-5xl text-encre font-bold mb-4">
            Des initiatives concrètes pour le changement.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Quelques exemples de plateformes, supports et prototypes développés pour des organisations et des communautés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {digitalProjects.map((proj, idx) => (
            <div
              key={idx}
              className="proj-card bg-white p-8 sm:p-10 rounded-[2.5rem] border border-black/[0.06] shadow-sm card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-corail bg-corail/10 px-3 py-1 rounded-full">
                    {proj.category}
                  </span>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-muted hover:text-corail flex items-center gap-1 transition-colors"
                    >
                      <span>Consulter</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-encre mb-3">
                  {proj.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed font-light mb-6">
                  {proj.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-black/[0.05]">
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono bg-neige text-graphite px-2.5 py-1 rounded-full border border-black/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          E. SECTION COMPÉTENCES — "Le Tableau de Bord"
         ======================================================== */}
      <section
        id="skills"
        ref={skillsRef}
        className="py-28 px-6 md:px-12 lg:px-20 bg-warmgrey/40 border-y border-black/[0.04]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-mono text-xs text-corail uppercase tracking-widest font-semibold block mb-2">
              04 / Compétences & Savoir-Faire
            </span>
            <h2 className="font-serif italic text-4xl sm:text-5xl text-encre font-bold mb-4">
              Le Tableau de Bord des 4 Compétences Clés.
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base">
              Issu de la synthèse de mon profil professionnel : synergie entre gestion, communication et technologies.
            </p>
          </div>

          {/* Grille des 4 blocs de compétences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((cat, index) => {
              const circumference = 176;
              const targetOffset = circumference - (cat.level / 100) * circumference;

              return (
                <div
                  key={index}
                  className="skill-block bg-white p-8 sm:p-10 rounded-[2.5rem] border border-black/[0.06] shadow-sm card-hover flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Title and Circular SVG */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="font-mono text-xs font-semibold text-corail uppercase tracking-wider block mb-1">
                          {cat.role}
                        </span>
                        <h3 className="text-2xl font-bold text-encre">
                          {cat.title}
                        </h3>
                      </div>

                      {/* SVG Gauge */}
                      <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                        <svg className="w-16 h-16 transform -rotate-90">
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="#F4F4F5"
                            strokeWidth="5"
                            fill="none"
                          />
                          <circle
                            className="skill-svg-circle"
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="#E8634A"
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="176"
                            strokeDashoffset="176"
                            data-target-offset={targetOffset}
                          />
                        </svg>
                        <span className="absolute font-mono text-xs font-bold text-encre">
                          {cat.level}%
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light mb-6">
                      {cat.description}
                    </p>
                  </div>

                  {/* Skills Pills */}
                  <div className="pt-4 border-t border-black/[0.05]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted block mb-3 font-medium">
                      Compétences Spécifiques :
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((s, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-1.5 text-xs font-medium bg-neige text-graphite px-3 py-1.5 rounded-full border border-black/[0.05]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-corail" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          F. SECTION FORMATION — "Les Fondations"
         ======================================================== */}
      <section
        id="education"
        ref={educationRef}
        className="py-24 px-6 md:px-12 bg-encre text-neige relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-mono text-xs text-corail uppercase tracking-widest font-semibold block mb-2">
              05 / Fondations Académiques & Reconnaissances
            </span>
            <h2 className="font-serif italic text-4xl sm:text-5xl text-neige font-bold mb-3">
              Formation & Développement des Compétences.
            </h2>
            <p className="text-zinc-400 text-sm">
              Un socle solide en gestion et sciences économiques enrichi par la certification d'excellence internationale D-Clic de l'OIF.
            </p>
          </div>

          <div className="space-y-4 mb-16">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="edu-card bg-graphite/70 border border-white/10 p-6 sm:p-8 rounded-[2rem] hover:border-corail/50 transition-all card-hover flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <span className="font-mono text-xs text-corail font-semibold">
                    {item.year}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-neige">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-zinc-300 font-medium">
                    {item.institution}
                  </p>
                  <p className="text-xs text-zinc-400 pt-1 font-light">
                    {item.detail}
                  </p>
                </div>
                <div className="sm:self-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-corail">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Langues & Références professionnelles */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-white/10">
            {/* Langues */}
            <div className="md:col-span-5 space-y-4">
              <span className="font-mono text-xs text-corail uppercase tracking-widest font-semibold block">
                Langues Maîtrisées
              </span>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <span className="text-zinc-200">Français</span>
                  <span className="text-corail font-semibold">Courant</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <span className="text-zinc-200">Éwé</span>
                  <span className="text-corail font-semibold">Courant (Langue maternelle)</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <span className="text-zinc-200">Anglais</span>
                  <span className="text-zinc-400">Niveau Élémentaire / Technique</span>
                </div>
              </div>
            </div>

            {/* Références professionnelles officielles */}
            <div className="md:col-span-7 space-y-4">
              <span className="font-mono text-xs text-corail uppercase tracking-widest font-semibold block">
                Références Professionnelles
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {references.map((refItem, rIdx) => (
                  <div
                    key={rIdx}
                    className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1.5"
                  >
                    <h4 className="font-bold text-sm text-neige">{refItem.name}</h4>
                    <p className="text-xs text-corail font-medium">{refItem.title}</p>
                    <p className="text-[11px] text-zinc-400">{refItem.organization}</p>
                    <p className="text-xs font-mono text-zinc-300 pt-2 flex items-center gap-1">
                      <Phone className="w-3 h-3 text-corail" />
                      <span>{refItem.phone}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          G. SECTION CONTACT — "Le Pont"
         ======================================================== */}
      <section
        id="contact"
        ref={contactRef}
        className="py-28 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto"
      >
        <div className="bg-white rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-black/[0.06] shadow-xl relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-corail/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading and info */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs text-corail uppercase tracking-widest font-semibold block">
                06 / Échanger & Collaborer
              </span>
              <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-encre font-bold leading-tight">
                Construisons votre visibilité et votre impact digital.
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-light">
                Que vous soyez un entrepreneur, une organisation de la société civile ou un partenaire désireux d'amplifier ses initiatives à Lomé ou à l'international, contactez-moi directement.
              </p>

              {/* Direct channels with real data */}
              <div className="space-y-3 pt-4">
                {/* Email */}
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-3 w-full p-4 rounded-2xl bg-neige hover:bg-zinc-100 border border-black/[0.05] transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-xl bg-corail/10 text-corail flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">
                      Email direct
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-encre truncate block">
                      severinamegakpoayeh93@gmail.com
                    </span>
                  </div>
                  <div className="text-xs font-mono text-corail px-3 py-1 rounded-full bg-white border border-corail/20 flex items-center gap-1 shrink-0">
                    {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copié' : 'Copier'}</span>
                  </div>
                </button>

                {/* WhatsApp / Phone */}
                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/22892625926"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center gap-3 p-4 rounded-2xl bg-neige hover:bg-zinc-100 border border-black/[0.05] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">
                        Téléphone / WhatsApp
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-encre block">
                        +228 92 62 59 26
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-corail transition-colors mr-1" />
                  </a>

                  <button
                    onClick={handleCopyPhone}
                    className="p-4 rounded-2xl bg-neige hover:bg-zinc-100 border border-black/[0.05] text-xs font-mono text-muted hover:text-corail transition-colors"
                    title="Copier le numéro"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-corail" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Social Channels with real URLs */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://bit.ly/4rSxMZE"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-neige hover:bg-corail hover:text-white border border-black/[0.06] text-xs font-semibold text-graphite transition-all link-lift"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://bit.ly/4jr6jfB"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-neige hover:bg-corail hover:text-white border border-black/[0.06] text-xs font-semibold text-graphite transition-all link-lift"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Right Column: Direct Interactive Form */}
            <div className="lg:col-span-6 bg-neige p-6 sm:p-8 rounded-[2.5rem] border border-black/[0.05]">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-corail/10 text-corail rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-encre">Message Prêt !</h3>
                  <p className="text-sm text-zinc-600 max-w-sm mx-auto">
                    Merci pour votre message. Je vous répondrai rapidement par e-mail ou WhatsApp.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono text-corail underline pt-2"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-bold text-encre mb-1">
                    Envoyez-moi un message direct
                  </h3>
                  <p className="text-xs text-muted mb-4 font-light">
                    Pour toute sollicitation de projet, conseil digital ou mission.
                  </p>

                  <div>
                    <label className="block text-xs font-mono text-muted uppercase tracking-wider mb-1">
                      Votre Nom & Organisation
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Koffi Mensah (PME / Association)"
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 focus:border-corail focus:ring-1 focus:ring-corail text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted uppercase tracking-wider mb-1">
                      Votre E-mail ou Téléphone
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="koffi@domaine.com ou +228 90..."
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 focus:border-corail focus:ring-1 focus:ring-corail text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted uppercase tracking-wider mb-1">
                      Votre Besoin / Projet
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Décrivez brièvement votre initiative, calendrier ou vos objectifs..."
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-black/10 focus:border-corail focus:ring-1 focus:ring-corail text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-magnetic w-full flex items-center justify-center gap-2 bg-corail hover:bg-corail-hover text-white py-3.5 rounded-full font-semibold text-sm shadow-lg shadow-corail/25 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmettre le message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          H. PIED DE PAGE — "La Clôture Élégante"
         ======================================================== */}
      <footer className="bg-encre text-zinc-400 py-16 px-6 md:px-12 rounded-t-[3.5rem] md:rounded-t-[4.5rem] relative overflow-hidden border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Identity */}
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-corail/60 shrink-0">
                <img
                  src="/profile.jpg"
                  alt="Etonam AMEGAKPO-AYEH"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="font-bold text-neige text-base tracking-tight font-sans uppercase">
                etonam AMEGAKPO-AYEH
              </span>
            </div>
            <p className="text-xs text-zinc-500 font-light">
              Spécialiste en communication digitale et développement web | Fondateur de Midjolazin · Lomé, Togo
            </p>
          </div>

          {/* Status badge */}
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.05] border border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono text-xs text-zinc-300">
              Disponible pour projets & collaborations
            </span>
          </div>

          {/* Copyright */}
          <div className="text-xs font-mono text-zinc-500">
            <p>© {new Date().getFullYear()} etonam AMEGAKPO-AYEH. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
