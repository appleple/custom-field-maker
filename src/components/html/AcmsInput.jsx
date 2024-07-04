import React, { Fragment } from "react";
import classnames from 'classnames';
import { useMakerContext } from "../../store/MakerContext";
import { useEditorContext } from "../../store/EditorContext";

export const renderValidator = (props) => {
  const { maker, preview: { acmscss } } = useMakerContext()
  const { editor } = useEditorContext()

  if (!props.openValidator) {
    return null;
  }

  const name = props.type === 'file' || props.type === 'image' ? `${props.name}@path` : props.name;

  return (
    <Fragment key={props.name}>
      {props.validator.map((validator) => {
        if (!validator.option) {
          return null;
        }

        return (
        <Fragment key={validator.option}>
          <input type="hidden" name={`${name}:v#${validator.option}`} value={validator.value} id={`${name}-v-${validator.option}`} />
          {!maker.jsValidator &&
          <>
            {validator.message &&
            <>
              {editor.editMode === 'preview' ? null : `<!-- BEGIN ${name}:validator#${validator.option} -->`}
              <p className={classnames({ 'acms-admin-text-error': acmscss })}>{validator.message}</p>
              {editor.editMode === 'preview' ? null : `<!-- END ${name}:validator#${validator.option} -->`}
            </>}
          </>
          }
          {!maker.jsValidator &&
          <div data-validator-label={`${name}-v-${validator.option}`} className={`validator-result-{${name}:v#${validator.option}}`}>
            <p className="error-text">
              <span className="acms-admin-icon acms-admin-icon-attention" />{validator.message}
            </p>
          </div>
          }
        </Fragment>);
      })}
      {props.converter && <input type="hidden" name={`${name}:c`} value={props.converter} />}
    </Fragment>
  );
}

export const renderNoSearch = (props) => {
  const { noSearch, name } = props
  if (!noSearch) {
    return null;
  }
  return (
    <input type="hidden" name={`${name}:search`} value="0" />
  );
}
