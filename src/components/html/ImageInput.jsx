import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../store/MakerContext';
import { OptionValidator } from './OptionValidator';
import { OptionNoSearch } from './OptionNoSearch';

export function ImageInput(props) {
  const { item, id = '' } = props;
  const {
    preview: { mode, editMode, acmscss },
  } = useMakerContext();

  let attribute = { id, value: '', name: '', hiddenName: '' };
  switch (mode) {
    case 'customfield': {
      attribute = {
        value: `{${item.name}}`,
        name: item.name,
        hiddenName: 'field[]',
      };
      break;
    }
    case 'fieldgroup': {
      attribute = {
        value: `{${item.name}}`,
        name: `${item.name}[]`,
      };
      break;
    }
    case 'customunit': {
      attribute = {
        value: `{${item.name}}`,
        name: `${item.name}{id}`,
        hiddenName: 'unit[]',
      };
      break;
    }
    case 'unitgroup': {
      attribute = {
        value: item.name,
        name: `${item.name}{id}[]`,
      };
      break;
    }
  }

  return (
    <>
      {editMode === 'preview' ? null : `<!-- BEGIN_IF [{${item.name}@path}/nem] -->`}

      <img
        src={`%{ARCHIVES_DIR}{${item.name}@path}`}
        className={classnames({ 'acms-admin-img-responsive': acmscss, 'js-img_resize_preview': item.resize })}
        style={item.normalSize ? { width: `${item.normalSize}px` } : null}
        alt={`{${item.name}@alt}`}
      />
      <input type="hidden" name={`${item.name}@old`} value={`{${item.name}@path}`} />
      <div className={classnames({ 'acms-admin-form-checkbox': acmscss })}>
        <input type="checkbox" name={`${item.name}@edit`} value="delete" id={`input-checkbox-${item.name}@edit`} />
        <label htmlFor={`input-checkbox-${item.name}@edit`}>
          {acmscss && <i className="acms-admin-ico-checkbox" />}削除
        </label>
      </div>

      {editMode === 'preview' ? null : '<!-- ELSE -->'}

      <img
        alt=""
        src={`%{ARCHIVES_DIR}{${item.name}@path}`}
        className={classnames({
          'acms-admin-img-responsive': acmscss,
          'js-img_resize_preview': item.resize,
        })}
        style={item.normalSize ? { width: `${item.normalSize}px`, display: 'none' } : { display: 'none' }}
      />

      {editMode === 'preview' ? null : '<!-- END_IF -->'}

      <input type="file" name={item.name} size="20" className={classnames({ 'js-img_resize_input': item.resize })} />
      <br />
      {item.alt && (
        <span>
          代替テキスト:
          <input type="text" name={`${item.name}@alt`} value={`{${item.name}@alt}`} size="40" />
        </span>
      )}

      <input type="hidden" name={attribute.hiddenName} value={attribute.name} />
      <input type="hidden" name={`${item.name}:extension`} value="image" />
      {item.normalSize && <input type="hidden" name={`${item.name}@${item.normal}`} value={item.normalSize} />}
      {item.tiny && <input type="hidden" name={`${item.name}@${item.tiny}`} value={item.tinySize} />}
      {item.large && <input type="hidden" name={`${item.name}@${item.large}`} value={item.largeSize} />}
      {item.square && <input type="hidden" name={`${item.name}@${item.square}`} value={item.squareSize} />}
      <input type="hidden" name={`${item.name}@filename`} value="" />

      <OptionValidator item={item} />
      <OptionNoSearch name={item.name} noSearch={item.noSearch} />
    </>
  );
}
