import React from 'react';
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

export function Section() {
  const {
    state: { customfield },
    preview: { jsValidator },
  } = useMakerContext();

  return (
    <>
      {jsValidator && '<!-- <form action="" method="post" class="js-validator" enctype="multipart/form-data"> -->'}

      {customfield.length > 0 &&
        customfield.map((item, index) => {
          switch (item.type) {
            case 'text': {
              return (
                <div key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                    <Heading item={item} />
                  </label>
                  <div className="acms-admin-form-item-input">
                    <TextInput item={item} id={`${item.name}${index}`} />
                  </div>
                </div>
              );
            }
            case 'textarea': {
              return (
                <div key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                    <Heading item={item} />
                  </label>
                  <div className="acms-admin-form-item-input">
                    <Textarea item={item} id={`${item.name}${index}`} />
                  </div>
                </div>
              );
            }
            case 'selectbox': {
              return (
                <div key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                    <Heading item={item} />
                  </label>
                  <div className="acms-admin-form-item-input">
                    <Selectbox item={item} id={`${item.name}${index}`} />
                  </div>
                </div>
              );
            }
            case 'checkbox': {
              return (
                <fieldset key={index} className="acms-admin-form-item">
                  <legend className="acms-admin-form-item-heading">
                    <Heading item={item} />
                  </legend>
                  <div className="acms-admin-form-item-input">
                    <Checkbox item={item} />
                  </div>
                </fieldset>
              );
            }
            case 'radioButton': {
              return (
                <fieldset key={index} className="acms-admin-form-item">
                  <legend className="acms-admin-form-item-heading">
                    <Heading item={item} />
                  </legend>
                  <div className="acms-admin-form-item-input">
                    <RadioButton item={item} />
                  </div>
                </fieldset>
              );
            }
            case 'media': {
              return (
                <div key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                    <Heading item={item} />
                  </label>
                  <div className="acms-admin-form-item-input">
                    <Media item={item} id={`${item.name}${index}`} />
                  </div>
                </div>
              );
            }
            case 'image': {
              return (
                <div key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                    <Heading item={item} />
                  </label>
                  <div className="acms-admin-form-item-input">
                    <ImageInput item={item} id={`${item.name}${index}`} />
                  </div>
                </div>
              );
            }
            case 'file': {
              return (
                <div key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                    <Heading item={item} />
                  </label>
                  <div className="acms-admin-form-item-input">
                    <FileInput item={item} id={`${item.name}${index}`} />
                  </div>
                </div>
              );
            }
            case 'richEditor': {
              return (
                <div key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                    <Heading item={item} />
                  </label>
                  <div className="acms-admin-form-item-input">
                    <RichEditor item={item} id={`${item.name}${index}`} />
                  </div>
                </div>
              );
            }
            case 'table': {
              return (
                <div key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                    <Heading item={item} />
                  </label>
                  <div className="acms-admin-form-item-input">
                    <Table item={item} id={`${item.name}${index}`} />
                  </div>
                </div>
              );
            }
            default: {
              return null;
            }
          }
        })}
      {jsValidator && '<!-- </form> -->'}
    </>
  );
}
