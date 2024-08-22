import React from 'react';
import { TableLayoutConfirm } from './cofirmLayouts/TableLayoutConfirm';
import { useMakerContext } from '../store/MakerContext';

export function FieldConfirmSource() {
  const {
    state: {
      preview: { tag },
    },
  } = useMakerContext();

  return (
    <>
      {tag === 'section' ? <TableLayoutConfirm /> : null}
      {tag === 'table' ? <TableLayoutConfirm /> : null}
    </>
  );
}
