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
          <acms-block-editor
            root-class={classnames({
              'acms-admin-form-box': acmscss,
              'acms-admin-form-width-full': acmscss,
            })}
          >
            <input
              type="hidden"
              name={item.name}
              value={`{${item.name}}`}
              {...(jsValidator ? { 'data-validator': item.name } : {})}
            />
          </acms-block-editor>
          <input type="hidden" name={`${item.name}:extension`} value="block-editor" />
          <input type="hidden" name="field[]" value={item.name} />
          <OptionValidator item={item} />
        </>
      )}

      {mode === 'fieldgroup' && (
        <>
          <acms-block-editor
            root-class={classnames({
              'acms-admin-form-box': acmscss,
              'acms-admin-form-width-full': acmscss,
            })}
          >
            <input
              type="hidden"
              name={`${item.name}[]`}
              {...(isValue && {
                defaultValue: `{${item.name}}`,
              })}
            />
          </acms-block-editor>
          <OptionValidatorFieldGroup item={item} isTemplate={!isValue} />
        </>
      )}

      {mode === 'customunit' && (
        <>
          <acms-block-editor
            root-class={classnames({
              'acms-admin-form-box': acmscss,
              'acms-admin-form-width-full': acmscss,
            })}
          >
            <input type="hidden" name={`${item.name}{id}`} value={`{${item.name}}`} />
          </acms-block-editor>
          <input type="hidden" name={`${item.name}{id}:extension`} value="block-editor" />
          <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
        </>
      )}

      {mode === 'unitgroup' && (
        <acms-block-editor
          root-class={classnames({
            'acms-admin-form-box': acmscss,
            'acms-admin-form-width-full': acmscss,
          })}
        >
          <input
            type="hidden"
            name={`${item.name}{id}[]`}
            {...(isValue && {
              defaultValue: `{${item.name}}`,
            })}
          />
        </acms-block-editor>
      )}
    </>
  );
}
