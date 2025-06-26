import React, { useEffect, useRef } from 'react';
import { UnitSection } from './layouts/UnitSection';
import { UnitTableLayout } from './layouts/UnitTableLayout';
import { useMakerContext } from '../stores/MakerContext';

export function UnitSource() {
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
      {tag === 'section' && <UnitSection ref={currentRef} />}
      {tag === 'table' && <UnitTableLayout ref={currentRef} />}
    </>
  );
}
