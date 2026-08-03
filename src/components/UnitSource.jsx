import { useEffect, useRef } from 'react';
import { UnitSection } from './layouts/UnitSection';
import { UnitTableLayout } from './layouts/UnitTableLayout';
import { useMakerContext } from '../stores/MakerContext';

export function UnitSource({ onRendered = () => {} }) {
  const {
    preview: { tag },
  } = useMakerContext();

  const currentRef = useRef(null);

  useEffect(() => {
    if (currentRef.current) {
      onRendered({ element: currentRef.current });
    }
  }, [tag, onRendered]);

  return (
    <>
      {tag === 'section' && <UnitSection ref={currentRef} />}
      {tag === 'table' && <UnitTableLayout ref={currentRef} />}
    </>
  );
}
