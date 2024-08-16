import React, { Fragment } from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';

export function OptionValidator(props) {
  const { item } = props;
  const {
    state: {
      preview: { acmscss, jsValidator, editMode },
    },
  } = useMakerContext();

  if (!item.openValidator) {
    return null;
  }

  const name = item.type === 'file' || item.type === 'image' ? `${item.name}@path` : item.name;

  return (
    <Fragment key={item.name}>
      {item.validator.map((validator) => {
        if (!validator.option) {
          return null;
        }

        return (
          <Fragment key={validator.option}>
            <input
              type="hidden"
              name={`${name}:v#${validator.option}`}
              value={validator.value}
              id={`${name}-v-${validator.option}`}
            />
            {jsValidator ? (
              <div
                data-validator-label={`${name}-v-${validator.option}`}
                className={`validator-result-{${name}:v#${validator.option}}`}
              >
                <p className="error-text">
                  <span className="acms-admin-icon acms-admin-icon-attention" />
                  {validator.message}
                </p>
              </div>
            ) : (
              <>
                {validator.message && (
                  <>
                    {editMode === 'preview' ? null : `<!-- BEGIN ${name}:validator#${validator.option} -->`}
                    <p className={classnames({ 'acms-admin-text-error': acmscss })}>{validator.message}</p>
                    {editMode === 'preview' ? null : `<!-- END ${name}:validator#${validator.option} -->`}
                  </>
                )}
              </>
            )}
          </Fragment>
        );
      })}
      {item.converter && <input type="hidden" name={`${name}:c`} value={item.converter} />}
    </Fragment>
  );
}
