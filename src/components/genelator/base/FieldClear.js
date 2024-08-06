export function FieldClear(props) {
  const { setField } = props;
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
    openValidator: '',
    converter: '',
    tooltip: '',
    placeholder: '',
  };

  setField(crearField);
}
