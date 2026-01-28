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
    start: "18-Aug-2025",
    end: "25-Aug-2025",
    conteudo:
      "Revisão de Circuitos; Instalação e uso de softwares da disciplina;",
  },
  {
    tarefa: "LAB01",
    hrefi: "/lab/LAB01",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=384201", // external

    start: "25-Aug-2025",
    end: "01-Sep-2025",
    conteudo: "Curva característica do diodo;",
  },
  {
    tarefa: "LAB02",
    hrefi: "/lab/LAB02",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=380901", // external

    start: "01-Sep-2025",
    end: "08-Sep-2025",
    conteudo: "Circuitos com diodo;",
  },
  {
    tarefa: "LAB03",
    hrefi: "/lab/LAB03",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=380902", // external

    start: "15-Sep-2025",
    end: "22-Sep-2025",
    conteudo: "Diodo Zener e LED;",
  },
  {
    tarefa: "LAB04",
    hrefi: "/lab/LAB04",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=380903", // external

    start: "22-Sep-2025",
    end: "29-Sep-2025",
    conteudo: "Circuito Retificador de Meia Onda;",
  },
  {
    tarefa: "LAB05",
    hrefi: "/lab/LAB05",
    hrefe: "hhttps://moodle.utfpr.edu.br/course/section.php?id=387986", // external

    start: "29-Sep-2025",
    end: "06-Oct-2025",
    conteudo: "Circuitos Retificadores de Onda Completa;",
  },
  {
    tarefa: "LAB06",
    hrefi: "/lab/LAB06",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=387992", // external

    start: "06-Oct-2025",
    end: "13-Oct-2025",
    conteudo: "Transistor Bipolar de junção (Modos de Operação);",
  },
  {
    tarefa: "LAB07",
    hrefi: "/lab/LAB07",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=387993", // external

    start: "13-Oct-2025",
    end: "20-Oct-2025",
    conteudo: "Transistor Bipolar (NPN) na região ativa, análise CC;",
  },
  {
    tarefa: "LAB08",
    hrefi: "/lab/LAB08",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=392012", // external

    start: "03-Nov-2025",
    end: "10-Nov-2025",
    conteudo: "Transistor Bipolar (PNP) na região ativa, análise CC;",
  },
  {
    tarefa: "LAB09",
    hrefi: "/lab/LAB09",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=392440", // external

    start: "10-Nov-2025",
    end: "17-Nov-2025",
    conteudo: "Transistor JFET e MOSFET;",
  },
  {
    tarefa: "LAB10",
    hrefi: "/lab/LAB10",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=387994", // external

    start: "10-Nov-2025",
    end: "17-Nov-2025",
    conteudo: "AmpOp como Comparador;",
  },
  {
    tarefa: "LAB11",
    hrefi: "/lab/LAB11",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=387994", // external

    start: "10-Nov-2025",
    end: "17-Nov-2025",
    conteudo: "AmpOp com realimentação negativa;",
  },
  {
    tarefa: "LAB12",
    hrefi: "/lab/LAB12",
    hrefe: "https://moodle.utfpr.edu.br/course/section.php?id=387994", // external

    start: "10-Nov-2025",
    end: "17-Nov-2025",
    conteudo: "Circuitos osciladores, NE555;",
  },
];
// src/components/LabTable.tsx
