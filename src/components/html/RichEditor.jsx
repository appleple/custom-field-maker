import React from 'react';
import { useMakerContext } from '../../store/MakerContext';

export function RichEditor(props) {
  const { item, id = '', isValue = true } = props;
  const {
    preview: { mode, direction },
  } = useMakerContext();

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
            <input id={id} type="hidden" name="field[]" value={item.name} />
            <input type="hidden" name={`${item.name}:extension`} value="rich-editor" />
          </div>
        </ConditionalWrap>
      )}

      {mode === 'fieldgroup' &&
        wrapTable(
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
                    id={id}
                    className="js-smartblock-body"
                    type="hidden"
                    name={`${item.name}[]`}
                    value={`{${item.name}@html}`}
                  />
                  <input type="hidden" name={`${item.name}:extension`} value="rich-editor" />
                </>
              ) : (
                <input id={id} className="js-smartblock-body" type="hidden" name={`${item.name}[]`} value="" />
              )}
            </div>
          </ConditionalWrap>,
          item.title
        )}
    </>
  );
}
