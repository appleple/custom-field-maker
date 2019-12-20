import React, { Component, Fragment } from 'react';
import ReactTooltip from 'react-tooltip';

import ModalDialog from './modal-dialog';
import stateManger from '../lib/history';
import prefJson from '../../json/pref.json';
import prefEnJson from '../../json/pref-en.json';
import prefNumberJson from '../../json/pref-number.json';

const snippetJSON = {
  pref: prefJson,
  'pref-en': prefEnJson,
  'pref-number': prefNumberJson
};

export default class Base extends Component {

  constructor(props) {
    super(props);
  }


  updateState(prop, value) {
    this.setState({
      [prop]: value
    });
  }

  removeAlert() {
    this.setState({
      alert: false
    });
  }

  removeGroupAlert() {
    this.setState({
      groupAlert: false
    });
  }

  removeDuplicateAlert() {
    this.setState({
      duplicatedField: false
    });
  }

  clearValue() {
    this.setState({
      title: '',
      name: '',
      path: '',
      normalSize: '',
      tiny: '',
      tinySize: '',
      large: '',
      largeSize: '',
      square: '',
      squareSize: '',
      alt: true,
      resize: true,
      useExpand: true,
      useDropArea: true,
      dropAreaWidth: 200,
      dropAreaHeight: 200,
      useFocusImage: false,
      focusImageWidth: 400,
      focusImageHeight: 400,
      startHeadingLevel: 2,
      endHeadingLevel: 3,
      mediaType: 'image',
      openConverter: '',
      openValidator: '',
      converter: '',
      tooltip: ''
    });
  }

