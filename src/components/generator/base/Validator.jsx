import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import ReactTooltip from 'react-tooltip';
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

  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      let newHeight;
      if (openValidator) {
        newHeight = `${contentRef.current.scrollHeight}px`;
      } else {
        newHeight = '0px';
      }
      setHeight(newHeight);
    }
  }, [openValidator]);

  useEffect(() => {
    updateHeight();

    window.addEventListener('resize', updateHeight);

    const resizeObserver = new ResizeObserver((entries) => {
      const currentRef = contentRef.current;
      for (let entry of entries) {
        if (entry.target === currentRef) {
          updateHeight();
        }
      }
    });

    const currentRef = contentRef.current;
    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    return () => {
      window.removeEventListener('resize', updateHeight);
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, [updateHeight]);

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
    // 要素追加後に高さを更新
    setTimeout(updateHeight, 0);
  }, [setField, updateHeight]);

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

      <div
        className={`customFieldAccordionContent ${openValidator ? '-open' : ''}`}
        style={{ maxHeight: height }}
        ref={contentRef}
      >
        <div className="customFieldValidatorArea">
          {isConverter && (
            <div>
              <div className="customFieldBold">
                コンバーター
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
