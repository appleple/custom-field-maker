import React from 'react';
import { createRoot } from 'react-dom/client';
import CustomFieldMaker from '../../src';
import '../../css/custom-field-maker.css';

const root = createRoot(document.getElementById('app'));
root.render(
    <CustomFieldMaker />
);
