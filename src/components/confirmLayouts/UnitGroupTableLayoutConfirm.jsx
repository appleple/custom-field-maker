import React from 'react';
import classnames from 'classnames';
import { useMakerContext } from '../../stores/MakerContext';
import { WrapTable } from '../html/WrapTable';
import { ConditionalWrap } from '../ConditionalWrap';

export function UnitGroupTableLayoutConfirm() {
  const {
    state: { unitgroup },
    preview: { acmscss, direction },
  } = useMakerContext();

  return (
    <>
      {unitgroup.title && <h2 className={classnames({ 'acms-admin-admin-title2': acmscss })}>{unitgroup.title}</h2>}
      <table className={classnames({ 'adminTable acms-admin-table-admin-edit': acmscss })}>
        {direction === 'horizontal' && (
          <>
            {unitgroup && (
              <thead className={classnames({ 'acms-admin-hide-sp': acmscss })}>
                <tr>
                  {unitgroup.items.map((item, index) => (
                    <th key={index} className={classnames({ 'acms-admin-table-left': acmscss })}>
                      {item.title}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
          </>
        )}
        <tbody>
          {/*
            Text nodes cannot appear as a child of <tbody> というエラーが出るがReactの仕様のためしかたない。
          */}
          {`<!-- BEGIN ${unitgroup.name}:loop -->`}
          <tr>
            <ConditionalWrap
              condition={direction === 'vertical'}
              wrap={(children) => (
                <td>
                  <table>
                    <tbody>{children}</tbody>
                  </table>
                </td>
              )}
            >
              {unitgroup.items.map((item, index) => {
                if (
                  item.type === 'text' ||
                  item.type === 'tel' ||
                  item.type === 'number' ||
                  item.type === 'email' ||
                  item.type === 'password'
                ) {
                  return (
                    <WrapTable key={index} title={item.title}>
                      <td>{`{${item.name}}`}</td>
                    </WrapTable>
                  );
                } else if (item.type === 'textarea') {
                  return (
                    <WrapTable key={index} title={item.title}>
                      <td>{`{${item.name}}[escape|nl2br]`}</td>
                    </WrapTable>
                  );
                } else if (item.type === 'selectbox') {
                  return (
                    <WrapTable key={index} title={item.title}>
                      <td>
                        {item.option.map((option, optionIndex) => {
                          if (!option.label) {
                            return null;
                          }
                          return (
                            <div key={optionIndex}>
                              {`<!-- BEGIN_IF [{${item.name}}/eq/${option.value}] -->`}
                              {option.label}
                              {'<!-- END_IF -->'}
                            </div>
                          );
                        })}
                      </td>
                    </WrapTable>
                  );
                } else if (item.type === 'radioButton') {
                  return (
                    <WrapTable key={index} title={item.title}>
                      <td>
                        {item.option.map((option, optionIndex) => {
                          if (!option.label) {
                            return null;
                          }
                          return (
                            <div key={optionIndex}>
                              {`<!-- BEGIN_IF [{${item.name}}/eq/${option.value}] -->`}
                              {option.label}
                              {'<!-- END_IF -->'}
                            </div>
                          );
                        })}
                      </td>
                    </WrapTable>
                  );
                } else if (item.type === 'checkbox') {
                  return (
                    <WrapTable key={index} title={item.title}>
                      <td>
                        {item.option.map((option, optionIndex) => {
                          if (!option.label) {
                            return null;
                          }
                          return (
                            <div key={optionIndex}>
                              {`<!-- BEGIN_IF [{${item.name}}/eq/${option.value}] -->`}
                              {option.label}
                              {'<!-- END_IF -->'}
                            </div>
                          );
                        })}
                      </td>
                    </WrapTable>
                  );
                } else if (item.type === 'file') {
                  let src = '/images/fileicon/';
                  let alt = 'file';
                  if (item.extension) {
                    src += `${item.extension}.svg`;
                    alt += item.extension;
                  } else {
                    src += 'file.svg';
                  }
                  return (
                    <WrapTable key={index} title={item.title}>
                      <td>
                        {`<!-- BEGIN ${item.name}@path:veil -->`}
                        <a href={`%{ARCHIVES_DIR}{${item.name}@path}`}>
                          <img src={src} width="64" height="64" alt={alt} />
                        </a>
                        {`<!-- END ${item.name}@path:veil -->`}
                      </td>
                    </WrapTable>
                  );
                } else if (item.type === 'image') {
                  return (
                    <WrapTable key={index} title={item.title}>
                      <td>
                        {`<!-- BEGIN ${item.name}@path:veil -->`}
                        <img
                          src={`%{ARCHIVES_DIR}{${item.name}@path}`}
                          className={classnames({ 'acms-admin-img-responsive': acmscss })}
                          alt={`{${item.name}@alt}`}
                        />
                        {`<!-- END ${item.name}@path:veil -->`}
                      </td>
                    </WrapTable>
                  );
                } else if (item.type === 'media') {
                  return (
                    <WrapTable key={index} title={item.title}>
                      <td>
                        {`<!-- BEGIN_IF [{${item.name}@type}/eq/file] -->`}
                        <a href={`{${item.name}@path}`}>
                          <img
                            alt={`{${item.name}@alt}`}
                            src={`{${item.name}@thumbnail}`}
                            style={{ width: '64px', height: 'auto' }}
                          />
                        </a>
                        {`<!-- END_IF -->`}

                        {`<!-- BEGIN_IF [{${item.name}@type}/eq/image] -->`}
                        {`<a
                          <!-- BEGIN_IF [{${item.name}@link}/nem] -->
                          href={${item.name}@link}
                          <!-- END_IF -->
                          class="acms-inline-block"
                          style="width: ${item.focusImageWidth}px; height: ${item.focusImageHeight}px;"
                        >`}
                        {item.useFocusImage && (
                          <img
                            className="js-focused-image"
                            data-focus-x={`{${item.name}@focalX}`}
                            data-focus-y={`{${item.name}@focalY}`}
                            alt={`{${item.name}@alt}`}
                            src={`%{MEDIA_ARCHIVES_DIR}{${item.name}@path}[resizeImg(${item.focusImageWidth})]`}
                          />
                        )}
                        {!item.useFocusImage && (
                          <img alt={`{${item.name}@alt}`} src={`%{MEDIA_ARCHIVES_DIR}{${item.name}@path}`} />
                        )}
                        {`<!-- BEGIN_IF [{${item.name}@link}/nem] -->`}
                        {`</a>`}
                        {`<!-- END_IF -->`}

                        {`<!-- BEGIN_IF [{${item.name}@text}/nem] -->`}
                        <p>{`{${item.name}@text}`}</p>
                        {'<!-- END_IF -->'}
                        {'<!-- END_IF -->'}
                      </td>
                    </WrapTable>
                  );
                } else if (item.type === 'blockEditor') {
                  return (
                    <WrapTable key={index} title={item.title}>
                      <td>{`{${item.name}}[raw]`}</td>
                    </WrapTable>
                  );
                } else if (item.type === 'liteEditor') {
                  return (
                    <WrapTable key={index} title={item.title}>
                      <td>{`{${item.name}}[raw]`}</td>
                    </WrapTable>
                  );
                } else if (item.type === 'table') {
                  return (
                    <WrapTable key={index} title={item.title}>
                      <td>{`{${item.name}}[raw]`}</td>
                    </WrapTable>
                  );
                }
                return null;
              })}
            </ConditionalWrap>
          </tr>
          {/*
            Text nodes cannot appear as a child of <tbody> というエラーが出るがReactの仕様のためしかたない。
          */}
          {`<!-- END ${unitgroup.name}:loop -->`}
        </tbody>
      </table>
    </>
  );
}
