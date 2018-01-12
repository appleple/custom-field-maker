import React, { Component } from 'react';

export default class Field extends Component {

  constructor(props) {
    super(props);
    this.state = {
			type:"text",
			title:"",
			alert:"",
			groupTitle:"",
			groupName:"",
			groupAlert:"",
			duplicatedField:"",
			path:"path",
			converter:"",
			normal:"size",
			resize:"true",
			option:[{
        value: "",
        label: ""
      }],
			validator:[{
        option: "",
        value: "",
        message: ""
      }],
			optionFormat:"pref",
			openValidator:false,
			openConverter:false,
			acmscss:"true",
    };
  }

  renderSelect() {
    const { type } = this.state;
    return (
      <select id="type" value={type} className="acms-admin-form-width-full" onChange={(e) => { this.updateState('type', e.target.value) }}>
        <option value="text">テキスト</option>
        <option value="textarea">テキストエリア</option>
        <option value="select">セレクトボックス</option>
        <option value="radio">ラジオボタン</option>
        <option value="checkbox">チェックボックス</option>
        <option value="file">ファイル</option>
        <option value="image">画像</option>
      </select>
    );
  }

  updateState(prop, value) {
    this.setState({
      [prop]: value
    });
  }

  addOption() {
    const { option } = this.state;
    this.setState({
      option: [...option, {
        value: "",
        label: ""
      }]
    })
  }

  removeOption(idx) {
    const { option } = this.state;
    this.setState({
      option: [...option.slice(0, idx), ...option.slice(idx + 1)]
    });
  }

  updateOptionLabel(idx, label) {
    const { option } = this.state;
    const item = option[idx];
    this.setState({
      option: [
        ...option.slice(0, idx),
        Object.assign({}, item, {
          label
        }),
        ...option.slice(idx + 1)
      ]
    });
  }

  updateOptionValue(idx, value) {
    const { option } = this.state;
    const item = option[idx];
    this.setState({
      option: [
        ...option.slice(0, idx),
        Object.assign({}, item, {
          value
        }),
        ...option.slice(idx + 1)
      ]
    });
  }

  renderOption() {
    const { option } = this.state;
    return (
      <div>
        <table className="acms-admin-table customFieldOptionTable">
          {option.map((item, idx) =>
            (<tr>
              <td>
                <div className="customFieldOptionTableInput">
                  <span className="customFieldOptionTableAppend">項目名（label）</span><input type="text" value={item.label} onInput={(e) => {this.updateOptionLabel(idx, e.target.value)}} className="acms-admin-form-width-full" placeholder="例）東京都" />
                </div>
              </td>
              <td>
                <div className="customFieldOptionTableInput">
                  <span className="customFieldOptionTableAppend">値（value）</span><input type="text" value={item.value} onInput={(e) => {this.updateOptionValue(idx, e.target.value)}} className="acms-admin-form-width-full" placeholder="例）tokyo" />
                </div>
              </td>
              <td>
                <input type="button" className="acms-admin-btn-admin acms-admin-btn-admin-danger acms-admin-float-right" onClick={this.removeOption.bind(this, idx)} value="削除" />
              </td>
            </tr>))}
        </table>
        <p>
          <button className="acms-admin-btn" onClick={this.addOption.bind(this)}>追加</button>
        </p>
      </div>
    );
  }

  renderTitleName() {
    const { title, name } = this.state;
    return (
      <div>
        <p>タイトル</p>
        <p><input type="text" value={title} onInput={(e) => {this.updateState('title', e.target.value)}}/></p>
        <p>name属性</p>
        <p><input type="text" value={name} onInput={(e) => {this.updateState('name', e.target.value)}}/></p>
      </div>
    );
  }

  renderSnippet() {
    const { useSnippet } = this.state;
    return (
      <p>
        <span className="customFieldBold">
          選択項目（option要素）
          <i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="option要素の選択項目になります。"></i>
        </span>
        <span className="customFieldUseSnippet">
          <label className="customFieldUseSnippetLabel">
          <input type="checkbox" data-bind="useSnippet" style={{display: 'none'}} value="true" data-action="update" />
          {useSnippet ? "スニペットを使用しない" : "スニペットを使用する"}
          </label>
          {useSnippet &&
            <div>
            <select data-bind="optionFormat" style={{verticalAlign: 'middle'}}>
              <option value="pref">都道府県</option>
              <option value="pref-en">都道府県（英語）</option>
              <option value="pref-number">都道府県（連番）</option>
            </select>
            <button className="acms-admin-btn" data-action="addSnippet" style={{verticalAlign:'middle'}}>追加</button>
            </div>
          }
        </span>
      </p>
    )
  }

