import React, { useCallback } from 'react';
import { useMakerContext } from '../../../store/MakerContext';

const crearField = {
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
  converter: '',
  tooltip: '',
  placeholder: '',
};

export function Maker(props) {
  const { setField, onSubmit = () => {} } = props;
  const {
    preview: { mode },
    undo,
  } = useMakerContext();

  const onClearHandler = useCallback(() => {
    setField((prevState) => {
      console.log(prevState);
      return {
        ...prevState,
        ...crearField,
      };
    });
  }, [setField]);

  const onUndoHandler = () => {
    undo(mode), [mode, undo];
  };

  return (
    <p>
      <button type="button" onClick={onClearHandler} className="acms-admin-btn-admin" style={{ marginRight: '5px' }}>
        クリア
      </button>
      <button
        type="button"
        onClick={onSubmit}
        className="acms-admin-btn-admin acms-admin-btn-admin-primary customFieldMakeBtn"
        style={{ marginRight: '5px' }}
      >
        生成
      </button>
      <button onClick={onUndoHandler} className="acms-admin-btn-admin">
        元に戻す
      </button>
    </p>
  );
}
