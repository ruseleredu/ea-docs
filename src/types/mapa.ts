/**
 * Tipos dos dados de mapa (grade semanal) gerados por gerar-json.js /
 * extrair_salas.py / extrair_permanencia.py.
 */

/** Campos comuns a um "tempo" (celula) da grade. */
export interface TempoBase {
  codigo_slot: string;
  dia_indice: number | null;
  dia_semana: string;
  turno: string;
  slot: string;
  horario: string;
  atividade: string;
  codigo: string;
  turma: string;
  codigoCompleto: string;
  turma_extra: string;
}

/** Minimo que o QuadroSemanal precisa para posicionar uma celula na grade. */
export interface TempoGrade {
  dia_semana: string;
  slot: string;
  horario?: string;
}

// --------------------------------------------------------------------------- //
// Salas (salas.json)
// --------------------------------------------------------------------------- //
export interface TempoSala extends TempoBase {
  professor: string;
}

export interface Sala {
  sala: string;
  laboratorio: string;
  capacidade: string;
  periodo: string;
  slug: string;
  tempos: TempoSala[];
}

export interface SalasData {
  tipo: 'salas';
  geradoEm: string;
  totalRegistros: number;
  totalSalas: number;
  salas: Sala[];
  tempos: (TempoSala & { sala: string })[];
}

// --------------------------------------------------------------------------- //
// Permanencias (permanencia.json)
// --------------------------------------------------------------------------- //
export interface TempoPermanencia extends TempoBase {
  tipo: string; // 'Aula' | 'Permanência'
  sala: string;
  professor: string;
  periodo: string;
}

export interface PermanenciaData {
  tipo: 'permanencia';
  geradoEm: string;
  totalRegistros: number;
  totalDisciplinas: number;
  professores: string[];
  periodos: string[];
  tempos: TempoPermanencia[];
}
