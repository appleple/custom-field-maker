import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../stores/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionValidatorFieldGroup } from './OptionValidatorFieldGroup';

export function FileInput(props) {
  const { item, isValue = true } = props;
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

  return (
    <>
      {mode === 'customfield' && (
        <>
          {editMode === 'preview' ? null : `<!-- BEGIN ${item.name}@path:veil -->`}
          <input type="hidden" name={`${item.name}@old`} value={`{${item.name}@path}`} />
          <input type="hidden" name={`${item.name}@secret`} value={`{${item.name}@secret}`} />
          <input type="hidden" name={`${item.name}@fileSize`} value={`{${item.name}@fileSize}`} />
          <label className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
            <input type="checkbox" name={`${item.name}@edit`} value="delete" />
            {acmscss && <i className="acms-admin-ico-checkbox" />}
            削除
          </label>
          <a href={`%{ARCHIVES_DIR}{${item.name}@path}`}>
            <img src={src} width="64" height="64" alt={alt} />
          </a>
          {editMode === 'preview' ? null : `<!-- END ${item.name}@path:veil -->`}
          <input type="file" name={item.name} id={item.name} />
          <input type="hidden" name="field[]" value={item.name} />
          <input type="hidden" name={`${item.name}@path`} value={`{${item.name}@path}`} />
          <input type="hidden" name={`${item.name}@fileSize`} value={`{${item.name}@fileSize}`} />
          <input type="hidden" name={`${item.name}@baseName`} value={`{${item.name}@baseName}`} />
          <input type="hidden" name={`${item.name}@originalName`} value={`{${item.name}@originalName}`} />
          <input type="hidden" name={`${item.name}:extension`} value="file" />
          {item.extension && <input type="hidden" name={`${item.name}@extension`} value={item.extension} />}
          {item.fileNameMethod === 'random' && item.fileName && (
            <input type="hidden" name={`${item.name}@filename`} value="" />
          )}
          {item.fileNameMethod === 'fix' && item.fileName && (
            <input type="hidden" name={`${item.name}@filename`} value={`${item.fileName}`} />
          )}
          {item.fileNameMethod === 'asis' && (
            <input type="hidden" name={`${item.name}@filename`} value="@rawfilename" />
          )}
          <OptionValidator item={item} />
        </>
      )}

      {mode === 'fieldgroup' && (
        <>
          {isValue && (
            <>
              {editMode === 'preview' ? null : `<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
              <div className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                <label>
                  <input type="checkbox" name={`${item.name}@edit[]`} value="delete" />
                  {acmscss && <i className="acms-admin-ico-checkbox" />} 削除
                </label>
              </div>
              <a href={`%{ARCHIVES_DIR}{${item.name}@path}`}>
                <img src={src} width="64" height="64" alt={alt} />
              </a>
              {editMode === 'preview' ? null : '<!-- END_IF -->'}
              <input type="hidden" name={`${item.name}@old[]`} value={`{${item.name}@path}`} />
            </>
          )}

          {item.extension && <input type="hidden" name={`${item.name}@extension[]`} value={item.extension} />}
          {item.fileNameMethod === 'random' && item.fileName && (
            <input type="hidden" name={`${item.name}@filename[]`} value="" />
          )}
          {item.fileNameMethod === 'fix' && item.fileName && (
            <input type="hidden" name={`${item.name}@filename[]`} value={item.fileName} />
          )}
          {item.fileNameMethod === 'asis' && (
            <input type="hidden" name={`${item.name}@filename[]`} value="@rawfilename" />
          )}
          <input type="file" name={`${item.name}[]`} id={`${item.name}[]`} />
          <OptionValidatorFieldGroup item={item} isTemplate={!isValue} />
        </>
      )}

      {mode === 'customunit' && (
        <>
          {editMode === 'preview' ? null : `<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
          <input type="hidden" name={`${item.name}{id}@old`} value={`{${item.name}@path}`} />
          <input type="hidden" name={`${item.name}{id}@secret`} value={`{${item.name}@secret}`} />
          <input type="hidden" name={`${item.name}{id}@fileSize`} value={`{${item.name}@fileSize}`} />
          <label className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
            <input type="checkbox" name={`${item.name}{id}@edit`} value="delete" />
            {acmscss && <i className="acms-admin-ico-checkbox" />}
            削除
          </label>
          <a href={`%{ARCHIVES_DIR}{${item.name}@path}`}>
            <img src={src} width="64" height="64" alt={alt} />
          </a>
          {editMode === 'preview' ? null : '<!-- END_IF -->'}
          <input type="file" name={`${item.name}{id}`} id={`${item.name}{id}`} />
          <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
          <input type="hidden" name={`${item.name}{id}@path`} value={`{${item.name}@path}`} />
          <input type="hidden" name={`${item.name}{id}@fileSize`} value={`{${item.name}@fileSize}`} />
          <input type="hidden" name={`${item.name}{id}@baseName`} value={`{${item.name}@baseName}`} />
          <input type="hidden" name={`${item.name}{id}@originalName`} value={`{${item.name}@originalName}`} />
          <input type="hidden" name={`${item.name}{id}:extension`} value="file" />
          {item.extension && <input type="hidden" name={`${item.name}{id}@extension`} value={item.extension} />}
          {item.fileNameMethod === 'random' && item.fileName && (
            <input type="hidden" name={`${item.name}{id}@filename`} value="" />
          )}
          {item.fileNameMethod === 'fix' && item.fileName && (
            <input type="hidden" name={`${item.name}{id}@filename`} value={item.fileName} />
          )}
          {item.fileNameMethod === 'asis' && (
            <input type="hidden" name={`${item.name}{id}@filename`} value="@rawfilename" />
          )}
          <OptionValidator item={item} />
        </>
      )}

      {mode === 'unitgroup' && (
        <>
          {isValue && (
            <>
              {editMode === 'preview' ? null : `<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
              <div className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                <label>
                  <input type="checkbox" name={`${item.name}{id}@edit[]`} value="delete" />
                  {acmscss && <i className="acms-admin-ico-checkbox" />} 削除
                </label>
              </div>
              <a href={`%{ARCHIVES_DIR}{${item.name}@path}`}>
                <img src={src} width="64" height="64" alt={alt} />
              </a>
              {editMode === 'preview' ? null : '<!-- END_IF -->'}
              <input type="hidden" name={`${item.name}{id}@old[]`} value={`{${item.name}@path}`} />
            </>
          )}
          <input type="file" name={`${item.name}{id}[]`} id={`${item.name}{id}[]`} />
          {!isValue && item.extension && (
            <input type="hidden" name={`${item.name}{id}@extension[]`} value="{extension}" />
          )}
          {item.fileNameMethod === 'random' && item.fileName && (
            <input type="hidden" name={`${item.name}{id}@filename[]`} value="" />
          )}
          {item.fileNameMethod === 'fix' && item.fileName && (
            <input type="hidden" name={`${item.name}{id}@filename[]`} value={item.fileName} />
          )}
          {item.fileNameMethod === 'asis' && (
            <input type="hidden" name={`${item.name}{id}@filename[]`} value="@rawfilename" />
          )}
        </>
      )}
    </>
  );
}
