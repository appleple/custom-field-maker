import React from 'react';
import { GroupSection } from './layouts/GroupSection';
// import { GroupTable } from './layouts/GroupTable'
import { useMakerContext } from '../store/MakerContext';

export function FieldGroupSource() {
  const {
    preview: { tag },
  } = useMakerContext();

  return (
    <>
      {tag === 'section' ? <GroupSection /> : null}
      {/* {tag === 'table' ? <GroupTable /> : null} */}
    </>
  );
}
