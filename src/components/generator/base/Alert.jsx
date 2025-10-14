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
        <div
          role="alert"
          className="acms-admin-alert acms-admin-alert-icon acms-admin-alert-danger"
          style={{ fontSize: '12px' }}
        >
          <span className="acms-admin-icon acms-admin-alert-icon-before acms-admin-icon-attention" aria-hidden="true" />
          タイプとタイトルとフィールド、全てを入力しないとソースコードを生成できません。
          <button type="button" className="js-acms-alert-close acms-admin-alert-icon-after" onClick={onRemoveAlert}>
            ×
          </button>
        </div>
      ) : null}
    </>
  );
}
