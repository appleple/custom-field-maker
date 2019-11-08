import React from 'react';
import renderer from 'react-test-renderer';
import FieldGroup from '../src/components/field-group';


describe('custom-field confirm source', () => {
  describe('basic', () => {
    // todo 現在ContainerにがっつりUIが組み込まれてしまっているため、ここはテストできない。
    // test('when both title and name is filled basic UI will appear', () => {
    //   const group = renderer.create(<FieldGroup />).root;
    //   const title = group.findByProps({
    //     id: 'groupTitle'
    //   });
    //   title.props.onInput({
    //     target: {
    //       value: 'タイトル'
    //     }
    //   });
    //   const name = group.findByProps({
    //     id: 'groupName'
    //   });
    //   name.props.onInput({
    //     target: {
    //       value: 'Title'
    //     }
    //   });
    //   const button = group.findByProps({
    //     id: 'makeGroup'
    //   });
    //   button.props.onClick();
    //   const select = group.findByProps({
    //     id: 'type'
    //   });
    //   expect(select).toBeTruthy();
    // });
    test('when title is empty alert box will appear', () => {
      const group = renderer.create(<FieldGroup />).root;
      const button = group.findByProps({
        id: 'makeGroup'
      });
      button.props.onClick();
      const alertBox = group.findByProps({
        className: 'acms-admin-alert acms-admin-alert-icon acms-admin-alert-danger'
      });
      expect(alertBox).toBeTruthy();
    });
  });
});