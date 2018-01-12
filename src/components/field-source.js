import React, { Component } from 'react';
import classnames from 'classnames';

export default class FieldSource extends Component {

  constructor(props) {
    super(props);
  }

  renderValidator() {
    return ``;
  }

  renderNoSearch() {
    return ``;
  }

  renderValidatorFile() {
    return ``;
  }

  renderTh(item) {
    return (
      <th>
        {item.title}
        {item.tooltip &&
          <i class="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip={item.tooltip}></i>
        }
      </th>
    )
  }

  render() {
    const { acmscss, customfield } = this.props;
    return (
      <table className={classnames({ 'acms-admin-table-admin-edit': acmscss })}>
        {customfield.map(item => {
          if (item.type === 'text') {
            return(<tr>
              {this.renderTh(item)}
              <td>
                <input type="text" name={item.name} value={`{${item.name}}`} className={classnames({ 'acms-admin-form-width-full': acmscss })} />
                <input type="hidden" name="field[]" value={item.name} />
                {this.renderValidator()}
                {this.renderNoSearch()}
              </td>
            </tr>);
          } else if (item.type === 'textarea') {
            return (
              <tr>
                {this.renderTh(item)}
                <td>
                  <textarea name={item.name} className={classnames({"acms-admin-form-width-full":acmscss})}>{name}</textarea>
                  <input type="hidden" name="field[]" value={item.name} />
                  {this.renderValidator()}
                  {this.renderNoSearch()}
                </td>
              </tr>
            );
          } else if (item.type === 'select') {
            return (
              <tr>
                {this.renderTh(item)}
                <td>
                  <select name={item.name} className={classnames({"acms-admin-form-width-full":acmscss})}>
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
                  {this.renderValidator()}
                  {this.renderNoSearch()}
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
                        <div className={classnames({"acms-admin-form-radio":acmscss})}>
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
                  {this.renderValidator()}
                  {this.renderNoSearch()}
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
                        <div className={classnames({"acms-admin-form-checkbox":acmscss})}>
                          <input type="checkbox" name={`${item.name}[]`} value={option.value} data-tmp={`{${item.name}:checked#${option.value}}`} id={`input-checkbox-${item.name}-${option.value}`} />
                          <label htmlFor={`input-checkbox-${item.name}-${option.value}`}>
                            <i className="acms-admin-ico-checkbox"></i>
                            {option.label}
                          </label>
                        </div>
                      )
                    }
                  })}
                </td>
              </tr>
            );
          } else if (item.type === 'image') {
            return (<tr>
              {this.renderTh(item)}
              <td className={classnames({'js-img_resice_cf': item.resize})}>
              {`<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
              <div>
                <img src={`%{ARCHIVES_DIR}{${item.name}@${item.path}}`} className={classnames({'acms-admin-img-responsive': acmscss, 'js-img_resize_preview': item.resize})} style={item.normalSize ? {width: `${item.normalSize}px`} : null} />
              </div>
              <input type="hidden" name={`${item.name}@old`} value={`{${item.name}@path}`} />
              <div className={classnames({'acms-admin-form-checkbox':acmscss})}>
                <input type="checkbox" name={`${item.name}@edit`} value="delete" id={`input-checkbox-${item.name}@edit`} />
                <label htmlFor={`input-checkbox-{name}@edit`}>
                  {acmscss &&
                    <i className="acms-admin-ico-checkbox"></i> 
                  }
                  削除
                </label>
              </div>
              {`<!-- ELSE -->`}
              <div>
              <img src={`%{ARCHIVES_DIR}{${item.name}@${item.path}}`} className={classnames({'acms-admin-img-responsive': acmscss, 'js-img_resize_preview': item.resize})} style={item.normalSize ? {width: `${item.normalSize}px`, display: 'none'} : {display: 'none'}} />
              </div>
              {`<!-- END_IF -->`}
              <input type="file" name={item.name} size="20" className={classnames({'js-img_resize_input': item.resize})} /><br />
              {item.alt && <span>代替テキスト:<input type="text" name={`${item.name}@alt`} value="{{name}@alt}" size="40" /></span>}
              <input type="hidden" name="field[]" value={item.name} />
              <input type="hidden" name={`${item.name}:extension`} value="image" />
              {item.normalSize && <input type="hidden" name={`${item.name}@${item.normal}`} value={item.normalSize} />}
              {item.tiny && <input type="hidden" name={`${item.name}@${item.tiny}`} value={item.tinySize} />}
              {item.large && <input type="hidden" name={`${item.name}@${item.large}`} value={item.largeSize} />}
              {item.square && <input type="hidden" name={`${item.name}@${item.square}`} value={item.squareSize} />}        
              <input type="hidden" name={`${item.name}@filename`} value="" />
              {this.renderValidatorFile()}
            </td>
          </tr>);
          }
        })}
      </table>
    )
  }
}