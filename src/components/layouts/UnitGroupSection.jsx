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
    preview: { acmscss, editMode },
  } = useMakerContext();

  return (
    <>
      {unitgroup.name && unitgroup.title && (
        <section>
          {unitgroup.title && <h2 className={classnames({ 'acms-admin-admin-title2': acmscss })}>{unitgroup.title}</h2>}

          {unitgroup.name && (
            <div
              className={classnames({
                'js-fieldgroup-sortable': true,
                'acms-admin-grid-edit-table': acmscss,
              })}
            >
              {editMode === 'preview'
                ? null
                : unitgroup.items.length > 0 && (
                    <>
                      {editMode === 'preview' ? null : `<!-- BEGIN ${unitgroup.name}:loop -->`}

                      <div
                        className={classnames({
                          'sortable-item': true,
                          'acms-admin-flex': acmscss,
                          'acms-admin-flex-col': acmscss,
                          'acms-admin-flex-row-min-md': acmscss,
                          'acms-admin-items-start': acmscss,
                          'acms-admin-items-center-min-md': acmscss,
                        })}
                      >
                        <div className="item-handle acms-admin-padding-small">
                          <i className="acms-admin-icon-sort"></i>
                        </div>

                        <div className="acms-admin-flex-1 acms-admin-padding-small">
                          {unitgroup.items.map((item, index) => (
                            <div
                              key={index}
                              className={classnames({
                                'acms-admin-flex': acmscss,
                                'acms-admin-flex-col': acmscss,
                                'acms-admin-flex-row-min-md': acmscss,
                                'acms-admin-padding-small': acmscss,
                              })}
                            >
                              {(() => {
                                switch (item.type) {
                                  case 'text': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                          htmlFor={`${item.name}${index}`}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                          <TextInput item={item} id={`${item.name}${index}`} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'textarea': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                          htmlFor={`${item.name}${index}`}
                                        >
                                          <Heading item={item} id={`${item.name}${index}`} />
                                        </label>
                                        <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                          <Textarea item={item} id={`${item.name}${index}`} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'checkbox': {
                                    return (
                                      <fieldset className={classnames({ 'acms-admin-contents': acmscss })}>
                                        <legend
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                        >
                                          <Heading item={item} id={`${item.name}${index}`} />
                                        </legend>
                                        <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                          <Checkbox item={item} id={`${item.name}${index}`} />
                                        </div>
                                      </fieldset>
                                    );
                                  }
                                  case 'selectbox': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                          htmlFor={`${item.name}${index}`}
                                        >
                                          <Heading item={item} id={`${item.name}${index}`} />
                                        </label>
                                        <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                          <Selectbox item={item} id={`${item.name}${index}`} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'radioButton': {
                                    return (
                                      <fieldset className={classnames({ 'acms-admin-contents': acmscss })}>
                                        <legend
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                          id={`${item.name}${index}`}
                                        >
                                          <Heading item={item} />
                                        </legend>
                                        <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                          <RadioButton item={item} id={`${item.name}${index}`} />
                                        </div>
                                      </fieldset>
                                    );
                                  }
                                  case 'media': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                          htmlFor={`${item.name}${index}`}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                          <Media item={item} id={`${item.name}${index}`} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'image': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                          htmlFor={`${item.name}${index}`}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                          <ImageInput item={item} id={`${item.name}${index}`} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'file': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                          htmlFor={`${item.name}${index}`}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className="acms-admin-flex-1">
                                          <FileInput item={item} id={`${item.name}${index}`} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'richEditor': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                          htmlFor={`${item.name}${index}`}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                          <RichEditor item={item} id={`${item.name}${index}`} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'table': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                          htmlFor={`${item.name}${index}`}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                          <Table item={item} id={`${item.name}${index}`} />
                                        </div>
                                      </>
                                    );
                                  }
                                  default: {
                                    return null;
                                  }
                                }
                              })()}
                            </div>
                          ))}
                        </div>

                        <div className="acms-admin-padding-small">
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
                  <template className="item-template">
                    <div
                      className={classnames({
                        'sortable-item': true,
                        'acms-admin-flex': acmscss,
                        'acms-admin-flex-col': acmscss,
                        'acms-admin-flex-row-min-md': acmscss,
                        'acms-admin-items-start': acmscss,
                        'acms-admin-items-center-min-md': acmscss,
                      })}
                    >
                      <div className="item-handle acms-admin-padding-small">
                        <i className="acms-admin-icon-sort"></i>
                      </div>

                      <div className="acms-admin-flex-1 acms-admin-padding-small">
                        {unitgroup.items.map((item, index) => (
                          <div
                            key={index}
                            className={classnames({
                              'acms-admin-flex': acmscss,
                              'acms-admin-flex-col': acmscss,
                              'acms-admin-flex-row-min-md': acmscss,
                              'acms-admin-padding-small': acmscss,
                            })}
                          >
                            {(() => {
                              switch (item.type) {
                                case 'text': {
                                  return (
                                    <>
                                      <label
                                        className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                        htmlFor={`${item.name}${index}`}
                                      >
                                        <Heading item={item} />
                                      </label>
                                      <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                        <TextInput item={item} id={`${item.name}${index}`} isValue={false} />
                                      </div>
                                    </>
                                  );
                                }
                                case 'textarea': {
                                  return (
                                    <>
                                      <label
                                        className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                        htmlFor={`${item.name}${index}`}
                                      >
                                        <Heading item={item} />
                                      </label>
                                      <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                        <Textarea item={item} id={`${item.name}${index}`} isValue={false} />
                                      </div>
                                    </>
                                  );
                                }
                                case 'checkbox': {
                                  return (
                                    <fieldset className={classnames({ 'acms-admin-contents': acmscss })}>
                                      <legend
                                        className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                        id={`${item.name}${index}`}
                                      >
                                        <Heading item={item} />
                                      </legend>
                                      <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                        <Checkbox item={item} id={`${item.name}${index}`} isChecked={false} />
                                      </div>
                                    </fieldset>
                                  );
                                }
                                case 'selectbox': {
                                  return (
                                    <>
                                      <label
                                        className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                        htmlFor={`${item.name}${index}`}
                                      >
                                        <Heading item={item} />
                                      </label>
                                      <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                        <Selectbox item={item} id={`${item.name}${index}`} isSelected={false} />
                                      </div>
                                    </>
                                  );
                                }
                                case 'radioButton': {
                                  return (
                                    <fieldset className={classnames({ 'acms-admin-contents': acmscss })}>
                                      <legend
                                        className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                        id={`${item.name}${index}`}
                                      >
                                        <Heading item={item} />
                                      </legend>
                                      <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                        <RadioButton item={item} id={`${item.name}${index}`} isChecked={false} />
                                      </div>
                                    </fieldset>
                                  );
                                }
                                case 'media': {
                                  return (
                                    <>
                                      <label
                                        className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                        htmlFor={`${item.name}${index}`}
                                      >
                                        <Heading item={item} />
                                      </label>
                                      <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                        <Media item={item} id={`${item.name}${index}`} isValue={false} />
                                      </div>
                                    </>
                                  );
                                }
                                case 'image': {
                                  return (
                                    <>
                                      <label
                                        className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                        htmlFor={`${item.name}${index}`}
                                      >
                                        <Heading item={item} />
                                      </label>
                                      <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                        <ImageInput item={item} id={`${item.name}${index}`} isAttribute={false} />
                                      </div>
                                    </>
                                  );
                                }
                                case 'file': {
                                  return (
                                    <>
                                      <label
                                        className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                        htmlFor={`${item.name}${index}`}
                                      >
                                        <Heading item={item} />
                                      </label>
                                      <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                        <FileInput item={item} id={`${item.name}${index}`} isValue={false} />
                                      </div>
                                    </>
                                  );
                                }
                                case 'richEditor': {
                                  return (
                                    <>
                                      <label
                                        className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                        htmlFor={`${item.name}${index}`}
                                      >
                                        <Heading item={item} />
                                      </label>
                                      <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                        <RichEditor item={item} id={`${item.name}${index}`} isValue={false} />
                                      </div>
                                    </>
                                  );
                                }
                                case 'table': {
                                  return (
                                    <>
                                      <label
                                        className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                        htmlFor={`${item.name}${index}`}
                                      >
                                        <Heading item={item} />
                                      </label>
                                      <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                        <Table item={item} id={`${item.name}${index}`} isValue={false} />
                                      </div>
                                    </>
                                  );
                                }
                                default: {
                                  return null;
                                }
                              }
                            })()}
                          </div>
                        ))}
                      </div>

                      <div className="acms-admin-padding-small">
                        <button
                          type="button"
                          className="item-delete acms-admin-btn-admin acms-admin-btn-admin-danger"
                          value="削除"
                        >
                          削除
                        </button>
                      </div>
                    </div>
                  </template>
                  <div>
                    <input type="button" className="item-insert acms-admin-btn-admin" value="追加" />
                  </div>
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
                          <input
                            type="hidden"
                            name={`@${unitgroup.name}{id}[]`}
                            value={`${item.name}{id}@squarePath`}
                          />
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
      )}
    </>
  );
}
