import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

export default class UnitGroupSource extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { unitGroupName, unitGroupTitle, acmscss, unitgroupitems, preview } = this.props;
    const groupLength = unitgroupitems.length;

    return (<Fragment>
      {unitGroupTitle && <h2 className={classnames({ 'acms-admin-admin-title2': acmscss })}>{unitGroupTitle}</h2>}
      {unitGroupName && <table className={classnames('js-fieldgroup-sortable', { 'adminTable acms-admin-table-admin-edit': acmscss })}>
        <thead className={classnames({ 'acms-admin-hide-sp': acmscss })}>
          <tr>
            <th className={classnames({ 'acms-admin-table-left acms-admin-admin-config-table-item-handle': acmscss })}>&nbsp;</th>
            {unitgroupitems.map((item) => {
              return (<th className={classnames({ 'acms-admin-table-left': acmscss })}>
                {item.title}
                {item.tooltip && <i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="{tooltip}"></i>}
              </th>);
            })}
            <th className={classnames({ 'acms-admin-table-left acms-admin-admin-config-table-action': acmscss })}>削除</th>
          </tr>
        </thead>
        <tbody>
          {preview ? null : `<!-- BEGIN ${unitGroupName}:loop -->`}
          <tr className="sortable-item">
            <td className="item-handle">
              {acmscss && <i className="acms-admin-icon-sort"></i>}
            </td>
            {unitgroupitems.map((item) => {
              if (item.type === 'text') {
                return (<td>
                  <input type="text" name={`${item.name}{id}[]`} value={`{${item.name}}`} className={classnames({ 'acms-admin-form-width-full': acmscss })} />
                </td>);
              } else if (item.type === 'textarea') {
                return (<td>
                  <textarea name={`${item.name}{id}[]`} className={classnames({ 'acms-admin-form-width-full': acmscss })}>{`{${item.name}}`}</textarea>
                </td>);
              } else if (item.type === 'select') {
                return (<td>
                  <select name={`${item.name}{id}[]`} className={classnames({ 'acms-admin-form-width-full': acmscss })}>
                    <option value=""></option>
                    {item.option.map((option) => {
                      if (!option.label) {
                        return null;
                      }
                      return <option value={option.value} data-tmp={`{${item.name}:selected#${option.value}}`}>{option.label}</option>
                    })}
                  </select>
                </td>);
              } else if (item.type === 'radio') {
                return (<td>
                  {item.option.map((option) => {
                    if (!option.label) {
                      return null;
                    }
                    return (<div className={classnames({ 'acms-admin-form-radio': acmscss })}>
                      <input type="radio" name={`${item.name}{id}[]`} value={option.value} data-tmp={`{${item.name}:checked#${option.value}}`} id={`input-radio-${item.name}-{id}-${option.value}`} />
                      <label htmlFor={`input-radio-${item.name}-{id}-${option.value}`}>
                        {acmscss && <i class="acms-admin-ico-radio"></i>}
                        {option.label}
                      </label>
                    </div>);
                  })}
                </td>);
              } else if (item.type === 'file') {
                let src = "/images/fileicon/";
                let alt = 'file';
                if (item.extension) {
                  src += `${item.extension}.gif`;
                  alt += item.extension;
                } else {
                  src += 'file.gif';
                }

                return (<td>
                  {preview ? null : `<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
                  <div className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                    <input type="checkbox" name={`${item.name}@edit[]`} value="delete" id={`input-checkbox-${item.name}@edit`} />
                    <label for="input-checkbox-{name}@edit">
                      {acmscss && <i class="acms-admin-ico-checkbox"></i>} 削除</label>
                  </div>
                  <a href={`%{ARCHIVES_DIR}{${item.name}@path}`}>
                    <img src={src} width="64" height="64" alt={alt} />
                  </a>
                  {preview ? null : `<!-- END_IF -->`}
                  <input type="hidden" name={`${item.name}{id}@old[]`} value={`{${item.name}@path}`} />
                  <input type="file" name={`${item.name}{id}[]`} /><br />
                  {preview ? null : `<!-- BEGIN alt:veil -->`}
                  代替テキスト:
                  <input type="text" name={`${item.name}@alt[]`} value={`{${item.name}@alt}`} size="40" />
                  {preview ? null : `<!-- END alt:veil -->`}
                </td>)
              } else if (item.type === 'image') {
                const style = {};
                if (item.normalSize) {
                  style.width = `${item.normalSize}px`;
                }
                const hiddenStyle = Object.assign({}, style, { 'display': 'none' });

                return (<td className={classnames({ 'js-img_resize_cf': item.resize })}>
                  {preview ? null : `<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
                  <div>
                    <img
                      src={`%{ARCHIVES_DIR}{${item.name}@${item.path}}`}
                      className={classnames({ 'js-img_resize_preview': item.resize })} style={style} />
                  </div>
                  <input type="hidden" name={`${item.name}{id}@old[]`} value={`{${item.name}@path}`} />
                  {preview ? null : `<!-- ELSE -->`}
                  <img
                    src={`%{ARCHIVES_DIR}{${item.name}@${item.path}}`}
                    className={classnames({ 'js-img_resize_preview': item.resize })} style={hiddenStyle} />
                  {preview ? null : `<!-- END_IF -->`}
                  <input type="file" name={`${item.name}{id}[]`} className={classnames({ 'js-img_resize_input': item.resize })} /><br />
                  {item.alt && <div>代替テキスト:<input type="text" name={`${item.name}{id}@alt[]`} value={`{${item.name}@alt}`} size="40" /></div>}
                  {item.normal && item.normalSize && <input type="hidden" name={`${item.name}{id}@${item.normal}[]`} value={item.normalSize} />}
                  {item.tiny && item.tinySize && <input type="hidden" name={`${item.name}{id}@${item.tiny}[]`} value={item.tinySize} />}
                  {item.large && item.largeSize && <input type="hidden" name={`${item.name}{id}@${item.large}[]`} value={item.largeSize} />}
                  {item.square && item.squareSize && <input type="hidden" name={`${item.name}{id}@${item.square}[]`} value={item.squareSize} />}
                </td>)
              }
            })}
            <td>
              <input type="button" className={classnames("item-delete", { "acms-admin-btn-admin acms-admin-btn-admin-danger": acmscss })} value="削除" />
            </td>
          </tr>
          {preview ? null : `<!-- END ${unitGroupName}:loop -->`}
          <tr className="sortable-item item-template">
            <td class="item-handle">{acmscss && <i className="acms-admin-icon-sort"></i>}</td>
            {unitgroupitems.map((item) => {
              if (item.type === 'text') {
                return (<td>
                  <input type="text" name={`${item.name}{id}[]`} value="" className={classnames({ "acms-admin-form-width-full": acmscss })} />
                </td>);
              } else if (item.type === 'textarea') {
                return (<td>
                  <textarea name={`${item.name}{id}[]`} className={classnames({ "acms-admin-form-width-full": acmscss })}></textarea>
                </td>)
              } else if (item.type === 'select') {
                return (<td>
                  <select name={`${item.name}{id}[]`} className={classnames({ "acms-admin-form-width-full": acmscss })}>
                    <option value=""></option>
                    {item.option.map((option) => {
                      return (<option value={option.value}>{option.label}</option>);
                    })}
                  </select>
                </td>)
              } else if (item.type === 'radio') {
                return (<td>
                  {item.option.map((option) => {
                    return (
                      <div className={classnames({ 'acms-admin-form-radio': acmscss })}>
                        <input type="radio" name={`${item.name}{id}[]`} value={option.value} id={`input-radio-${item.name}-${option.value}`} />
                        <label htmlFor={`input-radio-${item.name}-${option.value}`}>
                          {acmscss && <i class="acms-admin-ico-radio"></i>}
                          {option.label}
                        </label>
                      </div>
                    );
                  })}
                </td>);
              } else if (item.type === 'file') {
                return (<td>
                  <input type="file" name={`${item.name}{id}[]`} />
                  {item.extension && <input type="hidden" name={`${item.name}{id}@extension[]`} value="{extension}" />}
                  {item.fileName && <input type="hidden" name={`${item.name}{id}@filename[]`} value="{fileName}" />}
                </td>);
              } else if (item.type === 'image') {
                const style = {};
                if (item.normalSize) {
                  style.width = `${item.normalSize}px`;
                }
                const hiddenStyle = Object.assign({}, style, { 'display': 'none' });

                return (<td className={classnames({ 'js-img_resize_cf': item.resize })}>
                  <img src="" style={hiddenStyle} class="js-img_resize_preview" />
                  <input type="file" name={`${item.name}{id}[]`} style={style} /><br />
                  {item.alt && <div>代替テキスト:<input type="text" name={`${item.name}{id}@alt[]`} value="" size="40" /></div>}
                  {item.normalSize && <input type="hidden" name={`${item.name}{id}@${item.normal}[]`} value={item.normalSize} />}
                  {item.tiny && <input type="hidden" name={`${item.name}{id}@${item.tiny}[]`} value={item.tinySize} />}
                  {item.large && <input type="hidden" name={`${item.name}{id}@${item.large}[]`} value={item.largeSize} />}
                  {item.square && <input type="hidden" name={`${item.name}{id}@${item.square}[]`} value={item.squareSize} />}
                </td>);
              }
            })}
            <td>
              <input type="button" className={classnames("item-delete", { "acms-admin-btn-admin acms-admin-btn-admin-danger": acmscss })} value="削除" />
            </td>
          </tr>
          <tfoot>
            <tr>
              <td colspan={groupLength}>
                <input type="button" className={classnames("item-insert", { "acms-admin-btn-admin": acmscss })} value="追加" />
              </td>
            </tr>
          </tfoot>
        </tbody>
      </table>}
      {unitGroupName && <Fragment>
        {unitgroupitems.map((item) => {
          return (<Fragment>
            {item.type === 'image' && <Fragment>
              {item.square && item.squareSize && <Fragment>
                <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@squarePath`} />
                <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@squareAlt`} />
                <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@squareX`} />
                <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@squareY`} />
              </Fragment>}
              {item.large && item.largeSize && <Fragment>
                <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@largePath`} />
                <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@largeAlt`} />
                <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@largeX`} />
                <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@largeY`} />
              </Fragment>}
              {item.tiny && item.tinySize && <Fragment>
                <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@tinyPath`} />
                <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}@tinyAlt`} />
                <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}@tinyX`} />
                <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}@tinyY`} />
              </Fragment>}
              <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@path`} />
              <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@alt`} />
              <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@x`} />
              <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@y`} />
              <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@edit`} />
              <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@old`} />
              <input type="hidden" name={`${item.name}:extension`} value="image" />
            </Fragment>}
            {item.type === 'file' && <Fragment>
              <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@path`} />
              <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@alt`} />
              <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@edit`} />
              <input type="hidden" name={`@${unitGroupName}[]`} value={`${item.name}{id}@old`} />
              <input type="hidden" name={`${item.name}{id}:extension`} value="file" />
            </Fragment>}
            <input type="hidden" name={`@${unitGroupName}{id}[]`} value={`${item.name}{id}`} />
            <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`}  />
            {item.noSearch && <input type="hidden" name={`${item.name}{id}:search`} value="0" />}
          </Fragment>);
        })}
        <input type="hidden" name="unit{id}[]" value={`@${unitGroupName}{id}`} />
      </Fragment>}
    </Fragment>);
  }
}

UnitGroupSource.defaultProps = {
  preview: false
}