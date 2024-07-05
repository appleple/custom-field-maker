import React, { useEffect, useRef, useCallback } from 'react';
import { renderToString } from 'react-dom/server';
import { XmlEntities } from 'html-entities';
import { html as beautifyHtml } from 'js-beautify';
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/default.css';
import 'highlight.js/styles/xcode.css';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('xml', xml);
const entities = new XmlEntities();

export function Highlighter({ children, onHighlight = () => {} }) {
  const codeRef = useRef();

  useEffect(() => {
    buildSource(children);
  }, [children, buildSource]);

  const buildSource = useCallback(
    reactNode => {
      let html = renderToString(reactNode);
      html = html.replace(/&quot;/g, '"');
      html = html.replace(/data-tmp="(.*?)"/g, '$1');
      html = html.replace(/&lt;/g, '<');
      html = html.replace(/&gt;/g, '>');
      html = removeReactText(html);
      const encodedHtml = entities.encode(
        beautifyHtml(html, {
          unformatted: ['code', 'pre'],
          indent_inner_html: true,
          indent_char: ' ',
          indent_size: 2,
          sep: '\n',
        })
      );

      codeRef.current.innerHTML = encodedHtml;
      hljs.highlightBlock(codeRef.current);

      if (onHighlight) {
        onHighlight(encodedHtml);
      }
    },
    [onHighlight]
  );

  const removeReactText = html => {
    html = html.replace(/<!-- (\/?)reactroot(.*?)-->/g, '');
    html = html.replace(/ data-reactroot=""/g, '');
    return html;
  };

  return (
    <div>
      <pre className="acms-admin-customfield-maker">
        <code className="html" ref={codeRef} />
      </pre>
    </div>
  );
}
