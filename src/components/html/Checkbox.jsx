import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionNoSearch } from './OptionNoSearch';

export function Checkbox(props) {
  const { item, id = '', isChecked = true } = props;
  const {
    preview: { mode, acmscss },
  } = useMakerContext();

  let attribute = { id, name: '', hiddenName: '' };
  switch (mode) {
    case 'customfield': {
      attribute = {
        name: item.name,
        hiddenName: 'field[]',
      };
      break;
    }
    case 'fieldgroup': {
      attribute = {
        name: `${item.name}[]`,
      };
      break;
    }
    case 'customunit': {
      attribute = {
        name: `${item.name}{id}`,
        hiddenName: 'unit[]',
      };
      break;
    }
    case 'unitgroup': {
      attribute = {
        name: `${item.name}{id}[]`,
      };
      break;
    }
  }

  return (
    <>
      {item.option.map((option, index) => {
        if (!option.label) {
          return null;
        }
        return (
          <span key={`${item.name}${index}`} className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
            <input
              type="checkbox"
              name={attribute.name}
              value={option.value}
              data-tmp={isChecked && `{${item.name}:checked#${option.value}}`}
              id={`input-checkbox-${item.name}-${id}`}
            />
            <label htmlFor={`input-checkbox-${item.name}-${id}`}>
              <i className="acms-admin-ico-checkbox" />
              {option.label}
            </label>
          </span>
        );
      })}
      {mode === 'customfield' || mode === 'customunit' ? (
        <input type="hidden" name={attribute.hiddenName} value={attribute.name} />
      ) : null}

      <OptionValidator item={item} />
      <OptionNoSearch name={item.name} noSearch={item.noSearch} />
    </>
  );
}
