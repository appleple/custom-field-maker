import React from 'react';

export function Alert(props) {
  const {
    field: { alert },
    setField,
  } = props;

  const onRemoveAlert = () => {
    setField((prevState) => ({ ...prevState, alert: false }));
  };

  return (
    <>
      {alert ? (
        <p className="acms-admin-alert acms-admin-alert-icon acms-admin-alert-danger" style={{ fontSize: '12px' }}>
          <span className="acms-admin-icon acms-admin-alert-icon-before acms-admin-icon-attention" aria-hidden="true" />
          typeとタイトルとフィールド、全てを入力しないとソースコードを生成できません。
          <button className="js-acms-alert-close acms-admin-alert-icon-after" onClick={onRemoveAlert}>
            ×
          </button>
        </p>
      ) : null}
    </>
  );
}
