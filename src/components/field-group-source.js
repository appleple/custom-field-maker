import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

const ConditionalWrap = ({ condition, wrap, children }) => condition ? wrap(children) : children;

export default class FieldGroupSource extends Component {

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

  renderValidator(item, acmscss, bottom = false) {
    const { preview, jsValidator } = this.props;

    if (!item.openValidator) {
      return null;
    }

    return (<Fragment>
      {item.validator.map((validator) => {
        const name = item.type === 'file' || item.type === 'image' ? `${item.name}@path` : item.name;
        const classSuffix = bottom ? '1' : `{${name}:v#${validator.option}}`;

        return (<Fragment>
          {(!jsValidator && !bottom) && <Fragment>
            {validator.message && <Fragment>
              {preview ? null : `<!-- BEGIN ${name}:validator#${validator.option} -->`}
              <p className={classnames({ 'acms-admin-text-error': acmscss })}>{validator.message}</p>
              {preview ? null : `<!-- END ${name}:validator#${validator.option} -->`}
            </Fragment>}
          </Fragment>}
          {jsValidator &&
            <div data-validator-label={`${name}-v-${validator.option}`} className={`validator-result-${classSuffix}`}>
              <p className="error-text">
                <span className="acms-admin-icon acms-admin-icon-attention" />{validator.message}
              </p>
            </div>
          }
        </Fragment>);
      })}
    </Fragment>);
  }

  wrapTable(children, title) {
    const { direction } = this.props;
    return (<ConditionalWrap
      condition={direction === 'vertical'}
      wrap={child => <tr>
        <th>{title}</th>
        {child}
      </tr>}
    >{children}</ConditionalWrap>);
  }


