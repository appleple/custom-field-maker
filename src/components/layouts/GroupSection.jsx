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

export function GroupSection() {
  const {
    state: { fieldgroup },
    preview: { acmscss, editMode },
  } = useMakerContext();

  const renderTemplateContent = () => (
    <div
      className={classnames({
        'sortable-item': true,
        'acms-admin-flex': acmscss,
        'acms-admin-flex-col-max-md': acmscss,
        'acms-admin-flex-row-min-md': acmscss,
        'acms-admin-items-start-max-md': acmscss,
        'acms-admin-items-center-min-md': acmscss,
      })}
    >
      <div
        className={classnames({
          'item-handle': true,
          'acms-admin-padding-small': acmscss,
        })}
      >
        <i className="acms-admin-icon-sort"></i>
      </div>
      <div
        className={classnames({
          'acms-admin-flex-1': acmscss,
          'acms-admin-padding-small': acmscss,
        })}
      >
        {fieldgroup.items.map((item, index) => (
          <div
            key={index}
            className={classnames({
              'acms-admin-flex': acmscss,
              'acms-admin-flex-col-max-md': acmscss,
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
                        htmlFor={`${item.name}`}
                      >
                        <Heading item={item} />
                      </label>
                      <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                        <TextInput item={item} id={`${item.name}`} isValue={false} />
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
                        <Textarea item={item} id={`template-${item.name}${index}`} isValue={false} />
                      </div>
                    </>
                  );
                }
                case 'checkbox': {
                  return (
                    <fieldset key={index} className={classnames({ 'acms-admin-contents': acmscss })}>
                      <legend className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}>
                        <Heading item={item} />
                      </legend>
                      <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                        <Checkbox item={item} id={`template-${item.name}${index}`} isChecked={false} />
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
                    <fieldset key={index} className={classnames({ 'acms-admin-contents': acmscss })}>
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
                        htmlFor={`${item.name}`}
                      >
                        <Heading item={item} />
                      </label>
                      <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                        <FileInput item={item} id={`${item.name}`} isValue={false} />
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

      {fieldgroup.items.length > 0 && (
        <div className={classnames({ 'acms-admin-padding-small': acmscss })}>
          <button type="button" className="item-delete acms-admin-btn-admin acms-admin-btn-admin-danger" value="削除">
            削除
          </button>
        </div>
      )}
    </div>
  );

  return (
    <>
      {fieldgroup.name && fieldgroup.title && (
        <section>
          <h2 className={classnames({ 'acms-admin-admin-title2': acmscss })}>{fieldgroup.title}</h2>

          {fieldgroup.name && (
            <div
              className={classnames({
                'js-fieldgroup-sortable': true,
                'acms-admin-grid-edit-table': acmscss,
              })}
            >
              {editMode === 'preview'
                ? null
                : fieldgroup.items.length > 0 && (
                    <>
                      {editMode === 'preview' ? null : `<!-- BEGIN ${fieldgroup.name}:loop -->`}

                      <div
                        className={classnames({
                          'sortable-item': true,
                          'acms-admin-flex': acmscss,
                          'acms-admin-flex-col-max-md': acmscss,
                          'acms-admin-flex-row-min-md': acmscss,
                          'acms-admin-items-start-max-md': acmscss,
                          'acms-admin-items-center-min-md': acmscss,
                        })}
                      >
                        <div
                          className={classnames({
                            'item-handle': true,
                            'acms-admin-padding-small': acmscss,
                          })}
                        >
                          <i className="acms-admin-icon-sort" />
                        </div>

                        <div
                          className={classnames({
                            'acms-admin-flex-1': acmscss,
                            'acms-admin-padding-small': acmscss,
                          })}
                        >
                          {fieldgroup.items.map((item, index) => (
                            <div
                              key={index}
                              className={classnames({
                                'acms-admin-flex': acmscss,
                                'acms-admin-flex-col-max-md': acmscss,
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
                                          htmlFor={`${item.name}`}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                                          <TextInput item={item} id={`${item.name}`} />
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
                                        <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
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

                        <div className={classnames({ 'acms-admin-padding-small': acmscss })}>
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
                  {editMode === 'preview' ? (
                    <div className="item-template">{renderTemplateContent()}</div>
                  ) : (
                    <template className="item-template">{renderTemplateContent()}</template>
                  )}
                  <div>
                    <input type="button" className="item-insert acms-admin-btn-admin" value="追加" />
                  </div>
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
                  {item.type === 'richEditor' && (
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
      )}
    </>
  );
}
