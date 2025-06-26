import React from 'react';
import { useMakerContext } from '../../stores/MakerContext';
import { ConditionalWrap } from '../ConditionalWrap';

export function WrapTable(props) {
  const { children, title } = props;
  const {
    preview: { direction },
  } = useMakerContext();

  return (
    <ConditionalWrap
      condition={direction === 'vertical'}
      wrap={(children) => {
        return (
          <tr>
            <th>{title}</th>
            {children}
          </tr>
        );
      }}
    >
      {children}
    </ConditionalWrap>
  );
}
