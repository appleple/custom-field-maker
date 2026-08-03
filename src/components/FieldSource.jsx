import { useEffect, useRef } from 'react';
import { Section } from './layouts/Section';
import { TableLayout } from './layouts/TableLayout';
import { useMakerContext } from '../stores/MakerContext';

export function FieldSource({ onRendered = () => {} }) {
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
      {tag === 'section' && <Section ref={currentRef} />}
      {tag === 'table' && <TableLayout ref={currentRef} />}
    </>
  );
}
