import React from 'react';

export function ImageResizeOption(props) {
  const {
    field: { resize, alt },
    setField,
  } = props;

  return (
    <div>
      <div className="acms-admin-form-checkbox">
        <input
          type="checkbox"
          onChange={() => setField((prevState) => ({ ...prevState, resize: !resize }))}
          defaultChecked={resize}
          id="resize-checkbox"
        />
        <label htmlFor="resize-checkbox">
          <i className="acms-admin-ico-checkbox" />
          ブラウザ側のリサイズ機能を使用する
        </label>
      </div>
      <div className="acms-admin-form-checkbox">
        <input
          type="checkbox"
          onChange={() => setField((prevState) => ({ ...prevState, alt: !alt }))}
          defaultChecked={alt}
          id="alt-checkbox"
        />
        <label htmlFor="alt-checkbox">
          <i className="acms-admin-ico-checkbox" /> alt表示用入力欄を使用する
        </label>
      </div>
    </div>
  );
}
