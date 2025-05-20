import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionNoSearch } from './OptionNoSearch';
import { generateSafeId } from '../../utils';

export function RadioButton(props) {
  const { item, isChecked = true } = props;
  const {
    preview: { mode, acmscss },
  } = useMakerContext();

  return (
    <>
      {mode === 'customfield' && (
        <>
          {item.option.map((option, index) => {
            if (!option.label) {
              return null;
            }
            const id = `${item.name}-${generateSafeId(option.value)}`;
            return (
              <div key={index} className={classnames({ 'acms-admin-form-radio': acmscss })}>
                <input
                  type="radio"
                  name={item.name}
                  value={option.value}
                  data-tmp={`{${item.name}:checked#${option.value}}`}
                  id={id}
                />
                <label htmlFor={id}>
                  <i className="acms-admin-ico-radio" />
                  {option.label}
                </label>
              </div>
            );
          })}
          <input type="hidden" name="field[]" value={item.name} />
          <OptionValidator item={item} />
          <OptionNoSearch name={item.name} noSearch={item.noSearch} />
        </>
      )}

      {mode === 'fieldgroup' && (
        <>
          {item.option.map((option, index) => {
            if (!option.label) {
              return null;
            }
            const id = `${item.name}-${generateSafeId(option.value)}[]`;
            return (
              <div key={index} className={classnames({ 'acms-admin-form-radio': acmscss })}>
                <input
                  type="radio"
                  name={`${item.name}[]`}
                  value={option.value}
                  {...(isChecked && {
                    'data-tmp': `{${item.name}:checked#${option.value}}`,
                  })}
                  id={id}
                />
                <label htmlFor={id}>
                  {acmscss && <i className="acms-admin-ico-radio" />}
                  {option.label}
                </label>
              </div>
            );
          })}
          {isChecked && (
            <>
              <OptionValidator item={item} />
              <OptionNoSearch name={item.name} noSearch={item.noSearch} />
            </>
          )}
        </>
      )}

      {mode === 'customunit' && (
        <>
          {item.option.map((option, index) => {
            if (!option.label) {
              return null;
            }
            const id = `${item.name}-${generateSafeId(option.value)}-{id}`;
            return (
              <div key={index} className={classnames({ 'acms-admin-form-radio': acmscss })}>
                <input
                  type="radio"
                  name={`${item.name}{id}`}
                  value={option.value}
                  data-tmp={`{${item.name}:checked#${option.value}}`}
                  id={id}
                />
                <label htmlFor={id}>
                  <i className="acms-admin-ico-radio" />
                  {option.label}
                </label>
              </div>
            );
          })}
          <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
          <OptionValidator item={item} />
          <OptionNoSearch name={item.name} noSearch={item.noSearch} />
        </>
      )}

      {mode === 'unitgroup' && (
        <>
          {item.option.map((option, index) => {
            if (!option.label) {
              return null;
            }
            const id = `${item.name}-${generateSafeId(option.value)}-{id}[]`;
            return (
              <div key={index} className={classnames({ 'acms-admin-form-radio': acmscss })}>
                <input
                  type="radio"
                  name={`${item.name}{id}[]`}
                  value={option.value}
                  {...(isChecked && {
                    'data-tmp': `{${item.name}:checked#${option.value}}`,
                  })}
                  id={id}
                />
                <label htmlFor={id}>
                  {acmscss && <i className="acms-admin-ico-radio" />}
                  {option.label}
                </label>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
