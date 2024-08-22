import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionNoSearch } from './OptionNoSearch';

export function ImageInput(props) {
  const { item, id, isAttribute = true } = props;
  const {
    preview: { acmscss, editMode, mode, direction },
  } = useMakerContext();

  let style = {};
  let hiddenStyle = {};

  const wrapTable = (children, title) => {
    return (
      <ConditionalWrap
        condition={direction === 'vertical'}
        wrap={(child) => (
          <tr>
            <th>{title}</th>
            {child}
          </tr>
        )}
      >
        {children}
      </ConditionalWrap>
    );
  };

  const ConditionalWrap = ({ condition, wrap, children }) => (condition ? wrap(children) : children);

  return (
    <>
      {mode === 'customfield' && (
        <div className={classnames({ 'js-img_resize_cf': item.resize })}>
          {editMode === 'preview' ? null : `<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
          <img
            src={`%{ARCHIVES_DIR}{${item.name}@path}`}
            className={classnames({
              'acms-admin-img-responsive': acmscss,
              'js-img_resize_preview': item.resize,
            })}
            style={item.normalSize ? { width: `${item.normalSize}px` } : null}
            alt={`{${item.name}@alt}`}
          />
          <input type="hidden" name={`${item.name}@old`} value={`{${item.name}@path}`} />
          <div className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
            <input type="checkbox" name={`${item.name}@edit`} value="delete" id={`input-checkbox-${item.name}@edit`} />
            <label htmlFor={`input-checkbox-${item.name}@edit`}>
              {acmscss && <i className="acms-admin-ico-checkbox" />}
              削除
            </label>
          </div>
          {editMode === 'preview' ? null : '<!-- ELSE -->'}
          <img
            alt=""
            src={`%{ARCHIVES_DIR}{${item.name}@path}`}
            className={classnames({ 'acms-admin-img-responsive': acmscss, 'js-img_resize_preview': item.resize })}
            style={item.normalSize ? { width: `${item.normalSize}px`, display: 'none' } : { display: 'none' }}
          />
          {editMode === 'preview' ? null : '<!-- END_IF -->'}
          <input
            type="file"
            id={id}
            name={item.name}
            size="20"
            className={classnames({ 'js-img_resize_input': item.resize })}
          />
          <br />
          {item.alt && (
            <>
              代替テキスト:
              <input type="text" name={`${item.name}@alt`} value={`{${item.name}@alt}`} size="40" />
            </>
          )}
          <input type="hidden" name="field[]" value={item.name} />
          <input type="hidden" name={`${item.name}:extension`} value="image" />

          {item.normalSize && <input type="hidden" name={`${item.name}@${item.normal}`} value={item.normalSize} />}
          {item.tiny && <input type="hidden" name={`${item.name}@${item.tiny}`} value={item.tinySize} />}
          {item.large && <input type="hidden" name={`${item.name}@${item.large}`} value={item.largeSize} />}
          {item.square && <input type="hidden" name={`${item.name}@${item.square}`} value={item.squareSize} />}

          <input type="hidden" name={`${item.name}@filename`} value="" />
          <OptionValidator item={item} />
          <OptionNoSearch name={item.name} noSearch={item.noSearch} />
        </div>
      )}

      {mode === 'fieldgroup' &&
        wrapTable(
          <div className={classnames({ 'js-img_resize_cf': item.resize })}>
            {isAttribute && (
              <>
                {editMode === 'preview' ? null : `<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
                <img
                  src={`%{ARCHIVES_DIR}{${item.name}@path}`}
                  className={classnames({ 'js-img_resize_preview': item.resize })}
                  style={style}
                  alt={`{${item.name}@alt}`}
                />
                <input type="hidden" name={`${item.name}@old[]`} value={`{${item.name}@path}`} />
                <label
                  htmlFor={`input-checkbox-${item.name}@edit[]`}
                  className={classnames({ 'acms-admin-form-checkbox': acmscss })}
                >
                  <input
                    type="checkbox"
                    name={`${item.name}@edit[]`}
                    value="delete"
                    id={`input-checkbox-${item.name}@edit[]`}
                  />
                  {acmscss && <i className="acms-admin-ico-checkbox" />}
                  削除
                </label>
                {editMode === 'preview' ? null : '<!-- ELSE -->'}

                <img
                  alt=""
                  src={`%{ARCHIVES_DIR}{${item.name}@path}`}
                  className={classnames({ 'js-img_resize_preview': item.resize })}
                  style={hiddenStyle}
                />

                {editMode === 'preview' ? null : '<!-- END_IF -->'}
              </>
            )}
            {!isAttribute && <img src="" alt="" style={hiddenStyle} className="js-img_resize_preview" />}

            <input type="file" name={`${item.name}[]`} className={classnames({ 'js-img_resize_input': item.resize })} />
            <br />
            {item.alt && (
              <>
                代替テキスト:
                <input type="text" name={`${item.name}@alt[]`} value={`{${item.name}@alt}`} size="40" />
              </>
            )}
            {item.normalSize && <input type="hidden" name={`${item.name}@${item.normal}[]`} value={item.normalSize} />}
            {item.tinySize && <input type="hidden" name={`${item.name}@${item.tiny}[]`} value={item.tinySize} />}
            {item.largeSize && <input type="hidden" name={`${item.name}@${item.large}[]`} value={item.largeSize} />}
            {item.square && <input type="hidden" name={`${item.name}@${item.square}[]`} value={item.squareSize} />}
            <OptionValidator item={item} />
          </div>,
          item.title
        )}
    </>
  );
}
