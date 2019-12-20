import React from 'react';
import renderer from 'react-test-renderer';
import Field from '../src/components/field';

// カスタムフィールドメーカーのフィールド周りのUIテスト

describe('custom-field UI ', () => {
  describe('textarea', () => {
    test('textarea should be selected', () => {
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
  });
  describe('media', () => {
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
  });
  describe('rich-editor', () => {
    test('rich-editor expand checkbox should be appeared', () => {
      const field = renderer.create(<Field />).root;
      const select = field.findByProps({
        id: 'type'
      });
      select.props.onChange({
        target: {
          value: 'rich-editor'
        }
      });
      const checkbox = field.findByProps({
        id: 'expand-checkbox'
      });
      expect(checkbox).toBeTruthy();
    });
  });
});
