import React from 'react'
import { Label } from '../html/Label'
import { TextInput } from '../html/TextInput'
import { TextareaInput } from '../html/TextareaInput'
import { MediaInput } from '../html/MediaInput'

export const Section = (props) => {
  const { customfield, preview } = props

  return (
    <section>
      {preview.jsValidator && '<!-- <form action="" method="post" class="js-validator" enctype="multipart/form-data"> -->'}

        {customfield.length > 0 && customfield.map((item, index) => {
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

            case 'media': {
              return (
                <p key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading"><Label item={item} preview={preview} /></label>
                  <span className="js-media-field"><MediaInput item={item} preview={preview} /></span>
                </p>
              )
            }
            default: {
              return null;
            }
          }
        })}
      {preview.jsValidator && '<!-- </form> -->'}
    </section>
  )
}
