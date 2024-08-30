import React from 'react';
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
import { useMakerContext } from '../../store/MakerContext';

export function UnitTableLayout() {
  const {
    state: { customunit },
    preview: { jsValidator, acmscss },
  } = useMakerContext();

  return (
    <>
      {jsValidator && '<!-- <form action="" method="post" class="js-validator" enctype="multipart/form-data"> -->'}
      <table className={classnames({ 'acms-admin-table-admin-edit': acmscss })}>
        {customunit.length > 0 &&
          customunit.map((item, index) => {
            switch (item.type) {
              case 'text': {
                return (
                  <tr key={index}>
                    <th>
                      <Heading item={item} />
                    </th>
                    <td>
                      <TextInput item={item} id={`${item.name}${index}`} />
                    </td>
                  </tr>
                );
              }
              case 'textarea': {
                return (
                  <tr key={index}>
                    <th>
                      <Heading item={item} />
                    </th>
                    <td>
                      <Textarea item={item} id={`${item.name}${index}`} />
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
                      <Selectbox item={item} id={`${item.name}${index}`} />
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
                      <Media item={item} id={`${item.name}${index}`} />
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
                      <ImageInput item={item} id={`${item.name}${index}`} />
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
                      <FileInput item={item} id={`${item.name}${index}`} />
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
                      <RichEditor item={item} id={`${item.name}${index}`} />
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
                      <Table item={item} id={`${item.name}${index}`} />
                    </td>
                  </tr>
                );
              }
              default: {
                return null;
              }
            }
          })}
      </table>
      {jsValidator && '<!-- </form> -->'}
    </>
  );
}
