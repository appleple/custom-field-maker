import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../stores/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionValidatorFieldGroup } from './OptionValidatorFieldGroup';

export function Media(props) {
  const { item, isValue = true } = props;
  const {
    preview: { acmscss, editMode, mode },
  } = useMakerContext();

  const ConditionalWrap = ({ condition, wrap, children }) => (condition ? wrap(children) : children);

  return (
    <>
      {mode === 'customfield' && (
        <div className="js-media-field">
          {!item.useDropArea && (
            <>
              <div>
                {`<!-- BEGIN_IF [{${item.name}@thumbnail}/nem] -->`}
                <ConditionalWrap
                  condition={item.mediaType === 'file'}
                  wrap={(children) => <a href={`%{MEDIA_ARCHIVES_DIR}{${item.name}@path}`}>{children}</a>}
                >
                  <img
                    src={`{${item.name}@thumbnail}`}
                    className={classnames('js-preview', { 'acms-admin-img-responsive': acmscss })}
                    alt=""
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
                  {...(item.mediaType === 'file'
                    ? {
                        style: {
                          width: '64px',
                          height: 'auto',
                          display: 'none',
                        },
                      }
                    : { style: { display: 'none' } })}
                  alt=""
                  className={classnames('js-preview', { 'acms-admin-img-responsive': acmscss })}
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
                  data-type={item.mediaType ? item.mediaType : 'all'}
                >
                  メディアを選択
                </button>
                <button
                  type="button"
                  className={classnames('js-insert', { 'acms-admin-btn': acmscss })}
                  data-type={item.mediaType ? item.mediaType : 'all'}
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
                data-thumbnail={`{${item.name}@thumbnail}`}
                data-type={item.mediaType ? item.mediaType : 'all'}
                data-thumbnail-type={`{${item.name}@type}`}
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
                  data-type={item.mediaType ? item.mediaType : 'all'}
                >
                  メディアを選択
                </button>
              </div>
            </>
          )}
          <input
            type="hidden"
            name={item.name}
            value={editMode === 'preview' ? '' : `{${item.name}}`}
            className="js-value"
          />
          <input type="hidden" name="field[]" value={item.name} />
          <input type="hidden" name={`${item.name}:extension`} value="media" />
          <OptionValidator item={item} />
        </div>
      )}

      {mode === 'fieldgroup' && (
        <div className="js-media-field">
          {!item.useDropArea && (
            <>
              <div>
                {isValue && (
                  <>
                    {`<!-- BEGIN_IF [{${item.name}@thumbnail}/nem] -->`}
                    <ConditionalWrap
                      condition={item.mediaType === 'file'}
                      wrap={(children) => <a href={`%{MEDIA_ARCHIVES_DIR}{${item.name}@path}`}>{children}</a>}
                    >
                      <img
                        src={`{${item.name}@thumbnail}`}
                        className={classnames('js-preview', { 'acms-admin-img-responsive': acmscss })}
                        alt=""
                        {...(item.mediaType === 'file' && {
                          style: {
                            width: '64px',
                            height: 'auto',
                          },
                        })}
                      />
                    </ConditionalWrap>
                    {'<!-- ELSE -->'}
                  </>
                )}
                <img
                  alt=""
                  src=""
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
                />
                {isValue && '<!-- END_IF -->'}
                <p className="js-text acms-admin-text-danger" style={{ display: 'none' }}>
                  許可されていないファイルのため挿入できません。
                </p>
              </div>
              <div className={classnames({ 'acms-admin-margin-top-mini': acmscss })}>
                <button
                  type="button"
                  className={classnames('js-insert', { 'acms-admin-btn': acmscss })}
                  data-type={item.mediaType ? item.mediaType : 'all'}
                >
                  メディアを選択
                </button>
                <button
                  type="button"
                  className={classnames('js-insert', { 'acms-admin-btn': acmscss })}
                  data-type={item.mediaType ? item.mediaType : 'all'}
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
                data-width={`${item.dropAreaWidth}px`}
                data-type={item.mediaType ? item.mediaType : 'all'}
                {...(isValue && { 'data-thumbnail': `{${item.name}@thumbnail}` })}
                {...(isValue && { 'data-thumbnail-type': `{${item.name}@type}` })}
                data-height={`${item.dropAreaHeight}px`}
              />
              <p className="js-text acms-admin-text-danger" style={{ display: 'none' }}>
                許可されていないファイルのため挿入できません。
              </p>
              <div className="acms-admin-margin-top-mini">
                <button
                  type="button"
                  className={classnames('js-insert', { 'acms-admin-btn': acmscss })}
                  data-type={item.mediaType ? item.mediaType : 'all'}
                >
                  メディアを選択
                </button>
              </div>
            </>
          )}

          <input
            type="hidden"
            name={`${item.name}[]`}
            {...(isValue && {
              value: editMode === 'preview' ? '' : `{${item.name}}`,
            })}
            className="js-value"
          />
          <OptionValidatorFieldGroup item={item} isTemplate={!isValue} />
        </div>
      )}

      {mode === 'customunit' && (
        <div className="js-media-field">
          {!item.useDropArea && (
            <>
              <div>
                {`<!-- BEGIN_IF [{${item.name}@thumbnail}/nem] -->`}
                <ConditionalWrap
                  condition={item.mediaType === 'file'}
                  wrap={(children) => <a href={`%{MEDIA_ARCHIVES_DIR}{${item.name}@path}`}>{children}</a>}
                >
                  <img
                    src={`{${item.name}@thumbnail}`}
                    className={classnames('js-preview', { 'acms-admin-img-responsive': acmscss })}
                    alt={`{${item.name}@alt}`}
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
                  alt=""
                  src=""
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
                  data-type={item.mediaType ? item.mediaType : 'all'}
                >
                  メディアを選択
                </button>
                <button
                  type="button"
                  className={classnames('js-insert', { 'acms-admin-btn': acmscss })}
                  data-type={item.mediaType ? item.mediaType : 'all'}
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
                data-thumbnail={`{${item.name}@thumbnail}`}
                data-type={item.mediaType ? item.mediaType : 'all'}
                data-thumbnail-type={`{${item.name}@type}`}
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
                  data-type={item.mediaType ? item.mediaType : 'all'}
                >
                  メディアを選択
                </button>
              </div>
            </>
          )}
          <input
            type="hidden"
            name={`${item.name}{id}`}
            value={editMode === 'preview' ? '' : `{${item.name}}`}
            className="js-value"
          />
          <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
          <input type="hidden" name={`${item.name}{id}:extension`} value="media" />
          <OptionValidator item={item} />
        </div>
      )}

      {mode === 'unitgroup' && (
        <>
          <div className="js-media-field">
            {!item.useDropArea && (
              <>
                <div>
                  {isValue && (
                    <>
                      {`<!-- BEGIN_IF [{${item.name}@thumbnail}/nem] -->`}
                      <ConditionalWrap
                        condition={item.mediaType === 'file'}
                        wrap={(children) => <a href={`%{MEDIA_ARCHIVES_DIR}{${item.name}@path}`}>{children}</a>}
                      >
                        <img
                          src={`{${item.name}@thumbnail}`}
                          className={classnames('js-preview', { 'acms-admin-img-responsive': acmscss })}
                          alt={`{${item.name}@alt}`}
                          {...(item.mediaType === 'file' && {
                            style: {
                              width: '64px',
                              height: 'auto',
                            },
                          })}
                        />
                      </ConditionalWrap>
                      {'<!-- ELSE -->'}
                    </>
                  )}
                  <img
                    alt=""
                    src=""
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
                  />
                  {isValue && '<!-- END_IF -->'}
                  <p className="js-text acms-admin-text-danger" style={{ display: 'none' }}>
                    許可されていないファイルのため挿入できません。
                  </p>
                </div>
                <div className={classnames({ 'acms-admin-margin-top-mini': acmscss })}>
                  <button
                    type="button"
                    className={classnames('js-insert', { 'acms-admin-btn': acmscss })}
                    data-type={item.mediaType ? item.mediaType : 'all'}
                  >
                    メディアを選択
                  </button>
                  <button
                    type="button"
                    className={classnames('js-insert', { 'acms-admin-btn': acmscss })}
                    data-type={item.mediaType ? item.mediaType : 'all'}
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
                  {...(isValue && { 'data-thumbnail': `{${item.name}@thumbnail}` })}
                  {...(isValue && { 'data-thumbnail-type': `{${item.name}@type}` })}
                  data-type={item.mediaType ? item.mediaType : 'all'}
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
                    data-type={item.mediaType ? item.mediaType : 'all'}
                  >
                    メディアを選択
                  </button>
                </div>
              </>
            )}
            <input
              type="hidden"
              name={`${item.name}{id}[]`}
              {...(isValue && {
                value: editMode === 'preview' ? '' : `{${item.name}}`,
              })}
              className="js-value"
            />
          </div>
        </>
      )}
    </>
  );
}
