import React from 'react';
import QuadroSemanal from './QuadroSemanal';
import type { PermanenciaData, TempoPermanencia } from '../types/mapa';

/**
 * TabelaPermanencia
 * -----------------
 * Quadro semanal do "Mapa de Aulas e Permanencias" (a partir de
 * `permanencia.json`). Aulas mostram disciplina/sala; permanencias mostram o
 * tipo expandido pela legenda. Wrapper fino sobre <QuadroSemanal>.
 *
 * Uso em .mdx:
 *   import permanencia from '@site/src/data/permanencia.json';
 *   import TabelaPermanencia from '@site/src/components/TabelaPermanencia';
 *   <TabelaPermanencia dados={permanencia} />
 */

// Legenda dos tipos de permanencia (codigo -> descricao).
const LEGENDA_PERM: Record<string, string> = {
  ME: 'Manutenção de ensino',
  P: 'Permanência',
  Paluno: 'Atendimento ao aluno',
};

function ConteudoCelula({ t }: { t: TempoPermanencia }): React.ReactElement {
  if (t.codigo) {
    return (
      <>
        <strong>{t.atividade}</strong>
        {t.sala ? (
          <>
            <br />
            {t.sala}
          </>
        ) : null}
      </>
    );
  }
  const label = LEGENDA_PERM[t.atividade] ?? t.atividade ?? 'Permanência';
  return (
    <>
      {label}
      {t.sala ? (
        <>
          <br />
          {t.sala}
        </>
      ) : null}
    </>
  );
}

export interface TabelaPermanenciaProps {
  dados?: PermanenciaData;
}

export default function TabelaPermanencia({
  dados,
}: TabelaPermanenciaProps): React.ReactElement {
  if (!dados || !dados.tempos || dados.tempos.length === 0) {
    return (
      <p>
        <strong>Sem dados de permanência.</strong> Verifique se o arquivo{' '}
        <code>permanencia.json</code> foi gerado.
      </p>
    );
  }

  const subtitulo = [
    (dados.professores ?? []).join(', '),
    (dados.periodos ?? []).join(', '),
  ]
    .filter(Boolean)
    .join(' — ');

  const cabecalho = subtitulo ? (
    <p>
      <em>{subtitulo}</em>
    </p>
  ) : null;

  const rodape = (
    <p style={{ marginTop: '0.75rem', fontSize: '0.85em' }}>
      <strong>Legenda:</strong>{' '}
      {Object.entries(LEGENDA_PERM).map(([k, v], i) => (
        <React.Fragment key={k}>
          {i > 0 ? ' · ' : ''}
          <code>{k}</code> — {v}
        </React.Fragment>
      ))}
    </p>
  );

  return (
    <QuadroSemanal<TempoPermanencia>
      tempos={dados.tempos}
      cabecalho={cabecalho}
      rodape={rodape}
      renderCelula={(t) => <ConteudoCelula t={t} />}
    />
  );
}
