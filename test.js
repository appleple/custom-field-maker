import React from 'react';
import renderer from 'react-test-renderer';
import Field from './src/components/field';

test('<Field />', () => {
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