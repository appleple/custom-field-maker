import React from 'react';
import ReactTooltip from 'react-tooltip';

export function ImageOption(props) {
  const { setField } = props;

  return (
    <table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableImg">
      <tbody>
        <tr>
          <th className="acms-admin-table-left">
            画像サイズ
            <i className="acms-admin-icon-tooltip" data-tip data-for="image-size-tip" />
            <ReactTooltip
              id="image-size-tip"
              place="top"
              type="dark"
              effect="solid"
              className="acms-admin-tooltip acms-tooltip customFieldTooltip"
            >
              <span>通常画像の画像サイズを指定します</span>
            </ReactTooltip>
          </th>
          <th className="acms-admin-table-left">
            large画像生成
            <i className="acms-admin-icon-tooltip" data-tip data-for="image-large-size-tip" />
            <ReactTooltip
              id="image-size-tip"
              place="top"
              type="dark"
              effect="solid"
              className="acms-admin-tooltip acms-tooltip customFieldTooltip"
            >
              <span>通常画像よりも大きい画像を生成できます。</span>
            </ReactTooltip>
          </th>
          <th className="acms-admin-table-left">
            tiny画像生成
            <i className="acms-admin-icon-tooltip" data-tip data-for="image-tiny-size-tip" />
            <ReactTooltip
              id="image-tiny-size-tip"
              place="top"
              type="dark"
              effect="solid"
              className="acms-admin-tooltip acms-tooltip customFieldTooltip"
            >
              <span>通常画像よりも小さい画像を生成できます。</span>
            </ReactTooltip>
          </th>
          <th className="acms-admin-table-left">
            square画像生成
            <i className="acms-admin-icon-tooltip" data-tip data-for="image-square-size-tip" />
            <ReactTooltip
              id="image-tiny-size-tip"
              place="top"
              type="dark"
              effect="solid"
              className="acms-admin-tooltip acms-tooltip customFieldTooltip"
            >
              <span>通常画像を指定したサイズで中央から正方形にトリミングして生成します。</span>
            </ReactTooltip>
          </th>
        </tr>
        <tr>
          <td>
            <div className="acms-form-group">
              <div className="controls">
                <select
                  name="normal"
                  onChange={(e) => {
                    const value = e.value;
                    if (!value) return;
                    setField((prevState) => ({ ...prevState, normal: value }));
                  }}
                  className="acms-admin-margin-right-small"
                >
                  <option value="size">長辺</option>
                  <option value="width">幅</option>
                  <option value="height">高さ</option>
                </select>
                <span className="input-append">
                  <input
                    type="text"
                    autoComplete="off"
                    name="normalSize"
                    onInput={(e) => {
                      const value = e.value;
                      if (!value) return;
                      setField((prevState) => ({ ...prevState, normalSize: value }));
                    }}
                    className="customFieldSizeInput"
                    placeholder="例）200px"
                  />
                  <span className="add-on"> px</span>
                </span>
              </div>
            </div>
          </td>
          <td>
            <div className="acms-form-group">
              <div className="controls">
                <select
                  name="large"
                  onChange={(e) => {
                    this.updateState('large', e.target.value);
                  }}
                  className="acms-admin-margin-right-small"
                >
                  <option value="">作らない</option>
                  <option value="largeWidth">width</option>
                  <option value="largeHeight">height</option>
                </select>
                <span className="input-append">
                  <input
                    type="text"
                    autoComplete="off"
                    name="largeSize"
                    onInput={(e) => {
                      const value = e.value;
                      if (!value) return;
                      setField((prevState) => ({ ...prevState, largeSize: value }));
                    }}
                    className="customFieldSizeInput"
                    placeholder="例）400px"
                  />
                  <span className="add-on"> px</span>
                </span>
              </div>
            </div>
          </td>
          <td>
            <div className="acms-form-group">
              <div className="controls">
                <select
                  name="tiny"
                  onChange={(e) => {
                    const value = e.value;
                    if (!value) return;
                    setField((prevState) => ({ ...prevState, tiny: value }));
                  }}
                  className="acms-admin-margin-right-small"
                >
                  <option value="">作らない</option>
                  <option value="tinyWidth">width</option>
                  <option value="tinyHeight">height</option>
                </select>
                <span className="input-append">
                  <input
                    type="text"
                    autoComplete="off"
                    name="tinySize"
                    onInput={(e) => {
                      const value = e.value;
                      if (!value) return;
                      setField((prevState) => ({ ...prevState, tinySize: value }));
                    }}
                    className="customFieldSizeInput"
                    placeholder="例）100px"
                  />
                  <span className="add-on"> px</span>
                </span>
              </div>
            </div>
          </td>
          <td>
            <div className="acms-form-group">
              <div className="controls">
                <select
                  name="square"
                  onChange={(e) => {
                    const value = e.value;
                    if (!value) return;
                    setField((prevState) => ({ ...prevState, square: value }));
                  }}
                  className="acms-admin-margin-right-small"
                >
                  <option value="">作らない</option>
                  <option value="squareWidth">width</option>
                </select>
                <span className="input-append">
                  <input
                    type="text"
                    autoComplete="off"
                    name="squareSize"
                    onInput={(e) => {
                      this.updateState('squareSize', e.target.value);
                    }}
                    className="customFieldSizeInput"
                    placeholder="例）250px"
                  />
                  <span className="add-on"> px</span>
                </span>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
