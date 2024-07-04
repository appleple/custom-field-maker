import React from 'react'
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';
import { useEditorContext } from '../../store/EditorContext';

const ConditionalWrap = ({ condition, wrap, children }) => condition ? wrap(children) : children;

export function MediaInput(props) {
  const { name, mediaType, useDropArea, dropAreaWidth, dropAreaHeight } = props
  const { maker } = useMakerContext()
  const { editor } = useEditorContext()

  return (
    <td className="js-media-field">
      {!useDropArea &&
        <>
          <div>
            { `<!-- BEGIN_IF [{${name}@thumbnail}/nem] -->`}
            <ConditionalWrap
              condition={mediaType === 'file'}
              wrap={children => <a href={`%{MEDIA_ARCHIVES_DIR}{${name}@path}`}>{children}</a>}
            >
              <img
                src={`{${name}@thumbnail}`}
                className={classnames('js-preview', { 'acms-admin-img-responsive': maker.acmscss })}
                alt=""
                id={`${name}-preview`}
                {...(mediaType === 'file' && { style: {
                  width: '64px',
                  height: 'auto'
                } })}
              />
            </ConditionalWrap>
            {'<!-- ELSE -->'}
            <img
              src=""
              {...(mediaType === 'file' ?
                { style: {
                  width: '64px',
                  height: 'auto',
                  display: 'none'
                } } :
                { style: { display: 'none' } })}
              className={classnames('js-preview', { 'acms-admin-img-responsive': maker.acmscss })}
              id={`${name}-preview`}
            />
            {'<!-- END_IF -->'}
            <p className="js-text acms-admin-text-danger" style={{ display: 'none' }}>許可されていないファイルのため挿入できません。</p>
          </div>
          <div className="acms-admin-margin-top-mini">
            <button type="button" className={classnames('js-insert', { 'acms-admin-btn': maker.acmscss })} data-type={mediaType || 'all'}>メディアを選択</button>
            <button type="button" className={classnames('js-insert', { 'acms-admin-btn': maker.acmscss })} data-type={mediaType || 'all'} data-mode="upload">アップロード</button>
            <button type="button" className={classnames('js-edit', { 'acms-admin-btn': maker.acmscss })}>メディアを編集</button>
            <button type="button" className={classnames('js-remove', { 'acms-admin-btn acms-admin-btn-danger': maker.acmscss })}>削除</button>
          </div>
        </>
      }
      {useDropArea &&
        <>
          <div className="js-droparea" data-thumbnail={`{${name}@thumbnail}`} data-type={mediaType || 'all'} data-thumbnail-type={`{${name}@type}`} data-width={`${dropAreaWidth}px`} data-height={`${dropAreaHeight}px`} />
          <p className="js-text acms-admin-text-danger" style={{ display: 'none' }}>許可されていないファイルのため挿入できません。</p>
          <div className="acms-admin-margin-top-mini">
            <button type="button" className={classnames('js-insert', { 'acms-admin-btn': maker.acmscss })} data-type={mediaType || 'all'}>メディアを選択</button>
          </div>
        </>
      }
      <input type="hidden" name={name} value={editor.editMode === 'preview' ? '' : `{${name}}`} className="js-value" />
      <input type="hidden" name="field[]" value={name} />
      <input type="hidden" name={`${name}:extension`} value="media" />
    </td>
  )
}
