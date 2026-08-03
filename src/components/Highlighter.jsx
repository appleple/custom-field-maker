import { useEffect, useCallback, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { decode } from 'html-entities';
import { html as beautifyHtml } from 'js-beautify';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import twig from 'highlight.js/lib/languages/twig';
import '../assets/atom-one-dark.css';

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('twig', twig);
hljs.configure({
  ignoreUnescapedHTML: true,
});

export function Highlighter({ children, onHighlight = () => {} }) {
  const [rawSource, setRawSource] = useState('');

  const buildSource = useCallback(
    (reactNode) => {
      let html = renderToStaticMarkup(reactNode);
      html = html.replace(/data-tmp="(.*?)"/g, '$1');
      // renderToStaticMarkup の出力はタグ間に空白を含まないため、この時点では
      // "><" は必ずタグの境界（属性値やテキストは常にエンティティ化されている）。
      // js-beautify（v1.8.0 以降）は inline タグ同士を改行なしで詰めてしまうため、
      // タグ境界にあらかじめ改行を入れて明示的に行分けする。
      html = html.replace(/></g, '>\n<');
      html = beautifyHtml(decode(html, { level: 'html5' }), {
        unformatted: ['code', 'pre'],
        indent_inner_html: true,
        indent_char: ' ',
        indent_size: 2,
        eol: '\n',
      });

      const { value = '', code = '' } = hljs.highlight(html, { language: 'xml' });
      if (rawSource !== value) {
        setRawSource(value);
        if (onHighlight) {
          onHighlight(code);
        }
      }
    },
    [onHighlight, rawSource]
  );

  useEffect(() => {
    buildSource(children);
  }, [children, buildSource]);

  return (
    <div>
      <pre className="acms-admin-customfield-maker customFIeldmakerHeilighter">
        <code
          className="html twig acms-admin-hljs"
          dangerouslySetInnerHTML={{ __html: rawSource.replace(/class="hljs-/g, 'class="acms-admin-hljs-') }}
        />
      </pre>
    </div>
  );
}
