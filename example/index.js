import React from 'react';
import { createRoot } from 'react-dom/client';
import CustomFieldMaker from '../src';
import '../src/css/custom-field-maker.css';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<CustomFieldMaker />);
