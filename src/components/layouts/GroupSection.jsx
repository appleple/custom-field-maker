import React from 'react'
import { Label } from '../html/Label'
import { TextInput } from '../html/TextInput'
import { TextareaInput } from '../html/TextareaInput'
import classnames from 'classnames'

export const GroupSection = (props) => {
  const { fieldgroup, preview } = props

  return (
    <section>
      {fieldgroup.title &&
        <h2 className={classnames({ 'acms-admin-admin-title2': preview.acmscss })}>{fieldgroup.title}</h2>
      }
      {fieldgroup.name &&
        <div>
        {fieldgroup.items.map((item, index) => {
          switch(item.type) {
            case 'text': {
              return (
                <p key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading"><Label item={item} preview={preview} /></label>
                  <span className="acms-admin-form-item-input"><TextInput item={item} preview={preview} /></span>
                </p>
              )
            }
            case 'textarea': {
              return (
                <p key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading"><Label item={item} preview={preview} /></label>
                  <span className="acms-admin-form-item-input"><TextareaInput item={item} preview={preview} /></span>
                </p>
              )
            }
            default: {
              return null;
            }
          }
        })}
        </div>
      }
    </section>
  )
}
