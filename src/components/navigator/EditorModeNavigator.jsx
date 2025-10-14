import { useMakerContext } from '../../stores/MakerContext';

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
          value="customfield"
          id="input-radio-mode-normal"
          checked={mode === 'customfield'}
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
          value="fieldgroup"
          id="input-radio-mode-group"
          checked={mode === 'fieldgroup'}
          onChange={updateMode}
        />
        <label htmlFor="input-radio-mode-group">
          <i className="acms-admin-ico-radio" />
          カスタムフィールドグループ
        </label>
      </div>
      <div className="acms-admin-form-radio">
        <input
          type="radio"
          value="customunit"
          id="input-radio-mode-unit"
          checked={mode === 'customunit'}
          onChange={updateMode}
        />
        <label htmlFor="input-radio-mode-unit">
          <i className="acms-admin-ico-radio" />
          カスタムユニット
        </label>
      </div>
      <div className="acms-admin-form-radio">
        <input
          type="radio"
          value="unitgroup"
          id="input-radio-mode-unit-group"
          checked={mode === 'unitgroup'}
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
