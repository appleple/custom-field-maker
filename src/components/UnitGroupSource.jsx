import React from 'react';
import { UnitGroupSection } from './layouts/UnitGroupSection';
import { UnitGroupTableLayout } from './layouts/UnitGroupTableLayout';
import { useMakerContext } from '../store/MakerContext';

export function UnitGroupSource() {
  const {
    preview: { tag },
  } = useMakerContext();

  return (
    <>
      {tag === 'section' ? <UnitGroupSection /> : null}
      {tag === 'table' ? <UnitGroupTableLayout /> : null}
    </>
  );
}
