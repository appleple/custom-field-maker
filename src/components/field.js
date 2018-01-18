import React from 'react';
import ReactTooltip from 'react-tooltip';
import Base from './base';

export default class Field extends Base {

  constructor(props) {
    super(props);
    this.state = {
      type: "file",
      title: "",
      name: "",
      tooltip: "",
      alert: "",
      duplicatedField: "",
      path: "path",
      converter: "",
      normal: "size",
      alt: true,
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
    if (name && type 　&& title) {
      actions.addCustomfield(this.state);
    } else {
      this.setState({
        alert: true
      })
    }
  }

  renderFile() {
    const { extension, fileName, fileNameMethod } = this.state;
    return (
      <div className="customFieldFileContainer">
        <div className="customFieldFileNameOptContainer">
          <div className="acms-admin-form-radio">
            <input type="radio" checked={fileNameMethod === 'random'} id="file-name-method-random" onChange={this.updateState.bind(this, 'fileNameMethod', 'random')}/>
            <label htmlFor="file-name-method-random">
              <i className="acms-admin-ico-radio"></i>
              ファイル名（ランダム）
            </label>
          </div>
          <div className="acms-admin-form-radio">
            <input type="radio" checked={fileNameMethod === 'fix'} id="file-name-method-fix" onChange={this.updateState.bind(this, 'fileNameMethod', 'fix')}/>
            <label htmlFor="file-name-method-fix">
              <i className="acms-admin-ico-radio"></i>
              ファイル名（固定）
            </label>
          </div>
          <div className="acms-admin-form-radio">
            <input type="radio" checked={fileNameMethod === 'asis'} id="file-name-method-asis" onChange={this.updateState.bind(this, 'fileNameMethod', 'asis')}/>
            <label htmlFor="file-name-method-asis">
              <i className="acms-admin-ico-radio"></i>
              ファイル名（そのまま）
            </label>
          </div>
        </div>
        <div className="customFieldInputGroup customFieldInputFileGroup">
          {fileNameMethod === 'random' && <input type="text" placeholder="ランダムの文字列が入ります" disabled/>}
          {fileNameMethod === 'fix' && <input type="text" value={fileName} onInput={(e) => { this.updateState('fileName', e.target.value) }} placeholder="例）example" />}
          {fileNameMethod === 'asis' && <input type="text" placeholder="アップロードされたファイル名" disabled/>}
        </div>
        .
        <div className="customFieldInputGroup customFieldInputFileExtGroup">
          <input type="text" value={extension} onInput={(e) => { this.updateState('extension', e.target.value) }} placeholder="例）pdf" />
        </div>
      </div>
    );
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
          {this.renderBasic()}
          <div className="customFieldLine"></div>
          {type === 'text' && <div>{this.renderValidator()}</div>}
          {type === 'textarea' && <div>{this.renderValidator()}</div>}
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
          {this.renderMake()}
        </div>
      </div>
    )
  }
}
