import React, { Component } from 'react';
import classnames from 'classnames';

export default class UnitConfirmSource extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { customunit, acmscss } = this.props;  

    return(<table className={classnames({"acms-admin-table-admin-edit": acmscss})}>
    {customunit.map((item) => {
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
      }
    })}
    </table>)
  }
}