import React from 'react';

export function GroupAlert(props) {
  const {
    field: { groupAlert },
    setField,
  } = props;

  const closeAlert = () => {
    setField((prevState) => ({ ...prevState, groupAlert: false }));
  };

  return (
    <>
      {groupAlert ? (
        <p className="acms-admin-alert acms-admin-alert-icon acms-admin-alert-danger" style={{ fontSize: '12px' }}>
          <span className="acms-admin-icon acms-admin-alert-icon-before acms-admin-icon-attention" aria-hidden="true" />
          グループ名を入力しないとグループを生成できません。
          <button className="js-acms-alert-close acms-admin-alert-icon-after" onClick={closeAlert}>
            ×
          </button>
        </p>
      ) : null}
    </>
  );
}
