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

  return (
    <>
      {mode === 'customfield' && (
        <>
          <input
            id={id}
            type={selectedType}
            name={item.name}
            defaultValue={`{${item.name}}`}
            className={classnames({ 'acms-admin-form-width-full': acmscss })}
            {...(item.placeholder ? { placeholder: item.placeholder } : {})}
            {...(jsValidator ? { 'data-validator': item.name } : {})}
          />
          <input type="hidden" name="field[]" defaultValue={item.name} />
          <OptionValidator item={item} />
          <OptionNoSearch name={item.name} noSearch={item.noSearch} />
        </>
      )}

      {mode === 'fieldgroup' && (
        <>
          <input
            type={selectedType}
            name={`${item.name}[]`}
            {...(isValue && {
              value: `{${item.name}}`,
            })}
            className={classnames({ 'acms-admin-form-width-full': acmscss })}
            {...(item.placeholder ? { placeholder: item.placeholder } : {})}
          />
          <OptionValidator item={item} />
        </>
      )}

      {mode === 'customunit' && (
        <>
          <input
            type={selectedType}
            name={`${item.name}{id}`}
            value={`{${item.name}}`}
            className={classnames({ 'acms-admin-form-width-full': acmscss })}
            {...(item.placeholder ? { placeholder: item.placeholder } : {})}
          />
          <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
        </>
      )}

      {mode === 'unitgroup' && (
        <input
          type={selectedType}
          name={`${item.name}{id}[]`}
          {...(isValue && {
            value: `{${item.name}}`,
          })}
          className={classnames({ 'acms-admin-form-width-full': acmscss })}
          {...(item.placeholder ? { placeholder: item.placeholder } : {})}
        />
      )}
    </>
  );
}
