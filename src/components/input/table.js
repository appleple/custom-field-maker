import React, { Fragment } from "react";
import classnames from 'classnames';
import Input from '../input';

export default class Table extends Input {
  constructor(props) {
    super(props);
  }

  render() {
    const { acmscss, customfield, jsValidator } = this.props;

    return (
      <Fragment>
        {jsValidator && '<!-- <form action="" method="post" class="js-validator" enctype="multipart/form-data"> -->'}
          <table className={classnames({ 'acms-admin-table-admin-edit': acmscss })} ref={(table => this.table = table)}>
            {customfield && customfield.map((item, index) => {
              if (item.type === 'text') {
                return (
                  <tr key={index}>
                    <th>{this.renderLabel(item)}</th>
                    <td>{this.renderText(item)}</td>
                  </tr>
                );
              } else if (item.type === 'textarea') {
                return (
                  <tr key={index}>
                    <th>{this.renderLabel(item)}</th>
                    <td>{this.renderTextarea(item)}</td>
                  </tr>
                );
              } else if (item.type === 'rich-editor') {
                return (
                  <tr key={index}>
                    <th>{this.renderLabel(item)}</th>
                    <td>{this.renderRichEditor(item)}</td>
                  </tr>
                );
              } else if (item.type === 'table') {
                return (
                  <tr key={index}>
                    <th>{this.renderLabel(item)}</th>
                    <td>{this.renderTable(item)}</td>
                  </tr>
                );
              } else if (item.type === 'select') {
                return (
                  <tr key={index}>
                    <th>{this.renderLabel(item)}</th>
                    <td>{this.renderSelect(item)}</td>
                  </tr>
                );
              } else if (item.type === 'radio') {
                return (
                  <tr key={index}>
                    <th>{this.renderLabel(item)}</th>
                    <td>{this.renderRadio(item)}</td>
                  </tr>
                );
              } else if (item.type === 'checkbox') {
                return (
                  <tr key={index}>
                    <th>{this.renderLabel(item)}</th>
                    <td>{this.renderCheckbox(item)}</td>
                  </tr>
                );
              } else if (item.type === 'image') {
                return (
                  <tr key={index}>
                    <th>{this.renderLabel(item)}</th>
                    <td>{this.renderImage(item)}</td>
                  </tr>
                );
              } else if (item.type === 'media') {
                return (
                  <tr key={index}>
                    <th>{this.renderLabel(item)}</th>
                    <td>{this.renderMedia(item)}</td>
                  </tr>
                );
              } else if (item.type === 'file') {
                return (
                  <tr key={index}>
                    <th>{this.renderLabel(item)}</th>
                    <td>{this.renderFile(item)}</td>
                  </tr>
                );
              }
            })}
          </table>
        {jsValidator && '<!-- </form> -->'}
      </Fragment>
    );
  }
}
