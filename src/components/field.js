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
      alert: "",
      duplicatedField: "",
      path: "path",
      converter: "",
      normal: "size",
      resize: "true",
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
      openConverter: false
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

  render() {
    const { type, title, name, tooltip } = this.state;
    return (
      <div>
        <h2 className="acms-admin-admin-title2">カスタムフィールド</h2>
        <div className="acms-admin-filter">
          {this.renderModal()}
          <table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableFirst">
            <tr>
              <th className="acms-admin-table-left">入力欄の種類
                <i className="acms-admin-icon-tooltip" data-tip="React-tooltip"></i>
                <ReactTooltip place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
                  <span>フィールドのタイプとなります。<br/>選択しないと生成ボタンを押してもソースコードが生成されません。</span>
                </ReactTooltip>
                <span className="acms-admin-label acms-admin-label-danger">必須</span>
              </th>
              <th className="acms-admin-table-left">タイトル
                <i className="acms-admin-icon-tooltip" data-tip="React-tooltip" data-for="title-tip"></i>
                <ReactTooltip id="title-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
                  <span>見出しになります。</span>
                </ReactTooltip>
                <span className="acms-admin-label acms-admin-label-danger">必須</span></th>
              <th className="acms-admin-table-left">フィールド
                <i className="acms-admin-icon-tooltip" data-tip="React-tooltip" data-for="field-tip"></i>
                <ReactTooltip id="field-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
                  <span>フィールド名です。name属性として使用されます。</span>
                </ReactTooltip>
                <span className="acms-admin-label acms-admin-label-danger">必須</span></th>
              <th className="acms-admin-table-left">ツールチップ
                <i className="acms-admin-icon-tooltip" data-tip="React-tooltip" data-for="tooltip-tip"></i>
                <ReactTooltip id="tooltip-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
                  <span>カスタムフィールドの説明用のツールチップを付与します。</span>
                </ReactTooltip>
              </th>
            </tr>
            <tr>
              <td>{this.renderSelect()}</td>
              <td><input type="text" value={title} onInput={(e) => { this.updateState('title', e.target.value) }} className="acms-admin-form-width-full" placeholder="例）氏名" /></td>
              <td><input type="text" value={name} onInput={(e) => { this.updateState('name', e.target.value) }} className="acms-admin-form-width-full" placeholder="例）name" /></td>
              <td><input type="text" value={tooltip} onInput={(e) => { this.updateState('tooltip', e.target.value) }} className="acms-admin-form-width-full" placeholder="例）ここにお名前を入力してください" /></td>
            </tr>
          </table>
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
          {this.renderValidator()}
          {this.renderMake()}
        </div>
      </div>
    )
  }
}
