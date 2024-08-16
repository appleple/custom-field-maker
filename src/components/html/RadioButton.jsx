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

  let attribute = { id, name: '', hiddenName: '' };
  switch (mode) {
    case 'normal': {
      attribute = {
        name: item.name,
        hiddenName: 'field[]',
      };
      break;
    }
    case 'group': {
      attribute = {
        name: `${item.name}[]`,
      };
      break;
    }
    case 'unit': {
      attribute = {
        name: `${item.name}{id}`,
        hiddenName: 'unit[]',
      };
      break;
    }
    case 'unit-group': {
      attribute = {
        name: `${item.name}{id}[]`,
      };
      break;
    }
  }

  console.log(mode);
  console.log(attribute.name);

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
              name={attribute.name}
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
