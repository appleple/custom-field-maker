import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionNoSearch } from './OptionNoSearch';

export function TextInput(props) {
  const { item, id = '', isValue = true } = props;
  const {
    preview: { mode, jsValidator, acmscss },
  } = useMakerContext();
  const selectedType = item.subType ? item.subType : item.type;

  let attribute = { id, value: '', name: '', hiddenName: '', placeholder: '' };
  switch (mode) {
    case 'customfield': {
      attribute = {
        value: `{${item.name}}`,
        name: item.name,
        hiddenName: 'field[]',
        placeholder: item.placeholder,
      };
      break;
    }
    case 'fieldgroup': {
      attribute = {
        value: `{${item.name}}`,
        name: `${item.name}[]`,
        placeholder: item.placeholder,
      };
      break;
    }
    case 'customunit': {
      attribute = {
        value: `{${item.name}}`,
        name: `${item.name}{id}`,
        hiddenName: 'unit[]',
        placeholder: item.placeholder,
      };
      break;
    }
    case 'unitgroup': {
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
      <input
        id={id}
        type={selectedType}
        name={attribute.name}
        defaultValue={isValue ? `${attribute.value}` : ''}
        className={classnames({ 'acms-admin-form-width-full': acmscss })}
        {...(attribute.placeholder ? { placeholder: attribute.placeholder } : {})}
        {...(jsValidator ? { 'data-validator': attribute.name } : {})}
      />
      {['customfield', 'customunit'].includes(mode) && (
        <input type="hidden" name={attribute.hiddenName} defaultValue={attribute.name} />
      )}
      <OptionValidator item={item} />
      <OptionNoSearch name={item.name} noSearch={item.noSearch} />
    </>
  );
}