  renderModal() {
    const {openConverter} = this.state;
    return (
      <div>
        {openConverter &&
        <div className="acms-admin-modal" id="converter" data-action="hiddenConverter" style={{display: 'block'}}>
          <div className="acms-admin-modal-dialog">
            <div className="acms-admin-modal-content">
              <div className="acms-admin-modal-header">
                <i className="acms-admin-modal-hide acms-admin-icon-delete" id="converter-close"></i>
                <h3>コンバーター参照</h3>
              </div>
              <div className="acms-admin-modal-body">
                <div className="acms-admin-padding-small clearfix">
                  <table className="acms-admin-table acms-admin-table-heading acms-admin-table-hover">
                    <tr>
                      <th>オプション</th>
                      <th>意味</th>
                      <th>追加</th>
                    </tr>
                    <tr>
                      <td>r</td>
                      <td>「全角」英字を「半角」に変換します</td>
                      <td><button className="acms-admin-btn" data-action="addConverter(r)">追加</button></td>
                    </tr>
                    <tr>
                      <td>R</td>
                      <td>「半角」英字を「全角」に変換します</td>
                      <td><button className="acms-admin-btn" data-action="addConverter(R)">追加</button></td>
                    </tr>
                    <tr>
                      <td>n</td>
                      <td>「全角」数字を「半角」に変換します</td>
                      <td><button className="acms-admin-btn" data-action="addConverter(n)">追加</button></td>
                    </tr>
                    <tr>
                      <td>N</td>
                      <td>「半角」数字を「全角」に変換します。</td>
                      <td><button className="acms-admin-btn" data-action="addConverter(N)">追加</button>
                      </td>
                    </tr>
                    <tr>
                      <td>a</td>
                      <td>「全角」英数字を「半角」に変換します。</td>
                      <td><button className="acms-admin-btn" data-action="addConverter(a)">追加</button>
                      </td>
                    </tr>
                    <tr>
                      <td>A</td>
                      <td>「半角」英数字を「全角」に変換します。</td>
                      <td><button className="acms-admin-btn" data-action="addConverter(A)">追加</button>
                      </td>
                    </tr>
                    <tr>
                      <td>s</td>
                      <td>「全角」スペースを「半角」に変換します（U+3000 -> U+0020）。
                    </td>
                      <td><button className="acms-admin-btn" data-action="addConverter(s)">追加</button>
                      </td>
                    </tr>
                    <tr>
                      <td>S</td>
                      <td>「半角」スペースを「全角」に変換します（U+0020 -> U+3000）。</td>
                      <td><button className="acms-admin-btn" data-action="addConverter(S)">追加</button>
                      </td>
                    </tr>
                    <tr>
                      <td>k</td>
                      <td>「全角カタカナ」を「半角カタカナ」に変換します。</td>
                      <td><button className="acms-admin-btn" data-action="addConverter(k)">追加</button>
                      </td>
                    </tr>
                    <tr>
                      <td>K</td>
                      <td>「半角カタカナ」を「全角カタカナ」に変換します。</td>
                      <td><button className="acms-admin-btn" data-action="addConverter(K)">追加</button>
                      </td>
                    </tr>
                    <tr>
                      <td>h</td>
                      <td>「全角ひらがな」を「半角カタカナ」に変換します。</td>
                      <td><button className="acms-admin-btn" data-action="addConverter(h)">追加</button>
                      </td>
                    </tr>
                    <tr>
                      <td>H</td>
                      <td>「半角カタカナ」を「全角ひらがな」に変換します。</td>
                      <td><button className="acms-admin-btn" data-action="addConverter(H)">追加</button>
                      </td>
                    </tr>
                    <tr>
                      <td>c</td>
                      <td>「全角カタカナ」を「全角ひらがな」に変換します。</td>
                      <td><button className="acms-admin-btn" data-action="addConverter(c)">追加</button>
                      </td>
                    </tr>
                    <tr>
                      <td>C</td>
                      <td>「全角ひらがな」を「全角カタカナ」に変換します。</td>
                      <td><button className="acms-admin-btn" data-action="addConverter(C)">追加</button>
                      </td>
                    </tr>
                    <tr>
                      <td>V</td>
                      <td>濁点付きの文字を一文字に変換します。"K", "H" と共に使用します。</td>
                      <td><button className="acms-admin-btn" data-action="addConverter(V)">追加</button>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    )
  }

  renderValidator() {
    const { openValidator, validator } = this.state;
    return (
      <div>
        <p>
          <label style={{ color: "#006DEC", cursor: "pointer" }}>
            <input type="checkbox" value={openValidator} onChange={this.updateState.bind(this, 'openValidator', !openValidator)} style={{display:'none'}} />
            オプション</label><i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="変換・入力チェック用の項目を表示します。" style={{ marginLeft: "5px" }}></i>
        </p>
        {openValidator &&
          <div className="customFieldValidatorArea">
            {/text|textarea|radio|select/.exec(type) && this.noSearchCheckRender()}
            <p className="customFieldBold">テキストの変換<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="テキストフィールドに入力された値を別の値に変換します。詳しくは参照ボタンを押すと表示されるモーダルウィンドウに情報が記載されています。"></i></p>
            <p>
              <input type="text" data-bind="converter" className="acms-admin-form-width-quarter" placeholder="例）rs" />
              <button className="acms-admin-btn" onClick>コンバーター参照</button>
            </p>
            <table className="acms-admin-table customFieldOptionTable">
              <tr>
                <th>入力チェック<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="フィールドに入力された値が条件に合っているかをチェックします。"></i></th>
                <th>値<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="最小文字数や、正規表現チェックをバリデータに設定した際に設定する値となります。"></i></th>
                <th>メッセージ<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="フィールドに入力されている値が条件に合わなかった場合に表示されるメッセージになります。"></i></th>
                <th></th>
              </tr>
              {validator.map((item) =>
                (<tr>
                  <td>
                    <select data-bind="validator.{i}.option" className="acms-admin-form-width-full">
                      <option value="">▼ バリデータを選択</option>
                      <optgroup label="入力値の制限">
                        <option value="required">必須 ( required )</option>
                        <option value="minLength">最小文字数 ( minLength )</option>
                        <option value="maxLength">最大文字数 ( maxLength )</option>
                        <option value="min">下限値 ( min )</option>
                        <option value="max">上限値 ( max )</option>
                      </optgroup>
                      <optgroup label="形式チェック">
                        <option value="digits">数字チェック ( digits )</option>
                        <option value="email">メールアドレスチェック ( email )</option>
                        <option value="url">URLチェック ( url )</option>
                        <option value="dates">日付チェック ( dates )</option>
                        <option value="times">時間チェック ( times )</option>
                        <option value="regex">正規表現マッチ ( regex )</option>
                      </optgroup>
                    </select>
                  </td>
                  <td>
                    <input type="text" data-bind="validator.{i}.value" className="acms-admin-form-width-full" />
                  </td>
                  <td>
                    <input type="text" data-bind="validator.{i}.message" className="acms-admin-form-width-full" />
                  </td>
                  <td>
                    <button data-action="removeValidator(validator.{i});" className="acms-admin-btn-admin acms-admin-btn-admin-danger">削除</button>
                  </td>
                </tr>
                ))}
            </table>
            <p><button data-action="addValidator" className="acms-admin-btn">追加</button></p>
          </div>
        }
      </div>
    );
  }

  renderMake() {
    return (
      <p>
        <button data-action="refresh" className="acms-admin-btn-admin">クリア</button>
        <button data-action="submit" className="acms-admin-btn-admin acms-admin-btn-admin-primary acms-admin-btn-admin-save">生成</button>
      </p>
    )
  }

  renderImage() {
    return (
    <table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableImg">
      <tr>
        <th className="acms-admin-table-left">画像サイズ<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="通常画像の画像サイズを指定します。"></i></th>
        <th className="acms-admin-table-left">large画像生成<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="通常画像よりも大きい画像を生成できます。"></i></th>
        <th className="acms-admin-table-left">tiny画像生成<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="通常画像よりも小さい画像を生成できます。"></i></th>
        <th className="acms-admin-table-left">square画像生成<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="通常画像を指定したサイズで中央から正方形にトリミングして生成します。"></i></th>
      </tr>
      <tr>
        <td>
          <div className="acms-form-group">
            <div className="controls">
              <select name="normal" data-bind="normal">
                <option value="size">長辺</option>
                <option value="width">幅</option>
                <option value="height">高さ</option>
              </select>
              <span className="input-append">
                <input type="text" autocomplete="off" name="normalSize" data-bind="normalSize" className="customFieldSizeInput" placeholder="例）200px"/><span className="add-on"> px</span>
              </span>
            </div>
          </div>
        </td>
        <td>
          <div className="acms-form-group">
            <div className="controls">
              <select name="large" data-bind="large">
                <option value="">作らない</option>
                <option value="largeWidth">width</option>
                <option value="largeHeight">height</option>
              </select>
              <span className="input-append">
                <input type="text" autocomplete="off" name="largeSize" data-bind="largeSize" className="customFieldSizeInput" placeholder="例）400px"/><span className="add-on"> px</span>
              </span>
            </div>
          </div>
        </td>
        <td>
          <div className="acms-form-group">
            <div className="controls">
              <select name="tiny" data-bind="tiny">
                <option value="">作らない</option>
                <option value="tinyWidth">width</option>
                <option value="tinyHeight">height</option>
              </select>
              <span className="input-append">
                <input type="text" autocomplete="off" name="tinySize" data-bind="tinySize" className="customFieldSizeInput" placeholder="例）100px"/><span className="add-on"> px</span>
              </span>
            </div>
          </div>
        </td>
        <td>
          <div className="acms-form-group">
            <div className="controls">
              <select name="square" data-bind="square">
                <option value="">作らない</option>
                <option value="squareWidth">width</option>
              </select>
              <span className="input-append">
                <input type="text" autocomplete="off" name="squareSize" data-bind="squareSize" className="customFieldSizeInput" placeholder="例）250px"/><span className="add-on"> px</span>
              </span>
            </div>
          </div>
        </td>
      </tr>
    </table>
    )
  }

  renderImageResize() {
    return (
    <div>
      <p className="acms-admin-form-checkbox">
        <input type="checkbox" data-bind="resize" value="true" id="resize-checkbox"/>
        <label for="resize-checkbox">
          <i className="acms-admin-ico-checkbox"></i>
          ブラウザ側のリサイズ機能を使用する
        </label>
      </p>
      <p className="acms-admin-form-checkbox">
        <input type="checkbox" value="check" data-bind="alt" id="alt-checkbox"/>
        <label for="alt-checkbox">
          <i className="acms-admin-ico-checkbox"></i> alt表示用入力欄を使用する
        </label>
      </p>
    </div>
    );
  }

  render() {
    const { type } = this.state;
    return (
      <div>
        <h2 className="acms-admin-admin-title2">カスタムフィールド</h2>
        <div className="acms-admin-filter">
          {this.renderModal()}
          <table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableFirst">
            <tr>
              <th className="acms-admin-table-left">入力欄の種類<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="フィールドのタイプとなります。選択しないと生成ボタンを押してもソースコードが生成されません。"></i><span className="acms-admin-label acms-admin-label-danger">必須</span></th>
              <th className="acms-admin-table-left">タイトル<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="見出しになります。"></i><span className="acms-admin-label acms-admin-label-danger">必須</span></th>
              <th className="acms-admin-table-left">フィールド<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="フィールド名です。name属性として使用されます。"></i><span className="acms-admin-label acms-admin-label-danger">必須</span></th>
              <th className="acms-admin-table-left">ツールチップ<i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip="カスタムフィールドの説明用のツールチップを付与します。"></i></th>
            </tr>
            <tr>
              <td>{this.renderSelect()}</td>
              <td><input type="text" value="" data-bind="title" className="acms-admin-form-width-full" placeholder="例）氏名" /></td>
              <td><input type="text" value="" data-bind="name" className="acms-admin-form-width-full" placeholder="例）name" /></td>
              <td><input type="text" data-bind="tooltip" className="acms-admin-form-width-full" placeholder="例）ここにお名前を入力してください" /></td>
            </tr>
          </table>
          <div className="customFieldLine"></div>
          {type === 'select' && 
            <div>
              {this.renderSnippet()}
              {this.renderOption()}
            </div>
          }
          {type === 'radio' &&
            <div>
              {this.renderSnippet()}
              {this.renderOption()}    
            </div>
          }
          {type === 'checkbox' &&
            <div>
              {this.renderSnippet()}
              {this.renderOption()}
            </div>
          }
          {type === 'image' &&
            <div>
              {this.renderImage()}
              {this.renderImageResize()}    
            </div>
          }
          {type === 'file' &&
            <div>
              {this.fileRender()}
            </div>
          }
          {this.renderValidator()}
          {this.renderMake()}
        </div>
      </div>
    )
  }
}