  addOption() {
    const { option } = this.state;
    this.setState({
      option: [...option, {
        value: '',
        label: ''
      }]
    });
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

  addValidator() {
    const { validator } = this.state;
    this.setState({
      validator: [...validator, {
        option: '',
        value: '',
        message: ''
      }]
    });
  }

  removeValidator(idx) {
    const { validator } = this.state;
    this.setState({
      validator: [...validator.slice(0, idx), ...validator.slice(idx + 1)]
    });
  }

  updateValidatorOption(idx, option) {
    const { validator } = this.state;
    const item = validator[idx];
    this.setState({
      validator: [
        ...validator.slice(0, idx),
        Object.assign({}, item, {
          option
        }),
        ...validator.slice(idx + 1)
      ]
    });
  }

  updateValidatorValue(idx, value) {
    const { validator } = this.state;
    const item = validator[idx];
    this.setState({
      validator: [
        ...validator.slice(0, idx),
        Object.assign({}, item, {
          value
        }),
        ...validator.slice(idx + 1)
      ]
    });
  }

  updateValidatorMessage(idx, message) {
    const { validator } = this.state;
    const item = validator[idx];
    this.setState({
      validator: [
        ...validator.slice(0, idx),
        Object.assign({}, item, {
          message
        }),
        ...validator.slice(idx + 1)
      ]
    });
  }

  addConverter(item) {
    let { converter } = this.state;
    const reg = new RegExp(item, 'i');
    if (converter.search(reg) === -1) {
      converter += item;
    } else {
      converter = converter.replace(item.toUpperCase(), item);
      converter = converter.replace(item.toLowerCase(), item);
    }
    this.setState({
      converter
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
                  <span className="customFieldOptionTableAppend">項目名（label）</span><input type="text" value={item.label} onInput={(e) => { this.updateOptionLabel(idx, e.target.value); }} className="acms-admin-form-width-full" placeholder="例）東京都" />
                </div>
              </td>
              <td>
                <div className="customFieldOptionTableInput">
                  <span className="customFieldOptionTableAppend">値（value）</span><input type="text" value={item.value} onInput={(e) => { this.updateOptionValue(idx, e.target.value); }} className="acms-admin-form-width-full" placeholder="例）tokyo" />
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
        <p><input type="text" value={title} onInput={(e) => { this.updateState('title', e.target.value); }} /></p>
        <p>name属性</p>
        <p><input type="text" value={name} onInput={(e) => { this.updateState('name', e.target.value); }} /></p>
      </div>
    );
  }

  applySnippet() {
    const { optionFormat, option } = this.state;
    const res = snippetJSON[optionFormat];
    this.setState({
      option: [...option, ...res]
    });
  }

  renderSnippet() {
    const { useSnippet, optionFormat } = this.state;
    return (
      <p>
        <span className="customFieldBold">
          選択項目（option要素）
          <i className="acms-admin-icon-tooltip" data-tip data-for="option-value-tip" />
          <ReactTooltip id="option-value-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
            <span>option要素の選択項目になります。</span>
          </ReactTooltip>
        </span>
        <span className="customFieldUseSnippet">
          <label className="customFieldUseSnippetLabel" style={{ marginRight: '5px' }}>
            <input type="checkbox" style={{ display: 'none' }} value="true" onChange={() => { this.updateState('useSnippet', !useSnippet); }} />
            {useSnippet ? 'スニペットを使用しない' : 'スニペットを使用する'}
          </label>
          {useSnippet &&
            <span>
              <select style={{ verticalAlign: 'middle', marginRight: '5px' }} value={optionFormat} onChange={(e) => { this.updateState('optionFormat', e.target.value); }}>
                <option value="pref">都道府県</option>
                <option value="pref-en">都道府県（英語）</option>
                <option value="pref-number">都道府県（連番）</option>
              </select>
              <button className="acms-admin-btn" onClick={this.applySnippet.bind(this)} style={{ verticalAlign: 'middle' }}>追加</button>
            </span>
          }
        </span>
      </p>
    );
  }

  renderModal() {
    const { openConverter, converter } = this.state;
    return (
      <div>
        <ModalDialog open={openConverter} title="コンバーター参照" onClose={this.updateState.bind(this, 'openConverter', false)}>
          <table className="acms-admin-table acms-admin-table-heading acms-admin-table-hover">
            <tr>
              <th>オプション</th>
              <th>意味</th>
              <th>追加</th>
            </tr>
            <tr>
              <td>r</td>
              <td>「全角」英字を「半角」に変換します</td>
              <td><button className="acms-admin-btn" onClick={this.addConverter.bind(this, 'r')}>追加</button></td>
            </tr>
            <tr>
              <td>R</td>
              <td>「半角」英字を「全角」に変換します</td>
              <td><button className="acms-admin-btn" onClick={this.addConverter.bind(this, 'R')}>追加</button></td>
            </tr>
            <tr>
              <td>n</td>
              <td>「全角」数字を「半角」に変換します</td>
              <td><button className="acms-admin-btn" onClick={this.addConverter.bind(this, 'n')}>追加</button></td>
            </tr>
            <tr>
              <td>N</td>
              <td>「半角」数字を「全角」に変換します。</td>
              <td><button className="acms-admin-btn" onClick={this.addConverter.bind(this, 'N')}>追加</button>
              </td>
            </tr>
            <tr>
              <td>a</td>
              <td>「全角」英数字を「半角」に変換します。</td>
              <td><button className="acms-admin-btn" onClick={this.addConverter.bind(this, 'a')}>追加</button>
              </td>
            </tr>
            <tr>
              <td>A</td>
              <td>「半角」英数字を「全角」に変換します。</td>
              <td><button className="acms-admin-btn" onClick={this.addConverter.bind(this, 'A')}>追加</button>
              </td>
            </tr>
            <tr>
              <td>s</td>
              <td>「全角」スペースを「半角」に変換します（U+3000 -> U+0020）。
                    </td>
              <td><button className="acms-admin-btn" onClick={this.addConverter.bind(this, 's')}>追加</button>
              </td>
            </tr>
            <tr>
              <td>S</td>
              <td>「半角」スペースを「全角」に変換します（U+0020 -> U+3000）。</td>
              <td><button className="acms-admin-btn" onClick={this.addConverter.bind(this, 'S')}>追加</button>
              </td>
            </tr>
            <tr>
              <td>k</td>
              <td>「全角カタカナ」を「半角カタカナ」に変換します。</td>
              <td><button className="acms-admin-btn" onClick={this.addConverter.bind(this, 'k')}>追加</button>
              </td>
            </tr>
            <tr>
              <td>K</td>
              <td>「半角カタカナ」を「全角カタカナ」に変換します。</td>
              <td><button className="acms-admin-btn" onClick={this.addConverter.bind(this, 'K')}>追加</button>
              </td>
            </tr>
            <tr>
              <td>h</td>
              <td>「全角ひらがな」を「半角カタカナ」に変換します。</td>
              <td><button className="acms-admin-btn" onClick={this.addConverter.bind(this, 'h')}>追加</button>
              </td>
            </tr>
            <tr>
              <td>H</td>
              <td>「半角カタカナ」を「全角ひらがな」に変換します。</td>
              <td><button className="acms-admin-btn" onClick={this.addConverter.bind(this, 'H')}>追加</button>
              </td>
            </tr>
            <tr>
              <td>c</td>
              <td>「全角カタカナ」を「全角ひらがな」に変換します。</td>
              <td><button className="acms-admin-btn" onClick={this.addConverter.bind(this, 'c')}>追加</button>
              </td>
            </tr>
            <tr>
              <td>C</td>
              <td>「全角ひらがな」を「全角カタカナ」に変換します。</td>
              <td><button className="acms-admin-btn" onClick={this.addConverter.bind(this, 'C')}>追加</button>
              </td>
            </tr>
            <tr>
              <td>V</td>
              <td>濁点付きの文字を一文字に変換します。"K", "H" と共に使用します。</td>
              <td><button className="acms-admin-btn" onClick={this.addConverter.bind(this, 'V')}>追加</button>
              </td>
            </tr>
          </table>
        </ModalDialog>
      </div>
    );
  }

  renderBasic() {
    const { title, name, tooltip, type } = this.state;
    return (<table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableFirst">
      <tr>
        <th className="acms-admin-table-left">入力欄の種類
        <i className="acms-admin-icon-tooltip" data-tip="React-tooltip" data-for="type-tip" />
          <ReactTooltip id="type-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
            <span>フィールドのタイプとなります。<br />選択しないと生成ボタンを押してもソースコードが生成されません。</span>
          </ReactTooltip>
          <span className="acms-admin-label acms-admin-label-danger">必須</span>
        </th>
        <th className="acms-admin-table-left">タイトル
        <i className="acms-admin-icon-tooltip" data-tip="React-tooltip" data-for="title-tip" />
          <ReactTooltip id="title-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
            <span>見出しになります。</span>
          </ReactTooltip>
          <span className="acms-admin-label acms-admin-label-danger">必須</span></th>
        <th className="acms-admin-table-left">フィールド
        <i className="acms-admin-icon-tooltip" data-tip="React-tooltip" data-for="field-tip" />
          <ReactTooltip id="field-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
            <span>フィールド名です。name属性として使用されます。</span>
          </ReactTooltip>
          <span className="acms-admin-label acms-admin-label-danger">必須</span></th>
        <th className="acms-admin-table-left">ツールチップ
        <i className="acms-admin-icon-tooltip" data-tip="React-tooltip" data-for="tooltip-tip" />
          <ReactTooltip id="tooltip-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
            <span>カスタムフィールドの説明用のツールチップを付与します。</span>
          </ReactTooltip>
        </th>
      </tr>
      <tr>
        <td>
          {this.typeSelectRender()}
        </td>
        <td><input type="text" value={title} onInput={(e) => { this.updateState('title', e.target.value); }} className="acms-admin-form-width-full" placeholder="例）氏名" /></td>
        <td><input type="text" value={name} onInput={(e) => { this.updateState('name', e.target.value); }} className="acms-admin-form-width-full" placeholder="例）name" /></td>
        <td><input type="text" value={tooltip} onInput={(e) => { this.updateState('tooltip', e.target.value); }} className="acms-admin-form-width-full" placeholder="例）ここにお名前を入力してください" /></td>
      </tr>
    </table>);
  }

  typeSelectRender() {
    const { type } = this.state;

    return (
      <select id="type" value={type} className="acms-admin-form-width-full" onChange={(e) => { this.updateState('type', e.target.value); }}>
        <option value="text">テキスト</option>
        <option value="textarea">テキストエリア</option>
        <option value="lite-editor">インラインエディター</option>
        <option value="rich-editor">リッチエディター</option>
        <option value="table">テーブル</option>
        <option value="select">セレクトボックス</option>
        <option value="radio">ラジオボタン</option>
        <option value="media">メディア</option>
        <option value="image">画像</option>
        <option value="file">ファイル</option>
      </select>);
  }

  noSearchCheckRender() {
    const { noSearch } = this.state;
    return (<p className="acms-admin-form-checkbox">
      <input type="checkbox" value={noSearch} id="noSearch-checkbox" onChange={this.updateState.bind(this, 'noSearch', !noSearch)} />
      <label htmlFor="noSearch-checkbox">
        <i className="acms-admin-ico-checkbox" />
        カスタムフィールド検索の対象外にする
    </label>
    </p>);
  }

  backState() {
    const { actions } = this.props;
    const state = stateManger.undo();
    if (state) {
      actions.setState(state);
    }
  }

  renderValidator(showValidator = true) {
    const { openValidator, validator, converter, type } = this.state;
    return (
      <div>
        <p>
          <label style={{ color: '#006DEC', cursor: 'pointer' }}>
            <input type="checkbox" value={openValidator} onChange={this.updateState.bind(this, 'openValidator', !openValidator)} style={{ display: 'none' }} />
            オプション</label>
          <i className="acms-admin-icon-tooltip" data-for="option-tip" data-tip="React-tooltip" style={{ marginLeft: '5px' }} />
          <ReactTooltip id="option-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
            <span>変換・入力チェック用の項目を表示します。</span>
          </ReactTooltip>
        </p>
        {openValidator &&
          <div className="customFieldValidatorArea">
            {/text|textarea|radio|select/.exec(type) && this.noSearchCheckRender()}
            <p className="customFieldBold">
              テキストの変換
              <i className="acms-admin-icon-tooltip" data-tip data-for="convert-tip" />
              <ReactTooltip id="convert-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
                <span>テキストフィールドに入力された値を別の値に変換します。詳しくは参照ボタンを押すと表示されるモーダルウィンドウに情報が記載されています。</span>
              </ReactTooltip>
            </p>
            <p>
              <input type="text" value={converter} onInput={(e) => { this.updateState('converter', e.target.value); }} className="acms-admin-form-width-quarter acms-admin-margin-right-small" placeholder="例）rs" />
              <button className="acms-admin-btn" onClick={this.updateState.bind(this, 'openConverter', true)}>コンバーター参照</button>
            </p>
            {showValidator && <table className="acms-admin-table customFieldOptionTable">
              <tr>
                <th>
                  入力チェック
                  <i className="acms-admin-icon-tooltip" data-tip data-for="validate-tip" />
                  <ReactTooltip id="validate-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
                    <span>フィールドに入力された値が条件に合っているかをチェックします。</span>
                  </ReactTooltip>
                </th>
                <th>値
                  <i className="acms-admin-icon-tooltip" data-tip data-for="validate-value-tip" />
                  <ReactTooltip id="validate-value-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
                    <span>最小文字数や、正規表現チェックをバリデータに設定した際に設定する値となります。</span>
                  </ReactTooltip>
                </th>
                <th>
                  メッセージ
                  <i className="acms-admin-icon-tooltip" data-tip data-for="validate-message-tip" />
                  <ReactTooltip id="validate-message-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
                    <span>フィールドに入力されている値が条件に合わなかった場合に表示されるメッセージになります。</span>
                  </ReactTooltip>
                </th>
                <th />
              </tr>
              {validator.map((item, idx) =>
                (<tr>
                  <td>
                    <select className="acms-admin-form-width-full" onChange={(e) => { this.updateValidatorOption(idx, e.target.value); }}>
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
                    <input type="text" value={item.value} onInput={(e) => { this.updateValidatorValue(idx, e.target.value); }} className="acms-admin-form-width-full" />
                  </td>
                  <td>
                    <input type="text" value={item.message} onInput={(e) => { this.updateValidatorMessage(idx, e.target.value); }} className="acms-admin-form-width-full" />
                  </td>
                  <td>
                    <button onClick={this.removeValidator.bind(this, idx)} className="acms-admin-btn-admin acms-admin-btn-admin-danger">削除</button>
                  </td>
                </tr>
                ))}
            </table>}
            {showValidator && <p><button onClick={this.addValidator.bind(this)} className="acms-admin-btn">追加</button></p>}
          </div>
        }
      </div>
    );
  }

  renderMake() {
    return (
      <p>
        <button onClick={this.clearValue.bind(this)} className="acms-admin-btn-admin" style={{ marginRight: '5px' }}>クリア</button>
        <button onClick={this.submit.bind(this)} className="acms-admin-btn-admin acms-admin-btn-admin-primary customFieldMakeBtn" style={{ marginRight: '5px' }}>生成</button>
        <button onClick={this.backState.bind(this)} className="acms-admin-btn-admin">元に戻す</button>
      </p>
    );
  }

  renderImage() {
    return (
      <table className="adminTable acms-admin-table-admin-edit customFieldBasicTable customFieldBasicTableImg">
        <tr>
          <th className="acms-admin-table-left">
            画像サイズ
            <i className="acms-admin-icon-tooltip" data-tip data-for="image-size-tip" />
            <ReactTooltip id="image-size-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
              <span>通常画像の画像サイズを指定します</span>
            </ReactTooltip>
          </th>
          <th className="acms-admin-table-left">
            large画像生成
            <i className="acms-admin-icon-tooltip" data-tip data-for="image-large-size-tip" />
            <ReactTooltip id="image-size-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
              <span>通常画像よりも大きい画像を生成できます。</span>
            </ReactTooltip>
          </th>
          <th className="acms-admin-table-left">
            tiny画像生成
            <i className="acms-admin-icon-tooltip" data-tip data-for="image-tiny-size-tip" />
            <ReactTooltip id="image-tiny-size-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
              <span>通常画像よりも小さい画像を生成できます。</span>
            </ReactTooltip>
          </th>
          <th className="acms-admin-table-left">
            square画像生成
            <i className="acms-admin-icon-tooltip" data-tip data-for="image-square-size-tip" />
            <ReactTooltip id="image-tiny-size-tip" place="top" type="dark" effect="solid" className="acms-admin-tooltip acms-tooltip customFieldTooltip">
              <span>通常画像を指定したサイズで中央から正方形にトリミングして生成します。</span>
            </ReactTooltip>
          </th>
        </tr>
        <tr>
          <td>
            <div className="acms-form-group">
              <div className="controls">
                <select name="normal" onChange={(e) => { this.updateState('normal', e.target.value); }} className="acms-admin-margin-right-small">
                  <option value="size">長辺</option>
                  <option value="width">幅</option>
                  <option value="height">高さ</option>
                </select>
                <span className="input-append">
                  <input type="text" autoComplete="off" name="normalSize" onInput={(e) => { this.updateState('normalSize', e.target.value); }} className="customFieldSizeInput" placeholder="例）200px" /><span className="add-on"> px</span>
                </span>
              </div>
            </div>
          </td>
          <td>
            <div className="acms-form-group">
              <div className="controls">
                <select name="large" onChange={(e) => { this.updateState('large', e.target.value); }} className="acms-admin-margin-right-small">
                  <option value="">作らない</option>
                  <option value="largeWidth">width</option>
                  <option value="largeHeight">height</option>
                </select>
                <span className="input-append">
                  <input type="text" autoComplete="off" name="largeSize" onInput={(e) => { this.updateState('largeSize', e.target.value); }} className="customFieldSizeInput" placeholder="例）400px" /><span className="add-on"> px</span>
                </span>
              </div>
            </div>
          </td>
          <td>
            <div className="acms-form-group">
              <div className="controls">
                <select name="tiny" onChange={(e) => { this.updateState('tiny', e.target.value); }} className="acms-admin-margin-right-small">
                  <option value="">作らない</option>
                  <option value="tinyWidth">width</option>
                  <option value="tinyHeight">height</option>
                </select>
                <span className="input-append">
                  <input type="text" autoComplete="off" name="tinySize" onInput={(e) => { this.updateState('tinySize', e.target.value); }} className="customFieldSizeInput" placeholder="例）100px" /><span className="add-on"> px</span>
                </span>
              </div>
            </div>
          </td>
          <td>
            <div className="acms-form-group">
              <div className="controls">
                <select name="square" onChange={(e) => { this.updateState('square', e.target.value); }} className="acms-admin-margin-right-small">
                  <option value="">作らない</option>
                  <option value="squareWidth">width</option>
                </select>
                <span className="input-append">
                  <input type="text" autoComplete="off" name="squareSize" onInput={(e) => { this.updateState('squareSize', e.target.value); }} className="customFieldSizeInput" placeholder="例）250px" /><span className="add-on"> px</span>
                </span>
              </div>
            </div>
          </td>
        </tr>
      </table>
    );
  }

  renderImageResize() {
    const { resize, alt } = this.state;
    return (
      <div>
        <p className="acms-admin-form-checkbox">
          <input type="checkbox" onChange={this.updateState.bind(this, 'resize', !resize)} checked={resize} id="resize-checkbox" />
          <label htmlFor="resize-checkbox">
            <i className="acms-admin-ico-checkbox" />
            ブラウザ側のリサイズ機能を使用する
          </label>
        </p>
        <p className="acms-admin-form-checkbox">
          <input type="checkbox" onChange={this.updateState.bind(this, 'alt', !alt)} checked={alt} id="alt-checkbox" />
          <label htmlFor="alt-checkbox">
            <i className="acms-admin-ico-checkbox" /> alt表示用入力欄を使用する
          </label>
        </p>
      </div>
    );
  }

  renderRichEditorOption() {
    const { useExpand, startHeadingLevel, endHeadingLevel } = this.state;
    return (<div>
      <p className="acms-admin-form-checkbox">
        <input type="checkbox" onChange={this.updateState.bind(this, 'useExpand', !useExpand)} checked={useExpand} id="expand-checkbox" />
        <label htmlFor="expand-checkbox">
          <i className="acms-admin-ico-checkbox" /> リッチエディターを拡大表示する
        </label>
      </p>
      <div>
        開始見出しレベル 
        <span style={{ display: 'inline-block', width: '5px', height: '1px' }} />
        <input 
          type="text" 
          value={startHeadingLevel} 
          onInput={(e) => {
            this.setState({
              startHeadingLevel: e.target.value
            });
          }} 
        />
        <span style={{ display: 'inline-block', width: '15px', height: '1px' }} />
        終了見出しレベル 
        <span style={{ display: 'inline-block', width: '5px', height: '1px' }} />
        <input 
          type="text" 
          value={endHeadingLevel}
          onInput={(e) => {
            this.setState({
              endHeadingLevel: e.target.value
            });
          }} 
        />
      </div>
    </div>);
  }

  renderMediaOption() {
    const { mediaType, useDropArea, useFocusImage, dropAreaWidth, dropAreaHeight, focusImageWidth, focusImageHeight } = this.state;
    return (
      <div>
        <p style={{ marginBottom: '5px' }}>選べるメディアのタイプを選択</p>
        <p className="acms-admin-form-radio">
          <input type="checkbox" onChange={this.updateState.bind(this, 'mediaType', 'all')} checked={mediaType === 'all'} id="media-type-all-radio" />
          <label htmlFor="media-type-all-radio">
            <i className="acms-admin-ico-radio" />
            全てのタイプ
          </label>
        </p>
        <p className="acms-admin-form-radio">
          <input type="checkbox" onChange={this.updateState.bind(this, 'mediaType', 'image')} checked={mediaType === 'image'} id="media-type-image-radio" />
          <label htmlFor="media-type-image-radio">
            <i className="acms-admin-ico-radio" />
            画像のみ
          </label>
        </p>
        <p className="acms-admin-form-radio">
          <input type="checkbox" onChange={this.updateState.bind(this, 'mediaType', 'file')} checked={mediaType === 'file'} id="media-type-file-radio" />
          <label htmlFor="media-type-file-radio">
            <i className="acms-admin-ico-radio" />
            ファイルのみ
          </label>
        </p>
        <p style={{ marginBottom: '5px' }}>ドロップエリア</p>
        <div style={{ display: 'flex' }}>
          <div className="acms-admin-form-checkbox" style={{ paddingTop: '5px' }}>
            <input
              type="checkbox" onChange={() => {
                if (useDropArea) {
                  this.updateState('useDropArea', false);
                } else {
                  this.updateState('useDropArea', true);
                }
              }} checked={useDropArea} id="media-use-droparea"
            />
            <label htmlFor="media-use-droparea">
              <i className="acms-admin-ico-checkbox" />
              ドロップエリアを利用する
            </label>
          </div>
          {useDropArea && <div>
            幅 <input type="text" defaultValue={dropAreaWidth} /> px
            <span style={{ display: 'inline-block', width: '15px', height: '1px' }} />
            高さ <input type="text" defaultValue={dropAreaHeight} /> px
          </div>}
        </div>
        <p style={{ marginBottom: '5px' }}>トリミング</p>
        <div style={{ display: 'flex' }}>
          <div className="acms-admin-form-checkbox" style={{ paddingTop: '5px' }}>
            <input
              type="checkbox" onChange={() => {
                if (useFocusImage) {
                  this.updateState('useFocusImage', false);
                } else {
                  this.updateState('useFocusImage', true);
                }
              }} checked={useFocusImage} id="media-use-focusImage"
            />
            <label htmlFor="media-use-focusImage">
              <i className="acms-admin-ico-checkbox" />
              中心点を基準に画像をトリミングして表示する
            </label>
          </div>
          {useFocusImage && <div>
            幅 <input type="text" defaultValue={focusImageWidth} /> px
            <span style={{ display: 'inline-block', width: '15px', height: '1px' }} />
            高さ <input type="text" defaultValue={focusImageHeight} /> px
          </div>}
        </div>
      </div>
    );
  }

  renderAlert() {
    const { alert } = this.state;
    if (alert) {
      return (<p className="acms-admin-alert acms-admin-alert-icon acms-admin-alert-danger" style={{ fontSize: '12px' }}>
        <span className="acms-admin-icon acms-admin-alert-icon-before acms-admin-icon-attention" aria-hidden="true" />
        typeとタイトルとフィールド、全てを入力しないとソースコードを生成できません。
          <button className="js-acms-alert-close acms-admin-alert-icon-after" onClick={this.removeAlert.bind(this)}>×</button>
      </p>);
    }
    return null;
  }

  renderGroupAlert() {
    const { groupAlert } = this.state;
    if (groupAlert) {
      return (<p className="acms-admin-alert acms-admin-alert-icon acms-admin-alert-danger" style={{ fontSize: '12px' }}>
        <span className="acms-admin-icon acms-admin-alert-icon-before acms-admin-icon-attention" aria-hidden="true" />
        group名を入力しないとgroupを生成できません。
      <button className="js-acms-alert-close acms-admin-alert-icon-after" onClick={this.removeGroupAlert.bind(this)}>×</button>
      </p>);
    }
    return null;
  }

  renderDuplicateAlert() {
    const { duplicatedField } = this.state;
    if (duplicatedField) {
      return (<p className="acms-admin-alert acms-admin-alert-icon acms-admin-alert-danger" style={{ fontSize: '12px' }}>
        <span className="acms-admin-icon acms-admin-alert-icon-before acms-admin-icon-attention" aria-hidden="true" />
        group名とフィールド名を同じ値にすることはできません。
      <button className="js-acms-alert-close acms-admin-alert-icon-after" onClick={this.removeDuplicateAlert.bind(this)}>×</button>
      </p>);
    }
    return null;
  }

  renderFile() {
    const { extension, fileName, fileNameMethod } = this.state;
    return (
      <div className="customFieldFileContainer">
        <div className="customFieldFileNameOptContainer">
          <div className="acms-admin-form-radio">
            <input type="radio" checked={fileNameMethod === 'random'} id="file-name-method-random" onChange={this.updateState.bind(this, 'fileNameMethod', 'random')} />
            <label htmlFor="file-name-method-random">
              <i className="acms-admin-ico-radio" />
              ファイル名（ランダム）
            </label>
          </div>
          <div className="acms-admin-form-radio">
            <input type="radio" checked={fileNameMethod === 'fix'} id="file-name-method-fix" onChange={this.updateState.bind(this, 'fileNameMethod', 'fix')} />
            <label htmlFor="file-name-method-fix">
              <i className="acms-admin-ico-radio" />
              ファイル名（固定）
            </label>
          </div>
          <div className="acms-admin-form-radio">
            <input type="radio" checked={fileNameMethod === 'asis'} id="file-name-method-asis" onChange={this.updateState.bind(this, 'fileNameMethod', 'asis')} />
            <label htmlFor="file-name-method-asis">
              <i className="acms-admin-ico-radio" />
              ファイル名（そのまま）
            </label>
          </div>
        </div>
        <div>
          <div className="customFieldInputGroup customFieldInputFileGroup">
            {fileNameMethod === 'random' && <input type="text" placeholder="ランダムの文字列が入ります" disabled />}
            {fileNameMethod === 'fix' && <input type="text" value={fileName} onInput={(e) => { this.updateState('fileName', e.target.value); }} placeholder="例）example.pdf" />}
            {fileNameMethod === 'asis' && <input type="text" placeholder="アップロードされたファイル名" disabled />}
          </div>
        </div>
        <div>
          <p>拡張子制限（pdfなど）</p>
          <input type="text" value={extension} onInput={(e) => { this.updateState('extension', e.target.value); }} placeholder="例）pdf" />
        </div>
      </div>
    );
  }
}
