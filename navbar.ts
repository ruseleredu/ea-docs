import { NavbarItem } from "@docusaurus/theme-common";

// 1. Import the labData array
// https://gemini.google.com/share/c52111cbf825
// Adjust the path as needed.
const { labData } = require("./src/data/labData");
// OR: import { labData } from './src/data/labData';

// 2. Create the Docusaurus-compatible array format
const labDropdownItems = labData.map((lab) => ({
  // Docusaurus expects 'label'. We use your 'conteudo' property for the text.
  //label: lab.conteudo,
  label: `${lab.tarefa} - ${lab.conteudo}`,
  // Docusaurus expects 'to' (for internal links). We use your 'hrefi' property.
  to: lab.hrefi,
}));

const { quizData } = require("./src/data/quizData");

// 2. Create the Docusaurus-compatible array format
const quizDropdownItems = quizData.map((quiz) => ({
  // Docusaurus expects 'label'. We use your 'descricao' property for the text.
  //label: lab.conteudo,
  label: `${quiz.quiz} - ${quiz.descricao}`,
  // Docusaurus expects 'to' (for internal links). We use your 'hrefi' property.
  to: quiz.hrefi,
}));

const navbarItems: NavbarItem[] = [
  {
    type: "docSidebar",
    sidebarId: "tutorialSidebar",
    position: "left",
    label: "Docs",
  },
  {
    label: "UTFPR",
    to: "/utfpr/about", // Link to a page in your UTFPR docs
    type: "dropdown",
    position: "left",
    items: [
      {
        to: "/utfpr/ELT82E/folder", // Link to a page in your UTFPR docs
        label: "ELT82E - Eletrônica Analógica",
      },
    ],
  },
  {
    to: "/ead/intro", // Link to a page in your EaD docs
    label: "EaD",
    type: "dropdown",
    position: "left",
    activeBaseRegex: `/ead/`, // Highlight when any EaD doc is active
    items: [...quizDropdownItems],
  },
  {
    to: "/lab/intro", // Link to a page in your LAB docs
    label: "LABs",
    type: "dropdown",
    position: "left",
    activeBaseRegex: `/lab/`, // Highlight when any LAB doc is active
    items: [...labDropdownItems],
  },
  {
    to: "/psim/intro", // Link to a page in your PSIM docs
    label: "PSIM",
    position: "left",
    activeBaseRegex: `/psim/`, // Highlight when any PSIM doc is active
  },
  {
    to: "/ltspice/intro", // Link to a page in your LTspice docs
    label: "LTspice",
    position: "left",
    activeBaseRegex: `/ltspice/`, // Highlight when any LTspice doc is active
  },
  // { to: "/blog", label: "Blog", position: "left" },
  {
    to: "/pdf/CT2026.pdf",
    label: "Calendário",
    position: "right",
    target: "_blank",
  },
  {
    href: "https://github.com/ruseleredu/ea-docs",
    label: "GitHub",
    position: "right",
  },
];

export default navbarItems;
