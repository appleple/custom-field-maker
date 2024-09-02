import React, { Component } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { html as beautifyHtml } from 'js-beautify';
import { decode } from 'html-entities';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/default.css';
import 'highlight.js/styles/xcode.css';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('xml', xml);

export default class Highlighter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: '',
    };
  }

  componentDidUpdate() {
    this.buildSource();
  }

  componentDidMount() {
    this.buildSource();
  }

  buildSource() {
    const { source } = this.state;
    const { children } = this.props;
    let html = renderToStaticMarkup(children);
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
      this.setState({
        source: value,
      });
      if (this.props.onSourceGenerated) {
        this.props.onSourceGenerated(code);
      }
    }
  }

  removeReactText(html) {
    html = html.replace(/<!-- (\/?)react-text(.*?)-->/g, '');
    return html;
  }

  render() {
    return (
      <div>
        <pre className="acms-admin-customfield-maker">
          <code
            className="html hljs"
            dangerouslySetInnerHTML={{ __html: this.state.source }}
          />
        </pre>
      </div>
    );
  }
}
