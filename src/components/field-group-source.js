import React, { Component } from 'react';
import classnames from 'classnames';

export default class FieldGroupSource extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { groupName, groupTitle, acmscss, groupitems } = this.props;
    const groupLength = groupitems.length;

    return(<div>
    {groupTitle && <h2 className={classnames({'acms-admin-admin-title2': acmscss})}>{groupTitle}</h2>}
    {groupName && <table className={classnames('js-fieldgroup-sortable', {'adminTable acms-admin-table-admin-edit': acmscss})}>
      <thead className={classnames({'acms-admin-hide-sp': acmscss})}>
        <tr>
          <th className={classnames({'acms-admin-table-left acms-admin-admin-config-table-item-handle': acmscss})}>&nbsp;</th>
          {groupitems.map((item) => {
            return(<th className={classnames({'acms-admin-table-left': acmscss})}>
            {item.title}
            {item.tooltip &&<i class="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="{tooltip}"></i>}
          </th>);
          })}
          <th className={classnames({'acms-admin-table-left acms-admin-admin-config-table-action': acmscss})}>削除</th>
        </tr>
      </thead>
      <tbody>
        {`<!-- BEGIN ${groupName}:loop -->`}
        <tr className="sortable-item">
          <td className="item-handle">
            {acmscss && <i className="acms-admin-icon-sort"></i>}
          </td>
          {groupitems.map((item) => {
            if (item.type === 'text') {
              return (<td>
                <input type="text" name={`${item.name}[]`} value={`{${item.name}}`} className={classnames({'acms-admin-form-width-full': acmscss})} />
              </td>);
            } else if (item.type === 'textarea') {
              return (<td>
                <textarea name={`${item.name}[]`} className={classnames({'acms-admin-form-width-full': acmscss})}>{`{${item.name}}`}</textarea>
              </td>);
            } else if (item.type === 'select') {
              return (<td>
                <select name={`${item.name}[]`} className={classnames({'acms-admin-form-width-full': acmscss})}>
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
                  return (<div className={classnames({'acms-admin-form-radio': acmscss})}>
                    <input type="radio" name={`${item.name}[]`} value={item.value} data-tmp={`{${item.name}:checked#${option.value}}`} id={`input-radio-${item.name}-${option.value}`}/>
					          <label htmlFor={`input-radio-${item.name}-${option.value}`}>
                      {acmscss && <i class="acms-admin-ico-radio"></i>}
                      {label}
                    </label>
                  </div>);
                })}
              </td>);
            } else if (item.type === 'file') {
              let src = "/images/fileicon/";
              let alt = 'file';
              if (item.extension) {
                src += `${extension}.gif`;
                alt += extension;
              } else {
                src += 'file.gif';
              }

              return (<td>
                {`<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
                <div className={classnames({'acms-admin-form-checkbox': acmscss})}>
                  <input type="checkbox" name={`${item.name}@edit[]`} value="delete" id={`input-checkbox-${item.name}@edit`}/>
                  <label for="input-checkbox-{name}@edit">
                  {acmscss && <i class="acms-admin-ico-checkbox"></i>} 削除</label>
                </div>
                <a href={`%{ARCHIVES_DIR}{${item.name}@path}`}>
                  <img src={src} width="64" height="64" alt={alt} />
                </a>
                {`<!-- END_IF -->`}
                <input type="hidden" name="{name}@old[]" value={`{${item.name}@path}`} />
                <input type="file" name="{name}[]"/><br />
                {`<!-- BEGIN alt:veil -->`}
                  代替テキスト:
                  <input type="text" name={`${item.name}@alt[]`} value={`{${item.name}@alt}`} size="40" />
                {`<!-- END alt:veil -->`}
              </td>)
            } else if (item.type === 'image') {
              const style = {};
              if (item.normalSize) {
                style.width = `${item.normalSize}px`;
              } 
              const hiddenStyle = Object.assign({}, style, {'display': 'none'});

              return (<td className={classnames({'js-img_resize_cf': item.resize})}>
                {`<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
                <div>
                  <img 
                    src={`%{ARCHIVES_DIR}{${item.name}@${item.path}}`} 
                    className={classnames({'js-img_resize_preview': item.resize})} style={style} />
				        </div>
				        <input type="hidden" name="{name}@old[]" value={`{${item.name}@path}`} />
                {`<!-- ELSE -->`}
                  <img 
                    src={`%{ARCHIVES_DIR}{${item.name}@${item.path}}`} 
                    className={classnames({'js-img_resize_preview': item.resize})} style={hiddenStyle}/>
                {`<!-- END_IF -->`}
                <input type="file" name={`${item.name}[]`} className={classnames({'js-img_resize_input': item.resize})} /><br />
                {item.alt && <div>代替テキスト:<input type="text" name={`${item.name}@alt[]`} value={`{${item.name}@alt}`} size="40" /></div>}
                {item.normalSize && <input type="hidden" name={`${item.name}@${item.normal}[]`} value={item.normalSize} />}
                {item.tinySize && <input type="hidden" name={`${item.name}@${item.tiny}[]`} value={item.tinySize} />}
                {item.largeSize && <input type="hidden" name={`${item.name}@${item.large}[]`} value={item.largeSize} />}
                {item.square && <input type="hidden" name={`${item.name}@${item.square}[]`} value={item.squareSize} />}
              </td>)
            }
          })}
        </tr>
        {`<!-- END ${groupName}:loop -->`}
        <tr className="sortable-item item-template">
          <td class="item-handle">{acmscss && <i className="acms-admin-icon-sort"></i>}</td>
          {groupitems.map((item) => {
            if (item.type === 'text') {
              return (<td>
                <input type="text" name={`${item.name}[]`} value="" className={classnames({"acms-admin-form-width-full": acmscss})}/>
              </td>);
            } else if (item.type === 'textarea') {
              return (<td>
                <textarea name={`${item.name}[]`} className={classnames({"acms-admin-form-width-full": acmscss})}></textarea>
              </td>)
            } else if (item.type === 'select') {
              return (<td>
                <select name={`${item.name}[]`} className={classnames({"acms-admin-form-width-full": acmscss})}>
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
                    <div className={classnames({'acms-admin-form-radio':acmscss})}>
                      <input type="radio" name="{name}[]" value={option.value} id={`input-radio-${item.name}-${option.value}`} />
                      <label htmlFor={`input-radio-${item.name}-${option.value}`}>
                        {acmscss && <i class="acms-admin-ico-radio"></i>}
                        {label}
                      </label>
                    </div>
                  );
                })}
              </td>);
            } else if (item.type === 'file') {
              return (<td>
                <input type="file" name="{name}[]" />
                {item.extension && <input type="hidden" name="{name}@extension[]" value="{extension}" />}
                {item.fileName && <input type="hidden" name="{name}@filename[]" value="{fileName}" />}
              </td>);
            } else if (item.type === 'image') {
              const style = {};
              if (item.normalSize) {
                style.width = `${item.normalSize}px`;
              } 
              const hiddenStyle = Object.assign({}, style, {'display': 'none'});

              return (<td className={classnames({'js-img_resize_cf': item.resize})}>
                <img src="" style={hiddenStyle} class="js-img_resize_preview"/>
                <input type="file" name="{name}[]" style={style}/><br />
                {item.alt && <div>代替テキスト:<input type="text" name={`${item.name}@alt[]`} value="" size="40" /></div>}
                {item.normalSize && <input type="hidden" name={`${item.name}@${item.normal}[]`} value={item.normalSize} />}
                {item.tiny && <input type="hidden" name={`${item.name}@${item.tiny}[]`} value={item.tinySize} />}
                {item.large && <input type="hidden" name={`${item.name}@${item.large}[]`} value={item.largeSize} />}
                {item.square && <input type="hidden" name={`${item.name}@${item.square}[]`} value={item.squareSize} />}
              </td>);
            }
          })}
        </tr>
        <tfoot>
          <tr>
            <td colspan={groupLength}>
              <input type="button" className={classnames("item-insert", {"acms-admin-btn-admin": acmscss})} value="追加" />
            </td>
          </tr>
        </tfoot>
      </tbody>
    </table>}
    {groupName && <div>
      {groupitems.map((item) => {
        return (<div>
        {item.type === 'image' && <div>
          {item.square && <div>
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@squarePath`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@squareAlt`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@squareX`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@squareY`} />
          </div>}
          {item.large && <div>
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@largePath`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@largeAlt`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@largeX`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@largeY`} />
          </div>}
          {item.tiny && <div>
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@tinyPath`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@tinyAlt`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@tinyX`} />
            <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@tinyY`} />
          </div>}
          <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@path`} />
          <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@alt`} />
          <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@x`} />
          <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@y`} />
          <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@edit`} />
          <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@old`} />
          <input type="hidden" name={`${item.name}:extension`} value="image" />
        </div>}
        {item.type === 'file' && <div>
          <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@path`} />
          <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@alt`} />
          <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@edit`} />
          <input type="hidden" name={`@${groupName}[]`} value={`${item.name}@old`} />
          <input type="hidden" name={`${item.name}:extension`} value="file" />
        </div>}
        <input type="hidden" name={`@${groupName}[]`} value={item.name} />
        <input type="hidden" name="field[]" value={item.name} />
        {item.noSearch && <input type="hidden" name="{name}:search" value="0" />}
      </div>);
    })}</div>}
    </div>);
  }
}