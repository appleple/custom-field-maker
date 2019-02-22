import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

export default class FieldSource extends Component {

  constructor(props) {
    super(props);
  }

  renderValidator(item, acmscss) {
    const { preview, jsValidator } = this.props;

    if (!item.openValidator) {
      return null;
    }

    return (
      <Fragment>
        {item.validator.map((validator) => {
          if (!validator.option) {
            return null;
          }
          return (<Fragment>
            <input type="hidden" name={`${item.name}:v#${validator.option}`} value={validator.value} id={`${item.name}-v-${validator.option}`} />
            {!jsValidator && <Fragment>
              {validator.message && <Fragment>
              {preview ? null : `<!-- BEGIN ${item.name}:validator#${validator.option} -->`}
              <p className={classnames({ "acms-admin-text-error": acmscss })}>{validator.message}</p>
              {preview ? null : `<!-- END ${item.name}:validator#${validator.option} -->`}
              </Fragment>}
            </Fragment>}
            {jsValidator &&
            <div data-validator-label={`${item.name}-v-${validator.option}`} className={`validator-result-{${item.name}:v#${validator.option}}`}>
              <p className="error-text">
                <span className="acms-icon acms-icon-attension" />{validator.message}
              </p>
            </div>
            }
          </Fragment>);
        })}
        {item.converter && <input type="hidden" name={`${item.name}:c`} value={item.converter} />}
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
    const { jsValidator } = this.props;
    return (
      <th>
        {item.title}
        {item.tooltip &&
          <i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip={item.tooltip}></i>
        }
        {jsValidator &&
          <label className="valid-mark" data-validator={item.name}>
            <span className="acms-admin-icon acms-admin-icon-checklist"></span>
          </label>
        }
      </th>
    )
  }

  render() {
    const { acmscss, customfield, preview, jsValidator } = this.props;
    return (
    <Fragment>
      {jsValidator && '<!-- <form action="" method="post" class="js-validator" enctype="multipart/form-data"> -->'}
      <table className={classnames({ 'acms-admin-table-admin-edit': acmscss })}>
        {customfield.map(item => {
          if (item.type === 'text') {
            return (<tr>
              {this.renderTh(item, acmscss, jsValidator)}
              <td>
                <input type="text" name={item.name} value={`{${item.name}}`} className={classnames({ 'acms-admin-form-width-full': acmscss })} {...(jsValidator ? { 'data-validator': item.name } : {})} />
                <input type="hidden" name="field[]" value={item.name} />
                {this.renderValidator(item, acmscss)}
                {this.renderNoSearch(item)}
              </td>
            </tr>);
          } else if (item.type === 'textarea') {
            return (
              <tr>
                {this.renderTh(item, acmscss)}
                <td>
                  <textarea name={item.name} className={classnames({ "acms-admin-form-width-full": acmscss })} {...(jsValidator ? { 'data-validator': item.name } : {})}>{`{${item.name}}`}</textarea>
                  <input type="hidden" name="field[]" value={item.name} />
                  {this.renderValidator(item, acmscss)}
                  {this.renderNoSearch(item, acmscss)}
                </td>
              </tr>
            );
          } else if (item.type === 'select') {
            return (
              <tr>
                {this.renderTh(item, acmscss)}
                <td>
                  <select name={item.name} className={classnames({ "acms-admin-form-width-full": acmscss })}>
                    <option value=""></option>
                    {item.option.map(option => {
                      if (!option.label) {
                        return null;
                      } else {
                        return <option value={option.value} data-tmp={`{${item.name}:selected#${option.value}}`}>{option.label}</option>
                      }
                    })}
                  </select>
                  <input type="hidden" name="field[]" value={item.name} />
                  {this.renderValidator(item, acmscss)}
                  {this.renderNoSearch(item, acmscss)}
                </td>
              </tr>
            );
          } else if (item.type === 'radio') {
            return (
              <tr>
                {this.renderTh(item)}
                <td>
                  {item.option.map(option => {
                    if (!option.label) {
                      return null;
                    } else {
                      return (
                        <div className={classnames({ "acms-admin-form-radio": acmscss })}>
                          <input type="radio" name={item.name} value={option.value} data-tmp={`{${item.name}:checked#${option.value}}`} id={`input-radio-${item.name}-${option.value}`} />
                          <label htmlFor={`input-radio-${item.name}-${option.value}`}>
                            <i className="acms-admin-ico-radio"></i>
                            {option.label}
                          </label>
                        </div>
                      )
                    }
                  })}
                  <input type="hidden" name="field[]" value={item.name} />
                  {this.renderValidator(item, acmscss)}
                  {this.renderNoSearch(item, acmscss)}
                </td>
              </tr>
            );
          } else if (item.type === 'checkbox') {
            return (
              <tr>
                {this.renderTh(item)}
                <td>
                  {item.option.map(option => {
                    if (!option.label) {
                      return null;
                    } else {
                      return (
                        <div className={classnames({ "acms-admin-form-checkbox": acmscss })}>
                          <input type="checkbox" name={`${item.name}[]`} value={option.value} data-tmp={`{${item.name}:checked#${option.value}}`} id={`input-checkbox-${item.name}-${option.value}`} />
                          <label htmlFor={`input-checkbox-${item.name}-${option.value}`}>
                            <i className="acms-admin-ico-checkbox"></i>
                            {option.label}
                          </label>
                        </div>
                      )
                    }
                  })}
                  <input type="hidden" name="field[]" value={item.name} />
                  {this.renderValidator(item, acmscss)}
                  {this.renderNoSearch(item, acmscss)}
                </td>
              </tr>
            );
          } else if (item.type === 'image') {
            return (<tr>
              {this.renderTh(item)}
              <td className={classnames({ 'js-img_resize_cf': item.resize })}>
                {preview ? null : `<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
                <Fragment>
                  <img src={`%{ARCHIVES_DIR}{${item.name}@path}`} className={classnames({ 'acms-admin-img-responsive': acmscss, 'js-img_resize_preview': item.resize })} style={item.normalSize ? { width: `${item.normalSize}px` } : null} alt={`{${item.name}@alt}`} />
                </Fragment>
                <input type="hidden" name={`${item.name}@old`} value={`{${item.name}@path}`} />
                <div className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                  <input type="checkbox" name={`${item.name}@edit`} value="delete" id={`input-checkbox-${item.name}@edit`} />
                  <label htmlFor={`input-checkbox-${item.name}@edit`}>
                    {acmscss &&
                      <i className="acms-admin-ico-checkbox"></i>
                    }
                    削除
                </label>
                </div>
                {preview ? null : `<!-- ELSE -->`}
                <Fragment>
                  <img src={`%{ARCHIVES_DIR}{${item.name}@path}`} className={classnames({ 'acms-admin-img-responsive': acmscss, 'js-img_resize_preview': item.resize })} style={item.normalSize ? { width: `${item.normalSize}px`, display: 'none' } : { display: 'none' }} />
                </Fragment>
                {preview ? null : `<!-- END_IF -->`}
                <input type="file" name={item.name} size="20" className={classnames({ 'js-img_resize_input': item.resize })} /><br />
                {item.alt && <Fragment>代替テキスト:<input type="text" name={`${item.name}@alt`} value={`{${item.name}@alt}`} size="40" /></Fragment>}
                <input type="hidden" name="field[]" value={item.name} />
                <input type="hidden" name={`${item.name}:extension`} value="image" />
                {item.normalSize && <input type="hidden" name={`${item.name}@${item.normal}`} value={item.normalSize} />}
                {item.tiny && <input type="hidden" name={`${item.name}@${item.tiny}`} value={item.tinySize} />}
                {item.large && <input type="hidden" name={`${item.name}@${item.large}`} value={item.largeSize} />}
                {item.square && <input type="hidden" name={`${item.name}@${item.square}`} value={item.squareSize} />}
                <input type="hidden" name={`${item.name}@filename`} value="" />
                {this.renderValidator(item, acmscss)}
                {this.renderNoSearch(item, acmscss)}
              </td>
            </tr>);
          } else if (item.type === 'media') {
            return (<tr>
              {this.renderTh(item)}
              <td>
                <div>
                  { `<!-- BEGIN_IF [{${item.name}@thumbnail}/nem] -->`}
                  <img src={`{${item.name}@thumbnail}`} 
                    className={classnames({ 'acms-admin-img-responsive': acmscss })} 
                    style={item.normalSize ? { width: `${item.normalSize}px` } : null} 
                    alt={`{${item.name}@alt}`} 
                    id={`${item.name}-preview`}
                  />
                  {`<!-- ELSE -->`}
                  <img src="" 
                    style={{ display: 'none'}} 
                    className={classnames({ 'acms-admin-img-responsive': acmscss })} 
                    id={`${item.name}-preview`}
                  />
                  {`<!-- END_IF -->`}
                </div>
                <div class="acms-admin-margin-top-mini">
                  {`<!-- BEGIN_IF [{${item.name}@thumbnail}/nem] -->`}
                  <button class="js-media-edit acms-admin-btn" data-mid={`{${item.name}}`} data-preview={`#${item.name}-preview`} data-target={`#${item.name}-input`}>メディア編集</button>
                  {`<!-- END_IF -->`}
                  <button className={classnames("js-media-insert", {"acms-admin-btn": acmscss})} data-target={`#${item.name}-input`} data-preview={`#${item.name}-preview`}>メディア選択</button>
                </div>
                <input type="hidden" name={item.name} value={`{${item.name}}`} className={classnames({ 'acms-admin-form-width-full': acmscss })} id={`${item.name}-input`} />
                <input type="hidden" name="field[]" value={item.name} />
                <input type="hidden" name={`${item.name}:extension`} value="media" />
              </td>
            </tr>)
          } else if (item.type === 'file') {
            let src = "/images/fileicon/";
            let alt = 'file';
            if (item.extension) {
              src += `${item.extension}.gif`;
              alt += item.extension;
            } else {
              src += 'file.gif';
            }

            return (<tr>
              {this.renderTh(item, acmscss)}
              <td>
                {preview ? null : `<!-- BEGIN ${item.name}@path:veil -->`}
                <input type="hidden" name={`${item.name}@old`} value={`{${item.name}@path}`} />
                <input type="hidden" name={`${item.name}@secret`} value={`{${item.name}@secret}`} />
                <input type="hidden" name={`${item.name}@fileSize`} value={`{${item.name}@fileSize}`} />
                <label htmlFor={`input-checkbox-${item.name}@edit`} className={classnames({ "acms-admin-form-checkbox": acmscss })}>
                  <input type="checkbox" name={`${item.name}@edit`} value="delete" id={`input-checkbox-${item.name}@edit`} />
                  {acmscss && <i class="acms-admin-ico-checkbox"></i>}
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
                {this.renderValidator(item, acmscss)}
                {this.renderNoSearch(item, acmscss)}
              </td>
            </tr>);
          }
        })}
      </table>
      {jsValidator && '<!-- </form> -->'}
    </Fragment>
    )
  }
}

FieldSource.defaultProps = {
  preview: false
}
