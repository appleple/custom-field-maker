export function DuplicateAlert(props) {
  const {
    field: { duplicatedField },
    setField,
  } = props;

  return (
    <>
      {duplicatedField ? (
        <div
          role="alert"
          className="acms-admin-alert acms-admin-alert-icon acms-admin-alert-danger"
          style={{ fontSize: '12px' }}
        >
          <span className="acms-admin-icon acms-admin-alert-icon-before acms-admin-icon-attention" aria-hidden="true" />
          グループ名とフィールド名を同じ値にすることはできません。
          <button
            type="button"
            className="js-acms-alert-close acms-admin-alert-icon-after"
            onClick={() => setField((prevState) => ({ ...prevState, duplicatedField: false }))}
          >
            ×
          </button>
        </div>
      ) : null}
    </>
  );
}
