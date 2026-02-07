import { ThemeConfig } from "@docusaurus/preset-classic";

const formatter = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23", // Use 24-hour format
});
const utc3Time = formatter.format(new Date());
const COPYRIGHT_STRING = `Copyright © ${new Date().getFullYear()} ea-docs. Built with <a href="https://docusaurus.io/" style="color: #ffffff; font-weight: bold;" target="_blank" rel="noopener noreferrer">Docusaurus</a> at ${utc3Time} UTC-3.`;

const footer: ThemeConfig["footer"] = {
  style: "dark",
  links: [
    {
      title: "UTFPR",
      items: [
        {
          label: "Moodle",
          href: "https://moodle.utfpr.edu.br/",
        },
        {
          label: "Webmail",
          href: "https://webmail.utfpr.edu.br/",
        },
        {
          label: "Sistemas",
          href: "https://sistemas2.utfpr.edu.br/",
        },
        {
          label: "SEI",
          href: "https://sei.utfpr.edu.br/",
        },
        {
          label: "Chat",
          href: "https://chat.utfpr.edu.br/",
        },
        {
          label: "Ajuda",
          href: "https://ajuda.utfpr.edu.br/",
        },
        {
          label: "Calendário",
          href: "https://www.utfpr.edu.br/alunos/calendario",
        },
        {
          label: "TCC",
          href: "https://nupet.daelt.ct.utfpr.edu.br/tcc/engenharia/index.html",
        },
      ],
    },
    {
      title: "Sistemas",
      items: [
        {
          label: "Sigepe",
          href: "https://sougov.sigepe.gov.br/sougov/Home",
        },
        {
          label: "Consulta Diários",
          href: "https://sistemas2.utfpr.edu.br/url/1141",
        },
        {
          label: "Permanências",
          href: "https://sistemas2.utfpr.edu.br/url/1026",
        },
        {
          label: "Planejamento",
          href: "https://sistemas2.utfpr.edu.br/url/1890",
        },
        {
          label: "Lançamentos",
          href: "https://sistemas2.utfpr.edu.br/url/1514",
        },
        {
          label: "Mapa de Professor",
          href: "https://sistemas2.utfpr.edu.br/url/1022",
        },
        {
          label: "Mapa de Sala",
          href: "https://sistemas2.utfpr.edu.br/url/1934",
        },
      ],
    },
    /*
        {
          title: "Desenvolvedor",
          items: [
            {
              label: "Visual Studio Code",
              href: "https://code.visualstudio.com/download",
            },
            {
              label: "Git SCM",
              href: "https://git-scm.com/downloads",
            },
            {
              label: "GitHub CLI",
              href: "https://cli.github.com/",
            },
            {
              label: "GitHub Desktop",
              href: "https://desktop.github.com/download/",
            },
            {
              label: "PlatformIO",
              href: "https://platformio.org//install/ide?install=vscode",
            },
            {
              label: "Arduino IDE",
              href: "https://www.arduino.cc/en/software/",
            },
          ],
        },
        */
    {
      title: "Ferramentas",
      items: [
        {
          label: "LTspice",
          href: "https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html",
        },
        {
          label: "PSIM",
          href: "https://altair.com/psim",
        },
        {
          label: "SMath Studio",
          href: "https://smath.com/en-US",
        },
        {
          label: "Tinkercad Circuits",
          href: "https://www.tinkercad.com/circuits",
        },
      ],
    },
    {
      title: "Moodle",
      items: [
        {
          label: "Analógica",
          href: "https://moodle.utfpr.edu.br/course/view.php?id=4785",
        },
        {
          label: "Microcontrolados",
          href: "https://moodle.utfpr.edu.br/course/view.php?id=29540",
        },
        {
          label: "Digitais - EaD",
          href: "https://moodle.utfpr.edu.br/course/view.php?id=27864",
        },
        {
          label: "Digitais - LAB",
          href: "https://moodle.utfpr.edu.br/course/view.php?id=28604",
        },
        {
          label: "PSIM",
          href: "https://moodle.utfpr.edu.br/course/view.php?id=12454",
        },
        {
          label: "LTspice",
          href: "https://moodle.utfpr.edu.br/course/view.php?id=12399",
        },
      ],
    },
    {
      title: "Doku Sites",
      items: [
        {
          label: "Main Site",
          href: "https://adrianoruseler.github.io/site/",
        },
        {
          label: "STM32 Docs",
          href: "https://ruseleredu.github.io/stm32doc/",
        },
        {
          label: "Sistemas Digitais",
          href: "https://ruseleredu.github.io/sd-docs/",
        },
        {
          label: "Analógica",
          href: "https://ruseleredu.github.io/ea-docs/",
        },
        {
          label: "LabSEC",
          href: "https://ruseleredu.github.io/labsec/",
        },
        {
          label: "Moodle Docs",
          href: "https://adrianoruseler.github.io/moodle-docs/",
        },
        {
          label: "My Docs",
          href: "https://adrianoruseler.github.io/my-docs/",
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          label: "YouTube",
          href: "https://www.youtube.com/@Rusla82",
        },
        {
          label: "YouTube Edu",
          href: "https://www.youtube.com/@adrianoruseler653",
        },
        {
          label: "GitHub",
          href: "https://github.com/AdrianoRuseler/",
        },
        {
          label: "GitHub Edu",
          href: "https://github.com/ruseleredu/",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/adrianoruseler/",
        },
        {
          label: "ResearchGate",
          href: "https://www.researchgate.net/profile/Adriano-Ruseler/",
        },
        {
          label: "ORCID",
          href: "https://orcid.org/0000-0003-0915-9483",
        },
      ],
    },
  ],
  copyright: COPYRIGHT_STRING,
};

export default footer;
