import { useMakerContext } from '../../stores/MakerContext';

export function Table(props) {
  const { item, isValue = true } = props;
  const {
    preview: { mode, editMode },
  } = useMakerContext();

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
            <input id={item.name} type="hidden" name="field[]" value={item.name} />
          </div>
        </div>
      )}

      {mode === 'fieldgroup' && (
        <>
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
                type="hidden"
                className="js-editable-table-dest"
                {...(isValue && {
                  value: `{${item.name}}`,
                })}
                name={`${item.name}[]`}
              />
            </div>
          </div>
        </>
      )}

      {mode === 'customunit' && (
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
              type="hidden"
              className="js-editable-table-dest"
              value={`{${item.name}}`}
              name={`${item.name}{id}`}
            />
            <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
          </div>
        </div>
      )}

      {mode === 'unitgroup' && (
        <>
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
                type="hidden"
                className="js-editable-table-dest"
                {...(isValue && {
                  value: `{${item.name}}`,
                })}
                name={`${item.name}{id}[]`}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
