import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import inputTypesJson from '../../../../json/input-types.json';

export function Basic(props) {
  const { field, setField } = props;
  const [isPlaceholder, setIsPlaceholder] = useState(true);

  function TypeSelector() {
    const onChange = (e) => {
      const type = e.target.value;

      if (!type) return;
      if (
        (type === 'text') |
        (type === 'tel') |
        (type === 'number') |
        (type === 'email') |
        (type === 'password') |
        (type === 'textarea')
      ) {
        setIsPlaceholder(true);
      } else {
        setIsPlaceholder(false);
      }
      setField((prevState) => ({
        ...prevState,
        type,
      }));
    };

    return (
      <select id="type" value={field.type || ''} className="acms-admin-form-width-full" onChange={onChange}>
        {inputTypesJson.map((group, groupIndex) => {
          const [groupName, options] = Object.entries(group)[0];
          return (
            <optgroup key={groupIndex} label={groupName}>
              {options.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </optgroup>
          );
        })}
      </select>
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
    <div className="customFieldGeneratorBasic">
      <div className="customFieldGeneratorBasicInput">
        <label className="">
          タイプ
          <span className="acms-admin-label acms-admin-label-danger">必須</span>
        </label>
        <div>
          <TypeSelector />
        </div>
      </div>
      <div className="customFieldGeneratorBasicTitle">
        <label className="">
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
        </label>
        <div>
          <input
            type="text"
            value={field.title || ''}
            onChange={(e) => handleInputChange(e, 'title')}
            className="acms-admin-form-width-full"
            placeholder="氏名"
          />
        </div>
      </div>
      <div className="customFieldGeneratorBasicField">
        <label className="">
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
        </label>
        <div>
          <input
            type="text"
            value={field.name || ''}
            onChange={(e) => handleInputChange(e, 'name')}
            className="acms-admin-form-width-full"
            placeholder="name"
          />
        </div>
      </div>
      <div className="customFieldGeneratorBasicTooltip">
        <label className="">ツールチップ</label>
        <div>
          <input
            type="text"
            value={field.tooltip || ''}
            onChange={(e) => handleInputChange(e, 'tooltip')}
            className="acms-admin-form-width-full"
            placeholder="姓名をスペースなしで入力して下さい"
          />
        </div>
      </div>
      {isPlaceholder && (
        <div className="customFieldGeneratorBasicPlaceholder">
          <label className="">プレースホルダー</label>
          <div>
            <input
              type="text"
              value={field.placeholder || ''}
              onChange={(e) => handleInputChange(e, 'placeholder')}
              className="acms-admin-form-width-full"
              placeholder="例）林檎太郎"
            />
          </div>
        </div>
      )}
    </div>
  );
}
