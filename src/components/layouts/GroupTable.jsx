import React, { useRef } from 'react';
import classnames from 'classnames';
import { Label } from '../html/Label';
import { TextInput } from '../html/TextInput';
import { Textarea } from '../html/Textarea';
import { useMakerContext } from '../../store/MakerContext';

export function GroupTable(props) {
  const { fieldgroup } = props;
  const {
    preview: { acmscss, direction, editMode },
  } = useMakerContext();
  const tableRef = useRef();

  const ConditionalWrap = ({ condition, wrap, children }) => (condition ? wrap(children) : children);
  const groupLength = fieldgroup.items.length;

  return (
    <>
      {fieldgroup.title && <h2 className={classnames({ 'acms-admin-admin-title2': acmscss })}>{fieldgroup.title}</h2>}
      {fieldgroup.name && (
        <table
          className={classnames('js-fieldgroup-sortable', { 'adminTable acms-admin-table-admin-edit': acmscss })}
          ref={tableRef}
        >
          <thead className={classnames({ 'acms-admin-hide-sp': acmscss })}>
            <tr>
              <th
                className={classnames({ 'acms-admin-table-left acms-admin-admin-config-table-item-handle': acmscss })}
              >
                &nbsp;
              </th>
              {direction === 'horizontal' && (
                <>
                  {fieldgroup &&
                    fieldgroup.items.map((item, index) => (
                      <th key={index} className={classnames({ 'acms-admin-table-left': acmscss })}>
                        {item.title}
                        {item.tooltip && (
                          <i className="acms-admin-icon-tooltip js-acms-tooltip" data-acms-tooltip={item.tooltip} />
                        )}
                      </th>
                    ))}
                </>
              )}
              {direction === 'vertical' && <th />}
              <th className={classnames({ 'acms-admin-table-left acms-admin-admin-config-table-action': acmscss })}>
                削除
              </th>
            </tr>
          </thead>

          <tbody>
            {editMode === 'preview' ? null : `<!-- BEGIN ${fieldgroup.name}:loop -->`}
            <tr className="sortable-item">
              <td className="item-handle acms-admin-table-nowrap">
                {acmscss && <i className="acms-admin-icon-sort" />}
              </td>

              <ConditionalWrap
                condition={direction === 'vertical'}
                wrap={(children) => (
                  <td>
                    <table>{children}</table>
                  </td>
                )}
              >
                {/* input loop */}

                {fieldgroup.items.map((item, index) => {
                  switch (item.type) {
                    case 'text': {
                      return (
                        <tr key={index} className="acms-admin-form-item">
                          <th className="acms-admin-form-item-heading">
                            <Label item={item} />
                          </th>
                          <td className="acms-admin-form-item-input">
                            <TextInput item={item} />
                          </td>
                        </tr>
                      );
                    }
                    case 'textarea': {
                      return (
                        <tr key={index} className="acms-admin-form-item">
                          <th className="acms-admin-form-item-heading">
                            <Label item={item} />
                          </th>
                          <td className="acms-admin-form-item-input">
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
                {editMode === 'preview' ? null : `<!-- END ${fieldgroup.name}:loop -->`}

                {/* input template */}
                {editMode === 'preview' ? null : (
                  <tr className="sortable-item item-template">
                    {fieldgroup.items.map((item, index) => {
                      switch (item.type) {
                        case 'text': {
                          return (
                            <tr key={index} className="acms-admin-form-item">
                              <th className="acms-admin-form-item-heading">
                                <Label item={item} />
                              </th>
                              <td className="acms-admin-form-item-input">
                                <TextInput item={item} />
                              </td>
                            </tr>
                          );
                        }
                        case 'textarea': {
                          return (
                            <tr key={index} className="acms-admin-form-item">
                              <th className="acms-admin-form-item-heading">
                                <Label item={item} />
                              </th>
                              <td className="acms-admin-form-item-input">
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
                  </tr>
                )}
              </ConditionalWrap>

              <td className="acms-admin-table-nowrap">
                <input
                  type="button"
                  className={classnames('item-delete', { 'acms-admin-btn-admin acms-admin-btn-admin-danger': acmscss })}
                  value="削除"
                />
              </td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={direction === 'horizontal' ? groupLength + 2 : 3}>
                <input
                  type="button"
                  className={classnames('item-insert', { 'acms-admin-btn-admin': acmscss })}
                  value="追加"
                />
              </td>
            </tr>
          </tfoot>
        </table>
      )}

      {/* input hidden */}
      {fieldgroup.name && (
        <>
          {fieldgroup.items.map((item) => (
            <>
              {item.type === 'image' && (
                <>
                  {item.square && (
                    <>
                      <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@squarePath`} />
                      <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@squareAlt`} />
                      <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@squareX`} />
                      <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@squareY`} />
                    </>
                  )}
                  {item.large && (
                    <>
                      <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@largePath`} />
                      <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@largeAlt`} />
                      <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@largeX`} />
                      <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@largeY`} />
                    </>
                  )}
                  {item.tiny && (
                    <>
                      <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@tinyPath`} />
                      <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@tinyAlt`} />
                      <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@tinyX`} />
                      <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@tinyY`} />
                    </>
                  )}
                  <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@path`} />
                  <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@alt`} />
                  <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@x`} />
                  <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@y`} />
                  <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@edit`} />
                  <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@old`} />
                  <input type="hidden" name={`${item.name}:extension`} value="image" />
                </>
              )}
              {item.type === 'file' && (
                <>
                  <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@path`} />
                  <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@alt`} />
                  <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@edit`} />
                  <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@old`} />
                  <input type="hidden" name={`${item.name}:extension`} value="file" />
                </>
              )}
              {item.type === 'media' && <input type="hidden" name={`${item.name}:extension`} value="media" />}
              {item.type === 'rich-editor' && (
                <input type="hidden" name={`${item.name}:extension`} value="rich-editor" />
              )}
              <input type="hidden" name={`@${fieldgroup.name}[]`} value={item.name} />
              <input type="hidden" name="field[]" value={item.name} />
              {item.noSearch && <input type="hidden" name={`${item.name}:search`} value="0" />}
              {item.validator.map((validator, index) => {
                if (!validator.option) {
                  return null;
                }
                const name = item.type === 'file' || item.type === 'image' ? `${item.name}@path` : item.name;
                return (
                  <input
                    key={index}
                    type="hidden"
                    name={`${name}:v#${validator.option}`}
                    value={validator.value}
                    id={`${name}-v-${validator.option}`}
                  />
                );
              })}
              {(() => {
                const name = item.type === 'file' || item.type === 'image' ? `${item.name}@path` : item.name;
                return item.converter && <input type="hidden" name={`${name}:c`} value={item.converter} />;
              })()}
            </>
          ))}
          <input type="hidden" name="field[]" value={`@${fieldgroup.name}`} />
        </>
      )}
    </>
  );
}
