import React from 'react';
import { useMakerContext } from '../../store/MakerContext';

export function Table(props) {
  const { item, id = '', isValue = true } = props;
  const {
    preview: { mode, editMode, direction },
  } = useMakerContext();

  const wrapTable = (children, title) => {
    return (
      <ConditionalWrap
        condition={direction === 'vertical'}
        wrap={(child) => (
          <tr>
            <th>{title}</th>
            {child}
          </tr>
        )}
      >
        {children}
      </ConditionalWrap>
    );
  };

  const ConditionalWrap = ({ condition, wrap, children }) => (condition ? wrap(children) : children);

  return (
    <>
      {mode === 'customfield' && (
        <div className="js-editable-table-field">
          <div className="js-editable-table">
            {editMode === 'preview' ? null : `<!-- BEGIN_IF [{${item.name}}[delnl]/nem] -->\n`}
            {editMode === 'preview' ? null : `{${item.name}}[raw]`}
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
            <input type="hidden" className="js-editable-table-dest" value={`{${item.name}}`} name={item.name} />
            <input id={id} type="hidden" name="field[]" value={item.name} />
          </div>
        </div>
      )}

      {mode === 'fieldgroup' &&
        wrapTable(
          <div className="js-editable-table-field">
            <div className="js-editable-table">
              {editMode === 'preview' ? null : `<!-- BEGIN_IF [{${item.name}}[delnl]/nem] -->\n`}
              {editMode === 'preview' ? null : `{${item.name}}[raw]`}
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
              <input
                id={id}
                type="hidden"
                className="js-editable-table-dest"
                {...(isValue && {
                  value: `{${item.name}}`,
                })}
                name={`${item.name}[]`}
              />
            </div>
          </div>,
          item.title
        )}
    </>
  );
}
