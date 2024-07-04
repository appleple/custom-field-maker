import React from 'react'
import classnames from "classnames"
import { useMakerContext } from '../../store/MakerContext';
import { renderValidator, renderNoSearch } from './AcmsInput'

export const TextareaInput = (props) => {
  const { name, type, subType } = props
  const { preview } = useMakerContext()
  const selectedType = subType ? subType : type

  const classname = classnames({
    'acms-admin-form-width-full': preview && preview.acmscss,
    'js-lite-editor-field': selectedType === 'lite-editor'
  });

  return (
    <>
      <textarea
        name={name}
        className={classname}
        {...(preview && preview.jsValidator ? { 'data-validator': name } : {})}
      >{`{${name}}`}</textarea>
      <input type="hidden" name="field[]" value={name} />
      {renderValidator(props)}
      {renderNoSearch(props)}
    </>
  )
}
