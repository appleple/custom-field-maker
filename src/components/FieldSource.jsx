import React, { useEffect, useRef } from 'react';
import { Section } from './layouts/Section';
import { TableLayout } from './layouts/TableLayout';
import { useMakerContext } from '../store/MakerContext';

export function FieldSource() {
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
      {tag === 'section' && <Section ref={currentRef} />}
      {tag === 'table' && <TableLayout ref={currentRef} />}
    </>
  );
}
