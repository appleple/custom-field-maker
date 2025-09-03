import React, { useCallback, useState } from 'react';
import { useMakerContext } from '../../stores/MakerContext';
import { ConverterModal } from './base/ConverterModal';
import { Alert } from './base/Alert';
import { Basic } from './base/Basic';
import { Snippet } from './base/Snippet';
import { Operator } from './base/Operator';
import { FormOption } from './base/FormOption';
import { OptionItem } from './base/OptionItem';
import { MediaOption } from './base/MediaOption';
import { ImageOption } from './base/ImageOption';
import { ImageResizeOption } from './base/ImageResizeOption';
import { FileOption } from './base/FileOption';
import type { FieldType } from '../../types/field.d';

export const defaultProps: FieldType = {
  // text, textarea
  title: '',
  name: '',
  type: 'text',
  tooltip: '',
  placeholder: '',
  alert: false,
  duplicatedField: '',
  path: 'path',
  converter: '',

  // image
  normal: 'size',
  normalSize: null,
  largeSize: null,
  tiny: null,
  tinySize: null,
  square: null,
  squareSize: null,

  resize: true,
  useDropArea: true,
  dropAreaWidth: 200,
  dropAreaHeight: 200,
  useFocusImage: false,
  focusImageWidth: 400,
  focusImageHeight: 400,
  mediaType: 'image',

  // richEditor
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
  noSearch: false,
  extension: '',
};

export function Field() {
  const [field, setField] = useState<FieldType>(defaultProps);
  const { addCustomfield } = useMakerContext();

  const onAddCustomfieldHandler = useCallback(
    (fieldData: FieldType) => {
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
      onAddCustomfieldHandler(field);
    } else {
      setField((prevState) => ({ ...prevState, alert: true }));
    }
  };

  return (
    <div>
      <h2>コード生成</h2>
      <div className="customFieldFunction">
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

        <FormOption field={field} setField={setField} />
        <Operator setField={setField} onSubmit={onSubmit} />
      </div>
      <ConverterModal field={field} setField={setField} />
    </div>
  );
}
