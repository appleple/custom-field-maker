import React, { forwardRef, Fragment } from 'react';
import classnames from 'classnames';
import { TextInput } from '../html/TextInput';
import { Textarea } from '../html/Textarea';
import { Checkbox } from '../html/Checkbox';
import { Selectbox } from '../html/Selectbox';
import { RadioButton } from '../html/RadioButton';
import { Media } from '../html/Media';
import { ImageInput } from '../html/ImageInput';
import { FileInput } from '../html/FileInput';
import { BlockEditor } from '../html/BlockEditor';
import { Table } from '../html/Table';
import { useMakerContext } from '../../stores/MakerContext';
import { WrapTable } from '../html/WrapTable';
import { OptionValidatorFieldGroup } from '../html/OptionValidatorFieldGroup';
import { OptionNoSearch } from '../html/OptionNoSearch';

export const GroupTableLayout = forwardRef((_props, ref) => {
  const {
    state: { fieldgroup },
    preview: { acmscss, direction, editMode },
  } = useMakerContext();

  const groupLength = fieldgroup.items.length;

  return (
    <>
      {fieldgroup.title && <h2 className={classnames({ 'acms-admin-admin-title2': acmscss })}>{fieldgroup.title}</h2>}
      {fieldgroup.name && (
        <>
          <table
            className={classnames('js-fieldgroup-sortable', { 'adminTable acms-admin-table-admin-edit': acmscss })}
            ref={ref}
          >
            <thead className={classnames({ 'acms-admin-hide-sp': acmscss })}>
              <tr>
                <th
                  className={classnames({
                    'acms-admin-table-left acms-admin-admin-config-table-item-handle': acmscss,
                  })}
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

                <th
                  className={classnames({
                    'acms-admin-table-left acms-admin-admin-config-table-action': acmscss,
                  })}
                >
                  削除
                </th>
              </tr>
            </thead>

            <tbody>
              {/*
                Text nodes cannot appear as a child of <tbody> というエラーが出るがReactの仕様のためしかたない。
              */}
              {editMode === 'preview' ? null : `<!-- BEGIN ${fieldgroup.name}:loop -->`}
              <tr className="sortable-item">
                <td className="item-handle acms-admin-table-nowrap">
                  {acmscss && <i className="acms-admin-icon-sort" />}
                </td>
                <>
                  {fieldgroup.items.map((item, index) => (
                    <Fragment key={index}>
                      {(() => {
                        switch (item.type) {
                          case 'text':
                          case 'tel':
                          case 'number':
                          case 'email':
                          case 'password': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <TextInput item={item} />
                                </td>
                              </WrapTable>
                            );
                          }
                          case 'textarea':
                          case 'liteEditor': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <Textarea item={item} />
                                </td>
                              </WrapTable>
                            );
                          }
                          case 'checkbox': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <Checkbox item={item} />
                                </td>
                              </WrapTable>
                            );
                          }
                          case 'selectbox': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <Selectbox item={item} />
                                </td>
                              </WrapTable>
                            );
                          }
                          case 'radioButton': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <RadioButton item={item} />
                                </td>
                              </WrapTable>
                            );
                          }
                          case 'media': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <Media item={item} />
                                </td>
                              </WrapTable>
                            );
                          }
                          case 'image': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <ImageInput item={item} />
                                </td>
                              </WrapTable>
                            );
                          }
                          case 'file': {
                            return (
                              <>
                                <WrapTable title={item.title}>
                                  <td>
                                    <FileInput item={item} />
                                  </td>
                                </WrapTable>
                              </>
                            );
                          }
                          case 'blockEditor': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <BlockEditor item={item} />
                                </td>
                              </WrapTable>
                            );
                          }
                          case 'table': {
                            return (
                              <WrapTable title={item.title}>
                                <td>
                                  <Table item={item} />
                                </td>
                              </WrapTable>
                            );
                          }
                          default: {
                            return null;
                          }
                        }
                      })()}
                    </Fragment>
                  ))}
                </>

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

              {/*
                Text nodes cannot appear as a child of <tbody> というエラーが出るがReactの仕様のためしかたない。
              */}
              {editMode === 'preview' ? null : `<!-- END ${fieldgroup.name}:loop -->`}

              {editMode === 'preview' ? null : (
                <>
                  <tr className="sortable-item item-template">
                    <td className="item-handle acms-admin-table-nowrap">
                      {acmscss && <i className="acms-admin-icon-sort" />}
                    </td>
                    <>
                      {fieldgroup.items.map((item, index) => (
                        <Fragment key={index}>
                          {(() => {
                            switch (item.type) {
                              case 'text':
                              case 'tel':
                              case 'number':
                              case 'email':
                              case 'password': {
                                return (
                                  <WrapTable title={item.title}>
                                    <td>
                                      <TextInput item={item} isValue={false} />
                                    </td>
                                  </WrapTable>
                                );
                              }
                              case 'textarea':
                              case 'liteEditor': {
                                return (
                                  <WrapTable title={item.title}>
                                    <td>
                                      <Textarea item={item} isValue={false} />
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
                                      <Selectbox item={item} isSelected={false} />
                                    </td>
                                  </WrapTable>
                                );
                              }
                              case 'radioButton': {
                                return (
                                  <WrapTable title={item.title}>
                                    <td>
                                      <RadioButton item={item} isChecked={false} />
                                    </td>
                                  </WrapTable>
                                );
                              }
                              case 'media': {
                                return (
                                  <WrapTable title={item.title}>
                                    <td>
                                      <Media item={item} isValue={false} />
                                    </td>
                                  </WrapTable>
                                );
                              }
                              case 'image': {
                                return (
                                  <WrapTable title={item.title}>
                                    <td>
                                      <ImageInput item={item} isAttribute={false} />
                                    </td>
                                  </WrapTable>
                                );
                              }
                              case 'file': {
                                return (
                                  <WrapTable title={item.title}>
                                    <td>
                                      <FileInput item={item} isValue={false} />
                                    </td>
                                  </WrapTable>
                                );
                              }
                              case 'blockEditor': {
                                return (
                                  <WrapTable title={item.title}>
                                    <td>
                                      <BlockEditor item={item} isValue={false} />
                                    </td>
                                  </WrapTable>
                                );
                              }
                              case 'table': {
                                return (
                                  <WrapTable title={item.title}>
                                    <td>
                                      <Table item={item} isValue={false} />
                                    </td>
                                  </WrapTable>
                                );
                              }
                              default: {
                                return null;
                              }
                            }
                          })()}
                        </Fragment>
                      ))}
                    </>

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
                  <button type="button" className={classnames('item-insert', { 'acms-admin-btn-admin': acmscss })}>
                    追加
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      )}

      {fieldgroup.name && (
        <>
          {fieldgroup.items.map((item, index) => (
            <Fragment key={index}>
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
                  <input type="hidden" name={`@${fieldgroup.name}[]`} value={`{${item.name}@fileSize}`} />
                  <input type="hidden" name={`@${fieldgroup.name}[]`} value={`{${item.name}@baseName}`} />
                  <input type="hidden" name={`@${fieldgroup.name}[]`} value={`{${item.name}@originalName}`} />
                  <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@alt`} />
                  <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@edit`} />
                  <input type="hidden" name={`@${fieldgroup.name}[]`} value={`${item.name}@old`} />
                  <input type="hidden" name={`${item.name}:extension`} value="file" />
                </>
              )}
              {item.type === 'media' && <input type="hidden" name={`${item.name}:extension`} value="media" />}
              {item.type === 'blockEditor' && (
                <input type="hidden" name={`${item.name}:extension`} value="block-editor" />
              )}
              <input type="hidden" name={`@${fieldgroup.name}[]`} value={item.name} />
              <input type="hidden" name="field[]" value={item.name} />

              <OptionValidatorFieldGroup item={item} isMessage={false} />
              <OptionNoSearch name={item.name} noSearch={item.noSearch} />
            </Fragment>
          ))}
          <input type="hidden" name="field[]" value={`@${fieldgroup.name}`} />
        </>
      )}
    </>
  );
});

GroupTableLayout.displayName = 'GroupTableLayout';
