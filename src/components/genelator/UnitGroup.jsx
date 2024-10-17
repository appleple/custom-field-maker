<<<<<<< HEAD
import React from 'react';
import { Tooltip } from 'react-tooltip';
import Base from './base';
import { MakerContext } from '../../store/MakerContext';

export default class UnitGroup extends Base {
<<<<<<< HEAD
<<<<<<< HEAD:src/components/unit-group.js
=======
  static contextType = MakerContext
=======
  static contextType = MakerContext;
>>>>>>> 95afb3b (カスタムフィールドの入力種類を追加)

>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/UnitGroup.jsx
  constructor(props) {
    super(props);
    this.state = {
      type: 'text',
      subType: '',
      title: '',
      name: '',
      tooltip: '',
      alert: '',
      duplicatedField: '',
      path: 'path',
      converter: '',
      normal: 'size',
<<<<<<< HEAD
<<<<<<< HEAD
      resize: 'true',
=======
>>>>>>> 95afb3b (カスタムフィールドの入力種類を追加)
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
<<<<<<< HEAD
=======
      option: [{
        value: '',
        label: ''
      }],
      validator: [{
        option: '',
        value: '',
        message: ''
      }],
>>>>>>> 51184c2 (build: eslint を導入)
=======
>>>>>>> 95afb3b (カスタムフィールドの入力種類を追加)
      optionFormat: 'pref',
      unitGroupTitle: '',
      unitGroupName: '',
      openValidator: false,
      openConverter: false,
      groupAlert: false,
      openGroup: false,
      alt: false,
      resize: true,
      fileNameMethod: 'random',
      useDropArea: true,
      useExpand: true,
      dropAreaWidth: 200,
      dropAreaHeight: 200,
      useFocusImage: true,
      focusImageWidth: 400,
      focusImageHeight: 400,
      startHeadingLevel: 2,
      endHeadingLevel: 3,
      mediaType: 'image',
    };
  }
=======
import React, { useCallback, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { useMakerContext } from '../../store/MakerContext';
import { Alert } from './base/Alert';
import { GroupAlert } from './base/GroupAlert';
import { DuplicateAlert } from './base/DuplicateAlert';
import { Basic } from './base/Basic';
import { ConverterModal } from './base/ConverterModal';
import { Snippet } from './base/Snippet';
import { Operator } from './base/Operator';
import { Validator } from './base/Validator';
import { OptionItem } from './base/OptionItem';
import { MediaOption } from './base/MediaOption';
import { ImageOption } from './base/ImageOption';
import { ImageResizeOption } from './base/ImageResizeOption';
import { FileOption } from './base/FileOption';
import { RichEditorOption } from './base/RichEditorOption';

const defaultProps = {
  type: 'text',
  title: '',
  name: '',
  placeholder: '',
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

const crearField = {
  title: '',
  name: '',
  path: '',
  normalSize: '',
  tiny: '',
  tinySize: '',
  large: '',
  largeSize: '',
  square: '',
  squareSize: '',
  alt: true,
  resize: true,
  useExpand: true,
  useDropArea: true,
  dropAreaWidth: 200,
  dropAreaHeight: 200,
  useFocusImage: false,
  focusImageWidth: 400,
  focusImageHeight: 400,
  startHeadingLevel: 2,
  endHeadingLevel: 3,
  mediaType: 'image',
  openConverter: '',
  openValidator: '',
  converter: '',
  tooltip: '',
  placeholder: '',
};
>>>>>>> e53ec4b (ユニットグループ追加、メディアの対応確認)

export function UnitGroup() {
  const [field, setField] = useState(defaultProps);
  const {
    state: { unitgroup },
    setUnitGroupTitleName,
    addUnitGroupItem,
    clearUnitGroup,
  } = useMakerContext();

  const showGroup = useCallback(() => {
    if (!field.groupName) {
      setField((prevState) => ({ ...prevState, groupAlert: true }));
    } else {
      setField((prevState) => ({
        ...prevState,
        groupAlert: false,
        duplicatedField: false,
        openGroup: true,
<<<<<<< HEAD
      });
<<<<<<< HEAD:src/components/unit-group.js
      actions.setUnitGroupTitleName({
        unitGroupTitle,
        unitGroupName,
      });
=======
      setUnitGroupTitleName(unitGroupTitle, unitGroupName);
>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/UnitGroup.jsx
=======
      }));
      setUnitGroupTitleName(field.groupTitle, field.groupName);
>>>>>>> e53ec4b (ユニットグループ追加、メディアの対応確認)
    }
  }, [field, setUnitGroupTitleName]);

  const addGroup = useCallback(() => {
    if (field.name == field.groupName) {
      setField((prevState) => ({ ...prevState, duplicatedField: true }));
      return;
    }
<<<<<<< HEAD
    if (type && title && name) {
<<<<<<< HEAD:src/components/unit-group.js
      actions.setUnitGroupTitleName({
        unitGroupName,
        unitGroupTitle,
      });
      actions.addUnitGroupItem(this.state);
=======
      setUnitGroupTitleName(unitGroupName, unitGroupTitle);
      addUnitGroupItem(this.state);
>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/UnitGroup.jsx
=======
    if (field.type && field.title && field.name) {
      addUnitGroupItem(field);
>>>>>>> e53ec4b (ユニットグループ追加、メディアの対応確認)
    } else {
      setField((prevState) => ({ ...prevState, alert: true }));
    }
  }, [field, setUnitGroupTitleName, addUnitGroupItem]);

  const clearGroupHandler = useCallback(() => {
    if (!confirm('生成したコードの履歴も消えてしまいます。よろしいですか？')) return;
    clearUnitGroup();
    setField(crearField);
    setField((prevState) => ({
      ...prevState,
      openGroup: false,
      groupTitle: '',
      groupName: '',
    }));
  }, [clearUnitGroup]);

  return (
    <div>
      <div className="customFieldContainer">
        <div>
          <div className="acms-flex acms-justify-between" style={{ marginBottom: '1em' }}>
            <h2
              style={{
                margin: 0,
              }}
            >
              グループ名
            </h2>
            {unitgroup.title && unitgroup.name && (
              <button className="acms-admin-btn-admin acms-admin-btn-admin-danger" onClick={clearGroupHandler}>
                グループを削除
              </button>
            )}
          </div>
          <GroupAlert field={field} setField={setField} />

<<<<<<< HEAD
            <div className="customFieldGeneratorGroupVal">
              <label htmlFor="groupName">
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
              </label>
              <div>
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
              </div>
            </div>

            <div className="customFieldGeneratorGroupButton">
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
            </div>
          </div>
        )}
        {field.openGroup && (
<<<<<<< HEAD
          <div>
            <div className="customFieldLine" />
            <table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableGroup">
              <tbody>
                <tr>
                  <th className="acms-admin-table-left">
                    グループのタイトル
<<<<<<< HEAD
                    <i className="acms-admin-icon-tooltip" data-tooltip-id="unit-group-title-tip" />
                    <Tooltip
                      id="unit-group-title-tip"
                      place="top"
                      variant="dark"
                      className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                    >
                      <span>フィールドグループのテーブル用のタイトルとなります。</span>
                    </Tooltip>
=======
                    <i className="acms-admin-icon-tooltip" data-tip data-for="unit-group-title-tip" />
                    <ReactTooltip
                      id="unit-group-title-tip"
                      place="top"
                      type="dark"
                      effect="solid"
                      className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                    >
                      <span>フィールドグループのテーブル用のタイトルとなります。</span>
                    </ReactTooltip>
<<<<<<< HEAD
>>>>>>> 95afb3b (カスタムフィールドの入力種類を追加)
                    <span className="acms-admin-label acms-admin-label-danger">必須</span>
=======
>>>>>>> e53ec4b (ユニットグループ追加、メディアの対応確認)
                  </th>
                  <th className="acms-admin-table-left" colSpan="2">
                    フィールド名（変数）
<<<<<<< HEAD
                    <i className="acms-admin-icon-tooltip" data-tooltip-id="unit-group-field-tip" />
                    <Tooltip
                      id="unit-group-field-tip"
                      place="top"
                      variant="dark"
                      className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                    >
                      <span>フィールドグループのフィールド名です。値を必ず入力してください。</span>
                    </Tooltip>
=======
                    <i className="acms-admin-icon-tooltip" data-tip data-for="unit-group-field-tip" />
                    <ReactTooltip
                      id="unit-group-field-tip"
                      place="top"
                      type="dark"
                      effect="solid"
                      className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                    >
                      <span>フィールドグループのフィールド名です。値を必ず入力してください。</span>
                    </ReactTooltip>
<<<<<<< HEAD
>>>>>>> 95afb3b (カスタムフィールドの入力種類を追加)
                    <span className="acms-admin-label acms-admin-label-danger">必須</span>
                  </th>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
<<<<<<< HEAD
                      value={unitGroupTitle}
=======
                      defaultValue={unitGroupTitle}
>>>>>>> 95afb3b (カスタムフィールドの入力種類を追加)
                      onInput={(e) => {
                        this.updateState('unitGroupTitle', e.target.value);
                      }}
                      className="acms-admin-form-width-full"
                      placeholder="例）スタッフリスト"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
<<<<<<< HEAD
                      value={unitGroupName}
=======
                      defaultValue={unitGroupName}
>>>>>>> 95afb3b (カスタムフィールドの入力種類を追加)
                      onInput={(e) => {
                        this.updateState('unitGroupName', e.target.value);
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
                        disabled
                      >
                        グループ生成
                      </button>
                    ) : (
                      <button
                        className="acms-admin-btn acms-admin-btn-primary customFieldGroupBtn"
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
            <div>
              <div className="customFieldLine" />
              <table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableGroup">
                <tbody>
                  <tr>
                    <th className="acms-admin-table-left">
                      グループのタイトル
<<<<<<< HEAD
                      <i className="acms-admin-icon-tooltip" data-tooltip-id="unit-group-title-tip" />
                      <Tooltip
                        id="unit-group-title-tip"
                        place="top"
                        variant="dark"
                        className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                      >
                        <span>フィールドグループのテーブル用のタイトルとなります。</span>
                      </Tooltip>
                    </th>
                    <th className="acms-admin-table-left" colSpan="2">
                      フィールド名（変数）
                      <i className="acms-admin-icon-tooltip" data-tooltip-id="unit-group-field-tip" />
                      <Tooltip
                        id="unit-group-field-tip"
                        place="top"
                        variant="dark"
                        className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                      >
                        <span>フィールドグループのフィールド名です。値を必ず入力してください。</span>
                      </Tooltip>
=======
                      <i className="acms-admin-icon-tooltip" data-tip data-for="unit-group-title-tip" />
                      <ReactTooltip
                        id="unit-group-title-tip"
                        place="top"
                        type="dark"
                        effect="solid"
                        className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                      >
                        <span>フィールドグループのテーブル用のタイトルとなります。</span>
                      </ReactTooltip>
                    </th>
                    <th className="acms-admin-table-left" colSpan="2">
                      フィールド名（変数）
                      <i className="acms-admin-icon-tooltip" data-tip data-for="unit-group-field-tip" />
                      <ReactTooltip
                        id="unit-group-field-tip"
                        place="top"
                        type="dark"
                        effect="solid"
                        className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                      >
                        <span>フィールドグループのフィールド名です。値を必ず入力してください。</span>
                      </ReactTooltip>
>>>>>>> 95afb3b (カスタムフィールドの入力種類を追加)
                    </th>
                  </tr>
                  <tr>
                    <td>{unitGroupTitle}</td>
                    <td>{unitGroupName}</td>
                  </tr>
                </tbody>
              </table>
              {this.renderModal()}
              {this.renderBasic()}
=======
                  </th>
                </tr>
                <tr>
                  <td>{field.groupTitle}</td>
                  <td>{field.groupName}</td>
                </tr>
              </tbody>
            </table>
            <ConverterModal field={field} setField={setField} />
=======
          <>
=======
          {unitgroup.title && unitgroup.name ? (
>>>>>>> 0432564 (Fixed an issue where group names would disappear when switching fields in a group.)
            <dl className="customFieldGeneratorGroup -openGroup" style={{ margin: 0 }}>
              <div className="customFieldGeneratorGroupTitle">
                <dt>
                  グループタイトル
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
                </dt>
                <dd>{unitgroup.title}</dd>
              </div>
              <div className="customFieldGeneratorGroupVal">
                <dt>
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
                </dt>
                <dd>{unitgroup.name}</dd>
              </div>
            </dl>
          ) : (
            <>
              <div className="customFieldGeneratorGroup">
                <div className="customFieldGeneratorGroupTitle">
                  <label htmlFor="groupTitle">
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
                  </label>
                  <div>
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
                  </div>
                </div>

<<<<<<< HEAD
>>>>>>> f4e47e5 (Design fixes for group generators and form options.)
            <Basic field={field} setField={setField} />
>>>>>>> e53ec4b (ユニットグループ追加、メディアの対応確認)
=======
                <div className="customFieldGeneratorGroupVal">
                  <label htmlFor="groupName">
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
                  </label>
                  <div>
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
                  </div>
                </div>
                <div className="customFieldGeneratorGroupButton">
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
                </div>
              </div>
            </>
          )}
        </div>
>>>>>>> 0432564 (Fixed an issue where group names would disappear when switching fields in a group.)

        {unitgroup.title && unitgroup.name && (
          <div>
            <h2 className="customFieldHeading2">コード生成</h2>
            <div className="customFieldFunction">
              {(field.alert || field.duplicatedField) && (
                <div>
                  <DuplicateAlert field={field} setField={setField} />
                  <Alert field={field} setField={setField} />
                </div>
              )}
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
                  <ImageOption setField={setField} />
                  <ImageResizeOption field={field} setField={setField} />
                </div>
              )}
              {field.type === 'file' && (
                <div>
                  <FileOption field={field} setField={setField} />
                </div>
              )}
              {field.type === 'media' && (
                <div>
                  <MediaOption field={field} setField={setField} />
                </div>
              )}
              {field.type === 'rich-editor' && (
                <div>
                  <RichEditorOption field={field} setField={setField} />
                </div>
              )}
              <Validator field={field} setField={setField} />
              <Operator setField={setField} onSubmit={addGroup} />
            </div>
          </div>
        )}
      </div>

      <ConverterModal field={field} setField={setField} />
    </div>
  );
}
