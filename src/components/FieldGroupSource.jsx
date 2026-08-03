import { useEffect, useRef } from 'react';
import { GroupSection } from './layouts/GroupSection';
import { GroupTableLayout } from './layouts/GroupTableLayout';
import { useMakerContext } from '../stores/MakerContext';

export function FieldGroupSource({ onRendered = () => {} }) {
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
      {tag === 'section' && <GroupSection ref={currentRef} />}
      {tag === 'table' && <GroupTableLayout ref={currentRef} />}
    </>
  );
}
