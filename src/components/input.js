import React, { Component } from "react";
import classnames from 'classnames';

const ConditionalWrap = ({ condition, wrap, children }) => (condition ? wrap(children) : children);

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  renderLabel(item) {
    const { jsValidator } = this.props;
    return (
      <>
        {item.title}
        {item.tooltip &&
          <i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip={item.tooltip} />
        }
        {jsValidator &&
          <label className="valid-mark" data-validator={item.name}>
            <span className="acms-admin-icon acms-admin-icon-checklist" />
          </label>
        }
        </>
    );
  }

  renderText(item) {
    const { acmscss, jsValidator, renderValidator, renderNoSearch } = this.props;
    const type = item.subType ? item.subType : item.type

    return (
      <>
        <input
          type={type}
          name={item.name}
          value={`{${item.name}}`}
          className={ classnames({ 'acms-admin-form-width-full': acmscss }) }
          {...(jsValidator ? { 'data-validator': item.name } : {})} />
        <input type="hidden" name="field[]" value={item.name} />
        {renderValidator(item, acmscss)}
        {renderNoSearch(item)}
      </>
    )
  }

  renderTextarea(item) {
    const { acmscss, jsValidator, renderValidator, renderNoSearch } = this.props;
    const type = item.subType ? item.subType : item.type

    let classname = ''
    if(type === 'lite-editor') {
      classname = classnames('js-lite-editor-field', { 'acms-admin-form-width-full': acmscss })
    }
    else {
      classname = classnames({ 'acms-admin-form-width-full': acmscss })
    }

    return (
      <>
        <textarea
          name={item.name}
          className={classname}
          {...(jsValidator ? { 'data-validator': item.name } : {})}>{`{${item.name}}`}</textarea>
        <input type="hidden" name="field[]" value={item.name} />
        {renderValidator(item, acmscss)}
        {renderNoSearch(item, acmscss)}
      </>
    )
  }

  renderRichEditor(item) {
    return (
      <ConditionalWrap
        condition={item.useExpand}
        wrap={children => (
          <div className="js-expand js-acms-expand">
            <div className="js-acms-expand-inner">
              <button className="js-expand-btn js-acms-expand-btn" type="button">
                <i className="acms-admin-icon acms-admin-icon-expand-arrow js-expand-icon" />
              </button>
              {children}
            </div>
          </div>
        )}>
      <div className="js-smartblock" data-heading-start={item.startHeadingLevel} data-heading-end={item.endHeadingLevel}>
        <div className="js-smartblock-edit" />
        <input className="js-smartblock-body" type="hidden" name={item.name} value={`{${item.name}@html}`} />
        <input type="hidden" name="field[]" value={item.name} />
        <input type="hidden" name={`${item.name}:extension`} value="rich-editor" />
      </div>
    </ConditionalWrap>
    )
  }

  renderTable(item) {
    const { preview } = this.props

    return (
      <div className="js-editable-table-field">
        <div className="js-editable-table">
          {preview ? null : `<!-- BEGIN_IF [{${item.name}}[delnl]/nem] -->\n`}
          {preview ? null : `{${item.name}}[raw]`}
          {preview ? null : '<!-- ELSE -->'}
          <table>
            <tr>
              <th>サンプル</th>
              <th>サンプル</th>
            </tr>
            <tr>
              <td>サンプル</td>
              <td>サンプル</td>
            </tr>
          </table>
          {preview ? null : '<!-- END_IF -->'}
          <input type="hidden" className="js-editable-table-dest" value={`{${item.name}}`} name={item.name} />
          <input type="hidden" name="field[]" value={item.name} />
        </div>
      </div>
    )
  }

  renderSelect(item) {
    const { acmscss, renderValidator, renderNoSearch } = this.props;

    return (
      <>
        <select name={item.name} className={classnames({ 'acms-admin-form-width-full': acmscss })}>
          <option value="" />
          {item.option.map((option) => {
            if (!option.label) {
              return null;
            }
            return <option key={option.value} value={option.value} data-tmp={`{${item.name}:selected#${option.value}}`}>{option.label}</option>;
          })}
        </select>
        <input type="hidden" name="field[]" value={item.name} />
        {renderValidator(item, acmscss)}
        {renderNoSearch(item)}
      </>
    )
  }

  renderRadio(item) {
    const { acmscss, renderValidator, renderNoSearch } = this.props;

    return (
      <>
        {item.option.map((option) => {
          if (!option.label) {
            return null;
          }
          return (
            <span key={option.value} className={classnames({ 'acms-admin-form-radio': acmscss })}>
              <input
                type="radio"
                name={item.name}
                value={option.value}
                data-tmp={`{${item.name}:checked#${option.value}}`}
                id={`input-radio-${item.name}-${option.value}`} />
              <label htmlFor={`input-radio-${item.name}-${option.value}`}>
                <i className="acms-admin-ico-radio" />
                {option.label}
              </label>
            </span>
          );
        })}
        <input type="hidden" name="field[]" value={item.name} />
        {renderValidator(item, acmscss)}
        {renderNoSearch(item)}
      </>
    )
  }

  renderCheckbox(item) {
    const { acmscss, renderNoSearch } = this.props;

    return (
      <>
        {item.option.map((option) => {
          if (!option.label) {
            return null;
          }
          return (
            <div key={option.value} className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
              <input type="checkbox" name={`${item.name}[]`} value={option.value} data-tmp={`{${item.name}:checked#${option.value}}`} id={`input-checkbox-${item.name}-${option.value}`} />
              <label htmlFor={`input-checkbox-${item.name}-${option.value}`}>
                <i className="acms-admin-ico-checkbox" />
                {option.label}
              </label>
            </div>
          );
        })}
        <input type="hidden" name="field[]" value={item.name} />
        {renderValidator(item, acmscss)}
        {renderNoSearch(item)}
      </>
    )
  }

  renderImage(item) {
    const { preview, acmscss, renderValidator, renderNoSearch } = this.props

    return (
      <span className={classnames({ 'js-img_resize_cf': item.resize })}>
        {preview ? null : `<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
        <img
          src={`%{ARCHIVES_DIR}{${item.name}@path}`}
          className={classnames({ 'acms-admin-img-responsive': acmscss, 'js-img_resize_preview': item.resize })}
          style={item.normalSize ? { width: `${item.normalSize}px` } : null}
          alt={`{${item.name}@alt}`} />
        <input type="hidden" name={`${item.name}@old`} value={`{${item.name}@path}`} />
        <div className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
          <input type="checkbox" name={`${item.name}@edit`} value="delete" id={`input-checkbox-${item.name}@edit`} />
          <label htmlFor={`input-checkbox-${item.name}@edit`}>
            {acmscss &&
              <i className="acms-admin-ico-checkbox" />}
            削除
          </label>
        </div>
        {preview ? null : '<!-- ELSE -->'}
        <img
          src={`%{ARCHIVES_DIR}{${item.name}@path}`}
          className={classnames({ 'acms-admin-img-responsive': acmscss, 'js-img_resize_preview': item.resize })}
          style={item.normalSize ? { width: `${item.normalSize}px`, display: 'none' } : { display: 'none' }} />
        {preview ? null : '<!-- END_IF -->'}
        <input type="file" name={item.name} size="20" className={classnames({ 'js-img_resize_input': item.resize })} /><br />
        {item.alt && <>代替テキスト:<input type="text" name={`${item.name}@alt`} value={`{${item.name}@alt}`} size="40" /></>}
        <input type="hidden" name="field[]" value={item.name} />
        <input type="hidden" name={`${item.name}:extension`} value="image" />
        {item.normalSize && <input type="hidden" name={`${item.name}@${item.normal}`} value={item.normalSize} />}
        {item.tiny && <input type="hidden" name={`${item.name}@${item.tiny}`} value={item.tinySize} />}
        {item.large && <input type="hidden" name={`${item.name}@${item.large}`} value={item.largeSize} />}
        {item.square && <input type="hidden" name={`${item.name}@${item.square}`} value={item.squareSize} />}
        <input type="hidden" name={`${item.name}@filename`} value="" />
        {renderValidator(item, acmscss)}
        {renderNoSearch(item)}
      </span>
    )
  }

  renderMedia(item) {
    const { preview, acmscss } = this.props;

    return (
      <span className="js-media-field">
        {!item.useDropArea &&
        <>
          <div>
            {`<!-- BEGIN_IF [{${item.name}@thumbnail}/nem] -->`}
            <ConditionalWrap
              condition={item.mediaType === 'file'}
              wrap={children => <a href={`%{MEDIA_ARCHIVES_DIR}{${item.name}@path}`}>{children}</a>}>
              <img
                src={`{${item.name}@thumbnail}`}
                className={classnames('js-preview', { 'acms-admin-img-responsive': acmscss })}
                alt=""
                id={`${item.name}-preview`}
                {...(item.mediaType === 'file' && {
                  style: {
                    width: '64px',
                    height: 'auto'
                  }
                })} />
            </ConditionalWrap>
            {'<!-- ELSE -->'}
            <img
              src=""
              {...(item.mediaType === 'file' ? {
                  style: {
                    width: '64px',
                    height: 'auto',
                    display: 'none'
                  }
                } : {
                  style: { display: 'none' }
                }
              )}
              className={classnames('js-preview', { 'acms-admin-img-responsive': acmscss })}
              id={`${item.name}-preview`} />
            {'<!-- END_IF -->'}
            <p className="js-text acms-admin-text-danger" style={{ display: 'none' }}>許可されていないファイルのため挿入できません。</p>
          </div>
          <div className="acms-admin-margin-top-mini">
            <button type="button" className={classnames('js-insert', { 'acms-admin-btn': acmscss })} data-type={item.mediaType ? item.mediaType : 'all'}>メディアを選択</button>
            <button type="button" className={classnames('js-insert', { 'acms-admin-btn': acmscss })} data-type={item.mediaType ? item.mediaType : 'all'} data-mode="upload">アップロード</button>
            <button type="button" className={classnames('js-edit', { 'acms-admin-btn': acmscss })}>メディアを編集</button>
            <button type="button" className={classnames('js-remove', { 'acms-admin-btn acms-admin-btn-danger': acmscss })}>削除</button>
          </div>
        </>
        }
        {item.useDropArea &&
          <>
            <div className="js-droparea" data-thumbnail={`{${item.name}@thumbnail}`} data-type={item.mediaType ? item.mediaType : 'all'} data-thumbnail-type={`{${item.name}@type}`} data-width={`${item.dropAreaWidth}px`} data-height={`${item.dropAreaHeight}px`} />
            <p className="js-text acms-admin-text-danger" style={{ display: 'none' }}>許可されていないファイルのため挿入できません。</p>
            <div className="acms-admin-margin-top-mini">
              <button type="button" className={classnames('js-insert', { 'acms-admin-btn': acmscss })} data-type={item.mediaType ? item.mediaType : 'all'}>メディアを選択</button>
            </div>
          </>
        }
        <input type="hidden" name={item.name} value={preview ? '' : `{${item.name}}`} className="js-value" />
        <input type="hidden" name="field[]" value={item.name} />
        <input type="hidden" name={`${item.name}:extension`} value="media" />
      </span>
    )
  }

  renderFile(item) {
    const { preview, acmscss, renderValidator, renderNoSearch } = this.props

    let src = '/images/fileicon/';
    let alt = 'file';
    if (item.extension) {
      src += `${item.extension}.svg`;
      alt += item.extension;
    } else {
      src += 'file.svg';
    }

    return (
      <>
      {preview ? null : `<!-- BEGIN ${item.name}@path:veil -->`}
        <input type="hidden" name={`${item.name}@old`} value={`{${item.name}@path}`} />
        <input type="hidden" name={`${item.name}@secret`} value={`{${item.name}@secret}`} />
        <input type="hidden" name={`${item.name}@fileSize`} value={`{${item.name}@fileSize}`} />
        <label htmlFor={`input-checkbox-${item.name}@edit`} className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
          <input type="checkbox" name={`${item.name}@edit`} value="delete" id={`input-checkbox-${item.name}@edit`} />
          {acmscss && <i className="acms-admin-ico-checkbox" />}
          削除
        </label>
        <a href={`%{ARCHIVES_DIR}{${item.name}@path}`}><img src={src} width="64" height="64" alt={alt} /></a>
        {preview ? null : `<!-- END ${item.name}@path:veil -->`}
        <input type="file" name={item.name} />
        <input type="hidden" name="field[]" value={item.name} />
        <input type="hidden" name={`${item.name}@baseName`} value={`{${item.name}@baseName}`} />
        <input type="hidden" name={`${item.name}:extension`} value="file" />
        {item.extension && <input type="hidden" name={`${item.name}@extension`} value={item.extension} />}
        {item.fileNameMethod === 'random' && item.fileName && <input type="hidden" name={`${item.name}@filename`} value="" />}
        {item.fileNameMethod === 'fix' && item.fileName && <input type="hidden" name={`${item.name}@filename`} value={`${item.fileName}`} />}
        {item.fileNameMethod === 'asis' && <input type="hidden" name={`${item.name}@filename`} value="@rawfilename" />}
        {renderValidator(item, acmscss)}
        {renderNoSearch(item, acmscss)}
      </>
    )
  }
}
