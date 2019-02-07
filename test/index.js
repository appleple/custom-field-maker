import React from 'react';
import { render } from 'react-dom';
import CustomFieldMaker from '../src/';
import style from '../src/css/custom-field-maker.css';

render(
    <CustomFieldMaker />,
    document.getElementById('app'),
);