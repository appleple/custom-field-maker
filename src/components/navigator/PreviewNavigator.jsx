import Tooltip from '../Tooltip';
import classnames from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Notify } from '../Notify';
import { useMakerContext } from '../../stores/MakerContext';
import columnIcon from '../../assets/images/add_column.svg';
import rowIcon from '../../assets/images/add_row.svg';
import React from 'react';

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
    undo,
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

  const onUndoHandler = () => {
    undo(mode), [mode, undo];
  };

  return (
    <div className="customFieldNavigatorCode">
      <div>
        <div className="acms-admin-flex acms-admin-items-center" style={{ gap: '16px' }}>
          {editMode !== 'confirm' && (
            <div>
              <select
                id="tag"
                onChange={(e) => updateTag(e.target.value)}
                className="acms-admin-form-width-quarter"
                value={tag}
                style={{ width: '100px' }}
              >
                <option value="section">モダン</option>
                <option value="table">テーブル</option>
              </select>
            </div>
          )}

          <div className="acms-admin-form-checkbox" style={{ margin: 0 }}>
            <input type="checkbox" onChange={onAcmscss} checked={acmscss} id="acmscss-checkbox" />
            <label htmlFor="acmscss-checkbox">
              <i className="acms-admin-ico-checkbox" />
              acms-admin.css
            </label>
          </div>

          {(mode === 'customfield' || mode === 'fieldgroup') && (
            <div className="acms-admin-form-checkbox" style={{ margin: 0 }}>
              <input type="checkbox" onChange={onJsValidator} checked={jsValidator} id="jsvalidator-checkbox" />
              <label htmlFor="jsvalidator-checkbox">
                <i className="acms-admin-ico-checkbox" />
                JavaScriptのバリデート
              </label>
            </div>
          )}
        </div>

        {tag === 'table' && (mode === 'fieldgroup' || mode === 'unitgroup') && (
          <div style={{ marginTop: '5px' }}>
            <span className="customFieldDirectionBtnGroupSide">ソースの追加方法</span>
            <div className="customFieldDirectionBtnGroup">
              <label
                htmlFor="direction-horizontal"
                className={classnames('customFieldDirectionBtn', {
                  active: direction === 'horizontal',
                })}
                data-tooltip-id="group-field-direction-horizontal"
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
                data-tooltip-id="group-field-direction-vertical"
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
            <Tooltip id="group-field-direction-vertical" place="top" variant="dark">
              <span>縦向きレイアウト用にソースコードを生成します。</span>
            </Tooltip>
            <Tooltip id="group-field-direction-horizontal" place="top" variant="dark">
              <span>横向きレイアウト用にソースコードを生成します。</span>
            </Tooltip>
          </div>
        )}
      </div>

      <div className="customFieldNavigatorCodeButtonList">
        <div style={{ display: 'inline-block', position: 'relative', marginRight: '10px' }}>
          {editMode !== 'preview' && (
            <>
              <CopyToClipboard text={source} onCopy={() => setCopied(true)}>
                <button type="button" className="acms-admin-btn-admin acms-admin-btn-admin-info">
                  生成コードをコピー
                </button>
              </CopyToClipboard>
              <Notify message="クリップボードにコピーしました" onFinish={() => setCopied(false)} />
            </>
          )}
        </div>

        <div>
          <button type="button" className="acms-admin-btn-admin" style={{ marginRight: '4px' }} onClick={onUndoHandler}>
            生成コードを一つ戻す
          </button>

          {mode === 'customfield' && (
            <button
              type="button"
              onClick={() => {
                if (confirm('生成コードをクリアしますか？')) {
                  clearCustomfield();
                }
              }}
              className="acms-admin-btn-admin acms-admin-btn-admin-danger"
            >
              生成コードをクリア
            </button>
          )}
          {mode === 'fieldgroup' && (
            <button
              type="button"
              onClick={() => {
                if (confirm('生成コードをクリアしますか？')) {
                  clearGroupItem();
                }
              }}
              className="acms-admin-btn-admin acms-admin-btn-admin-danger"
            >
              生成コードをクリア
            </button>
          )}
          {mode === 'customunit' && (
            <button
              type="button"
              onClick={() => {
                if (confirm('生成コードをクリアしますか？')) {
                  clearCustomunit();
                }
              }}
              className="acms-admin-btn-admin acms-admin-btn-admin-danger"
            >
              生成コードをクリア
            </button>
          )}
          {mode === 'unitgroup' && (
            <button
              type="button"
              onClick={() => {
                if (confirm('生成コードをクリアしますか？')) {
                  clearUnitGroupItem();
                }
              }}
              className="acms-admin-btn-admin acms-admin-btn-admin-danger"
            >
              生成コードをクリア
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
