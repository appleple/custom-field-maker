import React from 'react'
import { GroupSection } from './layouts/GroupSection'
import { GroupTable } from './layouts/GroupTable'

export const FieldGroupSource = ({ fieldgroup, preview }) => {
  if (!fieldgroup) return null;

  return (
    <div>
      {preview.tag === 'section' ? <GroupSection fieldgroup={fieldgroup} preview={preview} /> : null}
      {preview.tag === 'table' ? <GroupTable fieldgroup={fieldgroup} preview={preview} /> : null}
    </div>
  )
}
