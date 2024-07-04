import React from 'react';
import Base from './base';
import { MakerContext } from '../../store/MakerContext'

export default class Unit extends Base {
<<<<<<< HEAD:src/components/unit.js
=======
  static contextType = MakerContext

>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/Unit.jsx
  constructor(props) {
    super(props);
    this.state = {
      type: 'text',
      subType: '',
      title: '',
      name: '',
      tooltip: '',
      alert: '',
      duplicatedField: '',
      path: 'path',
      converter: '',
      normal: 'size',
<<<<<<< HEAD
      resize: 'true',
      option: [
        {
          value: '',
          label: '',
        },
      ],
      validator: [
        {
          option: '',
          value: '',
          message: '',
        },
      ],
=======
      option: [{
        value: '',
        label: ''
      }],
      validator: [{
        option: '',
        value: '',
        message: ''
      }],
>>>>>>> 51184c2 (build: eslint を導入)
      optionFormat: 'pref',
      openValidator: false,
      openConverter: false,
      alt: false,
      resize: true,
      useExpand: true,
      fileNameMethod: 'random',
      useDropArea: true,
      dropAreaWidth: 200,
      dropAreaHeight: 200,
      useFocusImage: false,
      focusImageWidth: 400,
      focusImageHeight: 400,
      startHeadingLevel: 2,
      endHeadingLevel: 3,
      mediaType: 'image',
    };
  }

  submit() {
    const { name, type, title } = this.state;
    const { addCustomunit } = this.context
    if (name && type && title) {
      addCustomunit(this.state);
    } else {
<<<<<<< HEAD:src/components/unit.js
      this.setState({
        alert: true,
      });
=======
      this.setState({ alert: true });
>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/Unit.jsx
    }
  }

  typeSelectRender() {
    const { type } = this.state;

    return (
      <select
        id="type"
        value={type}
        className="acms-admin-form-width-full"
        onChange={(e) => {
          this.updateState('type', e.target.value);
        }}
      >
        <option value="text">テキスト</option>
        <option value="textarea">テキストエリア</option>
        <option value="lite-editor">インラインエディター</option>
        <option value="rich-editor">リッチエディター</option>
        <option value="table">テーブル</option>
        <option value="select">セレクトボックス</option>
        <option value="radio">ラジオボタン</option>
        <option value="checkbox">チェックボックス</option>
        <option value="media">メディア</option>
        <option value="image">画像</option>
        <option value="file">ファイル</option>
      </select>
    );
  }

  render() {
    const { type } = this.state;
    return (
      <div>
        <h2 className="acms-admin-admin-title2">カスタムユニット</h2>
        <div className="customFieldFunction">
          {this.renderModal()}
          {this.renderAlert()}
          {this.renderBasic()}
          <div className="customFieldLine" />
          {type === 'select' && (
            <div>
              {this.renderSnippet()}
              {this.renderOption()}
            </div>
          )}
          {type === 'radio' && (
            <div>
              {this.renderSnippet()}
              {this.renderOption()}
            </div>
          )}
          {type === 'checkbox' && (
            <div>
              {this.renderSnippet()}
              {this.renderOption()}
            </div>
          )}
          {type === 'image' && (
            <div>
              {this.renderImage()}
              {this.renderImageResize()}
            </div>
          )}
          {type === 'file' && <div>{this.renderFile()}</div>}
          {type === 'media' && <div>{this.renderMediaOption()}</div>}
          {type === 'rich-editor' && <div>{this.renderRichEditorOption()}</div>}
          {this.renderValidator(false)}
          {this.renderMake()}
        </div>
      </div>
    );
  }
}
