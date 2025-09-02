import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../stores/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionValidatorFieldGroup } from './OptionValidatorFieldGroup';
import { OptionNoSearch } from './OptionNoSearch';

export function Selectbox(props) {
  const { item, isSelected = true } = props;
  const {
    preview: { mode, acmscss },
  } = useMakerContext();

  return (
    <>
      {mode === 'customfield' && (
        <>
          <select id={item.name} name={item.name} className={classnames({ 'acms-admin-form-width-full': acmscss })}>
            <option value="" />
            {item.option.map((option, index) => {
              if (!option.label) {
                return null;
              }
              return (
                <option key={index} value={option.value} data-tmp={`{${item.name}:selected#${option.value}}`}>
                  {option.label}
                </option>
              );
            })}
          </select>
          <input type="hidden" name="field[]" value={item.name} />

          <OptionValidator item={item} />
          <OptionNoSearch name={item.name} noSearch={item.noSearch} />
        </>
      )}

      {mode === 'fieldgroup' && (
        <>
          <select
            id={`${item.name}[]`}
            name={`${item.name}[]`}
            className={classnames({ 'acms-admin-form-width-full': acmscss })}
          >
            <option value="" />
            {item.option.map((option, index) => {
              if (!option.label) {
                return null;
              }
              return (
                <option
                  key={index}
                  value={option.value}
                  {...(isSelected && {
                    'data-tmp': `{${item.name}:selected#${option.value}}`,
                  })}
                >
                  {option.label}
                </option>
              );
            })}
          </select>
          <OptionValidatorFieldGroup item={item} isTemplate={!isSelected} />
        </>
      )}

      {mode === 'customunit' && (
        <>
          <select
            id={`${item.name}{id}`}
            name={`${item.name}{id}`}
            className={classnames({ 'acms-admin-form-width-full': acmscss })}
          >
            <option value="" />
            {item.option.map((option, index) => {
              if (!option.label) {
                return null;
              }
              return (
                <option key={index} value={option.value} data-tmp={`{${item.name}:selected#${option.value}}`}>
                  {option.label}
                </option>
              );
            })}
          </select>
          <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
          <OptionNoSearch name={`${item.name}{id}`} noSearch={item.noSearch} />
        </>
      )}

      {mode === 'unitgroup' && (
        <>
          <select
            id={`${item.name}{id}[]`}
            name={`${item.name}{id}[]`}
            className={classnames({ 'acms-admin-form-width-full': acmscss })}
          >
            <option value="" />
            {item.option.map((option, index) => {
              if (!option.label) {
                return null;
              }
              return (
                <option
                  key={index}
                  value={option.value}
                  {...(isSelected && {
                    'data-tmp': `{${item.name}:selected#${option.value}}`,
                  })}
                >
                  {option.label}
                </option>
              );
            })}
          </select>
        </>
      )}
    </>
  );
}
