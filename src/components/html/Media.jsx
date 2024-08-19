import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';

const ConditionalWrap = ({ condition, wrap, children }) => (condition ? wrap(children) : children);

export function Media(props) {
  const { item, id } = props;
  const {
    preview: { acmscss, editMode, mode },
  } = useMakerContext();

  let attribute = { value: '', name: '', hiddenName: '' };
  switch (mode) {
    case 'customfield': {
      attribute = {
        id,
        value: `{${item.name}}`,
        name: item.name,
        hiddenName: 'field[]',
      };
      break;
    }
    case 'fieldgroup': {
      attribute = {
        id,
        value: `{${item.name}}`,
        name: `${item.name}`,
        hiddenName: `${item.name}[]`,
      };
      break;
    }
    case 'customunit': {
      attribute = {
        id,
        value: `{${item.name}}`,
        name: `${item.name}{id}`,
        hiddenName: 'unit[]',
      };
      break;
    }
    case 'unitgroup': {
      attribute = {
        id,
        value: item.name,
        name: `${item.name}{id}[]`,
      };
      break;
    }
  }

  return (
    <>
      {mode === 'customfield' && (
        <div className="js-media-field">
          {!item.useDropArea && (
            <>
              <div>
                {`<!-- BEGIN_IF [{${attribute.name}@thumbnail}/nem] -->`}
                <ConditionalWrap
                  condition={item.mediaType === 'file'}
                  wrap={(children) => <a href={`%{MEDIA_ARCHIVES_DIR}{${attribute.name}@path}`}>{children}</a>}
                >
                  <img
                    src={`{${attribute.name}@thumbnail}`}
                    className={classnames('js-preview', { 'acms-admin-img-responsive': acmscss })}
                    alt=""
                    id={`${attribute.name}-preview`}
                    {...(item.mediaType === 'file' && {
                      style: {
                        width: '64px',
                        height: 'auto',
                      },
                    })}
                  />
                </ConditionalWrap>
                {'<!-- ELSE -->'}
                <img
                  src=""
                  alt=""
                  {...(item.mediaType === 'file'
                    ? {
                        style: {
                          width: '64px',
                          height: 'auto',
                          display: 'none',
                        },
                      }
                    : { style: { display: 'none' } })}
                  className={classnames('js-preview', { 'acms-admin-img-responsive': acmscss })}
                  id={`${attribute.name}-preview`}
                />
                {'<!-- END_IF -->'}
                <p className="js-text acms-admin-text-danger" style={{ display: 'none' }}>
                  許可されていないファイルのため挿入できません。
                </p>
              </div>
              <div className="acms-admin-margin-top-mini">
                <button
                  type="button"
                  className={classnames('js-insert', { 'acms-admin-btn': acmscss })}
                  data-type={item.mediaType || 'all'}
                >
                  メディアを選択
                </button>
                <button
                  type="button"
                  className={classnames('js-insert', { 'acms-admin-btn': acmscss })}
                  data-type={item.mediaType || 'all'}
                  data-mode="upload"
                >
                  アップロード
                </button>
                <button type="button" className={classnames('js-edit', { 'acms-admin-btn': acmscss })}>
                  メディアを編集
                </button>
                <button
                  type="button"
                  className={classnames('js-remove', { 'acms-admin-btn acms-admin-btn-danger': acmscss })}
                >
                  削除
                </button>
              </div>
            </>
          )}
          {item.useDropArea && (
            <>
              <div
                className="js-droparea"
                data-thumbnail={`{${attribute.name}@thumbnail}`}
                data-type={item.mediaType || 'all'}
                data-thumbnail-type={`{${attribute.name}@type}`}
                data-width={`${item.dropAreaWidth}px`}
                data-height={`${item.dropAreaHeight}px`}
              />
              <p className="js-text acms-admin-text-danger" style={{ display: 'none' }}>
                許可されていないファイルのため挿入できません。
              </p>
              <div className="acms-admin-margin-top-mini">
                <button
                  type="button"
                  className={classnames('js-insert', { 'acms-admin-btn': acmscss })}
                  data-type={item.mediaType || 'all'}
                >
                  メディアを選択
                </button>
              </div>
            </>
          )}
          <input
            type="hidden"
            name={attribute.name}
            value={editMode === 'preview' ? '' : attribute.value}
            className="js-value"
          />
          <input type="hidden" name={attribute.hiddenName} value={editMode === 'preview' ? '' : attribute.value} />
          <input type="hidden" name={`${attribute.name}:extension`} value="media" />
        </div>
      )}
      {mode === 'fieldgroup' && (
        <input
          type="hidden"
          name={attribute.hiddenName}
          value={editMode === 'preview' ? '' : attribute.value}
          className="js-value"
        />
      )}
    </>
  );
}
