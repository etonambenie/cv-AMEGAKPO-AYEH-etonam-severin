import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4'
});

const pageWidth = doc.internal.pageSize.getWidth();
const pageHeight = doc.internal.pageSize.getHeight();
const margin = 14;
const contentWidth = pageWidth - (margin * 2);

// Colors
const primaryColor = [28, 28, 30]; // #1C1C1E
const accentColor = [232, 99, 74]; // #E8634A
const mutedColor = [110, 110, 115];
const lightBg = [248, 248, 250];

// Helper: section header
function drawSectionHeader(title, y) {
  doc.setFillColor(...accentColor);
  doc.rect(margin, y, 3, 5, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text(title.toUpperCase(), margin + 5, y + 4.2);
  
  doc.setDrawColor(225, 225, 230);
  doc.setLineWidth(0.3);
  doc.line(margin + 5 + doc.getTextWidth(title.toUpperCase()) + 3, y + 2.5, margin + contentWidth, y + 2.5);
  return y + 9;
}

// ================= PAGE 1 =================
// Top Banner Bar
doc.setFillColor(...accentColor);
doc.rect(0, 0, pageWidth, 5, 'F');

// Header Block
let y = 14;
doc.setFont('helvetica', 'bold');
doc.setFontSize(20);
doc.setTextColor(...primaryColor);
doc.text('ETONAM SEVERIN AMEGAKPO-AYEH', margin, y);

y += 6;
doc.setFont('helvetica', 'bold');
doc.setFontSize(11);
doc.setTextColor(...accentColor);
doc.text('COMMUNICANT ET STRATÈGE DU NUMÉRIQUE / DÉVELOPPEUR WEB', margin, y);

y += 4.5;
doc.setFont('helvetica', 'normal');
doc.setFontSize(9);
doc.setTextColor(...primaryColor);
doc.text('Spécialiste en communication digitale et développement web | Fondateur de Midjolazin', margin, y);

y += 4.5;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(...mutedColor);
doc.text('Lomé, Togo  •  Tél / WhatsApp : +228 92 62 59 26  •  Email : severinamegakpoayeh93@gmail.com', margin, y);
y += 3.5;
doc.text('LinkedIn : bit.ly/4rSxMZE  •  Facebook : bit.ly/4jr6jfB  •  Lauréat D-Clic OIF', margin, y);

y += 6;
doc.setDrawColor(215, 215, 220);
doc.setLineWidth(0.4);
doc.line(margin, y, margin + contentWidth, y);
y += 6;

// Profil Professionnel
y = drawSectionHeader('Profil Professionnel & Synthèse', y);
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.5);
doc.setTextColor(45, 45, 45);
const profileText = "Professionnel togolais engagé dans la transformation numérique, l'entrepreneuriat et le développement communautaire, avec plus de 5 années d'expérience à l'intersection de la gestion, de la société civile et des technologies numériques. Il a débuté son parcours dans la gestion financière, l'administration et les ressources humaines avant d'évoluer vers la communication digitale, le développement web et l'entrepreneuriat numérique.\n\nLauréat du programme D-Clic de l'Organisation internationale de la Francophonie (OIF), il mobilise ses compétences pour accompagner des entrepreneurs, des organisations de la société civile et des initiatives sociales. Son approche : mettre le numérique au service d'opportunités économiques concrètes, de renforcement des capacités locales et de défis communautaires.";
const splitProfile = doc.splitTextToSize(profileText, contentWidth);
doc.text(splitProfile, margin, y);
y += (splitProfile.length * 3.8) + 4;

// Expériences
y = drawSectionHeader('Expériences Professionnelles & Leadership', y);

// Exp 1: Midjolazin
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...primaryColor);
doc.text('Fondateur & Stratège Numérique  —  Midjolazin', margin, y);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(...accentColor);
doc.text('2025 — Aujourd\'hui | Lomé, Togo', margin + contentWidth - 48, y);
y += 4;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.2);
doc.setTextColor(50, 50, 50);
const midjText = "• Création d'une initiative pour pallier le déficit de visibilité digitale des entrepreneurs locaux et PME.\n• Conception de solutions combinant communication digitale, marketing numérique, développement web et identité visuelle.\n• Conception d'interfaces web et prototypes favorisant l'accès à de nouveaux marchés et opportunités d'affaires.\n• Animation d'ateliers et création de contenus de formation en marketing numérique pour les jeunes et débutants.";
const splitMidj = doc.splitTextToSize(midjText, contentWidth - 4);
doc.text(splitMidj, margin + 2, y);
y += (splitMidj.length * 3.6) + 4;

