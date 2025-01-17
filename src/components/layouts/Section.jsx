import React, { forwardRef } from 'react';
import { Heading } from '../html/Heading';
import { TextInput } from '../html/TextInput';
import { Textarea } from '../html/Textarea';
import { Selectbox } from '../html/Selectbox';
import { Checkbox } from '../html/Checkbox';
import { RadioButton } from '../html/RadioButton';
import { Media } from '../html/Media';
import { ImageInput } from '../html/ImageInput';
import { FileInput } from '../html/FileInput';
import { RichEditor } from '../html/RichEditor';
import { Table } from '../html/Table';
import { useMakerContext } from '../../store/MakerContext';
import classnames from 'classnames';

export const Section = forwardRef((_props, ref) => {
  const {
    state: { customfield },
    preview: { editMode, jsValidator, acmscss },
  } = useMakerContext();

  const renderFormComponent = (
    <div ref={ref} className={classnames({ 'acms-admin-grid-edit-table': acmscss })}>
      {customfield.length > 0 &&
        customfield.map((item, index) => {
          switch (item.type) {
            case 'text':
            case 'tel':
            case 'number':
            case 'email':
            case 'password': {
              return (
                <div
                  key={index}
                  className={classnames({
                    'acms-admin-flex': acmscss,
                    'acms-admin-flex-col-max-md': acmscss,
                    'acms-admin-flex-row-min-md': acmscss,
                  })}
                >
                  <label className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })} htmlFor={item.name}>
                    <Heading item={item} />
                  </label>
                  <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                    <TextInput item={item} />
                  </div>
                </div>
              );
            }
            case 'textarea':
            case 'liteEditor': {
              return (
                <div
                  key={index}
                  className={classnames({
                    'acms-admin-flex': acmscss,
                    'acms-admin-flex-col-max-md': acmscss,
                    'acms-admin-flex-row-min-md': acmscss,
                  })}
                >
                  <label className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })} htmlFor={item.name}>
                    <Heading item={item} />
                  </label>
                  <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                    <Textarea item={item} />
                  </div>
                </div>
              );
            }
            case 'selectbox': {
              return (
                <div
                  key={index}
                  className={classnames({
                    'acms-admin-flex': acmscss,
                    'acms-admin-flex-col-max-md': acmscss,
                    'acms-admin-flex-row-min-md': acmscss,
                  })}
                >
                  <label className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })} htmlFor={item.name}>
                    <Heading item={item} />
                  </label>
                  <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                    <Selectbox item={item} />
                  </div>
                </div>
              );
            }
            case 'checkbox': {
              return (
                <div
                  key={index}
                  className={classnames({
                    'acms-admin-flex': acmscss,
                    'acms-admin-flex-col-max-md': acmscss,
                    'acms-admin-flex-row-min-md': acmscss,
                  })}
                >
                  <fieldset key={index} className={classnames({ 'acms-admin-contents': acmscss })}>
                    <legend className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}>
                      <Heading item={item} />
                    </legend>
                    <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                      <Checkbox item={item} />
                    </div>
                  </fieldset>
                </div>
              );
            }
            case 'radioButton': {
              return (
                <div
                  key={index}
                  className={classnames({
                    'acms-admin-flex': acmscss,
                    'acms-admin-flex-row': acmscss,
                  })}
                >
                  <fieldset key={index} className={classnames({ 'acms-admin-contents': acmscss })}>
                    <legend className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })}>
                      <Heading item={item} />
                    </legend>
                    <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                      <RadioButton item={item} />
                    </div>
                  </fieldset>
                </div>
              );
            }
            case 'media': {
              return (
                <div
                  key={index}
                  className={classnames({
                    'acms-admin-flex': acmscss,
                    'acms-admin-flex-col-max-md': acmscss,
                    'acms-admin-flex-row-min-md': acmscss,
                  })}
                >
                  <label className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })} htmlFor={item.name}>
                    <Heading item={item} />
                  </label>
                  <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                    <Media item={item} />
                  </div>
                </div>
              );
            }
            case 'image': {
              return (
                <div
                  key={index}
                  className={classnames({
                    'acms-admin-flex': acmscss,
                    'acms-admin-flex-col-max-md': acmscss,
                    'acms-admin-flex-row-min-md': acmscss,
                  })}
                >
                  <label className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })} htmlFor={item.name}>
                    <Heading item={item} />
                  </label>
                  <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                    <ImageInput item={item} />
                  </div>
                </div>
              );
            }
            case 'file': {
              return (
                <div
                  key={index}
                  className={classnames({
                    'acms-admin-flex': acmscss,
                    'acms-admin-flex-col-max-md': acmscss,
                    'acms-admin-flex-row-min-md': acmscss,
                  })}
                >
                  <label className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })} htmlFor={item.name}>
                    <Heading item={item} />
                  </label>
                  <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                    <FileInput item={item} />
                  </div>
                </div>
              );
            }
            case 'richEditor': {
              return (
                <div
                  key={index}
                  className={classnames({
                    'acms-admin-flex': acmscss,
                    'acms-admin-flex-col-max-md': acmscss,
                    'acms-admin-flex-row-min-md': acmscss,
                  })}
                >
                  <label className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })} htmlFor={item.name}>
                    <Heading item={item} />
                  </label>
                  <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                    <RichEditor item={item} />
                  </div>
                </div>
              );
            }
            case 'table': {
              return (
                <div
                  key={index}
                  className={classnames({
                    'acms-admin-flex': acmscss,
                    'acms-admin-flex-col-max-md': acmscss,
                    'acms-admin-flex-row-min-md': acmscss,
                  })}
                >
                  <label className={classnames({ 'acms-admin-grid-edit-table-heading': acmscss })} htmlFor={item.name}>
                    <Heading item={item} />
                  </label>
                  <div className={classnames({ 'acms-admin-flex-1': acmscss })}>
                    <Table item={item} />
                  </div>
                </div>
              );
            }
            default: {
              return null;
            }
          }
        })}
    </div>
  );

  if (jsValidator && editMode !== 'preview') {
    return (
      <>
        {'<!-- <form action="" method="post" class="js-validator" enctype="multipart/form-data"> -->'}
        {renderFormComponent}
        {'<!-- </form> -->'}
      </>
    );
  }

  return renderFormComponent;
});

Section.displayName = 'Section';
