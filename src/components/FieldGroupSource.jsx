import React from 'react'
import { GroupSection } from './layouts/GroupSection'
import { GroupTable } from './layouts/GroupTable'
import { useMakerContext } from '../store/MakerContext'

export function FieldGroupSource({ fieldgroup }) {
  const { preview } = useMakerContext()
  if (!fieldgroup) return null;

  return (
    <div>
      {preview.tag === 'section' ? <GroupSection fieldgroup={fieldgroup} preview={preview} /> : null}
      {preview.tag === 'table' ? <GroupTable fieldgroup={fieldgroup} preview={preview} /> : null}
    </div>
  )
}
