import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionNoSearch } from './OptionNoSearch';

export function Checkbox(props) {
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
              <div key={index} className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                <input
                  type="checkbox"
                  name={`${item.name}[]`}
                  value={option.value}
                  data-tmp={`{${item.name}:checked#${option.value}}`}
                  id={`input-checkbox-${item.name}-${option.value}`}
                />
                <label htmlFor={`input-checkbox-${item.name}-${option.value}`}>
                  <i className="acms-admin-ico-checkbox" />
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
              <div key={index} className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                <input
                  type="checkbox"
                  name={`${item.name}[]`}
                  value={option.value}
                  {...(isChecked && {
                    'data-tmp': `{${item.name}:checked#${option.value}}`,
                  })}
                  id={`input-checkbox-${item.name}-${option.value}`}
                />
                <label htmlFor={`input-checkbox-${item.name}-${option.value}`}>
                  <i className="acms-admin-ico-checkbox" />
                  {option.label}
                </label>
              </div>
            );
          })}
        </>
      )}

      {mode === 'customunit' && (
        <>
          {item.option.map((option, index) => {
            if (!option.label) {
              return null;
            }
            return (
              <div key={index} className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                <input
                  type="checkbox"
                  name={`${item.name}{id}[]`}
                  value={option.value}
                  data-tmp={`{${item.name}:checked#${option.value}}`}
                  id={`input-checkbox-${item.name}-${option.value}-{id}`}
                />
                <label htmlFor={`input-checkbox-${item.name}-${option.value}-{id}`}>
                  <i className="acms-admin-ico-checkbox" />
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
            return (
              <div key={index} className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                <input
                  type="checkbox"
                  name={`${item.name}{id}[]`}
                  value={option.value}
                  {...(isChecked && {
                    'data-tmp': `{${item.name}:checked#${option.value}}`,
                  })}
                  id={`input-checkbox-${item.name}-{id}-${option.value}`}
                />
                <label htmlFor={`input-checkbox-${item.name}-{id}-${option.value}`}>
                  {acmscss && <i className="acms-admin-ico-checkbox" />}
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
