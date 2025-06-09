import React from 'react';

export function MediaOption(props) {
  const {
    field: { mediaType, useDropArea, useFocusImage, dropAreaWidth, dropAreaHeight, focusImageWidth, focusImageHeight },
    setField,
  } = props;

  return (
    <div>
      <p style={{ marginBottom: '5px' }}>選べるメディアのタイプを選択</p>
      <div className="acms-admin-form-radio">
        <input
          type="checkbox"
          onChange={() => setField((prevState) => ({ ...prevState, mediaType: 'all' }))}
          checked={mediaType === 'all'}
          id="media-type-all-radio"
        />
        <label htmlFor="media-type-all-radio">
          <i className="acms-admin-ico-radio" />
          全てのタイプ
        </label>
      </div>
      <div className="acms-admin-form-radio">
        <input
          type="checkbox"
          onChange={() => setField((prevState) => ({ ...prevState, mediaType: 'image' }))}
          checked={mediaType === 'image'}
          id="media-type-image-radio"
        />
        <label htmlFor="media-type-image-radio">
          <i className="acms-admin-ico-radio" />
          画像のみ
        </label>
      </div>
      <div className="acms-admin-form-radio">
        <input
          type="checkbox"
          onChange={() => setField((prevState) => ({ ...prevState, mediaType: 'file' }))}
          checked={mediaType === 'file'}
          id="media-type-file-radio"
        />
        <label htmlFor="media-type-file-radio">
          <i className="acms-admin-ico-radio" />
          ファイルのみ
        </label>
      </div>
      <p style={{ marginBottom: '5px' }}>ドロップエリア</p>
      <div style={{ display: 'flex' }}>
        <div className="acms-admin-form-checkbox" style={{ paddingTop: '5px' }}>
          <input
            type="checkbox"
            onChange={() => {
              if (useDropArea) {
                setField((prevState) => ({ ...prevState, useDropArea: false }));
              } else {
                setField((prevState) => ({ ...prevState, useDropArea: true }));
              }
            }}
            checked={useDropArea}
            id="media-use-droparea"
          />
          <label htmlFor="media-use-droparea">
            <i className="acms-admin-ico-checkbox" />
            ドロップエリアを利用する
          </label>
        </div>
        {useDropArea && (
          <div>
            幅&nbsp;
            <input
              type="text"
              defaultValue={dropAreaWidth}
              onInput={(e) => {
                const value = e.target.value;
                if (!value) return;
                setField((prevState) => ({ ...prevState, dropAreaWidth: value }));
              }}
            />
            &nbsp;px
            <span style={{ display: 'inline-block', width: '15px', height: '1px' }} />
            高さ&nbsp;
            <input
              type="text"
              defaultValue={dropAreaHeight}
              onInput={(e) => {
                const value = e.target.value;
                if (!value) return;
                setField((prevState) => ({ ...prevState, dropAreaHeight: value }));
              }}
            />
            &nbsp;px
          </div>
        )}
      </div>
      <p style={{ marginBottom: '5px' }}>トリミング</p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="acms-admin-form-checkbox" style={{ lineHeight: '31px' }}>
          <input
            type="checkbox"
            onChange={() => {
              if (useFocusImage) {
                setField((prevState) => ({ ...prevState, useFocusImage: false }));
              } else {
                setField((prevState) => ({ ...prevState, useFocusImage: true }));
              }
            }}
            checked={useFocusImage}
            id="media-use-focusImage"
          />
          <label htmlFor="media-use-focusImage">
            <i className="acms-admin-ico-checkbox" />
            中心点を基準に画像をトリミングして表示する
          </label>
        </div>
        {useFocusImage && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>幅</span>
              <input
                type="text"
                defaultValue={focusImageWidth}
                onInput={(e) => {
                  const value = e.target.value;
                  if (!value) return;
                  setField((prevState) => ({ ...prevState, focusImageWidth: value }));
                }}
              />
              <span>px</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>高さ</span>
              <input
                type="text"
                defaultValue={focusImageHeight}
                onInput={(e) => {
                  const value = e.target.value;
                  if (!value) return;
                  setField((prevState) => ({ ...prevState, focusImageHeight: value }));
                }}
              />
              <span>px</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
