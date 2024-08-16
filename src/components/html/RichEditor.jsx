import React from 'react';
import { useMakerContext } from '../../store/MakerContext';

export function RichEditor(props) {
  const { item, id = '' } = props;
  const {
    preview: { mode },
  } = useMakerContext();
  const { useExpand, startHeadingLevel, endHeadingLevel } = props;

  const ConditionalWrap = ({ condition, wrap, children }) => (condition ? wrap(children) : children);

  let attribute = { id, value: '', name: '', hiddenName: '', placeholder: '' };
  switch (mode) {
    case 'customfield': {
      attribute = {
        value: `${item.name}`,
        name: item.name,
        hiddenName: 'field[]',
      };
      break;
    }
    case 'fieldgroup': {
      attribute = {
        value: `{${item.name}}`,
        name: `${item.name}[]`,
      };
      break;
    }
    case 'customunit': {
      attribute = {
        value: `{${item.name}}`,
        name: `${item.name}{id}`,
        hiddenName: 'unit[]',
      };
      break;
    }
    case 'unitgroup': {
      attribute = {
        value: item.name,
        name: `${item.name}{id}[]`,
      };
      break;
    }
  }

  return (
    <ConditionalWrap
      condition={useExpand}
      wrap={(children) => (
        <div className="js-expand js-acms-expand">
          <div className="js-acms-expand-inner">
            <button className="js-expand-btn js-acms-expand-btn" type="button">
              <i className="acms-admin-icon acms-admin-icon-expand-arrow js-expand-icon" />
            </button>
            {children}
          </div>
        </div>
      )}
    >
      <div className="js-smartblock" data-heading-start={startHeadingLevel} data-heading-end={endHeadingLevel}>
        <div className="js-smartblock-edit" />
        <input className="js-smartblock-body" type="hidden" name={attribute.name} value={`{${attribute.name}@html}`} />
        <input type="hidden" name={attribute.hiddenName} value={attribute.value} />
        <input type="hidden" name={`${attribute.name}:extension`} value="rich-editor" />
      </div>
    </ConditionalWrap>
  );
}
