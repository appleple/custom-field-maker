import Tooltip from '../../Tooltip';

export function ImageOption(props) {
  const { setField } = props;

  return (
    <table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableImg">
      <tbody>
        <tr>
          <th className="acms-admin-table-left">
            画像サイズ
            <i className="acms-admin-icon-tooltip" data-tooltip-id="image-size-tip" />
            <Tooltip id="image-size-tip" place="top" variant="dark">
              <span>通常画像の画像サイズを指定します</span>
            </Tooltip>
          </th>
          <th className="acms-admin-table-left">
            large画像生成
            <i className="acms-admin-icon-tooltip" data-tooltip-id="image-large-size-tip" />
            <Tooltip id="image-large-size-tip" place="top" variant="dark">
              <span>通常画像よりも大きい画像を生成できます。</span>
            </Tooltip>
          </th>
          <th className="acms-admin-table-left">
            tiny画像生成
            <i className="acms-admin-icon-tooltip" data-tooltip-id="image-tiny-size-tip" />
            <Tooltip id="image-tiny-size-tip" place="top" variant="dark">
              <span>通常画像よりも小さい画像を生成できます。</span>
            </Tooltip>
          </th>
          <th className="acms-admin-table-left">
            square画像生成
            <i className="acms-admin-icon-tooltip" data-tooltip-id="image-square-size-tip" />
            <Tooltip id="image-square-size-tip" place="top" variant="dark">
              <span>通常画像を指定したサイズで中央から正方形にトリミングして生成します。</span>
            </Tooltip>
          </th>
        </tr>
        <tr>
          <td>
            <div className="acms-form-group">
              <div className="controls">
                <select
                  name="normal"
                  onChange={(e) => {
                    const value = e.target.value;
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
                    type="number"
                    autoComplete="off"
                    name="normalSize"
                    onInput={(e) => {
                      const value = e.target.value;
                      setField((prevState) => ({ ...prevState, normalSize: value }));
                    }}
                    className="customFieldSizeInput"
                    placeholder="例）200"
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
                    const value = e.target.value;
                    setField((prevState) => ({ ...prevState, large: value }));
                  }}
                  className="acms-admin-margin-right-small"
                >
                  <option value="">作らない</option>
                  <option value="largeWidth">width</option>
                  <option value="largeHeight">height</option>
                </select>
                <span className="input-append">
                  <input
                    type="number"
                    autoComplete="off"
                    name="largeSize"
                    onInput={(e) => {
                      const value = e.target.value;
                      setField((prevState) => ({ ...prevState, largeSize: value }));
                    }}
                    className="customFieldSizeInput"
                    placeholder="例）400"
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
                    const value = e.target.value;
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
                    type="number"
                    autoComplete="off"
                    name="tinySize"
                    onInput={(e) => {
                      const value = e.target.value;
                      setField((prevState) => ({ ...prevState, tinySize: value }));
                    }}
                    className="customFieldSizeInput"
                    placeholder="例）100"
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
                    const value = e.target.value;
                    setField((prevState) => ({ ...prevState, square: value }));
                  }}
                  className="acms-admin-margin-right-small"
                >
                  <option value="">作らない</option>
                  <option value="squareWidth">width</option>
                </select>
                <span className="input-append">
                  <input
                    type="number"
                    autoComplete="off"
                    name="squareSize"
                    onInput={(e) => {
                      const value = e.target.value;
                      setField((prevState) => ({ ...prevState, squareSize: value }));
                    }}
                    className="customFieldSizeInput"
                    placeholder="例）250"
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
