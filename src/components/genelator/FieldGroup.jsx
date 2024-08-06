<<<<<<< HEAD
import React from 'react';
import { Tooltip } from 'react-tooltip';
import Base from './base';
import { MakerContext } from '../../store/MakerContext';

export default class FieldGroup extends Base {
<<<<<<< HEAD:src/components/field-group.js
=======
  static contextType = MakerContext

>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/FieldGroup.jsx
  constructor(props) {
    super(props);
    this.state = {
      type: 'text',
      subType: '',
      title: '',
      name: '',
      tooltip: '',
      alert: false,
      duplicatedField: '',
      path: 'path',
      converter: '',
      normal: 'size',
      useDropArea: true,
      dropAreaWidth: 200,
      dropAreaHeight: 200,
      useFocusImage: false,
      focusImageWidth: 400,
      focusImageHeight: 400,
      startHeadingLevel: 2,
      endHeadingLevel: 3,
      mediaType: 'image',
<<<<<<< HEAD:src/components/field-group.js
      option: [
        {
          value: '',
          label: '',
        },
      ],
      validator: [
        {
          option: '',
          value: '',
          message: '',
        },
      ],
=======
      useExpand: true,
      option: [{
        value: '',
        label: ''
      }],
      validator: [{
        option: '',
        value: '',
        message: ''
      }],
>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/FieldGroup.jsx
      optionFormat: 'pref',
      openValidator: false,
      openConverter: false,
      alt: false,
      fileNameMethod: 'random',
      groupAlert: false,
      openGroup: false,
<<<<<<< HEAD:src/components/field-group.js
      alt: false,
      fileNameMethod: 'random',
=======
      groupTitle: '',
      groupName: ''
>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/FieldGroup.jsx
    };
  }

