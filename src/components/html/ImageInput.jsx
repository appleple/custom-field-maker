import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../stores/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionValidatorFieldGroup } from './OptionValidatorFieldGroup';

export function ImageInput(props) {
  const { item, isAttribute = true } = props;
  const {
    preview: { acmscss, editMode, mode },
  } = useMakerContext();

  let style = {};
  let hiddenStyle = {};

  if (mode === 'unitgroup') {
    if (item.normalSize) {
      style.maxWidth = `${item.normalSize}px`;
    }
    hiddenStyle = Object.assign({}, style, { display: 'none' });
  }

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
            <label>
              <input type="checkbox" name={`${item.name}@edit`} value="delete" />
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
            name={item.name}
            size="20"
            className={classnames({ 'js-img_resize_input': item.resize })}
            id={item.name}
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

          {item.normalSize && (
            <input type="hidden" name={`${item.name}@${item.normal}`} value={`${item.normalSize}px`} />
          )}
          {item.tiny && <input type="hidden" name={`${item.name}@${item.tiny}`} value={`${item.tinySize}px`} />}
          {item.large && <input type="hidden" name={`${item.name}@${item.large}`} value={`${item.largeSize}px`} />}
          {item.square && <input type="hidden" name={`${item.name}@${item.square}`} value={`${item.squareSize}px`} />}

          <input type="hidden" name={`${item.name}@filename`} value="" />
          <OptionValidator item={item} />
        </div>
      )}

      {mode === 'fieldgroup' && (
        <>
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
                <label className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                  <input type="checkbox" name={`${item.name}@edit[]`} value="delete" />
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

            <input
              type="file"
              name={`${item.name}[]`}
              className={classnames({ 'js-img_resize_input': item.resize })}
              id={`${item.name}[]`}
            />
            <br />
            {item.alt && (
              <>
                代替テキスト:
                <input type="text" name={`${item.name}@alt[]`} value={`{${item.name}@alt}`} size="40" />
              </>
            )}
            {item.normalSize && (
              <input type="hidden" name={`${item.name}@${item.normal}[]`} value={`${item.normalSize}px`} />
            )}
            {item.tinySize && <input type="hidden" name={`${item.name}@${item.tiny}[]`} value={`${item.tinySize}px`} />}
            {item.largeSize && (
              <input type="hidden" name={`${item.name}@${item.large}[]`} value={`${item.largeSize}px`} />
            )}
            {item.square && (
              <input type="hidden" name={`${item.name}@${item.square}[]`} value={`${item.squareSize}px`} />
            )}
            <OptionValidatorFieldGroup item={item} isTemplate={!isAttribute} />
          </div>
        </>
      )}

      {mode === 'customunit' && (
        <span className={classnames({ 'js-img_resize_cf': item.resize })}>
          {editMode === 'preview' ? null : `<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
          <img
            src={`%{ARCHIVES_DIR}{${item.name}@path}`}
            className={classnames({ 'acms-admin-img-responsive': acmscss, 'js-img_resize_preview': item.resize })}
            style={item.normalSize ? { width: `${item.normalSize}px` } : null}
            alt={`{${item.name}@alt}`}
          />
          <input type="hidden" name={`${item.name}{id}@old`} value={`{${item.name}@path}`} />
          <div className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
            <label>
              <input type="checkbox" name={`${item.name}{id}@edit`} value="delete" />
              {acmscss && <i className="acms-admin-ico-checkbox" />}
              削除
            </label>
          </div>
          {editMode === 'preview' ? null : '<!-- ELSE -->'}
          <img
            src={`%{ARCHIVES_DIR}{${item.name}@path}`}
            alt=""
            className={classnames({ 'acms-admin-img-responsive': acmscss, 'js-img_resize_preview': item.resize })}
            style={item.normalSize ? { width: `${item.normalSize}px`, display: 'none' } : { display: 'none' }}
          />
          {editMode === 'preview' ? null : '<!-- END_IF -->'}
          <input
            type="file"
            name={`${item.name}{id}`}
            size="20"
            className={classnames({ 'js-img_resize_input': item.resize })}
            id={`${item.name}{id}`}
          />
          <br />
          {item.alt && (
            <>
              代替テキスト:
              <input type="text" name={`${item.name}{id}@alt`} value={`{${item.name}@alt}`} size="40" />
            </>
          )}
          <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
          <input type="hidden" name={`${item.name}{id}:extension`} value="image" />
          {item.normalSize && (
            <input type="hidden" name={`${item.name}{id}@${item.normal}`} value={`${item.normalSize}px`} />
          )}
          {item.tiny && <input type="hidden" name={`${item.name}{id}@${item.tiny}`} value={`${item.tinySize}px`} />}
          {item.large && <input type="hidden" name={`${item.name}{id}@${item.large}`} value={`${item.largeSize}px`} />}
          {item.square && (
            <input type="hidden" name={`${item.name}{id}@${item.square}`} value={`${item.squareSize}px`} />
          )}
          <input type="hidden" name={`${item.name}{id}@filename`} value="" />
          <OptionValidator item={item} />
          {console.log(
            item.normal + ': ' + item.normalSize,
            item.tiny + ': ' + item.tinySize,
            item.large + ': ' + item.largeSize,
            item.square + ': ' + item.squareSize
          )}
        </span>
      )}

      {mode === 'unitgroup' && (
        <>
          <div className={classnames({ 'js-img_resize_cf': item.resize })}>
            {isAttribute && (
              <>
                {editMode === 'preview' ? null : `<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
                <div>
                  <img
                    src={`%{ARCHIVES_DIR}{${item.name}@path}`}
                    className={classnames({ 'js-img_resize_preview': item.resize })}
                    style={style}
                    alt={`{${item.name}@alt}`}
                  />
                </div>

                <input type="hidden" name={`${item.name}{id}@old[]`} value={`{${item.name}@path}`} />
                <label className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                  <input type="checkbox" name={`${item.name}{id}@edit[]`} value="delete" />
                  {acmscss && <i className="acms-admin-ico-checkbox" />}
                  削除
                </label>
                {editMode === 'preview' ? null : '<!-- ELSE -->'}
              </>
            )}
            <img
              alt=""
              src={`%{ARCHIVES_DIR}{${item.name}@path}`}
              className={classnames({ 'js-img_resize_preview': item.resize })}
              style={hiddenStyle}
            />
            {isAttribute && editMode === 'preview' ? null : '<!-- END_IF -->'}
            <input
              type="file"
              name={`${item.name}{id}[]`}
              className={classnames({ 'js-img_resize_input': item.resize })}
              id={`${item.name}{id}[]`}
            />
            <br />
            {item.alt && (
              <div>
                代替テキスト:
                <input type="text" name={`${item.name}{id}@alt[]`} value={`{${item.name}@alt}`} size="40" />
              </div>
            )}
            {item.normal && item.normalSize && (
              <input type="hidden" name={`${item.name}{id}@${item.normal}[]`} value={`${item.normalSize}px`} />
            )}
            {item.tiny && item.tinySize && (
              <input type="hidden" name={`${item.name}{id}@${item.tiny}[]`} value={`${item.tinySize}px`} />
            )}
            {item.large && item.largeSize && (
              <input type="hidden" name={`${item.name}{id}@${item.large}[]`} value={`${item.largeSize}px`} />
            )}
            {item.square && item.squareSize && (
              <input type="hidden" name={`${item.name}{id}@${item.square}[]`} value={`${item.squareSize}px`} />
            )}
          </div>
        </>
      )}
    </>
  );
}
