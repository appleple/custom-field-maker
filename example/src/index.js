import React from 'react';
import { createRoot } from 'react-dom/client';
import CustomFieldMaker from '../../src';
import '../../src/css/custom-field-maker.css';

const root = createRoot(document.getElementById('app'));
root.render(
    <CustomFieldMaker />
);
