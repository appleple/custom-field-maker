import React from 'react';
import { Section } from './layouts/Section';
import { TableLayout } from './layouts/TableLayout';
import { useMakerContext } from '../store/MakerContext';

export function FieldSource() {
  const {
    state: {
      preview: { tag },
    },
  } = useMakerContext();

  return (
    <>
      {tag === 'section' ? <Section /> : null}
      {tag === 'table' ? <TableLayout /> : null}
    </>
  );
}
