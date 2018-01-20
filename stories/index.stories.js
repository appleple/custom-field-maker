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
  .add('basic field', () => <div className="acms-admin-form"><Field /></div>)
  .add('group field', () => <div className="acms-admin-form"><FieldGroup /></div>)
  .add('unit', () => <div className="acms-admin-form"><Unit /></div>)
  .add('unit group', () => <div className="acms-admin-form"><UnitGroup /></div>)

storiesOf('Source', module)
  .add('basic field', () => <Highlighter><FieldSource acmscss={true} customfield={customfield}/></Highlighter>);
