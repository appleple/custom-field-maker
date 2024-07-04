import React from 'react';
import { Section } from './layouts/Section';
import { Table } from './layouts/Table';

export const FieldSource = ({ customfield, preview }) => {
  if (!customfield) return null;

  return (
    <>
      {preview.tag === 'section' && <Section customfield={customfield} preview={preview} />}
      {preview.tag === 'table' && <Table customfield={customfield} preview={preview} />}
    </>
  );
};
