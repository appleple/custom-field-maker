import React, { useCallback, useState } from 'react';
import Tooltip from '../Tooltip';
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

export function FieldGroup() {
  const [field, setField] = useState(defaultProps);
  const {
    state: { fieldgroup },
    setGroupTitleName,
    addGroupItem,
    clearGroup,
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
      }));
      setGroupTitleName(field.groupTitle, field.groupName);
    }
  }, [field, setGroupTitleName]);

  const addGroup = useCallback(() => {
    const flg = {
      unDuplicatedField: false,
      unAlert: false,
    };
    if (field.name === field.groupName) {
      setField((prevState) => ({ ...prevState, duplicatedField: true }));
    } else {
      setField((prevState) => ({ ...prevState, duplicatedField: false }));
      flg.unDuplicatedField = true;
    }
    if (!field.type || !field.title || !field.name) {
      setField((prevState) => ({ ...prevState, alert: true }));
    } else {
      setField((prevState) => ({ ...prevState, alert: false }));
      flg.unAlert = true;
    }

    if (flg.unDuplicatedField && flg.unAlert) {
      addGroupItem(field);
    }
  }, [field, addGroupItem]);

  const clearGroupHandler = useCallback(() => {
    if (!confirm('生成したコードの履歴も消えてしまいます。よろしいですか？')) return;
    clearGroup();
    setField(crearField);
    setField((prevState) => ({
      ...prevState,
      openGroup: false,
      groupTitle: '',
      groupName: '',
    }));
  }, [clearGroup]);

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
            {fieldgroup.title && fieldgroup.name && (
              <button className="acms-admin-btn-admin acms-admin-btn-admin-danger" onClick={clearGroupHandler}>
                グループを削除
              </button>
            )}
          </div>
          <GroupAlert field={field} setField={setField} />

          {fieldgroup.title && fieldgroup.name ? (
            <dl className="customFieldGeneratorGroup -openGroup" style={{ margin: 0 }}>
              <div className="customFieldGeneratorGroupTitle">
                <dt>
                  グループタイトル
                  <i className="acms-admin-icon-tooltip" data-tip data-tooltip-id="group-title-tip" />
                  <Tooltip id="group-title-tip" place="top" variant="dark">
                    <span>カスタムフィールドグループのテーブル用のタイトルとなります。</span>
                  </Tooltip>
                </dt>
                <dd>{fieldgroup.title}</dd>
              </div>
              <div className="customFieldGeneratorGroupVal">
                <dt>
                  フィールド名（変数）
                  <i className="acms-admin-icon-tooltip" data-tooltip-id="group-field-tip" />
                  <Tooltip id="group-field-tip" place="top" variant="dark">
                    <span>カスタムフィールドグループのフィールド名です。値を必ず入力してください。</span>
                  </Tooltip>
                </dt>
                <dd>{fieldgroup.name}</dd>
              </div>
            </dl>
          ) : (
            <>
              <div className="customFieldGeneratorGroup">
                <div className="customFieldGeneratorGroupTitle">
                  <label htmlFor="groupTitle">
                    グループのタイトル
                    <i className="acms-admin-icon-tooltip" data-tooltip-id="group-title-tip" />
                    <Tooltip id="group-title-tip" place="top" variant="dark">
                      <span>カスタムフィールドグループのテーブル用のタイトルとなります。</span>
                    </Tooltip>
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

                <div className="customFieldGeneratorGroupVal">
                  <label htmlFor="groupName">
                    フィールド名（変数）
                    <i className="acms-admin-icon-tooltip" data-tooltip-id="group-field-tip" />
                    <Tooltip id="group-field-tip" place="top" variant="dark">
                      <span>カスタムフィールドグループのフィールド名です。値を必ず入力してください。</span>
                    </Tooltip>
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
                  {fieldgroup.title && fieldgroup.name ? (
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

        {fieldgroup.title && fieldgroup.name && (
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
                  {<ImageOption setField={setField} />}
                  {<ImageResizeOption field={field} setField={setField} />}
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
