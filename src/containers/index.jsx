import React from 'react';
import { MakerContextProvider, useMakerContext } from '../store/MakerContext';
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

function CustomFieldMaker() {
  const { setSource, state, preview, clipboard } = useMakerContext();

  const onSource = (encodedHtml) => {
    const decodedHtml = decode(encodedHtml);
    if (clipboard.source !== decodedHtml) {
      setSource(decodedHtml);
    }
  };

  return (
    <div className="customFieldContainer acms-admin-form">
      <div>
        <EditorModeNavigator />
      </div>

      <section>
        {preview.mode === 'customfield' && <Field />}
        {preview.mode === 'fieldgroup' && <FieldGroup />}
        {preview.mode === 'customunit' && <Unit />}
        {preview.mode === 'unitgroup' && <UnitGroup />}
      </section>

      <section>
        <h2>コードプレビュー</h2>
        <div className="acms-admin-tabs">
          <PreviewModeNavigator />

          <div className="acms-admin-tabs-panel">
            <div>
              <div className="clearfix">
                <PreviewNavigator />

                <ul>
                  <li
                    style={{
                      display: preview.editMode === 'source' ? 'block' : 'none',
                    }}
                  >
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
                  </li>

                  <li
                    style={{
                      display: preview.editMode === 'preview' ? 'block' : 'none',
                    }}
                  >
                    <div
                      style={{
                        borderRadius: '5px',
                        padding: '20px',
                        margin: '1em 0',
                        backgroundColor: '#F0F0F0',
                        minHeight: '19.391px',
                      }}
                    >
                      {{
                        customfield: <FieldSource />,
                        fieldgroup: <FieldGroupSource />,
                        customunit: <UnitSource />,
                        unitgroup: <UnitGroupSource />,
                      }[preview.mode] || null}
                    </div>
                  </li>

                  <li
                    style={{
                      display: preview.editMode === 'confirm' ? 'block' : 'none',
                    }}
                  >
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
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomFieldMaker;
