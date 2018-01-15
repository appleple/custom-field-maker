import React from 'react';
import Base from './base';

export default class FieldGroup extends Base {

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
      groupTitle: '',
      groupName: '',
      openValidator: false,
      openConverter: false,
      groupAlert: false,
      openGroup: false
    };
  }

  showGroup() {
    const { actions } = this.props;
    const { groupName, groupTitle } = this.state;
    if (!groupName) {
      this.setState({
        groupAlert: true
      })
    } else {
      this.setState({
        groupAlert: false,
        duplicatedField: false,
        openGroup: true
      });
      actions.setGroupTitleName({
        groupTitle, groupName
      })
    }

  }

  addGroup() {
    const { actions } = this.props;
    const { type, title, name, groupName } = this.state;
    if (name == groupName) {
      this.setState({
        duplicatedField: true
      });
      return;
    }
    if (type && title && name) {
      actions.addGroupItem(this.state);
    } else {
      this.setState({
        alert: true
      })
    }
  }

  render() {
    const { groupAlert, duplicatedField, openGroup, groupTitle, groupName, type, title, name, tooltip } = this.state;
    return (
      <div>
        {groupAlert && <p className="acms-admin-alert acms-admin-alert-danger"><button className="js-acms-alert-close" data-action="removeGroupAlert">×</button>group名を入力しないとgroupを生成できません。</p>}
        {duplicatedField && <p className="acms-admin-alert acms-admin-alert-danger"><button className="js-acms-alert-close" data-action="removeGroupAlert">×</button>group名とフィールド名を同じ値にすることはできません。</p>}
        <h2 className="acms-admin-admin-title2">カスタムフィールドグループ</h2>
        <div className="acms-admin-filter">
          <table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableGroup">
            <tr>
              <th className="acms-admin-table-left">グループのタイトル<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="カスタムフィールドグループのテーブル用のタイトルとなります。"></i><span className="acms-admin-label acms-admin-label-danger">必須</span></th>
              <th className="acms-admin-table-left" colspan="2">フィールド名（変数）<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="カスタムフィールドグループのフィールド名です。値を必ず入力してください。"></i><span className="acms-admin-label acms-admin-label-danger">必須</span></th>
            </tr>
            <tr>
              <td><input type="text" value={groupTitle} onInput={(e) => { this.updateState('groupTitle', e.target.value) }} className="acms-admin-form-width-full" placeholder="例）スタッフリスト" /></td>
              <td><input type="text" value={groupName} onInput={(e) => { this.updateState('groupName', e.target.value) }} className="acms-admin-form-width-full" placeholder="例）group_staff" /></td>
            </tr>
            <tr>
              <td colspan="2">
                {openGroup ?
                  <button className="acms-admin-btn acms-admin-btn-primary acms-admin-btn-disabled customFieldGroupBtn" disabled>グループ生成</button> :
                  <button className="acms-admin-btn acms-admin-btn-primary customFieldGroupBtn" onClick={this.showGroup.bind(this)}>グループ生成</button>
                }
              </td>
            </tr>
          </table>
          {openGroup &&
            <div>
              <div className="customFieldLine"></div>
              {this.renderModal()}
              <table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableFirst">
                <tr>
                  <th className="acms-admin-table-left">入力欄の種類<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="フィールドのタイプとなります。選択しないと生成ボタンを押してもソースコードが生成されません。"></i><span className="acms-admin-label acms-admin-label-danger">必須</span></th>
                  <th className="acms-admin-table-left">タイトル<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="見出しになります。"></i><span className="acms-admin-label acms-admin-label-danger">必須</span></th>
                  <th className="acms-admin-table-left">フィールド<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="フィールド名です。name属性として使用されます。"></i><span className="acms-admin-label acms-admin-label-danger">必須</span></th>
                  <th className="acms-admin-table-left">ツールチップ<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="カスタムフィールドの説明用のツールチップを付与します。"></i></th>
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
              <p>
                <button onClick={this.clearValue.bind(this)} className="acms-admin-btn-admin">クリア</button>
                <button onClick={this.addGroup.bind(this)} className="acms-admin-btn-admin acms-admin-btn-admin-primary acms-admin-btn-admin-save">生成</button>
              </p>
            </div>}
        </div>
      </div>
    );
  }
}