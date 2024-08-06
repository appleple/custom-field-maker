import React, { useCallback } from 'react';
import { ModalDialog } from '../../ModalDialog';

export function ConverterModal(props) {
  const {
    field: { converter, openConverter },
    setField,
  } = props;

  const onConverter = useCallback(
    (addConverter) => {
      let newConverter = converter;
      const reg = new RegExp(addConverter, 'i');
      if (newConverter.search(reg) === -1) {
        newConverter += addConverter;
      } else {
        newConverter = newConverter.replace(newConverter.toUpperCase(), addConverter);
        newConverter = newConverter.replace(newConverter.toLowerCase(), addConverter);
      }
      setField((prevState) => ({ ...prevState, converter: newConverter }));
    },
    [converter, setField]
  );

  const onOpenConverter = useCallback(() => {
    setField((prevState) => ({ ...prevState, openConverter: false }));
  }, [setField]);

  return (
    <div>
      <ModalDialog open={openConverter} title="コンバーター参照" onClose={onOpenConverter}>
        <table className="acms-admin-table acms-admin-table-heading acms-admin-table-hover">
          <tbody>
            <tr>
              <th>オプション</th>
              <th>意味</th>
              <th>追加</th>
            </tr>
            <tr>
              <td>r</td>
              <td>「全角」英字を「半角」に変換します</td>
              <td>
                <button className="acms-admin-btn" onClick={() => onConverter('r')}>
                  追加
                </button>
              </td>
            </tr>
            <tr>
              <td>R</td>
              <td>「半角」英字を「全角」に変換します</td>
              <td>
                <button className="acms-admin-btn" onClick={() => onConverter('R')}>
                  追加
                </button>
              </td>
            </tr>
            <tr>
              <td>n</td>
              <td>「全角」数字を「半角」に変換します</td>
              <td>
                <button className="acms-admin-btn" onClick={() => onConverter('n')}>
                  追加
                </button>
              </td>
            </tr>
            <tr>
              <td>N</td>
              <td>「半角」数字を「全角」に変換します。</td>
              <td>
                <button className="acms-admin-btn" onClick={() => onConverter('N')}>
                  追加
                </button>
              </td>
            </tr>
            <tr>
              <td>a</td>
              <td>「全角」英数字を「半角」に変換します。</td>
              <td>
                <button className="acms-admin-btn" onClick={() => onConverter('a')}>
                  追加
                </button>
              </td>
            </tr>
            <tr>
              <td>A</td>
              <td>「半角」英数字を「全角」に変換します。</td>
              <td>
                <button className="acms-admin-btn" onClick={() => onConverter('A')}>
                  追加
                </button>
              </td>
            </tr>
            <tr>
              <td>s</td>
              <td>「全角」スペースを「半角」に変換します（U+3000 -&gt; U+0020）。</td>
              <td>
                <button className="acms-admin-btn" onClick={() => onConverter('s')}>
                  追加
                </button>
              </td>
            </tr>
            <tr>
              <td>S</td>
              <td>「半角」スペースを「全角」に変換します（U+0020 -&gt; U+3000）。</td>
              <td>
                <button className="acms-admin-btn" onClick={() => onConverter('S')}>
                  追加
                </button>
              </td>
            </tr>
            <tr>
              <td>k</td>
              <td>「全角カタカナ」を「半角カタカナ」に変換します。</td>
              <td>
                <button className="acms-admin-btn" onClick={() => onConverter('k')}>
                  追加
                </button>
              </td>
            </tr>
            <tr>
              <td>K</td>
              <td>「半角カタカナ」を「全角カタカナ」に変換します。</td>
              <td>
                <button className="acms-admin-btn" onClick={() => onConverter('K')}>
                  追加
                </button>
              </td>
            </tr>
            <tr>
              <td>h</td>
              <td>「全角ひらがな」を「半角カタカナ」に変換します。</td>
              <td>
                <button className="acms-admin-btn" onClick={() => onConverter('h')}>
                  追加
                </button>
              </td>
            </tr>
            <tr>
              <td>H</td>
              <td>「半角カタカナ」を「全角ひらがな」に変換します。</td>
              <td>
                <button className="acms-admin-btn" onClick={() => onConverter('H')}>
                  追加
                </button>
              </td>
            </tr>
            <tr>
              <td>c</td>
              <td>「全角カタカナ」を「全角ひらがな」に変換します。</td>
              <td>
                <button className="acms-admin-btn" onClick={() => onConverter('c')}>
                  追加
                </button>
              </td>
            </tr>
            <tr>
              <td>C</td>
              <td>「全角ひらがな」を「全角カタカナ」に変換します。</td>
              <td>
                <button className="acms-admin-btn" onClick={() => onConverter('C')}>
                  追加
                </button>
              </td>
            </tr>
            <tr>
              <td>V</td>
              <td>濁点付きの文字を一文字に変換します。&quot;K&quot;, &quot;H&quot; と共に使用します。</td>
              <td>
                <button className="acms-admin-btn" onClick={() => onConverter('V')}>
                  追加
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </ModalDialog>
    </div>
  );
}
