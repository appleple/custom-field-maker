import React from 'react';
import { Section } from './layouts/Section';
import { Table } from './layouts/Table';
import { useMakerContext } from '../store/MakerContext';

export function FieldSource() {
  const {
    preview: { tag },
  } = useMakerContext();

  return (
    <>
      {tag === 'section' && <Section />}
      {tag === 'table' && <Table />}
    </>
  );
}
