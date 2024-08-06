import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionNoSearch } from './OptionNoSearch';

export function Textarea(props) {
  const { item, id = '', isValue = true } = props;
  const {
    preview: { mode, jsValidator, acmscss },
  } = useMakerContext();
  const selectedType = item.subType ? item.subType : item.type;

  const classname = classnames({
    'acms-admin-form-width-full': acmscss,
    'js-lite-editor-field': selectedType === 'lite-editor',
  });

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
      <textarea
        name={attribute.name}
        className={classname}
        {...(jsValidator ? { 'data-validator': attribute.name } : {})}
      >
        {isValue ? `${attribute.value}` : ''}
      </textarea>
      {(mode === 'normal') | (mode === 'unit') ? (
        <input type="hidden" name={attribute.hiddenName} defaultValue={attribute.name} />
      ) : null}

      <OptionValidator item={item} />
      <OptionNoSearch name={item.name} noSearch={item.noSearch} />
    </>
  );
}
