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
      openValidator: false,
      openConverter: false,
      groupAlert: false,
      openGroup: false
    };
  }

  render() {
    const {groupAlert, duplicatedField, openGroup} = this.state;
    return (
    <div>
      {groupAlert && <p className="acms-admin-alert acms-admin-alert-danger"><button className="js-acms-alert-close" data-action="removeGroupAlert">×</button>group名を入力しないとgroupを生成できません。</p>}
      {duplicatedField && <p className="acms-admin-alert acms-admin-alert-danger"><button className="js-acms-alert-close" data-action="removeGroupAlert">×</button>group名とフィールド名を同じ値にすることはできません。</p>}
      <table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableGroup">
        <tr>
          <th className="acms-admin-table-left">グループのタイトル<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="カスタムフィールドグループのテーブル用のタイトルとなります。"></i><span className="acms-admin-label acms-admin-label-danger">必須</span></th>
          <th className="acms-admin-table-left" colspan="2">フィールド名（変数）<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="カスタムフィールドグループのフィールド名です。値を必ず入力してください。"></i><span className="acms-admin-label acms-admin-label-danger">必須</span></th>
        </tr>
        <tr>
          <td><input type="text" value="" data-bind="groupTitle" className="acms-admin-form-width-full" placeholder="例）スタッフリスト" /></td>
          <td><input type="text" value="" data-bind="groupName" className="acms-admin-form-width-full" placeholder="例）group_staff" /></td>
        </tr>
        <tr>
          <td colspan="2">
            {openGroup ? 
              <button className="acms-admin-btn acms-admin-btn-primary acms-admin-btn-disabled customFieldGroupBtn" data-action="showGroup" disabled>グループ生成</button> : 
              <button className="acms-admin-btn acms-admin-btn-primary customFieldGroupBtn" data-action="showGroup">グループ生成</button>
            }
          </td>
        </tr>
      </table>
      {openGroup && 
      <div>
        <div data-id="group"></div>
        <p>
          <button data-action="clearGroupInput" className="acms-admin-btn-admin">クリア</button>
          <button data-action="addGroup" className="acms-admin-btn-admin acms-admin-btn-admin-primary acms-admin-btn-admin-save">生成</button>
        </p>
      </div>}
    </div>
    );
  }
}