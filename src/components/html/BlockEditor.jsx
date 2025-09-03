import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../stores/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionValidatorFieldGroup } from './OptionValidatorFieldGroup';

export function BlockEditor(props) {
  const { item, isValue = true } = props;
  const {
    preview: { mode, jsValidator, acmscss },
  } = useMakerContext();

  return (
    <>
      {mode === 'customfield' && (
        <>
          <div
            className={classnames({
              'js-block-editor': true,
              'acms-admin-form-box': acmscss,
            })}
            data-target=".js-target"
            data-html=".js-html"
          >
            <div
              className={classnames({
                'js-target': true,
                'acms-admin-form-width-full': acmscss,
              })}
            ></div>
            <input
              type="hidden"
              className="js-html"
              name={item.name}
              value={`{${item.name}}`}
              {...(jsValidator ? { 'data-validator': item.name } : {})}
            />
            <input type="hidden" name={`${item.name}:extension`} value="block-editor" />
            <input type="hidden" name="field[]" value={item.name} />
          </div>
          <OptionValidator item={item} />
        </>
      )}

      {mode === 'fieldgroup' && (
        <>
          <div
            className={classnames({
              'js-block-editor': true,
              'acms-admin-form-box': acmscss,
            })}
            data-target=".js-target"
            data-html=".js-html"
          >
            <div
              className={classnames({
                'js-target': true,
                'acms-admin-form-width-full': acmscss,
              })}
            ></div>
            <input
              type="hidden"
              className="js-html"
              name={`${item.name}[]`}
              {...(isValue && {
                defaultValue: `{${item.name}}`,
              })}
            />
          </div>
          <OptionValidatorFieldGroup item={item} isTemplate={!isValue} />
        </>
      )}

      {mode === 'customunit' && (
        <>
          <div
            className={classnames({
              'js-block-editor': true,
              'acms-admin-form-box': acmscss,
            })}
            data-target=".js-target"
            data-html=".js-html"
          >
            <div
              className={classnames({
                'js-target': true,
                'acms-admin-form-width-full': acmscss,
              })}
            ></div>
            <input type="hidden" className="js-html" name={`${item.name}{id}`} value={`{${item.name}}`} />
            <input type="hidden" name={`${item.name}{id}:extension`} value="block-editor" />
            <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
          </div>
        </>
      )}

      {mode === 'unitgroup' && (
        <div
          className={classnames({
            'js-block-editor': true,
            'acms-admin-form-box': acmscss,
          })}
          data-target=".js-target"
          data-html=".js-html"
        >
          <div
            className={classnames({
              'js-target': true,
              'acms-admin-form-width-full': acmscss,
            })}
          ></div>
          <input
            type="hidden"
            className="js-html"
            name={`${item.name}{id}[]`}
            {...(isValue && {
              defaultValue: `{${item.name}}`,
            })}
          />
        </div>
      )}
    </>
  );
}
