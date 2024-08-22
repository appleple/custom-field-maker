import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionNoSearch } from './OptionNoSearch';

export function FileInput(props) {
  const { item, id, isValue = true } = props;
  const {
    preview: { acmscss, editMode, mode, direction },
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
    case 'customfield': {
      attribute = {
        id,
        value: `${item.name}`,
        name: item.name,
        hiddenName: 'field[]',
      };
      break;
    }
    case 'fieldgroup': {
      attribute = {
        id,
        value: `{${item.name}}`,
        name: `${item.name}[]`,
      };
      break;
    }
    case 'customunit': {
      attribute = {
        id,
        value: `{${item.name}}`,
        name: `${item.name}{id}`,
        hiddenName: 'unit[]',
      };
      break;
    }
    case 'unitgroup': {
      attribute = {
        id,
        value: item.name,
        name: `${item.name}{id}[]`,
      };
      break;
    }
  }

  const wrapTable = (children, title) => {
    return (
      <ConditionalWrap
        condition={direction === 'vertical'}
        wrap={(child) => (
          <tr>
            <th>{title}</th>
            {child}
          </tr>
        )}
      >
        {children}
      </ConditionalWrap>
    );
  };

  const ConditionalWrap = ({ condition, wrap, children }) => (condition ? wrap(children) : children);

  return (
    <>
      {mode === 'customfield' && (
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
          {item.fileNameMethod === 'asis' && (
            <input type="hidden" name={`${item.name}@filename`} value="@rawfilename" />
          )}

          <OptionNoSearch name={item.name} noSearch={item.noSearch} />
        </>
      )}

      {mode === 'fieldgroup' &&
        wrapTable(
          <>
            {isValue && (
              <>
                {editMode === 'preview' ? null : `<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}
                <div className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
                  <input
                    type="checkbox"
                    name={`${item.name}@edit[]`}
                    value="delete"
                    id={`input-checkbox-${item.name}{i}@edit[]`}
                  />
                  <label htmlFor={`input-checkbox-${item.name}{i}@edit[]`}>
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
            <input type="file" name={`${item.name}[]`} />
            <OptionValidator item={item} />
          </>,
          item.title
        )}
    </>
  );
}
