import React, { useState } from 'react';
import Tooltip from '../../Tooltip';
import prefJson from '../../../../json/pref.json';

import prefEnJson from '../../../../json/pref-en.json';
import prefNumberJson from '../../../../json/pref-number.json';

const snippetJSON = {
  pref: prefJson,
  'pref-en': prefEnJson,
  'pref-number': prefNumberJson,
};

export function Snippet(props) {
  const {
    field: { option, optionFormat },
    setField,
  } = props;
  const [isSnippet, setIsSnippet] = useState(false);

  const applySnippet = () => {
    const res = snippetJSON[optionFormat];
    setField((prevState) => ({ ...prevState, option: [...option, ...res] }));
  };

  return (
    <div
      style={{
        marginBottom: '5px',
        height: '31px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <span className="customFieldBold" style={{ marginBottom: 0 }}>
        選択項目（option要素）
        <i className="acms-admin-icon-tooltip" data-tooltip-id="option-value-tip" />
        <Tooltip id="option-value-tip" place="top" variant="dark">
          <span>option要素の選択項目になります。</span>
        </Tooltip>
      </span>
      <span className="customFieldUseSnippet">
        <label className="customFieldUseSnippetLabel" style={{ marginRight: '5px' }}>
          <input
            type="checkbox"
            style={{ display: 'none' }}
            value="true"
            onChange={() => {
              setIsSnippet(!isSnippet);
            }}
          />
          {isSnippet ? 'スニペットを使用しない' : 'スニペットを使用する'}
        </label>
        {isSnippet && (
          <span>
            <select
              style={{ verticalAlign: 'middle', marginRight: '5px' }}
              value={optionFormat}
              onChange={(e) => {
                setField((prevState) => ({ ...prevState, optionFormat: e.target.value }));
              }}
            >
              <option value="pref">都道府県</option>
              <option value="pref-en">都道府県（英語）</option>
              <option value="pref-number">都道府県（連番）</option>
            </select>
            <button className="acms-admin-btn" onClick={applySnippet} style={{ verticalAlign: 'middle' }}>
              追加
            </button>
          </span>
        )}
      </span>
    </div>
  );
}
