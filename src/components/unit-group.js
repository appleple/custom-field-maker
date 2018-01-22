import React from 'react';
import ReactTooltip from 'react-tooltip';
import Base from './base';

export default class UnitGroup extends Base {

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
      unitGroupTitle: '',
      unitGroupName: '',
      openValidator: false,
      openConverter: false,
      groupAlert: false,
      openGroup: false
    };
  }

  showGroup() {
    const { actions } = this.props;
    const { unitGroupName, unitGroupTitle } = this.state;
    if (!unitGroupName) {
      this.setState({
        groupAlert: true
      })
    } else {
      this.setState({
        groupAlert: false,
        duplicatedField: false,
        openGroup: true
      });
      actions.setUnitGroupTitleName({
        unitGroupTitle, unitGroupName
      })
    }

  }

  addGroup() {
    const { actions } = this.props;
    const { type, title, name, unitGroupName } = this.state;
    if (name == unitGroupName) {
      this.setState({
        duplicatedField: true
      });
      return;
    }
    if (type && title && name) {
      actions.addUnitGroupItem(this.state);
    } else {
      this.setState({
        alert: true
      })
    }
  }

  render() {
    const { groupAlert, duplicatedField, openGroup, unitGroupTitle, unitGroupName, type, title, name, tooltip } = this.state;
    return (
      <div>
        {groupAlert && <p className="acms-admin-alert acms-admin-alert-danger"><button className="js-acms-alert-close" data-action="removeGroupAlert">×</button>group名を入力しないとgroupを生成できません。</p>}
        {duplicatedField && <p className="acms-admin-alert acms-admin-alert-danger"><button className="js-acms-alert-close" data-action="removeGroupAlert">×</button>group名とフィールド名を同じ値にすることはできません。</p>}
        <h2 className="acms-admin-admin-title2">カスタムユニットグループ</h2>
        <div className="acms-admin-filter">
          <table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableGroup">
            <tr>
              <th className="acms-admin-table-left">ユニットグループのタイトル
                <i className="acms-admin-icon-tooltip" data-tip data-for="unit-group-title-tip"></i>
                <ReactTooltip id="unit-group-title-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
                  <span>カスタムユニットグループのテーブル用のタイトルとなります。</span>
                </ReactTooltip>
                <span className="acms-admin-label acms-admin-label-danger">必須</span>
              </th>
              <th className="acms-admin-table-left" colspan="2">フィールド名（変数）
                <i className="acms-admin-icon-tooltip" data-tip data-for="unit-group-field-tip"></i>
                <ReactTooltip id="unit-group-field-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
                  <span>カスタムユニットグループのフィールド名です。値を必ず入力してください。</span>
                </ReactTooltip>
                <span className="acms-admin-label acms-admin-label-danger">必須</span></th>
            </tr>
            <tr>
              <td><input type="text" value={unitGroupTitle} onInput={(e) => { this.updateState('unitGroupTitle', e.target.value) }} className="acms-admin-form-width-full" placeholder="例）スタッフリスト" /></td>
              <td><input type="text" value={unitGroupName} onInput={(e) => { this.updateState('unitGroupName', e.target.value) }} className="acms-admin-form-width-full" placeholder="例）group_staff" /></td>
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
                <button onClick={this.clearValue.bind(this)} className="acms-admin-btn-admin" style={{ marginRight: '5px' }}>クリア</button>
                <button onClick={this.addGroup.bind(this)} className="acms-admin-btn-admin acms-admin-btn-admin-primary">生成</button>
              </p>
            </div>}
        </div>
      </div>
    );
  }
}