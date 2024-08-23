import React, { useEffect } from 'react';
import { MakerContextProvider, useMakerContext } from '../store/MakerContext';
import { EditorModeNavigator } from '../components/navigator/EditorModeNavigator';
import { PreviewModeNavigator } from '../components/navigator/PreviewModeNavigator';
import { PreviewNavigator } from '../components/navigator/PreviewNavigator';
import { Field } from '../components/genelator/Field';
import { FieldGroup } from '../components/genelator/FieldGroup';
import { Unit } from '../components/genelator/Unit';
import { UnitGroup } from '../components/genelator/UnitGroup';
import { FieldSource } from '../components/FieldSource';
import { FieldGroupSource } from '../components/FieldGroupSource';
import { UnitSource } from '../components/UnitSource';
import { UnitGroupSource } from '../components/UnitGroupSource';
import { FieldConfirmSource } from '../components/FieldConfirmSource';
import { Highlighter } from '../components/Highlighter';
import { XmlEntities } from 'html-entities';

const entities = new XmlEntities();

function CustomFieldMaker() {
  const { setSource, state, preview, clipboard } = useMakerContext();

  const onSource = (encodedHtml) => {
    const decodedHtml = entities.decode(encodedHtml);
    if (clipboard.source !== decodedHtml) {
      setSource(decodedHtml);
    }
  };

  useEffect(() => {
    console.log(state.customunit);
    console.log(preview.mode);
  }, [state.customunit, preview.mode]);

  return (
    <div className="acms-admin-form">
      <EditorModeNavigator />
      {preview.mode === 'customfield' && <Field />}
      {preview.mode === 'fieldgroup' && <FieldGroup />}
      {preview.mode === 'customunit' && <Unit />}
      {preview.mode === 'unitgroup' && <UnitGroup />}

      <div className="acms-admin-tabs">
        <PreviewModeNavigator />

        <div className="acms-admin-tabs-panel">
          <div style={{ backgroundColor: '#F1F1F1', padding: '20px 15px' }}>
            <div className="clearfix">
              <PreviewNavigator />

              {preview.editMode === 'source' && (
                <Highlighter onHighlight={onSource}>
                  <MakerContextProvider state={state} preview={preview} clipboard={clipboard}>
                    {preview.mode === 'customfield' && <FieldSource />}
                    {preview.mode === 'fieldgroup' && <FieldGroupSource />}
                    {preview.mode === 'customunit' && <UnitSource />}
                    {preview.mode === 'unitgroup' && <UnitGroupSource />}
                  </MakerContextProvider>
                </Highlighter>
              )}

              {preview.editMode === 'preview' && (
                <>
                  {preview.mode === 'customfield' && <FieldSource />}
                  {preview.mode === 'fieldgroup' && <FieldGroupSource />}
                  {preview.mode === 'customunit' && <UnitSource />}
                  {preview.mode === 'unitgroup' && <UnitGroupSource />}
                </>
              )}

              {preview.editMode === 'confirm' && (
                <Highlighter onHighlight={onSource}>
                  <MakerContextProvider state={state} preview={preview} clipboard={clipboard}>
                    {(preview.mode === 'customfield' || preview.mode === 'customunit') && <FieldConfirmSource />}
                    {/* {(preview.mode === 'fieldgroup' || preview.mode === 'unitgroup') && <FieldGroupConfurmSource />} */}
                  </MakerContextProvider>
                </Highlighter>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomFieldMaker;
