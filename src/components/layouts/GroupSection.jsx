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

  return (
    <>
      {fieldgroup.name && fieldgroup.title && (
        <section>
          <h2 className={classnames({ 'acms-admin-admin-title2': acmscss })}>{fieldgroup.title}</h2>

          {fieldgroup.name && (
            <div
              className={classnames({
                'js-fieldgroup-sortable': true,
                'acms-admin-grid-layout': acmscss,
              })}
            >
              {editMode === 'preview'
                ? null
                : fieldgroup.items.length > 0 && (
                    <>
                      <div className={classnames({ 'acms-admin-hide-sp': acmscss })}>
                        <div>
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

                      <div className="sortable-item acms-admin-flex acms-admin-flex-col acms-admin-flex-row-md acms-admin-flex-row-lg acms-admin-flex-row-xl  acms-admin-items-start acms-admin-items-center-md acms-admin-items-center-lg acms-admin-items-center-xl">
                        <div className="item-handle acms-admin-padding-small">
                          {acmscss && <i className="acms-admin-icon-sort" />}
                        </div>

                        <div className="acms-admin-flex-1 acms-admin-padding-small">
                          {fieldgroup.items.map((item, index) => (
                            <div
                              key={index}
                              className={classnames({
                                'acms-admin-flex': acmscss,
                                'acms-admin-flex-col': acmscss,
                                'acms-admin-flex-row-md': acmscss,
                                'acms-admin-flex-row-lg': acmscss,
                                'acms-admin-flex-row-xl': acmscss,
                                'acms-admin-padding-small': acmscss,
                              })}
                            >
                              {(() => {
                                switch (item.type) {
                                  case 'text': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
                                          htmlFor={`${item.name}`}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className="acms-admin-flex-1">
                                          <TextInput item={item} id={`${item.name}`} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'textarea': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
                                          htmlFor={`${item.name}${index}`}
                                        >
                                          <Heading item={item} id={`${item.name}${index}`} />
                                        </label>
                                        <div className="acms-admin-flex-1">
                                          <Textarea item={item} id={`${item.name}${index}`} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'checkbox': {
                                    return (
                                      <fieldset key={index} className="acms-admin-contents">
                                        <legend className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}>
                                          <Heading item={item} id={`${item.name}${index}`} />
                                        </legend>
                                        <div className="acms-admin-flex-1">
                                          <Checkbox item={item} id={`${item.name}${index}`} />
                                        </div>
                                      </fieldset>
                                    );
                                  }
                                  case 'selectbox': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
                                          htmlFor={`${item.name}${index}`}
                                        >
                                          <Heading item={item} id={`${item.name}${index}`} />
                                        </label>
                                        <div className="acms-admin-flex-1">
                                          <Selectbox item={item} id={`${item.name}${index}`} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'radioButton': {
                                    return (
                                      <fieldset key={index} className="acms-admin-contents">
                                        <legend
                                          className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
                                          id={`${item.name}${index}`}
                                        >
                                          <Heading item={item} />
                                        </legend>
                                        <div className="acms-admin-flex-1">
                                          <RadioButton item={item} id={`${item.name}${index}`} />
                                        </div>
                                      </fieldset>
                                    );
                                  }
                                  case 'media': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
                                          htmlFor={`${item.name}${index}`}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className="acms-admin-flex-1">
                                          <Media item={item} id={`${item.name}${index}`} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'image': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
                                          htmlFor={`${item.name}${index}`}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className="acms-admin-flex-1">
                                          <ImageInput item={item} id={`${item.name}${index}`} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'file': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
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
                                          className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
                                          htmlFor={`${item.name}${index}`}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className="acms-admin-flex-1">
                                          <RichEditor item={item} id={`${item.name}${index}`} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'table': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
                                          htmlFor={`${item.name}${index}`}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className="acms-admin-flex-1">
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

                      {`<!-- END ${fieldgroup.name}:loop -->`}
                    </>
                  )}

              {fieldgroup.items.length > 0 && (
                <>
                  <template className="item-template">
                    <div className="sortable-item acms-admin-flex acms-admin-flex-col acms-admin-flex-row-md acms-admin-flex-row-lg acms-admin-flex-row-xl acms-admin-items-start acms-admin-items-center-md acms-admin-items-center-lg acms-admin-items-center-xl">
                      <div className="item-handle acms-admin-padding-small">
                        <i className="acms-admin-icon-sort"></i>
                      </div>
                      <div className="acms-admin-flex-1 acms-admin-padding-small">
                        {fieldgroup.items.map((item, index) => (
                          <div
                            key={index}
                            className={classnames({
                              'acms-admin-flex': acmscss,
                              'acms-admin-flex-col': acmscss,
                              'acms-admin-flex-row-md': acmscss,
                              'acms-admin-flex-row-lg': acmscss,
                              'acms-admin-flex-row-xl': acmscss,
                              'acms-admin-padding-small': acmscss,
                            })}
                          >
                            {(() => {
                              switch (item.type) {
                                case 'text': {
                                  return (
                                    <>
                                      <label
                                        className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
                                        htmlFor={`${item.name}`}
                                      >
                                        <Heading item={item} />
                                      </label>
                                      <div className="acms-admin-flex-1">
                                        <TextInput item={item} id={`${item.name}`} isValue={false} />
                                      </div>
                                    </>
                                  );
                                }
                                case 'textarea': {
                                  return (
                                    <>
                                      <label
                                        className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
                                        htmlFor={`${item.name}${index}`}
                                      >
                                        <Heading item={item} />
                                      </label>
                                      <div className="acms-admin-flex-1">
                                        <Textarea item={item} id={`template-${item.name}${index}`} isValue={false} />
                                      </div>
                                    </>
                                  );
                                }
                                case 'checkbox': {
                                  return (
                                    <fieldset key={index} className="acms-admin-contents">
                                      <legend className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}>
                                        <Heading item={item} />
                                      </legend>
                                      <div className="acms-admin-flex-1">
                                        <Checkbox item={item} id={`template-${item.name}${index}`} isChecked={false} />
                                      </div>
                                    </fieldset>
                                  );
                                }
                                case 'selectbox': {
                                  return (
                                    <>
                                      <label
                                        className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
                                        htmlFor={`${item.name}${index}`}
                                      >
                                        <Heading item={item} />
                                      </label>
                                      <div className="acms-admin-flex-1">
                                        <Selectbox item={item} id={`${item.name}${index}`} isSelected={false} />
                                      </div>
                                    </>
                                  );
                                }
                                case 'radioButton': {
                                  return (
                                    <fieldset key={index} className="acms-admin-contents">
                                      <legend
                                        className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
                                        id={`${item.name}${index}`}
                                      >
                                        <Heading item={item} />
                                      </legend>
                                      <div className="acms-admin-flex-1">
                                        <RadioButton item={item} id={`${item.name}${index}`} isChecked={false} />
                                      </div>
                                    </fieldset>
                                  );
                                }
                                case 'media': {
                                  return (
                                    <>
                                      <label
                                        className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
                                        htmlFor={`${item.name}${index}`}
                                      >
                                        <Heading item={item} />
                                      </label>
                                      <div className="acms-admin-flex-1">
                                        <Media item={item} id={`${item.name}${index}`} isValue={false} />
                                      </div>
                                    </>
                                  );
                                }
                                case 'image': {
                                  return (
                                    <>
                                      <label
                                        className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
                                        htmlFor={`${item.name}${index}`}
                                      >
                                        <Heading item={item} />
                                      </label>
                                      <div className="acms-admin-flex-1">
                                        <ImageInput item={item} id={`${item.name}${index}`} isAttribute={false} />
                                      </div>
                                    </>
                                  );
                                }
                                case 'file': {
                                  return (
                                    <>
                                      <label
                                        className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
                                        htmlFor={`${item.name}`}
                                      >
                                        <Heading item={item} />
                                      </label>
                                      <div className="acms-admin-flex-1">
                                        <FileInput item={item} id={`${item.name}`} isValue={false} />
                                      </div>
                                    </>
                                  );
                                }
                                case 'richEditor': {
                                  return (
                                    <>
                                      <label
                                        className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
                                        htmlFor={`${item.name}${index}`}
                                      >
                                        <Heading item={item} />
                                      </label>
                                      <div className="acms-admin-flex-1">
                                        <RichEditor item={item} id={`${item.name}${index}`} isValue={false} />
                                      </div>
                                    </>
                                  );
                                }
                                case 'table': {
                                  return (
                                    <>
                                      <label
                                        className={classnames({ 'acms-admin-grid-layout-heading': acmscss })}
                                        htmlFor={`${item.name}${index}`}
                                      >
                                        <Heading item={item} />
                                      </label>
                                      <div className="acms-admin-flex-1">
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
                        <div className="acms-admin-padding-small">
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
                  </template>
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
