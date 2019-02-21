import React, { Component } from 'react';
import classnames from 'classnames';

export default class FieldConfirmSource extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { customfield, acmscss } = this.props;

    return (<table className={classnames({ "acms-admin-table-admin-edit": acmscss })}>
      {customfield.map((item) => {
        if (!item.name) {
          return null;
        }
        if (item.type === 'text') {
          return (<tr>
            <th>{item.title}</th>
            <td>
              {`{${item.name}}`}
            </td>
          </tr>);
        } else if (item.type === 'textarea') {
          return (<tr>
            <th>{item.title}</th>
            <td>
              {`{${item.name}}[escape|nl2br]`}
            </td>
          </tr>);
        } else if (item.type === 'select') {
          return (<tr>
            <th>{item.title}</th>
            <td>
              {item.option.map((option) => {
                return (<div>
                  {`<!-- BEGIN_IF [{${item.name}}/eq/${option.value}] -->`}
                  {option.label}
                  {`<!-- END_IF -->`}
                </div>)
              })}
            </td>
          </tr>)
        } else if (item.type === 'radio') {
          return (<tr>
            <th>{item.title}</th>
            <td>
              {item.option.map((option) => {
                return (`<!-- BEGIN_IF [{${item.name}}/eq/${option.value}] -->
              ${option.label}
              <!-- END_IF -->`);
              })}
            </td>
          </tr>);
        } else if (item.type === 'checkbox') {
          return (<tr>
            <th>{item.title}</th>
            <td>
              {`<!-- BEGIN ${item.name}:loop -->`}
              {`<!-- BEGIN ${item.name}:glue -->,<!-- END ${item.name}:glue -->`}
              {item.option.map((option) => {
                return `<!-- BEGIN_IF [{${item.name}}/eq/${option.value}] -->
              ${option.value}
              <!-- END_IF -->`;
              })}
              {`<!-- END ${item.name}:loop -->`}
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
            <th>{item.title}</th>
            <td>
              {`<!-- BEGIN ${item.name}@path:veil -->`}
              <a href={`%{ARCHIVES_DIR}{${item.name}@path}`}>
                <img src={src} width="64" height="64" alt={alt} />
              </a>
              {`<!-- END ${item.name}@path:veil -->`}
            </td>
          </tr>)
        } else if (item.type === 'image') {
          return (<tr>
            <th>{item.title}</th>
            <td>
              <img src={`%{ARCHIVES_DIR}{${item.name}@path}`} width="64" height="64" alt={`{${item.name}@alt}`} />
            </td>
          </tr>)
        } else if (item.type === 'media') {
          return (<tr>
            <th>{item.title}</th>
            <td>
              <div className={classnames({"acms-admin-col-md-4": acmscss})}>
                {`<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
                <a className={classnames({"acms-admin-thumbnail": acmscss})} href={`{${item.name}@path}`}>
                  {`<!-- ELSE -->`}
                  <div className={classnames({"acms-admin-thumbnail": acmscss})}>
                    {`<!-- END_IF -->`}
                    <div style={{ width: '100%', height: '150px' }}>
                      <img className="js-focused-image"
                        data-focus-x={`{${item.name}@focalX}`}
                        data-focus-y={`{${item.name}@focalY}`}
                        alt={`{${item.name}@alt}`}
                        src={`%{MEDIA_ARCHIVES_DIR}{${item.name}@path}`} />
                    </div>
                    {`<!-- BEGIN_IF [{${item.name}@caption}/nem] -->`}
                    <h3>{`{${item.name}@caption}`}</h3>
                    {`<!-- END_IF -->`}
                    {`<!-- BEGIN_IF [{${item.name}@text}/nem] -->`}
                    <p>{`{${item.name}@text}`}</p>
                    {`<!-- END_IF -->`}
                    {`<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
                  </div>
                  {`<!-- ELSE -->`}
                </a>
                {`<!-- END_IF -->`}
              </div>
            </td>
          </tr>)
        }
      })}
    </table>)
  }
}