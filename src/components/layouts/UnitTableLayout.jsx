import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { Heading } from '../html/Heading';
import { TextInput } from '../html/TextInput';
import { Textarea } from '../html/Textarea';
import { Selectbox } from '../html/Selectbox';
import { Checkbox } from '../html/Checkbox';
import { RadioButton } from '../html/RadioButton';
import { Media } from '../html/Media';
import { ImageInput } from '../html/ImageInput';
import { FileInput } from '../html/FileInput';
import { RichEditor } from '../html/RichEditor';
import { Table } from '../html/Table';
import { useMakerContext } from '../../stores/MakerContext';

export const UnitTableLayout = forwardRef((_props, ref) => {
  const {
    state: { customunit },
    preview: { acmscss },
  } = useMakerContext();

  const renderFormComponent = (
    <table ref={ref} className={classnames({ 'acms-admin-table-admin-edit': acmscss })}>
      {customunit.length > 0 && (
        <tbody>
          {customunit.map((item, index) => {
            switch (item.type) {
              case 'text':
              case 'tel':
              case 'number':
              case 'email':
              case 'password': {
                return (
                  <tr key={index}>
                    <th>
                      <Heading item={item} />
                    </th>
                    <td>
                      <TextInput item={item} />
                    </td>
                  </tr>
                );
              }
              case 'textarea':
              case 'liteEditor': {
                return (
                  <tr key={index}>
                    <th>
                      <Heading item={item} />
                    </th>
                    <td>
                      <Textarea item={item} />
                    </td>
                  </tr>
                );
              }
              case 'selectbox': {
                return (
                  <tr key={index}>
                    <th>
                      <Heading item={item} />
                    </th>
                    <td>
                      <Selectbox item={item} />
                    </td>
                  </tr>
                );
              }
              case 'checkbox': {
                return (
                  <tr key={index}>
                    <th>
                      <Heading item={item} />
                    </th>
                    <td>
                      <Checkbox item={item} />
                    </td>
                  </tr>
                );
              }
              case 'radioButton': {
                return (
                  <tr key={index}>
                    <th>
                      <Heading item={item} />
                    </th>
                    <td>
                      <RadioButton item={item} />
                    </td>
                  </tr>
                );
              }
              case 'media': {
                return (
                  <tr key={index}>
                    <th>
                      <Heading item={item} />
                    </th>
                    <td>
                      <Media item={item} />
                    </td>
                  </tr>
                );
              }
              case 'image': {
                return (
                  <tr key={index}>
                    <th>
                      <Heading item={item} />
                    </th>
                    <td>
                      <ImageInput item={item} />
                    </td>
                  </tr>
                );
              }
              case 'file': {
                return (
                  <tr key={index}>
                    <th>
                      <Heading item={item} />
                    </th>
                    <td>
                      <FileInput item={item} />
                    </td>
                  </tr>
                );
              }
              case 'richEditor': {
                return (
                  <tr key={index}>
                    <th>
                      <Heading item={item} />
                    </th>
                    <td>
                      <RichEditor item={item} />
                    </td>
                  </tr>
                );
              }
              case 'table': {
                return (
                  <tr key={index}>
                    <th>
                      <Heading item={item} />
                    </th>
                    <td>
                      <Table item={item} />
                    </td>
                  </tr>
                );
              }
              default: {
                return null;
              }
            }
          })}
        </tbody>
      )}
    </table>
  );

  return renderFormComponent;
});

UnitTableLayout.displayName = 'UnitTableLayout';
