import React, { useEffect, useRef } from 'react';
import { GroupSection } from './layouts/GroupSection';
import { GroupTableLayout } from './layouts/GroupTableLayout';
import { useMakerContext } from '../stores/MakerContext';

export function FieldGroupSource() {
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
      {tag === 'section' && <GroupSection ref={currentRef} />}
      {tag === 'table' && <GroupTableLayout ref={currentRef} />}
    </>
  );
}
