import React from 'react';
import { useMakerContext } from '../../store/MakerContext';

export function WrapTable(props) {
  const { children, title } = props;
  const {
    preview: { direction },
  } = useMakerContext();

  const ConditionalWrap = ({ condition, wrap, children }) => {
    return condition ? wrap(children) : children;
  };

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
