import React, { useRef } from 'react';
import classnames from 'classnames';
import { TextInput } from '../html/TextInput';
import { Textarea } from '../html/Textarea';
import { Checkbox } from '../html/Checkbox';
import { Selectbox } from '../html/Selectbox';
import { RadioButton } from '../html/RadioButton';
import { Media } from '../html/Media';
import { ImageInput } from '../html/ImageInput';
import { RichEditor } from '../html/RichEditor';
import { Table } from '../html/Table';
import { useMakerContext } from '../../store/MakerContext';

export function UnitGroupTableLayout() {
  const {
    state: { fieldgroup },
    preview: { acmscss, direction, editMode },
  } = useMakerContext();
  const tableRef = useRef();

  const ConditionalWrap = ({ condition, wrap, children }) => (condition ? wrap(children) : children);
  const groupLength = fieldgroup.items.length;

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

  return (
    <>
      {fieldgroup.title && <h2 className={classnames({ 'acms-admin-admin-title2': acmscss })}>{fieldgroup.title}</h2>}
      {fieldgroup.name && (
        <>
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
                  <>
                    {fieldgroup.items.map((item, index) => {
                      switch (item.type) {
                        case 'text': {
                          return wrapTable(
                            <td>
                              <TextInput item={item} id={`${item.name}${index}`} />
                            </td>,
                            item.title
                          );
                        }
                        case 'textarea': {
                          return wrapTable(
                            <td>
                              <Textarea item={item} id={`${item.name}${index}`} />
                            </td>,
                            item.title
                          );
                        }
                        case 'checkbox': {
                          return wrapTable(
                            <td>
                              <Checkbox item={item} id={`${item.name}${index}`} />
                            </td>,
                            item.title
                          );
                        }
                        case 'selectbox': {
                          return wrapTable(
                            <td>
                              <Selectbox item={item} id={`${item.name}${index}`} />
                            </td>,
                            item.title
                          );
                        }
                        case 'radioButton': {
                          return wrapTable(
                            <td>
                              <RadioButton item={item} id={`${item.name}${index}`} />
                            </td>,
                            item.title
                          );
                        }
                        case 'media': {
                          return wrapTable(
                            <td>
                              <Media item={item} id={`${item.name}${index}`} />
                            </td>,
                            item.title
                          );
                        }
                        case 'image': {
                          return wrapTable(
                            <td>
                              <ImageInput item={item} id={`${item.name}${index}`} />
                            </td>,
                            item.title
                          );
                        }
                        case 'richEditor': {
                          return wrapTable(
                            <td>
                              <ConditionalWrap
                                condition={item.useExpand}
                                wrap={(children) => (
                                  <div className="js-expand js-acms-expand">
                                    <div className="js-acms-expand-inner">
                                      <button className="js-expand-btn js-acms-expand-btn" type="button">
                                        <i className="acms-admin-icon acms-admin-icon-expand-arrow js-expand-icon" />
                                      </button>
                                      {children}
                                    </div>
                                  </div>
                                )}
                              >
                                <RichEditor item={item} id={`${item.name}${index}`} />
                              </ConditionalWrap>
                            </td>,
                            item.title
                          );
                        }
                        case 'table': {
                          return wrapTable(
                            <td>
                              <Table item={item} id={`${item.name}${index}`} />
                            </td>,
                            item.title
                          );
                        }
                        default: {
                          return null;
                        }
                      }
                    })}
                  </>
                </ConditionalWrap>

                <td className="acms-admin-table-nowrap">
                  <button
                    type="button"
                    className={classnames('item-delete', {
                      'acms-admin-btn-admin acms-admin-btn-admin-danger': acmscss,
                    })}
                  >
                    削除
                  </button>
                </td>
              </tr>

              {editMode === 'preview' ? null : `<!-- END ${fieldgroup.name}:loop -->`}

              {editMode === 'preview' ? null : (
                <>
                  <tr className="sortable-item item-template">
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
                      <>
                        {fieldgroup.items.map((item, index) => {
                          switch (item.type) {
                            case 'text': {
                              return wrapTable(
                                <td>
                                  <TextInput item={item} id={`${item.name}${index}`} isValue={false} />
                                </td>,
                                item.title
                              );
                            }
                            case 'textarea': {
                              return wrapTable(
                                <td>
                                  <Textarea item={item} id={`${item.name}${index}`} isValue={false} />
                                </td>,
                                item.title
                              );
                            }
                            case 'checkbox': {
                              return wrapTable(
                                <td>
                                  <Checkbox item={item} id={`template-${item.name}${index}`} isChecked={false} />
                                </td>,
                                item.title
                              );
                            }
                            case 'selectbox': {
                              return wrapTable(
                                <td>
                                  <Selectbox item={item} id={`${item.name}${index}`} isSelected={false} />
                                </td>,
                                item.title
                              );
                            }
                            case 'radioButton': {
                              return wrapTable(
                                <td>
                                  <RadioButton item={item} id={`${item.name}${index}`} isChecked={false} />
                                </td>,
                                item.title
                              );
                            }
                            case 'media': {
                              return wrapTable(
                                <td>
                                  <Media item={item} id={`${item.name}${index}`} isValue={false} />
                                </td>,
                                item.title
                              );
                            }
                            case 'image': {
                              return wrapTable(
                                <td>
                                  <ImageInput item={item} id={`${item.name}${index}`} isAttribute={false} />
                                </td>,
                                item.title
                              );
                            }
                            case 'richEditor': {
                              return wrapTable(
                                <td>
                                  <RichEditor item={item} id={`${item.name}${index}`} isValue={false} />
                                </td>,
                                item.title
                              );
                            }
                            case 'table': {
                              return wrapTable(
                                <td>
                                  <Table item={item} id={`${item.name}${index}`} isValue={false} />
                                </td>,
                                item.title
                              );
                            }
                            default: {
                              return null;
                            }
                          }
                        })}
                      </>
                    </ConditionalWrap>
                    <td className="acms-admin-table-nowrap">
                      <button
                        type="button"
                        className={classnames('item-delete', {
                          'acms-admin-btn-admin acms-admin-btn-admin-danger': acmscss,
                        })}
                      >
                        削除
                      </button>
                    </td>
                  </tr>
                </>
              )}
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
        </>
      )}

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
