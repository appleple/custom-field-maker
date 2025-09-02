import React from 'react';
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
          <div className="acms-admin-custom-field-content">
            <div className="js-block-editor" data-target=".js-target" data-html=".js-html">
              <div className="js-target acms-admin-form-width-full"></div>
              <input type="hidden" className="js-html" name={item.name} value={`{${item.name}}`} />
              <input type="hidden" name={`${item.name}:extension`} value="block-editor" />
              <input type="hidden" name="field[]" value={item.name} />
            </div>
          </div>
          <OptionValidator item={item} />
          <OptionNoSearch name={item.name} noSearch={item.noSearch} />
        </>
      )}

      {mode === 'fieldgroup' && (
        <div className="acms-admin-custom-field-content">
          <div className="js-block-editor" data-target=".js-target" data-html=".js-html">
            <div className="js-target acms-admin-form-width-full"></div>
            <input
              type="hidden"
              className="js-html"
              name={`${item.name}[]`}
              {...(isValue && {
                defaultValue: `{${item.name}}`,
              })}
            />
          </div>
        </div>
      )}

      {mode === 'customunit' && (
        <div className="acms-admin-custom-field-content">
          <div className="js-block-editor" data-target=".js-target" data-html=".js-html">
            <div className="js-target acms-admin-form-width-full"></div>
            <input type="hidden" className="js-html" name={`${item.name}{id}`} value={`{${item.name}}`} />
            <input type="hidden" name={`${item.name}{id}:extension`} value="block-editor" />
            <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
          </div>
        </div>
      )}

      {mode === 'unitgroup' && (
        <div className="acms-admin-custom-field-content">
          <div className="js-block-editor" data-target=".js-target" data-html=".js-html">
            <div className="js-target acms-admin-form-width-full"></div>
            <input
              type="hidden"
              className="js-html"
              name={`${item.name}{id}[]`}
              {...(isValue && {
                defaultValue: `{${item.name}}`,
              })}
            />
          </div>
        </div>
      )}
    </>
  );
}
