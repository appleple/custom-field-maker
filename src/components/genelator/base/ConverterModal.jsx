import React, { useRef, useCallback, useEffect } from 'react';
import { ModalDialog } from '../../ModalDialog';

export function ConverterModal(props) {
  const {
    field: { converter, openConverter },
    setField,
  } = props;

  const optionsRef = useRef(null);

  useEffect(() => {
    const converterList = converter.split('');
    const rows = optionsRef.current.querySelectorAll('tr');

    rows.forEach((row) => {
      const tdElement = row.querySelector('td');
      if (tdElement) {
        const tdText = tdElement.textContent.trim();
        const isMatch = converterList.includes(tdText);
        row.style.backgroundColor = isMatch ? '#e6f3ff' : '';
      }
    });
  }, [converter]);

  const onOpenConverter = useCallback(() => {
    setField((prevState) => ({ ...prevState, openConverter: false }));
  }, [setField]);

  const onConverter = useCallback(
    (addConverter) => {
      setField((prevState) => {
        const currentConverter = prevState.converter;
        const index = currentConverter.toLowerCase().indexOf(addConverter.toLowerCase());
        let newConverter = currentConverter;

        if (index === -1) {
          newConverter += addConverter;
        } else {
          newConverter = newConverter.slice(0, index) + addConverter + newConverter.slice(index + addConverter.length);
        }

        return { ...prevState, converter: newConverter };
      });
    },
    [setField]
  );

  const onRemoveConverter = useCallback(
    (removeConverter) => {
      setField((prevState) => {
        const newConverter = prevState.converter.replace(removeConverter, '');
        return { ...prevState, converter: newConverter };
      });
    },
    [setField]
  );

  const renderButton = (option) => {
    const isAdded = converter.includes(option);
    if (isAdded) {
      return (
        <button className="acms-admin-btn acms-admin-btn-danger" onClick={() => onRemoveConverter(option)}>
          削除
        </button>
      );
    }
    return (
      <button className="acms-admin-btn" onClick={() => onConverter(option)}>
        追加
      </button>
    );
  };

  return (
    <div>
      <ModalDialog open={openConverter} title="コンバーター参照" onClose={onOpenConverter}>
        <table className="acms-admin-table acms-admin-table-heading acms-admin-table-hover" ref={optionsRef}>
          <tbody>
            <tr>
              <th>オプション</th>
              <th>意味</th>
              <th>追加</th>
            </tr>
            <tr>
              <td>r</td>
              <td>「全角」英字を「半角」に変換します</td>
              <td>{renderButton('r')}</td>
            </tr>
            <tr>
              <td>R</td>
              <td>「半角」英字を「全角」に変換します</td>
              <td>{renderButton('R')}</td>
            </tr>
            <tr>
              <td>n</td>
              <td>「全角」数字を「半角」に変換します</td>
              <td>{renderButton('n')}</td>
            </tr>
            <tr>
              <td>N</td>
              <td>「半角」数字を「全角」に変換します。</td>
              <td>{renderButton('N')}</td>
            </tr>
            <tr>
              <td>a</td>
              <td>「全角」英数字を「半角」に変換します。</td>
              <td>{renderButton('a')}</td>
            </tr>
            <tr>
              <td>A</td>
              <td>「半角」英数字を「全角」に変換します。</td>
              <td>{renderButton('A')}</td>
            </tr>
            <tr>
              <td>s</td>
              <td>「全角」スペースを「半角」に変換します（U+3000 -&gt; U+0020）。</td>
              <td>{renderButton('s')}</td>
            </tr>
            <tr>
              <td>S</td>
              <td>「半角」スペースを「全角」に変換します（U+0020 -&gt; U+3000）。</td>
              <td>{renderButton('S')}</td>
            </tr>
            <tr>
              <td>k</td>
              <td>「全角カタカナ」を「半角カタカナ」に変換します。</td>
              <td>{renderButton('k')}</td>
            </tr>
            <tr>
              <td>K</td>
              <td>「半角カタカナ」を「全角カタカナ」に変換します。</td>
              <td>{renderButton('K')}</td>
            </tr>
            <tr>
              <td>h</td>
              <td>「全角ひらがな」を「半角カタカナ」に変換します。</td>
              <td>{renderButton('h')}</td>
            </tr>
            <tr>
              <td>H</td>
              <td>「半角カタカナ」を「全角ひらがな」に変換します。</td>
              <td>{renderButton('H')}</td>
            </tr>
            <tr>
              <td>c</td>
              <td>「全角カタカナ」を「全角ひらがな」に変換します。</td>
              <td>{renderButton('c')}</td>
            </tr>
            <tr>
              <td>C</td>
              <td>「全角ひらがな」を「全角カタカナ」に変換します。</td>
              <td>{renderButton('C')}</td>
            </tr>
            <tr>
              <td>V</td>
              <td>濁点付きの文字を一文字に変換します。&quot;K&quot;, &quot;H&quot; と共に使用します。</td>
              <td>{renderButton('V')}</td>
            </tr>
          </tbody>
        </table>
      </ModalDialog>
    </div>
  );
}
