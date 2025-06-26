import React from 'react';

export function NoSearchBox(props) {
  const { noSearch, setField } = props;

  return (
    <div className="acms-admin-form-checkbox" style={{ margin: 0 }}>
      <input
        type="checkbox"
        value={noSearch}
        id="noSearch-checkbox"
        onChange={() => setField((prevState) => ({ ...prevState, noSearch: !noSearch }))}
      />
      <label htmlFor="noSearch-checkbox">
        <i className="acms-admin-ico-checkbox" />
        カスタムフィールド検索の対象外にする
      </label>
    </div>
  );
}
