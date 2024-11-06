import React, { useEffect, useRef } from 'react';
import { UnitGroupSection } from './layouts/UnitGroupSection';
import { UnitGroupTableLayout } from './layouts/UnitGroupTableLayout';
import { useMakerContext } from '../store/MakerContext';

export function UnitGroupSource() {
  const {
    preview: { tag },
  } = useMakerContext();

  const currentRef = useRef(null);

  useEffect(() => {
    if (window.ACMS?.dispatchEvent && currentRef.current) {
      window.ACMS.dispatchEvent('acmsCustomFieldMakerPreview', currentRef.current, {
        item: currentRef.current,
      });
    }
  }, [tag]);

  return (
    <>
      {tag === 'section' && <UnitGroupSection />}
      {tag === 'table' && <UnitGroupTableLayout />}
    </>
  );
}
