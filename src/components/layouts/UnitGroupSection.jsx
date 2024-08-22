import React, { Fragment } from 'react';
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
import { useMakerContext } from '../../store/MakerContext';

export function UnitGroupSection() {
  const {
    state: { fieldgroup },
    preview: { acmscss, direction, editMode },
  } = useMakerContext();

  return (
    <section>
      {fieldgroup.title && <h2 className={classnames({ 'acms-admin-admin-title2': acmscss })}>{fieldgroup.title}</h2>}

      {fieldgroup.name && (
        <div className="js-fieldgroup-sortable adminTable acms-admin-table-admin-edit">
          {editMode === 'preview'
            ? null
            : fieldgroup.items.length > 0 && (
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
                        fieldgroup &&
                        fieldgroup.items.map((item, index) => (
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

                  {editMode === 'preview' ? null : `<!-- BEGIN ${fieldgroup.name}:loop -->`}

                  <div className="sortable-item acms-flex">
                    <div className="item-handle acms-admin-table-nowrap">
                      {acmscss && <i className="acms-admin-icon-sort" />}
                    </div>

                    {fieldgroup.items.map((item, index) => {
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
                            <fieldset key={index} className="acms-admin-form-item">
                              <legend className="acms-admin-form-item-heading">
                                <Heading item={item} id={`${item.name}${index}`} />
                              </legend>
                              <div className="acms-admin-form-item-input">
                                <Checkbox item={item} id={`${item.name}${index}`} />
                              </div>
                            </fieldset>
                          );
                        }
                        case 'selectbox': {
                          return (
                            <p key={index} className="acms-admin-form-item">
                              <label className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                                <Heading item={item} id={`${item.name}${index}`} />
                              </label>
                              <span className="acms-admin-form-item-input">
                                <Selectbox item={item} id={`${item.name}${index}`} />
                              </span>
                            </p>
                          );
                        }
                        case 'radioButton': {
                          return (
                            <fieldset key={index} className="acms-admin-form-item">
                              <legend className="acms-admin-form-item-heading" id={`${item.name}${index}`}>
                                <Heading item={item} />
                              </legend>
                              <div className="acms-admin-form-item-input">
                                <RadioButton item={item} id={`${item.name}${index}`} />
                              </div>
                            </fieldset>
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

                  {`<!-- END ${fieldgroup.name}:loop -->`}
                </>
              )}

          {fieldgroup.items.length > 0 && (
            <>
              <div className="sortable-item item-template acms-flex">
                <div className="item-handle acms-admin-table-nowrap">
                  <i className="acms-admin-icon-sort"></i>
                </div>

                {fieldgroup.items.map((item, index) => {
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
                        <fieldset key={index} className="acms-admin-form-item">
                          <legend className="acms-admin-form-item-heading">
                            <Heading item={item} />
                          </legend>
                          <div className="acms-admin-form-item-input">
                            <Checkbox item={item} id={`template-${item.name}${index}`} isChecked={false} />
                          </div>
                        </fieldset>
                      );
                    }
                    case 'selectbox': {
                      return (
                        <p key={index} className="acms-admin-form-item">
                          <label className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                            <Heading item={item} />
                          </label>
                          <span className="acms-admin-form-item-input">
                            <Selectbox item={item} id={`${item.name}${index}`} isSelected={false} />
                          </span>
                        </p>
                      );
                    }
                    case 'radioButton': {
                      return (
                        <fieldset key={index} className="acms-admin-form-item">
                          <legend className="acms-admin-form-item-heading" id={`${item.name}${index}`}>
                            <Heading item={item} />
                          </legend>
                          <div className="acms-admin-form-item-input">
                            <RadioButton item={item} id={`${item.name}${index}`} isChecked={false} />
                          </div>
                        </fieldset>
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
                        <div key={index} className="acms-admin-form-item">
                          <p className="acms-admin-form-item-heading" id={`${item.name}${index}`}>
                            <Heading item={item} />
                          </p>
                          <div className="acms-admin-form-item-input">
                            <Table item={item} id={`${item.name}${index}`} isValue={false} />
                          </div>
                        </div>
                      );
                    }
                    default: {
                      return null;
                    }
                  }
                })}

                {fieldgroup.items.length > 0 && (
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
      {fieldgroup.name && (
        <>
          {fieldgroup.items.map((item, index) => (
            <Fragment key={index}>
              {item.type === 'image' && (
                <Fragment>
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
                </Fragment>
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

              {item.validator &&
                item.validator.map((validator, index) => {
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
            </Fragment>
          ))}
          <input type="hidden" name="field[]" value={`@${fieldgroup.name}`} />
        </>
      )}
    </section>
  );
}
