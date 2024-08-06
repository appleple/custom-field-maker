import React from 'react';
import { MakerContextProvider, useMakerContext } from '../store/MakerContext';
import { EditorModeNavigator } from '../components/navigator/EditorModeNavigator';
import { PreviewModeNavigator } from '../components/navigator/PreviewModeNavigator';
import { PreviewNavigator } from '../components/navigator/PreviewNavigator';
import { Field } from '../components/genelator/Field';
import { FieldGroup } from '../components/genelator/FieldGroup';
import Unit from '../components/genelator/Unit';
import UnitGroup from '../components/genelator/UnitGroup';
import { FieldSource } from '../components/FieldSource';
import { FieldGroupSource } from '../components/FieldGroupSource';
import { Highlighter } from '../components/Highlighter';
import { XmlEntities } from 'html-entities';

const entities = new XmlEntities();

function CustomFieldMaker() {
  const {
    setSource,
    customfield,
    fieldgroup,
    customunit,
    unitgroup,
    preview,
    clipboard: { source },
  } = useMakerContext();

  const onSource = (encodedHtml) => {
    const decodedHtml = entities.decode(encodedHtml);
    if (source !== decodedHtml) {
      setSource(decodedHtml);
    }
  };

  return (
    <div className="acms-admin-form">
      <EditorModeNavigator />
      {preview.mode === 'normal' && <Field />}
      {preview.mode === 'group' && <FieldGroup />}
      {preview.mode === 'unit' && <Unit />}
      {preview.mode === 'unit-group' && <UnitGroup />}

      <div className="acms-admin-tabs">
        <PreviewModeNavigator />

        <div className="acms-admin-tabs-panel">
          <div style={{ backgroundColor: '#F1F1F1', padding: '20px 15px' }}>
            <div className="clearfix">
              <PreviewNavigator />

              {preview.editMode === 'source' && (
                <Highlighter onHighlight={onSource}>
                  <MakerContextProvider
                    customfield={customfield}
                    customunit={customunit}
                    fieldgroup={fieldgroup}
                    unitgroup={unitgroup}
                    preview={preview}
                  >
                    {preview.mode === 'normal' && <FieldSource />}
                    {preview.mode === 'group' && <FieldGroupSource />}
                    {/* {preview.mode === 'unit' && <FieldSource customfield={customunit} />} */}
                    {/* {preview.mode === 'unit-group' && <FieldGroupSource fieldgroup={unitgroup} />} */}
                  </MakerContextProvider>
                </Highlighter>
              )}

              {preview.editMode === 'preview' && (
                <>
                  {preview.mode === 'normal' && <FieldSource />}
                  {preview.mode === 'group' && <FieldGroupSource />}
                  {/* {preview.mode === 'unit' && <FieldSource customfield={customunit} />} */}
                  {/* {preview.mode === 'unit-group' && <FieldGroupSource fieldgroup={unitgroup} />} */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomFieldMaker;
