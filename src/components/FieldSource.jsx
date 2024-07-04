import React from 'react';
import { Section } from './layouts/Section';
import { Table } from './layouts/Table';
import { useMakerContext } from '../store/MakerContext';

export function FieldSource({ customfield }) {
  const { preview } = useMakerContext();
  if (!customfield) return null;


  return (
    <>
      {preview.tag === 'section' && <Section customfield={customfield} preview={preview} />}
      {preview.tag === 'table' && <Table customfield={customfield} preview={preview} />}
    </>
  );
}
