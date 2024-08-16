import React from 'react';
import { useMakerContext } from '../../store/MakerContext';

export function Table(props) {
  const { item, id = '' } = props;
  const {
    preview: { mode, editMode },
  } = useMakerContext();

  let attribute = { id, value: '', name: '', hiddenName: '', placeholder: '' };
  switch (mode) {
    case 'customfield': {
      attribute = {
        value: `{${item.name}}`,
        name: item.name,
        hiddenName: 'field[]',
        placeholder: item.placeholder,
      };
      break;
    }
    case 'fieldgroup': {
      attribute = {
        value: `{${item.name}}`,
        name: `${item.name}[]`,
        placeholder: item.placeholder,
      };
      break;
    }
    case 'customunit': {
      attribute = {
        value: `{${item.name}}`,
        name: `${item.name}{id}`,
        hiddenName: 'unit[]',
        placeholder: item.placeholder,
      };
      break;
    }
    case 'unitgroup': {
      attribute = {
        value: item.name,
        name: `${item.name}{id}[]`,
        placeholder: item.placeholder,
      };
      break;
    }
  }

  return (
    <div className="js-editable-table-field">
      <div className="js-editable-table">
        {editMode === 'preview' ? null : `<!-- BEGIN_IF [{${attribute.name}}[delnl]/nem] -->\n`}
        {editMode === 'preview' ? null : `{${attribute.name}}[raw]`}
        {editMode === 'preview' ? null : '<!-- ELSE -->'}
        <table>
          <tr>
            <th>サンプル</th>
            <th>サンプル</th>
          </tr>
          <tr>
            <td>サンプル</td>
            <td>サンプル</td>
          </tr>
        </table>
        {editMode === 'preview' ? null : '<!-- END_IF -->'}
        {mode === 'customfield' || mode === 'customunit' ? (
          <>
            <input
              type="hidden"
              className="js-editable-table-dest"
              value={`{${attribute.name}}`}
              name={attribute.name}
            />
            <input type="hidden" name="field[]" value={attribute.hiddenName} />
          </>
        ) : null}
      </div>
    </div>
  );
}
