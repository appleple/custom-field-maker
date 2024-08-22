import React from 'react';
import { UnitSection } from './layouts/UnitSection';
import { UnitTableLayout } from './layouts/UnitTableLayout';
import { useMakerContext } from '../store/MakerContext';

export function UnitSource() {
  const {
    preview: { tag },
  } = useMakerContext();

  return (
    <>
      {tag === 'section' ? <UnitSection /> : null}
      {tag === 'table' ? <UnitTableLayout /> : null}
    </>
  );
}
