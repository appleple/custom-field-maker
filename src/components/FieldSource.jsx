import React from 'react';
import { Section } from './layouts/Section';
import { TableLayout } from './layouts/TableLayout';
import { useMakerContext } from '../store/MakerContext';

export function FieldSource() {
  const {
    preview: { tag },
  } = useMakerContext();

  return (
    <>
      {tag === 'section' ? <Section /> : null}
      {tag === 'table' ? <TableLayout /> : null}
    </>
  );
}

// import React, { useEffect, useRef } from 'react';
// import { Section } from './layouts/Section';
// import { TableLayout } from './layouts/TableLayout';
// import { useMakerContext } from '../store/MakerContext';

// export function FieldSource() {
// 複数のrefをオブジェクトとして管理
// const refs = {
//   section: useRef(null),
//   table: useRef(null)
// };

// const {
//   preview: { tag },
// } = useMakerContext();

// useEffect(() => {
//   if (window.ACMS && window.ACMS.dispatchEvent) {
//     if (tag === 'section') {
//       window.ACMS.dispatchEvent('acmsCustomFieldMakerPreview', refs.section.current, {
//         item: refs.section.current,
//       });
//     }
//     else if (tag === 'table') {
//       window.ACMS.dispatchEvent('acmsCustomFieldMakerPreview', refs.table.current, {
//         item: refs.table.current,
//       });
//     }
//   }
// }, [refs.section, refs.table]);

// useEffect(() => {
//   if (tag === 'section') return refs.section.current;
//   else if (tag === 'table') return refs.table.current;
//   return null;
// }, [tag]);

// return (
//   <>
//     {() => {
//       switch (tag) {
//         case 'section': {
//           return <Section ref={refs.section} />
//         }
//         case 'table': {
//           return <TableLayout ref={refs.table} />
//         }
//         default: return null
//       }
//     }
//     }
//   </>
// );
// }
