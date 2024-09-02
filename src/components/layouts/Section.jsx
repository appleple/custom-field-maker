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
                <p key={index} className="acms-admin-form-item">
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
                    <Heading item={item} />
                  </label>
                  <span className="acms-admin-form-item-input">
                    <Textarea item={item} id={`${item.name}${index}`} />
                  </span>
                </p>
              );
            }
            case 'selectbox': {
              return (
                <div key={index} className="acms-admin-form-item">
                  <p className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                    <Heading item={item} />
                  </p>
                  <span className="acms-admin-form-item-input">
                    <Selectbox item={item} id={`${item.name}${index}`} />
                  </span>
                </div>
              );
            }
            case 'checkbox': {
              return (
                <div key={index} className="acms-admin-form-item">
                  <p className="acms-admin-form-item-heading">
                    <Heading item={item} />
                  </p>
                  <span className="acms-admin-form-item-input">
                    <Checkbox item={item} />
                  </span>
                </div>
              );
            }
            case 'radioButton': {
              return (
                <div key={index} className="acms-admin-form-item">
                  <p className="acms-admin-form-item-heading">
                    <Heading item={item} />
                  </p>
                  <span className="acms-admin-form-item-input">
                    <RadioButton item={item} />
                  </span>
                </div>
              );
            }
            case 'media': {
              return (
                <p key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                    <Heading item={item} />
                  </label>
                  <span>
                    <Media item={item} id={`${item.name}${index}`} />
                  </span>
                </p>
              );
            }
            case 'image': {
              return (
                <p key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                    <Heading item={item} />
                  </label>
                  <span>
                    <ImageInput item={item} id={`${item.name}${index}`} />
                  </span>
                </p>
              );
            }
            case 'file': {
              return (
                <p key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                    <Heading item={item} />
                  </label>
                  <span>
                    <FileInput item={item} id={`${item.name}${index}`} />
                  </span>
                </p>
              );
            }
            case 'richEditor': {
              return (
                <p key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                    <Heading item={item} />
                  </label>
                  <span>
                    <RichEditor item={item} id={`${item.name}${index}`} />
                  </span>
                </p>
              );
            }
            case 'table': {
              return (
                <p key={index} className="acms-admin-form-item">
                  <label className="acms-admin-form-item-heading" htmlFor={`${item.name}${index}`}>
                    <Heading item={item} />
                  </label>
                  <span>
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
      {jsValidator && '<!-- </form> -->'}
    </>
  );
}
