import { useCallback, useState } from 'react';
import Tooltip from '../Tooltip';
import { useMakerContext } from '../../stores/MakerContext';
import { Alert } from './base/Alert';
import { GroupAlert } from './base/GroupAlert';
import { DuplicateAlert } from './base/DuplicateAlert';
import { Basic } from './base/Basic';
import { ConverterModal } from './base/ConverterModal';
import { Snippet } from './base/Snippet';
import { Operator } from './base/Operator';
import { FormOption } from './base/FormOption';
import { OptionItem } from './base/OptionItem';
import { MediaOption } from './base/MediaOption';
import { ImageOption } from './base/ImageOption';
import { ImageResizeOption } from './base/ImageResizeOption';
import { FileOption } from './base/FileOption';

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
  resize: true,
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

export function UnitGroup() {
  const [field, setField] = useState(defaultProps);
  const {
    state: { unitgroup },
    setUnitGroupTitleName,
    addUnitGroupItem,
    clearUnitGroup,
  } = useMakerContext();

  const showGroup = useCallback(() => {
    if (!field.groupTitle || !field.groupName) {
      setField((prevState) => ({ ...prevState, groupAlert: true }));
    } else {
      setField((prevState) => ({
        ...prevState,
        groupAlert: false,
        duplicatedField: false,
        openGroup: true,
      }));
      setUnitGroupTitleName(field.groupTitle, field.groupName);
    }
  }, [field, setUnitGroupTitleName]);

  const addGroup = useCallback(() => {
    if (field.name == field.groupName) {
      setField((prevState) => ({ ...prevState, duplicatedField: true }));
      return;
    }
    if (field.type && field.title && field.name) {
      addUnitGroupItem(field);
    } else {
      setField((prevState) => ({ ...prevState, alert: true }));
    }
  }, [field, addUnitGroupItem]);

  const clearGroupHandler = useCallback(() => {
    if (!confirm('生成したコードの履歴も消えてしまいます。よろしいですか？')) return;
    clearUnitGroup();
    setField(defaultProps);
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
          <div className="acms-admin-d-flex acms-admin-justify-content-between" style={{ marginBottom: '1em' }}>
            <h2
              style={{
                margin: 0,
              }}
            >
              グループ名
            </h2>
            {unitgroup.title && unitgroup.name && (
              <button
                type="button"
                className="acms-admin-btn-admin acms-admin-btn-admin-danger"
                onClick={clearGroupHandler}
              >
                グループを削除
              </button>
            )}
          </div>
          <GroupAlert field={field} setField={setField} />

          {unitgroup.title && unitgroup.name ? (
            <dl className="customFieldGeneratorGroup -openGroup" style={{ margin: 0 }}>
              <div className="customFieldGeneratorGroupTitle">
                <dt>
                  グループタイトル
                  <i className="acms-admin-icon-tooltip" data-tooltip-id="group-title-tip" />
                  <Tooltip id="group-title-tip" place="top" variant="dark">
                    <span>カスタムフィールドグループのテーブル用のタイトルとなります。</span>
                  </Tooltip>
                </dt>
                <dd>{unitgroup.title}</dd>
              </div>
              <div className="customFieldGeneratorGroupVal">
                <dt>
                  フィールド名（変数）
                  <i className="acms-admin-icon-tooltip" data-tooltip-id="group-field-tip" />
                  <Tooltip id="group-field-tip" place="top" variant="dark">
                    <span>カスタムフィールドグループのフィールド名です。値を必ず入力してください。</span>
                  </Tooltip>
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
                      type="button"
                      className="acms-admin-btn acms-admin-btn-primary acms-admin-btn-disabled customFieldGroupBtn"
                      id="makeGroup"
                      disabled
                    >
                      グループ生成
                    </button>
                  ) : (
                    <button
                      type="button"
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

              <FormOption field={field} setField={setField} />
              <Operator setField={setField} onSubmit={addGroup} />
            </div>
          </div>
        )}
      </div>

      <ConverterModal field={field} setField={setField} />
    </div>
  );
}
