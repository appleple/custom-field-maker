import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

export default class UnitGroupConfirmSource extends Component {
  render () {
    const {unitGroupTitle, unitGroupName, unitgroupitems, acmscss} = this.props;
    return (<Fragment>
      {unitGroupTitle && <h2 className={classnames({"acms-admin-admin-title2": acmscss})}>{unitGroupTitle}</h2>}
      <table className={classnames({"adminTable acms-admin-table-admin-edit": acmscss})}>
        <thead className={classnames({"acms-admin-hide-sp": acmscss})}>
          <tr>
            {unitgroupitems.map((item) => {
              return (<th className={classnames({"acms-admin-table-left": acmscss})}>{item.title}</th>);
            })}
          </tr>
        </thead>
        <tbody>
          {`<!-- BEGIN ${unitGroupName}:loop -->`}
          <tr>
            {unitgroupitems.map((item) => {
              if (item.type === 'text') {
                return (<td>
                  {`{${item.name}}`}
                </td>)
              } else if (item.type === 'textarea') {
                return (<td>
                  {`{${item.name}}[escape|nl2br]`}
                </td>)
              } else if (item.type === 'select') {
                return (<td>
                  {item.option((option) => {
                    if (!option.label) {
                      return null;
                    }
                    return (<div>
                      {`<!-- BEGIN_IF [{${item.name}}/eq/${option.value}] -->`}
                      {label}
                      {`<!-- END_IF -->`}
                    </div>)
                  })}
                </td>);
              } else if (item.type === 'radio') {
                return (<td>
                  {item.option((option) => {
                    if (!option.label) {
                      return null;
                    }
                    return (<div>
                      {`<!-- BEGIN_IF [{${item.name}}/eq/${option.value}] -->`}
                      {label}
                      {`<!-- END_IF -->`}
                    </div>)
                  })}
                </td>)
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
                  {`<!-- BEGIN ${item.name}@path:veil -->`}
                  <a href={`%{ARCHIVES_DIR}{${item.name}@path}`}>
                    <img src={src} width="64" height="64" alt={alt} />
                  </a>
                  {`<!-- END ${item.name}@path:veil -->`}
                </td>)
              } else if (item.type === 'image') {
                return (<td>
                  {`<!-- BEGIN ${item.name}@path:veil -->`}
                    <img src={`%{ARCHIVES_DIR}{${item.name}@path}`} width="64" height="64" alt={item.alt} />
                  {`<!-- END ${item.name}@path:veil -->`}
                </td>)
              }
            })}
          </tr>
          {`<!-- END ${unitGroupName}:loop -->`}
        </tbody>
      </table>
    </Fragment>)
  }
}
