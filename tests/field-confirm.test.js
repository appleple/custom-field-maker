import React from 'react';
import renderer from 'react-test-renderer';
import FieldConfirmSource from '../src/components/field-confirm-source';

describe('custom-field confirm source', () => {
  describe('media', () => {
    test('media confirm source should have js-focused-image', () => {
      const customfield = [{
        type: 'media',
        title: 'aaa',
        name: 'bb',
        useFocusImage: true,
        focusImageWidth: 200,
        focusImageHeight: 200
      }];
      const table = renderer.create(<FieldConfirmSource customfield={customfield} />).root;
      const img = table.findByProps({
        className: 'js-focused-image'
      });
      expect(img).toBeTruthy();
    });
  });
});