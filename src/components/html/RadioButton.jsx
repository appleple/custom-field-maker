import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionNoSearch } from './OptionNoSearch';

export function RadioButton(props) {
  const { item, id = '', isChecked = true } = props;
  const {
    preview: { mode, acmscss },
  } = useMakerContext();

  let attribute = { id, value: '', name: '', hiddenName: '' };
  switch (mode) {
    case 'normal': {
      attribute = {
        value: item.name,
        name: item.name,
        hiddenName: 'field[]',
      };
      break;
    }
    case 'group': {
      attribute = {
        value: item.name,
        name: `${item.name}[]`,
      };
      break;
    }
    case 'unit': {
      attribute = {
        value: `{${item.name}}`,
        name: `${item.name}{id}`,
        hiddenName: 'unit[]',
      };
      break;
    }
    case 'unit-group': {
      attribute = {
        value: item.name,
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
          <span key={`${item.name}${index}`} className={classnames({ 'acms-admin-form-radio': acmscss })}>
            <input
              type="radio"
              name={`${item.name}[]`}
              value={option.value}
              data-tmp={isChecked && `{${item.name}:checked#${option.value}}`}
              id={`input-radio-${item.name}-${id}`}
            />
            <label htmlFor={`input-radio-${item.name}-${id}`}>
              <i className="acms-admin-ico-radio" />
              {option.label}
            </label>
          </span>
        );
      })}
      {(mode === 'normal') | (mode === 'unit') ? (
        <input type="hidden" name={attribute.hiddenName} value={attribute.name} />
      ) : null}

      <OptionValidator item={item} />
      <OptionNoSearch name={item.name} noSearch={item.noSearch} />
    </>
  );
}
