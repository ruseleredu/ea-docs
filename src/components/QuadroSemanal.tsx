import React from 'react';
import type { TempoGrade } from '../types/mapa';

/**
 * QuadroSemanal
 * -------------
 * Grade semanal generica (dias x horarios) que exibe TODOS os slots
 * (M1..M6, T1..T6, N1..N6), separados por turno e com os intervalos
 * indicados. Cada celula preenchida e renderizada por `renderCelula`.
 *
 * Usado por <TabelaSala> e <TabelaPermanencia>.
 */

const DIAS_PADRAO = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

// Estrutura fixa da grade: cada turno, seus slots/horarios e onde cai o
// intervalo (apos qual slot).
interface SlotDef {
  slot: string;
  horario: string;
}
interface TurnoDef {
  turno: 'Manhã' | 'Tarde' | 'Noite';
  intervaloApos: string;
  slots: SlotDef[];
}

const GRADE: TurnoDef[] = [
  {
    turno: 'Manhã',
    intervaloApos: 'M3',
    slots: [
      { slot: 'M1', horario: '07:30' }, { slot: 'M2', horario: '08:20' },
      { slot: 'M3', horario: '09:10' }, { slot: 'M4', horario: '10:20' },
      { slot: 'M5', horario: '11:10' }, { slot: 'M6', horario: '12:00' },
    ],
  },
  {
    turno: 'Tarde',
    intervaloApos: 'T3',
    slots: [
      { slot: 'T1', horario: '13:00' }, { slot: 'T2', horario: '13:50' },
      { slot: 'T3', horario: '14:40' }, { slot: 'T4', horario: '15:50' },
      { slot: 'T5', horario: '16:40' }, { slot: 'T6', horario: '17:50' },
    ],
  },
  {
    turno: 'Noite',
    intervaloApos: 'N3',
    slots: [
      { slot: 'N1', horario: '18:40' }, { slot: 'N2', horario: '19:30' },
      { slot: 'N3', horario: '20:20' }, { slot: 'N4', horario: '21:20' },
      { slot: 'N5', horario: '22:10' }, { slot: 'N6', horario: '23:00' },
    ],
  },
];

const cell: React.CSSProperties = {
  border: '1px solid var(--ifm-color-emphasis-300)',
  padding: '0.35rem 0.5rem',
  verticalAlign: 'top',
  fontSize: '0.85em',
};
const head: React.CSSProperties = {
  ...cell,
  background: 'var(--ifm-color-emphasis-100)',
  fontWeight: 700,
  textAlign: 'center',
  whiteSpace: 'nowrap',
};
const turnoRow: React.CSSProperties = {
  ...cell,
  background: 'var(--ifm-color-emphasis-200)',
  fontWeight: 700,
};
const intervaloRow: React.CSSProperties = {
  ...cell,
  background: 'var(--ifm-color-emphasis-0)',
  color: 'var(--ifm-color-emphasis-600)',
  fontStyle: 'italic',
  textAlign: 'center',
  fontSize: '0.78em',
};

export interface QuadroSemanalProps<T extends TempoGrade> {
  tempos: T[];
  /** Como renderizar o conteudo de uma celula preenchida. */
  renderCelula: (t: T) => React.ReactNode;
  /** Colunas (dias). Padrao: semana completa (Segunda–Sábado). */
  dias?: string[];
  /** Turnos a exibir. Padrao: todos (Manhã, Tarde, Noite). */
  turnos?: Array<'Manhã' | 'Tarde' | 'Noite'>;
  cabecalho?: React.ReactNode;
  rodape?: React.ReactNode;
}

export default function QuadroSemanal<T extends TempoGrade>({
  tempos,
  renderCelula,
  dias,
  turnos,
  cabecalho,
  rodape,
}: QuadroSemanalProps<T>): React.ReactElement {
  // Colunas: usa as informadas ou a semana completa (DIAS_PADRAO).
  const colunas = dias ?? DIAS_PADRAO;
  const nCol = colunas.length + 1;

  const turnosVisiveis = turnos
    ? GRADE.filter((g) => turnos.includes(g.turno))
    : GRADE;

  // Mapa de celulas: "Dia|Slot" -> tempo
  const celulas = new Map<string, T>();
  for (const t of tempos) celulas.set(`${t.dia_semana}|${t.slot}`, t);

  return (
    <div>
      {cabecalho}
      <table style={{ display: 'table', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={head}>Horário</th>
            {colunas.map((d) => (
              <th key={d} style={head}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {turnosVisiveis.map((turnoDef) => (
            <React.Fragment key={turnoDef.turno}>
              <tr>
                <td colSpan={nCol} style={turnoRow}>{turnoDef.turno}</td>
              </tr>
              {turnoDef.slots.map((sd) => (
                <React.Fragment key={sd.slot}>
                  <tr>
                    <th style={head}>
                      {sd.slot}
                      <br />
                      <span style={{ fontWeight: 400 }}>{sd.horario}</span>
                    </th>
                    {colunas.map((d) => {
                      const t = celulas.get(`${d}|${sd.slot}`);
                      return (
                        <td key={d} style={cell}>
                          {t ? renderCelula(t) : null}
                        </td>
                      );
                    })}
                  </tr>
                  {sd.slot === turnoDef.intervaloApos ? (
                    <tr>
                      <td colSpan={nCol} style={intervaloRow}>— Intervalo —</td>
                    </tr>
                  ) : null}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {rodape}
    </div>
  );
}
