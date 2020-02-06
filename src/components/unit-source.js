import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

const ConditionalWrap = ({ condition, wrap, children }) => (condition ? wrap(children) : children);

export default class UnitSource extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (window.ACMS && ACMS.dispatchEvent) {
      ACMS.dispatchEvent('acmsCustomFieldMakerPreview', this.table, {
        item: this.table
      });
    }
  }

  renderValidator(item, acmscss) {
    if (!item.openValidator) {
      return null;
    }
    const name = item.type === 'file' || item.type === 'image' ? `${item.name}@path` : item.name;

    return (
      <Fragment>
        {item.validator.map((validator) => {
          if (!validator.option) {
            return null;
          }
          return (<Fragment>
            <input type="hidden" name={`${name}:v#${validator.option}`} value={validator.value} />
            {validator.message && <Fragment>
              {`<!-- BEGIN ${name}:validator#${validator.option} -->`}
              <p className={classnames({ 'acms-admin-text-error': acmscss })}>{validator.message}</p>
              {`<!-- END ${name}:validator#${validator.option} -->`}
            </Fragment>}
          </Fragment>);
        })}
        {item.converter && <input type="hidden" name={`${name}{id}:c`} value={item.converter} />}
      </Fragment>
    );
  }

  renderNoSearch(item) {
    if (!item.noSearch) {
      return null;
    }
    return (
      <input type="hidden" name={`${item.name}:search`} value="0" />
    );
  }

  renderTh(item) {
    return (
      <th>
        {item.title}
        {item.tooltip &&
          <i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip={item.tooltip} />
        }
      </th>
    );
  }

  render() {
    const { acmscss, customunit, preview } = this.props;
    return (
      <table className={classnames({ 'acms-admin-table-admin-edit': acmscss })} ref={table => this.table = table}>
        {customunit.map((item) => {
          if (item.type === 'text') {
            return (<tr>
              {this.renderTh(item, acmscss)}
              <td>
                <input type="text" name={`${item.name}{id}`} value={`{${item.name}}`} className={classnames({ 'acms-admin-form-width-full': acmscss })} />
                <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
                {this.renderValidator(item, acmscss)}
                {this.renderNoSearch(item)}
              </td>
            </tr>);
          } else if (item.type === 'textarea') {
            return (
              <tr>
                {this.renderTh(item, acmscss)}
                <td>
                  <textarea name={`${item.name}{id}`} className={classnames({ 'acms-admin-form-width-full': acmscss })}>{`{${item.name}}`}</textarea>
                  <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
                  {this.renderValidator(item, acmscss)}
                </td>
              </tr>
            );
          } else if (item.type === 'select') {
            return (
              <tr>
                {this.renderTh(item, acmscss)}
                <td>
                  <select name={`${item.name}{id}`} className={classnames({ 'acms-admin-form-width-full': acmscss })}>
                    <option value="" />
                    {item.option.map((option) => {
                      if (!option.label) {
                        return null;
                      }
                      return <option value={option.value} data-tmp={`{${item.name}:selected#${option.value}}`}>{option.label}</option>;
                    })}
                  </select>
                  <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
                  {this.renderValidator(item, acmscss)}
                </td>
              </tr>
            );
          } else if (item.type === 'radio') {
            return (
              <tr>
                {this.renderTh(item)}
                <td>
                  {item.option.map((option) => {
                    if (!option.label) {
                      return null;
                    }
                    return (
                      <div className={classnames({ 'acms-admin-form-radio': acmscss })}>
                        <input type="radio" name={`${item.name}{id}`} value={option.value} data-tmp={`{${item.name}:checked#${option.value}}`} id={`input-radio-${item.name}-${option.value}-{id}`} />
                        <label htmlFor={`input-radio-${item.name}-${option.value}-{id}`}>
                          <i className="acms-admin-ico-radio" />
                          {option.label}
                        </label>
                      </div>
                    );
                  })}
                  <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
                  {this.renderValidator(item, acmscss)}
                </td>
              </tr>
            );
          } else if (item.type === 'checkbox') {
            return (
              <tr>
                {this.renderTh(item)}
                <td>
                  {item.option.map((option) => {
                    if (!option.label) {
                      return null;
                    }
                    return (
                      <div className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                        <input type="checkbox" name={`${item.name}{id}[]`} value={option.value} data-tmp={`{${item.name}:checked#${option.value}}`} id={`input-checkbox-${item.name}-${option.value}-{id}`} />
                        <label htmlFor={`input-checkbox-${item.name}-${option.value}-{id}`}>
                          <i className="acms-admin-ico-checkbox" />
                          {option.label}
                        </label>
                      </div>
                    );
                  })}
                  <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
                  {this.renderValidator(item, acmscss)}
                </td>
              </tr>
            );
          } else if (item.type === 'image') {
            return (<tr>
              {this.renderTh(item)}
              <td className={classnames({ 'js-img_resize_cf': item.resize })}>
                {preview ? null : `<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
                <img src={`%{ARCHIVES_DIR}{${item.name}@path}`} className={classnames({ 'acms-admin-img-responsive': acmscss, 'js-img_resize_preview': item.resize })} style={item.normalSize ? { width: `${item.normalSize}px` } : null} alt={`{${item.name}@alt}`} />
                <input type="hidden" name={`${item.name}{id}@old`} value={`{${item.name}@path}`} />
                <div className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                  <input type="checkbox" name={`${item.name}{id}@edit`} value="delete" id={`input-checkbox-${item.name}{id}@edit`} />
                  <label htmlFor={`input-checkbox-${item.name}{id}@edit`}>
                    {acmscss &&
                    <i className="acms-admin-ico-checkbox" />
                    }
                  削除
                  </label>
                </div>
                {preview ? null : '<!-- ELSE -->'}
                <img src={`%{ARCHIVES_DIR}{${item.name}@path}`} className={classnames({ 'acms-admin-img-responsive': acmscss, 'js-img_resize_preview': item.resize })} style={item.normalSize ? { width: `${item.normalSize}px`, display: 'none' } : { display: 'none' }} />
                {preview ? null : '<!-- END_IF -->'}
                <input type="file" name={`${item.name}{id}`} size="20" className={classnames({ 'js-img_resize_input': item.resize })} /><br />
                {item.alt && <Fragment>代替テキスト:<input type="text" name={`${item.name}{id}@alt`} value={`{${item.name}@alt}`} size="40" /></Fragment>}
                <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
                <input type="hidden" name={`${item.name}{id}:extension`} value="image" />
                {item.normalSize && <input type="hidden" name={`${item.name}{id}@${item.normal}`} value={item.normalSize} />}
                {item.tiny && <input type="hidden" name={`${item.name}{id}@${item.tiny}`} value={item.tinySize} />}
                {item.large && <input type="hidden" name={`${item.name}{id}@${item.large}`} value={item.largeSize} />}
                {item.square && <input type="hidden" name={`${item.name}{id}@${item.square}`} value={item.squareSize} />}
                <input type="hidden" name={`${item.name}{id}@filename`} value="" />
                {this.renderValidator(item, acmscss)}
              </td>
            </tr>);
          } else if (item.type === 'file') {
            let src = '/images/fileicon/';
            let alt = 'file';
            if (item.extension) {
              src += `${item.extension}.svg`;
              if (item.extension === 'svg') {
                src = `%{ARCHIVES_DIR}{${item.name}@path}`;
              }
              alt += item.extension;
            } else {
              src += 'file.svg';
            }

            return (<tr>
              {this.renderTh(item, acmscss)}
              <td>
                {preview ? null : `<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
                <input type="hidden" name={`${item.name}{id}@old`} value={`{${item.name}@path}`} />
                <input type="hidden" name={`${item.name}{id}@secret`} value={`{${item.name}@secret}`} />
                <input type="hidden" name={`${item.name}{id}@fileSize`} value={`{${item.name}@fileSize}`} />
                <label htmlFor={`input-checkbox-${item.name}{id}@edit`} className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                  <input type="checkbox" name={`${item.name}{id}@edit`} value="delete" id={`input-checkbox-${item.name}{id}@edit`} />
                  {acmscss && <i className="acms-admin-ico-checkbox" />}
                  削除
                </label>
                <a href={`%{ARCHIVES_DIR}{${item.name}@path}`}><img src={src} width="64" height="64" alt={alt} /></a>
                {preview ? null : '<!-- END_IF -->'}
                <input type="file" name={`${item.name}{id}`} />
                <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
                <input type="hidden" name={`${item.name}{id}@baseName`} value={`{${item.name}@baseName}`} />
                <input type="hidden" name={`${item.name}{id}:extension`} value="file" />
                {item.extension && <input type="hidden" name={`${item.name}{id}@extension`} value={item.extension} />}
                {item.fileNameMethod === 'random' && item.fileName && <input type="hidden" name={`${item.name}{id}@filename`} value="" />}
                {item.fileNameMethod === 'fix' && item.fileName && <input type="hidden" name={`${item.name}{id}@filename`} value={item.fileName} />}
                {item.fileNameMethod === 'asis' && <input type="hidden" name={`${item.name}{id}@filename`} value="@rawfilename" />}
                {this.renderValidator(item, acmscss)}
              </td>
            </tr>);
          } else if (item.type === 'lite-editor') {
            return (
              <tr>
                {this.renderTh(item, acmscss)}
                <td>
                  <textarea name={`${item.name}{id}`} className={classnames('js-lite-editor-field', { 'acms-admin-form-width-full': acmscss })}>{`{${item.name}}`}</textarea>
                  <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
                  {this.renderValidator(item, acmscss)}
                  {this.renderNoSearch(item, acmscss)}
                </td>
              </tr>
            );
          } else if (item.type === 'rich-editor') {
            return (
              <tr>
                {this.renderTh(item, acmscss)}
                <td>
                  <ConditionalWrap
                    condition={item.useExpand} wrap={children => <div className="js-expand js-acms-expand">
                      <div className="js-acms-expand-inner">
                        <button className="js-expand-btn js-acms-expand-btn" type="button">
                          <i className="acms-admin-icon acms-admin-icon-expand-arrow js-expand-icon" />
                        </button>
                        {children}
                      </div>
                    </div>}
                  >
                    <div className="js-smartblock" data-heading-start={item.startHeadingLevel} data-heading-end={item.endHeadingLevel}>
                      <div className="js-smartblock-edit" />
                      <input className="js-smartblock-body" type="hidden" name={`${item.name}{id}`} value={`{${item.name}@html}`} />
                      <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
                      <input type="hidden" name={`${item.name}{id}:extension`} value="rich-editor" />
                    </div>
                  </ConditionalWrap>
                </td>
              </tr>
            );
          } else if (item.type === 'table') {
            return (
              <tr>
                {this.renderTh(item, acmscss)}
                <td>
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
                      <input type="hidden" className="js-editable-table-dest" value={`{${item.name}}`} name={`${item.name}{id}`} />
                      <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
                    </div>
                  </div>
                </td>
              </tr>
            );
          } else if (item.type === 'media') {
            return (<tr>
              {this.renderTh(item)}
              <td className="js-media-field">
                {!item.useDropArea && <Fragment>
                  <div>
                    { `<!-- BEGIN_IF [{${item.name}@thumbnail}/nem] -->`}
                    <ConditionalWrap
                      condition={item.mediaType === 'file'}
                      wrap={children => <a href={`%{MEDIA_ARCHIVES_DIR}{${item.name}@path}`}>{children}</a>}
                    >
                      <img
                        src={`{${item.name}@thumbnail}`}
                        className={classnames('js-preview', { 'acms-admin-img-responsive': acmscss })}
                        alt={`{${item.name}@alt}`}
                        {...(item.mediaType === 'file' && { style: {
                          width: '64px',
                          height: 'auto'
                        } })}
                      />
                    </ConditionalWrap>
                    {'<!-- ELSE -->'}
                    <img
                      src=""
                      {...(item.mediaType === 'file' ?
                        { style: {
                          width: '64px',
                          height: 'auto',
                          display: 'none'
                        } } :
                        { style: { display: 'none' } })}
                      className={classnames('js-preview', { 'acms-admin-img-responsive': acmscss })}
                    />
                    {'<!-- END_IF -->'}
                    <p className="js-text acms-admin-text-danger" style={{ display: 'none' }}>許可されていないファイルのため挿入できません。</p>
                  </div>
                  <div className="acms-admin-margin-top-mini">
                    <button type="button" className={classnames('js-insert', { 'acms-admin-btn': acmscss })} data-type={item.mediaType ? item.mediaType : 'all'}>メディアを選択</button>
                    <button type="button" className={classnames('js-insert', { 'acms-admin-btn': acmscss })} data-type={item.mediaType ? item.mediaType : 'all'} data-mode="upload">アップロード</button>
                    <button type="button" className={classnames('js-edit', { 'acms-admin-btn': acmscss })}>メディアを編集</button>
                    <button type="button" className={classnames('js-remove', { 'acms-admin-btn acms-admin-btn-danger': acmscss })}>削除</button>
                  </div>
                </Fragment>}
                {item.useDropArea && <Fragment>
                  <div className="js-droparea" data-thumbnail={`{${item.name}@thumbnail}`} data-type={item.mediaType ? item.mediaType : 'all'} data-thumbnail-type={`{${item.name}@type}`} data-width={`${item.dropAreaWidth}px`} data-height={`${item.dropAreaHeight}px`} />
                  <p className="js-text acms-admin-text-danger" style={{ display: 'none' }}>許可されていないファイルのため挿入できません。</p>
                  <div className="acms-admin-margin-top-mini">
                    <button type="button" className={classnames('js-insert', { 'acms-admin-btn': acmscss })} data-type={item.mediaType ? item.mediaType : 'all'}>メディアを選択</button>
                  </div>
                </Fragment>}
                <input type="hidden" name={`${item.name}{id}`} value={preview ? '' : `{${item.name}}`} className="js-value" />
                <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
                <input type="hidden" name={`${item.name}{id}:extension`} value="media" />
                {this.renderValidator(item, acmscss)}
              </td>
            </tr>);
          }
        })}
      </table>
    );
  }
}

UnitSource.defaultProps = {
  preview: false
};
