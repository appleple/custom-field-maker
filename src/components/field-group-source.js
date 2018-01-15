import React, { Component } from 'react';
import classnames from 'classnames';

export default class FieldGroupSource extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { groupName, groupTitle, acmscss, groupitems } = this.props;
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
              return (<td>
              </td>)
            }
          })}
        </tr>
        {`<!-- END ${groupName}:loop -->`}
      </tbody>
    </table>}
    </div>);
  }
}