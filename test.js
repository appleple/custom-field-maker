import React from 'react';
import renderer from 'react-test-renderer';
import Field from './src/components/field';
import FieldConfirmSource from './src/components/field-confirm-source';

const customfield = [{
  type: 'media',
  title: 'aaa',
  name: 'bb',
  useFocusImage: true,
  focusImageWidth: 200,
  focusImageHeight: 200
}];

describe('custom-field', () => {
  test('text area should be selected', () => {
    const field = renderer.create(<Field />).root;
    const select = field.findByProps({
      id: 'type'
    });
    select.props.onChange({
      target: {
        value: 'textarea'
      }
    });
    expect(select.props.value).toBe('textarea');
  });
  test('media option should be appeared', () => {
    const field = renderer.create(<Field />).root;
    const select = field.findByProps({
      id: 'type'
    });
    select.props.onChange({
      target: {
        value: 'media'
      }
    });
    const radio = field.findByProps({
      id: 'media-type-image-radio'
    });
    expect(radio).toBeTruthy();
  });
  test('media confirm source should have js-focused-image', () => {
    const table = renderer.create(<FieldConfirmSource customfield={customfield} />).root;
    const img = table.findByProps({
      className: 'js-focused-image'
    });
    expect(img).toBeTruthy();
  });
});
