import React from 'react';
import classnames from 'classnames';
import { Heading } from '../html/Heading';
import { TextInput } from '../html/TextInput';
import { Textarea } from '../html/Textarea';
import { Checkbox } from '../html/Checkbox';
import { Selectbox } from '../html/Selectbox';
import { RadioButton } from '../html/RadioButton';
import { Media } from '../html/Media';
import { ImageInput } from '../html/ImageInput';
import { FileInput } from '../html/FileInput';
import { RichEditor } from '../html/RichEditor';
import { Table } from '../html/Table';
import { OptionValidator } from '../html/OptionValidator';
import { useMakerContext } from '../../store/MakerContext';

export function UnitGroupSection() {
  const {
    state: { unitgroup },
    preview: { acmscss, direction, editMode },
  } = useMakerContext();

  return (
    <section>
      {unitgroup.title && <h2 className={classnames({ 'acms-admin-admin-title2': acmscss })}>{unitgroup.title}</h2>}

      {unitgroup.name && (
        <div className="js-fieldgroup-sortable adminTable acms-admin-table-admin-edit">
          {editMode === 'preview'
            ? null
            : unitgroup.items.length > 0 && (
                <>
                  <div className={classnames({ 'acms-admin-hide-sp': acmscss })}>
                    <div>
                      <div
                        className={classnames({
                          'acms-admin-table-left acms-admin-admin-config-table-item-handle': acmscss,
                        })}
                      >
                        &nbsp;
                      </div>
                      {direction === 'horizontal' &&
                        unitgroup &&
                        unitgroup.items.map((item, index) => (
                          <span key={index}>
                            <Heading item={item} />
                          </span>
                        ))}
                      {direction === 'vertical' && <span />}
                      <span
                        className={classnames({
                          'acms-admin-table-left acms-admin-admin-config-table-action': acmscss,
                        })}
                      >
                        削除
                      </span>
                    </div>
                  </div>

                  {editMode === 'preview' ? null : `<!-- BEGIN ${unitgroup.name}:loop -->`}

                  <div className="sortable-item acms-flex">
                    <div className="item-handle acms-admin-table-nowrap">
                      {acmscss && <i className="acms-admin-icon-sort" />}
                    </div>

                    {unitgroup.items.map((item, index) => {
                      switch (item.type) {
                        case 'text': {
                          return (
                            <p className="acms-admin-form-item">
                              <label className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                                <Heading item={item} />
                              </label>
                              <span className="acms-admin-form-item-input">
                                <TextInput item={item} id={`${item.name}${index}`} />
                              </span>
                            </p>
                          );
                        }
                        case 'textarea': {
                          return (
                            <p key={index} className="acms-admin-form-item">
                              <label className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                                <Heading item={item} id={`${item.name}${index}`} />
                              </label>
                              <span className="acms-admin-form-item-input">
                                <Textarea item={item} id={`${item.name}${index}`} />
                              </span>
                            </p>
                          );
                        }
                        case 'checkbox': {
                          return (
                            <div key={index} className="acms-admin-form-item">
                              <p className="acms-admin-form-item-heading">
                                <Heading item={item} id={`${item.name}${index}`} />
                              </p>
                              <div className="acms-admin-form-item-input">
                                <Checkbox item={item} id={`${item.name}${index}`} />
                              </div>
                            </div>
                          );
                        }
                        case 'selectbox': {
                          return (
                            <div key={index} className="acms-admin-form-item">
                              <p className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                                <Heading item={item} id={`${item.name}${index}`} />
                              </p>
                              <div className="acms-admin-form-item-input">
                                <Selectbox item={item} id={`${item.name}${index}`} />
                              </div>
                            </div>
                          );
                        }
                        case 'radioButton': {
                          return (
                            <div key={index} className="acms-admin-form-item">
                              <p className="acms-admin-form-item-heading" id={`${item.name}${index}`}>
                                <Heading item={item} />
                              </p>
                              <div className="acms-admin-form-item-input">
                                <RadioButton item={item} id={`${item.name}${index}`} />
                              </div>
                            </div>
                          );
                        }
                        case 'media': {
                          return (
                            <p key={index} className="acms-admin-form-item">
                              <label className="acms-admin-form-item-heading" id={`${item.name}${index}`}>
                                <Heading item={item} />
                              </label>
                              <span className="acms-admin-form-item-input">
                                <Media item={item} id={`${item.name}${index}`} />
                              </span>
                            </p>
                          );
                        }
                        case 'image': {
                          return (
                            <p key={index} className="acms-admin-form-item">
                              <label className="acms-admin-form-item-heading" id={`${item.name}${index}`}>
                                <Heading item={item} />
                              </label>
                              <span className="acms-admin-form-item-input">
                                <ImageInput item={item} id={`${item.name}${index}`} />
                              </span>
                            </p>
                          );
                        }
                        case 'file': {
                          return (
                            <p key={index} className="acms-admin-form-item">
                              <label className="acms-admin-form-item-heading" id={`${item.name}${index}`}>
                                <Heading item={item} />
                              </label>
                              <span className="acms-admin-form-item-input">
                                <FileInput item={item} id={`${item.name}${index}`} />
                              </span>
                            </p>
                          );
                        }
                        case 'richEditor': {
                          return (
                            <p key={index} className="acms-admin-form-item">
                              <label className="acms-admin-form-item-heading" id={`${item.name}${index}`}>
                                <Heading item={item} />
                              </label>
                              <span className="acms-admin-form-item-input">
                                <RichEditor item={item} id={`${item.name}${index}`} />
                              </span>
                            </p>
                          );
                        }
                        case 'table': {
                          return (
                            <p key={index} className="acms-admin-form-item">
                              <label className="acms-admin-form-item-heading" id={`${item.name}${index}`}>
                                <Heading item={item} />
                              </label>
                              <span className="acms-admin-form-item-input">
                                <Table item={item} id={`${item.name}${index}`} />
                              </span>
                            </p>
                          );
                        }
                        default: {
                          return null;
                        }
                      }
                    })}

                    <div className="acms-admin-table-nowrap">
                      <button
                        type="button"
                        className="item-delete acms-admin-btn-admin acms-admin-btn-admin-danger"
                        value="削除"
                      >
                        削除
                      </button>
                    </div>
                  </div>

                  {`<!-- END ${unitgroup.name}:loop -->`}
                </>
              )}

          {unitgroup.items.length > 0 && (
            <>
              <div className="sortable-item item-template acms-flex">
                <div className="item-handle acms-admin-table-nowrap">
                  <i className="acms-admin-icon-sort"></i>
                </div>

                {unitgroup.items.map((item, index) => {
                  switch (item.type) {
                    case 'text': {
                      return (
                        <p key={index} className="acms-admin-form-item">
                          <label className="acms-admin-form-item-heading" id={`template-${item.name}${index}`}>
                            <Heading item={item} />
                          </label>
                          <span className="acms-admin-form-item-input">
                            <TextInput item={item} id={`template-${item.name}${index}`} isValue={false} />
                          </span>
                        </p>
                      );
                    }
                    case 'textarea': {
                      return (
                        <p key={index} className="acms-admin-form-item">
                          <label className="acms-admin-form-item-heading" htmlFor={`template-${item.name}${index}`}>
                            <Heading item={item} />
                          </label>
                          <span className="acms-admin-form-item-input">
                            <Textarea item={item} id={`template-${item.name}${index}`} isValue={false} />
                          </span>
                        </p>
                      );
                    }
                    case 'checkbox': {
                      return (
                        <div key={index} className="acms-admin-form-item">
                          <p className="acms-admin-form-item-heading">
                            <Heading item={item} />
                          </p>
                          <div className="acms-admin-form-item-input">
                            <Checkbox item={item} id={`template-${item.name}${index}`} isChecked={false} />
                          </div>
                        </div>
                      );
                    }
                    case 'selectbox': {
                      return (
                        <div key={index} className="acms-admin-form-item">
                          <p className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                            <Heading item={item} />
                          </p>
                          <span className="acms-admin-form-item-input">
                            <Selectbox item={item} id={`${item.name}${index}`} isSelected={false} />
                          </span>
                        </div>
                      );
                    }
                    case 'radioButton': {
                      return (
                        <div key={index} className="acms-admin-form-item">
                          <p className="acms-admin-form-item-heading" id={`${item.name}${index}`}>
                            <Heading item={item} />
                          </p>
                          <div className="acms-admin-form-item-input">
                            <RadioButton item={item} id={`${item.name}${index}`} isChecked={false} />
                          </div>
                        </div>
                      );
                    }
                    case 'media': {
                      return (
                        <p key={index} className="acms-admin-form-item">
                          <label className="acms-admin-form-item-heading" id={`${item.name}${index}`}>
                            <Heading item={item} />
                          </label>
                          <span className="acms-admin-form-item-input">
                            <Media item={item} id={`${item.name}${index}`} isValue={false} />
                          </span>
                        </p>
                      );
                    }
                    case 'image': {
                      return (
                        <p key={index} className="acms-admin-form-item">
                          <label className="acms-admin-form-item-heading" id={`${item.name}${index}`}>
                            <Heading item={item} />
                          </label>
                          <span className="acms-admin-form-item-input">
                            <ImageInput item={item} id={`${item.name}${index}`} isAttribute={false} />
                          </span>
                        </p>
                      );
                    }
                    case 'file': {
                      return (
                        <p key={index} className="acms-admin-form-item">
                          <label className="acms-admin-form-item-heading" id={`${item.name}${index}`}>
                            <Heading item={item} />
                          </label>
                          <span className="acms-admin-form-item-input">
                            <FileInput item={item} id={`${item.name}${index}`} isValue={false} />
                          </span>
                        </p>
                      );
                    }
                    case 'richEditor': {
                      return (
                        <p key={index} className="acms-admin-form-item">
                          <label className="acms-admin-form-item-heading" id={`${item.name}${index}`}>
                            <Heading item={item} />
                          </label>
                          <span className="acms-admin-form-item-input">
                            <RichEditor item={item} id={`${item.name}${index}`} isValue={false} />
                          </span>
                        </p>
                      );
                    }
                    case 'table': {
                      return (
                        <p key={index} className="acms-admin-form-item">
                          <p className="acms-admin-form-item-heading" id={`${item.name}${index}`}>
                            <Heading item={item} />
                          </p>
                          <span className="acms-admin-form-item-input">
                            <Table item={item} id={`${item.name}${index}`} isValue={false} />
                          </span>
                        </p>
                      );
                    }
                    default: {
                      return null;
                    }
                  }
                })}

                {unitgroup.items.length > 0 && (
                  <div className="acms-admin-table-nowrap">
                    <button
                      type="button"
                      className="item-delete acms-admin-btn-admin acms-admin-btn-admin-danger"
                      value="削除"
                    >
                      削除
                    </button>
                  </div>
                )}
              </div>
              <input type="button" className="item-insert acms-admin-btn-admin" value="追加" />
            </>
          )}
        </div>
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
    </section>
  );
}
