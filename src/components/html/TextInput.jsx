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

  return (
    <>
      {mode === 'customfield' && (
        <>
          <input
            id={id}
            type={item.type}
            name={item.name}
            defaultValue={`{${item.name}}`}
            className={classnames({ 'acms-admin-form-width-full': acmscss })}
            {...(item.placeholder ? { placeholder: item.placeholder } : {})}
            {...(jsValidator ? { 'data-validator': item.name } : {})}
          />
          <OptionValidator item={item} />
          <OptionNoSearch name={item.name} noSearch={item.noSearch} />
          <input type="hidden" name="field[]" defaultValue={item.name} />
        </>
      )}

      {mode === 'fieldgroup' && (
        <>
          <input
            type={item.type}
            name={`${item.name}[]`}
            {...(isValue && {
              value: `{${item.name}}`,
            })}
            className={classnames({ 'acms-admin-form-width-full': acmscss })}
            {...(item.placeholder ? { placeholder: item.placeholder } : {})}
          />
        </>
      )}

      {mode === 'customunit' && (
        <>
          <input
            type={item.type}
            name={`${item.name}{id}`}
            value={`{${item.name}}`}
            className={classnames({ 'acms-admin-form-width-full': acmscss })}
            {...(item.placeholder ? { placeholder: item.placeholder } : {})}
          />
          <OptionValidator item={item} />
          <OptionNoSearch name={item.name} noSearch={item.noSearch} />
          <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
        </>
      )}

      {mode === 'unitgroup' && (
        <>
          <input
            type={item.type}
            name={`${item.name}{id}[]`}
            {...(isValue && {
              value: `{${item.name}}`,
            })}
            className={classnames({ 'acms-admin-form-width-full': acmscss })}
            {...(item.placeholder ? { placeholder: item.placeholder } : {})}
          />
        </>
      )}
    </>
  );
}
