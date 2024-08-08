import React from 'react';
import ReactTooltip from 'react-tooltip';
import classnames from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Notify } from '../Notify';
import { useMakerContext } from '../../store/MakerContext';
import columnIcon from '../../assets/images/add_column.svg';
import rowIcon from '../../assets/images/add_row.svg';

export function PreviewNavigator() {
  const {
    clearCustomfield,
    clearCustomunit,
    clearGroupItem,
    clearUnitGroupItem,
    setTag,
    setAcmscss,
    setJsValidator,
    setDirection,
    setCopied,
    preview: { jsValidator, acmscss, mode, editMode, tag, direction },
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

      {tag === 'table' && (mode === 'group' || mode === 'unit-group') && (
        <div style={{ marginTop: '5px' }}>
          <span className="customFieldDirectionBtnGroupSide">ソースの追加方法</span>
          <div className="customFieldDirectionBtnGroup">
            <label
              htmlFor="direction-horizontal"
              className={classnames('customFieldDirectionBtn', {
                active: direction === 'horizontal',
              })}
              data-tip
              data-for="group-field-direction-horizontal"
            >
              <input
                type="radio"
                id="direction-horizontal"
                onChange={() => setDirection('horizontal')}
                checked={direction === 'horizontal'}
              />
              <img src={columnIcon} alt="" />
            </label>
            <label
              htmlFor="direction-vertical"
              className={classnames('customFieldDirectionBtn', {
                active: direction === 'vertical',
              })}
              data-tip
              data-for="group-field-direction-vertical"
            >
              <input
                type="radio"
                id="direction-vertical"
                onChange={() => setDirection('vertical')}
                checked={direction === 'vertical'}
              />
              <img src={rowIcon} alt="" />
            </label>
          </div>
          <ReactTooltip
            id="group-field-direction-vertical"
            place="top"
            type="dark"
            effect="solid"
            className="acms-admin-tooltip acms-tooltip customFieldTooltip"
          >
            <span>縦向きレイアウト用にソースコードを生成します。</span>
          </ReactTooltip>
          <ReactTooltip
            id="group-field-direction-horizontal"
            place="top"
            type="dark"
            effect="solid"
            className="acms-admin-tooltip acms-tooltip customFieldTooltip"
          >
            <span>横向きレイアウト用にソースコードを生成します。</span>
          </ReactTooltip>
        </div>
      )}

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
