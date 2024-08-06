import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Notify } from '../Notify';
import { useMakerContext } from '../../store/MakerContext';

export function PreviewNavigator() {
  const {
    clearCustomfield,
    clearCustomunit,
    clearGroupItem,
    clearUnitGroupItem,
    setTag,
    setAcmscss,
    setJsValidator,
    setCopied,
    preview: { jsValidator, acmscss, mode, editMode },
    clipboard: { source },
  } = useMakerContext();

  const updateTag = (tag) => {
    setTag(tag);
  };

  const onAcmscss = () => {
    setAcmscss(!acmscss);
  };

  const onJsValidator = () => {
    setJsValidator(!jsValidator);
  };

  return (
    <>
      <div className="acms-admin-form-checkbox" style={{ marginTop: '5px' }}>
        <input type="checkbox" onChange={onAcmscss} checked={acmscss} id="acmscss-checkbox" />
        <label htmlFor="acmscss-checkbox">
          <i className="acms-admin-ico-checkbox" />
          acms-admin.cssを使用する
        </label>
      </div>

      {(mode === 'normal' || mode === 'group') && (
        <div className="acms-admin-form-checkbox" style={{ marginTop: '5px' }}>
          <input type="checkbox" onChange={onJsValidator} checked={jsValidator} id="jsvalidator-checkbox" />
          <label htmlFor="jsvalidator-checkbox">
            <i className="acms-admin-ico-checkbox" />
            JavaScriptによるバリデートを使用する
          </label>
        </div>
      )}

      <select id="tag" onChange={(e) => updateTag(e.target.value)} className="acms-admin-form-width-quarter">
        <option value="section">--</option>
        <option value="table">table</option>
      </select>

      {mode === 'normal' && (
        <button
          onClick={() => clearCustomfield()}
          className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right"
        >
          履歴クリア
        </button>
      )}
      {mode === 'group' && (
        <button
          onClick={() => clearGroupItem()}
          className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right"
        >
          履歴クリア
        </button>
      )}
      {mode === 'unit' && (
        <button
          onClick={() => clearCustomunit()}
          className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right"
        >
          履歴クリア
        </button>
      )}
      {mode === 'unit-group' && (
        <button
          onClick={() => clearUnitGroupItem()}
          className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right"
        >
          履歴クリア
        </button>
      )}

      {editMode !== 'preview' && (
        <div style={{ display: 'inline-block', position: 'relative', float: 'right', marginRight: '10px' }}>
          <CopyToClipboard text={source} onCopy={() => setCopied(true)}>
            <button className="acms-admin-btn-admin">コードをコピー</button>
          </CopyToClipboard>
          <Notify message="クリップボードにコピーしました" onFinish={() => setCopied(false)} />
        </div>
      )}
    </>
  );
}
