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

  const classname = classnames({
    'acms-admin-form-width-full': acmscss,
    'js-lite-editor-field': item.type === 'liteEditor',
  });

  const value = isValue ? `{${item.name}}` : '';

  return (
    <>
      {mode === 'customfield' && (
        <>
          <textarea
            id={id}
            name={item.name}
            className={classname}
            defaultValue={value}
            readOnly
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
          <textarea
            id={id}
            name={`${item.name}[]`}
            className={classname}
            defaultValue={value}
            readOnly
            {...(item.placeholder ? { placeholder: item.placeholder } : {})}
          />
        </>
      )}

      {mode === 'customunit' && (
        <>
          <textarea
            id={id}
            name={`${item.name}{id}`}
            className={classname}
            defaultValue={value}
            readOnly
            {...(item.placeholder ? { placeholder: item.placeholder } : {})}
          />
          <OptionValidator item={item} />
          <OptionNoSearch name={item.name} noSearch={item.noSearch} />
          <input type="hidden" name="unit{id}[]" defaultValue={`${item.name}{id}`} />
        </>
      )}

      {mode === 'unitgroup' && (
        <>
          <textarea
            id={id}
            name={`${item.name}{id}[]`}
            className={classname}
            defaultValue={value}
            readOnly
            {...(item.placeholder ? { placeholder: item.placeholder } : {})}
          />
        </>
      )}
    </>
  );
}
