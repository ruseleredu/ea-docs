// src/data/labData.ts
export type LabRow = {
  tarefa: string;

  // internal/external lab links
  hrefi?: string; // internal
  hrefe?: string; // external

  start: string;
  end: string;
  conteudo: string;
};

export const labData: LabRow[] = [
  {
    tarefa: "LAB00",
    hrefi: "/lab/LAB00", // internal page
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=384200", // external
    start: "17-Mar-2026",
    end: "24-Mar-2026",
    conteudo:
      "Revisão de Circuitos; Instalação e uso de softwares da disciplina;",
  },
  {
    tarefa: "LAB01",
    hrefi: "/lab/LAB01",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=384201", // external

    start: "24-Mar-2026",
    end: "31-Mar-2026",
    conteudo: "Curva característica do diodo;",
  },
  {
    tarefa: "LAB02",
    hrefi: "/lab/LAB02",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=380901", // external

    start: "31-Mar-2026",
    end: "07-Apr-2026",
    conteudo: "Circuitos com diodo;",
  },
  {
    tarefa: "LAB03",
    hrefi: "/lab/LAB03",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=380902", // external

    start: "07-Apr-2026",
    end: "14-Apr-2026",
    conteudo: "Diodo Zener e LED;",
  },
  {
    tarefa: "LAB04",
    hrefi: "/lab/LAB04",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=380903", // external

    start: "14-Apr-2026",
    end: "21-Apr-2026",
    conteudo: "Circuito Retificador de Meia Onda;",
  },
  {
    tarefa: "LAB05",
    hrefi: "/lab/LAB05",
    hrefe: "hhttps://moodle.utfpr.edu.br/course/section.php?id=387986", // external

    start: "28-Apr-2026",
    end: "05-May-2026",
    conteudo: "Circuitos Retificadores de Onda Completa;",
  },
  {
    tarefa: "LAB06",
    hrefi: "/lab/LAB06",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=387992", // external

    start: "05-May-2026",
    end: "12-May-2026",
    conteudo: "Transistor Bipolar de junção (Modos de Operação);",
  },
  {
    tarefa: "LAB07",
    hrefi: "/lab/LAB07",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=387993", // external

    start: "12-May-2026",
    end: "19-May-2026",
    conteudo: "Transistor Bipolar (NPN) na região ativa, análise CC;",
  },
  {
    tarefa: "LAB08",
    hrefi: "/lab/LAB08",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=392012", // external

    start: "19-May-2026",
    end: "26-May-2026",
    conteudo: "Transistor Bipolar (PNP) na região ativa, análise CC;",
  },
  {
    tarefa: "LAB09",
    hrefi: "/lab/LAB09",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=392440", // external

    start: "26-May-2026",
    end: "02-Jun-2026",
    conteudo: "Transistor JFET e MOSFET;",
  },
  {
    tarefa: "LAB10",
    hrefi: "/lab/LAB10",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=387994", // external

    start: "09-Jun-2026",
    end: "16-Jun-2026",
    conteudo: "AmpOp como Comparador;",
  },
  {
    tarefa: "LAB11",
    hrefi: "/lab/LAB11",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=387994", // external

    start: "16-Jun-2026",
    end: "23-Jun-2026",
    conteudo: "AmpOp com realimentação negativa;",
  },
  {
    tarefa: "LAB12",
    hrefi: "/lab/LAB12",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=387994", // external

    start: "23-Jun-2026",
    end: "30-Jun-2026",
    conteudo: "Circuitos osciladores, NE555;",
  },
];
// src/components/LabTable.tsx
