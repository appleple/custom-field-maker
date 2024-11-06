import React, { forwardRef } from 'react';
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
import { WrapTable } from '../html/WrapTable';
import { OptionValidator } from '../html/OptionValidator';

export const UnitGroupTableLayout = forwardRef((_props, ref) => {
  const {
    state: { unitgroup },
    preview: { acmscss, direction, editMode },
  } = useMakerContext();

  const ConditionalWrap = ({ condition, wrap, children }) => (condition ? wrap(children) : children);
  const groupLength = unitgroup.items.length;

  return (
    <>
      {unitgroup.title && <h2 className={classnames({ 'acms-admin-admin-title2': acmscss })}>{unitgroup.title}</h2>}
      {unitgroup.name && (
        <>
          <table
            className={classnames('js-fieldgroup-sortable', { 'adminTable acms-admin-table-admin-edit': acmscss })}
            ref={ref}
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
                    {unitgroup &&
                      unitgroup.items.map((item, index) => (
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
              {editMode === 'preview' ? null : `<!-- BEGIN ${unitgroup.name}:loop -->`}
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
                  {unitgroup.items.map((item, index) => {
                    switch (item.type) {
                      case 'text':
                      case 'tel':
                      case 'number':
                      case 'email':
                      case 'password': {
                        return (
                          <WrapTable title={item.title}>
                            <td>
                              <TextInput item={item} id={`${item.name}${index}`} />
                            </td>
                          </WrapTable>
                        );
                      }
                      case 'textarea':
                      case 'liteEditor': {
                        return (
                          <WrapTable title={item.title}>
                            <td>
                              <Textarea item={item} id={`${item.name}${index}`} />
                            </td>
                          </WrapTable>
                        );
                      }
                      case 'checkbox': {
                        return (
                          <WrapTable title={item.title}>
                            <td>
                              <Checkbox item={item} id={`${item.name}${index}`} />
                            </td>
                          </WrapTable>
                        );
                      }
                      case 'selectbox': {
                        return (
                          <WrapTable title={item.title}>
                            <td>
                              <Selectbox item={item} id={`${item.name}${index}`} />
                            </td>
                          </WrapTable>
                        );
                      }
                      case 'radioButton': {
                        return (
                          <WrapTable title={item.title}>
                            <td>
                              <RadioButton item={item} id={`${item.name}${index}`} />
                            </td>
                          </WrapTable>
                        );
                      }
                      case 'media': {
                        return (
                          <WrapTable title={item.title}>
                            <td>
                              <Media item={item} id={`${item.name}${index}`} />
                            </td>
                          </WrapTable>
                        );
                      }
                      case 'image': {
                        return (
                          <WrapTable title={item.title}>
                            <td>
                              <ImageInput item={item} id={`${item.name}${index}`} />
                            </td>
                          </WrapTable>
                        );
                      }
                      case 'richEditor': {
                        return (
                          <WrapTable title={item.title}>
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
                            </td>
                          </WrapTable>
                        );
                      }
                      case 'table': {
                        return (
                          <WrapTable title={item.title}>
                            <td>
                              <Table item={item} id={`${item.name}${index}`} />
                            </td>
                          </WrapTable>
                        );
                      }
                      default: {
                        return null;
                      }
                    }
                  })}
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

              {editMode === 'preview' ? null : `<!-- END ${unitgroup.name}:loop -->`}

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
                      {unitgroup.items.map((item, index) => {
                        switch (item.type) {
                          case 'text':
                          case 'tel':
                          case 'number':
                          case 'email':
                          case 'password': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <TextInput item={item} id={`${item.name}${index}`} isValue={false} />
                                </td>
                              </WrapTable>
                            );
                          }
                          case 'textarea':
                          case 'liteEditor': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <Textarea item={item} id={`${item.name}${index}`} isValue={false} />
                                </td>
                              </WrapTable>
                            );
                          }
                          case 'checkbox': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <Checkbox item={item} id={`template-${item.name}${index}`} isChecked={false} />
                                </td>
                              </WrapTable>
                            );
                          }
                          case 'selectbox': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <Selectbox item={item} id={`${item.name}${index}`} isSelected={false} />
                                </td>
                              </WrapTable>
                            );
                          }
                          case 'radioButton': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <RadioButton item={item} id={`${item.name}${index}`} isChecked={false} />
                                </td>
                              </WrapTable>
                            );
                          }
                          case 'media': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <Media item={item} id={`${item.name}${index}`} isValue={false} />
                                </td>
                              </WrapTable>
                            );
                          }
                          case 'image': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <ImageInput item={item} id={`${item.name}${index}`} isAttribute={false} />
                                </td>
                              </WrapTable>
                            );
                          }
                          case 'richEditor': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <RichEditor item={item} id={`${item.name}${index}`} isValue={false} />
                                </td>
                              </WrapTable>
                            );
                          }
                          case 'table': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <Table item={item} id={`${item.name}${index}`} isValue={false} />
                                </td>
                              </WrapTable>
                            );
                          }
                          default: {
                            return null;
                          }
                        }
                      })}
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

      {/* input hidden */}
      {unitgroup.name && (
        <>
          {unitgroup.items.map((item) => (
            <>
              {item.type === 'image' && (
                <>
                  {item.square && item.squareSize && (
                    <>
                      <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@squarePath`} />
                      <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@squareAlt`} />
                      <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@squareX`} />
                      <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@squareY`} />
                    </>
                  )}
                  {item.large && item.largeSize && (
                    <>
                      <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@largePath`} />
                      <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@largeAlt`} />
                      <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@largeX`} />
                      <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@largeY`} />
                    </>
                  )}
                  {item.tiny && item.tinySize && (
                    <>
                      <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@tinyPath`} />
                      <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}@tinyAlt`} />
                      <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}@tinyX`} />
                      <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}@tinyY`} />
                    </>
                  )}
                  <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@path`} />
                  <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@alt`} />
                  <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@x`} />
                  <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@y`} />
                  <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@edit`} />
                  <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@old`} />
                  <input type="hidden" name={`${item.name}{id}:extension`} value="image" />
                </>
              )}
              {item.type === 'file' && (
                <>
                  <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@path`} />
                  <input type="hidden" name={`@${item.name}{id}[]`} value={`{${item.name}{id}@fileSize}`} />
                  <input type="hidden" name={`@${item.name}{id}[]`} value={`{${item.name}{id}@baseName}`} />
                  <input type="hidden" name={`@${item.name}{id}[]`} value={`{${item.name}{id}@originalName}`} />
                  <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@alt`} />
                  <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@edit`} />
                  <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}@old`} />
                  <input type="hidden" name={`${item.name}{id}:extension`} value="file" />
                </>
              )}
              {item.type === 'media' && <input type="hidden" name={`${item.name}{id}:extension`} value="media" />}
              {item.type === 'richEditor' && (
                <input type="hidden" name={`${item.name}{id}:extension`} value="rich-editor" />
              )}
              <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}`} />
              <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
              {item.noSearch && <input type="hidden" name={`${item.name}{id}:search`} value="0" />}
              <OptionValidator item={item} />
            </>
          ))}
          <input type="hidden" name="unit{id}[]" value={`@${unitgroup.name}{id}`} />
        </>
      )}
    </>
  );
});

UnitGroupTableLayout.displayName = 'UnitGroupTableLayout';
