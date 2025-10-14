import { useCallback } from 'react';

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
  converter: '',
  tooltip: '',
  placeholder: '',
  validator: [
    {
      option: '',
      value: '',
      message: '',
    },
  ],
};

export function Operator(props) {
  const { setField, onSubmit = () => {} } = props;

  const onClearHandler = useCallback(() => {
    setField((prevState) => ({ ...prevState, ...crearField }));
  }, [setField]);

  return (
    <div className="customFieldOperator">
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
    </div>
  );
}
