import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

export default class FieldGroupConfirmSource extends Component {
  render () {
    const {groupTitle, groupName, groupitems, acmscss} = this.props;
    return (<Fragment>
      {groupTitle && <h2 className={classnames({"acms-admin-admin-title2": acmscss})}>{groupTitle}</h2>}
      <table className={classnames({"adminTable acms-admin-table-admin-edit": acmscss})}>
        <thead className={classnames({"acms-admin-hide-sp": acmscss})}>
          <tr>
            {groupitems.map((item) => {
              return (<th className={classnames({"acms-admin-table-left": acmscss})}>{item.title}</th>);
            })}
          </tr>
        </thead>
        <tbody>
          {`<!-- BEGIN ${groupName}:loop -->`}
          <tr>
            {groupitems.map((item) => {
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
                  {item.option.map((option) => {
                    if (!option.label) {
                      return null;
                    }
                    return (<div>
                      {`<!-- BEGIN_IF [{${item.name}}/eq/${option.value}] -->`}
                      {option.label}
                      {`<!-- END_IF -->`}
                    </div>)
                  })}
                </td>);
              } else if (item.type === 'radio') {
                return (<td>
                  {item.option.map((option) => {
                    if (!option.label) {
                      return null;
                    }
                    return (`<!-- BEGIN_IF [{${item.name}}/eq/${option.value}] -->
                      ${option.label}
                      <!-- END_IF -->`);
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
                    <img src={`%{ARCHIVES_DIR}{${item.name}@path}`} width="64" height="64" alt={`{${item.name}@alt}`} />
                  {`<!-- END ${item.name}@path:veil -->`}
                </td>)
              }
            })}
          </tr>
          {`<!-- END ${groupName}:loop -->`}
        </tbody>
      </table>
    </Fragment>)
  }
}
