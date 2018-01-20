import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Field from '../src/components/field';
import FieldGroup from '../src/components/field-group';
import Unit from '../src/components/unit';
import UnitGroup from '../src/components/unit-group';
import '../css/acms-admin.css';
import '../src/css/custom-field-maker.css';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Fields', module)
  .add('basic field', () => <Field />)
  .add('group field', () => <FieldGroup />)
  .add('unit', () => <Unit />)
  .add('unit group', () => <UnitGroup />)
