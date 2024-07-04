import React from 'react'
import { useMakerContext } from '../../store/MakerContext'

export function PreviewModeNavigator() {
  const { setEditMode } = useMakerContext()

  const updateMode = (editMode) => {
    setEditMode(editMode)
  }

  return (
    <ul className="customFieldTabs">
      <li>
        <a
          href="#source"
          // className={classnames({ customFieldTabActive: editMode === 'source' })}
          onClick={() => updateMode('source')}>
            入力用ソース
        </a>
      </li>
      <li>
        <a
          href="#preview"
          // className={classnames({ customFieldTabActive: editMode === 'preview' })}
          onClick={() => updateMode('preview')}>
            プレビュー
        </a>
      </li>
      <li>
        <a
          href="#confirm"
          // className={classnames({ customFieldTabActive: editMode === 'confirm' })}
          onClick={() => updateMode('confirm')}>
          出力用ソース
        </a>
      </li>
    </ul>
  )
}