  showGroup() {
    const { setGroupTitleName } = this.context
    const { groupName, groupTitle } = this.state;
    if (!groupName) {
      this.setState({
        groupAlert: true,
      });
=======
import React, { useCallback, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { useMakerContext } from '../../store/MakerContext';
import { FieldClear } from './base/FieldClear';
import { Alert } from './base/Alert';
import { GroupAlert } from './base/GroupAlert';
import { DuplicateAlert } from './base/DuplicateAlert';
import { Basic } from './base/Basic';
import { ConverterModal } from './base/ConverterModal';
import { Snippet } from './base/Snippet';
import { Maker } from './base/Maker';
import { Validator } from './base/Validator';
import { OptionItem } from './base/OptionItem';
import { MediaOption } from './base/MediaOption';
import { ImageOption } from './base/ImageOption';
import { ImageResizeOption } from './base/ImageResizeOption';
import { FileOption } from './base/FileOption';
import { RichEditorOption } from './base/RichEditorOption';

const defaultProps = {
  type: 'text',
  subType: '',
  title: '',
  name: '',
  tooltip: '',
  alert: false,
  duplicatedField: '',
  path: 'path',
  converter: '',
  normal: 'size',
  useDropArea: true,
  dropAreaWidth: 200,
  dropAreaHeight: 200,
  useFocusImage: false,
  focusImageWidth: 400,
  focusImageHeight: 400,
  startHeadingLevel: 2,
  endHeadingLevel: 3,
  mediaType: 'image',
  useExpand: true,
  option: [
    {
      value: '',
      label: '',
    },
  ],
  validator: [
    {
      option: '',
      value: '',
      message: '',
    },
  ],
  optionFormat: 'pref',
  openValidator: false,
  openConverter: false,
  alt: false,
  fileNameMethod: 'random',
  groupAlert: false,
  openGroup: false,
  groupTitle: '',
  groupName: '',
};

export function FieldGroup() {
  const [field, setField] = useState(defaultProps);
  const { setGroupTitleName, addGroupItem, clearGroupItem } = useMakerContext();

  const showGroup = useCallback(() => {
    if (!field.groupName) {
      setField((prevState) => ({ ...prevState, groupAlert: true }));
>>>>>>> 95afb3b (カスタムフィールドの入力種類を追加)
    } else {
      setField((prevState) => ({
        ...prevState,
        groupAlert: false,
        duplicatedField: false,
        openGroup: true,
<<<<<<< HEAD
      });
<<<<<<< HEAD:src/components/field-group.js
      actions.setGroupTitleName({
        groupTitle,
        groupName,
      });
=======
      setGroupTitleName(groupTitle, groupName);
>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/FieldGroup.jsx
=======
      }));
      setGroupTitleName(field.groupTitle, field.groupName);
>>>>>>> 95afb3b (カスタムフィールドの入力種類を追加)
    }
  }, [field, setGroupTitleName]);

<<<<<<< HEAD
  addGroup() {
    const { setGroupTitleName, addGroupItem } = this.context
    const { type, title, name, groupTitle, groupName } = this.state;
    if (name === groupName) {
      this.setState({
        duplicatedField: true,
      });
      return;
    }
    if (type && title && name) {
<<<<<<< HEAD:src/components/field-group.js
      actions.setGroupTitleName({
        groupTitle,
        groupName,
      });
      actions.addGroupItem(this.state);
=======
      setGroupTitleName(groupTitle, groupName);
      addGroupItem(this.state);
>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/FieldGroup.jsx
    } else {
      this.setState({
        alert: true,
      });
=======
  const addGroup = useCallback(() => {
    if (field.name === field.groupName) {
      setField((prevState) => ({ ...prevState, duplicatedField: true }));
      return;
    }
    if (field.type && field.title && field.name) {
      setGroupTitleName(field.groupTitle, field.groupName);
      addGroupItem(field);
    } else {
      setField((prevState) => ({ ...prevState, alert: true }));
>>>>>>> 95afb3b (カスタムフィールドの入力種類を追加)
    }
  }, [field, setGroupTitleName, addGroupItem]);

  const addNewGroup = useCallback(() => {
    clearGroupItem();
    FieldClear(setField);
    setField((prevState) => ({
      ...prevState,
      openGroup: false,
      groupTitle: '',
      groupName: '',
<<<<<<< HEAD
    });
  }

  render() {
    const { clearGroupItem } = this.context
    const { openGroup, groupTitle, groupName, type } = this.state;
    return (
      <div>
        <h2 className="acms-admin-admin-title2">カスタムフィールドグループ</h2>
        <div className="customFieldFunction">
          {this.renderGroupAlert()}
          {this.renderDuplicateAlert()}
          {this.renderAlert()}
<<<<<<< HEAD:src/components/field-group.js
          {openGroup ? (
            <div style={{ paddingBottom: '15px' }}>
              <button
                className="acms-admin-btn acms-admin-btn-primary customFieldGroupBtn"
                onClick={this.addNewGroup.bind(this)}
              >
                新規グループ作成
              </button>
            </div>
          ) : (
            <table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableGroup">
              <tbody>
                <tr>
                  <th className="acms-admin-table-left">
                    グループのタイトル
                    <i className="acms-admin-icon-tooltip" data-tooltip-id="group-title-tip" />
                    <Tooltip
                      id="group-title-tip"
                      place="top"
                      variant="dark"
                      className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                    >
                      <span>カスタムフィールドグループのテーブル用のタイトルとなります。</span>
                    </Tooltip>
                    <span className="acms-admin-label acms-admin-label-danger">必須</span>
                  </th>
                  <th className="acms-admin-table-left" colSpan="2">
                    フィールド名（変数）
                    <i className="acms-admin-icon-tooltip" data-tooltip-id="group-field-tip" />
                    <Tooltip
                      id="group-field-tip"
                      place="top"
                      variant="dark"
                      className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                    >
                      <span>カスタムフィールドグループのフィールド名です。値を必ず入力してください。</span>
                    </Tooltip>
                    <span className="acms-admin-label acms-admin-label-danger">必須</span>
                  </th>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      id="groupTitle"
                      value={groupTitle}
                      onInput={(e) => {
                        this.updateState('groupTitle', e.target.value);
                      }}
                      className="acms-admin-form-width-full"
                      placeholder="例）スタッフリスト"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="groupName"
                      value={groupName}
                      onInput={(e) => {
                        this.updateState('groupName', e.target.value);
                      }}
                      className="acms-admin-form-width-full"
                      placeholder="例）group_staff"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    {openGroup ? (
                      <button
                        className="acms-admin-btn acms-admin-btn-primary acms-admin-btn-disabled customFieldGroupBtn"
                        id="makeGroup"
                        disabled
                      >
                        グループ生成
                      </button>
                    ) : (
                      <button
                        className="acms-admin-btn acms-admin-btn-primary customFieldGroupBtn"
                        id="makeGroup"
                        onClick={this.showGroup.bind(this)}
                      >
                        グループ生成
                      </button>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          {openGroup && (
=======
          {openGroup ? <div style={{ paddingBottom: '15px' }}>
            <button className="acms-admin-btn acms-admin-btn-primary customFieldGroupBtn" onClick={this.addNewGroup.bind(this)}>新規グループ作成</button></div>
            :
=======
    }));
  }, [clearGroupItem]);

  return (
    <div>
      <h2 className="acms-admin-admin-title2">カスタムフィールドグループ</h2>
      <div className="customFieldFunction">
        <GroupAlert field={field} setField={setField} />
        <DuplicateAlert field={field} setField={setField} />
        <Alert field={field} setField={setField} />

        {field.openGroup ? (
          <div style={{ paddingBottom: '15px' }}>
            <button className="acms-admin-btn acms-admin-btn-primary customFieldGroupBtn" onClick={addNewGroup}>
              新規グループ作成
            </button>
          </div>
        ) : (
>>>>>>> 95afb3b (カスタムフィールドの入力種類を追加)
          <table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableGroup">
            <tbody>
              <tr>
                <th className="acms-admin-table-left">
                  グループのタイトル
                  <i className="acms-admin-icon-tooltip" data-tip data-for="group-title-tip" />
                  <ReactTooltip
                    id="group-title-tip"
                    place="top"
                    type="dark"
                    effect="solid"
                    className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                  >
                    <span>カスタムフィールドグループのテーブル用のタイトルとなります。</span>
                  </ReactTooltip>
                  <span className="acms-admin-label acms-admin-label-danger">必須</span>
                </th>
                <th className="acms-admin-table-left" colSpan="2">
                  フィールド名（変数）
                  <i className="acms-admin-icon-tooltip" data-tip data-for="group-field-tip" />
                  <ReactTooltip
                    id="group-field-tip"
                    place="top"
                    type="dark"
                    effect="solid"
                    className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                  >
                    <span>カスタムフィールドグループのフィールド名です。値を必ず入力してください。</span>
                  </ReactTooltip>
                  <span className="acms-admin-label acms-admin-label-danger">必須</span>
                </th>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    id="groupTitle"
                    defaultValue={field.groupTitle}
                    onInput={(e) => {
                      const value = e.target.value;
                      if (!value) return;
                      setField((prevState) => ({ ...prevState, groupTitle: value }));
                    }}
                    className="acms-admin-form-width-full"
                    placeholder="例）スタッフリスト"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="groupName"
                    defaultValue={field.groupName}
                    onInput={(e) => {
                      const value = e.target.value;
                      if (!value) return;
                      setField((prevState) => ({ ...prevState, groupName: value }));
                    }}
                    className="acms-admin-form-width-full"
                    placeholder="例）group_staff"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  {field.openGroup ? (
                    <button
                      className="acms-admin-btn acms-admin-btn-primary acms-admin-btn-disabled customFieldGroupBtn"
                      id="makeGroup"
                      disabled
                    >
                      グループ生成
                    </button>
                  ) : (
                    <button
                      className="acms-admin-btn acms-admin-btn-primary customFieldGroupBtn"
                      id="makeGroup"
                      onClick={showGroup}
                    >
                      グループ生成
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
<<<<<<< HEAD
          }
          {openGroup &&
>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/FieldGroup.jsx
            <div>
              <div className="customFieldLine" />
              <table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableGroup">
                <tbody>
                  <tr>
<<<<<<< HEAD:src/components/field-group.js
                    <th className="acms-admin-table-left">
                      グループのタイトル
                      <i className="acms-admin-icon-tooltip" data-tooltip-id="group-title-tip" />
                      <Tooltip
                        id="group-title-tip"
                        place="top"
                        variant="dark"
                        className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                      >
                        <span>カスタムフィールドグループのテーブル用のタイトルとなります。</span>
                      </Tooltip>
                    </th>
                    <th className="acms-admin-table-left" colSpan="2">
                      フィールド名（変数）
                      <i className="acms-admin-icon-tooltip" data-tooltip-id="group-field-tip" />
                      <Tooltip
                        id="group-field-tip"
                        place="top"
                        variant="dark"
                        className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                      >
                        <span>カスタムフィールドグループのフィールド名です。値を必ず入力してください。</span>
                      </Tooltip>
                    </th>
=======
                    <th className="acms-admin-table-left">グループのタイトル
                  <i className="acms-admin-icon-tooltip" data-tip data-for="group-title-tip" />
                    <ReactTooltip id="group-title-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
=======
        )}
        {field.openGroup && (
          <div>
            <div className="customFieldLine" />
            <table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableGroup">
              <tbody>
                <tr>
                  <th className="acms-admin-table-left">
                    グループのタイトル
                    <i className="acms-admin-icon-tooltip" data-tip data-for="group-title-tip" />
                    <ReactTooltip
                      id="group-title-tip"
                      place="top"
                      type="dark"
                      effect="solid"
                      className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                    >
>>>>>>> 95afb3b (カスタムフィールドの入力種類を追加)
                      <span>カスタムフィールドグループのテーブル用のタイトルとなります。</span>
                    </ReactTooltip>
                  </th>
                  <th className="acms-admin-table-left" colSpan="2">
                    フィールド名（変数）
                    <i className="acms-admin-icon-tooltip" data-tip data-for="group-field-tip" />
                    <ReactTooltip
                      id="group-field-tip"
                      place="top"
                      type="dark"
                      effect="solid"
                      className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                    >
                      <span>カスタムフィールドグループのフィールド名です。値を必ず入力してください。</span>
<<<<<<< HEAD
                    </ReactTooltip></th>
>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/FieldGroup.jsx
                  </tr>
                  <tr>
                    <td>{groupTitle}</td>
                    <td>{groupName}</td>
                  </tr>
                </tbody>
              </table>
              {this.renderModal()}
              {this.renderBasic()}
              <div className="customFieldLine" />
              {type === 'select' && (
                <div>
                  {this.renderSnippet()}
                  {this.renderOption()}
                </div>
              )}
              {type === 'radio' && (
                <div>
                  {this.renderSnippet()}
                  {this.renderOption()}
                </div>
              )}
              {type === 'image' && (
                <div>
                  {this.renderImage()}
                  {this.renderImageResize()}
                </div>
              )}
              {type === 'file' && <div>{this.renderFile()}</div>}
              {type === 'media' && <div>{this.renderMediaOption()}</div>}
              {type === 'rich-editor' && <div>{this.renderRichEditorOption()}</div>}
              {this.renderValidator()}
              <p>
<<<<<<< HEAD:src/components/field-group.js
                <button
                  onClick={this.clearValue.bind(this)}
                  className="acms-admin-btn-admin"
                  style={{ marginRight: '5px' }}
                >
                  クリア
                </button>
                <button
                  onClick={this.addGroup.bind(this)}
                  className="acms-admin-btn-admin acms-admin-btn-admin-primary customFieldMakeBtn"
                  style={{ marginRight: '5px' }}
                >
                  生成
                </button>
                <button onClick={this.backState.bind(this)} className="acms-admin-btn-admin">
                  元に戻す
                </button>
=======
                <button onClick={clearGroupItem} className="acms-admin-btn-admin" style={{ marginRight: '5px' }}>クリア</button>
                <button onClick={this.addGroup.bind(this)} className="acms-admin-btn-admin acms-admin-btn-admin-primary customFieldMakeBtn" style={{ marginRight: '5px' }}>生成</button>
                <button onClick={this.backState.bind(this)} className="acms-admin-btn-admin">元に戻す</button>
>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/FieldGroup.jsx
              </p>
            </div>
          )}
        </div>
=======
                    </ReactTooltip>
                  </th>
                </tr>
                <tr>
                  <td>{field.groupTitle}</td>
                  <td>{field.groupName}</td>
                </tr>
              </tbody>
            </table>
            <ConverterModal field={field} setField={setField} />
            <Basic field={field} setField={setField} />

            {field.type === 'checkbox' && (
              <div>
                <OptionItem field={field} setField={setField} add={false} />
              </div>
            )}
            {field.type === 'selectbox' && (
              <div>
                <Snippet field={field} setField={setField} />
                <OptionItem field={field} setField={setField} />
              </div>
            )}
            {field.type === 'radioButton' && (
              <div>
                <Snippet field={field} setField={setField} />
                <OptionItem field={field} setField={setField} />
              </div>
            )}
            {field.type === 'image' && (
              <div>
                {<ImageOption setField={setField} />}
                {<ImageResizeOption field={field} setField={setField} />}
              </div>
            )}
            {field.type === 'file' && (
              <div>
                <FileOption field={field} setField={setField} />
              </div>
            )}
            {field.type === 'media' && <div>{<MediaOption field={field} setField={setField} />}</div>}
            {field.type === 'rich-editor' && <div>{<RichEditorOption field={field} setField={setField} />}</div>}
            <Validator field={field} setField={setField} />
            <Maker setField={setField} onSubmit={addGroup} />
          </div>
        )}
>>>>>>> 95afb3b (カスタムフィールドの入力種類を追加)
      </div>
    </div>
  );
}
