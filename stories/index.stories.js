import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Highlighter from '../src/components/highlighter';
import {customfield} from './source.js';

import Field from '../src/components/field';
import FieldGroup from '../src/components/field-group';
import Unit from '../src/components/unit';
import UnitGroup from '../src/components/unit-group';
import FieldSource from '../src/components/field-source';

import '../css/acms-admin.css';
import '../src/css/custom-field-maker.css';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('UI', module)
  .add('basic field', () => <Field />)
  .add('group field', () => <FieldGroup />)
  .add('unit', () => <Unit />)
  .add('unit group', () => <UnitGroup />)

storiesOf('Source', module)
  .add('basic field', () => <Highlighter><FieldSource acmscss={true} customfield={customfield}/></Highlighter>);
