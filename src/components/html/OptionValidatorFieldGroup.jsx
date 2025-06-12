import React, { Fragment } from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../stores/MakerContext';

export function OptionValidatorFieldGroup(props) {
  const { item, isTemplate = true, isMessage = true } = props;
  const {
    preview: { acmscss, jsValidator, editMode },
  } = useMakerContext();

  if (!item.openValidator) {
    return null;
  }

  const name = item.type === 'file' || item.type === 'image' ? `${item.name}@path` : item.name;

  return (
    <Fragment>
      {item.validator.map((validator, index) => {
        if (!validator.option) {
          return null;
        }

        if (isMessage && validator.message) {
          const jsValidatorClassName = isTemplate
            ? `validator-result-${index + 1}`
            : `validator-result-{${name}:v#${validator.option}}`;
          return jsValidator ? (
            <div
              key={validator.option}
              data-validator-label={`${name}-v-${validator.option}`}
              className={jsValidatorClassName}
            >
              <p className="error-text">
                <span className="acms-admin-icon acms-admin-icon-attention" />
                {validator.message}
              </p>
            </div>
          ) : (
            isTemplate && (
              <Fragment key={validator.option}>
                {editMode === 'preview' ? null : `<!-- BEGIN ${name}:validator#${validator.option} -->`}
                <p className={classnames({ 'acms-admin-text-error': acmscss })}>{validator.message}</p>
                {editMode === 'preview' ? null : `<!-- END ${name}:validator#${validator.option} -->`}
              </Fragment>
            )
          );
        } else {
          return (
            <Fragment key={validator.option}>
              <input
                type="hidden"
                name={`${name}:v#${validator.option}`}
                value={validator.value}
                id={`${name}-v-${validator.option}`}
              />
              {item.converter && <input type="hidden" name={`${name}:c`} value={item.converter} />}
            </Fragment>
          );
        }
      })}
    </Fragment>
  );
}
