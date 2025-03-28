import React from 'react';
import { useMakerContext } from '../../store/MakerContext';

export function RichEditor(props) {
  const { item, isValue = true } = props;
  const {
    preview: { mode },
  } = useMakerContext();

  const ConditionalWrap = ({ condition, wrap, children }) => {
    return condition ? wrap(children) : children;
  };

  return (
    <>
      {mode === 'customfield' && (
        <ConditionalWrap
          condition={item.useExpand}
          wrap={(children) => (
            <div className="js-expand js-acms-expand">
              <div className="js-acms-expand-inner">
                <button className="js-expand-btn js-acms-expand-btn" type="button">
                  <i className="acms-admin-icon acms-admin-icon-expand-arrow js-expand-icon" />
                </button>
                {children}
              </div>
            </div>
          )}
        >
          <div
            className="js-smartblock"
            data-heading-start={item.startHeadingLevel}
            data-heading-end={item.endHeadingLevel}
          >
            <div className="js-smartblock-edit" />
            <input className="js-smartblock-body" type="hidden" name={item.name} value={`{${item.name}@html}`} />
            <input type="hidden" name="field[]" value={item.name} />
            <input type="hidden" name={`${item.name}:extension`} value="rich-editor" />
          </div>
        </ConditionalWrap>
      )}

      {mode === 'fieldgroup' && (
        <ConditionalWrap
          condition={item.useExpand}
          wrap={(children) => (
            <div className="js-expand js-acms-expand">
              <div className="js-acms-expand-inner">
                <button className="js-expand-btn js-acms-expand-btn" type="button">
                  <i className="acms-admin-icon acms-admin-icon-expand-arrow js-expand-icon" />
                </button>
                {children}
              </div>
            </div>
          )}
        >
          <div
            className="js-smartblock"
            data-heading-start={item.startHeadingLevel}
            data-heading-end={item.endHeadingLevel}
          >
            <div className="js-smartblock-edit" />
            {isValue ? (
              <>
                <input
                  className="js-smartblock-body"
                  type="hidden"
                  name={`${item.name}[]`}
                  value={`{${item.name}@html}`}
                />
                <input type="hidden" name={`${item.name}:extension`} value="rich-editor" />
              </>
            ) : (
              <input className="js-smartblock-body" type="hidden" name={`${item.name}[]`} value="" />
            )}
          </div>
        </ConditionalWrap>
      )}

      {mode === 'customunit' && (
        <ConditionalWrap
          condition={item.useExpand}
          wrap={(children) => (
            <div className="js-expand js-acms-expand">
              <div className="js-acms-expand-inner">
                <button className="js-expand-btn js-acms-expand-btn" type="button">
                  <i className="acms-admin-icon acms-admin-icon-expand-arrow js-expand-icon" />
                </button>
                {children}
              </div>
            </div>
          )}
        >
          <div
            className="js-smartblock"
            data-heading-start={item.startHeadingLevel}
            data-heading-end={item.endHeadingLevel}
          >
            <div className="js-smartblock-edit" />
            <input
              className="js-smartblock-body"
              type="hidden"
              name={`${item.name}{id}`}
              value={`{${item.name}@html}`}
            />
            <input type="hidden" name="unit{id}[]" value={`${item.name}{id}`} />
            <input type="hidden" name={`${item.name}{id}:extension`} value="rich-editor" />
          </div>
        </ConditionalWrap>
      )}

      {mode === 'unitgroup' && (
        <>
          <ConditionalWrap
            condition={item.useExpand}
            wrap={(children) => (
              <div className="js-expand js-acms-expand">
                <div className="js-acms-expand-inner">
                  <button className="js-expand-btn js-acms-expand-btn" type="button">
                    <i className="acms-admin-icon acms-admin-icon-expand-arrow js-expand-icon" />
                  </button>
                  {children}
                </div>
              </div>
            )}
          >
            <div
              className="js-smartblock"
              data-heading-start={item.startHeadingLevel}
              data-heading-end={item.endHeadingLevel}
            >
              <div className="js-smartblock-edit" />
              {isValue ? (
                <input
                  className="js-smartblock-body"
                  type="hidden"
                  name={`${item.name}{id}[]`}
                  value={`{${item.name}@html}`}
                />
              ) : (
                <>
                  <input className="js-smartblock-body" type="hidden" name={`${item.name}{id}[]`} value="" />
                  <input type="hidden" name={`${item.name}{id}:extension`} value="rich-editor" />
                </>
              )}
            </div>
          </ConditionalWrap>
        </>
      )}
    </>
  );
}
