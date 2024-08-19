import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';
import { OptionValidator } from './OptionValidator';

export function ImageInput(props) {
  const { item, id, isAttribute = true } = props;
  const {
    preview: { acmscss, editMode, mode, direction },
  } = useMakerContext();

  let attribute = {
    id,
    value: '',
    name: '',
    namePath: '',
    nameOld: '',
    nameEdit: '',
    nameAlt: '',
    nameThumbnail: '',
    nameType: '',
    hiddenName: '',
  };
  let style = {};
  let hiddenStyle = {};

  switch (mode) {
    case 'customfield': {
      attribute = {
        value: `{${item.name}}`,
        name: item.name,
        namePath: `${item.name}@path`,
        nameOld: `${item.name}@old`,
        nameThumbnail: `${item.name}@thumbnail`,
        nameType: `${item.name}@type`,
        hiddenName: 'field[]',
      };
      break;
    }
    case 'fieldgroup': {
      attribute = {
        value: `{${item.name}}`,
        name: `${item.name}`,
        namePath: `${item.name}@path`,
        nameOld: `${item.name}@old[]`,
        nameEdit: `${item.name}@edit[]`,
        nameAlt: `${item.name}@alt`,
        nameThumbnail: `${item.name}@thumbnail`,
        nameType: `${item.name}@type`,
        hiddenName: `${item.name}[]`,
      };
      if (item.normalSize) {
        style.maxWidth = `${item.normalSize}px`;
      }
      hiddenStyle = Object.assign({}, style, { display: 'none' });
      break;
    }
    case 'customunit': {
      attribute = {
        value: `{${item.name}}`,
        name: `${item.name}{id}`,
        namePath: `${item.name}@path`,
        nameOld: `${item.name}@old`,
        nameThumbnail: `${item.name}@thumbnail`,
        nameType: `${item.name}@type`,
        hiddenName: 'unit[]',
      };
      break;
    }
    case 'unitgroup': {
      attribute = {
        value: item.name,
        name: `${item.name}{id}[]`,
        namePath: `${item.name}@path`,
        nameOld: `${item.name}@old`,
        nameThumbnail: `${item.name}@thumbnail`,
        nameType: `${item.name}@type`,
        hiddenName: 'unit[]',
      };
      break;
    }
  }

  const ConditionalWrap = ({ condition, wrap, children }) => (condition ? wrap(children) : children);

  return (
    <>
      {mode === 'customfield' && (
        <div className="js-media-field">
          {!item.useDropArea && (
            <>
              <div>
                {`<!-- BEGIN_IF [{${attribute.nameThumbnail}}/nem] -->`}
                <ConditionalWrap
                  condition={item.mediaType === 'file'}
                  wrap={(children) => <a href={`%{MEDIA_ARCHIVES_DIR}{${attribute.namePath}}`}>{children}</a>}
                >
                  <img
                    src={`{${attribute.nameThumbnail}}`}
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
                data-thumbnail={`{${attribute.nameThumbnail}}`}
                data-type={item.mediaType || 'all'}
                data-thumbnail-type={`{${attribute.nameType}}`}
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
        <>
          <ConditionalWrap
            condition={direction === 'vertical'}
            wrap={(child) => (
              <label>
                <>{item.title}</>
                {child}
              </label>
            )}
          >
            <span className={classnames({ 'js-img_resize_cf': item.resize })}>
              {isAttribute && (
                <>
                  {editMode === 'preview' ? null : `<!-- BEGIN_IF [{${attribute.namePath}}/nem] -->`}
                  <img
                    src={`%{ARCHIVES_DIR}{${attribute.namePath}}`}
                    className={classnames({ 'js-img_resize_preview': item.resize })}
                    style={style}
                    alt={`{${attribute.nameAlt}}`}
                  />
                  <input type="hidden" name={`${attribute.nameOld}`} value={`{${attribute.namePath}}`} />
                  <label
                    htmlFor={`input-checkbox-${attribute.nameEdit}`}
                    className={classnames({ 'acms-admin-form-checkbox': acmscss })}
                  >
                    <input
                      type="checkbox"
                      name={`${attribute.nameEdit}`}
                      value="delete"
                      id={`input-checkbox-${attribute.nameEdit}`}
                    />
                    {acmscss && <i className="acms-admin-ico-checkbox" />}
                    削除
                  </label>
                  {editMode === 'preview' ? null : '<!-- ELSE -->'}
                </>
              )}

              <img
                alt=""
                src={`%{ARCHIVES_DIR}{${attribute.namePath}}`}
                className={classnames({ 'js-img_resize_preview': item.resize })}
                style={hiddenStyle}
              />
              {!isAttribute || editMode === 'preview' ? null : '<!-- END_IF -->'}
              <input
                type="file"
                name={`${item.name}[]`}
                className={classnames({ 'js-img_resize_input': item.resize })}
              />
              <br />
              {item.alt && (
                <>
                  代替テキスト:
                  <input type="text" name={`${attribute.nameAlt}[]`} value={`{${attribute.nameAlt}}`} size="40" />
                </>
              )}
              {item.normalSize && (
                <input type="hidden" name={`${item.name}@${item.normal}[]`} value={item.normalSize} />
              )}
              {item.tinySize && <input type="hidden" name={`${item.name}@${item.tiny}[]`} value={item.tinySize} />}
              {item.largeSize && <input type="hidden" name={`${item.name}@${item.large}[]`} value={item.largeSize} />}
              {item.square && <input type="hidden" name={`${item.name}@${item.square}[]`} value={item.squareSize} />}
              <OptionValidator item={item} />
            </span>
          </ConditionalWrap>
        </>
      )}
    </>
  );
}
