import React from 'react';
import renderer from 'react-test-renderer';
import FieldSource from '../src/components/field-source';


describe('custom-field confirm source', () => {
  describe('media', () => {
    test('media data-type should be image', () => {
      const customfield = [{
        type: 'media',
        title: 'aaa',
        name: 'bb',
        mediaType: 'image'
      }];
      const fieldSource = renderer.create(<FieldSource customfield={customfield} />).root;
      const img = fieldSource.findAllByProps({
        'data-type': 'image',
        'type': 'button'
      });
      expect(img).toBeTruthy();
    });
    test('media not has js-droparea', () => {
      const customfield = [{
        type: 'media',
        title: 'aaa',
        name: 'bb',
        mediaType: 'image',
        useDropArea: false,
      }];
      const fieldSource = renderer.create(<FieldSource customfield={customfield} />).root;
      const divs = fieldSource.findAllByProps({
        'className': 'js-droparea',
      });
      expect(divs.length).toBe(0)
    });
    test('media focusimage width and height should be 400, 400', () => {
      const customfield = [{
        type: 'media',
        title: 'aaa',
        name: 'bb',
        mediaType: 'image',
        dropAreaWidth: 400,
        dropAreaHeight: 500,
        useDropArea: true,
      }];
      const fieldSource = renderer.create(<FieldSource customfield={customfield} />).root;
      const div = fieldSource.findByProps({
        'className': 'js-droparea',
      });
      expect(div.props['data-width']).toBe('400px');
      expect(div.props['data-height']).toBe('500px');
    });
  });
});