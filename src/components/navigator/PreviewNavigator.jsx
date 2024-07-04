import React from 'react'
import { useMakerContext } from '../../store/MakerContext'

export const PreviewNavigator = () => {
  const { preview, setTag, setAcmscss, setJsValidator } = useMakerContext()

  const updateTag = (tag) => {
    setTag(tag)
  }

  const onAcmsCss = () => {
    setAcmscss(!preview.acmscss)
  }

  const onJsValidator = () => {
    setJsValidator(!preview.jsValidator)
  }

  return (
    <>
      <div className="acms-admin-form-checkbox" style={{ marginTop: '5px' }}>
        <input type="checkbox" onChange={onAcmsCss} checked={preview.acmscss} id="acmscss-checkbox" />
        <label htmlFor="acmscss-checkbox">
          <i className="acms-admin-ico-checkbox" />
          acms-admin.cssを使用する
        </label>
      </div>

      {(preview.mode === 'normal' || preview.mode === 'group') &&
        <div className="acms-admin-form-checkbox" style={{ marginTop: '5px' }}>
          <input type="checkbox" onChange={onJsValidator} checked={preview.jsValidator} id="jsvalidator-checkbox" />
          <label htmlFor="jsvalidator-checkbox">
            <i className="acms-admin-ico-checkbox" />
            JavaScriptによるバリデートを使用する
          </label>
        </div>
      }

      <select id="tag" onChange={(e) => updateTag(e.target.value)}  className="acms-admin-form-width-quarter">
        <option value="section">--</option>
        <option value="table">table</option>
      </select>
    </>
  )
}
