import React from 'react';
// import renderer from 'react-test-renderer';
import {shallow, configure} from 'enzyme';
import Field from './src/components/field';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('<Field />', () => {
    const field = shallow(<Field />);
    field.find('#type').simulate('change', {target : {value : 'textarea'}});
    expect(field.find('#type').value).toEqual('textarea');
});