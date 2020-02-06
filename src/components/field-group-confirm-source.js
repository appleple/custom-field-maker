import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

const ConditionalWrap = ({ condition, wrap, children }) => condition ? wrap(children) : children;

export default class FieldGroupConfirmSource extends Component {

  wrapTable(children, title) {
    const { direction } = this.props;
    return (<ConditionalWrap
      condition={direction === 'vertical'}
      wrap={children => <tr>
        <th>{title}</th>
        {children}
      </tr>}
    >{children}</ConditionalWrap>);
  }

  render() {
    const { groupTitle, groupName, groupitems, acmscss, direction } = this.props;
    return (<Fragment>
      {groupTitle && <h2 className={classnames({ 'acms-admin-admin-title2': acmscss })}>{groupTitle}</h2>}
      <table className={classnames({ 'adminTable acms-admin-table-admin-edit': acmscss })}>
        {direction === 'horizontal' &&
          <thead className={classnames({ 'acms-admin-hide-sp': acmscss })}>
            <tr>
              {groupitems.map((item) => (<th className={classnames({ "acms-admin-table-left": acmscss })}>{item.title}</th>))}
            </tr>
          </thead>
        }
        <tbody>
          {`<!-- BEGIN ${groupName}:loop -->`}
          <tr>
            <ConditionalWrap
              condition={direction === 'vertical'}
              wrap={children => <td><table>{children}</table></td>}
            >
              {groupitems.map((item) => {
                if (item.type === 'text') {
                  return this.wrapTable(<td>
                    {`{${item.name}}`}
                  </td>, item.title);
                } else if (item.type === 'textarea') {
                  return this.wrapTable(<td>
                    {`{${item.name}}[escape|nl2br]`}
                  </td>, item.title);
                } else if (item.type === 'select') {
                  return this.wrapTable(<td>
                    {item.option.map((option) => {
                      if (!option.label) {
                        return null;
                      }
                      return (<div>
                        {`<!-- BEGIN_IF [{${item.name}}/eq/${option.value}] -->`}
                        {option.label}
                        {'<!-- END_IF -->'}
                      </div>);
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
                    {`<!-- BEGIN ${item.name}@path:veil -->`}
                    <a href={`%{ARCHIVES_DIR}{${item.name}@path}`}>
                      <img src={src} width="64" height="64" alt={alt} />
                    </a>
                    {`<!-- END ${item.name}@path:veil -->`}
                  </td>, item.title);
                } else if (item.type === 'image') {
                  return this.wrapTable(<td>
                    {`<!-- BEGIN ${item.name}@path:veil -->`}
                    <img src={`%{ARCHIVES_DIR}{${item.name}@path}`} className={classnames({ 'acms-admin-img-responsive': acmscss })} alt={`{${item.name}@alt}`} />
                    {`<!-- END ${item.name}@path:veil -->`}
                  </td>, item.title);
                } else if (item.type === 'media') {
                  return this.wrapTable(<td>
                    {`<!-- BEGIN_IF [{${item.name}@type}/eq/file] -->`}
                    <a href={`{${item.name}@path}`}>
                      <img
                        alt={`{${item.name}@alt}`}
                        src={`{${item.name}@thumbnail}`}
                        style={{ width: '64px', height: 'auto' }}
                      />
                    </a>
                    {`<!-- END_IF -->`}
                    {`<!-- BEGIN_IF [{${item.name}@type}/eq/image] -->`}
                    {`<!-- BEGIN_IF [{${item.name}@link}/nem] -->`}
                    <a href={`{${item.name}@link}`}>
                    {`<!-- END_IF -->`}   
                    {item.useFocusImage && <div style={{ width: `${item.focusImageWidth}px`, height: `${item.focusImageHeight}px` }}>
                    <img className="js-focused-image" data-focus-x={`{${item.name}@focalX}`} data-focus-y={`{${item.name}@focalY}`} alt={`{${item.name}@alt}`} src={`%{MEDIA_ARCHIVES_DIR}{${item.name}@path}[resizeImg(${item.focusImageWidth})]`} />
                    </div>}
                    {!item.useFocusImage &&
                    <img
                      alt={`{${item.name}@alt}`}
                      src={`%{MEDIA_ARCHIVES_DIR}{${item.name}@path}`}
                    />}
                    {`<!-- BEGIN_IF [{${item.name}@link}/nem] -->`}
                    </a>
                    {`<!-- END_IF -->`}

                  {`<!-- BEGIN_IF [{${item.name}@text}/nem] -->`}
                  <p>{`{${item.name}@text}`}</p>
                  {'<!-- END_IF -->'}
                  {'<!-- END_IF -->'}
                  </td>, item.title);
                } else if (item.type === 'lite-editor') {
                  return this.wrapTable(<td>
                    {`{${item.name}}[raw]`}
                  </td>, item.name);
                } else if (item.type === 'rich-editor') {
                  return this.wrapTable(<td>
                    {`{${item.name}@html}[raw]`}
                  </td>, item.name);
                } else if (item.type === 'table') {
                  return this.wrapTable(<td>
                    {`{${item.name}}[raw]`}
                  </td>, item.name);
                }
              })}
            </ConditionalWrap>
          </tr>
          {`<!-- END ${groupName}:loop -->`}
        </tbody>
      </table>
    </Fragment>);
  }
}
