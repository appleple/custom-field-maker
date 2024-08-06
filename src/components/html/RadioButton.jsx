import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionNoSearch } from './OptionNoSearch';

export function RadioButton(props) {
  const { item } = props;
  const {
    preview: { mode, acmscss },
  } = useMakerContext();

  let attribute = { value: '', name: '', hiddenName: '', placeholder: '' };
  switch (mode) {
    case 'normal': {
      attribute = {
        value: `{${item.name}}`,
        name: item.name,
        hiddenName: 'field[]',
        placeholder: item.placeholder,
      };
      break;
    }
    case 'group': {
      attribute = {
        value: `{${item.name}}`,
        name: `${item.name}[]`,
        placeholder: item.placeholder,
      };
      break;
    }
    case 'unit': {
      attribute = {
        value: `{${item.name}}`,
        name: `${item.name}{id}`,
        hiddenName: 'unit[]',
        placeholder: item.placeholder,
      };
      break;
    }
    case 'unit-group': {
      attribute = {
        value: item.name,
        name: `${item.name}{id}[]`,
        placeholder: item.placeholder,
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
              name={item.name}
              value={option.value}
              data-tmp={`{${item.name}:checked#${option.value}}`}
              id={`input-radio-${item.name}-${option.value}`}
            />
            <label htmlFor={`input-radio-${item.name}-${option.value}`}>
              <i className="acms-admin-ico-radio" />
              {option.label}
            </label>
          </span>
        );
      })}
      {(mode === 'normal') | (mode === 'unit') ? <input type="hidden" name="field[]" value={attribute.name} /> : null}

      <OptionValidator item={item} />
      <OptionNoSearch name={item.name} noSearch={item.noSearch} />
    </>
  );
}
