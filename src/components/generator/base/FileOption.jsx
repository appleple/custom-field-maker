export function FileOption(props) {
  const {
    field: { extension, fileName, fileNameMethod },
    setField,
  } = props;
  return (
    <div className="customFieldFileContainer">
      <div className="customFieldFileNameOptContainer">
        <div className="acms-admin-form-radio">
          <input
            type="radio"
            checked={fileNameMethod === 'random'}
            id="file-name-method-random"
            onChange={() => setField((prevState) => ({ ...prevState, fileNameMethod: 'random' }))}
          />
          <label htmlFor="file-name-method-random">
            <i className="acms-admin-ico-radio" />
            ファイル名（ランダム）
          </label>
        </div>
        <div className="acms-admin-form-radio">
          <input
            type="radio"
            checked={fileNameMethod === 'fix'}
            id="file-name-method-fix"
            onChange={() => setField((prevState) => ({ ...prevState, fileNameMethod: 'fix' }))}
          />
          <label htmlFor="file-name-method-fix">
            <i className="acms-admin-ico-radio" />
            ファイル名（固定）
          </label>
        </div>
        <div className="acms-admin-form-radio">
          <input
            type="radio"
            checked={fileNameMethod === 'asis'}
            id="file-name-method-asis"
            onChange={() => setField((prevState) => ({ ...prevState, fileNameMethod: 'asis' }))}
          />
          <label htmlFor="file-name-method-asis">
            <i className="acms-admin-ico-radio" />
            ファイル名（そのまま）
          </label>
        </div>
      </div>
      <div>
        <div className="customFieldInputGroup customFieldInputFileGroup">
          {fileNameMethod === 'random' && <input type="text" placeholder="ランダムの文字列が入ります" disabled />}
          {fileNameMethod === 'fix' && (
            <input
              type="text"
              defaultValue={fileName}
              onInput={(e) => {
                const value = e.target.value;
                setField((prevState) => ({ ...prevState, fileName: value }));
              }}
              placeholder="例）example.pdf"
            />
          )}
          {fileNameMethod === 'asis' && <input type="text" placeholder="アップロードされたファイル名" disabled />}
        </div>
      </div>
      <div>
        <p>拡張子制限（pdfなど）</p>
        <input
          type="text"
          defaultValue={extension}
          onInput={(e) => {
            const value = e.target.value;
            setField((prevState) => ({ ...prevState, extension: value }));
          }}
          placeholder="例）pdf"
        />
      </div>
    </div>
  );
}
