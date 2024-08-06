import React, { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';
import inputTypesJson from '../../../../json/input-types.json';

export function Basic(props) {
  const { field, setField } = props;
  const [selectedSubTypes, setSelectedSubTypes] = useState([]);
  const [isPlaceholder, setIsPlaceholder] = useState(true);

  useEffect(() => {
    const subTypes = Array.isArray(inputTypesJson[field.type]?.subTypes) ? inputTypesJson[field.type].subTypes : [];
    setSelectedSubTypes(subTypes);
  }, [field.type]);

  function TypeSelector() {
    const onChange = (e) => {
      const type = e.target.value;
      if (!type) return;
      if ((type === 'text') | (type === 'textarea')) {
        setIsPlaceholder(true);
      } else {
        setIsPlaceholder(false);
      }
      setField((prevState) => ({
        ...prevState,
        type,
        subType: '',
      }));
    };

    return (
      <select id="type" value={field.type || ''} className="acms-admin-form-width-full" onChange={onChange}>
        {Object.keys(inputTypesJson).map((input, index) => (
          <option key={index} value={input}>
            {inputTypesJson[input].label}
          </option>
        ))}
      </select>
    );
  }

  function SubTypeSelector() {
    const onChange = (e) => {
      const subType = e.target.value;
      if (!subType) return;
      setField((prevState) => ({
        ...prevState,
        subType,
      }));
    };

    return (
      <>
        {selectedSubTypes.length > 0 && (
          <select id="subType" value={field.subType || ''} className="acms-admin-form-width-full" onChange={onChange}>
            {selectedSubTypes.map((subType) => (
              <option key={subType.value} value={subType.value}>
                {subType.label}
              </option>
            ))}
          </select>
        )}
      </>
    );
  }

  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;
    setField((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  return (
    <table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableFirst">
      <thead>
        <tr>
          <th className="acms-admin-table-left">
            入力欄の種類
            <i className="acms-admin-icon-tooltip" data-tip="React-tooltip" data-for="type-tip" />
            <ReactTooltip
              id="type-tip"
              place="top"
              type="dark"
              effect="solid"
              className="acms-admin-tooltip acms-tooltip customFieldTooltip"
            >
              <span>
                フィールドのタイプとなります。
                <br />
                選択しないと生成ボタンを押してもソースコードが生成されません。
              </span>
            </ReactTooltip>
            <span className="acms-admin-label acms-admin-label-danger">必須</span>
          </th>
          <th className="acms-admin-table-left">
            タイトル
            <i className="acms-admin-icon-tooltip" data-tip="React-tooltip" data-for="title-tip" />
            <ReactTooltip
              id="title-tip"
              place="top"
              type="dark"
              effect="solid"
              className="acms-admin-tooltip acms-tooltip customFieldTooltip"
            >
              <span>見出しになります。</span>
            </ReactTooltip>
            <span className="acms-admin-label acms-admin-label-danger">必須</span>
          </th>
          <th className="acms-admin-table-left">
            フィールド
            <i className="acms-admin-icon-tooltip" data-tip="React-tooltip" data-for="field-tip" />
            <ReactTooltip
              id="field-tip"
              place="top"
              type="dark"
              effect="solid"
              className="acms-admin-tooltip acms-tooltip customFieldTooltip"
            >
              <span>フィールド名です。name属性として使用されます。</span>
            </ReactTooltip>
            <span className="acms-admin-label acms-admin-label-danger">必須</span>
          </th>
          <th className="acms-admin-table-left">
            ツールチップ
            <i className="acms-admin-icon-tooltip" data-tip="React-tooltip" data-for="tooltip-tip" />
            <ReactTooltip
              id="tooltip-tip"
              place="top"
              type="dark"
              effect="solid"
              className="acms-admin-tooltip acms-tooltip customFieldTooltip"
            >
              <span>カスタムフィールドの説明用のツールチップを付与します。</span>
            </ReactTooltip>
          </th>
          {isPlaceholder && (
            <th className="acms-admin-table-left">
              プレースホルダー
              <i className="acms-admin-icon-tooltip" data-tip="React-tooltip" data-for="placeholder-tip" />
              <ReactTooltip
                id="placeholder-tip"
                place="top"
                type="dark"
                effect="solid"
                className="acms-admin-tooltip acms-tooltip customFieldTooltip"
              >
                <span>placeholder属性を設定します。</span>
              </ReactTooltip>
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <TypeSelector />
            <SubTypeSelector />
          </td>
          <td>
            <input
              type="text"
              value={field.title || ''}
              onChange={(e) => handleInputChange(e, 'title')}
              className="acms-admin-form-width-full"
              placeholder="例）タイトル"
            />
          </td>
          <td>
            <input
              type="text"
              value={field.name || ''}
              onChange={(e) => handleInputChange(e, 'name')}
              className="acms-admin-form-width-full"
              placeholder="例）name"
            />
          </td>
          <td>
            <input
              type="text"
              value={field.tooltip || ''}
              onChange={(e) => handleInputChange(e, 'tooltip')}
              className="acms-admin-form-width-full"
              placeholder="例）ここにツールチップを入力してください"
            />
          </td>

          {isPlaceholder && (
            <td>
              <input
                type="text"
                value={field.placeholder || ''}
                onChange={(e) => handleInputChange(e, 'placeholder')}
                className="acms-admin-form-width-full"
                placeholder="例）ここにプレースホルダーを入力してください"
              />
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
}
