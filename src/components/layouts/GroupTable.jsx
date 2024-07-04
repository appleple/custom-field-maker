import React, { useRef } from 'react'
import { Label } from '../html/Label'
import { TextInput } from '../html/TextInput'
import { TextareaInput } from '../html/TextareaInput'
import { useMakerContext } from '../../store/MakerContext'
import { useEditorContext } from '../../store/EditorContext'
import classnames from 'classnames'

export const GroupTable = (props) => {
  const { fieldgroup } = props
  const { preview } = useMakerContext()
  const { editor } = useEditorContext()
  const tableRef = useRef()

  const ConditionalWrap = ({ condition, wrap, children }) => condition ? wrap(children) : children;
  const groupLength = fieldgroup.items.length

  return (
    <section>
      {fieldgroup && fieldgroup.title &&
        <h2 className={classnames({ 'acms-admin-admin-title2': preview && preview.acmscss })}>{fieldgroup.title}</h2>}
      {fieldgroup && fieldgroup.name &&
        <table className={classnames('js-fieldgroup-sortable', { 'adminTable acms-admin-table-admin-edit': preview && preview.acmscss })} ref={tableRef}>
          <thead className={classnames({ 'acms-admin-hide-sp': preview && preview.acmscss })}>
          <tr>
            <th className={classnames({ 'acms-admin-table-left acms-admin-admin-config-table-item-handle': preview && preview.acmscss })}>&nbsp;</th>
            {preview && preview.direction === 'horizontal' &&
              <>
                {fieldgroup && fieldgroup.items.map(item => (<th className={classnames({ 'acms-admin-table-left': preview && preview.acmscss })}>
                  {item.title}
                  {item.tooltip && <i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip={item.tooltip} />}
                </th>))}
              </>
            }
            {preview && preview.direction === 'vertical' && <th />}
            <th className={classnames({ 'acms-admin-table-left acms-admin-admin-config-table-action': preview && preview.acmscss })}>削除</th>
          </tr>
        </thead>

        <tbody>
          {editor && editor.editMode === 'preview' ? null : `<!-- BEGIN ${fieldgroup.name}:loop -->`}
          <tr className="sortable-item">
            <td className="item-handle acms-admin-table-nowrap">
              {preview && preview.acmscss && <i className="acms-admin-icon-sort" />}
            </td>

            <ConditionalWrap
              condition={preview.direction === 'vertical'}
              wrap={children => <td><table>{children}</table></td>}>
              {/* input loop */}
              {groupitems && groupitems.map((item, index) => {
                switch(item.type) {
                  case 'text': {
                    return (
                      <tr key={index} className="acms-admin-form-item">
                        {/* <th className="acms-admin-form-item-heading">{Label(item)}</th> */}
                        <td className="acms-admin-form-item-input">{TextInput(item)}</td>
                      </tr>
                    )
                  }
                  case 'textarea': {
                    return (
                      <tr key={index} className="acms-admin-form-item">
                        {/* <th className="acms-admin-form-item-heading">{Label(item)}</th> */}
                        <td className="acms-admin-form-item-input">{TextareaInput(item)}</td>
                      </tr>
                    )
                  }
                  default: {
                    return null;
                  }
                }
              })}
              {editor.editMode === 'preview' ? null : `<!-- END ${groupName}:loop -->`}

              {/* input template */}
              {editor.editMode === 'preview' ? null : <tr className="sortable-item item-template">
                {groupitems && groupitems.map((item, index) => {
                switch(item.type) {
                  case 'text': {
                    return (
                      <tr key={index} className="acms-admin-form-item">
                        {/* <th className="acms-admin-form-item-heading">{Label(item)}</th> */}
                        <td className="acms-admin-form-item-input">{TextInput(item)}</td>
                      </tr>
                    )
                  }
                  case 'textarea': {
                    return (
                      <tr key={index} className="acms-admin-form-item">
                        {/* <th className="acms-admin-form-item-heading">{Label(item)}</th> */}
                        <td className="acms-admin-form-item-input">{TextareaInput(item)}</td>
                      </tr>
                    )
                  }
                  default: {
                    return null;
                  }
                }
              })}
              </tr>}
            </ConditionalWrap>

            <td className="acms-admin-table-nowrap">
              <input type="button" className={classnames('item-delete', { 'acms-admin-btn-admin acms-admin-btn-admin-danger': preview.acmscss })} value="削除" />
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={preview.direction === 'horizontal' ? groupLength + 2 : 3}>
              <input type="button" className={classnames('item-insert', { 'acms-admin-btn-admin': preview.acmscss })} value="追加" />
            </td>
          </tr>
        </tfoot>
      </table>
      }

      {/* input hidden */}
      {groupName && <>
        {groupitems.map(item => (<>
          {item.type === 'image' && <>
              {item.square && <>
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@squarePath`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@squareAlt`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@squareX`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@squareY`} />
              </>}
              {item.large && <>
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@largePath`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@largeAlt`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@largeX`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@largeY`} />
              </>}
              {item.tiny && <>
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@tinyPath`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@tinyAlt`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@tinyX`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@tinyY`} />
              </>}
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@path`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@alt`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@x`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@y`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@edit`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@old`} />
            <input type="hidden" name={`${item.name}:extension`} value="image" />
            </>}
          {item.type === 'file' && <>
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@path`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@alt`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@edit`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@old`} />
            <input type="hidden" name={`${item.name}:extension`} value="file" />
            </>}
          {item.type === 'media' && <>
            <input type="hidden" name={`${item.name}:extension`} value="media" />
            </>}
          {item.type === 'rich-editor' && <>
            <input type="hidden" name={`${item.name}:extension`} value="rich-editor" />
          </>}
          <input type="hidden" name={`@${groupName}[]`} value={item.name} />
          <input type="hidden" name="field[]" value={item.name} />
          {item.noSearch && <input type="hidden" name={`${item.name}:search`} value="0" />}
          {item.validator.map((validator) => {
            if (!validator.option) {
              return null;
            }
            const name = item.type === 'file' || item.type === 'image' ? `${item.name}@path` : item.name;
            return <input type="hidden" name={`${name}:v#${validator.option}`} value={validator.value} id={`${name}-v-${validator.option}`} />;
          })}
          {(() => {
            const name = item.type === 'file' || item.type === 'image' ? `${item.name}@path` : item.name;
            return item.converter && (<input type="hidden" name={`${name}:c`} value={item.converter} />);
          })()}
        </>))}
        <input type="hidden" name="field[]" value={`@${groupName}`} />

      </>}
    </section>
  )
}
