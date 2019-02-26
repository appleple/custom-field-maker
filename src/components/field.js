import React from 'react';
import ReactTooltip from 'react-tooltip';
import Base from './base';

export default class Field extends Base {

  constructor(props) {
    super(props);
    this.state = {
      type: "text",
      title: "",
      name: "",
      tooltip: "",
      alert: false,
      duplicatedField: "",
      path: "path",
      converter: "",
      normal: "size",
      alt: false,
      resize: true,
      option: [{
        value: "",
        label: ""
      }],
      validator: [{
        option: "",
        value: "",
        message: ""
      }],
      optionFormat: "pref",
      openValidator: false,
      openConverter: false,
      noSearch: false,
      extension: '',
      fileNameMethod: 'random'
    };
  }

  submit() {
    const { name, type, title } = this.state;
    const { actions } = this.props;
    if (name && type && title) {
      actions.addCustomfield(this.state);
    } else {
      this.setState({
        alert: true
      })
    }
  }

  typeSelectRender() {
    const { type } = this.state;
    
    return (
      <select id="type" value={type} className="acms-admin-form-width-full" onChange={(e) => { this.updateState('type', e.target.value) }}>
      <option value="text">テキスト</option>
      <option value="textarea">テキストエリア</option>
      <option value="select">セレクトボックス</option>
      <option value="radio">ラジオボタン</option>
      <option value="checkbox">チェックボックス</option>
      <option value="file">ファイル</option>
      <option value="image">画像</option>
      <option value="media">メディア</option>
    </select>
    )
  }

  render() {
    const { type, title, name, tooltip } = this.state;
    return (
      <div>
        <h2 className="acms-admin-admin-title2">カスタムフィールド</h2>
        <div className="acms-admin-filter">
          {this.renderModal()}
          {this.renderAlert()}
          {this.renderBasic()}
          <div className="customFieldLine"></div>
          {type === 'select' &&
            <div>
              {this.renderSnippet()}
              {this.renderOption()}
            </div>
          }
          {type === 'radio' &&
            <div>
              {this.renderSnippet()}
              {this.renderOption()}
            </div>
          }
          {type === 'checkbox' &&
            <div>
              {this.renderSnippet()}
              {this.renderOption()}
            </div>
          }
          {type === 'image' &&
            <div>
              {this.renderImage()}
              {this.renderImageResize()}
            </div>
          }
          {type === 'file' &&
            <div>
              {this.renderFile()}
            </div>
          }
          {type === 'media' && 
            <div>
              {this.renderMediaOption()}
            </div>
          }
          {this.renderValidator()}
          {this.renderMake()}
        </div>
      </div>
    )
  }
}
