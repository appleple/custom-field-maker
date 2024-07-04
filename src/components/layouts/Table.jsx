import React from "react";
import classnames from 'classnames';
import { Label } from '../html/Label'
import { TextInput } from '../html/TextInput'
import { TextareaInput } from '../html/TextareaInput'

export const Table = (props) => {
  const { customfield, preview } = props

  return (
    <>
      {preview.jsValidator && '<!-- <form action="" method="post" class="js-validator" enctype="multipart/form-data"> -->'}
        <table className={classnames({ 'acms-admin-table-admin-edit': preview.acmscss })}>
          {customfield.map((item, index) => {
            switch (item.type) {
              case 'text' : {
                return (
                  <tr key={index}>
                    <th><Label item={item} preview={preview} /></th>
                    <td><TextInput item={item} preview={preview} /></td>
                  </tr>
                );
              }
              case 'textarea': {
                return (
                  <tr key={index}>
                    <th><Label item={item} preview={preview} /></th>
                    <td><TextareaInput item={item} preview={preview} /></td>
                  </tr>
                )
              }
              default: {
                return null;
              }
            }
          })}
        </table>
      {preview.jsValidator && '<!-- </form> -->'}
    </>
  );
}
