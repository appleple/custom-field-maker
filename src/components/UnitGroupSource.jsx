import { useEffect, useRef } from 'react';
import { UnitGroupSection } from './layouts/UnitGroupSection';
import { UnitGroupTableLayout } from './layouts/UnitGroupTableLayout';
import { useMakerContext } from '../stores/MakerContext';

export function UnitGroupSource({ onRendered = () => {} }) {
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
      {tag === 'section' && <UnitGroupSection />}
      {tag === 'table' && <UnitGroupTableLayout />}
    </>
  );
}
