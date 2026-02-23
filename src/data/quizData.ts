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
    start: "10-Mar-2026",
    end: "24-Mar-2026",
    descricao:
      "Revisão de Circuitos; Instalação e uso de softwares da disciplina;",
  },
  {
    quiz: "Q01",
    hrefi: "/ead/Q01",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375304",
    start: "24-Mar-2026",
    end: "14-Apr-2026",
    descricao:
      "Curva característica do diodo; Circuitos com diodo; Diodo Zener e LED;",
  },
  {
    quiz: "Q02",
    hrefi: "/ead/Q02",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375305",
    start: "14-Apr-2026",
    end: "05-May-2026",
    descricao:
      "Circuito Retificador de Meia Onda e Onda Completa com carga R e RC;",
  },
  {
    quiz: "Q03",
    hrefi: "/ead/Q03",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375306",
    start: "05-May-2026",
    end: "19-May-2026",
    descricao: "Transistor Bipolar (NPN) na região ativa, análise CC;",
  },
  {
    quiz: "Q04",
    hrefi: "/ead/Q04",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375307",
    start: "19-May-2026",
    end: "26-May-2026",
    descricao: "Transistor Bipolar (PNP) na região ativa, análise CC;",
  },
  {
    quiz: "Q05",
    hrefi: "/ead/Q05",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375308",
    start: "26-May-2026",
    end: "02-Jun-2026",
    descricao: "Transistor JFET e MOSFET;",
  },
  {
    quiz: "Q06",
    hrefi: "/ead/Q06",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375309",
    start: "09-Jun-2026",
    end: "16-Jun-2026",
    descricao: "AmpOp como Comparador;",
  },
  {
    quiz: "Q07",
    hrefi: "/ead/Q07",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375310",
    start: "16-Jun-2026",
    end: "23-Jun-2026",
    descricao: "AmpOp com realimentação negativa;",
  },
  {
    quiz: "Q08",
    hrefi: "/ead/Q08",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=391745",
    start: "23-Jun-2026",
    end: "30-Jun-2026",
    descricao: "Circuitos osciladores, NE555;",
  },
];
