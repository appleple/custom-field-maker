import React from 'react';

export function RichEditorOption(props) {
  const {
    field: { useExpand, startHeadingLevel, endHeadingLevel },
    setField,
  } = props;

  return (
    <div>
      <p className="acms-admin-form-checkbox">
        <input
          type="checkbox"
          onChange={() => setField((prevState) => ({ ...prevState, useExpand: !useExpand }))}
          defaultChecked={useExpand}
          id="expand-checkbox"
        />
        <label htmlFor="expand-checkbox">
          <i className="acms-admin-ico-checkbox" /> リッチエディターを拡大表示する
        </label>
      </p>
      <div>
        開始見出しレベル
        <span style={{ display: 'inline-block', width: '5px', height: '1px' }} />
        <input
          type="text"
          defaultValue={startHeadingLevel}
          onInput={(e) => {
            const value = e.target.value;
            if (!value) return;
            setField((prevState) => ({ ...prevState, startHeadingLevel: value }));
          }}
        />
        <span style={{ display: 'inline-block', width: '15px', height: '1px' }} />
        終了見出しレベル
        <span style={{ display: 'inline-block', width: '5px', height: '1px' }} />
        <input
          type="text"
          defaultValue={endHeadingLevel}
          onInput={(e) => {
            const value = e.target.value;
            if (!value) return;
            setField((prevState) => ({ ...prevState, endHeadingLevel: value }));
          }}
        />
      </div>
    </div>
  );
}
