import React from 'react';
import QuadroSemanal from './QuadroSemanal';
import type { Sala, TempoSala } from '../types/mapa';

/**
 * TabelaSala
 * ----------
 * Quadro semanal de ocupacao de uma sala (a partir de `salas.json`).
 * Wrapper fino sobre <QuadroSemanal>.
 *
 * Uso em .mdx:
 *   import salas from '@site/src/data/salas.json';
 *   import TabelaSala from '@site/src/components/TabelaSala';
 *   export const sala = salas.salas.find((s) => s.slug === 'cd-106');
 *   <TabelaSala sala={sala} />
 */

export interface TabelaSalaProps {
  sala?: Sala;
}

export default function TabelaSala({ sala }: TabelaSalaProps): React.ReactElement {
  if (!sala) {
    return (
      <p>
        <strong>Sala não encontrada.</strong> Verifique o <code>slug</code> e se
        o arquivo <code>salas.json</code> foi gerado.
      </p>
    );
  }

  const cabecalho = (
    <p>
      <strong>Sala:</strong> {sala.sala}
      {sala.laboratorio ? ` · ${sala.laboratorio}` : ''}
      {sala.capacidade ? ` · Capacidade: ${sala.capacidade}` : ''}
      {sala.periodo ? ` · ${sala.periodo}` : ''}
    </p>
  );

  return (
    <QuadroSemanal<TempoSala>
      tempos={sala.tempos ?? []}
      cabecalho={cabecalho}
      renderCelula={(t) => (
        <>
          <strong>{t.atividade}</strong>
          <br />
          {t.codigoCompleto}
          {t.professor ? (
            <>
              <br />
              {t.professor}
            </>
          ) : null}
        </>
      )}
    />
  );
}
