import React from 'react';
import classnames from 'classnames';
import { Heading } from '../html/Heading';
import { TextInput } from '../html/TextInput';
import { Textarea } from '../html/Textarea';
import { useMakerContext } from '../../store/MakerContext';

export function Table(props) {
  const { customfield } = props;
  const {
    preview: { jsValidator, acmscss },
  } = useMakerContext();

  return (
    <>
      {jsValidator && '<!-- <form action="" method="post" class="js-validator" enctype="multipart/form-data"> -->'}
      <table className={classnames({ 'acms-admin-table-admin-edit': acmscss })}>
        {customfield.map((item, index) => {
          switch (item.type) {
            case 'text': {
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
            case 'textarea': {
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
