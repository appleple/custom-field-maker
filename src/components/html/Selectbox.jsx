import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionNoSearch } from './OptionNoSearch';

export function Selectbox(props) {
  const { item, id = '', isSelected = true } = props;
  const {
    preview: { mode, acmscss },
  } = useMakerContext();

  return (
    <>
      {mode === 'customfield' && (
        <>
          <select id={id} name={item.name} className={classnames({ 'acms-admin-form-width-full': acmscss })}>
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
          <select id={id} name={`${item.name}[]`} className={classnames({ 'acms-admin-form-width-full': acmscss })}>
            <option value="" />
            {item.option.map((option, index) => {
              if (!option.label) {
                return null;
              }
              return (
                <option
                  key={index}
                  value={option.value}
                  data-tmp={isSelected && `{${item.name}:selected#${option.value}}`}
                >
                  {option.label}
                </option>
              );
            })}
          </select>
          <OptionValidator item={item} />
        </>
      )}

      {mode === 'customunit' && (
        <>
          <select id={id} name={`${item.name}{id}`} className={classnames({ 'acms-admin-form-width-full': acmscss })}>
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
          <OptionValidator item={item} />
        </>
      )}

      {mode === 'unitgroup' && (
        <select name={`${item.name}{id}[]`} className={classnames({ 'acms-admin-form-width-full': acmscss })}>
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
      )}
    </>
  );
}