// Exp 2: SIEDD
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...primaryColor);
doc.text('Chargé de Communication, Marketing Numérique & Web  —  SIEDD', margin, y);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(...accentColor);
doc.text('2026 — Aujourd\'hui | France — Togo', margin + contentWidth - 52, y);
y += 4;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.2);
doc.setTextColor(50, 50, 50);
const sieddText = "• Engagement bénévole au service de l'inclusion, de l'éducation et du développement solidaire franco-togolais.\n• Développement de supports de communication multicanaux et de solutions web adaptées aux projets associatifs.\n• Participation active à la communication du projet phare « Un geste, une mobilité, un avenir » (handicap au Togo).\n• Conception et architecture d'un prototype CRM pour la gestion et le suivi des partenaires et donateurs associatifs.";
const splitSiedd = doc.splitTextToSize(sieddText, contentWidth - 4);
doc.text(splitSiedd, margin + 2, y);
y += (splitSiedd.length * 3.6) + 4;

// Exp 3: ITG
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...primaryColor);
doc.text('Responsable Financier & Administratif / Lead Web  —  ITG', margin, y);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(...accentColor);
doc.text('2023 — 2024 | Lomé, Togo', margin + contentWidth - 42, y);
y += 4;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.2);
doc.setTextColor(50, 50, 50);
const itgText = "• Institut Tamberma pour la Gouvernance : suivi budgétaire, gestion administrative et conformité des projets citoyens.\n• Élaboration des états et rapports financiers assurant une transparence totale auprès des bailleurs de fonds.\n• Conception intégrale et déploiement du site officiel de l'Institut : www.itg-togo.org\n• Production de supports de plaidoyer et communication digitale pour amplifier la participation citoyenne.";
const splitItg = doc.splitTextToSize(itgText, contentWidth - 4);
doc.text(splitItg, margin + 2, y);
y += (splitItg.length * 3.6) + 4;

// Exp 4: Charon & Partners
doc.setFont('helvetica', 'bold');
doc.setFontSize(9.5);
doc.setTextColor(...primaryColor);
doc.text('Comptable & Responsable des Ressources Humaines  —  Charon & Partners', margin, y);
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(...accentColor);
doc.text('2017 — 2023 | Lomé, Togo', margin + contentWidth - 42, y);
y += 4;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8.2);
doc.setTextColor(50, 50, 50);
const charonText = "• Gestion comptable générale, gestion de trésorerie, suivi budgétaire et clôture des états financiers annuels.\n• Recrutement, intégration, gestion de la paie, administration du personnel et suivi de la performance des équipes.\n• Structuration des processus administratifs internes et coordination opérationnelle (6 années d'exercice).";
const splitCharon = doc.splitTextToSize(charonText, contentWidth - 4);
doc.text(splitCharon, margin + 2, y);

// Footer Page 1
doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(...mutedColor);
doc.text('Curriculum Vitae — ETONAM SEVERIN AMEGAKPO-AYEH  |  Page 1/2', margin, pageHeight - 6);

// ================= PAGE 2 =================
doc.addPage();

// Top Banner Bar Page 2
doc.setFillColor(...accentColor);
doc.rect(0, 0, pageWidth, 4, 'F');

y = 14;

// Compétences
y = drawSectionHeader('Domaines de Compétences & Savoir-Faire', y);

const skillsGrid = [
  {
    title: 'TRANSFORMATION NUMÉRIQUE (95%)',
    items: 'Développement Web moderne & interfaces, Stratégie Réseaux Sociaux, SEO (Référencement naturel), Publicité Numérique (Meta & Google Ads), Création de Contenu, Conception Graphique, Montage Vidéo.'
  },
  {
    title: 'ENTREPRENEURIAT & INNOVATION (92%)',
    items: 'Conception & pilotage de projets, Accompagnement stratégique de PME & artisans, Formation aux outils digitaux, Conception de solutions et prototypes web, Résolution pragmatique de problèmes.'
  },
  {
    title: 'LEADERSHIP & ENGAGEMENT COMMUNAUTAIRE (96%)',
    items: 'Mobilisation de partenaires stratégiques, Communication d\'impact et plaidoyer, Gestion de projets d\'inclusion sociale (handicap & éducation), Coordination transnationale (France-Togo).'
  },
  {
    title: 'GESTION ORGANISATIONNELLE & RIGUEUR (90%)',
    items: 'Gestion financière & comptable, Suivi budgétaire rigoureux, Gestion des Ressources Humaines (RH), Reporting bailleurs, Planification opérationnelle des ressources.'
  }
];

skillsGrid.forEach((sk) => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...accentColor);
  doc.text(sk.title, margin, y);
  y += 3.8;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(45, 45, 45);
  const spl = doc.splitTextToSize(sk.items, contentWidth - 4);
  doc.text(spl, margin + 2, y);
  y += (spl.length * 3.6) + 3;
});

