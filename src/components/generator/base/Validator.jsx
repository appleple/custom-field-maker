import React, { useRef, useMemo, useCallback } from 'react';
import Tooltip from '../../Tooltip';
import { NoSearchBox } from './NoSearchBox';
import { useMakerContext } from '../../../store/MakerContext';

export function Validator(props) {
  const {
    field: { type, validator, openValidator, converter, noSearch },
    setField,
  } = props;
  const {
    preview: { mode },
  } = useMakerContext();

  const contentRef = useRef(null);

  const isConverter = useMemo(() => {
    const possibleConverter = [
      'text',
      'tel',
      'number',
      'email',
      'password',
      'textarea',
      'checkbox',
      'selectbox',
      'radioButton',
    ];
    return possibleConverter.includes(type);
  }, [type]);

  const possibleValidatorValue = (option) => {
    const possibleValue = ['minlength', 'maxlength', 'min', 'max', 'regex'];
    return possibleValue.includes(option);
  };

  const updateValidatorOption = (idx, option) => {
    const item = validator[idx];
    setField((prevState) => ({
      ...prevState,
      validator: [...validator.slice(0, idx), { ...item, option }, ...validator.slice(idx + 1)],
    }));
  };

  const addValidator = useCallback(() => {
    setField((prevState) => ({
      ...prevState,
      validator: [
        ...prevState.validator,
        {
          option: '',
          value: '',
          message: '',
        },
      ],
    }));
  }, [setField]);

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
        <button
          className="customFieldValidatorLabel"
          type="button"
          value={openValidator}
          onClick={() => setField((prevState) => ({ ...prevState, openValidator: !openValidator }))}
        >
          <span className="customFieldValidatorToggle"></span>
          フォームオプションを設定
        </button>
      </div>

      <div className={`customFieldAccordionContent ${openValidator ? '-open' : ''}`} ref={contentRef}>
        <div className="customFieldValidatorArea">
          {isConverter && (
            <div>
              <div className="customFieldBold">
                コンバーター
                <i className="acms-admin-icon-tooltip" data-tooltip-id="convert-tip" />
                <Tooltip id="convert-tip" place="top" variant="dark">
                  <span>
                    テキストフィールドに入力された値を別の値に変換します。詳しくは参照ボタンを押すと表示されるモーダルウィンドウに情報が記載されています。
                  </span>
                </Tooltip>
              </div>
              <div>
                <input
                  type="text"
                  value={converter}
                  onChange={(e) => {
                    const value = e.target.value;
                    setField((prevState) => ({ ...prevState, converter: value }));
                  }}
                  className="acms-admin-form-width-quarter acms-admin-margin-right-small"
                  placeholder="例）rs"
                />
                <button
                  className="acms-admin-btn"
                  onClick={() => setField((prevState) => ({ ...prevState, openConverter: true }))}
                >
                  参照
                </button>
              </div>
            </div>
          )}

          {(mode === 'customfield' || mode === 'fieldgroup') && (
            <>
              <table className="acms-admin-table customFieldOptionTable" style={{ borderTop: 0 }}>
                <tbody>
                  <tr>
                    <th>
                      バリデーター
                      <i className="acms-admin-icon-tooltip" data-tooltip-id="validate-tip" />
                      <Tooltip id="validate-tip" place="top" variant="dark">
                        <span>フィールドに入力された値が条件に合っているかをチェックします。</span>
                      </Tooltip>
                    </th>
                    <th>
                      値
                      <i className="acms-admin-icon-tooltip" data-tooltip-id="validate-value-tip" />
                      <Tooltip id="validate-value-tip" place="top" variant="dark">
                        <span>最小文字数や、正規表現チェックをバリデータに設定した際に設定する値となります。</span>
                      </Tooltip>
                    </th>
                    <th>
                      メッセージ
                      <i className="acms-admin-icon-tooltip" data-tooltip-id="validate-message-tip" />
                      <Tooltip id="validate-message-tip" place="top" variant="dark">
                        <span>
                          フィールドに入力されている値が条件に合わなかった場合に表示されるメッセージになります。
                        </span>
                      </Tooltip>
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
                              updateValidatorOption(idx, value);
                            }}
                          >
                            <option value="">▼ 選択</option>
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
                            disabled={!possibleValidatorValue(item.option)}
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

              <div>
                <button onClick={addValidator} className="acms-admin-btn">
                  追加
                </button>
              </div>
            </>
          )}

          {/text|number|tel|email|password|textarea|radioButton|selectbox/.exec(type) && (
            <NoSearchBox noSearch={noSearch} setField={setField} />
          )}
        </div>
      </div>
    </div>
  );
}
