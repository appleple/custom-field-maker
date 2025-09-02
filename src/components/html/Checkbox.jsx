import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../stores/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionValidatorFieldGroup } from './OptionValidatorFieldGroup';
import { OptionNoSearch } from './OptionNoSearch';
import { generateSafeId } from '../../utils';

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
            const id = `${item.name}-${generateSafeId(option.value)}`;
            return (
              <div key={index} className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                <input
                  id={id}
                  type="checkbox"
                  name={`${item.name}[]`}
                  value={option.value}
                  data-tmp={`{${item.name}:checked#${option.value}}`}
                />
                <label htmlFor={id}>
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
            const id = `${item.name}-${generateSafeId(option.value)}[]`;
            return (
              <div key={index} className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                <input
                  id={id}
                  type="checkbox"
                  name={`${item.name}[]`}
                  value={option.value}
                  {...(isChecked && {
                    'data-tmp': `{${item.name}:checked#${option.value}}`,
                  })}
                />
                <label htmlFor={id}>
                  <i className="acms-admin-ico-checkbox" />
                  {option.label}
                </label>
              </div>
            );
          })}
          <OptionValidatorFieldGroup item={item} isTemplate={!isChecked} />
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
              <div key={index} className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                <input
                  type="checkbox"
                  name={`${item.name}{id}[]`}
                  value={option.value}
                  data-tmp={`{${item.name}:checked#${option.value}}`}
                  id={id}
                />
                <label htmlFor={id}>
                  <i className="acms-admin-ico-checkbox" />
                  {option.label}
                </label>
              </div>
            );
          })}
          <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
          <OptionValidator item={item} />
          <OptionNoSearch name={`${item.name}{id}`} noSearch={item.noSearch} />
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
              <div key={index} className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                <input
                  id={id}
                  type="checkbox"
                  name={`${item.name}{id}[]`}
                  value={option.value}
                  {...(isChecked && {
                    'data-tmp': `{${item.name}:checked#${option.value}}`,
                  })}
                />
                <label htmlFor={id}>
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
