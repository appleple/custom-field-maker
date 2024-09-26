import React, { useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';

export function Validator(props) {
  const showValidator = true;
  const {
    field: { type, validator, openValidator, converter, noSearch },
    setField,
  } = props;
  const [isConverter, setIsConverter] = useState(false);

  useEffect(() => {
    const possibleConverter = ['text', 'textarea', 'checkbox', 'selectbox', 'radioButton'];
    if (possibleConverter.includes(type)) {
      setIsConverter(true);
    }
  }, [type, setIsConverter]);

  const noSearchCheck = () => {
    return (
      <p className="acms-admin-form-checkbox">
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
      </p>
    );
  };

  const updateValidatorOption = (idx, option) => {
    const item = validator[idx];
    setField((prevState) => ({
      ...prevState,
      validator: [...validator.slice(0, idx), { ...item, option }, ...validator.slice(idx + 1)],
    }));
  };

  const addValidator = () => {
    setField((prevState) => ({
      ...prevState,
      validator: [
        ...validator,
        {
          option: '',
          value: '',
          message: '',
        },
      ],
    }));
  };

  const updateValidatorValue = (idx, value) => {
    const item = validator[idx];
    setField((prevState) => ({
      ...prevState,
      validator: [...validator.slice(0, idx), { ...item, value }, ...validator.slice(idx + 1)],
    }));
  };

  const updateValidatorMessage = (idx, message) => {
    const item = validator[idx];
    setField((prevState) => ({
      ...prevState,
      validator: [...validator.slice(0, idx), { ...item, message }, ...validator.slice(idx + 1)],
    }));
  };

  const removeValidator = (idx) => {
    setField((prevState) => ({
      ...prevState,
      validator: [...validator.slice(0, idx), ...validator.slice(idx + 1)],
    }));
  };

  return (
    <div>
      <div>
        <label style={{ color: '#006DEC', cursor: 'pointer' }}>
          <input
            type="checkbox"
            value={openValidator}
            onChange={() => setField((prevState) => ({ ...prevState, openValidator: !openValidator }))}
            style={{ display: 'none' }}
          />
          オプション
        </label>
        <i
          className="acms-admin-icon-tooltip"
          data-for="option-tip"
          data-tip="React-tooltip"
          style={{ marginLeft: '5px' }}
        />
        <ReactTooltip
          id="option-tip"
          place="top"
          type="dark"
          effect="solid"
          className="acms-admin-tooltip acms-tooltip customFieldTooltip"
        >
          <span>変換・入力チェック用の項目を表示します。</span>
        </ReactTooltip>
      </div>
      {openValidator && (
        <div className="customFieldValidatorArea">
          {isConverter && (
            <div>
              {/text|textarea|radio|select/.exec(type) && noSearchCheck()}
              <div className="customFieldBold">
                テキストの変換
                <i className="acms-admin-icon-tooltip" data-tip data-for="convert-tip" />
                <ReactTooltip
                  id="convert-tip"
                  place="top"
                  type="dark"
                  effect="solid"
                  className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                >
                  <span>
                    テキストフィールドに入力された値を別の値に変換します。詳しくは参照ボタンを押すと表示されるモーダルウィンドウに情報が記載されています。
                  </span>
                </ReactTooltip>
              </div>
              <p>
                <input
                  type="text"
                  defaultValue={converter}
                  onInput={(e) => {
                    const value = e.target.value;
                    if (!value) return;
                    setField((prevState) => ({ ...prevState, converter: value }));
                  }}
                  className="acms-admin-form-width-quarter acms-admin-margin-right-small"
                  placeholder="例）rs"
                />
                <button
                  className="acms-admin-btn"
                  onClick={() => setField((prevState) => ({ ...prevState, openConverter: true }))}
                >
                  コンバーター参照
                </button>
              </p>
            </div>
          )}

          {showValidator && (
            <table className="acms-admin-table customFieldOptionTable">
              <tbody>
                <tr>
                  <th>
                    入力チェック
                    <i className="acms-admin-icon-tooltip" data-tip data-for="validate-tip" />
                    <ReactTooltip
                      id="validate-tip"
                      place="top"
                      type="dark"
                      effect="solid"
                      className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                    >
                      <span>フィールドに入力された値が条件に合っているかをチェックします。</span>
                    </ReactTooltip>
                  </th>
                  <th>
                    値
                    <i className="acms-admin-icon-tooltip" data-tip data-for="validate-value-tip" />
                    <ReactTooltip
                      id="validate-value-tip"
                      place="top"
                      type="dark"
                      effect="solid"
                      className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                    >
                      <span>最小文字数や、正規表現チェックをバリデータに設定した際に設定する値となります。</span>
                    </ReactTooltip>
                  </th>
                  <th>
                    メッセージ
                    <i className="acms-admin-icon-tooltip" data-tip data-for="validate-message-tip" />
                    <ReactTooltip
                      id="validate-message-tip"
                      place="top"
                      type="dark"
                      effect="solid"
                      className="acms-admin-tooltip acms-tooltip customFieldTooltip"
                    >
                      <span>
                        フィールドに入力されている値が条件に合わなかった場合に表示されるメッセージになります。
                      </span>
                    </ReactTooltip>
                  </th>
                  <th />
                </tr>
                {validator &&
                  validator.map((item, idx) => (
                    <tr key={`validator${idx}`}>
                      <td>
                        <select
                          className="acms-admin-form-width-full"
                          onChange={(e) => {
                            const value = e.target.value;
                            if (!validator) return;
                            updateValidatorOption(idx, value);
                          }}
                        >
                          <option value="">▼ バリデータを選択</option>
                          <optgroup label="入力値の制限">
                            <option value="required">必須 ( required )</option>
                            <option value="minlength">最小文字数 ( minlength )</option>
                            <option value="maxlength">最大文字数 ( maxlength )</option>
                            <option value="min">下限値 ( min )</option>
                            <option value="max">上限値 ( max )</option>
                          </optgroup>
                          <optgroup label="形式チェック">
                            <option value="digits">数字チェック ( digits )</option>
                            <option value="email">メールアドレスチェック ( email )</option>
                            <option value="hiragana">ひらがなチェック ( hiragana )</option>
                            <option value="katakana">カタカナチェック ( katakana )</option>
                            <option value="url">URLチェック ( url )</option>
                            <option value="dates">日付チェック ( dates )</option>
                            <option value="times">時間チェック ( times )</option>
                            <option value="regex">正規表現マッチ ( regex )</option>
                          </optgroup>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          defaultValue={item.value}
                          onInput={(e) => {
                            const value = e.target.value;
                            if (!value) return;
                            updateValidatorValue(idx, value);
                          }}
                          className="acms-admin-form-width-full"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          defaultValue={item.message}
                          onInput={(e) => {
                            const value = e.target.value;
                            if (!value) return;
                            updateValidatorMessage(idx, value);
                          }}
                          className="acms-admin-form-width-full"
                        />
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            removeValidator(idx);
                          }}
                          className="acms-admin-btn-admin acms-admin-btn-admin-danger"
                        >
                          削除
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
          {showValidator && (
            <p>
              <button onClick={addValidator} className="acms-admin-btn">
                追加
              </button>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
