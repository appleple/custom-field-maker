import React, { forwardRef } from 'react';
import { useMakerContext } from '../../stores/MakerContext';
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
import { BlockEditor } from '../html/BlockEditor';
import { Table } from '../html/Table';
import { OptionNoSearch } from '../html/OptionNoSearch';
import { OptionValidator } from '../html/OptionValidator';

export const UnitGroupSection = forwardRef((_props, ref) => {
  const {
    state: { unitgroup },
    preview: { acmscss, editMode },
  } = useMakerContext();

  const renderTemplateComponent = () => (
    <div
      className={classnames({
        'sortable-item': true,
        'acms-admin-d-flex': acmscss,
        'acms-admin-flex-column': acmscss,
        'acms-admin-flex-md-row': acmscss,
        'acms-admin-align-items-start': acmscss,
        'acms-admin-align-items-md-center': acmscss,
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
          'acms-admin-flex-fit': acmscss,
          'acms-admin-padding-small': acmscss,
        })}
      >
        {unitgroup.items.map((item, index) => (
          <div
            key={index}
            className={classnames({
              'acms-admin-d-flex': acmscss,
              'acms-admin-flex-column': acmscss,
              'acms-admin-flex-md-row': acmscss,
              'acms-admin-padding-small': acmscss,
            })}
          >
            {(() => {
              switch (item.type) {
                case 'text':
                case 'tel':
                case 'number':
                case 'email':
                case 'password': {
                  return (
                    <>
                      <label
                        className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                        htmlFor={`${item.name}{id}[]`}
                      >
                        <Heading item={item} />
                      </label>
                      <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                        <TextInput item={item} isValue={false} />
                      </div>
                    </>
                  );
                }
                case 'textarea':
                case 'liteEditor': {
                  return (
                    <>
                      <label
                        className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                        htmlFor={`${item.name}{id}[]`}
                      >
                        <Heading item={item} />
                      </label>
                      <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                        <Textarea item={item} isValue={false} />
                      </div>
                    </>
                  );
                }
                case 'checkbox': {
                  return (
                    <fieldset className={classnames({ 'acms-admin-d-contents': acmscss })}>
                      <legend className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}>
                        <Heading item={item} />
                      </legend>
                      <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                        <Checkbox item={item} isChecked={false} />
                      </div>
                    </fieldset>
                  );
                }
                case 'selectbox': {
                  return (
                    <>
                      <label
                        className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                        htmlFor={`${item.name}{id}[]`}
                      >
                        <Heading item={item} />
                      </label>
                      <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                        <Selectbox item={item} isSelected={false} />
                      </div>
                    </>
                  );
                }
                case 'radioButton': {
                  return (
                    <fieldset className={classnames({ 'acms-admin-d-contents': acmscss })}>
                      <legend className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}>
                        <Heading item={item} />
                      </legend>
                      <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                        <RadioButton item={item} isChecked={false} />
                      </div>
                    </fieldset>
                  );
                }
                case 'media': {
                  return (
                    <>
                      <label className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}>
                        <Heading item={item} />
                      </label>
                      <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                        <Media item={item} isValue={false} />
                      </div>
                    </>
                  );
                }
                case 'image': {
                  return (
                    <>
                      <label
                        className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                        htmlFor={`${item.name}{id}[]`}
                      >
                        <Heading item={item} />
                      </label>
                      <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                        <ImageInput item={item} isAttribute={false} />
                      </div>
                    </>
                  );
                }
                case 'file': {
                  return (
                    <>
                      <label
                        className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                        htmlFor={`${item.name}{id}[]`}
                      >
                        <Heading item={item} />
                      </label>
                      <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                        <FileInput item={item} isValue={false} />
                      </div>
                    </>
                  );
                }
                case 'blockEditor': {
                  return (
                    <>
                      <label className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}>
                        <Heading item={item} />
                      </label>
                      <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                        <BlockEditor item={item} isValue={false} />
                      </div>
                    </>
                  );
                }
                case 'table': {
                  return (
                    <>
                      <label className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}>
                        <Heading item={item} />
                      </label>
                      <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                        <Table item={item} isValue={false} />
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

      <div
        className={classnames({
          'acms-admin-padding-small': acmscss,
        })}
      >
        <button type="button" className="item-delete acms-admin-btn-admin acms-admin-btn-admin-danger">
          削除
        </button>
      </div>
    </div>
  );

  return (
    <>
      {unitgroup.name && unitgroup.title && (
        <section ref={ref}>
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
                          'acms-admin-d-flex': acmscss,
                          'acms-admin-flex-column': acmscss,
                          'acms-admin-flex-md-row': acmscss,
                          'acms-admin-align-items-start': acmscss,
                          'acms-admin-align-items-md-center': acmscss,
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
                            'acms-admin-flex-fit': acmscss,
                            'acms-admin-padding-small': acmscss,
                          })}
                        >
                          {unitgroup.items.map((item, index) => (
                            <div
                              key={index}
                              className={classnames({
                                'acms-admin-d-flex': acmscss,
                                'acms-admin-flex-column': acmscss,
                                'acms-admin-flex-md-row': acmscss,
                                'acms-admin-padding-small': acmscss,
                              })}
                            >
                              {(() => {
                                switch (item.type) {
                                  case 'text':
                                  case 'tel':
                                  case 'number':
                                  case 'email':
                                  case 'password': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                          htmlFor={`${item.name}{id}[]`}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                                          <TextInput item={item} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'textarea':
                                  case 'liteEditor': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                          htmlFor={`${item.name}{id}[]`}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                                          <Textarea item={item} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'checkbox': {
                                    return (
                                      <fieldset className={classnames({ 'acms-admin-d-contents': acmscss })}>
                                        <legend
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                        >
                                          <Heading item={item} />
                                        </legend>
                                        <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                                          <Checkbox item={item} />
                                        </div>
                                      </fieldset>
                                    );
                                  }
                                  case 'selectbox': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                          htmlFor={`${item.name}{id}[]`}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                                          <Selectbox item={item} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'radioButton': {
                                    return (
                                      <fieldset className={classnames({ 'acms-admin-d-contents': acmscss })}>
                                        <legend
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                        >
                                          <Heading item={item} />
                                        </legend>
                                        <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                                          <RadioButton item={item} />
                                        </div>
                                      </fieldset>
                                    );
                                  }
                                  case 'media': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                                          <Media item={item} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'image': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                          htmlFor={`${item.name}{id}[]`}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                                          <ImageInput item={item} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'file': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                          htmlFor={`${item.name}{id}[]`}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className="acms-admin-flex-fit">
                                          <FileInput item={item} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'blockEditor': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                                          <BlockEditor item={item} />
                                        </div>
                                      </>
                                    );
                                  }
                                  case 'table': {
                                    return (
                                      <>
                                        <label
                                          className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}
                                        >
                                          <Heading item={item} />
                                        </label>
                                        <div className={classnames({ 'acms-admin-flex-fit': acmscss })}>
                                          <Table item={item} />
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

                        <div
                          className={classnames({
                            'classnameacms-admin-padding-small': acmscss,
                          })}
                        >
                          <button
                            type="button"
                            className="item-delete acms-admin-btn-admin acms-admin-btn-admin-danger"
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
                  {editMode === 'preview' ? (
                    <div className="item-template">{renderTemplateComponent()}</div>
                  ) : (
                    <template className="item-template">{renderTemplateComponent()}</template>
                  )}

                  <div>
                    <button type="button" className="item-insert acms-admin-btn-admin">
                      追加
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* input hidden */}
          {unitgroup.name && (
            <>
              {unitgroup.items.map((item, index) => (
                <React.Fragment key={index}>
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
                  {item.type === 'blockEditor' && (
                    <input type="hidden" name={`${item.name}{id}:extension`} value="block-editor" />
                  )}
                  <input type="hidden" name={`@${unitgroup.name}{id}[]`} value={`${item.name}{id}`} />
                  <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
                  <OptionValidator item={item} />
                  <OptionNoSearch name={`${item.name}{id}`} noSearch={item.noSearch} />
                </React.Fragment>
              ))}
              <input type="hidden" name="unit{id}[]" value={`@${unitgroup.name}{id}`} />
            </>
          )}
        </section>
      )}
    </>
  );
});

UnitGroupSection.displayName = 'UnitGroupSection';
