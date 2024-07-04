import React from 'react'
import classnames from 'classnames';
import { renderValidator, renderNoSearch } from './AcmsInput'

export const TextInput = (props) => {
  const { item, preview } = props
  const selectedType = item.subType ? item.subType : item.type

  let attribute = {}
  switch(preview.mode) {
    case 'normal': {
      attribute = {
        value: item.name,
        name: item.name,
        hiddenName: 'field[]'
      }
      break
    }
    case 'group': {
      attribute = {
        value: item.name,
        name: `${item.name}[]`
      }
      break
    }
    case 'unit': {
      attribute = {
        value: item.name,
        name: `${item.name}{id}`,
        hiddenName: 'unit[]'
      }
      break
    }
    case 'unit-group': {
      attribute = {
        value: item.name,
        name: `${item.name}{id}`
      }
      break
    }
  }

  return (
    <>
      <input
        type={selectedType}
        name={attribute.name}
        value={`{${attribute.value}}`}
        className={ classnames({ 'acms-admin-form-width-full': preview && preview.acmscss }) }
        {...(preview && preview.jsValidator ? { 'data-validator': attribute.name } : {})}
      />
      {preview && preview.mode === 'normal' && <input type="hidden" name={attribute.hiddenName} value={attribute.name} />}
      {renderValidator(item)}
      {renderNoSearch(item)}
    </>
  )
}