  render() {
    const { groupName, groupTitle, acmscss, groupitems, preview, direction } = this.props;
    const groupLength = groupitems.length;

    return (<Fragment>
      {groupTitle && <h2 className={classnames({ 'acms-admin-admin-title2': acmscss })}>{groupTitle}</h2>}
      {groupName && <table className={classnames('js-fieldgroup-sortable', { 'adminTable acms-admin-table-admin-edit': acmscss })} ref={table => this.table = table}>
        <thead className={classnames({ 'acms-admin-hide-sp': acmscss })}>
          <tr>
            <th className={classnames({ 'acms-admin-table-left acms-admin-admin-config-table-item-handle': acmscss })}>&nbsp;</th>
            {direction === 'horizontal' &&
              <Fragment>
                {groupitems.map(item => (<th className={classnames({ 'acms-admin-table-left': acmscss })}>
                  {item.title}
                  {item.tooltip && <i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip={item.tooltip} />}
                </th>))}
              </Fragment>
            }
            {direction === 'vertical' && <th />}
            <th className={classnames({ 'acms-admin-table-left acms-admin-admin-config-table-action': acmscss })}>削除</th>
          </tr>
        </thead>
        <tbody>
          {preview ? null : `<!-- BEGIN ${groupName}:loop -->`}
          <tr className="sortable-item">
            <td className="item-handle acms-admin-table-nowrap">
              {acmscss && <i className="acms-admin-icon-sort" />}
            </td>
            <ConditionalWrap
              condition={direction === 'vertical'}
              wrap={children => <td><table>{children}</table></td>}
            >
              {groupitems.map((item) => {
                if (item.type === 'text') {
                  return this.wrapTable(<td>
                    <input type="text" name={`${item.name}[]`} value={`{${item.name}}`} className={classnames({ 'acms-admin-form-width-full': acmscss })} />
                    {this.renderValidator(item, acmscss, false)}
                  </td>, item.title);
                } else if (item.type === 'textarea') {
                  return this.wrapTable(<td>
                    <textarea name={`${item.name}[]`} className={classnames({ 'acms-admin-form-width-full': acmscss })}>{`{${item.name}}`}</textarea>
                    {this.renderValidator(item, acmscss, false)}
                  </td>, item.title);
                } else if (item.type === 'select') {
                  return this.wrapTable(<td>
                    <select name={`${item.name}[]`} className={classnames({ 'acms-admin-form-width-full': acmscss })}>
                      <option value="" />
                      {item.option.map((option) => {
                        if (!option.label) {
                          return null;
                        }
                        return <option value={option.value} data-tmp={`{${item.name}:selected#${option.value}}`}>{option.label}</option>;
                      })}
                    </select>
                    {this.renderValidator(item, acmscss, false)}
                  </td>, item.title);
                } else if (item.type === 'radio') {
                  return this.wrapTable(<td>
                    {item.option.map((option) => {
                      if (!option.label) {
                        return null;
                      }
                      return (<div className={classnames({ 'acms-admin-form-radio': acmscss })}>
                        <input type="radio" name={`${item.name}[]`} value={option.value} data-tmp={`{${item.name}:checked#${option.value}}`} id={`input-radio-${item.name}-${option.value}`} />
                        <label htmlFor={`input-radio-${item.name}-${option.value}`}>
                          {acmscss && <i className="acms-admin-ico-radio" />}
                          {option.label}
                        </label>
                      </div>);
                    })}
                    {this.renderValidator(item, acmscss, false)}
                  </td>, item.title);
                } else if (item.type === 'file') {
                  let src = '/images/fileicon/';
                  let alt = 'file';
                  if (item.extension) {
                    src += `${item.extension}.svg`;
                    alt += item.extension;
                  } else {
                    src += 'file.svg';
                  }

                  return this.wrapTable(<td>
                    {preview ? null : `<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
                    <div className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                      <input type="checkbox" name={`${item.name}@edit[]`} value="delete" id={`input-checkbox-${item.name}{i}@edit[]`} />
                      <label htmlFor={`input-checkbox-${item.name}{i}@edit[]`}>
                        {acmscss && <i className="acms-admin-ico-checkbox" />} 削除</label>
                    </div>
                    <a href={`%{ARCHIVES_DIR}{${item.name}@path}`}>
                      <img src={src} width="64" height="64" alt={alt} />
                    </a>
                    {preview ? null : '<!-- END_IF -->'}
                    <input type="hidden" name={`${item.name}@old[]`} value={`{${item.name}@path}`} />
                    {item.extension && <input type="hidden" name={`${item.name}@extension[]`} value={item.extension} />}
                    {item.fileNameMethod === 'random' && item.fileName && <input type="hidden" name={`${item.name}@filename[]`} value="" />}
                    {item.fileNameMethod === 'fix' && item.fileName && <input type="hidden" name={`${item.name}@filename[]`} value={item.fileName} />}
                    {item.fileNameMethod === 'asis' && <input type="hidden" name={`${item.name}@filename[]`} value="@rawfilename" />}
                    <input type="file" name={`${item.name}[]`} />
                    {this.renderValidator(item, acmscss, false)}
                  </td>, item.title);
                } else if (item.type === 'image') {
                  const style = {};
                  if (item.normalSize) {
                    style.maxWidth = `${item.normalSize}px`;
                  }
                  const hiddenStyle = Object.assign({}, style, { display: 'none' });

                  return this.wrapTable(<td className={classnames({ 'js-img_resize_cf': item.resize })}>
                    {preview ? null : `<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
                    <img
                      src={`%{ARCHIVES_DIR}{${item.name}@path}`}
                      className={classnames({ 'js-img_resize_preview': item.resize })} style={style} alt={`{${item.name}@alt}`}
                    />
                    <input type="hidden" name={`${item.name}@old[]`} value={`{${item.name}@path}`} />
                    <label htmlFor={`input-checkbox-${item.name}@edit[]`} className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                      <input type="checkbox" name={`${item.name}@edit[]`} value="delete" id={`input-checkbox-${item.name}@edit[]`} />
                      {acmscss && <i className="acms-admin-ico-checkbox" />}
                      削除
                    </label>
                    {preview ? null : '<!-- ELSE -->'}
                    <img
                      src={`%{ARCHIVES_DIR}{${item.name}@path}`}
                      className={classnames({ 'js-img_resize_preview': item.resize })} style={hiddenStyle}
                    />
                    {preview ? null : '<!-- END_IF -->'}
                    <input type="file" name={`${item.name}[]`} className={classnames({ 'js-img_resize_input': item.resize })} /><br />
                    {item.alt && <Fragment>代替テキスト:<input type="text" name={`${item.name}@alt[]`} value={`{${item.name}@alt}`} size="40" /></Fragment>}
                    {item.normalSize && <input type="hidden" name={`${item.name}@${item.normal}[]`} value={item.normalSize} />}
                    {item.tinySize && <input type="hidden" name={`${item.name}@${item.tiny}[]`} value={item.tinySize} />}
                    {item.largeSize && <input type="hidden" name={`${item.name}@${item.large}[]`} value={item.largeSize} />}
                    {item.square && <input type="hidden" name={`${item.name}@${item.square}[]`} value={item.squareSize} />}
                    {this.renderValidator(item, acmscss, false)}
                  </td>, item.title);
                } else if (item.type === 'media') {
                  return this.wrapTable(<td className="js-media-field">
                    {!item.useDropArea && <Fragment>
                      <div>
                        {`<!-- BEGIN_IF [{${item.name}@thumbnail}/nem] -->`}
                        <ConditionalWrap
                          condition={item.mediaType === 'file'}
                          wrap={children => <a href={`%{MEDIA_ARCHIVES_DIR}{${item.name}@path}`}>{children}</a>}
                        >
                          <img
                            src={`{${item.name}@thumbnail}`}
                            className={classnames('js-preview', { 'acms-admin-img-responsive': acmscss })}
                            alt=""
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
                      <div className={classnames({ 'acms-admin-margin-top-mini': acmscss })}>
                        <button type="button" className={classnames('js-insert', { 'acms-admin-btn': acmscss })} data-type={item.mediaType ? item.mediaType : 'all'}>メディアを選択</button>
                        <button type="button" className={classnames('js-insert', { 'acms-admin-btn': acmscss })} data-type={item.mediaType ? item.mediaType : 'all'} data-mode="upload">アップロード</button>
                        <button type="button" className={classnames('js-edit', { 'acms-admin-btn': acmscss })}>メディアを編集</button>
                        <button type="button" className={classnames('js-remove', { 'acms-admin-btn acms-admin-btn-danger': acmscss })}>削除</button>
                      </div>
                    </Fragment>}
                    {item.useDropArea && <Fragment>
                      <div className="js-droparea" data-thumbnail={`{${item.name}@thumbnail}`} data-type={item.mediaType ? item.mediaType : 'all'} data-width={`${item.dropAreaWidth}px`} data-height={`${item.dropAreaHeight}px`} />
                      <p className="js-text acms-admin-text-danger" style={{ display: 'none' }}>許可されていないファイルのため挿入できません。</p>
                      <div className="acms-admin-margin-top-mini">
                        <button type="button" className={classnames('js-insert', { 'acms-admin-btn': acmscss })} data-type={item.mediaType ? item.mediaType : 'all'}>メディアを選択</button>
                      </div>
                    </Fragment>}
                    <input type="hidden" name={`${item.name}[]`} value={preview ? '' : `{${item.name}}`} className="js-value" />
                    {this.renderValidator(item, acmscss, false)}
                  </td>, item.title);
                } else if (item.type === 'lite-editor') {
                  return this.wrapTable(<td>
                    <textarea name={`${item.name}[]`} className={classnames('js-lite-editor-field', { 'acms-admin-form-width-full': acmscss })}>{`{${item.name}}`}</textarea>
                    {this.renderValidator(item, acmscss, false)}
                  </td>, item.title);
                } else if (item.type === 'rich-editor') {
                  return this.wrapTable(<td>
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
                        <input className="js-smartblock-body" type="hidden" name={`${item.name}[]`} value={`{${item.name}@html}`} />
                        <input type="hidden" name={`${item.name}:extension`} value="rich-editor" />
                      </div>
                    </ConditionalWrap>
                  </td>, item.title);
                } else if (item.type === 'table') {
                  return this.wrapTable(<td>
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
                        <input type="hidden" className="js-editable-table-dest" value={`{${item.name}}`} name={`${item.name}[]`} />
                      </div>
                    </div>
                  </td>, item.title);
                }
              })}
            </ConditionalWrap>
            <td className="acms-admin-table-nowrap">
              <input type="button" className={classnames('item-delete', { 'acms-admin-btn-admin acms-admin-btn-admin-danger': acmscss })} value="削除" />
            </td>
          </tr>
          {preview ? null : `<!-- END ${groupName}:loop -->`}
          {preview ? null : <tr className="sortable-item item-template">
            <td className="item-handle acms-admin-table-nowrap">{acmscss && <i className="acms-admin-icon-sort" />}</td>
            <ConditionalWrap
              condition={direction === 'vertical'}
              wrap={children => <td><table>{children}</table></td>}
            >
              {groupitems.map((item) => {
                if (item.type === 'text') {
                  return this.wrapTable(<td>
                    <input type="text" name={`${item.name}[]`} value="" className={classnames({ 'acms-admin-form-width-full': acmscss })} />
                    {this.renderValidator(item, acmscss, true)}
                  </td>, item.title);
                } else if (item.type === 'textarea') {
                  return this.wrapTable(<td>
                    <textarea name={`${item.name}[]`} className={classnames({ 'acms-admin-form-width-full': acmscss })} />
                    {this.renderValidator(item, acmscss, true)}
                  </td>, item.title);
                } else if (item.type === 'select') {
                  return this.wrapTable(<td>
                    <select name={`${item.name}[]`} className={classnames({ 'acms-admin-form-width-full': acmscss })}>
                      <option value="" />
                      {item.option.map(option => (<option value={option.value}>{option.label}</option>))}
                    </select>
                    {this.renderValidator(item, acmscss, true)}
                  </td>, item.title);
                } else if (item.type === 'radio') {
                  return this.wrapTable(<td>
                    {item.option.map(option => (
                      <div className={classnames({ 'acms-admin-form-radio': acmscss })}>
                        <input type="radio" name={`${item.name}[]`} value={option.value} id={`input-radio-${item.name}-${option.value}`} />
                        <label htmlFor={`input-radio-${item.name}-${option.value}`}>
                          {acmscss && <i className="acms-admin-ico-radio" />}
                          {option.label}
                        </label>
                      </div>
                      ))}
                    {this.renderValidator(item, acmscss, true)}
                  </td>, item.title);
                } else if (item.type === 'file') {
                  return this.wrapTable(<td>
                    <input type="file" name={`${item.name}[]`} />
                    {item.extension && <input type="hidden" name={`${item.name}@extension[]`} value={item.extension} />}
                    {item.fileNameMethod === 'random' && item.fileName && <input type="hidden" name={`${item.name}@filename[]`} value="" />}
                    {item.fileNameMethod === 'fix' && item.fileName && <input type="hidden" name={`${item.name}@filename[]`} value={item.fileName} />}
                    {item.fileNameMethod === 'asis' && <input type="hidden" name={`${item.name}@filename[]`} value="@rawfilename" />}
                    {this.renderValidator(item, acmscss, true)}
                  </td>, item.title);
                } else if (item.type === 'image') {
                  const style = {};
                  if (item.normalSize) {
                    style.maxWidth = `${item.normalSize}px`;
                  }
                  const hiddenStyle = Object.assign({}, style, { display: 'none' });

                  return this.wrapTable(<td className={classnames({ 'js-img_resize_cf': item.resize })}>
                    <img src="" style={hiddenStyle} className="js-img_resize_preview" />
                    <input type="file" name={`${item.name}[]`} style={style} /><br />
                    {item.alt && <Fragment>代替テキスト:<input type="text" name={`${item.name}@alt[]`} value="" size="40" /></Fragment>}
                    {item.normalSize && <input type="hidden" name={`${item.name}@${item.normal}[]`} value={item.normalSize} />}
                    {item.tiny && <input type="hidden" name={`${item.name}@${item.tiny}[]`} value={item.tinySize} />}
                    {item.large && <input type="hidden" name={`${item.name}@${item.large}[]`} value={item.largeSize} />}
                    {item.square && <input type="hidden" name={`${item.name}@${item.square}[]`} value={item.squareSize} />}
                    {this.renderValidator(item, acmscss, true)}
                  </td>, item.title);
                } else if (item.type === 'media') {
                  return this.wrapTable(<td className="js-media-field">
                    {!item.useDropArea && <Fragment>
                      <div>
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
                      <div className="js-droparea" data-type={item.mediaType ? item.mediaType : 'all'} data-thumbnail-type={`{${item.name}@type}`} data-width={`${item.dropAreaWidth}px`} data-height={`${item.dropAreaHeight}px`} />
                      <p className="js-text acms-admin-text-danger" style={{ display: 'none' }}>許可されていないファイルのため挿入できません。</p>
                      <div className="acms-admin-margin-top-mini">
                        <button type="button" className={classnames('js-insert', { 'acms-admin-btn': acmscss })} data-type={item.mediaType ? item.mediaType : 'all'}>メディアを選択</button>
                      </div>
                    </Fragment>}
                    <input type="hidden" name={`${item.name}[]`} value="" className="js-value" />
                    {this.renderValidator(item, acmscss, true)}
                  </td>, item.title);
                } else if (item.type === 'lite-editor') {
                  return this.wrapTable(<td>
                    <textarea name={`${item.name}[]`} className={classnames('js-lite-editor-field', { 'acms-admin-form-width-full': acmscss })} />
                    {this.renderValidator(item, acmscss, false)}
                  </td>, item.title);
                } else if (item.type === 'rich-editor') {
                  return this.wrapTable(<td>
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
                      <div className="js-smart-block" data-heading-start={item.startHeadingLevel} data-heading-end={item.endHeadingLevel}>
                        <div className="js-smart-block-edit" />
                        <input className="js-smart-block-body" type="hidden" name={`${item.name}[]`} value="" />
                      </div>
                    </ConditionalWrap>
                  </td>, item.title);
                } else if (item.type === 'table') {
                  return this.wrapTable(<td>
                    <div className="js-editable-table-field">
                      <div className="js-editable-table">
                        {`<!-- BEGIN_IF [{${item.name}}[delnl]/nem] -->\n`}
                        {`{${item.name}}[raw]`}
                        {'<!-- ELSE -->'}
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
                        {'<!-- END_IF -->'}
                        <input type="hidden" className="js-editable-table-dest" value="" name={`${item.name}[]`} />
                      </div>
                    </div>
                  </td>, item.title);
                }
              })}
            </ConditionalWrap>
            <td className="acms-admin-table-nowrap">
              <input type="button" className={classnames('item-delete', { 'acms-admin-btn-admin acms-admin-btn-admin-danger': acmscss })} value="削除" />
            </td>
          </tr>}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={direction === 'horizontal' ? groupLength + 2 : 3}>
              <input type="button" className={classnames('item-insert', { 'acms-admin-btn-admin': acmscss })} value="追加" />
            </td>
          </tr>
        </tfoot>
      </table>}
      {groupName && <Fragment>
        {groupitems.map(item => (<Fragment>
          {item.type === 'image' && <Fragment>
              {item.square && <Fragment>
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@squarePath`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@squareAlt`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@squareX`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@squareY`} />
              </Fragment>}
              {item.large && <Fragment>
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@largePath`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@largeAlt`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@largeX`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@largeY`} />
              </Fragment>}
              {item.tiny && <Fragment>
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@tinyPath`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@tinyAlt`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@tinyX`} />
                <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@tinyY`} />
              </Fragment>}
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@path`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@alt`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@x`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@y`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@edit`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@old`} />
            <input type="hidden" name={`${item.name}:extension`} value="image" />
            </Fragment>}
          {item.type === 'file' && <Fragment>
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@path`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@alt`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@edit`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@old`} />
            <input type="hidden" name={`${item.name}:extension`} value="file" />
            </Fragment>}
          {item.type === 'media' && <Fragment>
            <input type="hidden" name={`${item.name}:extension`} value="media" />
            </Fragment>}
          {item.type === 'rich-editor' && <Fragment>
            <input type="hidden" name={`${item.name}:extension`} value="rich-editor" />
          </Fragment>}
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
        </Fragment>))}
        <input type="hidden" name="field[]" value={`@${groupName}`} />

      </Fragment>}
    </Fragment>);
  }
}

FieldGroupSource.defaultProps = {
  preview: false
};
