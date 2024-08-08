import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionNoSearch } from './OptionNoSearch';

export function Selectbox(props) {
  const { item, id = '', isSelected = true } = props;
  const {
    preview: { mode, acmscss },
  } = useMakerContext();

  let attribute = { id, value: '', name: '', hiddenName: '', placeholder: '' };
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
        name: `${item.name}`,
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
      <select name={`${attribute.name}[]`} className={classnames({ 'acms-admin-form-width-full': acmscss })}>
        <option value="" />
        {item.option.map((option, index) => {
          if (!option.label) {
            return null;
          }
          return (
            <option
              key={index}
              value={option.value}
              data-tmp={isSelected && `{${attribute.name}:selected#${option.value}}`}
            >
              {option.label}
            </option>
          );
        })}
      </select>
      {(mode === 'normal') | (mode === 'unit') ? (
        <input type="hidden" name={attribute.hiddenName} value={attribute.name} />
      ) : null}

      <OptionValidator item={item} />
      <OptionNoSearch name={item.name} noSearch={item.noSearch} />
    </>
  );
}
