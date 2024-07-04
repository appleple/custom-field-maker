import React from 'react';
import Base from './base';
import { MakerContext } from '../../store/MakerContext'

export default class Field extends Base {
<<<<<<< HEAD:src/components/field.js
=======
  static contextType = MakerContext

>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/Field.jsx
  constructor(props) {
    super(props);
    this.state = {
      type: 'text',
      subType: '',
      title: '',
      name: '',
      tooltip: '',
      alert: false,
      duplicatedField: '',
      path: 'path',
      converter: '',
      normal: 'size',
      resize: true,
      useDropArea: true,
      dropAreaWidth: 200,
      dropAreaHeight: 200,
      useFocusImage: false,
      focusImageWidth: 400,
      focusImageHeight: 400,
      startHeadingLevel: 2,
      endHeadingLevel: 3,
      mediaType: 'image',
      useExpand: true,
<<<<<<< HEAD:src/components/field.js
      resize: true,
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
>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/Field.jsx
      optionFormat: 'pref',
      openValidator: false,
      openConverter: false,
      alt: false,
      fileNameMethod: 'random',
      noSearch: false,
<<<<<<< HEAD:src/components/field.js
      extension: '',
      fileNameMethod: 'random',
=======
      extension: ''
>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/Field.jsx
    };
  }

  submit() {
    const { alert, name, type, title } = this.state
    const { addCustomfield } = this.context

    if (name && type && title) {
      if(alert) this.setState({ alert: false })
      addCustomfield(this.state);
    } else {
<<<<<<< HEAD:src/components/field.js
<<<<<<< HEAD
      this.setState({
        alert: true,
      });
=======
      this.setState({ alert: true });
>>>>>>> b5e9292 (reactを16.14.0にアップデート)
    }
  }

  // typeSelectRender() {
  //   const { type } = this.state;

<<<<<<< HEAD
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
        <option value="checkbox">チェックボックス</option>
        <option value="radio">ラジオボタン</option>
        <option value="media">メディア</option>
        <option value="image">画像</option>
        <option value="file">ファイル</option>
      </select>
    );
  }
=======
  //   return (
  //     <select id="type" value={type} className="acms-admin-form-width-full" onChange={(e) => { this.updateState('type', e.target.value); }}>
  //       <option value="text">テキスト</option>
  //       <option value="textarea">テキストエリア</option>
  //       <option value="lite-editor">インラインエディター</option>
  //       <option value="rich-editor">リッチエディター</option>
  //       <option value="table">テーブル</option>
  //       <option value="select">セレクトボックス</option>
  //       <option value="checkbox">チェックボックス</option>
  //       <option value="radio">ラジオボタン</option>
  //       <option value="media">メディア</option>
  //       <option value="image">画像</option>
  //       <option value="file">ファイル</option>
  //     </select>
  //   );
  // }
>>>>>>> b5e9292 (reactを16.14.0にアップデート)

=======
      this.setState({ alert: true })
    }
  }

>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/Field.jsx
  render() {
    const { type } = this.state;
    return (
      <div>
        <h2 className="acms-admin-admin-title2">カスタムフィールド</h2>
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
          {this.renderValidator()}
          {this.renderMake()}
        </div>
      </div>
    );
  }
}
