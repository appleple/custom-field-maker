import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

const ConditionalWrap = ({condition, wrap, children}) => condition ? wrap(children) : children;

export default class UnitGroupConfirmSource extends Component {

  wrapTable(children, title) {
    const { direction } = this.props;
    return (<ConditionalWrap 
      condition={direction === 'vertical'}
      wrap={(children) => <tr>
        <th>{title}</th>
        {children}
      </tr>}
    >{children}</ConditionalWrap>);
  }

  render () {
    const {unitGroupTitle, unitGroupName, unitgroupitems, acmscss, direction} = this.props;
    return (<Fragment>
      {unitGroupTitle && <h2 className={classnames({"acms-admin-admin-title2": acmscss})}>{unitGroupTitle}</h2>}
      <table className={classnames({"adminTable acms-admin-table-admin-edit": acmscss})}>
        {direction === 'horizontal' &&
        <thead className={classnames({"acms-admin-hide-sp": acmscss})}>
          <tr>
            <Fragment>
            {unitgroupitems.map((item) => {
              return (<th className={classnames({"acms-admin-table-left": acmscss})}>{item.title}</th>);
            })}
            </Fragment>
          </tr>
        </thead>
        }
        <tbody>
          {`<!-- BEGIN ${unitGroupName}:loop -->`}
          <tr>
            <ConditionalWrap 
              condition={direction==='vertical'}
              wrap={ children => <td><table>{children}</table></td> }
            >
            {unitgroupitems.map((item) => {
              if (item.type === 'text') {
                return this.wrapTable(<td>
                  {`{${item.name}}`}
                </td>, item.title)
              } else if (item.type === 'textarea') {
                return this.wrapTable(<td>
                  {`{${item.name}}[escape|nl2br]`}
                </td>, item.title)
              } else if (item.type === 'select') {
                return this.wrapTable(<td>
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
                </td>, item.title);
              } else if (item.type === 'radio') {
                return this.wrapTable(<td>
                  {item.option.map((option) => {
                    if (!option.label) {
                      return null;
                    }
                    return (`<!-- BEGIN_IF [{${item.name}}/eq/${option.value}] -->
                      ${option.label}
                      <!-- END_IF -->`);
                  })}
                </td>, item.title)
              } else if (item.type === 'file') {
                let src = "/images/fileicon/";
                let alt = 'file';
                if (item.extension) {
                  src += `${item.extension}.gif`;
                  alt += item.extension;
                } else {
                  src += 'file.gif';
                }

                return this.wrapTable(<td>
                  {`<!-- BEGIN ${item.name}@path:veil -->`}
                  <a href={`%{ARCHIVES_DIR}{${item.name}@path}`}>
                    <img src={src} width="64" height="64" alt={alt} />
                  </a>
                  {`<!-- END ${item.name}@path:veil -->`}
                </td>, item.title)
              } else if (item.type === 'image') {
                return this.wrapTable(<td>
                  {`<!-- BEGIN ${item.name}@path:veil -->`}
                    <img src={`%{ARCHIVES_DIR}{${item.name}@path}`} width="64" height="64" alt={`{${item.name}@alt}`} />
                  {`<!-- END ${item.name}@path:veil -->`}
                </td>, item.title)
              }
            })}
            </ConditionalWrap>
          </tr>
          {`<!-- END ${unitGroupName}:loop -->`}
        </tbody>
      </table>
    </Fragment>)
  }
}
