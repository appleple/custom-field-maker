import React from 'react';
import { useMakerContext } from '../../store/MakerContext';

export function EditorModeNavigator() {
  const {
    preview: { mode },
    setMode,
  } = useMakerContext();

  const updateMode = (e) => {
    const newMode = e.target.value;
    setMode(newMode);
  };

  return (
    <>
      <div className="acms-admin-form-radio">
        <input
          type="radio"
          value="normal"
          id="input-radio-mode-normal"
          checked={mode === 'normal'}
          onChange={updateMode}
        />
        <label htmlFor="input-radio-mode-normal">
          <i className="acms-admin-ico-radio" />
          カスタムフィールド
        </label>
      </div>
      <div className="acms-admin-form-radio">
        <input
          type="radio"
          value="group"
          id="input-radio-mode-group"
          checked={mode === 'group'}
          onChange={updateMode}
        />
        <label htmlFor="input-radio-mode-group">
          <i className="acms-admin-ico-radio" />
          カスタムフィールドグループ
        </label>
      </div>
      <div className="acms-admin-form-radio">
        <input type="radio" value="unit" id="input-radio-mode-unit" checked={mode === 'unit'} onChange={updateMode} />
        <label htmlFor="input-radio-mode-unit">
          <i className="acms-admin-ico-radio" />
          カスタムユニット
        </label>
      </div>
      <div className="acms-admin-form-radio">
        <input
          type="radio"
          value="unit-group"
          id="input-radio-mode-unit-group"
          checked={mode === 'unit-group'}
          onChange={updateMode}
        />
        <label htmlFor="input-radio-mode-unit-group">
          <i className="acms-admin-ico-radio" />
          カスタムユニット（フィールドグループ）
        </label>
      </div>
    </>
  );
}
