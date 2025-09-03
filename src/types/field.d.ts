export interface FieldType {
  // text, textarea
  title: string;
  name: string;
  type: string;
  tooltip: string;
  placeholder: string;
  alert: boolean;
  duplicatedField: string;
  path: string;
  converter: string;

  // image
  normal: string;
  normalSize: number | null;
  largeSize: number | null;
  tiny: string | null;
  tinySize: number | null;
  square: string | null;
  squareSize: number | null;

  resize: boolean;
  useDropArea: boolean;
  dropAreaWidth: number;
  dropAreaHeight: number;
  useFocusImage: boolean;
  focusImageWidth: number;
  focusImageHeight: number;
  mediaType: string;

  // richEditor
  useExpand: boolean;
  startHeadingLevel: number;
  endHeadingLevel: number;

  // select, checkbox, radio
  option: {
    value: string;
    label: string;
  }[];
  validator: {
    option: string;
    value: string;
    message: string;
  }[];
  optionFormat: string;
  openValidator: boolean;
  openConverter: boolean;

  alt: boolean;
  fileNameMethod: string;
  noSearch: boolean;
  extension: string;
}
