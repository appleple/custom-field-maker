import React, { Component } from 'react';
import Field from './field';

export default class CustomfieldMaker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'normal'
    }
  }

  renderSelectGroup() {
    return (
      <select id="type" value={type} className="acms-admin-form-width-full">
        <option value="text">テキスト</option>
        <option value="textarea">テキストエリア</option>
        <option value="select">セレクトボックス</option>
        <option value="radio">ラジオボタン</option>
        <option value="file">ファイル</option>
        <option value="image">画像</option>
      </select>
    );
  }

  updateState(prop, value) {
    this.setState({
      [prop]: value
    });
  }

  render() {
    const { mode } = this.state;
    return (
      <div className="acms-admin-form">
        <div className="acms-admin-form-radio">
          <input type="radio" value="normal" id="input-radio-mode-normal" checked={mode === 'normal'} onChange={this.updateState.bind(this, 'mode', 'normal')}/>
          <label htmlFor="input-radio-mode-normal">
            <i className="acms-admin-ico-radio"></i>
            カスタムフィールド
          </label>
        </div>
        <div className="acms-admin-form-radio">
          <input type="radio" value="group" id="input-radio-mode-group" checked={mode === 'group'} onChange={this.updateState.bind(this, 'mode', 'group')}/>
          <label htmlFor="input-radio-mode-group">
            <i className="acms-admin-ico-radio"></i>
            カスタムフィールドグループ
          </label>
        </div>
        <div className="acms-admin-form-radio">
          <input type="radio" value="unit" id="input-radio-mode-unit" checked={mode === 'unit'} onChange={this.updateState.bind(this, 'mode', 'unit')}/>
          <label htmlFor="input-radio-mode-unit">
            <i className="acms-admin-ico-radio"></i>
            カスタムユニット
          </label>
        </div>
        {mode === 'normal' && <Field />}
      </div>
    );
  }
}