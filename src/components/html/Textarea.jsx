import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../stores/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionValidatorFieldGroup } from './OptionValidatorFieldGroup';
import { OptionNoSearch } from './OptionNoSearch';

export function Textarea(props) {
  const { item, isValue = true } = props;
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
            id={item.name}
            name={item.name}
            className={classname}
            defaultValue={value}
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
            id={`${item.name}[]`}
            name={`${item.name}[]`}
            className={classname}
            defaultValue={value}
            {...(item.placeholder ? { placeholder: item.placeholder } : {})}
          />
          <OptionValidatorFieldGroup item={item} isTemplate={!isValue} />
        </>
      )}

      {mode === 'customunit' && (
        <>
          <textarea
            id={`${item.name}{id}`}
            name={`${item.name}{id}`}
            className={classname}
            defaultValue={value}
            {...(item.placeholder ? { placeholder: item.placeholder } : {})}
          />
          <OptionValidator item={item} />
          <OptionNoSearch name={`${item.name}{id}`} noSearch={item.noSearch} />
          <input type="hidden" name="unit{id}[]" defaultValue={`${item.name}{id}`} />
        </>
      )}

      {mode === 'unitgroup' && (
        <>
          <textarea
            id={`${item.name}{id}[]`}
            name={`${item.name}{id}[]`}
            className={classname}
            defaultValue={value}
            {...(item.placeholder ? { placeholder: item.placeholder } : {})}
          />
        </>
      )}
    </>
  );
}
