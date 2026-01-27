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
      "Apresentação da Disciplina; Materiais utilizados na disciplina;",
  },
  {
    quiz: "Q01",
    hrefi: "/ead/Q01",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375304",
    start: "25-Aug-2025",
    end: "01-Sep-2025",
    descricao:
      "Sistemas Numéricos e Representação de Dados; Conceitos Básicos de Eletrônica;",
  },
  {
    quiz: "Q02",
    hrefi: "/ead/Q02",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375305",
    start: "01-Sep-2025",
    end: "08-Sep-2025",
    descricao:
      "Portas lógicas. Tabela Verdade. Mintermos e Maxtermos. Funções lógicas;",
  },
  {
    quiz: "Q03",
    hrefi: "/ead/Q03",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375306",
    start: "15-Sep-2025",
    end: "22-Sep-2025",
    descricao:
      "Teoremas fundamentais da álgebra de Boole. Teorema de Morgan e simplificação de funções lógicas.",
  },
  {
    quiz: "Q04",
    hrefi: "/ead/Q04",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375307",
    start: "22-Sep-2025",
    end: "29-Sep-2025",
    descricao:
      "Formas canônicas (mintermos e maxitermos), Mapas de Veitch Karnaugh;",
  },
  {
    quiz: "Q05",
    hrefi: "/ead/Q05",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375308",
    start: "29-Sep-2025",
    end: "06-Oct-2025",
    descricao: "Exercícios sobre simplificação e introdução ao Arduino;",
  },
  {
    quiz: "Q06",
    hrefi: "/ead/Q06",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375309",
    start: "06-Oct-2025",
    end: "13-Oct-2025",
    descricao: "Multiplexador e Demultiplexador;",
  },
  {
    quiz: "Q07",
    hrefi: "/ead/Q07",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375310",
    start: "13-Oct-2025",
    end: "20-Oct-2025",
    descricao: "Códigos, codificadores e decodificadores;",
  },
  {
    quiz: "Q08",
    hrefi: "/ead/Q08",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=391745",
    start: "03-Nov-2025",
    end: "10-Nov-2025",
    descricao: "Arduino - Parte 02;",
  },
  {
    quiz: "Q09",
    hrefi: "/ead/Q09",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375314",
    start: "10-Nov-2025",
    end: "17-Nov-2025",
    descricao: "Flip flop RS e JK;",
  },
  {
    quiz: "Q10",
    hrefi: "/ead/Q10",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375315",
    start: "17-Nov-2025",
    end: "24-Nov-2025",
    descricao: "Flip flop JK, T e D;",
  },

  {
    quiz: "Q11",
    hrefi: "/ead/Q11",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375316",
    start: "17-Nov-2025",
    end: "24-Nov-2025",
    descricao: "Contadores Assíncronos;",
  },
  {
    quiz: "Q12",
    hrefi: "/ead/Q12",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375317",
    start: "17-Nov-2025",
    end: "24-Nov-2025",
    descricao: "Contadores Síncronos;",
  },
  {
    quiz: "Q13",
    hrefi: "/ead/Q13",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375312",
    start: "17-Nov-2025",
    end: "24-Nov-2025",
    descricao: "Aritmética binaria, somador e subtrator;",
  },
  {
    quiz: "Q14",
    hrefi: "/ead/Q14",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375318",
    start: "17-Nov-2025",
    end: "24-Nov-2025",
    descricao: "Conversão análogico-digital (CAD) e digital-analógico (CDA);",
  },
  {
    quiz: "Q15",
    hrefi: "/ead/Q15",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=375319",
    start: "17-Nov-2025",
    end: "24-Nov-2025",
    descricao: "Tipos de memórias digitais, registradores e geradores de clock;",
  },
];
