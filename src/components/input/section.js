import React from "react";
import Input from '../input';

export default class Section extends Input {
  constructor(props) {
    super(props);
  }

  render() {
    const { acmscss, customfield, jsValidator } = this.props;

    return (
      <>
        {jsValidator && '<!-- <form action="" method="post" class="js-validator" enctype="multipart/form-data"> -->'}
          {customfield && customfield.map((item, index) => {
            if (item.type === 'text') {
              return (
              <p key={index} className="acms-admin-form-item">
                <label className="acms-admin-form-item-heading">{this.renderLabel(item)}</label>
                <span className="acms-admin-form-item-input">{this.renderText(item)}</span>
              </p>);
            } else if (item.type === 'textarea') {
              return (
                <p key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading">{this.renderLabel(item)}</label>
                  <span className="acms-admin-form-item-input">{this.renderTextarea(item)}</span>
                </p>
              );
            } else if (item.type === 'rich-editor') {
              return (
                <p key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading">{this.renderLabel(item)}</label>
                  <span className="acms-admin-form-item-input">{this.renderRichEditor(item)}</span>
                </p>
              );
            } else if (item.type === 'table') {
              return (
                <p key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading">{this.renderLabel(item)}</label>
                  <span className="acms-admin-form-item-input">{this.renderTable(item)}</span>
                </p>
              );
            } else if (item.type === 'select') {
              return (
                <p key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading">{this.renderLabel(item, acmscss)}</label>
                  <span className="acms-admin-form-item-input">{this.renderSelect(item)}</span>
                </p>
              );
            } else if (item.type === 'radio') {
              return (
                <fieldset key={index}>
                  <div className="acms-admin-form-item">
                    <legend className="acms-admin-form-item-heading">{this.renderLabel(item)}</legend>
                    <span className="acms-admin-form-item-input">{this.renderRadio(item)}</span>
                  </div>
                </fieldset>
              );
            } else if (item.type === 'checkbox') {
              return (
                <fieldset key={index} className="acms-admin-form-item">
                  <div className="acms-admin-form-item">
                    <legend className="acms-admin-form-item-heading">{this.renderLabel(item)}</legend>
                    <span className="acms-admin-form-item-input">{this.renderCheckbox(item)}</span>
                  </div>
                </fieldset>
              );
            } else if (item.type === 'image') {
              return (
                <p key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading">{this.renderLabel(item)}</label>
                  <span className="acms-admin-form-item-input">{this.renderImage(item)}</span>
                </p>);
            } else if (item.type === 'media') {
              return (
                <p key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading">{this.renderLabel(item)}</label>
                  <span className="acms-admin-form-item-input">{this.renderMedia(item)}</span>
                </p>
              );
            } else if (item.type === 'file') {
              return (
                <p key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading">{this.renderLabel(item)}</label>
                  <span className="acms-admin-form-item-input">{this.renderFile(item)}</span>
                </p>
              );
            }
          })}
        {jsValidator && '<!-- </form> -->'}
      </>
    );
  }
}
