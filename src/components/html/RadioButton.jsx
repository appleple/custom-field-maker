import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionNoSearch } from './OptionNoSearch';
import { WrapTable } from './WrapTable';

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
            return (
              <div key={index} className={classnames({ 'acms-admin-form-radio': acmscss })}>
                <input
                  type="radio"
                  name={item.name}
                  value={option.value}
                  data-tmp={`{${item.name}:checked#${option.value}}`}
                  id={`input-radio-${item.name}-${option.value}`}
                />
                <label htmlFor={`input-radio-${item.name}-${option.value}`}>
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
            return (
              <div key={index} className={classnames({ 'acms-admin-form-radio': acmscss })}>
                <input
                  type="radio"
                  name={`${item.name}[]`}
                  value={option.value}
                  {...(isChecked && {
                    'data-tmp': `{${item.name}:checked#${option.value}}`,
                  })}
                  id={`input-radio-${item.name}-${option.value}`}
                />
                <label htmlFor={`input-radio-${item.name}-${option.value}`}>
                  {acmscss && <i className="acms-admin-ico-radio" />}
                  {option.label}
                </label>
              </div>
            );
          })}
          <OptionValidator item={item} />
        </>
      )}

      {mode === 'customunit' && (
        <>
          {item.option.map((option, index) => {
            if (!option.label) {
              return null;
            }
            return (
              <div key={index} className={classnames({ 'acms-admin-form-radio': acmscss })}>
                <input
                  type="radio"
                  name={`${item.name}{id}`}
                  value={option.value}
                  data-tmp={`{${item.name}:checked#${option.value}}`}
                  id={`input-radio-${item.name}-${option.value}-{id}`}
                />
                <label htmlFor={`input-radio-${item.name}-${option.value}-{id}`}>
                  <i className="acms-admin-ico-radio" />
                  {option.label}
                </label>
              </div>
            );
          })}
          <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
          <OptionValidator item={item} />
        </>
      )}

      {mode === 'unitgroup' && (
        <WrapTable title={item.title}>
          {item.option.map((option, index) => {
            if (!option.label) {
              return null;
            }
            return (
              <div key={index} className={classnames({ 'acms-admin-form-radio': acmscss })}>
                <input
                  type="radio"
                  name={`${item.name}{id}[]`}
                  value={option.value}
                  {...(isChecked && {
                    'data-tmp': `{${item.name}:checked#${option.value}}`,
                  })}
                  id={`input-radio-${item.name}-{id}-${option.value}`}
                />
                <label htmlFor={`input-radio-${item.name}-{id}-${option.value}`}>
                  {acmscss && <i className="acms-admin-ico-radio" />}
                  {option.label}
                </label>
              </div>
            );
          })}
          <OptionValidator item={item} />
        </WrapTable>
      )}
    </>
  );
}
