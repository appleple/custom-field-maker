import React, { useEffect } from 'react';
import { MakerContextProvider, useMakerContext } from '../stores/MakerContext';
import { EditorModeNavigator } from '../components/navigator/EditorModeNavigator';
import { PreviewModeNavigator } from '../components/navigator/PreviewModeNavigator';
import { PreviewNavigator } from '../components/navigator/PreviewNavigator';
import { Field } from '../components/generator/Field';
import { FieldGroup } from '../components/generator/FieldGroup';
import { Unit } from '../components/generator/Unit';
import { UnitGroup } from '../components/generator/UnitGroup';
import { FieldSource } from '../components/FieldSource';
import { FieldGroupSource } from '../components/FieldGroupSource';
import { UnitSource } from '../components/UnitSource';
import { UnitGroupSource } from '../components/UnitGroupSource';
import { FieldConfirmSource } from '../components/FieldConfirmSource';
import { FieldGroupConfirmSource } from '../components/FieldGroupConfirmSource';
import { UnitConfirmSource } from '../components/UnitConfirmSource';
import { UnitGroupConfirmSource } from '../components/UnitGroupConfirmSource';
import { Highlighter } from '../components/Highlighter';
import { decode } from 'html-entities';
import { STORAGENAME } from '../constants';

function CustomFieldMaker() {
  const { setSource, state, preview, clipboard } = useMakerContext();

  const onSource = (encodedHtml) => {
    const decodedHtml = decode(encodedHtml);
    if (clipboard.source !== decodedHtml) {
      setSource(decodedHtml);
    }
  };

  useEffect(() => {
    localStorage.setItem(STORAGENAME, JSON.stringify(state));
  }, [state]);

  return (
    <div className="customFieldContainer acms-admin-form">
      <div>
        <EditorModeNavigator />
      </div>

      <section>
        {{
          customfield: <Field />,
          fieldgroup: <FieldGroup />,
          customunit: <Unit />,
          unitgroup: <UnitGroup />,
        }[preview.mode] || null}
      </section>

      <section>
        <h2>コードプレビュー</h2>
        <div className="acms-admin-tabs">
          <PreviewModeNavigator />
          
          {preview.editMode === 'source' && (
            <div
              id="source"
              className="acms-admin-tabs-panel"
              aria-hidden={preview.editMode !== 'source'}
              role="tabpanel"
              aria-labelledby="source-tab"
            >
              <div>
                <PreviewNavigator />

                <div className="acms-admin-py-4">
                  <Highlighter onHighlight={onSource}>
                    <MakerContextProvider state={state} preview={preview} clipboard={clipboard}>
                      {{
                        customfield: <FieldSource />,
                        fieldgroup: <FieldGroupSource />,
                        customunit: <UnitSource />,
                        unitgroup: <UnitGroupSource />,
                      }[preview.mode] || null}
                    </MakerContextProvider>
                  </Highlighter>
                </div>
              </div>
            </div>
          )}

          <div
            id="preview"
            className="acms-admin-tabs-panel"
            style={{ display: preview.editMode === 'preview' ? 'block' : 'none' }}
            aria-hidden={preview.editMode !== 'preview'}
            role="tabpanel"
            aria-labelledby="preview-tab"
          >
            <div>
              <PreviewNavigator />

              <div className="acms-admin-py-4">
                <div
                  style={{
                    padding: '16px',
                    margin: '0',
                    backgroundColor: '#F0F0F0',
                    minHeight: '18.398px',
                  }}
                >
                  {{
                    customfield: <FieldSource />,
                    fieldgroup: <FieldGroupSource />,
                    customunit: <UnitSource />,
                    unitgroup: <UnitGroupSource />,
                  }[preview.mode] || null}
                </div>
              </div>
            </div>
          </div>

          {preview.editMode === 'confirm' && (
            <div
              id="confirm"
              className="acms-admin-tabs-panel"
              aria-hidden={preview.editMode !== 'confirm'}
              role="tabpanel"
              aria-labelledby="confirm-tab"
            >
              <div>
                <PreviewNavigator />

                <div className="acms-admin-py-4">
                  <Highlighter onHighlight={onSource}>
                    <MakerContextProvider state={state} preview={preview} clipboard={clipboard}>
                      {{
                        customfield: <FieldConfirmSource />,
                        fieldgroup: <FieldGroupConfirmSource />,
                        customunit: <UnitConfirmSource />,
                        unitgroup: <UnitGroupConfirmSource />,
                      }[preview.mode] || null}
                    </MakerContextProvider>
                  </Highlighter>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default CustomFieldMaker;
