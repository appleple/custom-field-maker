import { createRoot } from 'react-dom/client';
import CustomFieldMaker from '../src';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<CustomFieldMaker />);
