import React from 'react';
import { useMakerContext } from '../../stores/MakerContext';

export function Heading(props) {
  const { item } = props;
  const {
    preview: { jsValidator },
  } = useMakerContext();

  return (
    <>
      <span {...(jsValidator && { 'data-validator': item.name })}>{item.title}</span>
      {item.tooltip && <i className="acms-admin-icon-tooltip js-acms-tooltip-hover" data-acms-tooltip={item.tooltip} />}
    </>
  );
}
