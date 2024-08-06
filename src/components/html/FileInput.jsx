import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionNoSearch } from './OptionNoSearch';

export function FileInput(props) {
  const { item, id } = props;
  const {
    preview: { acmscss, editMode, mode },
  } = useMakerContext();

  let src = '/images/fileicon/';
  let alt = 'file';
  if (item.extension) {
    src += `${item.extension}.svg`;
    alt += item.extension;
  } else {
    src += 'file.svg';
  }

  let attribute = { value: '', name: '', hiddenName: '' };
  switch (mode) {
    case 'normal': {
      attribute = {
        id,
        value: `${item.name}`,
        name: item.name,
        hiddenName: 'field[]',
      };
      break;
    }
    case 'group': {
      attribute = {
        id,
        value: `{${item.name}}`,
        name: `${item.name}[]`,
      };
      break;
    }
    case 'unit': {
      attribute = {
        id,
        value: `{${item.name}}`,
        name: `${item.name}{id}`,
        hiddenName: 'unit[]',
      };
      break;
    }
    case 'unit-group': {
      attribute = {
        id,
        value: item.name,
        name: `${item.name}{id}[]`,
      };
      break;
    }
  }

  return (
    <>
      {editMode === 'preview' ? null : `<!-- BEGIN ${item.name}@path:veil -->`}
      <input type="hidden" name={`${item.name}@old`} value={`{${item.name}@path}`} />
      <input type="hidden" name={`${item.name}@secret`} value={`{${item.name}@secret}`} />
      <input type="hidden" name={`${item.name}@fileSize`} value={`{${item.name}@fileSize}`} />
      <label
        htmlFor={`input-checkbox-${item.name}@edit`}
        className={classnames({ 'acms-admin-form-checkbox': acmscss })}
      >
        <input type="checkbox" name={`${item.name}@edit`} value="delete" id={`input-checkbox-${item.name}@edit`} />
        {acmscss && <i className="acms-admin-ico-checkbox" />}
        削除
      </label>
      <a href={`%{ARCHIVES_DIR}{${item.name}@path}`}>
        <img src={src} width="64" height="64" alt={alt} />
      </a>
      {editMode === 'preview' ? null : `<!-- END ${item.name}@path:veil -->`}
      <input type="file" name={item.name} />
      <input type="hidden" name={attribute.hiddenName} value={attribute.value} />
      <input type="hidden" name={`${item.name}@baseName`} value={`{${item.name}@baseName}`} />
      <input type="hidden" name={`${item.name}:extension`} value="file" />
      {item.extension && <input type="hidden" name={`${item.name}@extension`} value={item.extension} />}
      {item.fileNameMethod === 'random' && item.fileName && (
        <input type="hidden" name={`${item.name}@filename`} value="" />
      )}
      {item.fileNameMethod === 'fix' && item.fileName && (
        <input type="hidden" name={`${item.name}@filename`} value={`${item.fileName}`} />
      )}
      {item.fileNameMethod === 'asis' && <input type="hidden" name={`${item.name}@filename`} value="@rawfilename" />}

      <OptionValidator item={item} />
      <OptionNoSearch name={item.name} noSearch={item.noSearch} />
    </>
  );
}
