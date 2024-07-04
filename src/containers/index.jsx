import React from 'react';
import { useMakerContext } from '../store/MakerContext';
import { EditorModeNavigator } from '../components/navigator/EditorModeNavigator';
import { PreviewModeNavigator } from '../components/navigator/PreviewModeNavigator';
import { PreviewNavigator } from '../components/navigator/PreviewNavigator';
import Field from '../components/genelator/Field';
import FieldGroup from '../components/genelator/FieldGroup';
import Unit from '../components/genelator/Unit';
import UnitGroup from '../components/genelator/UnitGroup';
import { FieldSource } from '../components/FieldSource';
import { FieldGroupSource } from '../components/FieldGroupSource';
import { Highlighter } from '../components/Highlighter';

function CustomFieldMaker() {
  const { customfield, fieldgroup, customunit, unitgroup, preview } = useMakerContext();

  return (
    <>
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
                <Highlighter>
                  <p>Highlighter</p>
                  {preview.mode === 'normal' && <FieldSource customfield={customfield} />}
                  {preview.mode === 'unit' && <FieldSource customfield={customunit} />}
                  {preview.mode === 'group' && <FieldGroupSource fieldgroup={fieldgroup} />}
                  {preview.mode === 'unit-group' && <FieldGroupSource fieldgroup={unitgroup} />}
                </Highlighter>
              )}

              {preview.editMode === 'preview' && (
                <>
                  <p>Preview</p>
                  {preview.mode === 'normal' && <FieldSource customfield={customfield} />}
                  {preview.mode === 'group' && <FieldGroupSource fieldgroup={fieldgroup} />}
                  {preview.mode === 'unit' && <FieldSource customfield={customunit} />}
                  {preview.mode === 'unit-group' && <FieldGroupSource fieldgroup={unitgroup} />}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomFieldMaker;
