import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';
import { OptionValidator } from './OptionValidator';

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
          <input type="hidden" name="field[]" defaultValue={item.name} />
          <OptionValidator item={item} />
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
          <OptionValidator item={item} />
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
          <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
          <OptionValidator item={item} />
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
          <OptionValidator item={item} />
        </>
      )}
    </>
  );
}
