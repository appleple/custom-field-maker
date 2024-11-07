import React, { useEffect, useCallback, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { decode } from 'html-entities';
import { html as beautifyHtml } from 'js-beautify';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/xcode.css';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('xml', xml);

export function Highlighter({ children, onHighlight = () => {} }) {
  const [source, setSource] = useState('');

  const buildSource = useCallback(
    (reactNode) => {
      let html = renderToStaticMarkup(reactNode);
      html = html.replace(/data-tmp="(.*?)"/g, '$1');
      html = beautifyHtml(decode(html, { level: 'html5' }), {
        unformatted: ['code', 'pre'],
        indent_inner_html: true,
        indent_char: ' ',
        indent_size: 2,
        eol: '\n',
      });

      const { value = '', code = '' } = hljs.highlight(html, { language: 'xml' });
      if (source !== value) {
        setSource(value);
        if (onHighlight) {
          onHighlight(code);
        }
      }
    },
    [onHighlight, source]
  );

  useEffect(() => {
    buildSource(children);
  }, [children, buildSource]);

  return (
    <div>
      <pre className="acms-admin-customfield-maker">
        <code className="html hljs" dangerouslySetInnerHTML={{ __html: source }} />
      </pre>
    </div>
  );
}
