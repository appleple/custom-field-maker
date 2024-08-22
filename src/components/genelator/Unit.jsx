import React, { useCallback, useState } from 'react';
import { useMakerContext } from '../../store/MakerContext';
import { ConverterModal } from './base/ConverterModal';
import { Alert } from './base/Alert';
import { Basic } from './base/Basic';
import { Snippet } from './base/Snippet';
import { Maker } from './base/Maker';
import { Validator } from './base/Validator';
import { OptionItem } from './base/OptionItem';
import { MediaOption } from './base/MediaOption';
import { ImageOption } from './base/ImageOption';
import { ImageResizeOption } from './base/ImageResizeOption';
import { FileOption } from './base/FileOption';
import { RichEditorOption } from './base/RichEditorOption';
const defaultProps = {
  // text, textarea
  title: '',
  name: '',
  type: 'text',
  subType: '',
  tooltip: '',
  placeholder: '',
  alert: false,
  duplicatedField: '',
  path: 'path',
  converter: '',

<<<<<<< HEAD
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
=======
  // image
  normal: 'size',
  normalSize: null, // customfieldから引用
  largeSize: null, // customfieldから引用
  tiny: null, // customfieldから引用
  tinySize: null, // customfieldから引用
  square: null, // customfieldから引用

  resize: true,
  useDropArea: true,
  dropAreaWidth: 200,
  dropAreaHeight: 200,
  useFocusImage: false,
  focusImageWidth: 400,
  focusImageHeight: 400,
  mediaType: 'image',
>>>>>>> 8da1afd (フィールドグループの追加)

  // RichEditor
  useExpand: true,
  startHeadingLevel: 2,
  endHeadingLevel: 3,

  // select, checkbox, radio
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
  optionFormat: 'pref',
  openValidator: false,
  openConverter: false,

  alt: false,
  fileNameMethod: 'random',
  noSearch: false, // customfieldから引用
  extension: '', // customfieldから引用
};
export function Unit() {
  const [field, setField] = useState(defaultProps);
  const { addCustomfield } = useMakerContext();

  const onAddCustomunitHandler = useCallback(
    (fieldData) => {
      addCustomfield(fieldData);
    },
    [addCustomfield]
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (field.name && field.type && field.title) {
      if (field.alert) {
        setField((prevState) => ({ ...prevState, alert: false }));
      }
      onAddCustomunitHandler(field);
    } else {
<<<<<<< HEAD
<<<<<<< HEAD:src/components/unit.js
      this.setState({
        alert: true,
      });
=======
      this.setState({ alert: true });
>>>>>>> 5763b9c (global state 持ち方を修正):src/components/genelator/Unit.jsx
=======
      setField((prevState) => ({ ...prevState, alert: true }));
>>>>>>> 8da1afd (フィールドグループの追加)
    }
  };

  return (
    <div>
      <h2 className="acms-admin-admin-title2">カスタムユニット</h2>
      <div className="customFieldFunction">
        <ConverterModal field={field} setField={setField} />
        <Alert field={field} setField={setField} />
        <Basic field={field} setField={setField} />
        {field.type === 'selectbox' && (
          <div>
            <Snippet field={field} setField={setField} />
            <OptionItem field={field} setField={setField} />
          </div>
        )}
        {field.type === 'radioButton' && (
          <div>
            <Snippet field={field} setField={setField} />
            <OptionItem field={field} setField={setField} />
          </div>
        )}
        {field.type === 'checkbox' && (
          <div>
            <Snippet field={field} setField={setField} />
            <OptionItem field={field} setField={setField} />
          </div>
        )}

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
=======
        {field.type === 'media' && (
          <div>
            <MediaOption field={field} setField={setField} />
          </div>
        )}

        {field.type === 'image' && (
          <div>
            {<ImageOption setField={setField} />}
            {<ImageResizeOption field={field} setField={setField} />}
          </div>
        )}

        {field.type === 'file' && (
          <div>
            <FileOption field={field} setField={setField} />
          </div>
        )}

        {field.type === 'richEditor' && <div>{<RichEditorOption field={field} setField={setField} />}</div>}

        {field.type !== 'media' && field.type !== 'richEditor' && field.type !== 'table' && (
          <Validator field={field} setField={setField} />
        )}
        <Maker setField={setField} onSubmit={onSubmit} />
      </div>
    </div>
  );
>>>>>>> 8da1afd (フィールドグループの追加)
}