y += 3;

// Réalisations Clés
y = drawSectionHeader('Réalisations & Initiatives Numériques', y);

const projList = [
  { name: 'Site Web Officiel ITG (www.itg-togo.org)', desc: 'Conception et déploiement du portail de l\'Institut Tamberma pour la Gouvernance.' },
  { name: 'Écosystème Digital Midjolazin', desc: 'Accompagnement de TPE/PME togolaises dans leur digitalisation et communication de marque.' },
  { name: 'Projet Solidaire SIEDD — « Un geste, une mobilité »', desc: 'Campagne de visibilité et mobilisation pour l\'accès au matériel adapté aux personnes en situation de handicap.' },
  { name: 'Prototype CRM Associatif', desc: 'Outil de centralisation et de suivi des partenaires et donateurs associatifs.' }
];

projList.forEach((p) => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.8);
  doc.setTextColor(...primaryColor);
  doc.text(`• ${p.name} : `, margin + 2, y);
  const nameWidth = doc.getTextWidth(`• ${p.name} : `);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(60, 60, 60);
  const descSpl = doc.splitTextToSize(p.desc, contentWidth - nameWidth - 4);
  doc.text(descSpl[0], margin + 2 + nameWidth, y);
  y += 4.5;
});

y += 4;

// Formation & Diplômes
y = drawSectionHeader('Formation & Certifications', y);

const eduList = [
  {
    period: '2025 — 2026',
    title: 'Lauréat du Programme D-Clic & Certifié en Communication et Marketing Numérique',
    place: 'Organisation Internationale de la Francophonie (OIF)',
    detail: 'Perfectionnement de haut niveau en marketing digital, stratégie réseaux sociaux, développement web et référencement.'
  },
  {
    period: '2017',
    title: 'Diplôme en Gestion des Ressources Humaines',
    place: 'Université de Lomé — Faculté des Sciences Économiques et de Gestion (FASEG)',
    detail: 'Gestion stratégique des équipes, droit du travail, administration et structuration organisationnelle.'
  },
  {
    period: '2013',
    title: 'Baccalauréat Deuxième Partie — Comptabilité & Gestion (Série G2)',
    place: 'Collège Technique et Commercial Les Éléphanteaux',
    detail: 'Comptabilité financière, gestion d\'entreprise, mathématiques financières et droit.'
  }
];

eduList.forEach((ed) => {
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.8);
  doc.setTextColor(...primaryColor);
  doc.text(ed.title, margin + 2, y);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(...accentColor);
  doc.text(ed.period, margin + contentWidth - 28, y);
  y += 3.8;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8);
  doc.setTextColor(...mutedColor);
  doc.text(ed.place, margin + 2, y);
  y += 3.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(60, 60, 60);
  doc.text(ed.detail, margin + 2, y);
  y += 5;
});

y += 3;

// Langues & Références
y = drawSectionHeader('Langues & Références Professionnelles', y);

// Langues
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(...primaryColor);
doc.text('LANGUES :', margin + 2, y);
doc.setFont('helvetica', 'normal');
doc.text('Français (Courant)  |  Éwé (Courant / Maternelle)  |  Anglais (Élémentaire / Technique)', margin + 24, y);

y += 7;

// Références
doc.setFont('helvetica', 'bold');
doc.setFontSize(8.5);
doc.setTextColor(...primaryColor);
doc.text('RÉFÉRENCES :', margin + 2, y);
y += 4;
doc.setFont('helvetica', 'normal');
doc.setFontSize(8);
doc.setTextColor(50, 50, 50);
doc.text('• Aloegninou Ablavi — Présidente, Association SIEDD (France - Togo)  |  Tél : +33 6 03 37 79 20', margin + 4, y);
y += 4;
doc.text('• Amegakpo-Ayeh Komivi Semeko Paul — Directeur, Institut Tamberma pour la Gouvernance (ITG)  |  Tél : +228 90 81 28 15', margin + 4, y);

// Footer Page 2
doc.setFont('helvetica', 'normal');
doc.setFontSize(7.5);
doc.setTextColor(...mutedColor);
doc.text('Curriculum Vitae — ETONAM SEVERIN AMEGAKPO-AYEH  |  Page 2/2', margin, pageHeight - 6);

// Ensure public dir exists and write
if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
fs.writeFileSync('public/CV_Etonam_Severin_AMEGAKPO-AYEH.pdf', pdfBuffer);
console.log('PDF generated successfully at public/CV_Etonam_Severin_AMEGAKPO-AYEH.pdf');
