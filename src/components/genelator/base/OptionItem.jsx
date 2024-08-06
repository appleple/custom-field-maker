import React from 'react';

export function OptionItem(props) {
  const {
    field: { option },
    setField,
    add = true,
  } = props;

  const updateOptionLabel = (idx, label) => {
    const item = option[idx];
    setField((prevState) => ({
      ...prevState,
      option: [...option.slice(0, idx), { ...item, label }, ...option.slice(idx + 1)],
    }));
  };

  const updateOptionValue = (idx, value) => {
    const item = option[idx];
    setField((prevState) => ({
      ...prevState,
      option: [...option.slice(0, idx), { ...item, value }, ...option.slice(idx + 1)],
    }));
  };

  const removeOption = (idx) => {
    setField((prevState) => ({
      ...prevState,
      option: [...option.slice(0, idx), ...option.slice(idx + 1)],
    }));
  };

  const addOption = () => {
    setField((prevState) => ({
      ...prevState,
      option: [
        ...option,
        {
          value: '',
          label: '',
        },
      ],
    }));
  };

  return (
    <div>
      <table className="acms-admin-table customFieldOptionTable">
        <tbody>
          {option.map((item, idx) => (
            <tr key={idx}>
              <td>
                <div className="customFieldOptionTableInput">
                  <span className="customFieldOptionTableAppend">項目名（label）</span>
                  <input
                    type="text"
                    defaultValue={item.label}
                    onInput={(e) => {
                      const value = e.target.value;
                      if (!value) return;
                      updateOptionLabel(idx, value);
                    }}
                    className="acms-admin-form-width-full"
                    placeholder="例）東京都"
                  />
                </div>
              </td>
              <td>
                <div className="customFieldOptionTableInput">
                  <span className="customFieldOptionTableAppend">値（value）</span>
                  <input
                    type="text"
                    defaultValue={item.value}
                    onInput={(e) => {
                      const value = e.target.value;
                      if (!value) return;
                      updateOptionValue(idx, value);
                    }}
                    className="acms-admin-form-width-full"
                    style={{
                      minWidth: '200px',
                    }}
                    placeholder="例）tokyo"
                  />
                </div>
              </td>
              {add && (
                <td>
                  <button
                    type="button"
                    className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right"
                    onClick={() => removeOption(idx)}
                  >
                    削除
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {add && (
        <p>
          <button className="acms-admin-btn" onClick={addOption}>
            追加
          </button>
        </p>
      )}
    </div>
  );
}
