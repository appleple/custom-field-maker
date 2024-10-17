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

  return (
    <>
      {mode === 'customfield' && (
        <>
          <textarea
            id={id}
            name={item.name}
            className={classname}
            {...(item.placeholder ? { placeholder: item.placeholder } : {})}
            {...(jsValidator ? { 'data-validator': item.name } : {})}
          >
            {isValue ? `{${item.name}}` : ''}
          </textarea>
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
            {...(item.placeholder ? { placeholder: item.placeholder } : {})}
          >
            {isValue ? `{${item.name}}` : ''}
          </textarea>
        </>
      )}

      {mode === 'customunit' && (
        <>
          <textarea
            id={id}
            name={`${item.name}{id}`}
            className={classname}
            {...(item.placeholder ? { placeholder: item.placeholder } : {})}
          >
            {isValue ? `{${item.name}}` : ''}
          </textarea>
          <OptionValidator item={item} />
          <OptionNoSearch name={item.name} noSearch={item.noSearch} />
          <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
        </>
      )}

      {mode === 'unitgroup' && (
        <>
          <textarea
            id={id}
            name={`${item.name}{id}[]`}
            className={classname}
            {...(item.placeholder ? { placeholder: item.placeholder } : {})}
          >
            {isValue ? `{${item.name}}` : ''}
          </textarea>
        </>
      )}
    </>
  );
}
