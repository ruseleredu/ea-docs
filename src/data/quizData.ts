// src/data/quizData.ts
export type QuizRow = {
  quiz: string;

  // internal/external quiz links
  hrefi?: string; // internal (/quiz/quiz00)
  hrefe?: string; // external (Moodle, etc.)

  start: string;
  end: string;
  descricao: string;
};

export const quizData: QuizRow[] = [
  {
    quiz: "Q00",
    hrefi: "/ead/Q00",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=384598",
    start: "18-Aug-2025",
    end: "25-Aug-2025",
    descricao:
      "Revisão de Circuitos; Instalação e uso de softwares da disciplina;",
  },
  {
    quiz: "Q01",
    hrefi: "/ead/Q01",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375304",
    start: "25-Aug-2025",
    end: "01-Sep-2025",
    descricao:
      "Curva característica do diodo; Circuitos com diodo; Diodo Zener e LED;",
  },
  {
    quiz: "Q02",
    hrefi: "/ead/Q02",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375305",
    start: "01-Sep-2025",
    end: "08-Sep-2025",
    descricao:
      "Circuito Retificador de Meia Onda e Onda Completa com carga R e RC;",
  },
  {
    quiz: "Q03",
    hrefi: "/ead/Q03",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375306",
    start: "15-Sep-2025",
    end: "22-Sep-2025",
    descricao: "Transistor Bipolar (NPN) na região ativa, análise CC;",
  },
  {
    quiz: "Q04",
    hrefi: "/ead/Q04",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375307",
    start: "22-Sep-2025",
    end: "29-Sep-2025",
    descricao: "Transistor Bipolar (PNP) na região ativa, análise CC;",
  },
  {
    quiz: "Q05",
    hrefi: "/ead/Q05",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375308",
    start: "29-Sep-2025",
    end: "06-Oct-2025",
    descricao: "Transistor JFET e MOSFET;",
  },
  {
    quiz: "Q06",
    hrefi: "/ead/Q06",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375309",
    start: "06-Oct-2025",
    end: "13-Oct-2025",
    descricao: "AmpOp como Comparador;",
  },
  {
    quiz: "Q07",
    hrefi: "/ead/Q07",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375310",
    start: "13-Oct-2025",
    end: "20-Oct-2025",
    descricao: "AmpOp com realimentação negativa;",
  },
  {
    quiz: "Q08",
    hrefi: "/ead/Q08",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=391745",
    start: "03-Nov-2025",
    end: "10-Nov-2025",
    descricao: "Circuitos osciladores, NE555;",
  },
];
