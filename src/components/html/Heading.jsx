import React from 'react';
import { useMakerContext } from '../../store/MakerContext';

export function Heading(props) {
  const { item } = props;
  const {
    preview: { jsValidator },
  } = useMakerContext();

  return (
    <>
      {item.title}
      {item.tooltip && <i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip={item.tooltip} />}
      {jsValidator && (
        <span className="valid-mark" data-validator={item.name}>
          <span className="acms-admin-icon acms-admin-icon-checklist" />
        </span>
      )}
    </>
  );
}
